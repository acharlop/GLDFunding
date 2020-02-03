import { css } from '@emotion/core';
import { colors } from '../colors';

export const gradient = ({
  primary = colors.blue200,
  secondary = colors.green500,
  to = 'right',
}) => css`
  background: linear-gradient(to ${to}, ${primary} 0%, ${secondary} 100%);
`;
