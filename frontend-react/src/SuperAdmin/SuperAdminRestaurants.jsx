import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Avatar, Typography, Backdrop, CircularProgress } from '@mui/material';
import { deleteRestaurant, getRestaurants } from '../State/SuperAdmin/superAdminActions';

const SuperAdminRestaurants = () => {
  const dispatch = useDispatch();
  const { restaurants, loading } = useSelector((store) => store.superAdmin);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const handleDeleteRestaurant = (id) => {
    dispatch(deleteRestaurant(id));
  };

  return (
    <Box width="100%">
      <Card className="mt-1">
        <CardHeader title="All Restaurants" />
        <TableContainer>
          <Table aria-label="restaurant table">
            <TableHead>
              <TableRow>
                <TableCell>Banner</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurants.map((restaurant) => (
                <TableRow key={restaurant.id} hover>
                  <TableCell><Avatar alt={restaurant.name} src={restaurant.imageUrl} /></TableCell>
                  <TableCell>{restaurant.name}</TableCell>
                  <TableCell>{restaurant.ownerName}</TableCell>
                  <TableCell>{restaurant.contact}</TableCell>
                  <TableCell>
                    <Button variant="text" onClick={() => handleDeleteRestaurant(restaurant.id)}>Delete</Button>
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

export default SuperAdminRestaurants;
