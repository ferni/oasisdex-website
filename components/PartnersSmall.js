/** @jsx jsx */
import { jsx, Container, Heading, Grid } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';

const PARTNERS = [
  {
    icon: 'zerox',
    size: 5,
  },
  {
    icon: 'oneinch',
    size: 5,
  },
  {
    icon: 'kyber',
    size: 6,
  },
];

const Partners = () => {
  return (
    <Container variant="landingContainer" my={6}>
      <Heading variant="h4" sx={{ textAlign: 'center', mb: 5 }}>
        Join 30+ builders integrating OasisDEX Protocol
      </Heading>
      <Grid columns={3} style={{display: 'none'}}>
        {PARTNERS.map(({ icon, size }, key) => (
          <Icon
            name={icon}
            size={size}
            color="onBackground"
            key={key}
            sx={{ m: 'auto' }}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Partners;
