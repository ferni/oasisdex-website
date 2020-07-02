/** @jsx jsx */
import { jsx, Heading, Container } from 'theme-ui';
import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';
import Questions from '../components/Questions';

const QUESTIONS_AND_ANSWERS = [{
  q: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit asdfasdf asdf asd fasdf ?',
  a: <span>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </span>
}, {
  q: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  a: <span>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </span>
}, {
  q: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  a: <span>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </span>
}];

const FAQs = () => (
  <BaseLayout>
    <Head>
      <title>OasisDEX Protocol - FAQs</title>
    </Head>
    <Container sx={{ minHeight: '650px', pt: '38px', pb: '100px', pl: '30px'}}>
      <Heading variant="largeHeading" as="h1">
        FAQs
      </Heading>
      <Questions questions={QUESTIONS_AND_ANSWERS} sx={{marginTop: '20px'}}/>
    </Container>
  </BaseLayout>
);

export default FAQs;
