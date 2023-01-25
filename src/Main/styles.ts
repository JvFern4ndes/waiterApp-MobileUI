import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

console.log({ isAndroid, currentHeight: StatusBar.currentHeight });

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
`;

export const CategoriesContainer = styled.View`

`;
export const MenuContainer = styled.View`

`;
export const FooterContainer = styled.View`

`;
