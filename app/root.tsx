import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import styles from '~/styles/tailwind.css';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <ScrollRestoration />
        {/* <Scripts /> */}
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
