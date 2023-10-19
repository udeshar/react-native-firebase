import { ADD_TO_CART, REMOVE_FROM_CART } from "./Constants";

export function addToCart(product){
          return {
                    type: ADD_TO_CART,
                    payload: product
          }
}

export function removeFromCart(id){
          return {
                    type: REMOVE_FROM_CART,
                    payload: id
          }
}