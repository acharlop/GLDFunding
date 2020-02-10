import React from 'react';

import { Header, Features, Steps, Testimonials, CTA } from './components';
import { Layout } from '../../components';
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
