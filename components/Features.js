/** @jsx jsx */
import { jsx, Container, Box, Text, Heading } from 'theme-ui';
import CodeSnippetMdx from '../text/codeSnippet.mdx';

const Features = () => {
  return (
    <Box
      sx={{
        borderTop: 'light',
        borderBottom: 'light',
        borderColor: 'onBackgroundEmphasis',
      }}
    >
      <Container sx={{ py: [4, 6], my: 4 }}>
        <Container variant="landingContainer" px={[3, 0]} mb={4}>
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
