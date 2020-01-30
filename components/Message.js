import React from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';

import { Button, Carousel } from '../components';

const Wrapper = styled(Image)`
  position: relative;
`;
const Background = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
const titleProps = {
  fontSize: [4, 5, '44px'],
  mb: [1, 2],
  color: 'white',
  fontFamily: 'heading',
};
const textProps = {
  fontSize: [3, 4, '44px'],
  color: 'green500',
  fontFamily: 'heading',
};
export const Message = () => (
  <Wrapper as="section">
    <Background src="./static/images/footer-image.jpg" />
    <Flex
      flexWrap="wrap"
      m="auto"
      maxWidth="1200px"
      py={[5, 8]}
      flexDirection={['column-reverse', 'unset']}
    >
      <Box width={[1, 1, 8 / 12]} p={2}>
        <Carousel
          showDots
          autoPlay
          removeArrowOnDeviceType={['mobile']}
          deviceType="mobile"
          responsive={{
            mobile: {
              breakpoint: { max: 5000, min: 0 },
              items: 1,
            },
          }}
        >
          <Box mb={8}>
            <Text as="h1" {...titleProps}>
              Great resource they’ve been extremely supportive
            </Text>
            <Text as="p" {...textProps}>
              Fernandina N.
            </Text>
          </Box>
          <Box mb={[1, 2]}>
            <Text as="h1" {...titleProps}>
              An unforgettable experience.
            </Text>
            <Text as="p" {...textProps}>
              Michael Bartlett
            </Text>
          </Box>
          <Box mb={[1, 2]}>
            <Text as="h1" {...titleProps}>
              They provided a line of credit for our continued growth.
            </Text>
            <Text as="p" {...textProps}>
              Kyle P Hawari.
            </Text>
          </Box>
        </Carousel>
      </Box>
      <Flex
        alignItems="center"
        justifyContent={['center', 'center', 'flex-end']}
        width={[1, 1, 4 / 12]}
        p={2}
      >
        <Box as="form" maxWidth={250}>
          <Box as="input" my={1} placeholder="email" type="email" required p={1} width={1} />
          <Box as="input" my={1} placeholder="message" required p={1} width={1} />
          <Button width={1} my={1}>
            SEND MESSAGE
          </Button>
          <Text as="p" fontSize={[1, 2]} color="white500" textAlign="center" lineHeight="heading">
            Do you have a question? <br />
            Contact Us.
          </Text>
        </Box>
      </Flex>
    </Flex>
  </Wrapper>
);
