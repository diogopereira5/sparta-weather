import { CityTypes, CityState, FetchAction } from './types';
import { Reducer } from 'redux';

const initialState: CityState = {
  city: [],
  favorite_id: "",
  units: "metric",
};

const reducer: Reducer<CityState, FetchAction> = (state = initialState, action: FetchAction) => {

  switch (action.type) {
    case CityTypes.STORE_CITY_SUCCESS:
      return { ...state, city: action.payload };

    case CityTypes.DELETE_CITY_SUCCESS:
      return { ...state, city: action.payload };

    case CityTypes.SET_FAVORITE_CITY:
      return { ...state, favorite_id: action.payload };

    case CityTypes.SET_UNITS_CONFIG:
      return { ...state, units: action.payload };

    default:
      return state;
  }

};

export default reducer;