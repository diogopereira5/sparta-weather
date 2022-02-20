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
    sizeLabel?: number,
    colorLabel?: string,
    leftIcon?: keyof typeof Ionicons.glyphMap; //typagem de icon
    leftIconColor?: string,
    leftIconSize?: number,
    colorButton?: string,
    sizeButton?: "large" | "small";
    children?: any,
}

export const Button = ({
    label,
    sizeLabel,
    colorLabel,
    leftIcon,
    leftIconColor,
    leftIconSize,
    colorButton,
    sizeButton,
    children = null,
    ...rest
}: Props) => {
    return (
        <Container
            {...rest}
            colorButton={colorButton}
            sizeButton={sizeButton}
        >
            {
                leftIcon && <Icon
                    name={leftIcon}
                    color={leftIconColor}
                    size={leftIconSize}
                />
            }
            {
                label && <Title
                    sizeLabel={sizeLabel}
                    colorLabel={colorLabel}
                >
                    {label}
                </Title>
            }
            {children}
        </Container>
    );
}