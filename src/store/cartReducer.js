import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART } from "./Constants";

const defaultValue = {
          items: []
};

export const cartReducer = (state = defaultValue, action) => {
          switch (action.type) {
                    case ADD_TO_CART:
                              return {
                                        ...state,
                                        items: [
                                                  ...state.items,
                                                  action.payload
                                        ]
                              };
                    case REMOVE_FROM_CART:
                              return {
                                        ...state,
                                        items: state.items.filter((data) => data.id != action.payload)
                              };
                    case REMOVE_ALL_FROM_CART:
                              return {
                                        ...state,
                                        items: []
                              };
                    default:
                              return state;
          }
}