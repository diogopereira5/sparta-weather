import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons"

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 16px;
    border-radius: 5px;
    margin: 0px 20px 10px 20px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
    flex-direction: row;
    justify-content: space-between;
`;

export const Content = styled.View``;

export const ContentRight = styled.View`
    justify-content: space-between;
    align-items: flex-end;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(18)}px;
`;

export const Locale = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(12)}px;
    margin-bottom: 15px;
`;

export const WeatherInfor = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
    margin: 2px 0px;
`;

export const TemperatureDetail = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(12)}px;
`;

export const Temperature = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(34)}px;
`;

export const Favorite = styled(Ionicons)`
    margin: 5px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;