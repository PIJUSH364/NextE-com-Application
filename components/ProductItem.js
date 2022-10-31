/* eslint-disable @next/next/no-img-element */

import { Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function productItem({ product }) {
  const divStyles = {
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    borderRadius: '7px',
    marginTop: '1em',
  };
  return (
    <div className="card" style={divStyles}>
      <Stack p={1}>
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            style={{ minWidth: '8rem', maxWidth: '12rem' }}
          />
        </Link>
      </Stack>

      <Stack p={1}>
        <Link href={`/product/${product.slug}`}>
          <Typography variant="body1">{product.name}</Typography>
        </Link>
        <Typography variant="body2">{product.brand}</Typography>{' '}
        <Typography variant="body2">${product.price}</Typography>
        <Button variant="contained" sx={{ backgroundColor: '#B0BF1A' }}>
          Add to cart
        </Button>
      </Stack>
    </div>
  );
}

export default productItem;
