import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money, createWithCache, CacheLong} from '@shopify/hydrogen';
import {ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut} from 'react-scroll-motion';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Bikenbiker | Home'}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const ytVideos = await fetch(
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB7sm__GfyLIzJf-On9fnjqSCWgo3kqMGY&part=snippet&maxResults=50&channelId=UCCwtKebSwY_Q-0AA4O_m_uQ&order=date',
  );
  var items = await ytVideos.json();
   const insta = await fetch(
    'https://graph.instagram.com/v11.0/me/media?fields=id,title,media_url,permalink,caption,thumbnail_url&access_token=IGQWROZAnhTSFhuSFM2cDJHdG9jdGVkdUJZAVHNnby1lRGJuSWZA5QUVmb2xhMFRrRTVtNURlMjNlQ2dGdXdjaWZAFWWpXTEV6UU9TbUoyUjJXY3l2X0VES1k2VTdiNlZAUaUlMVWctREozb0RHU085SC1iMUNrajk0NkkZD',
  );
  var instaItems = await insta.json();
  return defer({featuredCollection, recommendedProducts, items, instaItems});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <>
      <div className="home">
        <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={batch(FadeIn(), MoveIn())}>
              <FeaturedCollection collection={data.featuredCollection} />
            </Animator>
          </ScrollPage>
   
        
          <ScrollPage page={1}>
            <Animator animation={batch(FadeIn())}>
              <RecommendedProducts products={data.recommendedProducts} />
            </Animator>
          </ScrollPage>
   
          <ScrollPage page={2}>
            <Animator animation={batch(FadeIn())}>
              <YtVideos items={data.items.items} />
            </Animator>
          </ScrollPage>

          <ScrollPage page={3}>
            <Animator animation={batch(FadeIn())}>
              <Instagr instag={data.instaItems.data} />
            </Animator>
          </ScrollPage>
        </ScrollContainer>
        
       
    
      </div>
      
      
     
    </>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollection({collection}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}
function YtVideos({items}) {
  if (!items) return null;
  return (
    <div class="relative">
      <h1>Youtube Feed</h1>
       <div class="grid grid-cols-3 md:grid-cols-4 gap-4 max-h-svh overflow-y-hidden p-4 mx-auto rounded-lg shadow-lg overflow-hidden relative after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-16 after:bg-gradient-to-b after:from-transparent after:to-white">
         
          {items.map((item, index) => {
      if(index == 0){
          return <div class="row-span-2 col-span-2"><a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}><img class="rounded-lg w-full" src={item.snippet.thumbnails.high.url} alt=""/><div key={item.snippet.title}>{item.snippet.title}</div></a></div>;
      }else{
         return <div ><a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}><img class="h-auto max-w-full rounded-lg" src={item.snippet.thumbnails.high.url} alt=""/><div key={item.snippet.title}>{item.snippet.title}</div></a></div>;
      }
        })}
         </div>
      <a href="/youtube" class="absolute bottom-0"> See More</a>
      </div>

  );
}

function Instagr({instag}){
    if (!instag) return null;
  return (
    <div>
      <h1>Instagram Feed</h1>
       <div class="flex overflow-x-auto gap-1.5 scroll-style">
         
          {instag.map((inst) => {
      if(inst.thumbnail_url){
        return <div><a href={inst.permalink}><div className="image-container"><img class="h-auto max-w-full rounded-lg grayscale hover:filter-none image-container" src={inst.thumbnail_url} alt=""/></div><div key={inst.id} className="max-h-12 overflow-y-hidden w-64 p-4 mx-auto rounded-lg shadow-lg overflow-hidden relative after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-16 after:bg-gradient-to-b after:from-transparent after:to-white">{inst.caption}</div></a></div>;
          
      }else{
        return <div><a href={inst.permalink}><img class="h-auto max-w-full rounded-lg grayscale hover:filter-none min-w-64" src={inst.media_url} alt=""/><div key={inst.id} className="max-h-12 overflow-y-hidden w-64 p-4 mx-auto rounded-lg shadow-lg overflow-hidden relative after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-16 after:bg-gradient-to-b after:from-transparent after:to-white">{inst.caption}</div></a></div>;
      }
      })}
         </div>
      </div>

  );
  
}


/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h1>Recommended Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                  />
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
