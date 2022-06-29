import { ActionTypes } from "../contants/action-types";

export const setProducts = (products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProduct = (product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload:product
    };
};

export const removeCollectionFilter = (name)=>{
    return{
        type: ActionTypes.REMOVE_COLLECTION_FILTER,
        payload:name
    };
};

export const clearCollectionfilter = ()=>{
    return{
        type: ActionTypes.CLEAR_COLLECTION_FILTER,
        payload:"",
    };
};
export const addCollectionfilter = (data)=>{
    return{
        type: ActionTypes.ADD_COLLECTION_FILTER,
        payload:data,
    };
};
export const clearDeletedfilter = (data)=>{
    return{
        type: ActionTypes.CLEAR_DELETED_FILTER,
        payload:data,
    };
};
export const addDeletedfilter = (data)=>{
    return{
        type: ActionTypes.ADD_DELETED_FILTER,
        payload:data,
    };
};
