export interface WeatherProps {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    weather_main: string,
    weather_description: string,
    weather_icon: string,
}

export interface CityProps {

    id: string,
    text: string,
    place_name: string,
    state: string,
    country: string,
    longitude: Number,
    latitude: Number,
    weather?: WeatherProps,

}