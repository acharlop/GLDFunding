import React from 'react';
import dynamic, { DynamicOptions } from 'next/dynamic';

import { Layout, Header, Features, Steps, Testimonials, Message } from '../components';

export const Home = () => (
  <Layout>
    <Header />
    <Features />
    <Steps />
    <Testimonials />
    <Message />
  </Layout>
);
export default Home;
