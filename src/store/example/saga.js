import { call, put, takeEvery } from 'redux-saga/effects';

// Ecommerce Redux States
import { GET_EXAMPLE_DETAIL, GET_EXAMPLES, GET_NLUDATA_INFO } from './actionTypes';
import {
  getExampleDetailFail,
  getExampleDetailSuccess,
  getExamplesFail,
  getExamplesSuccess,
  getNLUDataInfoFail,
  getNLUDataInfoSuccess
} from './actions';

//Include Both Helper File with needed methods
import { getExamples, getExampleDetail, getNLUDataInfo } from 'helpers/example_helper';

function* fetchExamples() {
  try {
    const response = yield call(getExamples);
    yield put(getExamplesSuccess(response));
  } catch (error) {
    yield put(getExamplesFail(error));
  }
}

function* fetchNLUDataInfo() {
  try {
    const response = yield call(getNLUDataInfo);
    yield put(getNLUDataInfoSuccess(response));
  } catch (error) {
    yield put(getNLUDataInfoFail(error));
  }
}

function* fetchExampleDetail({ exampleId }) {
  try {
    const response = yield call(getExampleDetail, exampleId);
    yield put(getExampleDetailSuccess(response));
  } catch (error) {
    yield put(getExampleDetailFail(error));
  }
}

function* exampleSaga() {
  yield takeEvery(GET_EXAMPLES, fetchExamples);
  yield takeEvery(GET_NLUDATA_INFO, fetchNLUDataInfo);
  yield takeEvery(GET_EXAMPLE_DETAIL, fetchExampleDetail);
}

export default exampleSaga;
