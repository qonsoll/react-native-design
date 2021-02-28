### About @qonsoll/react-native-design
This is components library with possibility to configure everything you need. ⚡️⚡️⚡️ Using it you can extend or/and override any part of any element inside the lib (borders (radius, colors, width), font families for titles or body text, font sizes, line heights, letter spacings, color scheme 🎨 etc. (probably all properties that you can imagine and available in react-native apps)). Also, you can use bootstrap like grid (Row, Col with embedded flex configurations).

### How to install?

1. Run in terminal:
`npm install @qonsoll/react-native-design`
or
`yarn add @qonsoll/react-native-design`

2. Install additional packages:
`npm install --save @react-native-community/checkbox react-native-date-picker react-native-image-picker react-native-svg react-native-svg-transformer react-native-vector-icons`
or
`yarn add @react-native-community/checkbox react-native-date-picker react-native-image-picker react-native-svg react-native-svg-transformer react-native-vector-icons`

3. Install pods for iOS application: `cd ios && pod install && cd ..`

4. If you want to use default SVG icons, change your metro.config.js file:
```javascript
const {getDefaultConfig} = require('metro-config');
```
```javascript
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
```
```javascript
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
})();
```
5. Well done! ✅ Now you can setup ThemeProvider, configure Theme and use components.

### How to use?
1. Import ThemeProvider in your App.js file:
`import {ThemeProvider} from '@qonsoll/react-native-design'`

2. Wrap your app content:
```html
<ThemeProvider theme={{}}>
	<App />
</ThemeProvider>
```
3. Success! 👍 Now all lib elements should have access to the default theme.

### Theme (design-tokens)
Here is default theme state:
```javascript
const Theme = {
  CORE: {
    BORDER_RADIUSES: {},
    BORDER_WIDTHS: {},
    COLORS: {},
    FONT_FAMILIES: {},
    FONT_SIZES: {},
    FONT_WEIGHTS: {},
    LETTER_SPACINGS: {},
    LINE_HEIGHTS: {},
    SHADOWS: {},
    ICON_SIZES: {}
  },
  EXTENSIONS: {
    CORNERS: {}
  },
  components: {
    BUTTONS: {},
    SWITCHES: {},
    CARDS: {},
    ITEMS: {},
    BUTTON_ITEMS: {},
    ALERTS: {},
    AVATARS: {},
    BADGES: {},
    CHECKBOXES: {},
    COLLAPSES: {},
    TOGGLES: {},
    STATUSES: {}
  }
}
```