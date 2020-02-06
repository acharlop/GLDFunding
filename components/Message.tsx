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

const inputProps = {
  as: 'input' as 'input',
  my: 1,
  required: true,
  p: 1,
  width: 1,
  bg: 'white500',
  color: '#0f0b40',
};

export const Message = () => (
  <Wrapper as="section">
    <Background
      src="./static/images/footer-image.jpg"
      alt="mountains background"
      className="fadeIn"
    />
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
          <Box as="label" htmlFor="email" css={{ position: 'absolute', opacity: 0 }}>
            email
          </Box>
          <Box {...inputProps} placeholder="email" type="email" name="email" px={2} />
          <Box as="label" htmlFor="message" css={{ position: 'absolute', opacity: 0 }}>
            Message
          </Box>
          <Box {...inputProps} placeholder="message" name="message" px={2} />
          <Button width={1} my={1} rounded>
            SEND MESSAGE
          </Button>
          <Text
            as="p"
            fontSize={[1, 2]}
            color="white500"
            textAlign="center"
            lineHeight="heading"
            mt={3}
          >
            Do you have a question? <br />
            Contact Us.
          </Text>
        </Box>
      </Flex>
    </Flex>
  </Wrapper>
);
