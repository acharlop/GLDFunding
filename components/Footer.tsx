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

const socialLinks = [
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/gldfunding/',
    name: 'instagram',
  },
  {
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com/GLD-Funding-102567247876620/',
    name: 'facebook',
  },
  {
    icon: <FaTwitter />,
    href: '#',
    name: 'twitter',
  },
  {
    icon: <FaYoutube />,
    href: '#',
    name: 'youtube',
  },
];
const localLinks = [
  {
    href: './',
    name: 'Apply Now',
  },
  {
    href: './',
    name: 'What is MCA?',
  },
  {
    href: './',
    name: 'About us',
  },
  {
    href: './',
    name: 'Contact',
  },
  {
    href: './',
    name: 'Login',
  },
];

const SocialLinks = (props: any) => (
  <Flex {...props}>
    {socialLinks.map(el => (
      <HL href={el.href} color="white" p={1} fontSize={2} key={el.name}>
        {el.icon}
      </HL>
    ))}
  </Flex>
);

export const Footer = () => (
  <Wrapper bg="gray800">
    <Flex flexWrap="wrap" maxWidth="1200px" margin="auto" px={[1, 2]} py={4}>
      <Flex
        width={[1, 1, 1, 10 / 12]}
        alignItems="center"
        flexWrap="wrap"
        justifyContent={['unset', 'unset', 'center', 'unset']}
      >
        <Image
          src="./static/images/mcafee.png"
          alt="McAfee SECURE"
          maxHeight="32px"
          css={{
            objectFit: 'contain',
            verticalAlign: 'middle',
            opacity: '0.7',
          }}
          width={[1, 1, 1, 'auto']}
          mb={[4, 4, 1, 0]}
          px={[1, 2]}
        />
        {localLinks.map(el => (
          <Link href={el.href} passHref key={el.name}>
            <HL p={1} fontSize={2} color="white" width={[1 / 2, 1 / 3, 'auto']}>
              {el.name}
            </HL>
          </Link>
        ))}
        <SocialLinks className="show-md" />
      </Flex>
      <SocialLinks justifyContent="flex-end" className="hide-md" width={[1, 1, 2 / 12]} />
    </Flex>
  </Wrapper>
);
