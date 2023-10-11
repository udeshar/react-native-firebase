import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { cartReducer } from './cartReducer'

export const store = configureStore({
  reducer: rootReducer,
})