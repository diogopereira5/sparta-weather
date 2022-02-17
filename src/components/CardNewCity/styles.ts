import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    padding: 16px;
    border-radius: 5px;
    margin: 0px 20px 10px 20px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
`;

export const Locale = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(12)}px;
    margin-bottom: 10px
`;

export const Button = styled.TouchableOpacity`
    margin-left: 5px;
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text_button};
    font-size: ${RFValue(14)}px;
    margin-top: 10px;
`;