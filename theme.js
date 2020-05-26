import oasisTheme from '@makerdao/dai-ui-theme-oasis';
import { icons } from '@makerdao/dai-ui-icons';

const theme = {
  ...oasisTheme,
  icons,
  colors: {
    ...oasisTheme.colors,
    onBackgroundEmphasis: '#31434A',
    onSurfaceEmphasis: '#364C56',
  },
  text: {
    ...oasisTheme.text,
    heading: {
      ...oasisTheme.text.heading,
      letterSpacing: '-0.04em',
    },
    sectionTitle: {
      fontSize: 3,
      color: 'onBackgroundAlt',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  metadata: {
    fontLinkHref:
      'https://fonts.googleapis.com/css2?family=Rubik&family=Space+Mono:wght@400;700&display=swap',
  },
};

export default theme;
