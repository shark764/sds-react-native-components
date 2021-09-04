import React from 'react';
import { getIconSize } from '@dfhernandez/js-utilities';
import type { SvgFromXmlFileProps } from './types';

/**
 * This component should allow passing a xml string
 * and a xml file
 */
export function SvgFromXmlFile ({
  Xml,
  size,
  width = 100,
  height = 100,
  fill = 'black',
  fillSecondary,
}: // ...props
SvgFromXmlFileProps): React.ReactElement {
  const sizeValue = getIconSize(size ?? '');
  const widthValue = sizeValue ?? width;
  const heightValue = sizeValue ?? height;

  return (
    <Xml
      width={widthValue}
      height={heightValue}
      fill={fill}
      fillSecondary={fillSecondary}
    />
  );
}

export default SvgFromXmlFile;
