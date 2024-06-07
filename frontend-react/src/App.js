import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";

import darkTheme from "./theme/DarkTheme";
import Routers from "./Routers/Routers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./State/Authentication/Action";
import { findCart } from "./State/Customers/Cart/cart.action";
import {
  getAllRestaurantsAction,
  getRestaurantByUserId,
} from "./State/Customers/Restaurant/restaurant.action";
import { Navigate, useNavigate } from "react-router-dom";
import { getCustomers, getRestaurants } from "./State/SuperAdmin/superAdminActions";


function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate(); // Initialisez navigate ici
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      if (auth.user?.role === "ROLE_CUSTOMER") {
        dispatch(findCart(jwt));
        dispatch(getAllRestaurantsAction(jwt));
      }  else if (auth.user?.role === "ROLE_SUPER_ADMIN") {
        dispatch(getCustomers(jwt)); // Obtenez les données du superAdmin
        dispatch(getRestaurants(jwt)); // Obtenez les données des restaurants (si nécessaire)
        navigate("/super-admin/dashboard"); // Redirigez le superAdmin vers son tableau de bord
      } else if (auth.user?.role === "ROLE_RESTAURANT_OWNER") {
        dispatch(getRestaurantByUserId(auth.jwt || jwt));
      }
    }
  }, [auth.jwt, auth.user]);


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
