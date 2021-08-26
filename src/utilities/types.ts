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

export interface ThemeProps {
  theme: {
    mode: 'light' | 'dark';
    PRIMARY_BACKGROUND_COLOR: string;
    PRIMARY_TEXT_COLOR: string;
    SECONDARY_TEXT_COLOR: string;
    PRIMARY_BUTTON_COLOR: string;
    SECONDARY_BUTTON_COLOR: string;
  };
}
