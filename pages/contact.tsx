import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Flex, Text } from 'rebass';
import VisibilitySensor from 'react-visibility-sensor';

import { Layout, Card, Button, BreadCrumb } from '../components';

const Input = styled(Box)`
  transition: opacity 300ms;
  border-bottom: 1px solid currentColor;
  opacity: 0.5;
  &:hover,
  &:focus,
  &:valid {
    opacity: 1;
  }
`;
const inputs = [
  {
    placeholder: 'Name',
    name: 'name',
    type: 'string',
    required: true,
    as: 'input' as 'input',
  },
  {
    placeholder: 'Email',
    name: 'email',
    type: 'email',
    required: true,
    as: 'input' as 'input',
  },
  {
    placeholder: 'Mobile No.',
    name: 'phone',
    type: 'tel',
    required: true,
    as: 'input' as 'input',
  },
];
export const Contact = () => {
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
      <BreadCrumb src="bg-3" title="Contact Us" />
      <VisibilitySensor onChange={onView} active={sense} partialVisibility minTopValue={300}>
        <Box
          m="auto"
          maxWidth="1200px"
          p={2}
          css={{
            transition: `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
          transform 300ms cubic-bezier(0.4, 0, 0.2, 1)
          `,
            opacity: animated ? '1' : '0',
            transform: animated ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <Card
            as="form"
            p={2}
            py={4}
            css={{
              transform: 'translateY(-4rem)',
            }}
          >
            <Box width={1} px={2} mx="auto" maxWidth="1000px">
              <Text as="h4" fontSize={[5, 6]} fontFamily="heading" color="gray500" mb={2}>
                Drop us a line
              </Text>
              <Text as="p" fontSize={2}>
                We are here to answer any question you may have.
              </Text>
            </Box>
            <Flex flexWrap="wrap" mx="auto" maxWidth="1000px">
              <Flex width={[1, 1 / 2]} flexWrap="wrap" p={2}>
                {inputs.map((el, i) => (
                  <Input {...el} key={el.name} width={1} mb={i < inputs.length - 1 ? 4 : '0'} />
                ))}
              </Flex>
              <Flex width={[1, 1 / 2]} flexWrap="wrap" p={2}>
                <Input as="textarea" required placeholder="message" width={1} />
              </Flex>
            </Flex>
            <Flex flexWrap="wrap" mt={1} mx="auto" maxWidth="1000px">
              <Flex width={[1, 1 / 2]} flexWrap="wrap" p={2}>
                <Text as="p" fontSize={2}>
                  We know how important your information is. It is always safe with us.
                </Text>
              </Flex>
              <Flex width={[1, 1 / 2]} flexWrap="wrap" p={2} justifyContent="flex-end">
                <Button rounded>Send Message</Button>
              </Flex>
            </Flex>
          </Card>
        </Box>
      </VisibilitySensor>
    </Layout>
  );
};
export default Contact;
