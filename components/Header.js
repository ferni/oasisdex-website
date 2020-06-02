/** @jsx jsx */
import { jsx, NavLink, Flex, Container, Link as ThemeLink } from 'theme-ui';
import Link from 'next/link';
import { Icon } from '@makerdao/dai-ui-icons';

const LINKS = [
  { url: '/', name: 'Home' },
  { url: '/docs/introduction', name: 'Docs' },
  { url: '/faq', name: 'FAQs' },
  { url: '/stats', name: 'Stats' },
];

const Header = () => {
  return (
    <Container as="nav" mt={3}>
      <Flex
        sx={{
          alignItems: 'center',
          mb: [2, 4],
        }}
      >
        <Link href="/" passHref>
          <ThemeLink sx={{ color: 'onSurface' }}>
            <Icon
              name="logo_only"
              size="auto"
              width="40"
              height="40"
              sx={{ display: ['block', 'none'] }}
            />
            <Icon
              name="logo"
              size="auto"
              width="152"
              height="40"
              sx={{ display: ['none', 'block'] }}
            />
          </ThemeLink>
        </Link>
        <Flex
          as="nav"
          sx={{
            ml: ['auto'],
            mr: [null, 0],
          }}
        >
          {LINKS.map(({ url, name }) => (
            <Link href={url} passHref key={url}>
              <NavLink sx={{ '&:last-child': { pr: 0 } }}>{name}</NavLink>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
