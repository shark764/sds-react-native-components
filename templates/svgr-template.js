const {
  identifier,
  jsxElement,
  jsxExpressionContainer,
} = require('@babel/types');

function svgToJsxTemplate (
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }

  const typeScriptTemplate = template.smart({ plugins });

  const typedProps = '{ children, ...props }: Props';

  const modifiedJsx = jsxElement(
    jsx.openingElement,
    jsx.closingElement,
    [...jsx.children, jsxExpressionContainer(identifier('children'))],
    false
  );

  return typeScriptTemplate.ast`${imports}

${`
type Props = SvgProps & {
  fillSecondary: string;
  children: React.ReactNode;
};

`}

${interfaces}

function ${componentName} (${typedProps}) {
  return ${modifiedJsx};
}

${exports}
  `;
}

module.exports = svgToJsxTemplate;
