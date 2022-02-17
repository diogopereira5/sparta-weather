import React from 'react';
import { CardCity } from '../../../../components/CardCity';
import { CityProps } from '../../../../types/CityProps.interface';

import { Container } from './styles';

interface Props {
    cities: CityProps[],
}

export const CityList = ({ cities }: Props) => {

    return (
        <Container>

            <CardCity city={cities[0]} />

        </Container>
    );
};