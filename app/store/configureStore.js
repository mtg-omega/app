import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { applyMiddleware, createStore, compose, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

import * as reducers from '../reducers';

const logger = createLogger({
  collapsed: true,
  duration: true,
});

export default function configureStore(onComplete: ?() => void): Store {
  const store = createStore(
    combineReducers(reducers),
    compose(
      applyMiddleware(thunk, logger),
      // devTools({
      //   name: 'mtg-omega',
      //   realtime: true,
      // }),
      // autoRehydrate(),
    ),
  );

  persistStore(store, { storage: AsyncStorage }, onComplete);

  return store;
}
