// Learn more https://docs.expo.io/guides/customizing-metro

// const path = require('path');

// expo v41:
// remove the @ (see: https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
const { getDefaultConfig } = require('expo/metro-config');

// react-native >= 0.57

// const extraNodeModules = {
//   '@code503': path.resolve(__dirname + '/../bck-sds-react-native-components/'),
// };
// const watchFolders = [path.resolve(__dirname + '/../bck-sds-react-native-components/')];

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      // getTransformOptions: async () => ({
      //   transform: {
      //     experimentalImportSupport: false,
      //     inlineRequires: true,
      //   },
      // }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      // extraNodeModules,
    },
    // watchFolders,
  };
})();
