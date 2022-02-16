import React from 'react';
import { Header } from '../../components/Header';

import {
  Container,
  Content,
  Title,
  SubTitle,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>

      <Header />

      <Content>

        <Title>
          Parece que você ainda não adicionou uma cidade
        </Title>

        <SubTitle>
          Tente adicionar uma cidade usando o botão de busca
        </SubTitle>

      </Content>

    </Container>
  );
}

export default Dashboard;