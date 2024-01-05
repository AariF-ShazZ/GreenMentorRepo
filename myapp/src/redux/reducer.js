import * as types from "./actionTypes"
const initialState = {
    products:[],
    isLoading:false,
    isError:false,

}

export const productsReducer = (state=initialState,{type,payload}) =>{

    switch(type){
    case types.GET_PRODUCTS_REQUEST:{
        return {
            ...state,isLoading:true, isError:false
        }
    }
    case types.GET_PRODUCTS_SUCCESS:{
        return {
            ...state,isLoading:false,products:payload, isError:false
        }
    }
    case types.GET_PRODUCTS_ERROR:{
        return {
            ...state,isLoading:false,isError:true
        }
    }

    default: return state
}
}