import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from 'rebass';
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';
import { GoShield } from 'react-icons/go';

import { Layout, PageTitle, Card, Button, Tabs, Input } from '../../components';
import { useTabs } from '../../hooks';
import { steps } from './steps';

const tabs = [
  {
    step: 1,
    title: 'Contact info',
  },
  {
    step: 2,
    title: 'Business info',
  },
  {
    step: 3,
    title: 'Business addr',
  },
];

const fieldProps = {
  mb: [1, 1, 3],
  mt: 1,
  required: true,
};
const columnProps = {
  width: [1, 'calc(50% - 1rem)'],
  flexDirection: 'column' as 'column',
};
export const Apply = () => {
  const { getTabProps, active, getTabListProps, selectTab } = useTabs();
  const [data, setData] = useState<{ [key: string]: number | string }>({});
  const [completed, setCompleted] = useState<{ [key: string]: boolean }>({});
  const [animated, setAnimated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newStep: { [key: string]: boolean } = {
      ...completed,
    };
    newStep[active] = true;
    setCompleted(newStep);
    if (active < tabs.length - 1) {
      selectTab(active + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newData: { [key: string]: number | string } = {
      ...data,
    };
    newData[name] = value;
    setData(newData);
  };

  const back = () => {
    if (active > 0) {
      selectTab(active - 1);
    }
  };

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <Layout>
      <PageTitle src="apply" title="Apply Now" />
      <Box
        m="auto"
        maxWidth="1200px"
        p={[1, 2]}
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
                    fontSize={2}
                  >
                    {el.title}
                  </Tabs.Tab>
                )
            )}
          </Tabs>
          <Flex width={1} flexWrap="wrap" mx="auto" maxWidth="1000px">
            {steps.map(
              ({ title, fields }, i) =>
                i === active && (
                  <Flex width={1} flexWrap="wrap" key={i} justifyContent="space-between" p={2}>
                    <Text
                      as="h4"
                      fontSize={[4, 5]}
                      fontFamily="heading"
                      color="gray500"
                      mb={[1, 2]}
                      mt={[0, 1]}
                      width={1}
                      className="hide-sm"
                    >
                      {title}
                    </Text>
                    <Flex {...columnProps}>
                      {fields.slice(0, 3).map(el => (
                        <Input
                          {...el}
                          key={el.name}
                          {...fieldProps}
                          onChange={handleChange}
                          value={data[el.name] || ''}
                        />
                      ))}
                    </Flex>
                    <Flex {...columnProps}>
                      {fields.slice(3, fields.length).map(el => (
                        <Input
                          {...el}
                          key={el.name}
                          {...fieldProps}
                          onChange={handleChange}
                          value={data[el.name] || ''}
                        />
                      ))}
                    </Flex>
                  </Flex>
                )
            )}
            <Flex
              flexWrap="wrap"
              mt={1}
              justifyContent="flex-end"
              width={1}
              p={2}
              css={{
                borderTop: '1px solid #e6e6e6;',
              }}
            >
              <Flex width={[1, 1 / 2]} alignItems="center" className="hide-sm">
                <Text as="p" fontSize={2}>
                  <Box as={GoShield} verticalAlign="middle" mr={1} size={18} /> Your information is
                  always be safe with us.
                </Text>
              </Flex>
              <Flex width={[1, 1 / 2]} justifyContent="flex-end">
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
          </Flex>
        </Card>
      </Box>
    </Layout>
  );
};

export default Apply;
