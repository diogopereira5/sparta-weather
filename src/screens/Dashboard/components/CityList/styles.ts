import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingVertical: 20 },
    showsVerticalScrollIndicator: false,
})``;

export const ContentLoading = styled.View`
    align-items: center;
    justify-content: center;
    padding-top: ${RFPercentage(20)}px;
`;