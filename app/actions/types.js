export const LOGGED_OUT = 'LOGGED_OUT';
export const SKIP_LOGIN = 'SKIP_LOGIN';

export type Action =
  { type: LOGGED_OUT } |
  { type: SKIP_LOGIN };
