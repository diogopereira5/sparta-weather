import { all } from 'redux-saga/effects';

import category from './city/sagas';
import search from './search/sagas';

export default function* root() {
  yield all([
    category(),
    search()
  ]);
}