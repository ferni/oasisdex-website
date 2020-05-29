/** @jsx jsx */
import { jsx } from 'theme-ui';
import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';
import Lead from '../components/Lead';
import Features from '../components/Features';
import QuickStats from '../components/QuickStats';
import ProtocolDescription from '../components/ProtocolDescription.mdx';
import GetStarted from '../components/GetStarted';
import Partners from '../components/Partners';
import Marketing from '../components/Marketing';
import PartnersSmall from '../components/PartnersSmall';

const Index = () => (
  <BaseLayout>
    <Head>
      <title>OasisDex Website</title>
    </Head>
    <Lead />
    <Marketing />
    {/* <QuickStats /> */}
    {/* <ProtocolDescription /> */}
    {/* <Features /> */}
    {/* <GetStarted /> */}
    {/* <Partners /> */}
    <PartnersSmall />
  </BaseLayout>
);

export default Index;
