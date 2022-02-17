export enum CityTypes {
  GET_CITY_REQUEST = '@city/GET_CITY_REQUEST',
  GET_CITY_SUCCESS = '@city/GET_CITY_SUCCESS',
}

export interface City {
  city: any,
}

export interface CityState {
  readonly city: any;
}

export interface FetchAction {
  type: string;
  payload: any;
}