import { getSearchAPI } from '../constants';

export const loadNewsList = () => ({
  type: ' LOAD_NEWS_LIST',
  api: {
    method: 'GET',
    endpoint: `${getSearchAPI()}/search`,
    searchAPI: 'search'
  }
});
