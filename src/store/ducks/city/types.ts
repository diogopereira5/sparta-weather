import { CityProps } from "../../../types/CityProps.interface";

export enum CityTypes {
  STORE_CITY_REQUEST = '@city/STORE_CITY_REQUEST',
  STORE_CITY_SUCCESS = '@city/STORE_CITY_SUCCESS',
}

export interface City {
  city: CityProps[],
}

export interface CityState {
  readonly city: CityProps[];
}

export interface FetchAction {
  type: string;
  payload: any;
}