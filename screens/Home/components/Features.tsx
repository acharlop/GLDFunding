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
  transition: background-position 300ms;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  ${({ theme }) => `
  background: ${theme.colors.blue500};
  color: ${theme.colors.white300};
`}

  & svg {
    stroke-dasharray: 36px, 38px;
    stroke: CurrentColor;
    fill: none;
    stroke-width: 0.52917;
    stroke-linecap: round;
    stroke-linejoin: round;
    paint-order: markers fill stroke;
    z-index: 4;
    stroke-dashoffset: 0px;
  }

  &:hover {
    color: white;
    & svg {
      animation: ${dash} 450ms linear 0s 1 alternate;
    }
  }
`;

const svgProps = {
  width: ['40px', '40px', '50px'],
  height: ['40px', '40px', '50px'],
  viewBox: '0 0 13.229166 13.229166',
};
const content = [
  {
    title: 'Quick approval rates',
    description: 'Funding is now faster and simpler than ever.',
    icon: <IconTimer {...svgProps} />,
  },
  {
    title: 'Flexible payment plans',
    description: 'We give you ultimate payment flexibility.',
    icon: <IconMoney {...svgProps} />,
  },
  {
    title: 'No credit score required',
    description: 'Support, makes your experience faster and more accurate than ever.',
    icon: <IconCard {...svgProps} />,
  },
  {
    title: 'Minimal Paperwork',
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
        <Flex flexWrap="wrap" m="auto" maxWidth="1200px">
          {content.map((el, i) => (
            <Box
              key={el.title}
              mt={['-50px', '-50px', '-75px']}
              width={[1 / 2, 1 / 4]}
              mb={[2, 2, 0]}
              p={2}
            >
              <Icon
                width={['70px', '70px', '150px']}
                height={['70px', '70px', '150px']}
                bg="white"
                mb={2}
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
                fontSize={[2, 2, 3]}
                textAlign="center"
              >
                {el.title}
              </Text>
              <Text
                fontSize={[1, 1, 2]}
                mt={1}
                width={1}
                mb={3}
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
