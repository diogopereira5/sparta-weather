import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    height: ${RFPercentage(15)}px;
    background-color: ${({ theme }) => theme.colors.header};
    flex-direction: row;
    align-items: flex-end;
    padding: 0 20px;
    padding-bottom: 5px;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.15);
`;

export const ContentHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TitleHeader = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.text_white};
    margin-left: 16px;
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