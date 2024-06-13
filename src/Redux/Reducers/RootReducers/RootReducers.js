import { combineReducers } from "redux";
import cartReducers from "../CartReducers";

export const RootReducers = combineReducers({
    cart: cartReducers,
})