import {
  GET_EXAMPLES_FAIL,
  GET_EXAMPLES_SUCCESS,
  GET_EXAMPLE_DETAIL_SUCCESS,
  GET_EXAMPLE_DETAIL_FAIL,
  GET_NLUDATA_INFO_SUCCESS,
  GET_NLUDATA_INFO_FAIL,
} from './actionTypes';

const INIT_STATE = {
  examples: [],
  example: {},
  info: {},
  errorInfo: {},
  error: {}
};

const Ecommerce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_EXAMPLES_SUCCESS:
      return {
        ...state,
        examples: action.payload
      };

    case GET_EXAMPLES_FAIL:
      return {
        ...state,
        error: action.payload
      };

    case GET_EXAMPLE_DETAIL_SUCCESS:
      return {
        ...state,
        example: action.payload
      };

    case GET_EXAMPLE_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case GET_NLUDATA_INFO_SUCCESS:
      return {
        ...state,
        info: action.payload
      };

    case GET_NLUDATA_INFO_FAIL:
      return {
        ...state,
        errorInfo: action.payload
      };
    default:
      return state;
  }
};

export default Ecommerce;
