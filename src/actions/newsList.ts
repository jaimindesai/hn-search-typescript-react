import { getSearchAPI } from '../constants';
import { LOAD_NEWS_LIST, REQUEST_ERROR } from '../types';

import axios from 'axios';

export const showLoadingIndicator = () => ({
  type: 'SHOW_LOADING_SEARCH'
});

export const loadNewsList = () => {
  return dispatch => {
    const api = `https://hn.algolia.com/api/v1/search?query=react&tags=story`;
    axios.get(api).then(response => {
      dispatch({
        type: LOAD_NEWS_LIST,
        payload: response.data,
        error: false,
        fetching: false
      });
    });
  };
};
