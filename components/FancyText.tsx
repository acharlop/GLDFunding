import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { Box } from 'rebass';

import { themeProptypes } from '../theme';

const spin = keyframes`
  0%,20% { transform: translateY(65%) rotateX(-95deg); opacity: 0; }
  20%,40% { transform: translateY(0%) rotateX(1deg); opacity: 1;}
  60%,100% { transform: translateY(-65%) rotateX(95deg);opacity: 0; }
`;
const Wrapper = styled(Box)`
  position: relative;
  display: inline-block;
`;
const Animated = styled(Box)<{ theme: themeProptypes }>`
  position: absolute;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: translateY(65%) rotateX(-95deg);
  opacity: 0;
  ${({ theme }) => `
    ${theme.mq[1]}{
      width: 100%
    }
  `}
`;

export type FancyTextProps = {
  words: string[];
  theme: themeProptypes;
};
export const FancyText = withTheme(({ theme, words, ...etc }: FancyTextProps) => {
  const longest = words.sort((a, b) => b.length - a.length)[0];
  return (
    <Wrapper {...etc}>
      <Box as="span" css={{ opacity: '0' }}>
        {longest}
      </Box>
      {words.map((el, i) => (
        <Animated
          key={i}
          theme={theme}
          css={{
            animation: `${spin} 4s ease-in-out ${i > 0 ? '2s' : '0s'} infinite`,
          }}
        >
          {el}
        </Animated>
      ))}
    </Wrapper>
  );
});
