import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};
const onSubmit = (values) => {
  console.log('form data', values);
};

// yup use
const validationSchema = yup.object({
  email: yup.string().email('Invalid format').required('requried!'),
  password: yup
    .string()
    .required('No password provided.')
    .min(5, 'Password is too short - should be 8 chars minimum.'),
  // password: yup.string().required('Password is requried!'),
});
function login() {
  return (
    <Layout>
      <Box p={3}>
        <Typography variant="h6">Login</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Box className="form-container" sx={{ maxWidth: '300px' }}>
            <Form>
              <Stack className="form--control">
                <label htmlFor="email">E-mail</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" />
              </Stack>
              <Stack className="form--control" marginBottom={1}>
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" id="password" />
                <ErrorMessage name="password" />
              </Stack>
              <Button variant="contained" sx={{ backgroundColor: 'tomato' }}>
                Login
              </Button>
              {/* <button className="submit--form--button" type="submit">
                Submit
              </button> */}
            </Form>
          </Box>
        </Formik>
      </Box>
    </Layout>
  );
}

export default login;
