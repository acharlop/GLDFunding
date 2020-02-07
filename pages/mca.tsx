import React, { useState } from 'react';
import { Box, Flex, Text, Image } from 'rebass';
import VisibilitySensor from 'react-visibility-sensor';
import { AiOutlineCheck, AiOutlineAudit, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';

import { Layout, BreadCrumb } from '../components';

const features = [
  {
    icon: <MdAttachMoney />,
    title: 'Fast money',
    description: 'minimal paperwork, no collateral, and no credit rating score.',
  },
  {
    icon: <AiOutlineUsergroupAdd />,
    title: 'Easy to qualify',
    description:
      'We build personal relationships with our clients to be able to provide the financial tools needed.',
  },
  {
    icon: <AiOutlineAudit />,
    title: 'No collateral',
    description:
      'We are here to assist you in every step of the way to get the working capital you deserve.',
  },
];
export const MCA = () => {
  const [animated, setAnimated] = useState(false);
  const [sense, setSensor] = useState(true);

  const onView = (inView: boolean) => {
    if (sense && inView && !animated) {
      setAnimated(true);
      setSensor(false);
    }
  };

  return (
    <Layout>
      <BreadCrumb src="mca.jpg" title="What is MCA?" />
      <VisibilitySensor onChange={onView} active={sense} partialVisibility minTopValue={300}>
        <Box m="auto" maxWidth="1200px" p={2}>
          <Flex flexWrap="wrap" width={1} my={4}>
            <Flex width={[1, 1, 1 / 2]} flexWrap="wrap" p={2}>
              <Image
                src="./static/images/startup.jpg"
                alt="startup"
                width={1}
                css={{
                  borderRadius: '8px',
                  boxShadow: '0 8px 50px rgba(22,39,47,0.2)',
                  transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1),
                  transform 600ms cubic-bezier(0.4, 0, 0.2, 1)
                  `,
                  opacity: animated ? '1' : '0',
                  transform: animated ? 'scale(1)' : 'scale(0.95)',
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
                Merchant Cash Advance are finance options characterized by short payment terms
                (generally under 24 months) and small regular payments (typically paid each business
                day) as opposed to the larger monthly payments and longer payment terms associated
                with traditional bank loans.
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
          <Flex flexWrap="wrap" width={1} my={4} pb={8}>
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
                  transform: animated ? 'scale(1)' : 'scale(0.95)',
                }}
              >
                <Text fontSize="50px" color="blue500">
                  {el.icon}
                </Text>
                <Text
                  as="h4"
                  fontSize={3}
                  lineHeight="heading"
                  color="gray500"
                  fontFamily="heading"
                >
                  {el.title}
                </Text>
                <Text as="p" fontSize={2} lineHeight="heading">
                  {el.description}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </VisibilitySensor>
    </Layout>
  );
};
export default MCA;
