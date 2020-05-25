/** @jsx jsx */
import { Container, jsx, Card, Flex, Grid } from 'theme-ui';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SkinnyContentLayout = ({ children }) => {
  return (
    <Container mt={3}>
      <Header />
      <Container
        sx={{
          maxWidth: '960px',
        }}
      >
        <Card sx={{ py: 0, px: 4 }}>{children}</Card>
      </Container>
      <Footer />
    </Container>
  );
};

export default SkinnyContentLayout;
