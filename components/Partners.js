/** @jsx jsx */
import {
  jsx,
  Card,
  Container,
  Text,
  Heading,
  Grid,
  Link,
  Flex,
} from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';

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
    linkText: 'See ETH address',
    link: '/',
  },
];

const PartnersItem = ({ item: { name, type, link, linkText } }) => (
  <Card px={4}>
    <Grid columns={3}>
      <Text variant="bodyLarge">{name}</Text>
      <Text variant="bodyLarge">{type}</Text>
      <Link href={link}>
        <Flex
          sx={{ alignItems: 'center', fontSize: 5, justifyContent: 'flex-end' }}
        >
          <Text mr={2}>{linkText}</Text>
          <Icon name="arrow_right" />
        </Flex>
      </Link>
    </Grid>
  </Card>
);

const Partners = () => {
  return (
    <Container variant="landingContainer" mb={6}>
      <Heading variant="h2" sx={{ textAlign: 'center', mb: 5 }}>
        Including builders and partners like
      </Heading>
      <Grid>
        {PARTNERS.map((item, key) => (
          <PartnersItem {...{ item }} key={key} />
        ))}
      </Grid>
    </Container>
  );
};

export default Partners;
