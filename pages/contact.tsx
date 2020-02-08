import React, { useState } from 'react';
import { GoShield } from 'react-icons/go';
import { Box, Flex, Text } from 'rebass';
import VisibilitySensor from 'react-visibility-sensor';

import { Layout, Card, Button, BreadCrumb, Input } from '../components';
import { phoneMask } from '../constants';

const inputs = [
  {
    label: 'Name*',
    placeholder: 'Name',
    name: 'name',
  },
  {
    label: 'Email*',
    placeholder: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Mobile No.*',
    placeholder: 'Mobile No.',
    name: 'phone',
    tag: 'masked',
    mask: phoneMask,
    inputMode: 'tel' as 'tel',
  },
];
const fieldProps = {
  mb: [1, 1, 3],
  mt: 1,
  required: true,
};
const columnProps = {
  width: [1, 1 / 2],
  flexDirection: 'column' as 'column',
  px: 1,
};
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
      <BreadCrumb src="contact" title="Contact Us" />
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
            transform: animated ? 'scale(1)' : 'scale(0.95)',
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
            <Box width={1} p={2} mx="auto" maxWidth="1000px">
              <Text as="h4" fontSize={[5, 6]} fontFamily="heading" color="gray500" mb={2}>
                Drop us a line
              </Text>
              <Text as="p" fontSize={2}>
                We are here to answer any question you may have.
              </Text>
            </Box>
            <Flex width={1} flexWrap="wrap" p={2} mx="auto" maxWidth="1000px">
              <Flex {...columnProps}>
                {inputs.map((el, i) => (
                  <Input {...el} key={el.name} height={['1.5rem', '40px']} {...fieldProps} />
                ))}
              </Flex>
              <Flex {...columnProps}>
                <Input
                  tag="textarea"
                  name="message"
                  label="message"
                  css={{ flexGrow: 1 }}
                  py={1}
                  {...fieldProps}
                />
              </Flex>
            </Flex>
            <Flex
              flexWrap="wrap"
              mt={1}
              mx="auto"
              maxWidth="1000px"
              justifyContent="flex-end"
              p={2}
              css={{
                borderTop: '1px solid #e6e6e6;',
              }}
            >
              <Flex width={[1, 1 / 2]} px={1} alignItems="center" className="hide-sm">
                <Text as="p" fontSize={2}>
                  <Box as={GoShield} verticalAlign="middle" mr={1} size={18} /> Your information is
                  always be safe with us.
                </Text>
              </Flex>
              <Flex width={[1, 1 / 2]} justifyContent="flex-end" px={1}>
                <Button rounded variant="solid">
                  Send Message
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Box>
      </VisibilitySensor>
    </Layout>
  );
};
export default Contact;
