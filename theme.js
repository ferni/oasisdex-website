import oasisTheme from '@makerdao/dai-ui-theme-oasis';
import { icons } from '@makerdao/dai-ui-icons';

const theme = {
  ...oasisTheme,
  icons: {
    ...icons,
    arrowRight: {
      path: (
        <path
          d="M19.4908 10.0863L19.5969 10.1924L19.4908 10.2984L18.8347 10.9546L18.8338 10.9555L12.9248 16.8644C12.5036 17.2856 11.8207 17.2856 11.3995 16.8644C10.9783 16.4432 10.9783 15.7603 11.3995 15.3391L15.4677 11.2709L2.31319 11.2709C1.71752 11.2709 1.23462 10.7881 1.23462 10.1924C1.23462 9.5967 1.71752 9.11381 2.31319 9.11381L15.4677 9.11381L11.3995 5.04565C10.9783 4.62444 10.9783 3.94153 11.3995 3.52032C11.8207 3.09911 12.5036 3.09911 12.9248 3.52032L18.8338 9.42926L18.8347 9.43017L19.4908 10.0863Z"
          strokeWidth="0.3"
          strokeLinecap="round"
          fill="currentColor"
        />
      ),
      viewBox: '0 0 20 20',
    },
  },
  colors: {
    ...oasisTheme.colors,
    onBackgroundEmphasis: '#31434A',
    onSurfaceEmphasis: '#364C56',
  },
  borders: {
    ...oasisTheme.borders,
    light: '1px solid',
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
