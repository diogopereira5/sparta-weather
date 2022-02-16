import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons"

export const Container = styled.View`
    height: ${RFPercentage(15)}px;
    background-color: ${({ theme }) => theme.colors.header};
    flex-direction: row;
    align-items: flex-end;
    padding: 0 20px;
    padding-bottom: 10px;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.15);
`;

export const Content = styled.View`
    flex: 1;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    min-height: ${RFValue(32)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_white};
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Icon = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.text_white};
    font-size: ${RFValue(18)}px;
`;

export const Button = styled.TouchableOpacity``;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#eaeaea",
})`
    flex: 1;
    height: ${RFValue(32)}px;
    padding: 0 16px;
    color: ${({ theme }) => theme.colors.text_white};
    font-size: ${RFValue(14)}px;
`;