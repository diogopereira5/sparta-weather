import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from "react-native";
import { useTheme } from 'styled-components';
import { CardCity } from '../../../../components/CardCity';
import openWeatherApi, { API_TOKEN } from '../../../../service/openWeatherApi';
import { CityProps } from '../../../../types/CityProps.interface';

import {
    Container,
    List,
    ContentLoading
} from './styles';

interface Props {
    cities: CityProps[],
}

export const CityList = ({ cities }: Props) => {

    const theme = useTheme();

    const [cityWeather, setCityWeather] = useState<CityProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadWeatchForCities();
    }, []);

    //busca tempo de cada cidade da storage
    async function loadWeatchForCities() {
        try {

            var data: CityProps[] = [];

            cities.forEach(async (item) => {

                await openWeatherApi.get(`?lon=${item.longitude}&lat=${item.latitude}&APPID=${API_TOKEN}`)
                    .then((res: any) => {
                        data.push({
                            ...item,
                            weather: res.data?.weather[0],
                        })
                    })
                    .catch((err: any) => {
                        console.log(err);
                    })
                    .finally(() => {
                        setIsLoading(false);
                        setCityWeather(data);
                    })

            });

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