module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@config': './src/config',
            '@helpers': './src/helpers',
            '@modules': './src/modules',
            '@providers': './src/providers',
            '@shared': './src/shared',
            '@styles': './src/styles',
            '@types': './src/types',
            '@utilities': './src/utilities',
            tests: ['./tests/'],
          },
        },
      ],
      // [
      //   'babel-plugin-inline-import',
      //   {
      //     extensions: ['.svg'],
      //   },
      // ],
    ],
  };
};
