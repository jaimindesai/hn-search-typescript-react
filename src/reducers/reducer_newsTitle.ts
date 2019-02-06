import { AnyAction } from 'redux';
import { NewsTitle } from '../types';
import { assign } from 'lodash';

export default function newsTitleReducer(
  state: NewsTitle = {
    newsTerm: ''
  },
  action: AnyAction
) {
  switch (action.type) {
    case 'SET_NEWS_TERM':
      return assign({}, state, {
        newsTerm: action.newsTerm
      });
    case 'DELETE_NEWS_TERM':
      return assign({}, state, {
        newsTerm: ''
      });
    default:
      return state;
  }
}
