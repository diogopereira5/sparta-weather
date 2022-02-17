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
        <Container>

            <Content>
                <Title>
                    Blumenau
                </Title>

                <Locale>
                    Brasil
                </Locale>

                <WeatherInfor>
                    Chuva
                </WeatherInfor>

                <TemperatureDetail>
                    23° - 31°
                </TemperatureDetail>
            </Content>

            <ContentRight>
                <Temperature>
                    18°
                </Temperature>
                <Favorite name="heart" />
            </ContentRight>

        </Container>
    );
};