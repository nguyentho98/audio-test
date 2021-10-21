import { combineReducers } from 'redux';

// Front
import Layout from './layout/reducer';

// Authentication
import Login from './auth/login/reducer';


const rootReducer = combineReducers({
  // public
  Login,
  Layout
});

export default rootReducer;
