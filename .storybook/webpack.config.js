const path = require('path');

function resolveTsconfigPathsToAlias({
  tsconfigPath = './tsconfig.json',
  webpackConfigBasePath = __dirname,
} = {}) {
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '');
    const value = resolve(webpackConfigBasePath, paths[item][0].replace('/*', '').replace('*', ''));

    aliases[key] = value;
  });

  return aliases;
}

module.exports = ({ config }) => {
  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules'];

  config.resolve.alias = {
    '@ui': path.resolve(__dirname, '..', 'src', 'ui'),
    '@utils': path.resolve(__dirname, '..', 'src', 'utils'),
    '@domain': path.resolve(__dirname, '..', 'src', 'domain'),
    '@application': path.resolve(__dirname, '..', 'src', 'application'),
    '@infrastructure': path.resolve(__dirname, '..', 'src', 'infrastructure'),
  };

  return config;
};
