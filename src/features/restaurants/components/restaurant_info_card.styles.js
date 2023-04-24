import styled from 'styled-components/native';
import {Card} from 'react-native-paper';

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
  elevation: 5;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[1]};
  padding-top: ${props => props.theme.space[1]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const Section = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.bg.primary};
`;
