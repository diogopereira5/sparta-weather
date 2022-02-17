import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Title = styled.Text`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(18)}px;
    margin: 30px 0 16px;
`;

export const SubTitle = styled.Text`
    text-align: center;]
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(14)}px;
`;