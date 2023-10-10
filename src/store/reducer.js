import { ADD_TO_CART } from "./Constants";

const defaultValue = [];

export const reducer = (state = defaultValue, action) => {
          switch (action.type) {
                    case ADD_TO_CART:
                              return [...state, action.payload];
                    default:
                              return state;
          }
}