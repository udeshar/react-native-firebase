import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_USERS_LIST_SUCCESS, GET_USERS_LIST_ERROR } from './Constants';

export function* fetchUser() {
          console.log("called")
          try {
                    console.log("called")
                    var user = yield fetch(`https://jsonplaceholder.typicode.com/users`);
                    user = yield user.json();
                    console.log(user)
                    yield put({ type: GET_USERS_LIST_SUCCESS, payload: user })
          } catch (e) {
                    yield put({ type: GET_USERS_LIST_ERROR, payload: e.message })
                    console.log(e)
          }
}