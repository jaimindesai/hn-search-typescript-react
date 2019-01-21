import { AnyAction } from 'redux';
import { NewsList } from '../types';
import { assign } from 'lodash';

export default function newsListReducer(
  state: NewsList = {
    term: '',
    hits: [],
    loading: false,
    error: null
  },
  action: AnyAction
) {
  switch (action.type) {
    case 'SHOW_LOADING_SEARCH':
      return assign({}, state, {
        loading: true
      });

    case 'LOAD_NEWS_LIST':
      return assign({}, state, {
        term: action.term,
        hits: action.response.hits,
        loading: false
      });

      return state;

    default:
      return state;
  }
}
