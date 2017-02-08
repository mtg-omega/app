import { OPEN_DRAWER, CLOSE_DRAWER } from './types';

import type { Action } from './types';

export function openDrawer(): Action {
  return {
    type: OPEN_DRAWER,
  };
}

export function closeDrawer(): Action {
  return {
    type: CLOSE_DRAWER,
  };
}
