import React from 'react';
import styled from 'styled-components/native';
import type { ThemeProps } from '@dfhernandez/sds-native-theme';
import type { BaseButtonProps, ButtonProps } from './types';

interface StyledButtonProps extends ThemeProps, BaseButtonProps {}

const TouchableButton = styled.TouchableOpacity<StyledButtonProps>`
  border-radius: 6px;
  padding: 6px;

  ${({ theme, color, bgColor }: StyledButtonProps) => `
    background-color: ${bgColor ?? theme?.colors.button.main};
    color: ${color ?? theme?.colors.font.main}
  `};
`;
const ButtonText = styled.Text<StyledButtonProps>`
  font-size: 28px;

  ${({ theme, color }: StyledButtonProps) => `
    color: ${color ?? theme?.colors.font.main}
  `};
`;

function SdsButton ({
  title,
  disabled = false,
  onPress,
  color,
  type = 'base',
}: ButtonProps) {
  return (
    <TouchableButton
      onPress={onPress}
      disabled={disabled}
      color={color}
      type={type}>
      <ButtonText color={color}>{title}</ButtonText>
    </TouchableButton>
  );
}

export default SdsButton;
