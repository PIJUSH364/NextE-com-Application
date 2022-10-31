import Layout from '../components/Layout';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';
import { Stack } from '@mui/material';
export default function Home() {
  return (
    <Layout title="Home Page">
      <Stack direction="row" spacing={4} sx={{ flexWrap: 'wrap' }} p={2}>
        {data.products.map((product, index) => (
          <ProductItem key={index} product={product}></ProductItem>
        ))}
      </Stack>
    </Layout>
  );
}
