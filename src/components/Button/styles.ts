import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
    colorButton?: string
    sizeButton?: "large" | "small";
}

interface TitleProps {
    sizeLabel?: number,
    colorLabel?: string,
}

interface IconProps {
    color?: string,
    size?: number,
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    background: ${({ colorButton }) => colorButton ? colorButton : "transparent"};
    flex-direction: row;
    align-items: center;
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;

    width: ${({ sizeButton }) => sizeButton == "small" ? '100%' : "auto"};
`;

export const Title = styled.Text<TitleProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ sizeLabel }) => sizeLabel ? sizeLabel : 16}px;
    color: ${({ colorLabel, theme }) => colorLabel ? colorLabel : theme.colors.text};
`;

export const Icon = styled(Ionicons) <IconProps>`
    color: ${({ color }) => color ? color : '#fff'};
    font-size: ${({ size }) => size ? size : 22}px;
    margin-right: 10px;
`;