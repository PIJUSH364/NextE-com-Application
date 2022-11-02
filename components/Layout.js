import React, { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { Store } from '../utils/Store';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import index from '../styles/index.module.css';
function Layout({ children, title }) {
  const [cartItemsCount, setcartItemsCount] = useState(0);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  useEffect(() => {
    setcartItemsCount(
      cart.cartItems.reduce(
        (previousCartValue, currentItem) =>
          previousCartValue + currentItem.quantity,
        0
      )
    );
  }, [cart.cartItems]);
  return (
    <>
      <Head>
        <title>{title ? `${title}-QuickHub` : `QuickHub`}</title>
        <meta autor="pijush ray mondal" content="Devoloper" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        direction="column"
        minHeight="100vh"
        justifyContent="space-between"
      >
        <header>
          <Stack
            justifyContent="space-between"
            direction="row"
            p={1}
            alignItems="center"
            sx={{ boxShadow: 3 }}
          >
            <Link href="/">
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                QuickHub
              </Typography>
            </Link>
            <Stack direction="row" spacing={1}>
              <Link href="/cart">
                <>
                  <IconButton aria-label="cart">
                    <StyledBadge
                      badgeContent={cartItemsCount > 0 ? cartItemsCount : 0}
                      color="error"
                    >
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </>
              </Link>
              <Link href="/login">
                <Typography>login</Typography>
              </Link>
            </Stack>
          </Stack>
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </Stack>
    </>
  );
}

export default Layout;
