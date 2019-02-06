import { combineReducers } from 'redux';
import newsTitle from './reducer_newsTitle';
import newsList from './reducer_newsList';
import newsBoard from './reducer_newsBoard';
const rootReducer = combineReducers({
  newsTitle,
  newsList,
  newsBoard
});

export default rootReducer;
