import React from 'react';

import styled from 'styled-components/native';

import { getFontSize } from '@dfhernandez/js-utilities';
import type { ThemeProps } from '@dfhernandez/sds-native-theme';

import type { SizeProps } from '../../utilities/types';
import type { BaseButtonProps, ButtonProps } from './types';

interface StyledButtonProps extends ThemeProps, BaseButtonProps {}

const handleFontSize = (size: SizeProps | undefined) => {
  const fontSize = getFontSize((size as string) ?? 'medium');
  const fontSizePx = `font-size: ${fontSize}px;`;

  switch (size) {
    case 'xsmall':
      return `${fontSizePx} padding: 2px;`;
    case 'small':
      return `${fontSizePx} padding: 2px;`;
    case 'large':
      return `${fontSizePx} padding: 6px;`;
    case 'xlarge':
      return `${fontSizePx} padding: 8px;`;
    case 'medium':
    case 'default':
    default:
      return `${fontSizePx} padding: 4px;`;
  }
};

const PressableButton = styled.Pressable<StyledButtonProps>`
  border-radius: 6px;
  ${({ size }) => handleFontSize(size)};

  ${({ theme, color, bgColor }: StyledButtonProps) => `
    background-color: ${bgColor ?? theme.colors.button.main};
    color: ${color ?? theme.colors.font.main}
  `};
`;
const ButtonText = styled.Text<StyledButtonProps>`
  ${({ size }) => handleFontSize(size)};

  ${({ theme, color }: StyledButtonProps) => `
    color: ${color ?? theme.colors.font.main}
  `};
`;

function SdsButton ({
  title,
  disabled = false,
  onPress,
  color,
  bgColor,
  type = 'base',
  size = 'medium',
}: ButtonProps) {
  return (
    <PressableButton
      onPress={onPress}
      disabled={disabled}
      size={size}
      color={color}
      bgColor={bgColor}
      type={type}>
      <ButtonText color={color}>{title}</ButtonText>
    </PressableButton>
  );
}

export default SdsButton;
