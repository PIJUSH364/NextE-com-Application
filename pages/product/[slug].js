import { Button, Typography, Box, Rating } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import ReplyIcon from '@mui/icons-material/Reply';
import Link from 'next/link';
import Image from 'next/image';
import { Stack } from '@mui/system';
import { Store } from '../../utils/Store';
export default function ProductDealils() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((e) => e.slug === slug);
  const divStyles = {
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius: '7px',
    minWidth: '12rem',
  };
  const addToCardHandler = () => {
    const existItem = state.cart.cartItems.find(
      (item) => item.slug === product.slug
    );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
    if (product.countInStock < quantity) {
      alert("You don't have to cart this item ");
      return;
    }
  };
  if (!product) {
    return <Typography>Product not fount!⚠️</Typography>;
  }
  return (
    <Layout title={product.name}>
      <Link href="/">
        <ReplyIcon />
      </Link>
      <Stack direction="row">
        <Stack>
          <Image
            src={product.image}
            alt="product-img"
            width={300}
            height={300}
          />
        </Stack>
        <Stack direction="row">
          <Stack p={2}>
            <Typography variant="body1">{product.name}</Typography>
            <Typography variant="body1">
              Category : {product.category}
            </Typography>{' '}
            <Typography variant="body1">Brand : {product.brand}</Typography>
            <Rating
              name="read-only"
              value={2.3}
              readOnly
              precision={product.rating}
            />
            <Typography variant="body2">
              Description : {product.description}
            </Typography>
          </Stack>
          <Stack>
            <Box p={1} sx={divStyles}>
              <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                <Typography variant="body1">Price :</Typography>
                <Typography variant="body1">{product.price}</Typography>
              </Stack>
              <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                <Typography variant="body1">Status :</Typography>
                <Typography variant="body1">
                  {product.countInStock > 0 ? `In Stock` : `Out Of Stock`}
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#B0BF1A', width: '100%' }}
                onClick={addToCardHandler}
              >
                Add to Card
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}
