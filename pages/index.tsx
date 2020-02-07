import React from 'react';
import dynamic, { DynamicOptions } from 'next/dynamic';

import { Layout, Header, Features, Steps, Testimonials, CTA } from '../components';

export const Home = () => (
  <Layout>
    <Header />
    <Features />
    <Steps />
    <Testimonials />
    <CTA />
  </Layout>
);
export default Home;
