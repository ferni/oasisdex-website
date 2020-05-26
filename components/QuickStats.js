/** @jsx jsx */
import {
  jsx,
  Box,
  Flex,
  Text,
  Container,
  Link,
  Heading,
  Divider,
} from 'theme-ui';

const QuickStats = () => {
  return (
    <Box sx={{ backgroundColor: 'surface', pt: 5, pb: 3 }}>
      <Container sx={{ fontFamily: 'heading' }}>
        <Flex sx={{ justifyContent: 'space-between', mb: 5, mt: 3 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Heading>$10.21M</Heading>
            <Text color="onSurfaceAlt">Total Volume</Text>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Heading>$1.21M</Heading>
            <Text color="onSurfaceAlt">Daily Volume</Text>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Heading>55,000</Heading>
            <Text color="onSurfaceAlt">Daily trades</Text>
          </Box>
        </Flex>
        <Box>
          <Divider
            sx={{
              maxWidth: '170px',
              textAlign: 'center',
              mx: 'auto',
              opacity: '0.7',
            }}
          />
          <Text
            sx={{
              color: 'onSurfaceAlt',
              fontSize: 5,
              textAlign: 'center',
              my: 4,
            }}
          >
            More at <Link>communitystats.com</Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default QuickStats;
