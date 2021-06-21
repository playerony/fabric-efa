const { override, fixBabelImports } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  alias(configPaths('./tsconfig.paths.json')),
);
