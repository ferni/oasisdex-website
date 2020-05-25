/** @jsx jsx */
import { jsx, Container, Heading, Text, Button } from 'theme-ui';
import Link from 'next/link';

const Lead = () => {
  return (
    <Container
      sx={{
        textAlign: 'center',
        maxWidth: '768px',
        py: 6,
      }}
    >
      <Heading as="h1">Build on OasisDEX protocol</Heading>
      <Text variant="bodyLarge" sx={{ my: 3 }}>
        OasisDEX is a fully decentralized exchange protocol that allows anyone
        to provide and access liquidity on chain, with limit order support.
      </Text>
      <Link href="/docs">
        <a>
          <Button variant="textual">Go to Docs</Button>
        </a>
      </Link>
    </Container>
  );
};

export default Lead;
