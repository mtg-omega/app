import { SKIP_LOGIN, LOGGED_OUT } from '../actions/login';

const initialState = {
  isLoggedIn: false,
  hasSkippedLogin: false,
};

export default function user(state = initialState, action) {
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
