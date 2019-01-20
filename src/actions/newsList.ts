import { getSearchAPI } from '../constants';

export const loadNewsList = () => ({
  type: ' LOAD_NEWS_LIST',
  api: {
    method: 'GET',
    endpoint: `${getSearchAPI()}/search`,
    searchAPI: 'search'
  }
});

export const showLoadingIndicator = () => ({
  type: 'SHOW_LOADING_SEARCH'
});
