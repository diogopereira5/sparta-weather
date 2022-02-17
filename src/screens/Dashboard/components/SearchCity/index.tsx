import React from 'react';
import { Text } from 'react-native';
import { CardNewCity } from '../../../../components/CardNewCity';

import { CityProps } from '../../../../types/CityProps.interface';

import {
  Container,
  List
} from './styles';

interface Props {
  cities: CityProps[];
}

export const SearchCity = ({ cities }: Props) => {

  return (
    <Container>

      <List
        data={cities}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <CardNewCity city={item} />}
      />

    </Container>
  );
};