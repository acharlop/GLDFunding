import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Box, Image, Link as RBLink, Flex } from 'rebass';

const HL = styled(RBLink)`
  opacity: 0.7;
  text-decoration: none;
  transition: opacity 300ms;
  letter-spacing: 0.05em;
  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled(Box)`
  border-top: 1px solid rgb(76, 81, 90);
`;

const linkProps = {
  color: 'white',
  p: 1,
  fontSize: 2,
  width: [1 / 2, 'auto'],
};

const socialProps = {
  color: 'white',
  p: 1,
  fontSize: 2,
};

export const Footer = () => (
  <Wrapper bg="gray800">
    <Flex flexWrap="wrap" maxWidth="1200px" margin="auto" px={[1, 2]} py={4}>
      <Flex width={[1, 1, 10 / 12]} alignItems="center" flexWrap="wrap">
        <Image
          src="./static/images/mcafee.png"
          alt="McAfee SECURE"
          maxHeight="32px"
          margin={['auto', 0]}
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
          <HL {...linkProps}>Apply Now</HL>
        </Link>
        <Link href="./" passHref>
          <HL {...linkProps}> What is MCA?</HL>
        </Link>
        <Link href="./" passHref>
          <HL {...linkProps}>About us</HL>
        </Link>
        <Link href="./" passHref>
          <HL {...linkProps}>Contact</HL>
        </Link>
        <Link href="./" passHref>
          <HL {...linkProps}>Login</HL>
        </Link>
      </Flex>
      <Flex width={[1, 1, 2 / 12]} justifyContent={['center', 'flex-end']}>
        <Link href="https://www.instagram.com/gldfunding/" passHref>
          <HL {...socialProps}>
            <FaInstagram />
          </HL>
        </Link>
        <Link href="https://www.facebook.com/GLD-Funding-102567247876620/" passHref>
          <HL {...socialProps}>
            <FaFacebookF />
          </HL>
        </Link>
        <Link href="./" passHref>
          <HL {...socialProps}>
            <FaTwitter />
          </HL>
        </Link>
        <Link href="./" passHref>
          <HL {...socialProps}>
            <FaYoutube />
          </HL>
        </Link>
      </Flex>
    </Flex>
  </Wrapper>
);
