import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { themeProptypes } from '../theme';
import { Box, Text, Flex } from 'rebass';

const dash = keyframes`
  0%{
    stroke-dashoffset: 37px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
`;

const Icon = styled(Box)<{ theme: themeProptypes }>`
  box-shadow: 0 17px 30px rgba(0, 0, 0, 0.07);
  transition: background-position 300ms;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  ${({ theme }) => `
  background: linear-gradient(
    to top right,
    ${theme.colors.blue200} 0%,
    ${theme.colors.green500} 70%
  );
  color: ${theme.colors.white300};
`}

  background-size: 150% 100%;
  background-position: 0% 0%;

  &:hover {
    color: white;
    background-position: 100% 0%;
    & svg {
      animation: ${dash} 450ms linear 0s 1 alternate;
    }
  }
`;
const Animated = styled(Box)`
  stroke-dasharray: 36px, 38px;
  stroke: CurrentColor;
  fill: none;
  stroke-width: 0.52917;
  stroke-linecap: round;
  stroke-linejoin: round;
  paint-order: markers fill stroke;
  z-index: 4;
  stroke-dashoffset: 0px;
`;

const iconProps = {
  width: ['70px', '70px', '150px'],
  height: ['70px', '70px', '150px'],
  bg: 'white',
  mt: ['-40px', '-35px', '-75px'],
  mb: 2,
  mx: 'auto',
};
const animatedProps = {
  width: ['40px', '40px', '50px'],
  height: ['40px', '40px', '50px'],
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  version: '1.1',
  viewBox: '0 0 13.229166 13.229166',
};
const titleProps = {
  color: 'gray500',
  width: 1,
  fontFamily: 'heading',
  fontSize: [2, 2, 3],
  textAlign: 'center' as 'center',
};
const descriptionProps = {
  fontSize: [1, 1, 2],
  mt: 1,
  width: 1,
  mb: 3,
  textAlign: 'center' as 'center',
};
const Item = styled(Box)<{ theme: themeProptypes }>`
  p {
    transition: all 300ms;
    opacity: 0;
    transform: translateX(20px);
  }
  &:hover p {
    opacity: 1;
    transform: translateX(0px);
  }
  ${({ theme }) => `
    ${theme.mq[1]}{
      p {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  `}
`;

export const Features = withTheme(({ theme, ...etc }) => (
  <Box as="section" {...etc}>
    <Flex flexWrap="wrap" m="auto" maxWidth="1200px">
      <Item width={[1 / 2, 1 / 4]} px={2} pt={2} theme={theme}>
        <Icon {...iconProps} theme={theme}>
          <Animated as="svg" {...animatedProps}>
            <circle cx="6.6146" cy="7.2644" r="5.6226" />
            <circle cx="6.5581" cy="7.2362" r="4.0121" />
            <circle cx="6.5863" cy="7.2644" r=".59334" />
            <path d="m6.6146 11.197v-1.0454" />
            <path d="m4.4978 5.1194-0.73922-0.73922" />
            <path d="m9.4423 10.064-0.73922-0.73922" />
            <path d="m8.4771 5.2607 0.73922-0.73922" />
            <path d="m3.8434 9.9509 0.73922-0.73922" />
            <path d="m9.4824 7.2927h1.0454" />
            <path d="m2.6731 7.2644h1.0454" />
            <path d="m6.5581 6.5722v-2.1473" />
            <rect x="5.6257" y=".34213" width="1.8365" height="1.2997" rx="0" ry=".33905" />
          </Animated>
        </Icon>
        <Text as="h4" {...titleProps}>
          Quick approval rates
        </Text>
        <Text as="p" {...descriptionProps}>
          Funding is now faster and simpler than ever.
        </Text>
      </Item>
      <Item width={[1 / 2, 1 / 4]} p={2} theme={theme}>
        <Icon {...iconProps} theme={theme}>
          <Animated as="svg" {...animatedProps}>
            <g transform="translate(0 -283.77)">
              <circle cx="6.6146" cy="290.39" r="6.1013" />
              <path d="m6.5969 294.48v-1.1437" />
              <path
                d="m8.0138 287.62-1.8095 0.0341s-1.3656-0.0342-1.4168 1.3827c0.068282
													1.7241 1.7753 1.3656 1.7753 1.3656s1.9431-0.0507 1.8777 1.3827c-0.058308
													1.2794-1.0413 1.4169-1.8607 1.4169h-1.451"
              />
              <path d="m6.5969 287.44v-1.1437" />
            </g>
          </Animated>
        </Icon>
        <Text as="h4" {...titleProps}>
          Flexible payment plans
        </Text>
        <Text as="p" {...descriptionProps}>
          We give you ultimate payment flexibility.
        </Text>
      </Item>
      <Item width={[1 / 2, 1 / 4]} p={2} theme={theme}>
        <Icon {...iconProps} theme={theme}>
          <Animated as="svg" {...animatedProps}>
            <rect x=".98491" y="2.9693" width="11.259" height="7.2906" rx=".89769" ry=".87407" />
            <path d="m0.98038 4.4412h11.268" />
            <path d="m0.98038 5.835h11.268" />
            <path d="m2.386 7.843h2.9766" />
            <path d="m2.386 8.8352h2.9766" />
            <rect x="9.3356" y="7.3513" width="1.4324" height="1.4324" rx=".40672" ry=".40672" />
            <path d="m0.68508 11.032 12.213-8.7879" />
          </Animated>
        </Icon>
        <Text as="h4" {...titleProps}>
          No credit score required
        </Text>
        <Text as="p" {...descriptionProps}>
          Support, makes your experience faster and more accurate than ever.
        </Text>
      </Item>
      <Item width={[1 / 2, 1 / 4]} p={2} theme={theme}>
        <Icon {...iconProps} theme={theme}>
          <Animated as="svg" {...animatedProps}>
            <path d="m3.0474 12.591v-10.772h5.5043l2.8703 2.8703v7.9257z" />
            <path d="m2.8348 11.552h-0.8032v-10.796h8.3863v2.9293" />
            <path d="m8.5753 1.7954v2.8112h2.764" />
            <path d="m4.3703 10.725h5.1027" />
            <path d="m4.3703 7.4414h5.1027" />
            <path d="m4.3703 5.7996h5.1027" />
            <path d="m4.3703 4.1577h3.0213" />
            <path d="m4.3703 9.0832h5.1027" />
          </Animated>
        </Icon>
        <Text as="h4" {...titleProps}>
          Minimal Paperwork
        </Text>
        <Text as="p" {...descriptionProps}>
          Tools are beyond the one-click install, async tech merges with ultimate flexibility.
        </Text>
      </Item>
    </Flex>
  </Box>
));
