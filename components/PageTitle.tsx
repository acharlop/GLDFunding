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
  z-index: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }
`;
export type PageTitleProps = {
  src: string;
  title: string;
};

export const PageTitle = ({ title, src }: PageTitleProps) => {
  const [animated, setAnimated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setLoaded(true);
    }
    setAnimated(true);
  }, []);
  return (
    <Wrapper
      as="header"
      alignItems="center"
      justifyContent="center"
      p={3}
      pt="5rem"
      minHeight={['40vh']}
      bg="gray800"
    >
      <Background as="picture">
        <source srcSet={`./images/${src}-1500.png`} media="(min-width: 800px)" />
        <source srcSet={`./images/${src}-800.png`} media="(max-width: 800px)" />
        <Image
          src={`./images/${src}-1500.png`}
          alt={title}
          onLoad={onLoad}
          ref={imageRef}
          css={{
            transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
            opacity: loaded ? '1' : '0',
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
