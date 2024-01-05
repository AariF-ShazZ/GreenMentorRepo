import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import {thunk} from "redux-thunk"
import { productsReducer } from "./redux/reducer"


const rootReducer = combineReducers({
    product:productsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))
export {store} 