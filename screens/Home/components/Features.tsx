import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { Box, Text, Flex } from 'rebass';
import VisibilitySensor from 'react-visibility-sensor';

import { themeProptypes } from '../../../theme';
import { IconCard, IconPaper, IconMoney, IconTimer } from './Icons';

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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  ${({ theme }) => `
  background: linear-gradient(
    to left,
    ${theme.colors.blue200} 0%,
    ${theme.colors.green500} 100%
  );
  color: ${theme.colors.blue500};
`}

  & svg {
    stroke-dasharray: 36px, 38px;
    transition: opacity 300ms;
    stroke: CurrentColor;
    fill: none;
    stroke-width: 0.52917;
    stroke-linecap: round;
    stroke-linejoin: round;
    paint-order: markers fill stroke;
    z-index: 4;
    stroke-dashoffset: 0px;
    opacity: 0.5;
  }

  &:hover svg {
    opacity: 1;
    animation: ${dash} 450ms linear 0s 1 alternate;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
  }
`;

const svgProps = {
  width: ['40px', '40px', '50px'],
  height: ['40px', '40px', '50px'],
  viewBox: '0 0 13.229166 13.229166',
};
const content = [
  {
    title: 'QUICK APROVAL RATES',
    description: 'Funding is now faster and simpler than ever.',
    icon: <IconTimer {...svgProps} />,
  },
  {
    title: 'FLEXIBLE PAYMENT PLANS',
    description: 'We give you ultimate payment flexibility.',
    icon: <IconMoney {...svgProps} />,
  },
  {
    title: 'NO CREDIT SCORE REQUIRED',
    description: 'Support, makes your experience faster and more accurate than ever.',
    icon: <IconCard {...svgProps} />,
  },
  {
    title: 'MINIMAL PAPEWORK',
    description:
      'Tools are beyond the one-click install, async tech merges with ultimate flexibility.',
    icon: <IconPaper {...svgProps} />,
  },
];

export const Features = withTheme(({ theme, ...etc }, { theme: themeProptypes }) => {
  const [animated, setAnimated] = useState(false);
  const [sense, setSensor] = useState(true);

  const onView = (inView: boolean) => {
    if (sense && inView && !animated) {
      setAnimated(true);
      setSensor(false);
    }
  };
  return (
    <VisibilitySensor onChange={onView} active={sense} partialVisibility minTopValue={150}>
      <Box as="section" {...etc}>
        <Flex flexWrap="wrap" m="auto" maxWidth="1400px" py={2}>
          {content.map((el, i) => (
            <Box key={el.title} width={[1 / 2, 1 / 4]} p={2}>
              <Icon
                width={['70px', '70px', '150px']}
                height={['70px', '70px', '150px']}
                bg="white"
                mb={4}
                mx="auto"
                theme={theme}
              >
                {el.icon}
              </Icon>
              <Text
                as="h4"
                color="gray500"
                fontFamily="heading"
                width={1}
                fontSize={[2, 2, '1.3rem']}
                textAlign="center"
              >
                {el.title}
              </Text>
              <Text
                fontSize={[1, 1, 2]}
                mt={1}
                width={1}
                textAlign="center"
                css={{
                  transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s,
                  transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s`,
                  opacity: animated ? '1' : '0',
                  transform: animated ? 'translateX(0px)' : 'translateX(20px)',
                }}
              >
                {el.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </VisibilitySensor>
  );
});
