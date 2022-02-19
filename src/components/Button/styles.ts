import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
    colorButton?: string
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    background: ${({ colorButton }) => colorButton ? colorButton : "transparent"};
    flex-direction: row;
    align-items: center;
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`;

export const Icon = styled(Ionicons)`
    color: #fff;
    font-size: ${RFValue(22)}px;
`;