import { ADD_TO_CART, GET_USERS_LIST_CALLED, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART } from "./Constants";
import { GET_TODOS_LIST_CALLED, ADD_TODO_CALLED, DELETE_TODO_CALLED, UPDATE_TODO_CALLED, TOGGLE_TODO } from "./Constants";

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

// todo actions

export function getTodosList(){
          return {
                    type: GET_TODOS_LIST_CALLED,
          }
}

export function addTodo(data){
          return {
                    type: ADD_TODO_CALLED,
                    data
          }
}

export function deleteTodo(id){
          return {
                    type: DELETE_TODO_CALLED,
                    id
          }
}

export function updateTodo(data){
          return {
                    type: UPDATE_TODO_CALLED,
                    data
          }
}

export function toggletodo(id){
          return {
                    type: TOGGLE_TODO,
                    id
          }
}