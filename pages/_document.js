import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

const TITLE = 'OasisDex Protocol';
const DESCRIPTION = 'OasisDEX is a fully decentralized exchange protocol that ' +
  'allows anyone to provide and access liquidity on chain, with limit order support.';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content={DESCRIPTION}
          />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:image" content="http://oasisdex.com/OasisDEX-Logo.jpg" />
          <meta property="og:url" content="http://oasisdex.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content={TITLE} />
          <meta name="twitter:image:alt" content="OasisDex" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="alternate icon" href="/favicon.ico" />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
