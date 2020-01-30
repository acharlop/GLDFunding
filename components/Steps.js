import React from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';
import { withTheme } from 'emotion-theming';
import { FaPlay } from 'react-icons/fa';

import { gradient } from '../theme/utils';
import { Button } from '../components';

const Wrapper = styled(Box)`
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
  ${theme.mq[2]}{
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
const titleProps = {
  fontSize: [4, 5],
  color: 'white',
  fontFamily: 'heading',
  mb: [1, 2],
};
const imageProps = {
  verticalAlign: 'middle',
  ml: 1,
  width: [40, 50],
};
const textProps = {
  fontSize: 2,
  lineHeight: 'heading',
  color: 'white500',
};
export const Steps = withTheme(({ theme }) => (
  <Wrapper as="section" py={[5, 8]} to="left">
    <Flex flexWrap="wrap" m="auto" maxWidth="1200px" py={[5, 8]}>
      <Box width={[1, 1, 1, 1 / 2]}>
        <VideoThumb theme={theme}>
          <Background src="./static/images/demo.jpg" />
          <PlayButton width={8} height={8}>
            <FaPlay />
          </PlayButton>
        </VideoThumb>
      </Box>
      <Flex flexWrap="wrap" width={[1, 1, 1, 1 / 2, 1 / 2]}>
        <Box width={[1, 1 / 2, 1 / 2]} p={2}>
          <Text as="h1" {...titleProps}>
            Apply
            <Image src="./static/images/step1.svg" alt="step one" {...imageProps} />
          </Text>
          <Text as="p" {...textProps}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a mattis sapien. Praesent
            porttitor ex felis, eget fermentum mi feugiat ut. Phasellus facilisis dolor massa.
          </Text>
        </Box>
        <Box width={[1, 1 / 2, 1 / 2]} p={2}>
          <Text as="h1" {...titleProps}>
            Approve
            <Image src="./static/images/step2.svg" alt="step two" {...imageProps} />
          </Text>
          <Text as="p" {...textProps}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a mattis sapien. Praesent
            porttitor ex felis, eget fermentum mi feugiat ut. Phasellus facilisis dolor massa.
          </Text>
        </Box>
        <Box width={1} p={2}>
          <Text as="h1" {...titleProps}>
            Get Funded
            <Image src="./static/images/step3.svg" alt="step three" {...imageProps} />
          </Text>
          <Text as="p" {...textProps}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a mattis sapien. Praesent
            porttitor ex felis, eget fermentum mi feugiat ut. Phasellus facilisis dolor massa.
          </Text>
        </Box>
      </Flex>
    </Flex>
  </Wrapper>
));
