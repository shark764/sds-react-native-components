import React from 'react';
import styled from 'styled-components/native';
import { getFontSize } from '@2600hz/js-utilities';
import type { TextInfoProps } from './types';

interface STTheme {
  color: string;
  size: number;
}

const StyledText = styled.Text<STTheme>`
  color: ${({ color }: STTheme) => color};
  font-size: ${({ size }: STTheme) => size}px;
`;

function SdsText ({
  content,
  // type = 'base',
  size = 'default',
  color = 'green',
  children,
}: TextInfoProps) {
  const fontSize = getFontSize(size);
  return (
    <StyledText size={fontSize} color={color}>
      {content}
      {children}
    </StyledText>
  );
}

export default SdsText;
