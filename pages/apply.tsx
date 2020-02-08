import React from 'react';

import { Layout, BreadCrumb, StepForm } from '../components';
export const Apply = () => {
  return (
    <Layout>
      <BreadCrumb src="apply" title="Apply Now" />
      <StepForm />
    </Layout>
  );
};
export default Apply;
