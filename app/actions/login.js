import { SKIP_LOGIN, LOGGED_OUT } from './types';

import type { Action } from './types';

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
