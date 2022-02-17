import { CityTypes } from './types';
import { action } from 'typesafe-actions';
import { CityProps } from '../../../types/CityProps.interface';

export const storeCityRequest = (payload: CityProps) => action(CityTypes.STORE_CITY_REQUEST, payload);
export const storeCitySuccess = (payload: CityProps[]) => action(CityTypes.STORE_CITY_SUCCESS, payload);