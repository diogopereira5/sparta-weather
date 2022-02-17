import { all } from 'redux-saga/effects';

import city from './city/sagas';
import search from './search/sagas';

export default function* root() {
  yield all([
    city(),
    search()
  ]);
}