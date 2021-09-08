import type * as React from 'react';
import type { TextProps } from 'react-native';

import type { SizeProps, TypeProps } from '../../utilities/types';

export type TextInfoProps = TextProps & {
  content?: string;
  type?: TypeProps;
  size?: SizeProps;
  children?: React.ReactNode;
  color?: string;
};
