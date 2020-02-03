import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { Box } from 'rebass';

const spin = keyframes`
  0%,20% { transform: translateY(65%) rotateX(-95deg); opacity: 0; }
  20%,40% { transform: translateY(0%) rotateX(1deg); opacity: 1;}
  60%,100% { transform: translateY(-65%) rotateX(95deg);opacity: 0; }
`;
const Wrapper = styled(Box)`
  position: relative;
  display: inline-block;
`;
const Animated = styled(Box)<{ first: boolean }>`
  transform-style: preserve-3d;
  display: inline-block;
  backface-visibility: hidden;
  transform: translateY(65%) rotateX(-95deg);
  opacity: 0;
  ${({ first }) => !first && 'position: absolute; left: 0;'};
`;

type FancyTextProps = {
  words: string[];
};
export const FancyText = ({ words, ...etc }: FancyTextProps) => {
  return (
    <Wrapper {...etc}>
      {words.map((el, i) => (
        <Animated
          key={i}
          first={i === 0}
          css={{
            position: i > 0 ? 'absolute' : 'relative',
            left: i > 0 ? '0' : 'auto',
            animation: `${spin} 4s ease-in-out ${i > 0 ? '2s' : '0s'} infinite`,
          }}
        >
          {el}
        </Animated>
      ))}
    </Wrapper>
  );
};
