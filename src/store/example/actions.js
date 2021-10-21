import {
  GET_EXAMPLES,
  GET_EXAMPLES_FAIL,
  GET_EXAMPLES_SUCCESS,
  GET_EXAMPLE_DETAIL,
  GET_EXAMPLE_DETAIL_FAIL,
  GET_EXAMPLE_DETAIL_SUCCESS,
  GET_NLUDATA_INFO,
  GET_NLUDATA_INFO_SUCCESS,
  GET_NLUDATA_INFO_FAIL
} from './actionTypes';

export const getExamples = () => ({
  type: GET_EXAMPLES
});

export const getExamplesSuccess = examples => ({
  type: GET_EXAMPLES_SUCCESS,
  payload: examples
});

export const getExamplesFail = error => ({
  type: GET_EXAMPLES_FAIL,
  payload: error
});

export const getNLUDataInfo = () => ({
  type: GET_NLUDATA_INFO
});

export const getNLUDataInfoSuccess = info => ({
  type: GET_NLUDATA_INFO_SUCCESS,
  payload: info
});

export const getNLUDataInfoFail = error => ({
  type: GET_NLUDATA_INFO_FAIL,
  payload: error
});

export const getExampleDetail = exampleId => ({
  type: GET_EXAMPLE_DETAIL,
  exampleId
});

export const getExampleDetailSuccess = examples => ({
  type: GET_EXAMPLE_DETAIL_SUCCESS,
  payload: examples
});

export const getExampleDetailFail = error => ({
  type: GET_EXAMPLE_DETAIL_FAIL,
  payload: error
});
