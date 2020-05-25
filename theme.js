import oasisTheme from '@makerdao/dai-ui-theme-oasis';
import { icons } from '@makerdao/dai-ui-icons';

const theme = {
  ...oasisTheme,
  icons,
  text: {
    ...oasisTheme.text,
    heading: {
      ...oasisTheme.text.heading,
      letterSpacing: '-0.04em',
    },
  },
  metadata: {
    fontLinkHref:
      'https://fonts.googleapis.com/css2?family=Rubik&family=Space+Mono:wght@400;700&display=swap',
  },
};

export default theme;
