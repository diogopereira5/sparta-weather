import { CityTypes, CityState, FetchAction } from './types';
import { Reducer } from 'redux';

const initialState: CityState = {
  city: null,
};

const reducer: Reducer<CityState, FetchAction> = (state = initialState, action: FetchAction) => {

  switch (action.type) {
    case CityTypes.GET_CITY_REQUEST:
      return { ...state, city: action.payload };

    default:
      return state;
  }

};

export default reducer;