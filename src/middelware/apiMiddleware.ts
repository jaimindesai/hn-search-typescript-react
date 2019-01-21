import { merge } from 'lodash';
import * as qs from 'qs';

const options: RequestInit = {
  method: 'GET',
  credentials: 'include'
};

const apiMiddleware = store => next => action => {
  console.log('Inside Middelware');
  if (action.api && action.api.endpoint) {
    fetch('https://hn.algolia.com/api/v1/search?query=foo&tags=story')
      .then(response => response.json())
      .then(result =>
        next(
          merge(action, {
            response: result,
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
