import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { CityProps } from '../../types/CityProps.interface';
import { WeatherProps } from '../../types/CityWeatherinterface';

import {
    Container,
    Content,
    ContentRight,
    Title,
    Date,
    WeatherInfor,
    TemperatureDetail,
    Temperature,
} from './styles';

interface Props {
    city: CityProps
    data: WeatherProps,
}

export const CardWeather = ({ city, data }: Props) => {

    const navigation = useNavigation();

    return (
        <Container
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Details", { city_id: city.id })}
        >

            <Content>
                <Title>
                    {data.date}
                </Title>

                <Date>
                    {data.date}
                </Date>

                <WeatherInfor>
                    {data?.weather_description}
                </WeatherInfor>

                <TemperatureDetail>
                    {`${data?.temp_min.toFixed(0)}° - ${data?.temp_max.toFixed(0)}°`}
                </TemperatureDetail>
            </Content>

            <ContentRight>
                <Temperature>
                    {`${data?.temp.toFixed(0)}°`}
                </Temperature>
            </ContentRight>

        </Container>
    );
};