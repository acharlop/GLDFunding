import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Text, Image } from 'rebass';
import { AiOutlineCheck, AiOutlineAudit, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';

import { Layout, PageTitle, Card } from '../../components';

const features = [
  {
    icon: <MdAttachMoney />,
    title: 'FAST MONEY',
    description: 'You can usually get your money fast– in as little as a day or two.',
  },
  {
    icon: <AiOutlineUsergroupAdd />,
    title: 'EASY TO QUALIFY',
    description:
      'You can still use MCA even if your business doesn’t qualify for a traditional loan.',
  },
  {
    icon: <AiOutlineAudit />,
    title: 'NO COLLATERAL',
    description:
      'You don’t need collateral and credit score requirements are usually extremely flexible.',
  },
];
export const MCA = () => {
  const [animated, setAnimated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    setAnimated(true);
    if (imageRef.current && imageRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <Layout>
      <PageTitle src="mca" title="What is MCA?" />
      <Box
        m="auto"
        className="container"
        p={2}
        css={{
          transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
        transform 300ms cubic-bezier(0.4, 0, 0.2, 1)
        `,
          opacity: animated ? '1' : '0',
          transform: animated ? 'scale(1)' : 'scale(0.95)',
        }}
      >
        <Card
          p={2}
          py={4}
          css={{
            transform: 'translateY(-4rem)',
          }}
        >
          <Flex flexWrap="wrap" width={1} my={4}>
            <Flex width={[1, 1, 1 / 2]} flexWrap="wrap" p={2} className="hide-sm">
              <Image
                src="./images/cash.png"
                alt="startup"
                height="367px"
                ref={imageRef}
                onLoad={onLoad}
                width={1}
                css={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 8px 50px rgba(22,39,47,0.2)',
                  transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1),
                  transform 600ms cubic-bezier(0.4, 0, 0.2, 1)
                  `,
                  opacity: loaded ? '1' : '0',
                  transform: loaded ? 'scale(1)' : 'scale(0.95)',
                }}
              />
            </Flex>
            <Flex width={[1, 1, 1 / 2]} flexWrap="wrap" p={2}>
              <Text
                as="h4"
                fontSize={[4, 5]}
                fontFamily="heading"
                color="gray500"
                mb={2}
                maxWidth={600}
                mx="auto"
                width={1}
              >
                Merchant Cash Advance
              </Text>
              <Text as="p" fontSize={2} lineHeight="heading">
                Merchant Cash Advance are finance options characterized by short payment terms and
                small regular payments as opposed to the larger monthly payments and longer payment
                terms associated with traditional bank loans.
              </Text>
              <Text as="p" fontSize={2} lineHeight="heading" my={0}>
                <Box as={AiOutlineCheck} color="green500" verticalAlign="middle" /> A fast and easy
                solution to get working capital for your business.
              </Text>
              <Text as="p" fontSize={2} lineHeight="heading" my={0}>
                <Box as={AiOutlineCheck} color="green500" verticalAlign="middle" /> An innovative
                uncollateralized alternative to a traditional bank loan.
              </Text>
              <Text as="p" fontSize={2} lineHeight="heading" my={0}>
                <Box as={AiOutlineCheck} color="green500" verticalAlign="middle" />
                {` `}
                Can be used for whatever you want.
              </Text>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" width={1} my={4}>
            {features.map((el, i) => (
              <Box
                key={el.title}
                width={[1, 1, 'calc(33% - 1rem)']}
                p={2}
                m={1}
                css={{
                  border: '1px solid #eaeaea',
                  transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s,
                  transform 600ms cubic-bezier(0.4, 0, 0.2, 1) 0.${i * 2}s
                  `,
                  opacity: animated ? '1' : '0',
                  transform: animated ? 'scale(1)' : 'scale(1.05)',
                }}
              >
                <Text fontSize="50px" color="blue500" textAlign="center">
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
        </Card>
      </Box>
    </Layout>
  );
};
export default MCA;
