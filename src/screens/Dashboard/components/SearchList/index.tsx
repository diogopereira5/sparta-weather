import React from 'react';

import { CardNewCity } from '../../../../components/CardNewCity';
import { CityProps } from '../../../../types/CityProps.interface';

import {
  Container,
  List
} from './styles';

interface Props {
  cities: CityProps[];
}

export const SearchList = ({ cities }: Props) => {

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