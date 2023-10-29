import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  todo: todoReducer
});

export default rootReducer;