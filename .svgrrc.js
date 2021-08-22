module.exports = {
  // icon: true,
  native: true,
  typescript: true,
  replaceAttrValues: {
    '#000': '{props.fill}',
    primary: '{props.fill}',
    '#f00': '{props.fillSecondary}',
    secondary: '{props.fillSecondary}',
    '#111': '{props.stroke}',
    red: 'currentColor',
    '#063855': 'currentColor',
  },
  svgoConfig: {
    plugins: [
      { cleanupIDs: false },
      { convertColors: false },
      { cleanupNumericValues: false },
      { mergePaths: false },
      { prefixIds: false },
      { removeAttrs: true },
      { removeTitle: false },
      { removeDesc: false },
      { removeUselessStrokeAndFill: false },
      { removeUselessDefs: false },
      { removeViewBox: false },
    ],
  },
};
