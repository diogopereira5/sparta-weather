import { CityTypes } from './types';
import { action } from 'typesafe-actions';
import { CityProps } from '../../../types/CityProps.interface';

export const storeCityRequest = (payload: CityProps) => action(CityTypes.STORE_CITY_REQUEST, payload);
export const storeCitySuccess = (payload: CityProps[]) => action(CityTypes.STORE_CITY_SUCCESS, payload);

export const getAllCitiesRequest = () => action(CityTypes.GET_ALL_CITIES_REQUEST, null);
export const getAllCitiesSuccess = (payload: CityProps[]) => action(CityTypes.GET_ALL_CITIES_SUCCESS, payload);