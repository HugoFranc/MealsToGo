import {StatusBar} from 'react-native';
import styled from 'styled-components';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && 'magin-top: ${StatusBar.currentHeight}px'};
`;
