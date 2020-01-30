import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Flex, Link as RBLink, Box } from 'rebass';
import { IoIosClose } from 'react-icons/io';
import { Button } from './';
import theme from '../theme';
import { gradient } from '../theme/utils';

const HL = styled(RBLink)`
  opacity: 0.7;
  text-decoration: none;
  transition: opacity 300ms;
  padding: 1em;
  letter-spacing: 0.05em;
  &:hover {
    opacity: 1;
  }
  ${theme.mq[2]} {
    width: calc(100% - 30px);
    opacity: 1;
    margin-left: 15px;
  }
`;

const Nav = styled(Flex)`
  opacity: 1;
  ${theme.mq[2]} {
    position: absolute;
    left: 100%;
    top: 0;
    width: 500px;
    height: 100vh;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    transition: opacity 450ms cubic-bezier(0.23, 1, 0.32, 1);
    div {
      flex-direction: column;
      width: 100%;
      max-width: 300px;
    }
    opacity: ${({ open }) => (open ? '1' : '0')};
    ${gradient}
  }
  ${theme.mq[0]} {
    width: 270px;
  }
`;
const Close = styled(Box)`
  border: 2px solid rgba(255, 255, 255, 0.28);
  border-radius: 50%;
  position: absolute;
  top: 10%;
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
export const Navigation = ({ open, toggle }) => {
  return (
    <>
      <Open onClick={toggle} className="show-md" color="white">
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
        to="top left"
      >
        <Close as={IoIosClose} className="show-md" onClick={toggle} size={40} />
        <Flex>
          <Link href="./" passHref>
            <HL color="white">Apply Now</HL>
          </Link>
          <Link href="./" passHref>
            <HL color="white"> What is MCA?</HL>
          </Link>
          <Link href="./" passHref>
            <HL color="white">About us</HL>
          </Link>
          <Link href="./" passHref>
            <HL color="white">Contact</HL>
          </Link>
        </Flex>
        <Flex>
          <HL href="tel:1(877)498-4344" color="white">
            Call Now 1(877)498-4344
          </HL>
          <HL href="tel:1(877)498-4344" className="show-md" color="white">
            Login
          </HL>
          <Button rounded href="tel:1(877)498-4344" ml={3} className="hide-md">
            Login
          </Button>
        </Flex>
      </Nav>
    </>
  );
};
