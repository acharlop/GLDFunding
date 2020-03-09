import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import BaseLink from 'next/link';
import { withTheme } from 'emotion-theming';
import { useRouter } from 'next/router';
import { Link as RBLink, LinkProps as baseProps } from 'rebass';

import { themeProptypes } from '../theme';

const HL = styled(RBLink)<{ active?: boolean; popup?: boolean; theme: themeProptypes }>`
  text-decoration: none;
  transition: opacity 300ms;
  letter-spacing: 0.05em;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  ${({ active, theme, popup }) =>
    active &&
    popup &&
    `
    opacity: 1;
    font-weight: 900;
    border-bottom: 2px solid ${theme.colors.blue500};
`}
`;
export type linkProps = Pick<baseProps, Exclude<keyof baseProps, 'css' | 'as'>> & {
  href: string;
  local?: boolean;
  popup?: boolean;
  active?: boolean | null;
  children: ReactNode;
  theme: themeProptypes;
};

export const Link = withTheme(
  ({
    theme,
    href = '#',
    local = false,
    active = null,
    popup = false,
    children,
    ...etc
  }: linkProps) => {
    const router = useRouter();
    const act = active === null ? router.pathname === href : active;
    return local ? (
      <BaseLink href={href}>
        <HL p={1} color="white" active={act} theme={theme} {...etc}>
          {children}
        </HL>
      </BaseLink>
    ) : (
      <HL p={1} color="white" href={href} active={act} theme={theme} {...etc}>
        {children}
      </HL>
    );
  }
);
