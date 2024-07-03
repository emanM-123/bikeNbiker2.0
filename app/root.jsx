import { useNonce } from '@shopify/hydrogen';
import { defer } from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  useMatches,
  Scripts,
  useRouteLoaderData,
  ScrollRestoration,
  Outlet
} from '@remix-run/react';
import favicon from '~/assets/favicon.svg';
import resetStyles from '~/styles/reset.css?url';
import appStyles from '~/styles/app.css?url';
import tailwindStyles from '~/styles/tailwind.css?url';
import bannerStyles from '~/styles/banner.css?url';
import cardStyles from '~/styles/card.css?url';
import ytLayoutStyles from '~/styles/ytLayout.css?url';
import aboutUsStyles from '~/styles/aboutUs.css?url';
import headerStyles from '~/styles/Common/header.css?url';
import galleryStyles from '~/styles/gallery.css?url';
import instaStyles from '~/styles/insta.css?url';
import reviewStyles from '~/styles/review.css?url';
import brandStyles from '~/styles/Bike/brand.css?url';
import productCardStyles from '~/styles/Common/productCard.css?url';
import productCard2Styles from '~/styles/Common/productCard2.css?url';
import footerStyles from '~/styles/Common/footer.css?url';
import newArrivalStyles from '~/styles/Bike/newArrival.css?url';
import imageCardStyles from '~/styles/Common/imageCard.css?url';
import uniProductStyles from "~/styles/Bike/uniProduct.css?url";
import gearsStyles from "~/styles/Biker/gears.css?url";
import bikesStyles from "~/styles/Bike/bikes.css?url";
import { PageLayout } from '~/components/PageLayout';
import { FOOTER_QUERY, HEADER_QUERY } from '~/lib/fragments';

/**
 * @type {ShouldRevalidateFunction}
 */
export const shouldRevalidate = ({ formMethod, currentUrl, nextUrl }) => {
  if (formMethod && formMethod !== 'GET') {
    return true;
  }
  if (currentUrl.toString() === nextUrl.toString()) {
    return true;
  }

  return false;
};

export function links() {
  return [
    { rel: 'stylesheet', href: resetStyles },
    { rel: 'stylesheet', href: appStyles },
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: bannerStyles },
    { rel: 'stylesheet', href: cardStyles },
    { rel: 'stylesheet', href: ytLayoutStyles },
    { rel: 'stylesheet', href: aboutUsStyles },
    { rel: 'stylesheet', href: headerStyles },
    { rel: 'stylesheet', href: galleryStyles },
    { rel: 'stylesheet', href: instaStyles },
    { rel: 'stylesheet', href: reviewStyles },
    { rel: 'stylesheet', href: brandStyles },
    { rel: 'stylesheet', href: newArrivalStyles },
    { rel: 'stylesheet', href: productCardStyles },
    { rel: 'stylesheet', href: uniProductStyles },
    { rel: 'stylesheet', href: imageCardStyles },
    { rel: 'stylesheet', href: gearsStyles },
    { rel: 'stylesheet', href: productCard2Styles },
    { rel: 'stylesheet', href: footerStyles },
    { rel: 'stylesheet', href: bikesStyles },
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    { rel: 'icon', type: 'image/svg+xml', href: favicon },
  ];
}

/**
 * @return {LoaderReturnData}
 */
export const useRootLoaderData = () => {
  const [root] = useMatches();
  return root?.data;
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader({ context }) {
  const { storefront } = context;
  const footerPromise = storefront.query(FOOTER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      footerMenuHandle: 'footer',
    },
  });
  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      headerMenuHandle: 'main-menu',
    },
  });

  const ytVideosResponse = await fetch(
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDiPTTJAygjdGz8P5lRUT6Upj80edzv7Qc&part=snippet&maxResults=50&channelId=UCCwtKebSwY_Q-0AA4O_m_uQ&order=date'
  );
  const ytVideosJson = await ytVideosResponse.json();

  let instagramData = null;

  return defer(
    {
      footer: await footerPromise,
      header: await headerPromise,
      ytVideos: ytVideosJson?.items || [],
      instagramFeed: instagramData?.data || null,
    }
  );
}

/**
 * @param {{children?: React.ReactNode}}
 */
function Layout({ children }) {
  const nonce = useNonce();
  const data = useRouteLoaderData('root');
  return (
    
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {data ? (
          <PageLayout {...data}>{children}</PageLayout>
        ) :
          children
        }
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}


/** @typedef {LoaderReturnData} RootLoader */

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@remix-run/react').ShouldRevalidateFunction} ShouldRevalidateFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
