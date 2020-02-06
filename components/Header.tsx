import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';
import { withTheme } from 'emotion-theming';
import { IoMdArrowForward as Arrow } from 'react-icons/io';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { Button, FancyText } from '../components';
import { themeProptypes } from '../theme';

const defaultMaskOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false,
};

const Wrapper = styled(Flex)`
  height: 89vh;
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

const Form = styled(Flex)`
  color: white;
  border-radius: 30px;
  border: 1px solid transparent;
  overflow: hidden;
  transition: border 300ms;
  max-width: calc(100% - 1rem);
  &:focus-within {
    border-color: #00d0b3;
  }
  input {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 0.5em 1.5rem;
    font-size: inherit;
    border-radius: 0;
  }
  button {
    margin-left: -2rem;
    border-radius: 30px 0 0 30px;
    font-size: inherit;
  }
`;

export const Header = withTheme(({ theme }: { theme: themeProptypes }) => (
  <Wrapper as="header" alignItems="center" justifyContent="center" p={3}>
    <Background src="./static/images/bg-3.jpeg" alt="Hero background" className="fadeIn" />
    <Flex
      maxWidth={theme.breakpoints[3]}
      width={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="cebter"
    >
      <Text color="white300" fontSize={[3, 6]} mb={3} textAlign="center">
        Funding Solutions for your business
      </Text>
      <Text as="h1" color="white" fontSize={[5, 6]} fontFamily="heading" textAlign="center">
        We&apos;ll Help Your Business {` `}
        <FancyText words={['Succeed', 'Grow']} />
      </Text>
      <Form as="form" mt={[3, 8]} fontSize={[2, 3]}>
        <MaskedInput
          placeholder="Requested Amount"
          type="text"
          required
          mask={createNumberMask(defaultMaskOptions)}
          inputMode="numeric"
        />
        <Button>
          Apply
          <Flex as="span" className="hide-md" alignItems="center" ml="0.2em">
            {` `}Now
            <Box as={Arrow} ml={1} size={30} />
          </Flex>
        </Button>
      </Form>
    </Flex>
  </Wrapper>
));
