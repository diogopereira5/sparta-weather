export enum SearchTypes {
  GET_SEARCH_REQUEST = '@search/GET_SEARCH_REQUEST',
  SET_SEARCH_SUCCESS = '@search/SET_SEARCH_SUCCESS',
}

export interface Search {
  search: any,
}

export interface SearchState {
  readonly search: any;
}

export interface FetchAction {
  type: string;
  payload: any;
}