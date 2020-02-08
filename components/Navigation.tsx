import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { Flex, Box } from 'rebass';
import { IoIosClose } from 'react-icons/io';

import { Button, Link } from './';
import { themeProptypes } from '../theme';
import { mainLinks, loginLink, callLink } from '../constants';

const Nav = styled(Flex)<{ theme: themeProptypes; open: boolean }>`
  opacity: 1;
  ${({ theme, open }) => `
    ${theme.mq[2]}{
      position: absolute;
      left: 100%;
      top: 0;
      width: 500px;
      height: 100vh;
      margin: 0;
      flex-direction: column;
      justify-content: flex-start;
      transition: opacity 450ms cubic-bezier(0.23, 1, 0.32, 1);
      div {
        flex-direction: column;
        width: 100%;
        max-width: 300px;
      }
      opacity: ${open ? '1' : '0'};
      background: linear-gradient(
        to top right,
        ${theme.colors.blue200}  0%,
        ${theme.colors.green500} 100% 
      );
      & a{
        width: calc(100% - 30px);
        margin-left: 15px;
        padding: 1em 0.5em;
      }
    }
    ${theme.mq[0]}{
      width: 270px;
    }            
  `}
`;

const Close = styled(Box)`
  border: 2px solid rgba(255, 255, 255, 0.28);
  border-radius: 50%;
  position: absolute;
  top: 35px;
  right: 15px;
  cursor: pointer;
  color: white;
`;

const Open = styled(Box)`
  position: absolute;
  top: 40px;
  right: 15px;
  cursor: pointer;
  padding: 5px;
  opacity: 0.7;
  z-index: 3;
`;

type NavigationProps = {
  theme: themeProptypes;
  open?: boolean;
  toggle: (event: React.MouseEvent<HTMLElement>) => void;
};

export const Navigation = withTheme(({ theme, open = false, toggle }: NavigationProps) => (
  <>
    <Open onClick={toggle} className="show-md mb-open-btn" color="white">
      <Box width="20px" mb="5px" height="2px" bg="CurrentColor" />
      <Box width="16px" mb="5px" height="2px" bg="CurrentColor" />
      <Box width="20px" mb="5px" height="2px" bg="CurrentColor" />
    </Open>
    <Nav
      as="nav"
      mt="14px"
      alignItems="center"
      justifyContent="space-between"
      width={1}
      open={open}
      theme={theme}
      pt={['100px', '25vh', '25vh', '0']}
    >
      <Close as={IoIosClose} className="show-md" onClick={toggle} size={40} />
      <Flex>
        {mainLinks.map(el => (
          <Link href={el.href} local key={el.name}>
            {el.name}
          </Link>
        ))}
      </Flex>
      <Flex alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}>
        <Link href={callLink.href}>{callLink.name}</Link>
        <Link href={loginLink.name} className="show-md">
          {loginLink.name}
        </Link>
        <Button rounded href={loginLink.href} ml={3} className="hide-md">
          {loginLink.name}
        </Button>
      </Flex>
    </Nav>
  </>
));
