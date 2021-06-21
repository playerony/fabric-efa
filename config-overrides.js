const { override, fixBabelImports } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = override(
  fixBabelImports('import', {
    style: 'css',
    libraryName: 'antd',
    libraryDirectory: 'es',
  }),
  alias(configPaths('./tsconfig.paths.json')),
);
