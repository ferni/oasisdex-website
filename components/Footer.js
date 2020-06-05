/** @jsx jsx */
import { jsx, NavLink, Flex, Container, Link as ThemeLink } from 'theme-ui';
import Link from 'next/link';
import { Icon } from '@makerdao/dai-ui-icons';

const LINKS = [{ url: '/terms', name: 'Terms' }];

const Footer = () => {
  return (
    <Container as="footer">
      <Flex
        sx={{
          alignItems: 'center',
          mb: [2, 4],
        }}
      >
        <Link href="/" passHref>
          <ThemeLink sx={{ color: 'onSurface' }}>
            <Icon name="logo" size="auto" width="152" height="40" />
          </ThemeLink>
        </Link>
        <Flex
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

export default Footer;
