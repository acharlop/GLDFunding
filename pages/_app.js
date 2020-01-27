import React from "react";
import App from "next/app";
import { ThemeProvider } from "emotion-theming";

import theme from "../theme";
import { GlobalStyles } from "../theme/globalStyles";

class AppComponent extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default AppComponent;
