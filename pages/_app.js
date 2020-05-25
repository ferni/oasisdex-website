import App from 'next/app';
import MakerProvider from '../providers/MakerProvider';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

export default class MyApp extends App {
  state = {
    network: '',
  };

  componentDidMount() {
    let network;
    if (window.location.search.includes('kovan')) {
      network = 'kovan';
    } else if (window.location.search.includes('testnet')) {
      network = 'testnet';
    } else {
      network = 'mainnet';
    }
    this.setState({
      network,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { network } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>OasisDEX</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik&family=Space+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <MakerProvider network={network}>
          <Header />

          <Component {...pageProps} />
          <Footer />
        </MakerProvider>
      </ThemeProvider>
    );
  }
}
