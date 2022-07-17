import { combineReducers } from "redux";
import cartItemReducer from "./cartItemReducer"

const reducers = combineReducers({
    cartItems: cartItemReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>