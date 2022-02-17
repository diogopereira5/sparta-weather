import React from 'react';
import { View } from 'react-native';
import { CityProps } from '../../types/CityProps.interface';

import {
    Container,
    Title,
    Locale,
    Button,
    TextButton,
} from './styles';

interface Props {
    city: CityProps;
}

export const CardNewCity = ({ city }: Props) => {
    return (
        <Container>

            <Title
                numberOfLines={1}
            >
                {`${city.text}, ${city.state}`}
            </Title>

            <Locale>
                {city.country}
            </Locale>

            <Button>
                <TextButton>
                    Adicionar
                </TextButton>
            </Button>

        </Container>
    );
}