import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { CardWeather } from '../../components/CardWeather';
import openWeatherApi, { API_TOKEN } from '../../service/openWeatherApi';
import { WeatherProps } from '../../types/CityWeatherinterface';

import {
    Container,
    Header,
    ContentHeader,
    TitleHeader,
    List,
    ContentLoading
} from './styles';


const Details = ({ route }: any) => {

    const theme = useTheme();
    const { city } = route.params;
    const navigation = useNavigation();

    const [forecastDaily, setForecastDaily] = useState<WeatherProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadWeatchForCities();
    }, []);

    //busca tempo de cada cidade da storage
    async function loadWeatchForCities() {
        try {

            let data: WeatherProps[] = [];

            await openWeatherApi.get(`/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=current,minutely,hourly,alerts&lang=pt_br&units=metric&appid=${API_TOKEN}`)
                .then((res: any) => {

                    res?.data?.daily.map((item: any) => {

                        data.push({
                            date: item.dt,
                            weather_main: item?.weather[0]?.main,
                            weather_description: item?.weather[0]?.description,
                            weather_icon: item?.weather[0]?.icon,
                            temp: item?.temp?.day,
                            temp_min: item?.temp?.min,
                            temp_max: item?.temp?.max,
                        })

                    })

                })
                .catch((err: any) => {
                    console.log(err);
                }).finally(() => {

                    console.log(data);
                    setForecastDaily(data);
                    setIsLoading(false);

                })


        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>

            <Header>
                <ContentHeader>
                    <Button
                        leftIcon="chevron-back"
                        onPress={() => navigation.goBack()}
                    />
                    <TitleHeader>
                        {city.text}
                    </TitleHeader>
                </ContentHeader>
            </Header>

            {
                isLoading ?

                    <ContentLoading>
                        <ActivityIndicator size="small" color={theme.colors.primary} />
                    </ContentLoading>

                    :

                    <List
                        data={forecastDaily}
                        keyExtractor={(item: any) => item.date}
                        renderItem={({ item }) => <CardWeather city={city} data={item} />}
                    />
            }
        </Container>
    );
}

export default Details;