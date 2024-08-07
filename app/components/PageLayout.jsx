
import {Aside} from '~/components/Aside';
import {Footer} from '~/components/Common/Footer';
import {Header} from '~/components/Common/Header';

/**
 * @param {PageLayoutProps}
 */
export function PageLayout({
  children = null,
  footer,
  header,
  isLoggedIn,
  publicStoreDomain,
}) {
  return (
    <Aside.Provider>
      {header && (
        <Header
          header={header}
          isLoggedIn={isLoggedIn}
          publicStoreDomain={publicStoreDomain}
        />
      )}
      <main>{children}</main>
      <Footer
        footer={footer}
        header={header}
        publicStoreDomain={publicStoreDomain}
      />
    </Aside.Provider>
  );
}

