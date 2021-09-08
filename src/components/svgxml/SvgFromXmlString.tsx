import React from 'react';

import { SvgXml } from 'react-native-svg';

import { getIconSize } from '@dfhernandez/js-utilities';

import type { SvgFromXmlStringProps } from './types';

/**
 * This component should allow passing a xml string
 * and a xml file
 */
export function SvgFromXmlString ({
  xml,
  size,
  width = 100,
  height = 100,
  fill = 'black',
}: // ...props
SvgFromXmlStringProps): React.ReactElement {
  const sizeValue = getIconSize(size ?? '');
  const widthValue = sizeValue ?? width;
  const heightValue = sizeValue ?? height;

  return (
    <SvgXml xml={xml} width={widthValue} height={heightValue} fill={fill} />
  );
}

export default SvgFromXmlString;
