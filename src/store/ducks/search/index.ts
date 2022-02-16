import { SearchTypes, SearchState, FetchAction } from './types';
import { Reducer } from 'redux';

const initialState: SearchState = {
  search: null,
};

const reducer: Reducer<SearchState, FetchAction> = (state = initialState, action: FetchAction) => {

  switch (action.type) {
    case SearchTypes.GET_SEARCH_REQUEST:
      return { ...state, search: action.payload };

    default:
      return state;
  }

};

export default reducer;