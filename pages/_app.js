import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "emotion-theming";

import theme from "../theme";
import { GlobalStyles } from "../theme/globalStyles";

class AppComponent extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>GLD Funding</title>
        </Head>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default AppComponent;
