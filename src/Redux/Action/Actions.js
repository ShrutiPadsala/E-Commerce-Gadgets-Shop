import { ADD_TO_CART } from "./Constant"

export const ProceedToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}