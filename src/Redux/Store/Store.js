import { createStore } from "redux";
import { RootReducers } from "../Reducers/RootReducers/RootReducers";

export const Store = createStore(RootReducers);
