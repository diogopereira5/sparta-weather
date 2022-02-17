import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingVertical: 20 },
    showsVerticalScrollIndicator: false,
})`
    
`;