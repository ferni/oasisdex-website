/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading } from 'theme-ui';

const QuickStats = () => {
  return (
    <Box sx={{ backgroundColor: 'surface', pt: 5, pb: 3 }}>
      <Container>
        <Flex>
          <Heading>Some Data</Heading>
          <Heading>Some Data</Heading>
          <Heading>Some Data</Heading>
        </Flex>
      </Container>
    </Box>
  );
};

export default QuickStats;
