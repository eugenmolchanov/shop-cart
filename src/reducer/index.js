import {combineReducers} from "redux";
import ProductIconReducer from "./products-icons";
import ProductReducer from "./products";

const allReducers = combineReducers({
    productsIcons: ProductIconReducer,
    products: ProductReducer
});

export default allReducers;