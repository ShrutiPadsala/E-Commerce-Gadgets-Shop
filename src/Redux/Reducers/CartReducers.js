import { ADD_TO_CART } from "../Action/Constant";

const INITIAL_STATE = {
  cartItem:[],
};

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case ADD_TO_CART:
      console.log(action.type);
      return {
        ...state,
        cartItem: [...state?.cartItem, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducers;
