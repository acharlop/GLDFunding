import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { Box, Image, Text, Flex } from 'rebass';
import { withTheme } from 'emotion-theming';
import { FaYoutube } from 'react-icons/fa';
import { colors } from '../../theme/colors';
import { Layout, Button, FancyText } from '../../components';

const Header = styled(Flex)`
  height: 85vh;
  position: relative;
  overflow: hidden;
`;
const dash = keyframes`
  0%{
    stroke-dashoffset: 37px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
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
  z-index: -1;
`;
const Icon = styled(Box)`
  box-shadow: 0 17px 30px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    background: linear-gradient(
      to top left,
      ${colors.blue200} 0%,
      ${colors.green500} 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: opacity 300ms;
  }
  div {
    position: relative;
    z-index: 2;
  }
  &:hover {
    color: white;
    &:after {
      opacity: 1;
    }
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
export const Home = withTheme(({ theme }) => (
  <Layout>
    <Header as="header" alignItems="center" justifyContent="center" p={3}>
      <Background
        src="https://gld-funding-template-01.herokuapp.com/assets/img/guy.png"
        alt=""
        className="fadeIn"
      />
      <Box maxWidth={theme.breakpoints[3]} width={1}>
        <Box maxWidth="500px" mt={4}>
          <Flex
            color="white300"
            fontSize={[1, 2, 3]}
            mb={3}
            alignItems="center"
          >
            <Text mr={1} color="white" as={FaYoutube} size={[20, 30, 40]} />
            Guaranteed financial solutions for your business.
          </Flex>
          <Text as="h1" color="white" fontSize={[5, 6]}>
            We help your business
            <FancyText words={['Grow', 'Succeed']} />
          </Text>
          <Button rounded fontSize={[3, 4]} mt={3}>
            Apply Now
          </Button>
        </Box>
      </Box>
    </Header>
    <Box m="auto" maxWidth="1200px" py={2}>
      {[1, 2, 3, 4].map(() => (
        <Box
          width={[1, 1 / 2, 1 / 4]}
          px={2}
          py={2}
          css={{ display: 'inline-block' }}
        >
          <Icon width="125px" height="125px" bg="white" mx="auto" mb={2}>
            <Animated
              as="svg"
              width="50px"
              height="50px"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 13.229166 13.229166"
            >
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
              <rect
                x="5.6257"
                y=".34213"
                width="1.8365"
                height="1.2997"
                rx="0"
                ry=".33905"
              />
            </Animated>
          </Icon>
          <Text
            as="h4"
            fontSize={[2, 3]}
            color="gray500"
            textAlign="center"
            width={1}
          >
            Quick approval rates
          </Text>
          <Text as="p" fontSize={2} mt={1} textAlign="center" width={1}>
            Funding is now faster and simpler than ever.
          </Text>
        </Box>
      ))}
    </Box>
  </Layout>
));
