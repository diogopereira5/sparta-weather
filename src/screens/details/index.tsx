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
    ContentBody,
    TitleHeader,
    ContentLoading,
    TextInfor,
    Footer,
} from './styles';
import { useDispatch } from 'react-redux';
import { deleteCityRequest } from '../../store/ducks/city/actions';
import { CityProps } from '../../types/CityProps.interface';


const Details = ({ route }: any) => {

    const theme = useTheme();
    const city: CityProps = route.params?.city;
    const navigation = useNavigation();
    const dispatch = useDispatch();

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

                    setForecastDaily(data);
                    setIsLoading(false);

                })


        } catch (err) {
            console.log(err);
        }
    }

    function handleDeleteCity() {

        try {

            dispatch(deleteCityRequest(city.id));
            goBack();

        } catch (err) {
            console.log(err);
        }

    }

    function goBack() {
        navigation.goBack()
    }

    return (
        <Container>

            <Header>
                <ContentHeader>
                    <Button
                        leftIcon="chevron-back"
                        onPress={goBack}
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

                    <ContentBody
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 30, paddingTop: 10 }}
                    >

                        <TextInfor>Previsão para os próximos 7 dias</TextInfor>

                        {
                            forecastDaily.map((item) => <CardWeather city={city} data={item} key={item.date} />)
                        }

                        <Footer>
                            <Button
                                label="Deletar Cidade"
                                colorLabel={theme.colors.secondary}
                                sizeLabel={14}
                                leftIcon="ios-trash-outline"
                                leftIconColor={theme.colors.secondary}
                                leftIconSize={16}
                                onPress={handleDeleteCity}
                            />
                        </Footer>

                    </ContentBody>

            }
        </Container>
    );
}

export default Details;