import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Image, Flex, Text } from 'rebass';

const Wrapper = styled(Flex)`
  position: relative;
  overflow: hidden;
`;

const Background = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }
`;
export type BreadCrumbProps = {
  src: string;
  title: string;
};

export const BreadCrumb = ({ title, src }: BreadCrumbProps) => {
  const [animated, setAnimated] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const onLoad = () => {
    setAnimated(true);
  };

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setAnimated(true);
    }
  }, []);
  return (
    <Wrapper
      as="header"
      alignItems="center"
      justifyContent="center"
      p={3}
      pt="5rem"
      minHeight={['40vh']}
    >
      <Background as="picture">
        <source srcSet={`./static/images/${src}-1500.png`} media="(min-width: 800px)" />
        <source srcSet={`./static/images/${src}-800.png`} media="(max-width: 800px)" />
        <Image
          src={`./static/images/${src}-1500.png`}
          alt={title}
          onLoad={onLoad}
          ref={imageRef}
          css={{
            transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
            transform 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
            opacity: animated ? '1' : '0',
          }}
        />
      </Background>
      <Flex
        width={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        css={{
          transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 150ms,
          transform 600ms cubic-bezier(0.4, 0, 0.2, 1) 150ms`,
          opacity: animated ? '1' : '0',
          transform: animated ? 'translateY(-1rem)' : 'translateY(0rem)',
        }}
      >
        <Text as="h1" color="white" fontSize={[5, 6]} fontFamily="heading" textAlign="center">
          {title}
        </Text>
      </Flex>
    </Wrapper>
  );
};
