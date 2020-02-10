import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import BaseLink from 'next/link';
import { useRouter } from 'next/router';
import { Link as RBLink, LinkProps as baseProps } from 'rebass';

const HL = styled(RBLink)`
  text-decoration: none;
  transition: opacity 300ms;
  letter-spacing: 0.05em;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export type linkProps = Pick<baseProps, Exclude<keyof baseProps, 'css' | 'as'>> & {
  href: string;
  local?: boolean;
  active?: boolean | null;
  children: ReactNode;
};

export const Link = ({ href, local = false, active = null, children, ...etc }: linkProps) => {
  const router = useRouter();
  const act = active === null ? router.pathname === href : active;
  return local ? (
    <BaseLink href={href}>
      <HL p={1} color="white" css={{ opacity: act ? '1' : '0.7' }} {...etc}>
        {children}
      </HL>
    </BaseLink>
  ) : (
    <HL p={1} color="white" href={href} css={{ opacity: act ? '1' : '0.7' }} {...etc}>
      {children}
    </HL>
  );
};
