import React from 'react';
import dynamic, { DynamicOptions } from 'next/dynamic';

import { Layout } from '../components';

const Header = dynamic<DynamicOptions>((() => import('../components').then(x => x.Header)) as any);
const Features = dynamic<DynamicOptions>((() =>
  import('../components').then(x => x.Features)) as any);
const Steps = dynamic<DynamicOptions>((() => import('../components').then(x => x.Steps)) as any);
const Message = dynamic<DynamicOptions>((() =>
  import('../components').then(x => x.Message)) as any);
const Testimonials = dynamic<DynamicOptions>((() =>
  import('../components').then(x => x.Testimonials)) as any);

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
