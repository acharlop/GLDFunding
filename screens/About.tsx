import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from 'rebass';
import { AiOutlineExperiment, AiOutlineSmile, AiOutlineCrown } from 'react-icons/ai';

import { Layout, PageTitle } from '../components';

const features = [
  {
    icon: <AiOutlineExperiment />,
    title: 'No rocket science',
    description: 'minimal paperwork, no collateral, and no credit rating score.',
  },
  {
    icon: <AiOutlineCrown />,
    title: 'Personalized solutions',
    description:
      'We build personal relationships with our clients to be able to provide the financial tools needed.',
  },
  {
    icon: <AiOutlineSmile />,
    title: 'Better service',
    description:
      'We are here to assist you in every step of the way to get the working capital you deserve.',
  },
];
export const About = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <Layout>
      <PageTitle src="about" title="About us" />
      <Box
        m="auto"
        maxWidth="1200px"
        p={2}
        css={{
          transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
          transform 300ms cubic-bezier(0.4, 0, 0.2, 1)
          `,
          opacity: animated ? '1' : '0',
          transform: animated ? 'scale(1)' : 'scale(0.95)',
        }}
      >
        <Flex width={1} px={2} pt={8} flexWrap="wrap">
          <Text
            as="h4"
            fontSize={[4, 5]}
            fontFamily="heading"
            color="gray500"
            mb={2}
            textAlign="center"
            maxWidth={600}
            mx="auto"
            width={1}
          >
            We provide funding solutions that are easier, faster, smarter and better.
          </Text>
        </Flex>
        <Flex flexWrap="wrap" width={1} my={4}>
          <Flex width={[1, 1, 1 / 2]} flexWrap="wrap" p={2}>
            <Text as="p" fontSize={2} lineHeight="heading">
              We take pride in building personable relationships with our clients, so we insure that
              we provide the financial tools needed to grow your business, with{' '}
              <Box as="strong" color="gray500">
                minimal paperwork, no collateral, and no credit rating score
              </Box>
              . We can get you funding options within a couple of hours.
            </Text>
          </Flex>
          <Flex width={[1, 1, 1 / 2]} flexWrap="wrap" p={2}>
            <Text as="p" fontSize={2} lineHeight="heading">
              Over the past 20 years we have seen the banks tighten their criteria on lending,
              making it difficult for business owners to get the working capital they need to
              continue to serve their communities and customers worldwide. Therefore, GLD Funding
              decided to offer{' '}
              <Box as="strong" color="gray500">
                customized funding programs that best suit the client’s needs.
              </Box>
            </Text>
          </Flex>
        </Flex>
        <Flex flexWrap="wrap" width={1} my={4} pb={8}>
          {features.map((el, i) => (
            <Box
              key={el.title}
              width={[1, 1, 'calc(33% - 1rem)']}
              p={2}
              m={1}
              css={{
                transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s,
                transform 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s
                `,
                opacity: animated ? '1' : '0',
                transform: animated ? 'scale(1)' : 'scale(1.05)',
              }}
            >
              <Text textAlign="center" fontSize="50px" color="blue500">
                {el.icon}
              </Text>
              <Text
                as="h4"
                fontSize={3}
                lineHeight="heading"
                color="gray500"
                fontFamily="heading"
                textAlign="center"
              >
                {el.title}
              </Text>
              <Text as="p" fontSize={2} lineHeight="heading" textAlign="center">
                {el.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Layout>
  );
};
export default About;
