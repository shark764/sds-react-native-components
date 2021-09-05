import React from 'react';
import { Use } from 'react-native-svg';
import { getIconSize } from '@2600hz/js-utilities';
import SvgTelicon from './SvgTelicon';
import type { TeliconProps } from './types';

export function Telicon ({
  size = 'default',
  width = 100,
  height = 100,
  name,
  fill = 'black',
  fillSecondary,
}: // ...props
TeliconProps): React.ReactElement {
  const sizeValue = getIconSize(size);
  const widthValue = sizeValue ?? width;
  const heightValue = sizeValue ?? height;

  return (
    <SvgTelicon
      width={widthValue}
      height={heightValue}
      fill={fill}
      fillSecondary={fillSecondary}>
      <Use
        href={`#${name}`}
        width={widthValue}
        height={heightValue}
        fill={fill}
      />
    </SvgTelicon>
  );
}

export default Telicon;
