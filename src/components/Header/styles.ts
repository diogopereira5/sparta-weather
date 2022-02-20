import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"

interface IconProps {
    color?: string,
}

export const Container = styled.View`
    height: ${RFPercentage(24)}px;
    background-color: ${({ theme }) => theme.colors.header};
    box-shadow: 0px 3px 3px rgba(0,0,0,0.15);
    padding: 16px;
    justify-content: flex-end;
`;

export const Content = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_white};
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const IconSearch = styled(Ionicons) <IconProps>`
    color: ${({ theme, color }) => color ? color : theme.colors.text_white};
    font-size: ${RFValue(20)}px;
`;

export const Icon = styled(MaterialCommunityIcons) <IconProps>`
    color: ${({ theme, color }) => color ? color : theme.colors.text_white};
    font-size: ${RFValue(22)}px;
`;

export const Button = styled.TouchableOpacity`
    height: ${RFValue(30)}px;
    width: ${RFValue(30)}px;
    align-items: center;
    justify-content: center;
`;

export const ContentInput = styled.View`
    background: ${({ theme }) => theme.colors.shape};
    width: 100%;
    height: ${RFValue(40)}px;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    margin-top: 20px;
`;

export const Input = styled.TextInput.attrs({
    // placeholderTextColor: "#eaeaea",
})`
    flex: 1;
    height: ${RFValue(40)}px;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(13)}px;
`;