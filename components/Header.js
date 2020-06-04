/** @jsx jsx */
import { jsx, Flex, Container, Link as ThemeLink } from 'theme-ui';
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
      <ThemeLink
        sx={{ '&:last-child': { pr: [null, 0] } }}
        onClick={() => setOpened(false)}
        variant="links.nav"
      >
        {name}
      </ThemeLink>
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
            display: ['none', 'flex'],
          }}
        >
          <NavLinks {...{ setOpened }} />
        </Flex>
        <Flex
          as="nav"
          sx={{
            display: [opened ? 'flex' : 'none', 'none'],
            position: 'fixed',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            bg: 'surface',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            pt: 6,
          }}
        >
          <NavLinks {...{ setOpened }} />
        </Flex>

        <Icon
          name={opened ? 'hamburger_close' : 'hamburger_open'}
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
