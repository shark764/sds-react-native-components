import React from 'react';

import styled from 'styled-components/native';

import { getFontSize } from '@dfhernandez/js-utilities';
import type { ThemeProps } from '@dfhernandez/sds-native-theme';

import type { SizeProps } from '../../utilities/types';
import type { TextInfoProps } from './types';

const handleFontSize = (size: SizeProps | undefined) => {
  const fontSize = getFontSize((size as string) ?? 'medium');
  return `font-size: ${fontSize}px;`;
};

interface StyledTextProps extends ThemeProps, TextInfoProps {}

const StyledText = styled.Text<StyledTextProps>`
  color: ${({ theme, color }: StyledTextProps) =>
    color ?? theme.colors.font.main};
  ${({ size }) => handleFontSize(size)};
`;

function SdsText ({
  content,
  type = 'base',
  size = 'default',
  color,
  children,
}: TextInfoProps) {
  return (
    <StyledText size={size} color={color} type={type}>
      {content}
      {children}
    </StyledText>
  );
}

export default SdsText;
