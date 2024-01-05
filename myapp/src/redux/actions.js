import * as types from "./actionTypes"
import axios from "axios"

const getProductsRequest = () => {
    return {
        type:types.GET_PRODUCTS_REQUEST
    }
}
const getProductsSuccess = (payload) => {
    return {
        type:types.GET_PRODUCTS_SUCCESS,
        payload
    }
}
const getProductsError = () => {
    return {
        type:types.GET_PRODUCTS_ERROR
    }
}

export const getProducts = () => (dispatch) => {
    dispatch(getProductsRequest())
    return axios.get(`https://greenmentor-api.onrender.com/data`)
    .then((res) =>{  
        // console.log("res action =>",res.data);
        dispatch(getProductsSuccess(res.data))
    })
    .catch((err) =>  dispatch(getProductsError()))
}
