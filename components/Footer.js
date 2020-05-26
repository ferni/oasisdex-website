/** @jsx jsx */
import { jsx, NavLink, Flex, Container } from 'theme-ui';
import Link from 'next/link';
import { Icon } from '@makerdao/dai-ui-icons';

const Footer = () => {
  return (
    <Container as="footer">
      <Flex
        sx={{
          alignItems: 'center',
          mb: [2, 4],
        }}
      >
        <Icon name="maker" size={5} />
        <Flex
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

export default Footer;
