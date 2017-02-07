export const SKIP_LOGIN = 'SKIP_LOGIN';
export const LOGGED_OUT = 'LOGGED_OUT';

export function skipLogin() {
  return {
    type: SKIP_LOGIN,
  };
}

export function logout() {
  return {
    type: LOGGED_OUT,
  };
}
