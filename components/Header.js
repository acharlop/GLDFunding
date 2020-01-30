import React from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';
import { withTheme } from 'emotion-theming';
import { FaYoutube } from 'react-icons/fa';

import { Button, FancyText } from '../components';

const Wrapper = styled(Flex)`
  height: 87vh;
  position: relative;
  overflow: hidden;
`;

const Background = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation-name: fadeIn;
  animation-duration: 450ms;
  filter: brightness(0.3);
  z-index: -1;
`;

export const Header = withTheme(({ theme }) => (
  <Wrapper as="header" alignItems="center" justifyContent="center" p={3}>
    <Background src="/static/images/bg-1.jpeg" alt="" className="fadeIn" />
    <Box maxWidth={theme.breakpoints[3]} width={1}>
      <Box maxWidth="500px" mt={4}>
        <Flex color="white300" fontSize={[1, 2, 3]} mb={3} alignItems="center">
          <Text mr={1} color="white" as={FaYoutube} size={[30, 40]} />
          Guaranteed financial solutions for your business.
        </Flex>
        <Text as="h1" color="white" fontSize={[5, 6]} fontFamily="heading">
          We help your business
          <FancyText words={['Grow', 'Succeed']} />
        </Text>
        <Button rounded fontSize={[3, 4]} mt={3}>
          Apply Now
        </Button>
      </Box>
    </Box>
  </Wrapper>
));
