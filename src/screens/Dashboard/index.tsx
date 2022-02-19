import React, { useCallback, useEffect, useState } from 'react';

import { useFocusEffect } from '@react-navigation/core';
import { Header } from '../../components/Header';
import { Apresentation } from './components/Apresentation';
import { SearchList } from './components/SearchList';

import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import {
  Container,
  Content,
} from './styles';
import { CityProps } from '../../types/CityProps.interface';
import { CityList } from './components/CityList';

const Dashboard: React.FC = () => {

  const listSearch: CityProps[] = useSelector((state: ApplicationState) => state.search.search);
  const citiesStored: CityProps[] = useSelector((state: ApplicationState) => state.city.city);
  const favoriteId = useSelector((state: ApplicationState) => state.city.favorite_id);

  const [cities, setCities] = useState<CityProps[]>([]);

  useEffect(() => {
    loadCities();
  }, [])

  useFocusEffect(useCallback(() => {
    loadCities()
  }, [citiesStored]))

  function loadCities() {

    if (citiesStored.length > 0) {
      setCities(citiesStored);
    }
  }

  return (
    <Container>

      <Header />

      <Content>

        {
          listSearch && listSearch.length > 0 ?
            <SearchList cities={listSearch} />
            :
            cities && cities.length > 0 ?
              <CityList cities={cities} />
              :
              <Apresentation />
        }

      </Content>

    </Container>
  );
}

export default Dashboard;