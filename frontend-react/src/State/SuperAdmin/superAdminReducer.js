import {
    GET_CUSTOMERS_REQUEST,
    GET_CUSTOMERS_SUCCESS,
    GET_CUSTOMERS_FAILURE,
    GET_RESTAURANTS_REQUEST,
    GET_RESTAURANTS_SUCCESS,
    GET_RESTAURANTS_FAILURE,
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_FAILURE,
    DELETE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_SUCCESS,
    DELETE_RESTAURANT_FAILURE,
  } from './superAdmin.actionType';
  
  const initialState = {
    customers: [],
    restaurants: [],
    loading: false,
    error: null,
  };
  
  const superAdminReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CUSTOMERS_REQUEST:
      case GET_RESTAURANTS_REQUEST:
      case DELETE_CUSTOMER_REQUEST:
      case DELETE_RESTAURANT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_CUSTOMERS_SUCCESS:
        return {
          ...state,
          customers: action.payload,
          loading: false,
        };
      case GET_RESTAURANTS_SUCCESS:
        return {
          ...state,
          restaurants: action.payload,
          loading: false,
        };
      case DELETE_CUSTOMER_SUCCESS:
        return {
          ...state,
          customers: state.customers.filter((customer) => customer.id !== action.payload),
          loading: false,
        };
      case DELETE_RESTAURANT_SUCCESS:
        return {
          ...state,
          restaurants: state.restaurants.filter((restaurant) => restaurant.id !== action.payload),
          loading: false,
        };
      case GET_CUSTOMERS_FAILURE:
      case GET_RESTAURANTS_FAILURE:
      case DELETE_CUSTOMER_FAILURE:
      case DELETE_RESTAURANT_FAILURE:
        return {
          ...state,
          error: action.error,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default superAdminReducer;
  