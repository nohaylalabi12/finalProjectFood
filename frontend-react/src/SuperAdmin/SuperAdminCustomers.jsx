import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Avatar, Backdrop, CircularProgress } from '@mui/material';
import { deleteCustomer, getCustomers } from '../State/SuperAdmin/superAdminActions';


const SuperAdminCustomers = () => {
  const dispatch = useDispatch();
  const { customers, loading } = useSelector((store) => store.superAdmin);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  const handleDeleteCustomer = (id) => {
    dispatch(deleteCustomer(id));
  };

  return (
    <Box width="100%">
      <Card className="mt-1">
        <CardHeader title="All Customers" />
        <TableContainer>
          <Table aria-label="customer table">
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} hover>
                  <TableCell><Avatar alt={customer.fullName} src={customer.imageUrl} /></TableCell>
                  <TableCell>{customer.fullName}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.role}</TableCell>
                  <TableCell>
                    <Button variant="text" onClick={() => handleDeleteCustomer(customer.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default SuperAdminCustomers;
