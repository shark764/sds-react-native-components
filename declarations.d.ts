declare module '*.svg' {
  import { SvgXmlFileType } from './src/components/svgxml/types';

  const content: SvgXmlFileType;

  export default content;
}
