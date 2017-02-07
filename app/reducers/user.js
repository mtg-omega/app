import { SKIP_LOGIN, LOGGED_OUT } from '../actions/types';

import type { Action } from '../actions/types';

export type State = {
  isLoggedIn: boolean;
  hasSkippedLogin: boolean;
};

const initialState = {
  isLoggedIn: false,
  hasSkippedLogin: false,
};

export default function user(state: State = initialState, action: Action) {
  if (action.type === SKIP_LOGIN) {
    return {
      isLoggedIn: false,
      hasSkippedLogin: true,
    };
  }

  if (action.type === LOGGED_OUT) {
    return initialState;
  }

  return state;
}
