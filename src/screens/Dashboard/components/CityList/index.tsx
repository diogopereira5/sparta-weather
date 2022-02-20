import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator } from "react-native";
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { CardCity } from '../../../../components/CardCity';
import openWeatherApi, { API_TOKEN } from '../../../../service/openWeatherApi';
import { ApplicationState } from '../../../../store';
import { CityProps } from '../../../../types/CityProps.interface';

import {
    Container,
    List,
    ContentLoading
} from './styles';

export const CityList = () => {

    const theme = useTheme();

    const favoriteId = useSelector((state: ApplicationState) => state.city.favorite_id);
    const unitsStore = useSelector((state: ApplicationState) => state.city.units);
    const citiesStored: CityProps[] = useSelector((state: ApplicationState) => state.city.city);

    const [cityWeather, setCityWeather] = useState<CityProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (citiesStored && isLoading) {
            loadWeatchForCities(citiesStored)
        }
    }, []);

    useMemo(() => {

        loadWeatchForCities(citiesStored)

    }, [citiesStored, favoriteId, unitsStore])

    //busca tempo de cada cidade da storage
    async function loadWeatchForCities(cities: CityProps[]) {
        setIsLoading(true);
        try {

            let data: CityProps[] = [];

            for (const item of cities) {

                const res = await openWeatherApi.get(`/weather?lon=${item.longitude}&lat=${item.latitude}&lang=pt_br&units=${unitsStore ? unitsStore : "metric"}&APPID=${API_TOKEN}`);

                data.push({
                    ...item,
                    weather: {
                        temp: res.data?.main?.temp,
                        feels_like: res.data?.main?.feels_like,
                        temp_min: res.data?.main?.temp_min,
                        temp_max: res.data?.main?.temp_max,
                        weather_main: res.data?.weather[0]?.main,
                        weather_description: res.data?.weather[0]?.description,
                        weather_icon: res.data?.weather[0]?.icon,
                    },
                })
            };

            //ordenar cidade por favorito
            setCityWeather(data.sort(function (a, b) {
                if (a.id === favoriteId) return -1
                if (b.id === favoriteId) return 1
                return 0
            }));

            setIsLoading(false);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            {
                isLoading ?

                    <ContentLoading>
                        <ActivityIndicator size="small" color={theme.colors.primary} />
                    </ContentLoading>

                    :

                    <List
                        data={cityWeather}
                        keyExtractor={(item: any) => item.id}
                        renderItem={({ item }) => <CardCity city={item} />}
                    />
            }
        </Container>
    );
};