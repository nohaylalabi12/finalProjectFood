import { api } from "../../config/api";
import { 
    GET_CUSTOMERS_REQUEST, GET_CUSTOMERS_SUCCESS, GET_CUSTOMERS_FAILURE,
    GET_RESTAURANTS_REQUEST, GET_RESTAURANTS_SUCCESS, GET_RESTAURANTS_FAILURE,
    DELETE_CUSTOMER_REQUEST, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE,
    DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, DELETE_RESTAURANT_FAILURE
} from "./superAdmin.actionType";

// Action pour obtenir tous les clients
export const getCustomers = () => {
    return async (dispatch) => {
      dispatch({ type: GET_CUSTOMERS_REQUEST });
      try {
        const { data } = await api.get("/api/admin/customers");
        dispatch({ type: GET_CUSTOMERS_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: GET_CUSTOMERS_FAILURE, error: error.message });
      }
    };
  };
  
  // Action pour obtenir tous les restaurants
  export const getRestaurants = () => {
    return async (dispatch) => {
      dispatch({ type: GET_RESTAURANTS_REQUEST });
      try {
        const { data } = await api.get("/api/admin/restaurants");
        dispatch({ type: GET_RESTAURANTS_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: GET_RESTAURANTS_FAILURE, error: error.message });
      }
    };
  };
  
  // Action pour supprimer un client
  export const deleteCustomer = (id) => {
    return async (dispatch) => {
      dispatch({ type: DELETE_CUSTOMER_REQUEST });
      try {
        await api.delete(`/api/admin/users/${id}`);
        dispatch({ type: DELETE_CUSTOMER_SUCCESS, payload: id });
      } catch (error) {
        dispatch({ type: DELETE_CUSTOMER_FAILURE, error: error.message });
      }
    };
  };
  
  // Action pour supprimer un restaurant
  export const deleteRestaurant = (id) => {
    return async (dispatch) => {
      dispatch({ type: DELETE_RESTAURANT_REQUEST });
      try {
        await api.delete(`/api/admin/restaurants/${id}`);
        dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: id });
      } catch (error) {
        dispatch({ type: DELETE_RESTAURANT_FAILURE, error: error.message });
      }
    };
  };