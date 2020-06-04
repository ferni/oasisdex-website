/** @jsx jsx */
import {
  jsx,
  Button,
  Card,
  Container,
  Text,
  Heading,
  Grid,
  Link,
  Flex,
} from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';
import { useState } from 'react';

const PARTNERS_INCREMENT = 4;

const PARTNERS = [
  {
    name: '1inch Exchange',
    type: 'Builder',
    linkText: 'Visit site',
    link: '/',
  },
  {
    name: 'Kyber network',
    type: 'Builder',
    linkText: 'Visit site',
    link: '/',
  },
  {
    name: '0x Protocol',
    type: 'Builder',
    linkText: 'Visit site',
    link: '/',
  },
  {
    name: 'Anonymous',
    type: 'Market maker',
    linkText: 'ETH address',
    link: '/',
  },
  {
    name: '1inch Exchange',
    type: 'Builder',
    linkText: 'Visit site',
    link: '/',
  },
  {
    name: 'Kyber network',
    type: 'Builder',
    linkText: 'Visit site',
    link: '/',
  },
  {
    name: '0x Protocol',
    type: 'Builder',
    linkText: 'Visit site',
    link: '/',
  },
  {
    name: 'Anonymous',
    type: 'Market maker',
    linkText: 'ETH address',
    link: '/',
  },
];

const PartnersItem = ({ item: { name, type, link, linkText } }) => (
  <Card px={4}>
    <Grid columns={[2, 3]}>
      <Text variant="bodyLarge">{name}</Text>
      <Text variant="bodyLarge" sx={{ display: ['none', 'block'] }}>
        {type}
      </Text>
      <Link href={link}>
        <Flex sx={{ alignItems: 'center', justifyContent: 'flex-end' }}>
          <Text sx={{ fontFamily: 'heading', fontSize: [4, 5], mr: 2 }}>
            {linkText}
          </Text>
          <Icon name="arrow_right" />
        </Flex>
      </Link>
    </Grid>
  </Card>
);

const Partners = () => {
  const [visiblePartners, setVisiblePartners] = useState(PARTNERS_INCREMENT);

  return (
    <Container variant="landingContainer" mb={6}>
      <Heading sx={{ textAlign: 'center', mb: 5 }}>
        Including builders and partners like
      </Heading>
      <Grid>
        {PARTNERS.slice(0, visiblePartners).map((item, key) => (
          <PartnersItem {...{ item }} key={key} />
        ))}
        {visiblePartners < PARTNERS.length ? (
          <Button
            onClick={() =>
              setVisiblePartners(visiblePartners + PARTNERS_INCREMENT)
            }
            variant="textual"
          >
            Show More
          </Button>
        ) : null}
      </Grid>
    </Container>
  );
};

export default Partners;
