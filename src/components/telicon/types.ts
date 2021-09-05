import type * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import type { SizeProps } from '../../utilities/types';

export interface TeliconWrapperProps {
  fillSecondary: string;
  children: React.ReactNode;
}

export type SvgTeliconProps = SvgProps & TeliconWrapperProps;

export type TeliconProps = SvgProps & {
  name: string;
  size?: SizeProps;
  fillSecondary: string;
};
