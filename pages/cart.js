import {
  Typography,
  Stack,
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box } from '@mui/system';
import dynamic from 'next/dynamic';

function cartDeatils() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  Image;
  const { cartItems } = cart;
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    return;
  };
  // quantity state change
  const updateCartHandler = (item, e) => {
    const quantity = Number(e.target.value);

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    // console.log(item);
    setQuantity(quantity);
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <Layout title="Shopping List">
      <Typography variant="h6">Shopping cart</Typography>
      {cartItems.length === 0 ? (
        <Stack direction="row">
          Cart is empty.
          <Link href="/">Go For Shopping</Link>
        </Stack>
      ) : (
        <Stack direction="row" m={2}>
          <TableContainer component={Paper} m={2}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Item</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      <Link href={`/product/${item.slug}`}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={40}
                          height={40}
                        ></Image>{' '}
                        {item.name}
                      </Link>
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {/* {item.quantity} */}
                      <TextField
                        select
                        value={item.quantity}
                        onChange={(e) => updateCartHandler(item, e)}
                        // fullWidth //fullwidth : fixed width same as parent component(inherit width)
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </TextField>
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {item.price}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <button
                        onClick={() => removeItemHandler(item)}
                        style={{ outline: 'none', border: 'none' }}
                      >
                        <RemoveShoppingCartIcon />
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            component={Paper}
            sx={{ minWidth: '200px' }}
            p={1}
            marginLeft={1}
          >
            <Box marginBottom={1}>
              <>
                Subtotal (
                {cartItems.reduce((prev, cur) => prev + cur.quantity, 0)}
                ):$
                {cartItems.reduce(
                  (prev, cur) => prev + cur.quantity * cur.price,
                  0
                )}
              </>
            </Box>
            <Button
              onClick={() => router.push('/shipping')}
              variant="contained"
            >
              Check Out
            </Button>
          </Stack>
        </Stack>
      )}
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(cartDeatils), { ssr: false });
