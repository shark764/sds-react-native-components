import type React from 'react';
import type { SvgProps } from 'react-native-svg';
import type { SizeProps } from '../../utilities/types';

type SvgXmlProps = SvgProps & {
  name?: string;
  size?: SizeProps;
  fillSecondary?: string;
};

export type SvgXmlFileType = React.FC<
SvgProps & {
  fillMain?: string;
  fillSecondary?: string;
}
>;

export type SvgFromXmlProps = SvgXmlProps & {
  xml: string | SvgXmlFileType;
};

export type SvgFromXmlStringProps = SvgXmlProps & {
  xml: string;
};

export type SvgFromXmlFileProps = SvgXmlProps & {
  Xml: SvgXmlFileType;
};
