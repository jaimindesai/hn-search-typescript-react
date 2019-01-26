import { AnyAction } from 'redux';
import { LOAD_NEWS_LIST, NewsList } from '../types';
import { assign } from 'lodash';
import { getFormattedDate } from '../utils';
export default function newsListReducer(
  state: NewsList = {
    term: '',
    hits: [],
    total: 0,
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

    case LOAD_NEWS_LIST:
      const total = action.payload.nbHits;
      const finalData = action.payload.hits.map(hit => {
        let created_at = new Date(hit.created_at);
        return {
          created_at: getFormattedDate(created_at),
          objectID: hit.objectID,
          title: hit.title,
          author: hit.author,
          points: hit.points
        };
      });
      return assign({}, state, {
        term: action.term,
        hits: finalData,
        total,
        loading: false
      });
      return state;
    default:
      return state;
  }
}
