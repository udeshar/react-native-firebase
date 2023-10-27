import { ADD_TO_CART, GET_USERS_LIST_CALLED, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART } from "./Constants";

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

export function emptyCart(){
          return {
                    type: REMOVE_ALL_FROM_CART,
          }
}

export function getUsersList(){
          return {
                    type: GET_USERS_LIST_CALLED,
          }
}