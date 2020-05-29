/** @jsx jsx */
import { jsx, Container, Text, Heading, Box, Grid, Link, Flex } from 'theme-ui';
import { Icon } from '@makerdao/dai-ui-icons';

const USER_CASES = [
  {
    heading: 'Boost liquidity and give your users the best price',
    description:
      'Give your users the best price on the market by increasing liquidity. OasisDEX allows anyone to trustlessly integrate with the protocol.',
    link: '/docs/introduction',
    icon: 'liquidity',
    color: 'primary',
  },
  {
    heading: 'Make markets and compete for profit opportunities',
    description:
      'Automate your arbitrage profit seeking strategy by running scripts with OasisDEX smart contracts.',
    link: '/docs/introduction',
    icon: 'profit',
    color: '#9ED317',
  },
  {
    heading: 'Grow the ecosystem with your own front-end',
    description:
      'Strengthen the ecosystem by building your own front-end on OasisDEX. Provide your users with on-chain order book functionality.',
    link: '/docs/introduction',
    icon: 'growth',
    color: '#B31C55',
  },
];

const GetStartedItem = ({
  item: { heading, description, link, icon, color },
}) => (
  <Grid
    columns={['1', '1fr 2fr']}
    gap={[4, 5]}
    sx={{
      alignItems: 'center',
      pt: [4, 5],
    }}
  >
    <Box>
      <Icon name={icon} color={color} size={7} sx={{ p: 3 }} />
    </Box>

    {/* TODO: make this a stack component */}
    <Box sx={{ px: 3 }}>
      <Heading variant="h4" mb={2} sx={{ color }}>
        {heading}
      </Heading>
      <Text variant="bodySmall">{description}</Text>
      <Link href={link}>
        <Flex sx={{ alignItems: 'center', fontSize: 5 }}>
          <Text sx={{ color }} mr={2}>
            Call to action
          </Text>
          <Icon name="arrow_right" color={color} />
        </Flex>
      </Link>
    </Box>
  </Grid>
);

const GetStarted = () => {
  return (
    <Container variant="landingContainer" sx={{ py: 0, my: 4, px: 3 }}>
      <Box>
        {USER_CASES.map((item, key) => (
          <GetStartedItem {...{ item }} key={key} />
        ))}
      </Box>
    </Container>
  );
};

export default GetStarted;
