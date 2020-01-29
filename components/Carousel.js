import React from 'react';
import Carousel from 'react-multi-carousel';
import styled from '@emotion/styled';

const StyledCarousel = styled(Carousel)`
  overflow: hidden;
  position: relative;
  .react-multi-carousel-track {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    position: relative;
    will-change: transform, transition;
    height: 100%;
    width: ${({ width }) => width}%;
  }

  .react-multiple-carousel__arrow {
    position: absolute;
    outline: 0;
    transition: all 0.5s;
    border-radius: 50%;
    z-index: 1000;
    border: 0;
    width: 2.3rem;
    height: 2.3rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-multiple-carousel__arrow::before {
    font-size: 1.3rem;
    display: block;
    z-index: 2;
    position: relative;
  }

  .react-multiple-carousel__arrow--left {
    left: calc(4% + 1px);
  }

  .react-multiple-carousel__arrow--left::before {
    content: '◀';
  }

  .react-multiple-carousel__arrow--right {
    right: calc(4% + 1px);
  }

  .react-multiple-carousel__arrow--right::before {
    content: '▶';
  }

  .react-multi-carousel-dot-list {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    justify-content: flex-start;
  }

  .react-multi-carousel-dot button {
    transition: opacity 0.5s;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 8px;
    padding: 0;
    opacity: 0.5;
    border: none;
    background: white;
    cursor: pointer;
  }

  .react-multi-carousel-dot--active button {
    opacity: 1;
  }

  .react-multi-carousel-item {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .react-multi-carousel-item {
      flex-shrink: 0 !important;
    }

    .react-multi-carousel-track {
      overflow: visible !important;
    }
  }
`;
const Component = props => <StyledCarousel {...props} width={props.children.length * 100} />;
export { Component as Carousel };
