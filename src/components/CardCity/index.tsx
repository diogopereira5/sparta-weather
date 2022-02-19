import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
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

    const favoriteId = useSelector((state: ApplicationState) => state.city.favorite_id);

    const navigation = useNavigation();

    return (
        <Container
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Details", { city })}
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
                <Favorite name={favoriteId === city.id ? "heart" : "heart-outline"} />
            </ContentRight>

        </Container>
    );
};