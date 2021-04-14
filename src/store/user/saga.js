import {all, takeEvery, put, call} from 'redux-saga/effects';
import api from './api';
import actions from './action';

function* getUserList({payload}) {
  try {
    const {user} = yield all({
      user: call(api.fetchUserList, payload.order, payload.limit, payload.skip, payload.where),
    });
    yield put({
      type: actions.GET_USER_SUCCESS,
      payload: {
        user: user.data
      },
    });
  }
  catch (e) {
    yield put({
      type: actions.GET_USER_ERROR,
    });
  }
}
function* detailUser({payload}) {
  try {
    const {detail} = yield all({
      detail: call(api.fetchDetailUser, payload.id),
    });

    console.log(detail, 'Trong saga')
    yield put({
      type: actions.GET_DETAIL_USER_SUCCESS,
      payload: detail.data
    });
  }
  catch (e) {
    yield put({
      type: actions.GET_DETAIL_USER_ERROR,
    });
  }
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(actions.GET_USER_REQUEST, getUserList),
    yield takeEvery(actions.GET_DETAIL_USER_REQUEST, detailUser),
  ]);
}
