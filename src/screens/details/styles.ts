import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

interface IconFavoriteProps {
    isCheck: boolean,
}

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

export const ContentBody = styled.ScrollView`
    flex: 1;
`;

export const TitleHeader = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.text_white};
    margin-left: 16px;
    flex: 1;
`;

export const ContentLoading = styled.View`
    align-items: center;
    justify-content: center;
    padding-top: ${RFPercentage(20)}px;
`;

export const TextInfor = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.text_detail};  
    text-align: center;
    margin: 20px 0;
`;

export const Footer = styled.View`
    margin: 10px 0;
`;

export const FavoriteButton = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    align-items: flex-end;
`;

export const Favorite = styled(Ionicons) <IconFavoriteProps>`
    margin: 5px;
    color: ${({ theme, isCheck }) => isCheck ? theme.colors.secondary : theme.colors.shape};
    font-size: ${RFValue(24)}px;
`;