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
    case 'SET_JOB_TERM':
      return { ...state, newsTerm: action.newsTerm };
    case 'DELETE_JOB_TERM':
      return { ...state, newsTerm: '' };
    default:
      return state;
  }
}
