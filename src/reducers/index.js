import {combineReducers} from "redux";
import ProductReducer from "./reducer-products";

const allReducers = combineReducers({
    products: ProductReducer
});

export default allReducers;