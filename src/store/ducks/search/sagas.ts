import { put, takeLatest } from 'redux-saga/effects';
import { FetchAction, SearchTypes } from './types';

import { setSearchSuccess } from "./actions";
import mapBoxApi, { API_TOKEN } from '../../../service/mapBoxApi';
import { CityProps } from '../../../types/CityProps.interface';

function* handleSearchCity(action: FetchAction) {
  try {

    const city = action.payload;

    let cities: CityProps[] = [];

    yield mapBoxApi.get(`/${city}.json?types=place&limit=8&access_token=${API_TOKEN}`)
      .then((res: any) => {

        res.data?.features.map((item: any) => {

          cities.push({
            id: item.id,
            text: item.text,
            place_name: item.place_name,
            state: item.context[0]?.text,
            country: item.context[1]?.text,
            longitude: item.geometry.coordinates[0],
            latitude: item.geometry.coordinates[1]
          });

        });

      })
      .catch((err: any) => {
        console.log('error ', err);
      });

    if (cities.length > 0) {
      yield put(setSearchSuccess(cities));
    }

  } catch (e) {
    console.error(e)
  }
}


export default function* root() {
  yield takeLatest(SearchTypes.GET_SEARCH_REQUEST, handleSearchCity);
}