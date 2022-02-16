import { SearchTypes } from './types';
import { action } from 'typesafe-actions';

export const getSearchRequest = (payload: string) => action(SearchTypes.GET_SEARCH_REQUEST, payload);
export const getSearchSuccess = (payload: any) => action(SearchTypes.GET_SEARCH_SUCCESS, payload);