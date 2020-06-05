import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Marketing site for OasisDEX." />
          <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
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
