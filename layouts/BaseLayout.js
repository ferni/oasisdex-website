/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};

export default BaseLayout;
