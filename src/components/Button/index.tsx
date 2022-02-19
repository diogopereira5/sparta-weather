import React from 'react';
import { TouchableOpacityProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
    Container,
    Title,
    Icon
} from './styles';

interface Props extends TouchableOpacityProps {
    label?: string,
    leftIcon?: keyof typeof Ionicons.glyphMap; //typagem de icon
    colorButton?: string,
}

export const Button = ({ label, leftIcon, colorButton, ...rest }: Props) => {
    return (
        <Container
            {...rest}
            colorButton={colorButton}
        >
            {
                leftIcon && <Icon name={leftIcon} />
            }
            {
                label && <Title>{label}</Title>
            }
        </Container>
    );
}