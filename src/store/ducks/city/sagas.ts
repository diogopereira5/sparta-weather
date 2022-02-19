import { takeLatest, put } from 'redux-saga/effects';
import { store } from '../..';
import { CityProps } from '../../../types/CityProps.interface';
import { setCleanSearch } from '../search/actions';
import { deleteCitySuccess, storeCitySuccess } from './actions';
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

    if (data) {
      yield put(storeCitySuccess(data));
      yield put(setCleanSearch());
    }

  } catch (e) {
    console.error(e)
  }
}

function* deleteCity(action: FetchAction) {

  try {

    var cities = store.getState().city.city;

    cities = cities.filter((item) => item.id !== action.payload && item)

    yield put(deleteCitySuccess(cities));

  } catch (err) {
    console.log(err);
  }

}


export default function* root() {
  yield takeLatest(CityTypes.STORE_CITY_REQUEST, addNewCity);
  yield takeLatest(CityTypes.DELETE_CITY_REQUEST, deleteCity);
}