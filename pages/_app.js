import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Prism from '@theme-ui/prism';
import HeadTags from '../components/HeadTags';

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme} components={components}>
      <HeadTags {...{ theme }} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
