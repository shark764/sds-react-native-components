import React from 'react';

import SvgFromXmlFile from './SvgFromXmlFile';
import SvgFromXmlString from './SvgFromXmlString';
import type { SvgFromXmlProps } from './types';

/**
 * This component should allow passing a xml string
 * and a xml file
 */
export function SvgFromXml ({
  xml,
  ...props
}: SvgFromXmlProps): React.ReactElement {
  return typeof xml === 'string'
    ? (
      <SvgFromXmlString xml={xml} {...props} />
    )
    : (
      <SvgFromXmlFile Xml={xml} {...props} />
    );
}

export default SvgFromXml;
