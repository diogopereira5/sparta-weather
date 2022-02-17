import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { getSearchRequest, setCleanSearch } from '../../store/ducks/search/actions';

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

    const searchStore = useSelector((state: ApplicationState) => state.search.search)

    const [onFocused, setOnFocused] = useState(false);
    const [valueSearch, setValueSearch] = useState("");

    useEffect(() => {

        //caso haja adição de uma nova cidade ele limpa a busca
        if (valueSearch && searchStore.length === 0) {
            handleCloseSearch()
        }

    }, [searchStore])

    //busca por uma cidade na api mapbox
    function handleSearchCity() {
        try {
            dispatch(getSearchRequest(valueSearch));
        } catch (err) {
            console.log(err);
        }
    }

    // close search para estado inicial
    function handleCloseSearch() {
        setOnFocused(false);
        setValueSearch("");
        dispatch(setCleanSearch());
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
                        <Button onPress={handleCloseSearch}>
                            <Icon name="close" />
                        </Button>
                        <Input
                            placeholder="Busque por uma cidade"
                            value={valueSearch}
                            onChangeText={setValueSearch}
                            autoFocus
                            onEndEditing={handleSearchCity}
                            onSubmitEditing={handleSearchCity}
                            returnKeyType="search"
                            numberOfLines={1}
                        />
                    </Content>

            }
        </Container>
    );
}
