import axios from 'axios';

export const API_TOKEN = "ea600e5335769679552868be26aed124";

const openWeatherApi = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/weather?lon=-40.397&lat=-18.7063&APPID=",
});

export default openWeatherApi;