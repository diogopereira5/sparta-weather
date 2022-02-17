import { CityTypes, CityState, FetchAction } from './types';
import { Reducer } from 'redux';

const initialState: CityState = {
  city: [],
};

const reducer: Reducer<CityState, FetchAction> = (state = initialState, action: FetchAction) => {

  switch (action.type) {
    case CityTypes.STORE_CITY_SUCCESS:
      return { ...state, city: action.payload };

    default:
      return state;
  }

};

export default reducer;