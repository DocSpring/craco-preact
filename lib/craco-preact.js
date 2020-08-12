module.exports = {
  overrideCracoConfig: ({ cracoConfig }) => {
    if (!cracoConfig.webpack) cracoConfig.webpack = {};
    if (!cracoConfig.webpack.alias) cracoConfig.webpack.alias = {};
    const webpackAliases = cracoConfig.webpack.alias;

    webpackAliases["react"] = "preact/compat";
    webpackAliases["react-dom"] = "preact/compat";

    return cracoConfig;
  }
};
