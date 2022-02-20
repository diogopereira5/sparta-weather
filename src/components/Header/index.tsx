import React, { useEffect, useState } from 'react';
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { ApplicationState } from '../../store';
import { setUnitsConfig } from '../../store/ducks/city/actions';
import { getSearchRequest, setCleanSearch } from '../../store/ducks/search/actions';

import {
    Container,
    Content,
    Title,
    IconSearch,
    Icon,
    Button,
    ContentInput,
    Input,
} from './styles';

export const Header = () => {

    const dispatch = useDispatch();
    const theme = useTheme();

    const searchStore = useSelector((state: ApplicationState) => state.search.search);
    const unitsStore = useSelector((state: ApplicationState) => state.city.units);

    const [valueSearch, setValueSearch] = useState("");

    useEffect(() => {

        //definindo unidade de medida de Cilsius como padrao
        if (!unitsStore) {
            dispatch(setUnitsConfig("metric"));
        }

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
        setValueSearch("");
        dispatch(setCleanSearch());
        Keyboard.dismiss()
    }

    function handleChangeUnitsConfig() {
        try {
            if (unitsStore === "metric") {
                dispatch(setUnitsConfig("imperial"))
            } else {
                dispatch(setUnitsConfig("metric"))
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>

            <Content>
                <Title>
                    Sparta Weather
                </Title>
                <Button onPress={handleChangeUnitsConfig}>
                    <Icon name={unitsStore === "metric" ? "temperature-celsius" : "temperature-fahrenheit"} />
                </Button>
            </Content>

            <Content>
                <ContentInput>
                    <Button onPress={handleCloseSearch} disabled={valueSearch ? false : true}>
                        <IconSearch color={theme.colors.primary} name={valueSearch ? "close" : "search"} />
                    </Button>
                    <Input
                        placeholder="Busque por uma cidade"
                        value={valueSearch}
                        onChangeText={setValueSearch}
                        // autoFocus
                        onEndEditing={handleSearchCity}
                        onSubmitEditing={handleSearchCity}
                        returnKeyType="search"
                        numberOfLines={1}
                    />
                </ContentInput>
            </Content>


        </Container>
    );
}
