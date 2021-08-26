import type * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import type { SizeProps } from '../../utilities/types';

export type SvgTeliconProps = SvgProps & {
  fillSecondary: string;
  children: React.ReactNode;
};

export type TeliconProps = SvgProps & {
  name: string;
  size?: SizeProps;
  fillSecondary: string;
};
