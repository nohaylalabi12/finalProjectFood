import React from 'react';
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PeopleIcon from '@mui/icons-material/People';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SuperAdminSideBar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/super-admin/dashboard' },
    { text: 'Restaurants', icon: <RestaurantIcon />, path: '/super-admin/restaurants' },
    { text: 'Customers', icon: <PeopleIcon />, path: '/super-admin/customers' },
    { text: 'Logout', icon: <ExitToAppIcon />, path: '/login' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => handleNavigation(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default SuperAdminSideBar;
