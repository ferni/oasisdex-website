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
    icon: 'one_inch',
  },
  {
    name: 'Kyber network',
    type: 'Builder',
    linkText: 'Visit site',
    link: '/',
    icon: 'kyber',
  },
  {
    name: '0x Protocol',
    type: 'Builder',
    linkText: 'Visit site',
    link: '/',
    icon: 'zero_x',
  },
  {
    name: 'dYdX',
    type: 'Market maker',
    linkText: 'See ETH address',
    link: '/',
    icon: 'dydx',
  },
];

const Partners = () => {
  return (
    <Container variant="landingContainer" my={6}>
      <Heading variant="h4" sx={{ textAlign: 'center', mb: 5 }}>
        Join 30+ builders and partners
      </Heading>
      <Grid columns={[1, 4]}>
        {PARTNERS.map(({ icon }, key) => (
          <Icon name={icon} size={5} key={key} sx={{ m: 'auto' }} />
        ))}
      </Grid>
    </Container>
  );
};

export default Partners;
