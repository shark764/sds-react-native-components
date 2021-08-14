import React from 'react';
import { SvgProps, Use } from 'react-native-svg';
import SvgTelicon300 from './SvgTelicon';

type Sizes = 'default' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

type Props = SvgProps & {
  name: string;
  size?: Sizes;
  fillSecondary: string;
};

const sizes: { [key: string]: number; } = {
  default: 100,
  xsmall: 10,
  small: 50,
  medium: 100,
  large: 150,
  xlarge: 200,
};

const getSize = (value: string) => sizes[value];

const Telicon = ({
  size = 'default',
  width = 100,
  height = 100,
  name,
  fill = 'black',
  fillSecondary,
  ...props
}: Props): React.ReactElement => {
  const sizeValue = getSize(size);
  const widthValue = width ?? sizeValue;
  const heightValue = height ?? sizeValue;

  return (
    <SvgTelicon300 width={widthValue} height={heightValue} fill={fill} fillSecondary={fillSecondary}>
      <Use href={`#telicon-3_0_0_svg__${name}`} width={widthValue} height={heightValue} fill={fill} />
    </SvgTelicon300>
  );
};

export default Telicon;
