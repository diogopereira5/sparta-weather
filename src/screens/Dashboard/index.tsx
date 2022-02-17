import React from 'react';

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

  return (
    <Container>

      <Header />

      <Content>

        {
          listSearch && listSearch.length > 0 ?
            <SearchList cities={listSearch} />
            :
            citiesStored ?
              <CityList cities={citiesStored} />
              :
              <Apresentation />
        }

      </Content>

    </Container>
  );
}

export default Dashboard;