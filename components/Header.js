/** @jsx jsx */
import { Container, jsx, NavLink, Flex } from 'theme-ui';
import Link from 'next/link';
import { Icon } from '@makerdao/dai-ui-icons';
import AccountConnect from './AccountConnect';

const Header = () => {
  return (
    <Container>
      <Flex
        sx={{
          alignItems: 'center',
        }}
      >
        <Icon name="logo" size={128} />
        <Flex
          as="nav"
          sx={{
            ml: [0, 'auto'],
            mr: [null, 0],
          }}
        >
          <Link href="/">
            <NavLink href="/">Home</NavLink>
          </Link>
          <Link href="/about">
            <NavLink href="/about">Docs</NavLink>
          </Link>
          <Link href="/about">
            <NavLink href="/about">FAQs</NavLink>
          </Link>
          <Link href="/about">
            <NavLink href="/about">Stats</NavLink>
          </Link>
          {/* <Flex sx={{ ml: 2 }}>
            <AccountConnect />
          </Flex> */}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
