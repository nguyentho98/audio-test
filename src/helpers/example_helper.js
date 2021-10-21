import { get } from './api_helper';
import * as url from './url_helper';
const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
};
// get Examples
export const getExamples = () => get(url.GET_EXAMPLES, config);

export const getNLUDataInfo = () => get(url.GET_NLU_DATA_INFO, config);

// get Example detail
export const getExampleDetail = id => get(`${url.GET_EXAMPLE_DETAIL}/${id}`, { params: { id } });
