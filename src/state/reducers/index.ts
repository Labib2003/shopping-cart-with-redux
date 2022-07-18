import { combineReducers } from "redux";
import cartItemReducer from "./cartItemReducer";
import filterProductsReducer from "./filterProductsReducer"

const reducers = combineReducers({
    cartItems: cartItemReducer,
    filterProducts: filterProductsReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>