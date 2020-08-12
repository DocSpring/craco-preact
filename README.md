[![Build Status](https://travis-ci.org/FormAPI/craco-preact.svg?branch=master)](https://travis-ci.org/FormAPI/craco-preact)
[![Coverage Status](https://coveralls.io/repos/github/FormAPI/craco-preact/badge.svg?branch=master)](https://coveralls.io/github/FormAPI/craco-preact?branch=master)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# Craco Preact Plugin

This is a [craco](https://github.com/sharegate/craco) plugin that sets up [Preact](https://preactjs.com/) for [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

This plugin add the `preact/compat` alias so that `import React from 'react'` will be translated to `import React from 'preact/compat'`. (`preact/compat` is a drop-in replacement for React with the same API.)

> Use [react-app-rewired](https://github.com/timarney/react-app-rewired) for `create-react-app` version 1.

## Supported Versions

`craco-preact` is tested with:

- `preact`: `^10.4.7`
- `preact/compat`: `^10.4.7`
- `react-scripts`: `^4.42.0`
- `@craco/craco`: `^5.6.4`

## Installation

First, follow the [`craco` Installation Instructions](https://github.com/sharegate/craco/blob/master/packages/craco/README.md##installation) to install the `craco` package, create a `craco.config.js` file, and modify the scripts in your `package.json`.

## Usage

Here is a complete `craco.config.js` configuration file that adds `preact/compat` to the `create-react-app` webpack config:

```js
module.exports = {
  plugins: [{ plugin: require("craco-preact") }]
};
```

This plugin does not have any options.

> [View the "Switching to Preact" Documentation](https://preactjs.com/guide/switching-to-preact).

## Should I use the `preact/compat` alias?

If you are using a React component library such as [Ant Design](https://ant.design/), these React components should work out of the box with the `preact/compat` alias. However, Preact does not currently support some of the very latest features in React 16+, such as Hooks and Suspense. Here is the [Preact GitHub issue about adding the Hooks API](https://github.com/developit/preact/issues/1247). Here are some more Preact issues about supporting other features in React 16+:

- [#468 - Beyond (P)react 16](https://github.com/developit/preact-compat/issues/468)
- [#432 - Will Preact stay API compatible with React 16?](https://github.com/developit/preact-compat/issues/432)

> (We have subscribed to these issues, and will update this README if anything changes.)

If you are building a new Preact app from scratch and you don't need any React libraries, then **you don't need the `craco-preact` plugin**. Instead, you should follow the [Preact "Getting Started" documentation](https://preactjs.com/guide/getting-started).

You should still be able to use the `create-react-app` webpack config with a native Preact application. Just be aware that `npm install` will always install an unused copy of React, because this is a dependency of `react-scripts`. This is not an issue. React will not be included in your webpack build unless you explicitly require it with an `import` statement. (If you use the `craco-preact` plugin, then all `import 'react'` statements are translated to `import 'preact'`.)

## Further Configuration

If you need to configure anything else for the webpack build, take a look at the
[Configuration Overview section in the `craco` README](https://github.com/sharegate/craco/blob/master/packages/craco/README.md#configuration-overview). You can use `CracoPreactPlugin` while making other changes to `babel` and `webpack`, etc.

## Contributing

Install dependencies:

```bash
$ yarn install

# OR

$ npm install
```

Run tests:

```
$ yarn test
```

Before submitting a pull request, please check the following:

- All tests are passing
  - Run `yarn test`
- 100% test coverage
  - Coverage will be printed after running tests.
  - Check the coverage results in your browser: `open coverage/lcov-report/index.html`
- No ESLint errors
  - `yarn lint`
- All code is formatted with [Prettier](https://prettier.io/)
  - `yarn format`
  - If you use VS Code, you should enable the `formatOnSave` option.

## License

[MIT](./LICENSE)
