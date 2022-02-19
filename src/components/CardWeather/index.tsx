import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
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

    const [date, setDate] = useState("");

    useEffect(() => {


        //formtando data
        if (new window.Date(data.date * 1000).getDate() == new window.Date().getDate()) {
            setDate("Hoje");
        } else if (new window.Date(data.date * 1000).getDate() == (new window.Date().getDate() + 1)) {
            setDate("Amanhã");
        } else {
            setDate(
                String(Intl.DateTimeFormat('pt-BR', {
                    weekday: "long"
                }).format(new window.Date(data.date * 1000)))
            )
        }

    }, [])


    return (
        <Container
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Details", { city_id: city.id })}
        >

            <Content>
                <Title>
                    {
                        date
                    }
                </Title>

                <Date>
                    {
                        Intl.DateTimeFormat('pt-BR', {
                            day: "numeric",
                            month: "long"
                        }).format(new window.Date(data.date * 1000))
                    }
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