import { ADD_TOCART } from "./Constants";

export function addToCart(product){
          return {
                    type: ADD_TOCART,
                    payload: product
          }
}