import React from 'react';
import { Global, css, keyframes } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import theme from './index';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const styles = css`
  @font-face {
    font-family: "Cerebri Sans";
    src: url("/static/fonts/cerebri-sans.woff2") format("woff2"),
      url("/static/fonts/cerebri-sans.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "neuzeit-grotesk";
    src: url("/static/fonts/l") format("woff2"),
      url("/static/fonts/d.woff") format("woff"),
      url("/static/fonts/a") format("opentype");
    font-display: auto;
    font-weight: 700;
    font-style: normal;
  }
  body,
  html,
  #__next {
    height: 100%;
  }
  .container {
    max-width: 1200px;
  }
  body {
    font-family: ${theme.fonts.body};
    font-size: 1rem;
    background-color: #ffffff;
    color: ${theme.colors.gray300};
  }
  .ReactModal__Overlay {
    opacity: 0;
    transform: translateY(10px);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateY(0px);
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateY(10px);
  }
  .show-md {
    display: none !important;
  }
  a {
    color: inherit;
  }
  .fadeIn {
    opacity: 0;
    transform: scale(1.05);
    animation: ${fadeIn} 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s 1 ;
    animation-fill-mode: forwards;
  }
  ${theme.mq[2]} {
    .hide-md {
      display: none !important;
    }
    .show-md {
      display: inherit !important;
    }
  }
`;
export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        ${styles}
      `}
    />
  );
};
