import { all, fork } from 'redux-saga/effects';

//public
import AccountSaga from './auth/register/saga';

export default function* rootSaga() {
  yield all([
    //public
    AccountSaga(),
  ]);
}
