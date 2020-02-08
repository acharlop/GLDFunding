import React, { useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import { GoShield } from 'react-icons/go';

import { Card, Button, Tabs, Input } from './';
import { useTabs } from '../hooks';
import { steps } from '../constants';

const tabs = [
  {
    step: 1,
    title: 'Contact information',
  },
  {
    step: 2,
    title: 'Business Needs',
  },
  {
    step: 3,
    title: 'Business information',
  },
];

const fieldProps = {
  mb: [1, 1, 3],
  mt: 1,
  required: true,
  height: ['1.5rem', '40px'],
};
const columnProps = {
  width: [1, 1 / 2],
  flexDirection: 'column' as 'column',
  px: 1,
};
export const StepForm = () => {
  const { getTabProps, active, getTabListProps, selectTab } = useTabs();
  const [data, setData] = useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  const back = () => {
    if (active > 0) {
      selectTab(active - 1);
    }
  };

  return (
    <Box m="auto" maxWidth="1200px" p={2}>
      <Card
        as="form"
        method="post"
        css={{
          transform: 'translateY(-4rem)',
          overflow: 'hidden',
        }}
        onSubmit={handleSubmit}
      >
        <Tabs {...getTabListProps()}>
          {tabs.map(
            (el, i) =>
              el && (
                <Tabs.Tab
                  key={el.title}
                  {...getTabProps(i)}
                  color={active > i ? 'white' : 'gray300'}
                  fontSize={[1, 2]}
                >
                  {el.step} {el.title}
                </Tabs.Tab>
              )
          )}
        </Tabs>
        {steps.map(
          ({ title, fields }, i) =>
            i === active && (
              <Flex width={1} flexWrap="wrap" p={2} mx="auto" maxWidth="1000px" key={i}>
                <Text
                  as="h4"
                  fontSize={[4, 5]}
                  fontFamily="heading"
                  color="gray500"
                  mb={[1, 2]}
                  mt={[0, 1]}
                  width={1}
                >
                  {title}
                </Text>
                <Flex {...columnProps}>
                  {fields.slice(0, 3).map(el => (
                    <Input {...el} key={el.name} {...fieldProps} />
                  ))}
                </Flex>
                <Flex {...columnProps}>
                  {fields.slice(3, fields.length).map(el => (
                    <Input {...el} key={el.name} {...fieldProps} />
                  ))}
                </Flex>
              </Flex>
            )
        )}
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
            <Button
              mr={1}
              variant="outline"
              type="button"
              rounded
              onClick={back}
              disabled={active < 1}
            >
              <Box as={IoMdArrowBack} mr={1} size={20} /> Back
            </Button>
            <Button rounded variant="solid">
              Next <Box as={IoMdArrowForward} ml={1} size={20} />
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};
