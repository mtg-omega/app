import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

import * as reducers from '../reducers';

const logger = createLogger({
  collapsed: true,
  duration: true,
});

export default function configureStore(onComplete) {
  const store = createStore(
    combineReducers(reducers),
    // compose(
    //   applyMiddleware(thunk, logger),
    //   autoRehydrate,
    // ),
    applyMiddleware(thunk, logger),
  );

  persistStore(store, { storage: AsyncStorage }, onComplete);

  return store;
}
