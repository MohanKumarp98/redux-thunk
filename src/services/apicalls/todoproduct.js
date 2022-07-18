import { ActionTypes } from "../../redux/contants/action-types";
import { axiosInstance } from "../axiosConfig/axiosConfig";

export const todoProducts = (data) => async (dispatch) => {
  const response = await axiosInstance.get(data);
  dispatch({ type: ActionTypes.TODO_PRODUCTS, payload: response.data });
};

export const fetchProducts = (data) => async (dispatch) => {
  const response = await axiosInstance.get(data);
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};
