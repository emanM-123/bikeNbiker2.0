import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {getPaginationVariables} from '@shopify/hydrogen';

import {SearchForm, SearchResults, NoSearchResults} from '~/components/Search';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: `Hydrogen | Search`}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({request, context}) {
  const url = new URL(request.url);
  const mongoUrl="https://ap-south-1.aws.data.mongodb-api.com/app/data-obqhs/endpoint/data/v1/action/aggregate";
  const searchParams = new URLSearchParams(url.search);
  const variables = getPaginationVariables(request, {pageBy: 8});
  const searchTerm = String(searchParams.get('q') || '');

  const response = await fetch(mongoUrl, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'api-key':'p6iDzr1GTWhADsQbAX0CkGtkYP1R5aEUqcYhmF6mQQ2smGSixOBiBC9JGrO7vqvZ',
          },
          body: JSON.stringify({
        "dataSource": "Cluster0",
        "database": "Bikenbiker",
        "collection": "testProducts",
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
                    "vendor": 1,
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

  if (!searchTerm) {
    return {
      searchResults: {results: null, totalResults: 0},
      searchTerm,
    };
  }

  const data = await context.storefront.query(SEARCH_QUERY, {
    variables: {
      query: searchTerm,
      ...variables,
    },
  });

  if (!data) {
    throw new Error('No search data returned from Shopify API');
  }

  const totalResults = Object.values(data).reduce((total, value) => {
    return total + value.nodes.length;
  }, 0);

  const searchResults = {
    results: data,
    mongodb:json,
    totalResults,
  };

  return defer({searchTerm, searchResults});
}

export default function SearchPage() {
  /** @type {LoaderReturnData} */
  const {searchTerm, searchResults} = useLoaderData();
console.log(searchResults.json);
  return (
    <div className="search">
      <h1>Search</h1>
      <SearchForm searchTerm={searchTerm} />
      {!searchTerm || !searchResults.totalResults ? (
        <NoSearchResults />
      ) : (
        <SearchResults results={searchResults.results} documents={json}/>
      )}
    </div>
  );
}

const SEARCH_QUERY = `#graphql
  fragment SearchProduct on Product {
    __typename
    handle
    id
    publishedAt
    title
    trackingParameters
    vendor
    variants(first: 1) {
      nodes {
        id
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
        compareAtPrice {
          amount
          currencyCode
        }
        selectedOptions {
          name
          value
        }
        product {
          handle
          title
        }
      }
    }
  }
  fragment SearchPage on Page {
     __typename
     handle
    id
    title
    trackingParameters
  }
  fragment SearchArticle on Article {
    __typename
    handle
    id
    title
    trackingParameters
  }
  query search(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $query: String!
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    products: search(
      query: $query,
      unavailableProducts: HIDE,
      types: [PRODUCT],
      first: $first,
      sortKey: RELEVANCE,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...on Product {
          ...SearchProduct
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
    pages: search(
      query: $query,
      types: [PAGE],
      first: 10
    ) {
      nodes {
        ...on Page {
          ...SearchPage
        }
      }
    }
    articles: search(
      query: $query,
      types: [ARTICLE],
      first: 10
    ) {
      nodes {
        ...on Article {
          ...SearchArticle
        }
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
