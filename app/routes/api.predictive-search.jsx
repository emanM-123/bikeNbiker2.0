import {json} from '@shopify/remix-oxygen';
import {NO_PREDICTIVE_SEARCH_RESULTS} from '~/components/Search';

const DEFAULT_SEARCH_TYPES = [
  'ARTICLE',
  'COLLECTION',
  'PAGE',
  'PRODUCT',
  'QUERY',
];

/**
 * Fetches the search results from the predictive search API
 * requested by the SearchForm component
 * @param {LoaderFunctionArgs}
 */
export async function action({request, params, context}) {
  if (request.method !== 'POST') {
    throw new Error('Invalid request method');
  }

  const search = await fetchPredictiveSearchResults({
    params,
    request,
    context,
  });

  return json(search);
}

/**
 * @param {Pick<LoaderFunctionArgs, 'params' | 'context' | 'request'>}
 */
async function fetchPredictiveSearchResults({params, request, context}) {
  const url = new URL(request.url);
  const mongoUrl="https://ap-south-1.aws.data.mongodb-api.com/app/data-obqhs/endpoint/data/v1/action/aggregate";
  const searchParams = new URLSearchParams(url.search);
  let body;
  try {
    body = await request.formData();
  } catch (error) {}
  const searchTerm = String(body?.get('q') || searchParams.get('q') || '');
  const limit = Number(body?.get('limit') || searchParams.get('limit') || 10);
  const rawTypes = String(
    body?.get('type') || searchParams.get('type') || 'ANY',
  );
  const searchTypes =
    rawTypes === 'ANY'
      ? DEFAULT_SEARCH_TYPES
      : rawTypes
          .split(',')
          .map((t) => t.toUpperCase())
          .filter((t) => DEFAULT_SEARCH_TYPES.includes(t));

  if (!searchTerm) {
    return {
      searchResults: {results: null, totalResults: 0},
      searchTerm,
      searchTypes,
    };
  }

  const data = await context.storefront.query(PREDICTIVE_SEARCH_QUERY, {
    variables: {
      limit,
      limitScope: 'EACH',
      searchTerm,
      types: searchTypes,
    },
  });


  const response = await fetch(mongoUrl, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'api-key':'p6iDzr1GTWhADsQbAX0CkGtkYP1R5aEUqcYhmF6mQQ2smGSixOBiBC9JGrO7vqvZ',
          },
          body: JSON.stringify({
        "dataSource": "Cluster0",
        "database": "Bikenbiker",
        "collection": "Products",
        "pipeline": [
            {
                "$search": {
                    "index": "productsAutoComplete",
                "compound": {
            "should": [
                {
                    "autocomplete": {
                        "query":searchTerm,
                        "path": "title"
                    }
                },
                {
                    "autocomplete": {
                        "query":searchTerm,
                        "path": "variants.sku"
                    }
                }
            ]
        }
                }
            },
            {
                "$limit": 10
            },
            {
                "$project": {
                    "_id": 0,
                    "title": 1,
                    "images":1,
                    "vendor": 1,
                  "handle": 1,
                    "variants.sku": 1,
                    "variants.price": 1,
                    "score": {
                        "$meta": "searchScore"
                    }
                }
            }
        ]
    })
        });

  	if (!response.ok) {
          throw new Error(
            `Error fetching from rick and morty api: ${response.statusText}`,
          );
        }

        const json = await response.json();

  if (!data) {
    throw new Error('No data returned from Shopify API');
  }
data.predictiveSearch.mongo = json.documents;
  console.log(data.predictiveSearch);
  const searchResults = normalizePredictiveSearchResults(
    data.predictiveSearch,
    params.locale,
  );

  return {searchResults, searchTerm, searchTypes};
}

/**
 * Normalize results and apply tracking qurery parameters to each result url
 * @param {PredictiveSearchQuery['predictiveSearch']} predictiveSearch
 * @param {LoaderFunctionArgs['params']['locale']} locale
 */
export function normalizePredictiveSearchResults(predictiveSearch, locale) {
  let totalResults = 0;
  if (!predictiveSearch) {
    return {
      results: NO_PREDICTIVE_SEARCH_RESULTS,
      totalResults,
    };
  }

  function applyTrackingParams(resource, params) {
    if (params) {
      return resource.trackingParameters
        ? `?${params}&${resource.trackingParameters}`
        : `?${params}`;
    } else {
      return resource.trackingParameters
        ? `?${resource.trackingParameters}`
        : '';
    }
  }

  const localePrefix = locale ? `/${locale}` : '';
  const results = [];

  if (predictiveSearch.queries.length) {
    results.push({
      type: 'queries',
      items: predictiveSearch.queries.map((query) => {
        const trackingParams = applyTrackingParams(
          query,
          `q=${encodeURIComponent(query.text)}`,
        );

        totalResults++;
        return {
          __typename: query.__typename,
          handle: '',
          id: query.text,
          image: undefined,
          title: query.text,
          styledTitle: query.styledText,
          url: `${localePrefix}/search${trackingParams}`,
        };
      }),
    });
  }

  if (predictiveSearch.products.length) {
    results.push({
      type: 'products',
      items: predictiveSearch.products.map((product) => {
        totalResults++;
        const trackingParams = applyTrackingParams(product);
        return {
          __typename: product.__typename,
          handle: product.handle,
          id: product.id,
          sku:product.variants?.nodes?.[0]?.sku,
          image: product.variants?.nodes?.[0]?.image,
          title: product.title,
          url: `${localePrefix}/products/${product.handle}${trackingParams}`,
          price: product.variants.nodes[0].price,
        };
      }),
    });
  }

  if (predictiveSearch.collections.length) {
    results.push({
      type: 'collections',
      items: predictiveSearch.collections.map((collection) => {
        totalResults++;
        const trackingParams = applyTrackingParams(collection);
        return {
          __typename: collection.__typename,
          handle: collection.handle,
          id: collection.id,
          image: collection.image,
          title: collection.title,
          url: `${localePrefix}/collections/${collection.handle}${trackingParams}`,
        };
      }),
    });
  }

  if (predictiveSearch.pages.length) {
    results.push({
      type: 'pages',
      items: predictiveSearch.pages.map((page) => {
        totalResults++;
        const trackingParams = applyTrackingParams(page);
        return {
          __typename: page.__typename,
          handle: page.handle,
          id: page.id,
          image: undefined,
          title: page.title,
          url: `${localePrefix}/pages/${page.handle}${trackingParams}`,
        };
      }),
    });
  }

  if (predictiveSearch.articles.length) {
    results.push({
      type: 'articles',
      items: predictiveSearch.articles.map((article) => {
        totalResults++;
        const trackingParams = applyTrackingParams(article);
        return {
          __typename: article.__typename,
          handle: article.handle,
          id: article.id,
          image: article.image,
          title: article.title,
          url: `${localePrefix}/blog/${article.handle}${trackingParams}`,
        };
      }),
    });
  }
    if (predictiveSearch.mongo.length) {
    results.push({
      type: 'mongo',
      items: predictiveSearch.mongo.map((mongo, index) => {
        totalResults++;
        const trackingParams = applyTrackingParams(mongo);
        
        return {
          __typename: mongo._id,
          handle: mongo.vendor,
          id: mongo._id,
          image: mongo.images,
          title: mongo.title,
          url: `${localePrefix}/products/${mongo.handle}${trackingParams}`,
          sku: mongo.variants[0].sku,
        };
      }),
    });
  }

  return {results, totalResults};
}

const PREDICTIVE_SEARCH_QUERY = `#graphql
  fragment PredictiveArticle on Article {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
  fragment PredictiveCollection on Collection {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
  fragment PredictivePage on Page {
    __typename
    id
    title
    handle
    trackingParameters
  }
  fragment PredictiveProduct on Product {
    __typename
    id
    title
    handle
    trackingParameters
    variants(first: 1) {
      nodes {
        id
        sku
        image {
          url
          altText
          width
          height
        }
        price {
          amount
          currencyCode
        }
      }
    }
  }
  fragment PredictiveQuery on SearchQuerySuggestion {
    __typename
    text
    styledText
    trackingParameters
  }
  query predictiveSearch(
    $country: CountryCode
    $language: LanguageCode
    $limit: Int!
    $limitScope: PredictiveSearchLimitScope!
    $searchTerm: String!
    $types: [PredictiveSearchType!]
  ) @inContext(country: $country, language: $language) {
    predictiveSearch(
      limit: $limit,
      limitScope: $limitScope,
      query: $searchTerm,
      types: $types,
    ) {
      articles {
        ...PredictiveArticle
      }
      collections {
        ...PredictiveCollection
      }
      pages {
        ...PredictivePage
      }
      products {
        ...PredictiveProduct
      }
      queries {
        ...PredictiveQuery
      }
    }
  }
`;

/**
 * @typedef {| PredictiveArticleFragment
 *   | PredictiveCollectionFragment
 *   | PredictivePageFragment
 *   | PredictiveProductFragment} PredictiveSearchResultItem
 */
/**
 * @typedef {| 'ARTICLE'
 *   | 'COLLECTION'
 *   | 'PAGE'
 *   | 'PRODUCT'
 *   | 'QUERY'} PredictiveSearchTypes
 */

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('~/components/Search').NormalizedPredictiveSearch} NormalizedPredictiveSearch */
/** @typedef {import('~/components/Search').NormalizedPredictiveSearchResults} NormalizedPredictiveSearchResults */
/** @typedef {import('storefrontapi.generated').PredictiveArticleFragment} PredictiveArticleFragment */
/** @typedef {import('storefrontapi.generated').PredictiveCollectionFragment} PredictiveCollectionFragment */
/** @typedef {import('storefrontapi.generated').PredictivePageFragment} PredictivePageFragment */
/** @typedef {import('storefrontapi.generated').PredictiveProductFragment} PredictiveProductFragment */
/** @typedef {import('storefrontapi.generated').PredictiveQueryFragment} PredictiveQueryFragment */
/** @typedef {import('storefrontapi.generated').PredictiveSearchQuery} PredictiveSearchQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof action>} ActionReturnData */
