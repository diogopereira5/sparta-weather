import React from 'react';

import { Header } from '../../components/Header';
import { Apresentation } from './components/Apresentation';
import { SearchCity } from './components/SearchCity';

import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import {
  Container,
  Content,
} from './styles';
import { CityProps } from '../../types/CityProps.interface';

const Dashboard: React.FC = () => {

  const citiesSearch: CityProps[] = useSelector((state: ApplicationState) => state.search.search);

  return (
    <Container>

      <Header />

      <Content>

        {
          citiesSearch && citiesSearch.length > 0
            ?
            <SearchCity cities={citiesSearch} />
            :
            <Apresentation />
        }

      </Content>

    </Container>
  );
}

export default Dashboard;