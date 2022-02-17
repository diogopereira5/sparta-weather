import { CityProps } from "../../../types/CityProps.interface";

export enum CityTypes {
  STORE_CITY_REQUEST = '@city/STORE_CITY_REQUEST',
  STORE_CITY_SUCCESS = '@city/STORE_CITY_SUCCESS',
  GET_ALL_CITIES_REQUEST = '@city/GET_ALL_CITIES_REQUEST',
  GET_ALL_CITIES_SUCCESS = '@city/GET_ALL_CITIES_SUCCESS',
}

export interface City {
  city: CityProps[],
  favorite_id: string,
}

export interface CityState {
  readonly city: CityProps[];
  readonly favorite_id: string;
}

export interface FetchAction {
  type: string;
  payload: any;
}