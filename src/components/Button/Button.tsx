import React from 'react';

import styled from 'styled-components/native';
import type { Props } from './types';

interface TBTheme {
  color: string;
}

const TouchableButton = styled.TouchableOpacity<TBTheme>`
  margin-top: 20px;
  background-color: ${({ color }: TBTheme) => color};
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
  color = 'green',
}: Props) => (
  <TouchableButton onPress={onPress} disabled={disabled} color={color}>
    <ButtonText>{title.toUpperCase()}</ButtonText>
  </TouchableButton>
);

export default SdsButton;
