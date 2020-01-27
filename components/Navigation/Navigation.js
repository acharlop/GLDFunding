import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { Flex, Link as RBLink, Box } from "rebass";
import { IoIosClose } from "react-icons/io";
import { Button } from "../Button";
import theme from "../../theme";

const HL = styled(RBLink)`
  opacity: 0.7;
  color: white;
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
    position: fixed;
    left: 100%;
    top: 0;
    bottom: 0;
    width: 75%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    transition: opacity 450ms cubic-bezier(0.23, 1, 0.32, 1);
    opacity: ${({ open }) => (open ? "1" : "0")};
    background: linear-gradient(
      to top left,
      ${theme.colors.blue200} 0%,
      ${theme.colors.green500} 100%
    );
    div {
      flex-direction: column;
      width: 100%;
      max-width: 300px;
    }
  }
`;
const Close = styled(Box)`
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  position: absolute;
  top: 10%;
  right: 15px;
  cursor: pointer;
  color: white;
`;
const Open = styled(Box)`
  position: absolute;
  top: 35px;
  right: 15px;
  cursor: pointer;
  width: 20px;
  height: 15px;
  color: white;
  div {
    margin-bottom: 4.25px;
    background-color: CurrentColor;
    height: 2px;
  }
`;
export const Navigation = ({ open, setOpen }) => {
  return (
    <>
      <Open
        onClick={() => {
          setOpen(!open);
        }}
        className="show-md"
        open={open}
      >
        <Box width="20px" />
        <Box width="16px" />
        <Box width="20px" />
      </Open>
      <Nav
        as="nav"
        mt="23px"
        alignItems="center"
        justifyContent="space-between"
        width={1}
        open={open}
      >
        <Close
          as={IoIosClose}
          className="show-md"
          onClick={() => {
            setOpen(!open);
          }}
          size={40}
        />
        <Flex>
          <Link href="./" passHref>
            <HL>Apply Now</HL>
          </Link>
          <Link href="./" passHref>
            <HL>What is MCA?</HL>
          </Link>
          <Link href="./" passHref>
            <HL>About us</HL>
          </Link>
          <Link href="./" passHref>
            <HL>Contact</HL>
          </Link>
        </Flex>
        <Flex alignItems="center">
          <HL href="tel:1(877)498-4344">Call Now 1(877)498-4344</HL>
          <HL href="tel:1(877)498-4344" className="show-md">
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
