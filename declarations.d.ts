declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  import { SvgXmlFileType } from './src/components/svgxml/types';

  const content: SvgXmlFileType;
  export default content;
}
