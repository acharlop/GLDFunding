import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Flex, Text } from 'rebass';
import VisibilitySensor from 'react-visibility-sensor';

import { Layout, Card, Button, BreadCrumb, StepForm } from '../components';

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
      <BreadCrumb src="contact.jpg" title="Apply Now" />
      <VisibilitySensor onChange={onView} active={sense} partialVisibility minTopValue={300}>
        <StepForm />
      </VisibilitySensor>
    </Layout>
  );
};
export default Contact;
