/** @jsx jsx */
import { useState, useEffect } from 'react';
import {
  Container,
  jsx,
  Card,
  Heading,
  Text,
  Grid,
  Box,
  Flex,
  Button,
} from 'theme-ui';

import BackgroundIll from '../components/BackgroundIll';

const Index = () => {
  const sections = [
    [
      'Boost liquidity and give your users the best price ',
      'Give your users the best price on the market by increasing liquidity. OasisDEX allows anyone to trustlessly integrate with the protocol.',
    ],
    [
      'Make markets and compete for profit opportunities ',
      'Automate your arbitrage profit seeking strategy by running scripts with OasisDEX smart contracts.  ',
    ],
    [
      'Grow the ecosystem with your own front-end ',
      'Strengthen the ecosystem by building your own front-end on OasisDEX. Provide your users with on-chain order book functionality.',
    ],
  ];
  return (
    <>
      <BackgroundIll />
      <Container>
        <Flex
          sx={{
            height: '80vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Heading pb={2}>Build on OasisDEX protocol</Heading>
            <Text
              variant="largerBody"
              sx={{
                pb: 3,
                maxWidth: 768,
                margin: '0 auto',
              }}
            >
              OasisDEX is a fully decentralized exchange protocol that allows
              anyone to provide and access liquidity on chain, with limit order
              support.{' '}
            </Text>

            <Flex
              sx={{
                justifyContent: 'center',
              }}
            >
              <Button>Primary Button</Button>
            </Flex>
          </Box>
        </Flex>

        {sections.map(([title, body]) => {
          return (
            <Grid
              gap="2"
              py={6}
              sx={{
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              <Heading variant="heading2">{title}</Heading>
              <Text>{body}</Text>
            </Grid>
          );
        })}

        <Box pb={7}>
        <Heading
          variant="heading2"
          sx={{
            m: '0 auto',
            textAlign: 'center'
            // width: '100%',
          }}
        >
          Join 30+ builders and partners{' '}
        </Heading>
        <Text
          
        >
          {' '}
          something here...
        </Text>
        </Box>
      </Container>
    </>
  );
};

export default Index;
