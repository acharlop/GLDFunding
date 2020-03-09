import React from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps } from 'rebass';

const Wrapper = styled(Box)`
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.07);
  position: relative;
  background: white;
  border-radius: 4px;
`;

export type CardProps = Pick<BoxProps, Exclude<keyof BoxProps, 'css'>> & {
  rounded?: boolean;
};

export const Card = ({ children, ...etc }: CardProps) => <Wrapper {...etc}>{children}</Wrapper>;
