import { CityProps } from "../../../types/CityProps.interface";

export enum SearchTypes {
  GET_SEARCH_REQUEST = '@search/GET_SEARCH_REQUEST',
  SET_SEARCH_SUCCESS = '@search/SET_SEARCH_SUCCESS',
  SET_CLEAN_SEARCH = '@search/SET_CLEAN_SEARCH',
}

export interface Search {
  search: CityProps[],
}

export interface SearchState {
  readonly search: CityProps[];
}

export interface FetchAction {
  type: string;
  payload: any;
}