import type { Reducer, Middleware } from 'redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import appReducer from './module/app';
import type { IActions, IStoreState } from './types';

const middleware: Middleware[] = [reduxThunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(reduxLogger);
}

const reducers: Reducer<IStoreState, IActions<any>> = combineReducers<IStoreState>({
  app: appReducer,
});

// createStore(reducer, [preloadedState], enhancer)
function createMyStore() {
  const store = window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(
        reducers,
        compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__({})),
      )
    : createStore(reducers, applyMiddleware(...middleware));
  return store;
}

const store = createMyStore();

export default store;
