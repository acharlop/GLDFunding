import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="GLD Funding" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="GLD Funding" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="msapplication-TileImage" content="./static/app-icons/icon-152.png" />
          <link rel="icon" type="image/png" href="./static/favicon.png" />
          <link rel="icon" sizes="192x192" href="./static/app-icons/icon-192.png" />
          <link rel="apple-touch-icon" href="./static/app-icons/icon-144.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
