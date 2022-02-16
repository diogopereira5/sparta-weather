import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, compose, createStore, Dispatch, MiddlewareAPI } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { CityState } from './ducks/city/types';
import { SearchState } from './ducks/search/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Require cycle:'
]);

export interface ApplicationState {
  city: CityState;
  search: SearchState;
}

const listPersist = {
  storage: AsyncStorage,
  key: 'rootdata',
  whitelist: ['city']
};

const reducers = persistReducer(listPersist, rootReducer);

const appMiddleware = (_store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(reducers, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);