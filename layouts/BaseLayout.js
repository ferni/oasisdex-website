import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { useColorMode, Box } from 'theme-ui';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BaseLayout = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();
  const router = useRouter();

  useLayoutEffect(() => {
    if (router.pathname.includes('docs')) {
      if (colorMode !== 'light') {
        setColorMode('light');
      }
    } else if (colorMode === 'light') {
      setColorMode('default');
    }
  }, [router]);

  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};

export default BaseLayout;
