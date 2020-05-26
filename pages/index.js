/** @jsx jsx */
import { jsx } from 'theme-ui';
import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';
import Lead from '../components/Lead';
import Features from '../components/Features';
import QuickStats from '../components/QuickStats';
import ProtocolDescription from '../components/ProtocolDescription.mdx';
import GetStarted from '../components/GetStarted';

const Index = () => (
  <BaseLayout>
    <Head>
      <title>OasisDex Website</title>
    </Head>
    <Lead />
    <QuickStats />
    <ProtocolDescription />
    <Features />
    <GetStarted />
  </BaseLayout>
);

export default Index;
