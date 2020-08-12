const CracoPreactPlugin = require("./craco-preact");
const { overrideWebpack } = require("@craco/craco/lib/features/webpack");
const {
  applyCracoConfigPlugins
} = require("@craco/craco/lib/features/plugins");

const clone = require("clone");

const { craPaths, loadWebpackDevConfig } = require("@craco/craco/lib/cra");

const context = { env: "development", paths: craPaths };

let webpackConfig;
let originalWebpackConfig;
beforeEach(() => {
  if (!originalWebpackConfig) {
    process.env.NODE_ENV = "development";
    originalWebpackConfig = loadWebpackDevConfig();
    process.env.NODE_ENV = "test";
  }
  webpackConfig = clone(originalWebpackConfig);
});

const applyCracoConfigAndOverrideWebpack = cracoConfig => {
  cracoConfig = applyCracoConfigPlugins(cracoConfig, context);
  overrideWebpack(cracoConfig, webpackConfig, () => {}, context);
};

test("the webpack config is modified correctly", () => {
  applyCracoConfigAndOverrideWebpack({
    plugins: [{ plugin: CracoPreactPlugin }]
  });
  expect(webpackConfig.resolve.alias).toEqual({
    react: "preact/compat",
    "react-dom": "preact/compat",
    "react-native": "react-native-web"
  });
});

test("existing aliases are preserved, and existing react aliases are overidden", () => {
  applyCracoConfigAndOverrideWebpack({
    webpack: {
      alias: { foo: "bar", react: "should-be-overridden" }
    },
    plugins: [{ plugin: CracoPreactPlugin }]
  });
  expect(webpackConfig.resolve.alias).toEqual({
    foo: "bar",
    react: "preact/compat",
    "react-dom": "preact/compat",
    "react-native": "react-native-web"
  });
});
