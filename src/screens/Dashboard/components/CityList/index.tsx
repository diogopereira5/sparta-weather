import React from 'react';
import { CardCity } from '../../../../components/CardCity';
import { CityProps } from '../../../../types/CityProps.interface';

import {
    Container,
    List
} from './styles';

interface Props {
    cities: CityProps[],
}

export const CityList = ({ cities }: Props) => {

    return (
        <Container>

            <List
                data={cities}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }) => <CardCity city={item} />}
            />

        </Container>
    );
};