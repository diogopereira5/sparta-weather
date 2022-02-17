import { put, takeLatest } from 'redux-saga/effects';
import { FetchAction, CityTypes } from './types';

import { getCitySuccess } from "./actions";
import mapBoxApi, { API_TOKEN } from '../../../service/mapBoxApi';

function* getCities(action: FetchAction) {
  try {

    const { city } = action.payload;

    let success = null;

    yield mapBoxApi.get(`/${city}/?types=place&access_token=${API_TOKEN}`)

      .then((res: any) => {
        console.log(res.data);
      })

      .catch((err: any) => {
        console.log('error ', err);
      });

    // if (success) {
    //   yield put(getCitySuccess(success));
    // }

  } catch (e) {
    console.error(e)
  }
}


export default function* root() {
  yield takeLatest(CityTypes.GET_CITY_REQUEST, getCities);
}