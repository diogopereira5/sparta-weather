import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchRequest } from '../../store/ducks/search/actions';

import {
    Container,
    Content,
    Title,
    Icon,
    Button,
    Input,
} from './styles';

export const Header = () => {

    const dispatch = useDispatch();

    const [onFocused, setOnFocused] = useState(false);
    const [valueSearch, setValueSearch] = useState("");

    function handleSearchCity() {

        //busca por uma cidade na api mapbox
        try {

            dispatch(getSearchRequest(valueSearch));

        } catch (err) {
            console.log(err);
        }

    }

    return (
        <Container>
            {
                !onFocused ?

                    <Content>
                        <Title>
                            Cidades
                        </Title>
                        <Button onPress={() => setOnFocused(!onFocused)}>
                            <Icon name="search" />
                        </Button>
                    </Content>

                    :

                    <Content>
                        <Button onPress={() => setOnFocused(!onFocused)}>
                            <Icon name="close" />
                        </Button>
                        <Input
                            placeholder="Busque por uma cidade"
                            value={valueSearch}
                            onChangeText={setValueSearch}
                            autoFocus
                            onEndEditing={handleSearchCity}
                        />
                    </Content>

            }
        </Container>
    );
}
