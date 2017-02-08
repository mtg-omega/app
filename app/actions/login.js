import { USER_REPLACE, SKIP_LOGIN, LOGGED_OUT } from './types';

import type { Action } from './types';

export function autoLogin(): Promise {
  return dispatch => new Promise((resolve, reject) => {
    if (false) {
      const user = {};

      dispatch({
        type: USER_REPLACE,
        user,
      });

      return resolve(user);
    }

    return reject('No token');
  });
}

export function skipLogin(): Action {
  return {
    type: SKIP_LOGIN,
  };
}

export function logout(): Action {
  return {
    type: LOGGED_OUT,
  };
}
