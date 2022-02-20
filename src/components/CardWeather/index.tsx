import React, { useEffect, useState } from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
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
    ContentTemperature,
    Units,
} from './styles';

interface Props {
    city: CityProps
    data: WeatherProps,
}

export const CardWeather = ({ city, data }: Props) => {

    const unitsStore = useSelector((state: ApplicationState) => state.city.units);

    const [date, setDate] = useState("");

    useEffect(() => {


        //formtando data
        if (new window.Date(data.date * 1000).getDate() == new window.Date().getDate()) {
            setDate("Hoje");
        } else if (new window.Date(data.date * 1000).getDate() == (new window.Date().getDate() + 1)) {
            setDate("Amanhã");
        } else {
            setDate(
                String(new Intl.DateTimeFormat('pt-BR', {
                    weekday: "long"
                }).format(new window.Date(data.date * 1000)))
            )
        }

    }, [])


    return (
        <Container>

            <Content>
                <Title>
                    {
                        date
                    }
                </Title>

                <Date>
                    {
                        new Intl.DateTimeFormat('pt-BR', {
                            day: "numeric",
                            month: "long"
                        }).format(new window.Date(data.date * 1000))
                    }
                </Date>

                <WeatherInfor>
                    {data?.weather_description}
                </WeatherInfor>

                <TemperatureDetail>
                    {`${data?.temp_min.toFixed(0)}${unitsStore === "metric" ? '°C' : '°F'}  -  ${data?.temp_max.toFixed(0)}${unitsStore === "metric" ? '°C' : '°F'}`}
                </TemperatureDetail>
            </Content>

            <ContentRight>
                <ContentTemperature>
                    <Temperature>
                        {`${data?.temp.toFixed(0)}`}
                    </Temperature>
                    <Units>
                        {`${unitsStore === "metric" ? '°C' : '°F'}`}
                    </Units>
                </ContentTemperature>
            </ContentRight>

        </Container>
    );
};