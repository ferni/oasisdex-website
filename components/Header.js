/** @jsx jsx */
import { jsx, Flex, Container, Link as ThemeLink, NavLink } from 'theme-ui';
import Link from 'next/link';
import { Icon } from '@makerdao/dai-ui-icons';
import { useState } from 'react';

const LINKS = [
  { url: '/', name: 'Home' },
  { url: '/docs/introduction', name: 'Docs' },
  { url: '/faq', name: 'FAQs' },
  { url: '/stats', name: 'Stats' },
];

const NavLinks = ({ setOpened }) =>
  LINKS.map(({ url, name }) => (
    <Link href={url} passHref key={url}>
      <NavLink
        sx={{ '&:last-child': { pr: [null, 0] } }}
        onClick={() => setOpened(false)}
        variant="links.nav"
      >
        {name}
      </NavLink>
    </Link>
  ));

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Container as="header" mt={3}>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: [2, 4],
        }}
      >
        <Link href="/" passHref>
          <ThemeLink
            sx={{ color: 'onSurface', position: 'relative', zIndex: 1 }}
          >
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
            display: [opened ? 'flex' : 'none', 'flex'],
            ...(opened && {
              position: ['fixed', 'initial'],
              top: ['0', 'initial'],
              bottom: ['0', 'initial'],
              left: ['0', 'initial'],
              right: ['0', 'initial'],
              bg: ['surface', 'initial'],
              alignItems: ['center', 'initial'],
              justifyContent: ['flex-start', 'initial'],
              flexDirection: ['column', 'initial'],
              pt: [6, 'initial'],
            }),
          }}
        >
          <NavLinks {...{ setOpened }} />
        </Flex>
        <Icon
          name={opened ? 'hamburger_opened' : 'hamburger_closed'}
          width="40"
          height="25"
          size="auto"
          sx={{
            display: ['block', 'none'],
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1,
            'rect:last-of-type': {
              fill: opened ? 'currentColor' : 'primary',
            },
          }}
          onClick={() => setOpened(!opened)}
        />
      </Flex>
    </Container>
  );
};

export default Header;
