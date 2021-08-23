import React from 'react';

import styled from 'styled-components/native';
import type { darkTheme } from '@/styles/theme';
import type { Props } from './types';

type ThemeType = typeof darkTheme;
interface StyledThemeType {
  theme: ThemeType;
  color?: string;
}

const TouchableButton = styled.TouchableOpacity<StyledThemeType>`
  margin-top: 20px;
  background-color: ${(props: StyledThemeType) =>
    props.color ?? props.theme.SECONDARY_BUTTON_COLOR};
  color: ${(props: StyledThemeType) =>
    props.color ?? props.theme.SECONDARY_TEXT_COLOR};
  border-radius: 5px;
  padding: 10px;
`;
const ButtonText = styled.Text`
  font-size: 28px;
  color: #4512dc;
`;

const SdsButton = ({
  title,
  disabled = false,
  onPress,
  color /* = 'green' */,
}: Props) => (
  <TouchableButton onPress={onPress} disabled={disabled} color={color}>
    <ButtonText>{title.toUpperCase()}</ButtonText>
  </TouchableButton>
);

export default SdsButton;
