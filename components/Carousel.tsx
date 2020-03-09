import React from 'react';
import Carousel from 'react-multi-carousel';
import { CarouselProps, ResponsiveType } from 'react-multi-carousel/lib/types';
import styled from '@emotion/styled';

const StyledCarousel = styled(Carousel)<CarouselProps>`
  overflow: hidden;
  position: relative;
  .react-multi-carousel-track {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    position: relative;
    height: 100%;
    will-change: transform, transition;
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0s !important;
    width: ${({ children }) => children.length * 100}%;
  }

  .react-multiple-carousel__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    border: 0;
    width: 2.3rem;
    height: 2.3rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
    cursor: pointer;
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
    position: absolute;
    bottom: 0.8rem;
    width: 100%;
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    justify-content: center;
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
    background: currentColor;
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

type newProps = Pick<CarouselProps, Exclude<keyof CarouselProps, 'responsive' | 'as'>> & {
  responsive?: ResponsiveType;
};

const Component = ({
  responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  },
  children,
  ...etc
}: newProps) => {
  return (
    <StyledCarousel responsive={responsive} {...etc}>
      {children}
    </StyledCarousel>
  );
};

export { Component as Carousel };
