import { merge } from 'lodash';
import * as qs from 'qs';
import axios from 'axios';

const options: RequestInit = {
  method: 'GET',
  credentials: 'include'
};

const apiMiddleware = store => next => action => {
  // eslint-disable-line

  if (action.api && action.api.endpoint) {
    const currentState = store.getState();

    console.log('currentState ..', currentState);
    switch (action.api.searchAPI) {
      case 'search':
        const queryString = qs.stringify(
          {
            query: currentState.newsTitle.newsTerm
          },
          {
            encodeValuesOnly: true
          }
        );

        action.term = currentState.newsTitle.newsTerm;

        // build query string
        action.api.endpoint += '?' + queryString;
        break;

      default:
        break;
    }

    console.log(' action.api.endpoint ', action.api.endpoint);

    axios
      .get(action.api.endpoint)
      .then(response =>
        next(
          merge(action, {
            response: response.data,
            error: false,
            fetching: false
          })
        )
      )
      .catch(() => {
        next(merge(action, { error: true, fetching: false }));
      });

    action.error = false;
    action.fetching = true;
  }

  return next(action);
};

export default apiMiddleware;
