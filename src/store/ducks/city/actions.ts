import { CityTypes } from './types';
import { action } from 'typesafe-actions';

export const getCityRequest = (payload: string) => action(CityTypes.GET_CITY_REQUEST, payload);
export const getCitySuccess = (payload: any) => action(CityTypes.GET_CITY_SUCCESS, payload);