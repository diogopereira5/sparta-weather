import React from 'react';
import { CityProps } from '../../types/CityProps.interface';

import {
    Container,
    Content,
    ContentRight,
    Title,
    Locale,
    WeatherInfor,
    TemperatureDetail,
    Temperature,
    Favorite
} from './styles';

interface Props {
    city: CityProps,
}

export const CardCity = ({ city }: Props) => {

    return (
        <Container
            activeOpacity={0.5}
        >

            <Content>
                <Title>
                    {city.text}
                </Title>

                <Locale>
                    {city.country}
                </Locale>

                <WeatherInfor>
                    {city?.weather?.weather_description}
                </WeatherInfor>

                <TemperatureDetail>
                    {`${city?.weather?.temp_min.toFixed(0)}° - ${city?.weather?.temp_max.toFixed(0)}°`}
                </TemperatureDetail>
            </Content>

            <ContentRight>
                <Temperature>
                    {`${city?.weather?.temp.toFixed(0)}°`}
                </Temperature>
                <Favorite name="heart-outline" />
            </ContentRight>

        </Container>
    );
};