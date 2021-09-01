import type { DefaultTheme } from 'styled-components/native';

export type TypeProps =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'dangeralt'
  | 'info'
  | 'warning';

export type SizeProps =
  | 'default'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge';

export type PositionProps = 'start' | 'end';

export interface DefaultThemeProps extends DefaultTheme {}

export interface ThemeProps {
  theme: DefaultTheme;
}
