import type * as React from 'react';

import type { SvgProps } from 'react-native-svg';

import type { SizeProps } from '../../utilities/types';
import type { AvailableTelicon } from './telicon-types';

export interface TeliconWrapperProps {
  fillSecondary?: string;
  children: React.ReactNode;
}

export type SvgTeliconProps = SvgProps & TeliconWrapperProps;

export type TeliconProps = SvgProps & {
  name: AvailableTelicon;
  size?: SizeProps;
  fillSecondary?: string;
};

export type { AvailableTelicon };
