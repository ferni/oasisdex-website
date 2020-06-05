import Link from 'next/link';
import { Container, Box, Grid, NavLink } from 'theme-ui';
import { useRouter } from 'next/router';

import BaseLayout from '../layouts/BaseLayout';

const NAV_ITEMS = [
  { name: 'Introduction', link: '/introduction' },
  { name: 'Use Proxy', link: '/use-proxy' },
];

const BASE_PATH = '/docs';

const isActive = (pathname, link) => pathname === `${BASE_PATH}${link}`;

const DocsLayout = ({ children }) => {
  const router = useRouter();

  return (
    <BaseLayout>
      <Container my={[3, 5]}>
        <Grid columns={[1, '200px 1fr']} sx={{ alignItems: 'flex-start' }}>
          <Grid>
            {NAV_ITEMS.map(({ name, link }, key) => (
              <Link href={`${BASE_PATH}${link}`} key={key} passHref>
                <NavLink
                  sx={{
                    p: 0,
                    color: isActive(router.pathname, link) ? 'primary' : 'text',
                  }}
                >
                  {name}
                </NavLink>
              </Link>
            ))}
          </Grid>
          <Box
            sx={{
              // Omit margin top of first element from mdx file
              '& > *:first-of-type': {
                mt: 0,
              },
            }}
          >
            {children}
          </Box>
        </Grid>
      </Container>
    </BaseLayout>
  );
};

export default DocsLayout;
