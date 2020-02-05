import React from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';
import { withTheme } from 'emotion-theming';
import { FaPlay } from 'react-icons/fa';

import { themeProptypes } from '../theme';
import { Button } from '../components';

const Wrapper = styled(Box)<{ theme: themeProptypes }>`
  ${({ theme }) => `
    background: linear-gradient(
      to left,
      ${theme.colors.blue200} 0%,
      ${theme.colors.green500} 100%
    );
  `}
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

const VideoThumb = styled(Box)<{ theme: themeProptypes }>`
  position: relative;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 30px 70px rgba(22, 39, 47, 0.3);
  overflow: hidden;
  width: 40vw;
  margin-left: -15vw;
  padding-top: 80%;
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
  as: 'h1' as 'h1',
  fontSize: [4, 5],
  color: 'white',
  fontFamily: 'heading',
  mb: [1, 2],
};

const textProps = {
  as: 'p' as 'p',
  fontSize: 2,
  lineHeight: ['auto', 'heading'],
  color: 'white500',
};
const stepProps = {
  width: [1],
  p: 2,
};
const iconProps = {
  as: 'span' as 'span',
  width: [2 / 12, 3 / 12],
  mr: 2,
  justifyContent: 'center',
  alignItems: 'center',
};
const numberProps = {
  fontSize: [7, '8rem'],
  fontFamily: 'heading',
};
const textContainerProps = {
  width: [10 / 12, 9 / 12],
};
export const Steps = withTheme(({ theme }) => (
  <Wrapper as="section" py={[5, '5rem']} theme={theme}>
    <Flex flexWrap="wrap" m="auto" maxWidth="1200px">
      <Flex width={[1, 1, 1, 1 / 2]} alignItems="center">
        <VideoThumb theme={theme}>
          <Background src="./static/images/demo.jpg" alt="video placeholder" />
          <PlayButton width={8} height={8}>
            <FaPlay />
          </PlayButton>
        </VideoThumb>
      </Flex>
      <Flex flexWrap="wrap" width={[1, 1, 1, 1 / 2, 1 / 2]}>
        <Flex {...stepProps}>
          <Flex {...iconProps} css={{ opacity: '0.5' }}>
            <Text {...numberProps}>1</Text>
          </Flex>
          <Box {...textContainerProps}>
            <Text {...titleProps}>Apply</Text>
            <Text {...textProps}>
              Fill out an application today with your basic information. Once filled out, submit
              along with your last 3 months of your business bank statements.
            </Text>
          </Box>
        </Flex>
        <Flex {...stepProps}>
          <Flex {...iconProps} css={{ opacity: '0.7' }}>
            <Text {...numberProps}>2</Text>
          </Flex>
          <Box {...textContainerProps}>
            <Text {...titleProps}>Approve</Text>
            <Text {...textProps}>
              Our underwriting team will review your application and bank statements to develop a
              solution specific to your business needs. They will then contact you and discuss your
              offer. Repayments are flexible; there are no personal guarantees and minimal documents
              required.
            </Text>
          </Box>
        </Flex>
        <Flex {...stepProps}>
          <Flex {...iconProps}>
            <Text {...numberProps}>3</Text>
          </Flex>
          <Box {...textContainerProps}>
            <Text {...titleProps}>Get Funded</Text>
            <Text {...textProps}>
              Once the contract is signed, you will receive your funds in your bank account the same
              day.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  </Wrapper>
));
