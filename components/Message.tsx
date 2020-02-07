import React from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';

import { Button } from '../components';

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
      alignItems="center"
    >
      <Box width={[1, 1, 8 / 12]} p={2}>
        <Box>
          <Text as="h1" fontSize={[4, 5, '44px']} mb={[1, 2]} color="white" fontFamily="heading">
            An unforgettable experience
          </Text>
          <Text as="p" fontSize={[3, 4, '44px']} color="green500" fontFamily="heading">
            Join the community.
          </Text>
        </Box>
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
