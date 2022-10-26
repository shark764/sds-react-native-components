import type * as React from 'react';
import type { ButtonProps as Props } from 'react-native';

import type {
  PositionProps,
  SizeProps,
  TypeProps,
} from '../../utilities/types';

export interface BaseButtonProps {
  color?: string;
  bgColor?: string;
  type?: TypeProps;
  size?: SizeProps;
}
export type ButtonProps = Props &
BaseButtonProps & {
  content?: string;
  icon?: string;
  iconPosition?: PositionProps;
  href?: string;
  targetBlank?: boolean;
  routerLink?: boolean;
  'data-tip'?: string;
  'data-for'?: string;
  children?: React.ReactNode;
};
