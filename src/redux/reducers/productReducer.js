import { data } from "../../SampleData.js/SampleData";
import { ActionTypes } from "../contants/action-types";

const initialState = {
  products:data,
  collectionFilter: [],
  allFilters: [],
  filteredData: [],
  requireData:[],
  todos:[],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

      case ActionTypes.FETCH_PRODUCTS:
      return {...state,requireData:payload};

      case ActionTypes.TODO_PRODUCTS:
      return {...state,todos:payload};

    case ActionTypes.REMOVE_COLLECTION_FILTER:
      const filtered = state.collectionFilter.filter((val) => val !== payload);
      return { ...state, collectionFilter: filtered };

    case ActionTypes.CLEAR_COLLECTION_FILTER:
      return { ...state, collectionFilter: []};

    case ActionTypes.ADD_COLLECTION_FILTER:
      const filteres = state.products.filter((val) => payload.includes(val.category) === true)
      return { ...state, collectionFilter: payload ,filteredData:[...filteres]};
  
    default:
      return state;
  }
};
