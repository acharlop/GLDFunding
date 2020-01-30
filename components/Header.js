import React from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';
import { withTheme } from 'emotion-theming';

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
const Input = styled(Flex)`
  position: relative;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin: 3rem 0;
  input {
    background: transparent;
    padding: 0.5em;
    text-align: center;
  }
  &:focus-within {
    border-color: white;
  }
`;
export const Header = withTheme(({ theme }) => (
  <Wrapper as="header" alignItems="center" justifyContent="center" p={3}>
    <Background src="./static/images/bg-1.jpeg" alt="" className="fadeIn" />
    <Flex
      maxWidth={theme.breakpoints[3]}
      width={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="cebter"
    >
      <Text color="white300" fontSize={[5, 6]} mb={3} textAlign="center">
        Funding Solutions for your business
      </Text>
      <Text as="h1" color="white" fontSize={[5, 6]} fontFamily="heading" textAlign="center">
        We&apos;ll Help Your Business {` `}
        <FancyText words={['Grow', 'Succeed']} />
      </Text>
      <Input maxWidth="300px" alignItems="center" justifyContent="center">
        <Box fontSize={[3, 4]}>$</Box>
        <Box as="input" placeholder="insert amount" fontSize={[3, 4]} type="number" />
      </Input>
      <Button rounded fontSize={[3, 4]}>
        Apply Now
      </Button>
    </Flex>
  </Wrapper>
));
