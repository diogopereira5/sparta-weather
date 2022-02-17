import React from 'react';

import {
    Container,
    Title,
    SubTitle
} from './styles';

export const Apresentation = () => {
    return (
        <Container>
            <Title>
                Parece que você ainda não adicionou uma cidade
            </Title>

            <SubTitle>
                Tente adicionar uma cidade usando o botão de busca
            </SubTitle>
        </Container>
    );
};