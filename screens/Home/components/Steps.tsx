import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Image, Text, Flex } from 'rebass';
import { withTheme } from 'emotion-theming';
import { FaPlay } from 'react-icons/fa';
import VisibilitySensor from 'react-visibility-sensor';

import { themeProptypes } from '../../../theme';
import { Button } from '../../../components';

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

const content = [
  {
    step: 1,
    title: 'Apply',
    description: `Fill out an application today with your basic information. Once filled out, submit
    along with your last 3 months of your business bank statements.`,
  },
  {
    step: 2,
    title: 'Approve',
    description: `Our underwriting team will review your application and bank statements to develop a
    solution specific to your business needs. They will then contact you and discuss your
    offer. Repayments are flexible; there are no personal guarantees and minimal documents
    required.`,
  },
  {
    step: 3,
    title: 'Get Funded',
    description: `Once the contract is signed, you will receive your funds in your bank account the same
    day.`,
  },
];
export const Steps = withTheme(({ theme }: { theme: themeProptypes }) => {
  const [animated, setAnimated] = useState(false);
  const [sense, setSensor] = useState(true);

  const onView = (inView: boolean) => {
    if (sense && inView && !animated) {
      setAnimated(true);
      setSensor(false);
    }
  };

  return (
    <VisibilitySensor onChange={onView} active={sense} partialVisibility minTopValue={300}>
      <Wrapper as="section" py={[5, '5rem']} theme={theme}>
        <Box
          m="auto"
          maxWidth="1200px"
          p={2}
          css={{
            transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
            transform 300ms cubic-bezier(0.4, 0, 0.2, 1) `,
            opacity: animated ? '1' : '0',
            transform: animated ? 'translateX(0px)' : 'translateX(20px)',
          }}
        >
          <Text
            as="h4"
            textAlign="center"
            fontSize={[5, 6]}
            fontFamily="heading"
            color="white"
            mb={2}
          >
            How it works?
          </Text>
          <Text
            as="p"
            fontSize={[2, 3]}
            textAlign="center"
            maxWidth="800px"
            m="auto"
            color="white500"
          >
            Funding has never been easier, all you have to do is follow these three steps.
          </Text>
        </Box>
        <Flex flexWrap="wrap" m="auto" maxWidth="1200px">
          <Flex width={[1, 1, 1, 1 / 2]} alignItems="center">
            <VideoThumb
              theme={theme}
              css={{
                transition: 'all 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: animated ? '1' : '0',
                transform: animated ? 'scale(1)' : 'scale(0.95)',
              }}
            >
              <Background src="./static/images/demo.jpg" alt="video placeholder" />
              <PlayButton width={8} height={8}>
                <FaPlay />
              </PlayButton>
            </VideoThumb>
          </Flex>
          <Flex flexWrap="wrap" width={[1, 1, 1, 1 / 2, 1 / 2]}>
            {content.map((el, i) => (
              <Flex
                width={1}
                p={2}
                css={{
                  transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s,
                  transform 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s
                  `,
                  opacity: animated ? '1' : '0',
                  transform: animated ? 'translateX(0px)' : 'translateX(20px)',
                }}
                key={el.step}
              >
                <Flex
                  as="span"
                  width={[2 / 12, 3 / 12]}
                  mr={2}
                  justifyContent="center"
                  alignItems="center"
                  css={{ opacity: `0.${i + 1 * 5}` }}
                >
                  <Text fontSize={[7, '8rem']} fontFamily="heading">
                    {el.step}
                  </Text>
                </Flex>
                <Box width={[10 / 12, 9 / 12]}>
                  <Text as="h1" fontSize={[4, 5]} color="white" fontFamily="heading" mb={[1, 2]}>
                    {el.title}
                  </Text>
                  <Text as="p" fontSize={2} lineHeight={['auto', 'heading']} color="white500">
                    {el.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Wrapper>
    </VisibilitySensor>
  );
});
