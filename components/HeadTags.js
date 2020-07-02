import Head from 'next/head';

const HeadTags = ({ theme }) => {
  const fontLinkHref = theme.metadata && theme.metadata.fontLinkHref;

  return (
    <Head>
      {fontLinkHref ? <link href={fontLinkHref} rel="stylesheet" /> : null}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTags;
