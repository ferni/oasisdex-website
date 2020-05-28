/** @jsx jsx */
import { jsx, NavLink, Flex, Container } from 'theme-ui';
import Link from 'next/link';
import { Icon } from '@makerdao/dai-ui-icons';

const Header = () => {
  return (
    <Container as="nav" mt={3} px={[3, 0]}>
      <Flex
        sx={{
          alignItems: 'center',
          mb: [2, 4],
        }}
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
        <Flex
          as="nav"
          sx={{
            ml: ['auto'],
            mr: [null, 0],
          }}
        >
          <Link href={{ pathname: '/' }} passHref>
            <NavLink>Home</NavLink>
          </Link>
          <Link href={{ pathname: '/docs/introduction' }} passHref>
            <NavLink>Docs</NavLink>
          </Link>
          <Link href={{ pathname: '/faq' }} passHref>
            <NavLink>FAQs</NavLink>
          </Link>
          <Link href={{ pathname: '/stats' }} passHref>
            <NavLink>Stats</NavLink>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
