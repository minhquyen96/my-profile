import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import User from './user/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  User
});
