import { CLOSE_DRAWER, OPEN_DRAWER } from '../actions/types';

import type { Action } from '../actions/types';

export type State = {
  isOpen: boolean;
};

const initialState = {
  isOpen: false,
};

export default function drawer(state: State = initialState, action: Action): State {
  if (action.type === CLOSE_DRAWER) {
    return {
      ...state,
      isOpen: false,
    };
  }

  if (action.type === OPEN_DRAWER) {
    return {
      ...state,
      isOpen: true,
    };
  }

  return state;
}
