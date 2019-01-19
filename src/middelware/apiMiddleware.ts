import { merge } from 'lodash';
import * as qs from 'qs';

const options: RequestInit = {
  method: 'GET',
  credentials: 'include'
};

const apiMiddleware = store => next => action => {
  if (action.api && action.api.endpoint) {
    const currentState = store.getState();

    switch (action.api.searchAPI) {
      case 'search':
        const queryString = qs.stringify(
          {
            q: currentState.title.newsTerm // search term
          },
          {
            encodeValuesOnly: true
          }
        );

        action.term = currentState.title.newsTerm;

        // build query string
        action.api.endpoint += `? ${queryString}`;
        break;

      default:
        break;
    }

    const config = merge({}, options, action.api);

    fetch(action.api.endpoint, config)
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
