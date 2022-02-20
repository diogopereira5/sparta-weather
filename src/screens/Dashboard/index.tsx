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

const Dashboard = () => {

  const listSearch: CityProps[] = useSelector((state: ApplicationState) => state.search.search);
  const citiesStored: CityProps[] = useSelector((state: ApplicationState) => state.city.city);

  return (
    <Container>

      <Header />

      <Content>

        {
          listSearch && listSearch.length > 0 ?
            <SearchList cities={listSearch} />
            :
            citiesStored && citiesStored.length > 0 ?
              <CityList />
              :
              <Apresentation />
        }

      </Content>

    </Container>
  );
}

export default Dashboard;