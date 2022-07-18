import axios from "axios";
import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

// the api call for the redux-thunk

//since the redux is syncronous to make it as async we are using the function ur writing for actions u cannot make it as 
//as async so we are returning async function and dispatching the actiontype and payload in it.

// export const fetchProducts=()=>{
//     return async function(dispatch,getState){
//       const response=await axios.get("https://jsonplaceholder.typicode.com/users");
//       dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data});
//     };
//   };

// shortend rule to create thunk call

// export const todoProducts=()=>async dispatch=>{
//     const response=await axios.get("https://jsonplaceholder.typicode.com/todos");
//     console.log(response);
//     dispatch({type:ActionTypes.TODO_PRODUCTS,payload:response.data});
//   };

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeCollectionFilter = (name) => {
  return {
    type: ActionTypes.REMOVE_COLLECTION_FILTER,
    payload: name,
  };
};

export const clearCollectionfilter = () => {
  return {
    type: ActionTypes.CLEAR_COLLECTION_FILTER,
    payload: "",
  };
};
export const addCollectionfilter = (data) => {
  return {
    type: ActionTypes.ADD_COLLECTION_FILTER,
    payload: data,
  };
};
export const clearDeletedfilter = (data) => {
  return {
    type: ActionTypes.CLEAR_DELETED_FILTER,
    payload: data,
  };
};
export const addDeletedfilter = (data) => {
  return {
    type: ActionTypes.ADD_DELETED_FILTER,
    payload: data,
  };
};
