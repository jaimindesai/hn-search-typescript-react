import { combineReducers } from 'redux';
import newsTitle from './reducer_newsTitle';
import newsList from './reducer_newsList';

const rootReducer = combineReducers({
  newsTitle,
  newsList
});

export default rootReducer;
