### How to install

1. Run in terminal:
`npm install @qonsoll/react-native-design`
or
`yarn add @qonsoll/react-native-design`
2. Install additional packages:
`npm install --save @react-native-community/checkbox react-native-date-picker react-native-image-picker react-native-svg react-native-svg-transformer react-native-vector-icons`
or
`yarn add @react-native-community/checkbox react-native-date-picker react-native-image-picker react-native-svg react-native-svg-transformer react-native-vector-icons`
3. Install pods for iOS application: `cd ios && pod install`
4. If you want to use default SVG icons, change your metro.config.js file:
`module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

// ——————————————————————————————

const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();`