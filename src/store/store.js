import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'

const sagaMiddleware = createSagaMiddleware()
// const middleware = [sagaMiddleware]

export const store = configureStore({
      reducer: rootReducer,
      middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(mySaga)