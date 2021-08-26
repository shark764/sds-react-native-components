import React from 'react';
import styled from 'styled-components/native';
import type { ThemeProps } from '../../utilities/types';
import type { BaseButtonProps, ButtonProps } from './types';

interface StyledButtonProps extends ThemeProps, BaseButtonProps {}

const TouchableButton = styled.TouchableOpacity<StyledButtonProps>`
  border-radius: 6px;
  padding: 6px;

  ${({ theme, color, bgColor }: StyledButtonProps) => `
    background-color: ${bgColor ?? theme.PRIMARY_BACKGROUND_COLOR};
    color: ${color ?? theme.PRIMARY_BUTTON_COLOR}
  `};
`;
const ButtonText = styled.Text<StyledButtonProps>`
  font-size: 28px;

  ${({ theme, color }: StyledButtonProps) => `
    color: ${color ?? theme.PRIMARY_TEXT_COLOR}
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
