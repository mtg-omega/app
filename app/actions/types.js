export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export const OPEN_DRAWER = 'OPEN_DRAWER';

export const LOGGED_OUT = 'LOGGED_OUT';
export const SKIP_LOGIN = 'SKIP_LOGIN';

export const USER_REPLACE = 'USER_REPLACE';

export type Action =
  { type: CLOSE_DRAWER } |
  { type: OPEN_DRAWER } |

  { type: LOGGED_OUT } |
  { type: SKIP_LOGIN } |

  { type: USER_REPLACE, user: Object };
