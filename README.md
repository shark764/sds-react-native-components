<div align="center">
  <a href="#">
  	<img src="https://media.giphy.com/media/GHeV8BGjJAAWk/giphy.gif" alt="React Native Components" height="160" />
  </a>
  <br>
  <br>
  <p>
    <b>@2600hz/sds-react-native-components</b>
  </p>
  <p>
     <i>Library that contains all sharable components for all react native applications development.</i>
  </p>
  <p>

[![NPM version](https://img.shields.io/npm/v/@2600hz/sds-react-native-components?style=flat-square)](https://img.shields.io/npm/v/@2600hz/sds-react-native-components?style=flat-square)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

  </p>
</div>

---

# 2600Hz - Commio
## _SDS React Native Components Library_

[NPM package](https://www.npmjs.com/package/@2600hz/sds-react-native-components)

## Installation

```sh
yarn add @2600hz/sds-react-native-components
```

# Needed packages
If you don't already have them on your app, yarn will install the following packages needed for usability. These packages are added as peerDependencies

- [@2600hz/commio-native-utilities](https://www.npmjs.com/package/@2600hz/commio-native-utilities) - Contains useful js functions and shareable configurations
- [@2600hz/sds-react-native-theme](https://www.npmjs.com/package/@2600hz/sds-react-native-theme) - Contains theme available for react native apps that use styled-components
- [Styled-Components](https://styled-components.com/) - Library to style react components
- [react-native-svg](https://www.npmjs.com/package/react-native-svg) - Provides SVG support to React Native on iOS and Android, and a compatibility layer for the web
- [tslib](https://www.npmjs.com/package/tslib) - Contains all of the TypeScript helper functions. Even if your project doesn't use Typescript, you need this package for native-components to function properly

# Packages considerations
If you already have those libraries on your app, then you need to make the following changes on configuration files for the package to function properly
```js
// metro.config.js
const modules = [
  '@2600hz/commio-native-utilities',
  '@2600hz/sds-react-native-theme',
  'react',
  'react-dom',
  'react-native',
  'react-native-svg',
  'styled-components',
  'tslib',
];
module.exports = (async () => {
  return {
    // ...
    resolver: {
      extraNodeModules: modules.reduce((acc, name) => {
        acc[name] = path.join(__dirname, 'node_modules', name);
        return acc;
      }, {}),
    },
    // ...
  };
})();
```

Now use that in `webpack` file
```js
// webpack.config.js
const metroConfig = require('./metro.config');
const node_modules = path.join(__dirname, 'node_modules');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  const { resolver } = await metroConfig;

  // We need to make sure that only one version is loaded for peerDependencies
  // So we alias them to the versions in example's node_modules
  Object.assign(config.resolve.alias, {
    ...resolver.extraNodeModules,
  });

  return config;
};
```

_**Styled-Components considerations**_
We use a theme built for styled-components. Styled components can be used from two sources
- The one installed automatically when installing @2600hz/sds-react-native-components
- The one installed manually by you on your app 

On the first case, components package will use the theme you set up on ThemeProvider, for your own components and the built-in components in the package.
If you install styled-components on your app, components package won't use the theme you setup automatically. therefore you need to ensure only one installing of styled-components is used, the app one.

We fix this by doing the changes in metro-config.js and webpack-config.js showed previously.

_**React Native Svg considerations**_
There should be only one version of react-native-svg installed, if you manually install it in your app, make sure you add it in the list of `extraNodeModules` so we make sure only one version is used. Otherwise it will throw an error on execution.

## Usage

It relies on styled-components, so it needs a theme set for the application.
Get the theme from [@2600hz/sds-react-native-theme](https://www.npmjs.com/package/@2600hz/sds-react-native-theme)
You can set the DefaultTheme as the one from `sds-react-native-theme`. Create a declaration file, name it for convention `styled.d.ts`
```js
import {} from 'styled-components';
import { DefaultThemeProps } from '@2600hz/sds-react-native-theme';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeProps {}
}
```

Now use it in your entry point component
```js
import { lightTheme } from '@2600hz/sds-react-native-theme';

<ThemeProvider theme={lightTheme}>
  {/* <App ... /> */}
  {children}
</ThemeProvider>
```
This theme will apply to your components and the ones coming from sds-react-native-components

Now in your components
```js
import { Button, Telicon } from "@2600hz/sds-react-native-components";

// ...

<Button onPress={handleCall} title="Call" color="#aaffcc" />
<View>
  <Telicon
    name="volume-x"
    size="xsmall"
    fill="green"
    fillSecondary="pink"
  />
</View>
```

# Svg Files
The package already have components to treat svg xml/files. These are
- **SvgFromXml** - Renders an icon, it accepts a svg xml string or file (Internally calls the following two)
- **SvgFromXmlString** - Renders an icon, it accepts a svg xml string
- **SvgFromXmlFile** - Renders an icon, it accepts a svg xml file

Examples
```js
const xml = `<svg viewBox="0 0 512 512"> <path d="M472.916..." /></svg>`;
<SvgFromXml xml={xml} size="small" fill="green" />
<SvgFromXmlString xml={xml} size="medium" fill="blue" />

// ...
import UserIcon from './app/assets/user.svg';
<SvgFromXml xml={UserIcon} size="xsmall" fill="yellow" />
<SvgFromXmlFile Xml={UserIcon} size="xlarge" fill="magenta" />
```

If you want to handle svg files on your own or need a different icon not included in telicon, then create a `declarations.d.ts` (If you already have one, then name it differently)
Add this content to file
```js
declare module '*.svg' {
  import { SvgXmlFileType } from '@2600hz/sds-react-native-components';
  const content: SvgXmlFileType;
  export default content;
}
```
Then you can import svg files this way
```js
import UserIcon from './app/assets/user.svg';
<UserIcon width={100} height={100} fill="red" />
```
Use svgrrc configuration provided by @2600hz/commio-native-utilities to handle how svgs are converted
```js
const { svgrrcBaseConfig } = require('@2600hz/commio-native-utilities');
module.exports = {
  ...svgrrcBaseConfig,
  native: true,
};
```
We use [svgo](https://github.com/svg/svgo) to configure how svg xml should be transformed to JSX. Look for the available plugins, so you can decide what attributes should be moved.
For instance, we want all colors to be converted to strings if possible (Ex. #f00 to red)
```js
const { svgrrcBaseConfig } = require('@2600hz/commio-native-utilities');
module.exports = {
  ...svgrrcBaseConfig,
  native: true,
  svgoConfig: {
    plugins: [
      { convertColors: true },
      ...
    ]
  }
};
```

## Development

This project requires [Node.js](https://nodejs.org/) v14+ to run.

Using *.nvmrc* file helps to normalize node version used by all maintainers.
If you are required to use version specified in this file, run these commands.

```bash
nvm use
nvm install
```

Use the package manager [yarn](https://yarnpkg.com/getting-started/install) v1+ to install dependencies and devDependencies.

```bash
yarn install
yarn
```

**Create symlink**
Run the following command on package root folder, so you can consume on an app locally

```bash
yarn link
```

**Watch project**
Build package whenever there is a change
```bash
yarn watch
```

**Consume the package**
`Both projects must be placed on same folder, otherwise won't work`
```bash
yarn link @2600hz/sds-react-native-components
```

**Considerations with packages installed**
- Add package as alias in `babel.config.js`
```js
// babel.config.js
const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    // ...
    plugins: [
      // ...
      [
        'module-resolver',
        {
          alias: {
            // ...

            // For development, we want to alias the library to the source
            // Remember we have the package folder right next to the app
            '@2600hz/sds-react-native-components': path.join(__dirname, '..', 'sds-react-native-components', 'src/index'),
          },
        },
      ],
    ],
  };
};
```

- Blacklist peerDependencies to ensure only one version of packages is used (The one from App)
```js
// metro.config.js
const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const escape = require('escape-string-regexp');

// Assuming your package folder is named "sds-react-native-components" and it's located right next to the app folder
const root = path.resolve(__dirname, '..', 'sds-react-native-components');

const modules = [
  '@2600hz/commio-native-utilities',
  '@2600hz/sds-react-native-theme',
  'react',
  'react-dom',
  'react-native',
  'react-native-svg',
  'styled-components',
  'tslib',
];

module.exports = (async () => {
  return {
    projectRoot: __dirname,
    watchFolders: [root],

    resolver: {
      // We need to make sure that only one version is loaded for peerDependencies
      // So we blacklist them at the root, and alias them to the versions in example's node_modules
      blacklistRE: blacklist(
        modules.map(
          (m) =>
            new RegExp(`^${escape(path.join(root, 'node_modules', m))}\\/.*$`)
        )
      ),

      extraNodeModules: modules.reduce((acc, name) => {
        acc[name] = path.join(__dirname, 'node_modules', name);
        return acc;
      }, {}),
    },
  };
})();
```

_**@2600hz/sds-telicon**_
This package contains the xml definition of telicon svg, we provide `SvgTelicon` and `Telicon` components for apps to easily render icons on screen. Everytime sds-telicon gets updated, we need to bump its version on our components package, automatically will update Telicon components with new telicon.svg changes.
If you want to manually convert telicon.svg to component run
```bash
yarn svg:jsx
```

**Build the package**
_Automatically will run `bob build`_
```bash
yarn build
```

**Run project**
```bash
yarn start
```

Run android
```bash
yarn android
```

Run ios
```bash
cd ios & pod install
yarn ios
```

## Utilities

Format code using [Eslint](https://eslint.org/)

```bash
yarn run lint:fix
```

Format code using [Prettier](https://prettier.io/)
```bash
yarn run format
```

Format code using [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/)
```bash
yarn run prettify
```

Check [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) on files
```bash
yarn run typescript
```

Run full check
```bash
yarn run full-check
```

## Tech
Components library uses a number of open source projects to work properly:

- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces.
- [React Native](https://reactnative.dev/) - JavaScript library for creating native apps for Android and IOS using React.
- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) - Strongly typed programming language which builds on JavaScript
- [NodeJs](https://nodejs.org/es/) - Allows execute javascript scripts on the terminal
- [Storybook](https://storybook.js.org/) - Development environment for UI components
- [Luxon](https://moment.github.io/luxon/) - library for dealing with dates and times in JavaScript (better alternative than Moment.js)
- [Styled-Components](https://styled-components.com/) - Library to style react components
- [react-native-svg](https://www.npmjs.com/package/react-native-svg) - Provides SVG support to React Native on iOS and Android, and a compatibility layer for the web
- [create-react-native-library](https://www.npmjs.com/package/create-react-native-library) - CLI to scaffold React Native libraries
- [@2600hz/sds-react-native-theme](https://www.npmjs.com/package/@2600hz/sds-react-native-theme) - React Native Theme for Styled-components
- [@2600hz/commio-native-utilities](https://www.npmjs.com/package/@2600hz/commio-native-utilities) - Library written in js for shareable config files and common functions

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

**Commits**
Commits must follow [conventional commit format](https://conventionalcommits.org/)
Make sure your messages look like the following examples
```
feat: Adding new badge component
fix: Touchable component not being exported correctly
fix!: Drop support for Typescript
```
_Note that the last one will generate a Major commit. It has the same result as adding a breaking change footer_

Follow [Semantic Versioning 2.0.0](https://semver.org/) to update project version.

[Release-It](https://github.com/release-it/release-it) will take care of versioning, you just have to give the correct type to commit:

- **fix** - to indicate a bug fix (PATCH) ex . v0.0.1
- **feat** - to indicate a new feature (MINOR) ex. v0.1.0
- **chore** - for updates that do not require a version bump (.gitignore, comments, etc.)
- **docs** - for updates to the documentation
- **BREAKING CHANGE** - regardless of type, indicates a Major release (MAJOR) ex. v1.0.0

Visit [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more examples.

**Make a release**
Run following command after your last commit/amend. Then answer with Y/N the prompt
```bash
yarn release
```

## License

MIT
