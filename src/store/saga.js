import { takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchUser } from './userSaga'
import { GET_USERS_LIST_CALLED } from './Constants'

function* mySaga() {
          yield takeEvery(GET_USERS_LIST_CALLED, fetchUser)
}

export default mySaga