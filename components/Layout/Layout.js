import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Box, Image, Link as RBLink, Text } from 'rebass';
import { ModalProvider } from '../modals';
import theme from '../../theme';
import { Navigation } from '../index';

const HL = styled(RBLink)`
  opacity: 0.7;
  display: inline-block;
  text-decoration: none;
  transition: opacity 300ms;
  letter-spacing: 0.05em;
  &:hover {
    opacity: 1;
  }
`;
const TopBar = styled(Box)`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: flex-end;
  align-items: center;
  grid-column-gap: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;
const Wrapper = styled(Box)`
  height: 100%;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  transform: translate(0%, 0%);
  ${theme.mq[2]} {
    transform: ${({ open }) =>
    open ? 'translate(-500px,0%)' : 'translate(0%,0%)'};
  }
  ${theme.mq[0]} {
    transform: ${({ open }) =>
    open ? 'translate(-270px,0%)' : 'translate(0%,0%)'};
  }
`;
const Footer = styled(Box)`
  border-top: 2px solid rgb(76, 81, 90);
`;
export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper open={open}>
      <TopBar px={3} pt={2} maxWidth="1700px">
        <Image
          src="/static/images/logo-white.svg"
          alt="GLD Funding logo"
          maxWidth="180px"
          alignSelf="flex-start"
          justifySelf="flex-start"
        />
        <Navigation open={open} setOpen={setOpen} />
      </TopBar>
      <ModalProvider>{children}</ModalProvider>
      <Footer bg="gray800">
        <Box maxWidth="1200px" margin="auto" px={[1, 2]} py={4}>
          <Box
            width={[1, 1, 10 / 12]}
            alignItems="center"
            flexWrap="wrap"
            css={{ display: 'inline-block' }}
          >
            <Image
              src="/static/images/mcafee.png"
              alt="McAfee SECURE"
              maxHeight="32px"
              margin="auto"
              css={{
                objectFit: 'contain',
                verticalAlign: 'middle',
                objectPosition: 'left',
              }}
              width={[1, 1, 'auto']}
              mb={[1, 0]}
              px={[1, 2]}
            />
            <Link href="./" passHref>
              <HL color="white" p={1} fontSize={2} width={[1 / 2, 'auto']}>
                Apply Now
              </HL>
            </Link>
            <Link href="./" passHref>
              <HL color="white" p={1} fontSize={2} width={[1 / 2, 'auto']}>
                {' '}
                What is MCA?
              </HL>
            </Link>
            <Link href="./" passHref>
              <HL color="white" p={1} fontSize={2} width={[1 / 2, 'auto']}>
                About us
              </HL>
            </Link>
            <Link href="./" passHref>
              <HL color="white" p={1} fontSize={2} width={[1 / 2, 'auto']}>
                Contact
              </HL>
            </Link>
            <Link href="./" passHref>
              <HL color="white" p={1} fontSize={2} width={[1 / 2, 'auto']}>
                Login
              </HL>
            </Link>
          </Box>
          <Text
            width={[1, 1, 2 / 12]}
            textAlign={['center', 'right']}
            css={{ display: 'inline-block' }}
          >
            <Link href="./" passHref>
              <HL color="white" p={1} fontSize={[2]}>
                {' '}
                <FaFacebookF />{' '}
              </HL>
            </Link>
            <Link href="./" passHref>
              <HL color="white" p={1} fontSize={[2]}>
                <FaTwitter />
              </HL>
            </Link>
            <Link href="./" passHref>
              <HL color="white" p={1} fontSize={[2]}>
                <FaYoutube />
              </HL>
            </Link>
          </Text>
        </Box>
      </Footer>
    </Wrapper>
  );
};
