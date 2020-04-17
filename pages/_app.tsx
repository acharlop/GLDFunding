import React from 'react';
import App from 'next/app';
import { NextSeo } from 'next-seo';
import { ThemeProvider } from 'emotion-theming';
import * as Sentry from '@sentry/browser';

import theme from '../theme';
import { GlobalStyles } from '../theme/globalStyles';
import { OrganizationLd, SEO } from '../seo';

Sentry.init({ dsn: 'https://aea1ec5abc6b4031b494b8dfbafa97dc@o379266.ingest.sentry.io/5203865' });

class AppComponent extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <NextSeo {...SEO} />
        <OrganizationLd />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default AppComponent;
