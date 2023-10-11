import { ADD_TO_CART } from "./Constants";

const defaultValue = {
          items : []
};

export const cartReducer = (state = defaultValue, action) => {
          switch (action.type) {
                    case ADD_TO_CART:
                              return {
                                        ...state, 
                                        items : [
                                                  ...state.items,
                                                  action.payload
                                        ]
                              };
                    default:
                              return state;
          }
}