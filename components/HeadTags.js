import Head from 'next/head';

const HeadTags = ({ theme }) => {
  const fontLinkHref = theme.metadata && theme.metadata.fontLinkHref;

  return (
    <Head>
      {fontLinkHref ? <link href={fontLinkHref} rel="stylesheet" /> : null}
    </Head>
  );
};

export default HeadTags;
