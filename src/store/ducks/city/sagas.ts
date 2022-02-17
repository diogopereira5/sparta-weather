import { takeLatest, put } from 'redux-saga/effects';
import { store } from '../..';
import { CityProps } from '../../../types/CityProps.interface';
import { setCleanSearch } from '../search/actions';
import { storeCitySuccess } from './actions';
import { FetchAction, CityTypes } from './types';

function* addNewCity(action: FetchAction) {
  try {

    var data: CityProps[] = [];

    const city = action.payload;
    const cityStore: CityProps[] = store.getState().city.city;

    if (cityStore) {
      data = cityStore;
    }

    if (city) {
      data.push(city);
    }

    console.log(data);

    if (data) {
      yield put(storeCitySuccess(data));
      yield put(setCleanSearch());
    }

  } catch (e) {
    console.error(e)
  }
}


export default function* root() {
  yield takeLatest(CityTypes.STORE_CITY_REQUEST, addNewCity);
}