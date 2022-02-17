import React from 'react';
import { useDispatch } from 'react-redux';
import { storeCityRequest } from '../../store/ducks/city/actions';
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

    const dispatch = useDispatch();

    function handleAddCity() {
        try {

            dispatch(storeCityRequest(city));

        } catch (err) {
            console.log(err);

        }
    }

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
                <TextButton
                    onPress={handleAddCity}
                >
                    Adicionar
                </TextButton>
            </Button>

        </Container>
    );
}