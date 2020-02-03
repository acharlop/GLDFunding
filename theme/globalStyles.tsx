import React from 'react';
import { Global, css, keyframes, SerializedStyles } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

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

const styles = (theme: import('../theme').themeProptypes): SerializedStyles => css`
  ${emotionNormalize};
  @font-face {
    font-family: "Cerebri Sans";
    src: url("./static/fonts/cerebri-sans.woff2") format("woff2"),
      url("./static/fonts/cerebri-sans.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "neuzeit-grotesk";
    src: url("./static/fonts/l") format("woff2"),
      url("./static/fonts/d.woff") format("woff"),
      url("./static/fonts/a") format("opentype");
    font-display: auto;
    font-weight: 700;
    font-style: normal;
  }
  body,
  html,
  #__next {
    height: 100%;
  }

  html{
    overflow-x: hidden;
  }
  body{
    font-family: ${theme.fonts.body};
    font-size: 1rem;
    color: ${theme.colors.gray300};
  }
  .container {
    max-width: 1200px;
  }

  input{
    border: none;
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
  .gradient{
    linear-gradient(to right, ${theme.colors.blue200} 0%, ${theme.colors.green500}  100%)
  }
  ${theme.mq[2]} {
    .hide-md {
      display: none !important;
    }
    .show-md {
      display: inherit !important;
    }
  }
  input{
    color: currentColor;
  }
  *:focus{
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: currentColor;
    opacity: 0.5;
  }
  ::-moz-placeholder {
    color: currentColor;
    opacity: 0.5;
  }
  :-ms-input-placeholder {
    color: currentColor;
  }
  :-moz-placeholder {
    color: currentColor;
    opacity: 0.5;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
`;
export const GlobalStyles = () => {
  return <Global styles={styles} />;
};
