import React, { useState, useRef, useEffect } from 'react';
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
  }
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
    padding: 0 1.5rem;
    font-size: inherit;
    border-radius: 0;
    line-height: 3;
    width: 60%;
  }
  button {
    margin-left: -2rem;
    border-radius: 30px;
    font-size: inherit;
  }
`;

export const Header = withTheme(({ theme }: { theme: themeProptypes }) => {
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
    <Wrapper as="header" alignItems="center" justifyContent="center" p={3}>
      <Background
        as="picture"
        css={{
          transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: animated ? '1' : '0',
          transform: animated ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <source srcSet="./static/images/bg-3-1500.png" media="(min-width: 800px)" />
        <source srcSet="./static/images/bg-3-800.png" media="(max-width: 800px)" />
        <Image
          src="./static/images/bg-3-1500.png"
          alt="money background"
          onLoad={onLoad}
          ref={imageRef}
        />
      </Background>
      <Flex
        maxWidth={theme.breakpoints[3]}
        width={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        css={{
          transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1) 150ms',
          opacity: animated ? '1' : '0',
          transform: animated ? 'translateY(-1rem)' : 'translateY(0rem)',
        }}
      >
        <Text color="white300" fontSize={[3, 6]} mb={3} textAlign="center">
          Funding Solutions for your business
        </Text>
        <Text as="h1" color="white" fontSize={[5, 6]} fontFamily="heading" textAlign="center">
          We&apos;ll Help Your Business {` `}
          <FancyText words={['Succeed', 'Grow']} animate={animated} />
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
  );
});
