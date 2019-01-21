import { getSearchAPI } from '../constants';

export const loadNewsList = () => ({
  type: ' LOAD_NEWS_LIST',
  api: {
    method: 'GET',
    endpoint: 'https://hn.algolia.com/api/v1/search?query=foo&tags=story',
    searchAPI: 'search'
  }
});

export const showLoadingIndicator = () => ({
  type: 'SHOW_LOADING_SEARCH'
});
