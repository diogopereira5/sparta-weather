import { CityProps } from "../../../types/CityProps.interface";

export enum CityTypes {
  STORE_CITY_REQUEST = '@city/STORE_CITY_REQUEST',
  STORE_CITY_SUCCESS = '@city/STORE_CITY_SUCCESS',
  GET_ALL_CITIES_REQUEST = '@city/GET_ALL_CITIES_REQUEST',
  GET_ALL_CITIES_SUCCESS = '@city/GET_ALL_CITIES_SUCCESS',
  DELETE_CITY_REQUEST = "@city/DELETE_CITY_REQUEST",
  DELETE_CITY_SUCCESS = "@city/DELETE_CITY_SUCCESS",
  SET_FAVORITE_CITY = "@city/SET_FAVORITE_CITY",
  SET_UNITS_CONFIG = "@city/SET_UNITS_CONFIG",
}

export interface City {
  city: CityProps[],
  favorite_id: string,
  units: "metric" | "imperial",
}

export interface CityState {
  readonly city: CityProps[];
  readonly favorite_id: string;
  readonly units: "metric" | "imperial";
}

export interface FetchAction {
  type: string;
  payload: any;
}