/** @jsx jsx */
import { jsx, Container, Box, Text, Heading } from 'theme-ui';
import CodeSnippetMdx from '../text/codeSnippet.mdx';

const Features = () => {
  return (
    <Box sx={{ border: '1px solid', borderColor: 'onBackgroundEmphasis' }}>
      <Container sx={{ py: 6, my: 4 }}>
        <Container variant="landingContainer" mb={4}>
          <Text variant="sectionTitle" sx={{ mb: 4 }}>
            Features
          </Text>
          <Heading mb={2}>One Method</Heading>
          <Text fontSize={5}>for 99% of your implementation</Text>
        </Container>
        <CodeSnippetMdx />
      </Container>
    </Box>
  );
};

export default Features;
