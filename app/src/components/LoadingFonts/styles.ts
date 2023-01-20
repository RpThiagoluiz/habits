import styled from 'styled-components/native';
import { ActivityIndicator, View } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Loading = styled(ActivityIndicator).attrs({
  color: '#7C3AED',
  size: 60,
})``;
