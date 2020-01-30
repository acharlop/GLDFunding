import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { Box, Image, Text, Flex } from 'rebass';
import { withTheme } from 'emotion-theming';
import { FaYoutube, FaPlay } from 'react-icons/fa';

import { gradient } from '../theme/utils';
import { Layout, Button, FancyText, Carousel } from '../components';

const Header = styled(Flex)`
  height: 87vh;
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
const WithGradient = styled(Box)`
  ${gradient}
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
    content: '';
    ${gradient}
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
const VideoThumb = styled(Box)`
  position: relative;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 30px 70px rgba(22, 39, 47, 0.3);
  overflow: hidden;
  width: 40vw;
  margin-left: -15vw;
  padding-top: 80%;
  margin-top: -1.5rem;
  ${({ theme }) => `
  ${theme.mq[3]}{
    padding-top: 55%;
    margin: 1rem;
    width: calc(100% - 2rem);
  }
`}
`;
const PlayButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const Home = withTheme(({ theme }) => (
  <Layout>
    <Header as="header" alignItems="center" justifyContent="center" p={3}>
      <Background
        src="/static/images/bg-1.jpeg"
        alt=""
        className="fadeIn"
        css={{ zIndex: '-1', filter: 'brightness(0.3)', objectPosition: 'left' }}
      />
      <Box maxWidth={theme.breakpoints[3]} width={1}>
        <Box maxWidth="500px" mt={4}>
          <Flex color="white300" fontSize={[1, 1, 2, 3, 3]} mb={3} alignItems="center">
            <Text mr={1} color="white" as={FaYoutube} size={[20, 20, 30, 40, 40]} />
            Guaranteed financial solutions for your business.
          </Flex>
          <Text as="h1" color="white" fontSize={[4, 5, 5, 6, 6]} fontFamily="heading">
            We help your business
            <FancyText words={['Grow', 'Succeed']} />
          </Text>
          <Button rounded fontSize={[2, 3, 3, 4, 4]} mt={3}>
            Apply Now
          </Button>
        </Box>
      </Box>
    </Header>
    <Box as="section">
      <Flex flexWrap="wrap" m="auto" maxWidth="1200px" pb={6}>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4, 1 / 4]} p={2}>
          <Icon
            width={['70px', '70px', '70px', '150px', '150px']}
            height={['70px', '70px', '70px', '150px', '150px']}
            bg="white"
            mx="auto"
            mt={['-35px', '-35px', '-35px', '-75px', '-75px']}
            mb={2}
          >
            <Animated
              as="svg"
              width={['40px', '50px']}
              height={['40px', '50px']}
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
              <rect x="5.6257" y=".34213" width="1.8365" height="1.2997" rx="0" ry=".33905" />
            </Animated>
          </Icon>
          <Text
            as="h4"
            fontSize={[2, 2, 2, 3, 3]}
            color="gray500"
            textAlign="center"
            width={1}
            fontFamily="heading"
          >
            Quick approval rates
          </Text>
          <Text as="p" fontSize={[1, 2, 2, 2, 2]} mt={1} textAlign="center" width={1}>
            Funding is now faster and simpler than ever.
          </Text>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4, 1 / 4]} p={2}>
          <Icon
            width={['70px', '70px', '70px', '150px', '150px']}
            height={['70px', '70px', '70px', '150px', '150px']}
            bg="white"
            mx="auto"
            mt={['0', '-35px', '-35px', '-75px', '-75px']}
            mb={2}
          >
            <Animated
              as="svg"
              width={['40px', '50px']}
              height={['40px', '50px']}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 13.229166 13.229166"
            >
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
          <Text
            as="h4"
            fontSize={[2, 2, 2, 3, 3]}
            color="gray500"
            textAlign="center"
            width={1}
            fontFamily="heading"
          >
            Flexible payment plans
          </Text>
          <Text as="p" fontSize={[1, 2, 2, 2, 2]} mt={1} textAlign="center" width={1}>
            We give you ultimate payment flexibility.
          </Text>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4, 1 / 4]} p={2}>
          <Icon
            width={['70px', '70px', '70px', '150px', '150px']}
            height={['70px', '70px', '70px', '150px', '150px']}
            bg="white"
            mx="auto"
            mt={['0', '0', '0', '-75px', '-75px']}
            mb={2}
          >
            <Animated
              as="svg"
              width={['40px', '50px']}
              height={['40px', '50px']}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 13.229166 13.229166"
            >
              <rect x=".98491" y="2.9693" width="11.259" height="7.2906" rx=".89769" ry=".87407" />
              <path d="m0.98038 4.4412h11.268" />
              <path d="m0.98038 5.835h11.268" />
              <path d="m2.386 7.843h2.9766" />
              <path d="m2.386 8.8352h2.9766" />
              <rect x="9.3356" y="7.3513" width="1.4324" height="1.4324" rx=".40672" ry=".40672" />
              <path d="m0.68508 11.032 12.213-8.7879" />
            </Animated>
          </Icon>
          <Text
            as="h4"
            fontSize={[2, 2, 2, 3, 3]}
            color="gray500"
            textAlign="center"
            width={1}
            fontFamily="heading"
          >
            No credit score required
          </Text>
          <Text as="p" fontSize={[1, 2, 2, 2, 2]} mt={1} textAlign="center" width={1}>
            Support, makes your experience faster and more accurate than ever.
          </Text>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4, 1 / 4]} p={2}>
          <Icon
            width={['70px', '70px', '70px', '150px', '150px']}
            height={['70px', '70px', '70px', '150px', '150px']}
            bg="white"
            mx="auto"
            mt={['0', '0', '0', '-75px', '-75px']}
            mb={2}
          >
            <Animated
              as="svg"
              width={['40px', '50px']}
              height={['40px', '50px']}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 13.229166 13.229166"
            >
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
          <Text
            as="h4"
            fontSize={[2, 2, 2, 3, 3]}
            color="gray500"
            textAlign="center"
            width={1}
            fontFamily="heading"
          >
            Minimal Paperwork
          </Text>
          <Text as="p" fontSize={[1, 2, 2, 2, 2]} mt={1} textAlign="center" width={1}>
            Tools are beyond the one-click install, async tech merges with ultimate flexibility.
          </Text>
        </Box>
      </Flex>
    </Box>
    <WithGradient as="section" py={[5, 8]} to="left">
      <Flex flexWrap="wrap" m="auto" maxWidth="1200px" py={[5, 8]}>
        <Box width={[1, 1, 1, 1 / 2]}>
          <VideoThumb theme={theme}>
            <Background src="/static/images/demo.jpg" />
            <PlayButton width={8} height={8}>
              <FaPlay />
            </PlayButton>
          </VideoThumb>
        </Box>
        <Flex flexWrap="wrap" width={[1, 1, 1, 1 / 2, 1 / 2]}>
          <Box width={[1, 1 / 2, 1 / 2]} p={2}>
            <Text as="h1" fontSize={[4, 5]} mb={[1, 2]} color="gray500" fontFamily="heading">
              Apply
              <Image
                src="/static/images/step1.svg"
                alt="step two"
                width={[40, 50]}
                verticalAlign="middle"
                ml={1}
              />
            </Text>
            <Text as="p" fontSize={2} lineHeight="heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a mattis sapien. Praesent
              porttitor ex felis, eget fermentum mi feugiat ut. Phasellus facilisis dolor massa.
            </Text>
          </Box>
          <Box width={[1, 1 / 2, 1 / 2]} p={2}>
            <Text as="h1" fontSize={[4, 5]} mb={[1, 2]} color="gray500" fontFamily="heading">
              Approve
              <Image
                src="/static/images/step2.svg"
                alt="step two"
                width={[40, 50]}
                verticalAlign="middle"
                ml={1}
              />
            </Text>
            <Text as="p" fontSize={2} lineHeight="heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a mattis sapien. Praesent
              porttitor ex felis, eget fermentum mi feugiat ut. Phasellus facilisis dolor massa.
            </Text>
          </Box>
          <Box width={1} p={2}>
            <Text as="h1" fontSize={[4, 5]} mb={[1, 2]} color="gray500" fontFamily="heading">
              Get Funded
              <Image
                src="/static/images/step3.svg"
                alt="step two"
                width={[40, 50]}
                verticalAlign="middle"
                ml={1}
              />
            </Text>
            <Text as="p" fontSize={2} lineHeight="heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a mattis sapien. Praesent
              porttitor ex felis, eget fermentum mi feugiat ut. Phasellus facilisis dolor massa.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </WithGradient>

    <Box as="section" css={{ position: 'relative' }}>
      <Background
        src="/static/images/bg-3.jpeg"
        css={{ zIndex: '-1', filter: 'brightness(0.5)', objectPosition: 'center' }}
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
              <Text
                as="h1"
                fontSize={[4, 5, '44px']}
                mb={[1, 2]}
                color="white"
                fontFamily="heading"
              >
                Great resource they’ve been extremely supportive
              </Text>
              <Text as="p" fontSize={[3, 4, '44px']} color="green500" fontFamily="heading">
                Fernandina N.
              </Text>
            </Box>
            <Box mb={[1, 2]}>
              <Text as="h1" fontSize={[4, 5, '44px']} mb={2} color="white" fontFamily="heading">
                An unforgettable experience.
              </Text>
              <Text as="p" fontSize={[3, 4, '44px']} color="green500" fontFamily="heading">
                Michael Bartlett
              </Text>
            </Box>
            <Box mb={[1, 2]}>
              <Text as="h1" fontSize={[4, 5, '44px']} mb={2} color="white" fontFamily="heading">
                They provided a line of credit for our continued growth.
              </Text>
              <Text as="p" fontSize={[3, 4, '44px']} color="green500" fontFamily="heading">
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
            <Text as="p" fontSize={[1, 2]} color="white500" textAlign="center">
              Do you have a question? <br />
              Contact Us.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  </Layout>
));
export default Home;
