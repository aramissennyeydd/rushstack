export default `
lockfileVersion: 5.4

packageExtensionsChecksum: 4cee63805d63bd8991d4c7a30da2ca02

importers:
  .:
    specifiers: {}

  ../../apps/api-documenter:
    specifiers:
      '@microsoft/api-extractor-model': workspace:*
      '@microsoft/tsdoc': 0.14.1
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/ts-command-line': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/js-yaml': 3.12.1
      '@types/node': 12.20.24
      '@types/resolve': 1.17.1
      colors: ~1.2.1
      js-yaml: ~3.13.1
      resolve: ~1.17.0
    dependencies:
      '@microsoft/api-extractor-model': link:../../libraries/api-extractor-model
      '@microsoft/tsdoc': 0.14.1
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/ts-command-line': link:../../libraries/ts-command-line
      colors: 1.2.5
      js-yaml: 3.13.1
      resolve: 1.17.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/js-yaml': 3.12.1
      '@types/node': 12.20.24
      '@types/resolve': 1.17.1

  ../../apps/api-extractor:
    specifiers:
      '@microsoft/api-extractor-model': workspace:*
      '@microsoft/tsdoc': 0.14.1
      '@microsoft/tsdoc-config': ~0.16.1
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@rushstack/node-core-library': workspace:*
      '@rushstack/rig-package': workspace:*
      '@rushstack/ts-command-line': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/lodash': 4.14.116
      '@types/node': 12.20.24
      '@types/resolve': 1.17.1
      '@types/semver': 7.3.5
      colors: ~1.2.1
      lodash: ~4.17.15
      resolve: ~1.17.0
      semver: ~7.3.0
      source-map: ~0.6.1
      typescript: ~4.8.4
    dependencies:
      '@microsoft/api-extractor-model': link:../../libraries/api-extractor-model
      '@microsoft/tsdoc': 0.14.1
      '@microsoft/tsdoc-config': 0.16.1
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/rig-package': link:../../libraries/rig-package
      '@rushstack/ts-command-line': link:../../libraries/ts-command-line
      colors: 1.2.5
      lodash: 4.17.21
      resolve: 1.17.0
      semver: 7.3.7
      source-map: 0.6.1
      typescript: 4.8.4
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/heft-jest': 1.0.1
      '@types/lodash': 4.14.116
      '@types/node': 12.20.24
      '@types/resolve': 1.17.1
      '@types/semver': 7.3.5

  ../../apps/heft:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-config-file': workspace:*
      '@rushstack/heft-node-rig': 1.11.0
      '@rushstack/node-core-library': workspace:*
      '@rushstack/rig-package': workspace:*
      '@rushstack/ts-command-line': workspace:*
      '@types/argparse': 1.0.38
      '@types/eslint': 8.2.0
      '@types/glob': 7.1.1
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/semver': 7.3.5
      '@types/tapable': 1.0.6
      argparse: ~1.0.9
      chokidar: ~3.4.0
      colors: ~1.2.1
      fast-glob: ~3.2.4
      glob: ~7.0.5
      glob-escape: ~0.0.2
      prettier: ~2.3.0
      semver: ~7.3.0
      tapable: 1.1.3
      true-case-path: ~2.2.1
      tslint: ~5.20.1
      typescript: ~4.8.4
    dependencies:
      '@rushstack/heft-config-file': link:../../libraries/heft-config-file
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/rig-package': link:../../libraries/rig-package
      '@rushstack/ts-command-line': link:../../libraries/ts-command-line
      '@types/tapable': 1.0.6
      argparse: 1.0.10
      chokidar: 3.4.3
      fast-glob: 3.2.11
      glob: 7.0.6
      glob-escape: 0.0.2
      prettier: 2.3.2
      semver: 7.3.7
      tapable: 1.1.3
      true-case-path: 2.2.1
    devDependencies:
      '@microsoft/api-extractor': link:../api-extractor
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/argparse': 1.0.38
      '@types/eslint': 8.2.0
      '@types/glob': 7.1.1
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/semver': 7.3.5
      colors: 1.2.5
      tslint: 5.20.1_typescript@4.8.4
      typescript: 4.8.4

  ../../apps/lockfile-explorer:
    specifiers:
      '@fluentui/react': ^8.96.1
      '@lifaon/path': ~2.1.0
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-web-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      axios: ~0.27.2
      react: ~16.13.1
      react-dom: ~16.13.1
      react-is: ~18.2.0
      tslib: ~2.3.1
      typescript: ~4.8.4
    dependencies:
      '@fluentui/react': 8.96.1_tlqvpdqnq63ssdllbmshthdmo4
      '@lifaon/path': 2.1.0
      axios: 0.27.2
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-is: 18.2.0
      tslib: 2.3.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../heft
      '@rushstack/heft-web-rig': link:../../rigs/heft-web-rig
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      typescript: 4.8.4

  ../../apps/lockfile-explorer-server:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      cors: ~2.8.5
      express: 4.18.1
      js-yaml: ~3.13.1
      nodemon: ~2.0.20
      ts-node: ~10.9.1
      ts-node-dev: ~2.0.0
      typescript: ~4.8.4
    dependencies:
      cors: 2.8.5
      express: 4.18.1
      js-yaml: 3.13.1
      ts-node: 10.9.1_fdywls4oqk5utzi4err7lt7tke
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      nodemon: 2.0.20
      ts-node-dev: 2.0.0_fdywls4oqk5utzi4err7lt7tke
      typescript: 4.8.4

  ../../apps/rundown:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/ts-command-line': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      string-argv: ~0.3.1
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/ts-command-line': link:../../libraries/ts-command-line
      string-argv: 0.3.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../apps/rush:
    specifiers:
      '@microsoft/rush-lib': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/rush-amazon-s3-build-cache-plugin': workspace:*
      '@rushstack/rush-azure-storage-build-cache-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/semver': 7.3.5
      colors: ~1.2.1
      semver: ~7.3.0
    dependencies:
      '@microsoft/rush-lib': link:../../libraries/rush-lib
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      colors: 1.2.5
      semver: 7.3.7
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@rushstack/rush-amazon-s3-build-cache-plugin': link:../../rush-plugins/rush-amazon-s3-build-cache-plugin
      '@rushstack/rush-azure-storage-build-cache-plugin': link:../../rush-plugins/rush-azure-storage-build-cache-plugin
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/semver': 7.3.5

  ../../build-tests-samples/heft-node-basic-tutorial:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: ~8.7.0
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: 8.7.0
      typescript: 4.8.4

  ../../build-tests-samples/heft-node-jest-tutorial:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: ~8.7.0
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: 8.7.0
      typescript: 4.8.4

  ../../build-tests-samples/heft-node-rig-tutorial:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../build-tests-samples/heft-serverless-stack-tutorial:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@rushstack/heft-serverless-stack-plugin': workspace:*
      '@serverless-stack/aws-lambda-ric': ^2.0.12
      '@serverless-stack/cli': 0.67.0
      '@serverless-stack/resources': 0.67.0
      '@types/aws-lambda': 8.10.93
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      aws-cdk-lib: 2.7.0
      constructs: ~10.0.98
      eslint: ~8.7.0
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@rushstack/heft-serverless-stack-plugin': link:../../heft-plugins/heft-serverless-stack-plugin
      '@serverless-stack/aws-lambda-ric': 2.0.13
      '@serverless-stack/cli': 0.67.0_constructs@10.0.130
      '@serverless-stack/resources': 0.67.0
      '@types/aws-lambda': 8.10.93
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      aws-cdk-lib: 2.7.0_constructs@10.0.130
      constructs: 10.0.130
      eslint: 8.7.0
      typescript: 4.8.4

  ../../build-tests-samples/heft-storybook-react-tutorial:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@rushstack/heft-storybook-plugin': workspace:*
      '@rushstack/heft-webpack4-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      css-loader: ~5.2.7
      eslint: ~8.7.0
      heft-storybook-react-tutorial-storykit: workspace:*
      html-webpack-plugin: ~4.5.2
      react: ~16.13.1
      react-dom: ~16.13.1
      source-map-loader: ~1.1.3
      style-loader: ~2.0.0
      tslib: ~2.3.1
      typescript: ~4.8.4
      webpack: ~4.44.2
    dependencies:
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      tslib: 2.3.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@rushstack/heft-storybook-plugin': link:../../heft-plugins/heft-storybook-plugin
      '@rushstack/heft-webpack4-plugin': link:../../heft-plugins/heft-webpack4-plugin
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      css-loader: 5.2.7_webpack@4.44.2
      eslint: 8.7.0
      heft-storybook-react-tutorial-storykit: link:../heft-storybook-react-tutorial-storykit
      html-webpack-plugin: 4.5.2_webpack@4.44.2
      source-map-loader: 1.1.3_webpack@4.44.2
      style-loader: 2.0.0_webpack@4.44.2
      typescript: 4.8.4
      webpack: 4.44.2

  ../../build-tests-samples/heft-storybook-react-tutorial-storykit:
    specifiers:
      '@babel/core': ~7.17.0
      '@storybook/addon-actions': ~6.4.18
      '@storybook/addon-essentials': ~6.4.18
      '@storybook/addon-links': ~6.4.18
      '@storybook/cli': ~6.4.18
      '@storybook/components': ~6.4.18
      '@storybook/core-events': ~6.4.18
      '@storybook/react': ~6.4.18
      '@storybook/theming': ~6.4.18
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      babel-loader: ~8.2.3
      css-loader: ~5.2.7
      jest: ~27.4.2
      react: ~16.13.1
      react-dom: ~16.13.1
      style-loader: ~2.0.0
      terser-webpack-plugin: ~3.0.8
      typescript: ~4.8.4
      webpack: ~4.44.2
    devDependencies:
      '@babel/core': 7.17.12
      '@storybook/addon-actions': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/addon-essentials': 6.4.22_q2qw673im4ojqxzlijezcm3cd4
      '@storybook/addon-links': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/cli': 6.4.22_qrag5zyjgmrwa7rjqjc5fiwide
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core-events': 6.4.22
      '@storybook/react': 6.4.22_6pxnn2xtr5yph4wackblrq76km
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      babel-loader: 8.2.5_4bf35c6ryl6gwyrcrj2ykng7ny
      css-loader: 5.2.7_webpack@4.44.2
      jest: 27.4.7_@types+node@12.20.24
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      style-loader: 2.0.0_webpack@4.44.2
      terser-webpack-plugin: 3.0.8_webpack@4.44.2
      typescript: 4.8.4
      webpack: 4.44.2

  ../../build-tests-samples/heft-web-rig-app-tutorial:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-web-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      heft-web-rig-library-tutorial: workspace:*
      react: ~16.13.1
      react-dom: ~16.13.1
      tslib: ~2.3.1
      typescript: ~4.8.4
    dependencies:
      heft-web-rig-library-tutorial: link:../heft-web-rig-library-tutorial
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      tslib: 2.3.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-web-rig': link:../../rigs/heft-web-rig
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      typescript: 4.8.4

  ../../build-tests-samples/heft-web-rig-library-tutorial:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-web-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      react: ~16.13.1
      react-dom: ~16.13.1
      tslib: ~2.3.1
      typescript: ~4.8.4
    dependencies:
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      tslib: 2.3.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-web-rig': link:../../rigs/heft-web-rig
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      typescript: 4.8.4

  ../../build-tests-samples/heft-webpack-basic-tutorial:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@rushstack/heft-webpack5-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      css-loader: ~6.6.0
      eslint: ~8.7.0
      html-webpack-plugin: ~5.5.0
      react: ~16.13.1
      react-dom: ~16.13.1
      source-map-loader: ~3.0.1
      style-loader: ~3.3.1
      tslib: ~2.3.1
      typescript: ~4.8.4
      webpack: ~5.68.0
    dependencies:
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      tslib: 2.3.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@rushstack/heft-webpack5-plugin': link:../../heft-plugins/heft-webpack5-plugin
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      css-loader: 6.6.0_webpack@5.68.0
      eslint: 8.7.0
      html-webpack-plugin: 5.5.0_webpack@5.68.0
      source-map-loader: 3.0.1_webpack@5.68.0
      style-loader: 3.3.1_webpack@5.68.0
      typescript: 4.8.4
      webpack: 5.68.0

  ../../build-tests-samples/packlets-tutorial:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@types/node': 12.20.24
      eslint: ~8.7.0
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@types/node': 12.20.24
      eslint: 8.7.0
      typescript: 4.8.4

  ../../build-tests/api-documenter-scenarios:
    specifiers:
      '@microsoft/api-documenter': workspace:*
      '@microsoft/api-extractor': workspace:*
      '@microsoft/teams-js': 1.3.0-beta.4
      '@rushstack/node-core-library': workspace:*
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      fs-extra: ~7.0.1
      typescript: ~4.8.4
    devDependencies:
      '@microsoft/api-documenter': link:../../apps/api-documenter
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@microsoft/teams-js': 1.3.0-beta.4
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      fs-extra: 7.0.1
      typescript: 4.8.4

  ../../build-tests/api-documenter-test:
    specifiers:
      '@microsoft/api-documenter': workspace:*
      '@microsoft/api-extractor': workspace:*
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      fs-extra: ~7.0.1
      typescript: ~4.8.4
    devDependencies:
      '@microsoft/api-documenter': link:../../apps/api-documenter
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      fs-extra: 7.0.1
      typescript: 4.8.4

  ../../build-tests/api-extractor-lib1-test:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      fs-extra: ~7.0.1
      typescript: ~2.9.2
    devDependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      fs-extra: 7.0.1
      typescript: 2.9.2

  ../../build-tests/api-extractor-lib2-test:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      fs-extra: ~7.0.1
      typescript: ~4.8.4
    devDependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      fs-extra: 7.0.1
      typescript: 4.8.4

  ../../build-tests/api-extractor-lib3-test:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      api-extractor-lib1-test: workspace:*
      fs-extra: ~7.0.1
      typescript: ~4.8.4
    dependencies:
      api-extractor-lib1-test: link:../api-extractor-lib1-test
    devDependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      fs-extra: 7.0.1
      typescript: 4.8.4

  ../../build-tests/api-extractor-scenarios:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@microsoft/teams-js': 1.3.0-beta.4
      '@rushstack/node-core-library': workspace:*
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      api-extractor-lib1-test: workspace:*
      api-extractor-lib2-test: workspace:*
      api-extractor-lib3-test: workspace:*
      colors: ~1.2.1
      fs-extra: ~7.0.1
      typescript: ~4.8.4
    devDependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@microsoft/teams-js': 1.3.0-beta.4
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      api-extractor-lib1-test: link:../api-extractor-lib1-test
      api-extractor-lib2-test: link:../api-extractor-lib2-test
      api-extractor-lib3-test: link:../api-extractor-lib3-test
      colors: 1.2.5
      fs-extra: 7.0.1
      typescript: 4.8.4

  ../../build-tests/api-extractor-test-01:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/jest': 27.4.0
      '@types/long': 4.0.0
      '@types/node': 12.20.24
      fs-extra: ~7.0.1
      long: ^4.0.0
      typescript: ~4.8.4
    dependencies:
      '@types/jest': 27.4.0
      '@types/long': 4.0.0
      long: 4.0.0
    devDependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      fs-extra: 7.0.1
      typescript: 4.8.4

  ../../build-tests/api-extractor-test-02:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@types/node': 12.20.24
      '@types/semver': 7.3.5
      api-extractor-test-01: workspace:*
      fs-extra: ~7.0.1
      semver: ~7.3.0
      typescript: ~4.8.4
    dependencies:
      '@types/semver': 7.3.5
      api-extractor-test-01: link:../api-extractor-test-01
      semver: 7.3.7
    devDependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@types/node': 12.20.24
      fs-extra: 7.0.1
      typescript: 4.8.4

  ../../build-tests/api-extractor-test-03:
    specifiers:
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      api-extractor-test-02: workspace:*
      fs-extra: ~7.0.1
      typescript: ~4.8.4
    devDependencies:
      '@types/jest': 27.4.0
      '@types/node': 12.20.24
      api-extractor-test-02: link:../api-extractor-test-02
      fs-extra: 7.0.1
      typescript: 4.8.4

  ../../build-tests/api-extractor-test-04:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      api-extractor-lib1-test: workspace:*
      fs-extra: ~7.0.1
      typescript: ~4.8.4
    dependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      api-extractor-lib1-test: link:../api-extractor-lib1-test
      fs-extra: 7.0.1
      typescript: 4.8.4

  ../../build-tests/eslint-7-test:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@types/node': 12.20.24
      '@typescript-eslint/parser': ~5.38.0
      eslint: ~7.30.0
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@types/node': 12.20.24
      '@typescript-eslint/parser': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      eslint: 7.30.0
      typescript: 4.8.4

  ../../build-tests/hashed-folder-copy-plugin-webpack4-test:
    specifiers:
      '@rushstack/hashed-folder-copy-plugin': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-webpack4-plugin': workspace:*
      '@rushstack/set-webpack-public-path-plugin': workspace:*
      '@rushstack/webpack4-module-minifier-plugin': workspace:*
      '@types/webpack-env': 1.13.0
      html-webpack-plugin: ~4.5.2
      typescript: ~4.8.4
      webpack: ~4.44.2
      webpack-bundle-analyzer: ~4.5.0
    devDependencies:
      '@rushstack/hashed-folder-copy-plugin': link:../../webpack/hashed-folder-copy-plugin
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-webpack4-plugin': link:../../heft-plugins/heft-webpack4-plugin
      '@rushstack/set-webpack-public-path-plugin': link:../../webpack/set-webpack-public-path-plugin
      '@rushstack/webpack4-module-minifier-plugin': link:../../webpack/webpack4-module-minifier-plugin
      '@types/webpack-env': 1.13.0
      html-webpack-plugin: 4.5.2_webpack@4.44.2
      typescript: 4.8.4
      webpack: 4.44.2
      webpack-bundle-analyzer: 4.5.0

  ../../build-tests/hashed-folder-copy-plugin-webpack5-test:
    specifiers:
      '@rushstack/hashed-folder-copy-plugin': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-webpack5-plugin': workspace:*
      '@types/webpack-env': 1.13.0
      html-webpack-plugin: ~4.5.2
      typescript: ~4.8.4
      webpack: ~5.68.0
      webpack-bundle-analyzer: ~4.5.0
    devDependencies:
      '@rushstack/hashed-folder-copy-plugin': link:../../webpack/hashed-folder-copy-plugin
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-webpack5-plugin': link:../../heft-plugins/heft-webpack5-plugin
      '@types/webpack-env': 1.13.0
      html-webpack-plugin: 4.5.2_webpack@5.68.0
      typescript: 4.8.4
      webpack: 5.68.0
      webpack-bundle-analyzer: 4.5.0

  ../../build-tests/heft-action-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/node': 12.20.24
      eslint: ~8.7.0
      typescript: ~4.8.4
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@types/node': 12.20.24
      eslint: 8.7.0
      typescript: 4.8.4

  ../../build-tests/heft-action-plugin-test:
    specifiers:
      '@rushstack/heft': workspace:*
      heft-action-plugin: workspace:*
    devDependencies:
      '@rushstack/heft': link:../../apps/heft
      heft-action-plugin: link:../heft-action-plugin

  ../../build-tests/heft-copy-files-test:
    specifiers:
      '@rushstack/heft': workspace:*
    devDependencies:
      '@rushstack/heft': link:../../apps/heft

  ../../build-tests/heft-example-plugin-01:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      eslint: ~8.7.0
      tapable: 1.1.3
      typescript: ~4.8.4
    dependencies:
      tapable: 1.1.3
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      eslint: 8.7.0
      typescript: 4.8.4

  ../../build-tests/heft-example-plugin-02:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@types/node': 12.20.24
      eslint: ~8.7.0
      heft-example-plugin-01: workspace:*
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@types/node': 12.20.24
      eslint: 8.7.0
      heft-example-plugin-01: link:../heft-example-plugin-01
      typescript: 4.8.4

  ../../build-tests/heft-fastify-test:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: ~8.7.0
      fastify: ~3.16.1
      typescript: ~4.8.4
    dependencies:
      fastify: 3.16.2
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: 8.7.0
      typescript: 4.8.4

  ../../build-tests/heft-jest-reporters-test:
    specifiers:
      '@jest/reporters': ~27.4.2
      '@jest/types': ~27.4.2
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      eslint: ~8.7.0
      typescript: ~4.8.4
    devDependencies:
      '@jest/reporters': 27.4.6
      '@jest/types': 27.4.2
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@types/heft-jest': 1.0.1
      eslint: 8.7.0
      typescript: 4.8.4

  ../../build-tests/heft-minimal-rig-test:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      typescript: ~4.8.4
    dependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      typescript: 4.8.4

  ../../build-tests/heft-minimal-rig-usage-test:
    specifiers:
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      heft-minimal-rig-test: workspace:*
    devDependencies:
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      heft-minimal-rig-test: link:../heft-minimal-rig-test

  ../../build-tests/heft-node-everything-esm-module-test:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: ~8.7.0
      heft-example-plugin-01: workspace:*
      heft-example-plugin-02: workspace:*
      tslint: ~5.20.1
      tslint-microsoft-contrib: ~6.2.0
      typescript: ~4.8.4
    devDependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: 8.7.0
      heft-example-plugin-01: link:../heft-example-plugin-01
      heft-example-plugin-02: link:../heft-example-plugin-02
      tslint: 5.20.1_typescript@4.8.4
      tslint-microsoft-contrib: 6.2.0_is64cncltak2c2767drphpzcku
      typescript: 4.8.4

  ../../build-tests/heft-node-everything-test:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: ~8.7.0
      heft-example-plugin-01: workspace:*
      heft-example-plugin-02: workspace:*
      tslint: ~5.20.1
      tslint-microsoft-contrib: ~6.2.0
      typescript: ~4.8.4
    devDependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: 8.7.0
      heft-example-plugin-01: link:../heft-example-plugin-01
      heft-example-plugin-02: link:../heft-example-plugin-02
      tslint: 5.20.1_typescript@4.8.4
      tslint-microsoft-contrib: 6.2.0_is64cncltak2c2767drphpzcku
      typescript: 4.8.4

  ../../build-tests/heft-parameter-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/node': 12.20.24
      eslint: ~8.7.0
      typescript: ~4.8.4
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@types/node': 12.20.24
      eslint: 8.7.0
      typescript: 4.8.4

  ../../build-tests/heft-parameter-plugin-test:
    specifiers:
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/heft-jest': 1.0.1
      heft-parameter-plugin: workspace:*
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@types/heft-jest': 1.0.1
      heft-parameter-plugin: link:../heft-parameter-plugin
      typescript: 4.8.4

  ../../build-tests/heft-sass-test:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@rushstack/heft-sass-plugin': workspace:*
      '@rushstack/heft-webpack4-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      autoprefixer: ~10.4.2
      buttono: ~1.0.2
      css-loader: ~5.2.7
      eslint: ~8.7.0
      html-webpack-plugin: ~4.5.2
      postcss: ~8.4.6
      postcss-loader: ~4.1.0
      react: ~16.13.1
      react-dom: ~16.13.1
      sass: ~1.3.0
      sass-loader: ~10.0.0
      style-loader: ~2.0.0
      typescript: ~4.8.4
      webpack: ~4.44.2
    dependencies:
      buttono: 1.0.4
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@rushstack/heft-sass-plugin': link:../../heft-plugins/heft-sass-plugin
      '@rushstack/heft-webpack4-plugin': link:../../heft-plugins/heft-webpack4-plugin
      '@types/heft-jest': 1.0.1
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      '@types/webpack-env': 1.13.0
      autoprefixer: 10.4.7_postcss@8.4.14
      css-loader: 5.2.7_webpack@4.44.2
      eslint: 8.7.0
      html-webpack-plugin: 4.5.2_webpack@4.44.2
      postcss: 8.4.14
      postcss-loader: 4.1.0_5acfmy7ci7uo46t3nkxjtzzdua
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      sass: 1.3.2
      sass-loader: 10.0.5_sass@1.3.2+webpack@4.44.2
      style-loader: 2.0.0_webpack@4.44.2
      typescript: 4.8.4
      webpack: 4.44.2

  ../../build-tests/heft-typescript-composite-test:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/jest': 27.4.0
      '@types/webpack-env': 1.13.0
      eslint: ~8.7.0
      tslint: ~5.20.1
      tslint-microsoft-contrib: ~6.2.0
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@types/heft-jest': 1.0.1
      '@types/jest': 27.4.0
      '@types/webpack-env': 1.13.0
      eslint: 8.7.0
      tslint: 5.20.1_typescript@4.8.4
      tslint-microsoft-contrib: 6.2.0_is64cncltak2c2767drphpzcku
      typescript: 4.8.4

  ../../build-tests/heft-web-rig-library-test:
    specifiers:
      '@rushstack/heft': workspace:*
      '@rushstack/heft-web-rig': workspace:*
      '@types/heft-jest': 1.0.1
    devDependencies:
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-web-rig': link:../../rigs/heft-web-rig
      '@types/heft-jest': 1.0.1

  ../../build-tests/heft-webpack4-everything-test:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-dev-cert-plugin': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@rushstack/heft-webpack4-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/webpack-env': 1.13.0
      eslint: ~8.7.0
      file-loader: ~6.0.0
      tslint: ~5.20.1
      tslint-microsoft-contrib: ~6.2.0
      typescript: ~4.8.4
      webpack: ~4.44.2
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-dev-cert-plugin': link:../../heft-plugins/heft-dev-cert-plugin
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@rushstack/heft-webpack4-plugin': link:../../heft-plugins/heft-webpack4-plugin
      '@types/heft-jest': 1.0.1
      '@types/webpack-env': 1.13.0
      eslint: 8.7.0
      file-loader: 6.0.0_webpack@4.44.2
      tslint: 5.20.1_typescript@4.8.4
      tslint-microsoft-contrib: 6.2.0_is64cncltak2c2767drphpzcku
      typescript: 4.8.4
      webpack: 4.44.2

  ../../build-tests/heft-webpack5-everything-test:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-dev-cert-plugin': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@rushstack/heft-webpack5-plugin': workspace:*
      '@rushstack/module-minifier': workspace:*
      '@rushstack/webpack5-module-minifier-plugin': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/webpack-env': 1.13.0
      eslint: ~8.7.0
      html-webpack-plugin: ~5.5.0
      tslint: ~5.20.1
      tslint-microsoft-contrib: ~6.2.0
      typescript: ~4.8.4
      webpack: ~5.68.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-dev-cert-plugin': link:../../heft-plugins/heft-dev-cert-plugin
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@rushstack/heft-webpack5-plugin': link:../../heft-plugins/heft-webpack5-plugin
      '@rushstack/module-minifier': link:../../libraries/module-minifier
      '@rushstack/webpack5-module-minifier-plugin': link:../../webpack/webpack5-module-minifier-plugin
      '@types/heft-jest': 1.0.1
      '@types/webpack-env': 1.13.0
      eslint: 8.7.0
      html-webpack-plugin: 5.5.0_webpack@5.68.0
      tslint: 5.20.1_typescript@4.8.4
      tslint-microsoft-contrib: 6.2.0_is64cncltak2c2767drphpzcku
      typescript: 4.8.4
      webpack: 5.68.0

  ../../build-tests/install-test-workspace:
    specifiers:
      '@microsoft/rush-lib': workspace:*
      '@rushstack/node-core-library': workspace:*
    devDependencies:
      '@microsoft/rush-lib': link:../../libraries/rush-lib
      '@rushstack/node-core-library': link:../../libraries/node-core-library

  ../../build-tests/localization-plugin-test-01:
    specifiers:
      '@rushstack/node-core-library': workspace:*
      '@rushstack/set-webpack-public-path-plugin': workspace:*
      '@rushstack/webpack4-localization-plugin': workspace:*
      '@rushstack/webpack4-module-minifier-plugin': workspace:*
      '@types/webpack-env': 1.13.0
      html-webpack-plugin: ~4.5.2
      ts-loader: 6.0.0
      typescript: ~4.8.4
      webpack: ~4.44.2
      webpack-bundle-analyzer: ~4.5.0
      webpack-cli: ~3.3.2
      webpack-dev-server: ~4.9.3
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/set-webpack-public-path-plugin': link:../../webpack/set-webpack-public-path-plugin
      '@rushstack/webpack4-localization-plugin': link:../../webpack/webpack4-localization-plugin
      '@rushstack/webpack4-module-minifier-plugin': link:../../webpack/webpack4-module-minifier-plugin
      '@types/webpack-env': 1.13.0
      html-webpack-plugin: 4.5.2_webpack@4.44.2
      ts-loader: 6.0.0_typescript@4.8.4
      typescript: 4.8.4
      webpack: 4.44.2_webpack-cli@3.3.12
      webpack-bundle-analyzer: 4.5.0
      webpack-cli: 3.3.12_webpack@4.44.2
      webpack-dev-server: 4.9.3_spfcq5ngldu5cvjikbre424ry4

  ../../build-tests/localization-plugin-test-02:
    specifiers:
      '@rushstack/node-core-library': workspace:*
      '@rushstack/set-webpack-public-path-plugin': workspace:*
      '@rushstack/webpack4-localization-plugin': workspace:*
      '@rushstack/webpack4-module-minifier-plugin': workspace:*
      '@types/lodash': 4.14.116
      '@types/webpack-env': 1.13.0
      html-webpack-plugin: ~4.5.2
      lodash: ~4.17.15
      ts-loader: 6.0.0
      typescript: ~4.8.4
      webpack: ~4.44.2
      webpack-bundle-analyzer: ~4.5.0
      webpack-cli: ~3.3.2
      webpack-dev-server: ~4.9.3
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/set-webpack-public-path-plugin': link:../../webpack/set-webpack-public-path-plugin
      '@rushstack/webpack4-localization-plugin': link:../../webpack/webpack4-localization-plugin
      '@rushstack/webpack4-module-minifier-plugin': link:../../webpack/webpack4-module-minifier-plugin
      '@types/lodash': 4.14.116
      '@types/webpack-env': 1.13.0
      html-webpack-plugin: 4.5.2_webpack@4.44.2
      lodash: 4.17.21
      ts-loader: 6.0.0_typescript@4.8.4
      typescript: 4.8.4
      webpack: 4.44.2_webpack-cli@3.3.12
      webpack-bundle-analyzer: 4.5.0
      webpack-cli: 3.3.12_webpack@4.44.2
      webpack-dev-server: 4.9.3_spfcq5ngldu5cvjikbre424ry4

  ../../build-tests/localization-plugin-test-03:
    specifiers:
      '@rushstack/node-core-library': workspace:*
      '@rushstack/set-webpack-public-path-plugin': workspace:*
      '@rushstack/webpack4-localization-plugin': workspace:*
      '@types/webpack-env': 1.13.0
      html-webpack-plugin: ~4.5.2
      ts-loader: 6.0.0
      typescript: ~4.8.4
      webpack: ~4.44.2
      webpack-bundle-analyzer: ~4.5.0
      webpack-cli: ~3.3.2
      webpack-dev-server: ~4.9.3
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/set-webpack-public-path-plugin': link:../../webpack/set-webpack-public-path-plugin
      '@rushstack/webpack4-localization-plugin': link:../../webpack/webpack4-localization-plugin
      '@types/webpack-env': 1.13.0
      html-webpack-plugin: 4.5.2_webpack@4.44.2
      ts-loader: 6.0.0_typescript@4.8.4
      typescript: 4.8.4
      webpack: 4.44.2_webpack-cli@3.3.12
      webpack-bundle-analyzer: 4.5.0
      webpack-cli: 3.3.12_webpack@4.44.2
      webpack-dev-server: 4.9.3_spfcq5ngldu5cvjikbre424ry4

  ../../build-tests/rush-amazon-s3-build-cache-plugin-integration-test:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/rush-amazon-s3-build-cache-plugin': workspace:*
      '@types/http-proxy': ~1.17.8
      '@types/node': 12.20.24
      eslint: ~8.7.0
      http-proxy: ~1.18.1
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/rush-amazon-s3-build-cache-plugin': link:../../rush-plugins/rush-amazon-s3-build-cache-plugin
      '@types/http-proxy': 1.17.9
      '@types/node': 12.20.24
      eslint: 8.7.0
      http-proxy: 1.18.1
      typescript: 4.8.4

  ../../build-tests/rush-project-change-analyzer-test:
    specifiers:
      '@microsoft/rush-lib': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/node': 12.20.24
    dependencies:
      '@microsoft/rush-lib': link:../../libraries/rush-lib
      '@rushstack/node-core-library': link:../../libraries/node-core-library
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/node': 12.20.24

  ../../build-tests/set-webpack-public-path-plugin-webpack4-test:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-webpack4-plugin': workspace:*
      '@rushstack/set-webpack-public-path-plugin': workspace:*
      '@types/webpack-env': 1.13.0
      eslint: ~8.7.0
      html-webpack-plugin: ~4.5.2
      typescript: ~4.8.4
      webpack: ~4.44.2
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-webpack4-plugin': link:../../heft-plugins/heft-webpack4-plugin
      '@rushstack/set-webpack-public-path-plugin': link:../../webpack/set-webpack-public-path-plugin
      '@types/webpack-env': 1.13.0
      eslint: 8.7.0
      html-webpack-plugin: 4.5.2_webpack@4.44.2
      typescript: 4.8.4
      webpack: 4.44.2

  ../../build-tests/ts-command-line-test:
    specifiers:
      '@rushstack/ts-command-line': workspace:*
      '@types/node': 12.20.24
      fs-extra: ~7.0.1
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/ts-command-line': link:../../libraries/ts-command-line
      '@types/node': 12.20.24
      fs-extra: 7.0.1
      typescript: 4.8.4

  ../../eslint/eslint-config:
    specifiers:
      '@rushstack/eslint-patch': workspace:*
      '@rushstack/eslint-plugin': workspace:*
      '@rushstack/eslint-plugin-packlets': workspace:*
      '@rushstack/eslint-plugin-security': workspace:*
      '@typescript-eslint/eslint-plugin': ~5.38.0
      '@typescript-eslint/experimental-utils': ~5.38.0
      '@typescript-eslint/parser': ~5.38.0
      '@typescript-eslint/typescript-estree': ~5.38.0
      eslint: ~8.7.0
      eslint-plugin-promise: ~6.0.0
      eslint-plugin-react: ~7.27.1
      eslint-plugin-tsdoc: ~0.2.16
      typescript: ~4.8.4
    dependencies:
      '@rushstack/eslint-patch': link:../eslint-patch
      '@rushstack/eslint-plugin': link:../eslint-plugin
      '@rushstack/eslint-plugin-packlets': link:../eslint-plugin-packlets
      '@rushstack/eslint-plugin-security': link:../eslint-plugin-security
      '@typescript-eslint/eslint-plugin': 5.38.0_sput6fej2qsjw5ind4uh6pfbcy
      '@typescript-eslint/experimental-utils': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
      '@typescript-eslint/parser': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      eslint-plugin-promise: 6.0.0_eslint@8.7.0
      eslint-plugin-react: 7.27.1_eslint@8.7.0
      eslint-plugin-tsdoc: 0.2.16
    devDependencies:
      eslint: 8.7.0
      typescript: 4.8.4

  ../../eslint/eslint-patch:
    specifiers:
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@types/node': 12.20.24
    devDependencies:
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/node': 12.20.24

  ../../eslint/eslint-plugin:
    specifiers:
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@rushstack/tree-pattern': workspace:*
      '@types/eslint': 8.2.0
      '@types/estree': 0.0.50
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@typescript-eslint/experimental-utils': ~5.38.0
      '@typescript-eslint/parser': ~5.38.0
      '@typescript-eslint/typescript-estree': ~5.38.0
      eslint: ~8.7.0
      typescript: ~4.8.4
    dependencies:
      '@rushstack/tree-pattern': link:../../libraries/tree-pattern
      '@typescript-eslint/experimental-utils': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
    devDependencies:
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/eslint': 8.2.0
      '@types/estree': 0.0.50
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@typescript-eslint/parser': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      eslint: 8.7.0
      typescript: 4.8.4

  ../../eslint/eslint-plugin-packlets:
    specifiers:
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@rushstack/tree-pattern': workspace:*
      '@types/eslint': 8.2.0
      '@types/estree': 0.0.50
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@typescript-eslint/experimental-utils': ~5.38.0
      '@typescript-eslint/parser': ~5.38.0
      '@typescript-eslint/typescript-estree': ~5.38.0
      eslint: ~8.7.0
      typescript: ~4.8.4
    dependencies:
      '@rushstack/tree-pattern': link:../../libraries/tree-pattern
      '@typescript-eslint/experimental-utils': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
    devDependencies:
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/eslint': 8.2.0
      '@types/estree': 0.0.50
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@typescript-eslint/parser': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      eslint: 8.7.0
      typescript: 4.8.4

  ../../eslint/eslint-plugin-security:
    specifiers:
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@rushstack/tree-pattern': workspace:*
      '@types/eslint': 8.2.0
      '@types/estree': 0.0.50
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@typescript-eslint/experimental-utils': ~5.38.0
      '@typescript-eslint/parser': ~5.38.0
      '@typescript-eslint/typescript-estree': ~5.38.0
      eslint: ~8.7.0
      typescript: ~4.8.4
    dependencies:
      '@rushstack/tree-pattern': link:../../libraries/tree-pattern
      '@typescript-eslint/experimental-utils': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
    devDependencies:
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/eslint': 8.2.0
      '@types/estree': 0.0.50
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@typescript-eslint/parser': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      eslint: 8.7.0
      typescript: 4.8.4

  ../../heft-plugins/heft-dev-cert-plugin:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@rushstack/debug-certificate-manager': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: ~8.7.0
      webpack: ~5.68.0
      webpack-dev-server: ~4.9.3
    dependencies:
      '@rushstack/debug-certificate-manager': link:../../libraries/debug-certificate-manager
      '@rushstack/node-core-library': link:../../libraries/node-core-library
    devDependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: 8.7.0
      webpack: 5.68.0
      webpack-dev-server: 4.9.3_webpack@5.68.0

  ../../heft-plugins/heft-jest-plugin:
    specifiers:
      '@jest/core': ~27.4.2
      '@jest/reporters': ~27.4.2
      '@jest/transform': ~27.4.2
      '@jest/types': ~27.4.2
      '@microsoft/api-extractor': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-config-file': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/lodash': 4.14.116
      '@types/node': 12.20.24
      eslint: ~8.7.0
      jest-config: ~27.4.2
      jest-environment-node: ~27.4.2
      jest-resolve: ~27.4.2
      jest-snapshot: ~27.4.2
      jest-watch-select-projects: 2.0.0
      lodash: ~4.17.15
      typescript: ~4.8.4
    dependencies:
      '@jest/core': 27.4.7
      '@jest/reporters': 27.4.6
      '@jest/transform': 27.4.6
      '@rushstack/heft-config-file': link:../../libraries/heft-config-file
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      jest-config: 27.4.7_@types+node@12.20.24
      jest-resolve: 27.4.6
      jest-snapshot: 27.4.6
      lodash: 4.17.21
    devDependencies:
      '@jest/types': 27.4.2
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@types/heft-jest': 1.0.1
      '@types/lodash': 4.14.116
      '@types/node': 12.20.24
      eslint: 8.7.0
      jest-environment-node: 27.4.6
      jest-watch-select-projects: 2.0.0
      typescript: 4.8.4

  ../../heft-plugins/heft-sass-plugin:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-config-file': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/typings-generator': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/node-sass': 4.11.2
      eslint: ~8.7.0
      node-sass: 6.0.1
      postcss: ~8.4.6
      postcss-modules: ~1.5.0
    dependencies:
      '@rushstack/heft-config-file': link:../../libraries/heft-config-file
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/typings-generator': link:../../libraries/typings-generator
      node-sass: 6.0.1
      postcss: 8.4.14
      postcss-modules: 1.5.0
    devDependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/node-sass': 4.11.2
      eslint: 8.7.0

  ../../heft-plugins/heft-serverless-stack-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/node': 12.20.24
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/node': 12.20.24

  ../../heft-plugins/heft-storybook-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/node': 12.20.24
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/node': 12.20.24

  ../../heft-plugins/heft-webpack4-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/node': 12.20.24
      '@types/webpack': 4.41.32
      webpack: ~4.44.2
      webpack-dev-server: ~4.9.3
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      webpack-dev-server: 4.9.3_2jhnw6fokymnjfoumvhvkjoyjq
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/node': 12.20.24
      '@types/webpack': 4.41.32
      webpack: 4.44.2

  ../../heft-plugins/heft-webpack5-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/node': 12.20.24
      webpack: ~5.68.0
      webpack-dev-server: ~4.9.3
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      webpack-dev-server: 4.9.3_webpack@5.68.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/node': 12.20.24
      webpack: 5.68.0

  ../../libraries/api-extractor-model:
    specifiers:
      '@microsoft/tsdoc': 0.14.1
      '@microsoft/tsdoc-config': ~0.16.1
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@rushstack/node-core-library': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
    dependencies:
      '@microsoft/tsdoc': 0.14.1
      '@microsoft/tsdoc-config': 0.16.1
      '@rushstack/node-core-library': link:../node-core-library
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../libraries/debug-certificate-manager:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/node-forge': 1.0.4
      node-forge: ~1.3.1
      sudo: ~1.0.3
    dependencies:
      '@rushstack/node-core-library': link:../node-core-library
      node-forge: 1.3.1
      sudo: 1.0.3
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/node-forge': 1.0.4

  ../../libraries/heft-config-file:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@rushstack/node-core-library': workspace:*
      '@rushstack/rig-package': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      jsonpath-plus: ~4.0.0
    dependencies:
      '@rushstack/node-core-library': link:../node-core-library
      '@rushstack/rig-package': link:../rig-package
      jsonpath-plus: 4.0.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../libraries/load-themed-styles:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-web-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/webpack-env': 1.13.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-web-rig': link:../../rigs/heft-web-rig
      '@types/heft-jest': 1.0.1
      '@types/webpack-env': 1.13.0

  ../../libraries/localization-utilities:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/typings-generator': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/xmldoc': 1.1.4
      pseudolocale: ~1.1.0
      xmldoc: ~1.1.2
    dependencies:
      '@rushstack/node-core-library': link:../node-core-library
      '@rushstack/typings-generator': link:../typings-generator
      pseudolocale: 1.1.0
      xmldoc: 1.1.2
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/xmldoc': 1.1.4

  ../../libraries/module-minifier:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/worker-pool': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/serialize-javascript': 5.0.2
      serialize-javascript: 6.0.0
      source-map: ~0.7.3
      terser: 5.9.0
    dependencies:
      '@rushstack/worker-pool': link:../worker-pool
      '@types/node': 12.20.24
      serialize-javascript: 6.0.0
      source-map: 0.7.4
      terser: 5.9.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/serialize-javascript': 5.0.2

  ../../libraries/node-core-library:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@types/fs-extra': 7.0.0
      '@types/heft-jest': 1.0.1
      '@types/jju': 1.4.1
      '@types/node': 12.20.24
      '@types/resolve': 1.17.1
      '@types/semver': 7.3.5
      colors: ~1.2.1
      fs-extra: ~7.0.1
      import-lazy: ~4.0.0
      jju: ~1.4.0
      resolve: ~1.17.0
      semver: ~7.3.0
      z-schema: ~5.0.2
    dependencies:
      '@types/node': 12.20.24
      colors: 1.2.5
      fs-extra: 7.0.1
      import-lazy: 4.0.0
      jju: 1.4.0
      resolve: 1.17.0
      semver: 7.3.7
      z-schema: 5.0.3
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/fs-extra': 7.0.0
      '@types/heft-jest': 1.0.1
      '@types/jju': 1.4.1
      '@types/resolve': 1.17.1
      '@types/semver': 7.3.5

  ../../libraries/package-deps-hash:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
    dependencies:
      '@rushstack/node-core-library': link:../node-core-library
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../libraries/rig-package:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/resolve': 1.17.1
      ajv: ~6.12.5
      resolve: ~1.17.0
      strip-json-comments: ~3.1.1
    dependencies:
      resolve: 1.17.0
      strip-json-comments: 3.1.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/resolve': 1.17.1
      ajv: 6.12.6

  ../../libraries/rush-lib:
    specifiers:
      '@pnpm/link-bins': ~5.3.7
      '@pnpm/logger': 4.0.0
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-config-file': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/package-deps-hash': workspace:*
      '@rushstack/rig-package': workspace:*
      '@rushstack/stream-collator': workspace:*
      '@rushstack/terminal': workspace:*
      '@rushstack/ts-command-line': workspace:*
      '@types/cli-table': 0.3.0
      '@types/glob': 7.1.1
      '@types/heft-jest': 1.0.1
      '@types/inquirer': 7.3.1
      '@types/js-yaml': 3.12.1
      '@types/lodash': 4.14.116
      '@types/node': 12.20.24
      '@types/node-fetch': 1.6.9
      '@types/npm-package-arg': 6.1.0
      '@types/npm-packlist': ~1.1.1
      '@types/read-package-tree': 5.1.0
      '@types/resolve': 1.17.1
      '@types/semver': 7.3.5
      '@types/ssri': ~7.1.0
      '@types/strict-uri-encode': 2.0.0
      '@types/tar': 6.1.1
      '@yarnpkg/lockfile': ~1.0.2
      builtin-modules: ~3.1.0
      cli-table: ~0.3.1
      colors: ~1.2.1
      git-repo-info: ~2.1.0
      glob: ~7.0.5
      glob-escape: ~0.0.2
      https-proxy-agent: ~5.0.0
      ignore: ~5.1.6
      inquirer: ~7.3.3
      js-yaml: ~3.13.1
      jszip: ~3.7.1
      lodash: ~4.17.15
      node-fetch: 2.6.7
      npm-package-arg: ~6.1.0
      npm-packlist: ~2.1.2
      read-package-tree: ~5.1.5
      resolve: ~1.17.0
      semver: ~7.3.0
      ssri: ~8.0.0
      strict-uri-encode: ~2.0.0
      tapable: 2.2.1
      tar: ~6.1.11
      true-case-path: ~2.2.1
    dependencies:
      '@pnpm/link-bins': 5.3.25
      '@rushstack/heft-config-file': link:../heft-config-file
      '@rushstack/node-core-library': link:../node-core-library
      '@rushstack/package-deps-hash': link:../package-deps-hash
      '@rushstack/rig-package': link:../rig-package
      '@rushstack/stream-collator': link:../stream-collator
      '@rushstack/terminal': link:../terminal
      '@rushstack/ts-command-line': link:../ts-command-line
      '@types/node-fetch': 1.6.9
      '@yarnpkg/lockfile': 1.0.2
      builtin-modules: 3.1.0
      cli-table: 0.3.11
      colors: 1.2.5
      git-repo-info: 2.1.1
      glob: 7.0.6
      glob-escape: 0.0.2
      https-proxy-agent: 5.0.1
      ignore: 5.1.9
      inquirer: 7.3.3
      js-yaml: 3.13.1
      jszip: 3.7.1
      lodash: 4.17.21
      node-fetch: 2.6.7
      npm-package-arg: 6.1.1
      npm-packlist: 2.1.5
      read-package-tree: 5.1.6
      resolve: 1.17.0
      semver: 7.3.7
      ssri: 8.0.1
      strict-uri-encode: 2.0.0
      tapable: 2.2.1
      tar: 6.1.11
      true-case-path: 2.2.1
    devDependencies:
      '@pnpm/logger': 4.0.0
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/cli-table': 0.3.0
      '@types/glob': 7.1.1
      '@types/heft-jest': 1.0.1
      '@types/inquirer': 7.3.1
      '@types/js-yaml': 3.12.1
      '@types/lodash': 4.14.116
      '@types/node': 12.20.24
      '@types/npm-package-arg': 6.1.0
      '@types/npm-packlist': 1.1.2
      '@types/read-package-tree': 5.1.0
      '@types/resolve': 1.17.1
      '@types/semver': 7.3.5
      '@types/ssri': 7.1.1
      '@types/strict-uri-encode': 2.0.0
      '@types/tar': 6.1.1

  ../../libraries/rush-sdk:
    specifiers:
      '@microsoft/rush-lib': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/stream-collator': workspace:*
      '@rushstack/terminal': workspace:*
      '@rushstack/ts-command-line': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node-fetch': 1.6.9
      '@types/semver': 7.3.5
      '@types/webpack-env': 1.13.0
      tapable: 2.2.1
    dependencies:
      '@rushstack/node-core-library': link:../node-core-library
      '@types/node-fetch': 1.6.9
      tapable: 2.2.1
    devDependencies:
      '@microsoft/rush-lib': link:../rush-lib
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@rushstack/stream-collator': link:../stream-collator
      '@rushstack/terminal': link:../terminal
      '@rushstack/ts-command-line': link:../ts-command-line
      '@types/heft-jest': 1.0.1
      '@types/semver': 7.3.5
      '@types/webpack-env': 1.13.0

  ../../libraries/rushell:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
    dependencies:
      '@rushstack/node-core-library': link:../node-core-library
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../libraries/stream-collator:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/terminal': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
    dependencies:
      '@rushstack/node-core-library': link:../node-core-library
      '@rushstack/terminal': link:../terminal
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../libraries/terminal:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/wordwrap': ~1.0.0
      colors: ~1.2.1
      wordwrap: ~1.0.0
    dependencies:
      '@rushstack/node-core-library': link:../node-core-library
      '@types/node': 12.20.24
      wordwrap: 1.0.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/wordwrap': 1.0.1
      colors: 1.2.5

  ../../libraries/tree-pattern:
    specifiers:
      '@rushstack/eslint-config': 3.1.0
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: ~7.30.0
      typescript: ~4.8.4
    devDependencies:
      '@rushstack/eslint-config': 3.1.0_xptyflz73tdwkjjssjsy5r76ri
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      eslint: 7.30.0
      typescript: 4.8.4

  ../../libraries/ts-command-line:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0
      '@types/argparse': 1.0.38
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      argparse: ~1.0.9
      colors: ~1.2.1
      string-argv: ~0.3.1
    dependencies:
      '@types/argparse': 1.0.38
      argparse: 1.0.10
      colors: 1.2.5
      string-argv: 0.3.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-node-rig': 1.11.0_h3gpn2xakmccf6skk6kolq2tyq
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../libraries/typings-generator:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/glob': 7.1.1
      '@types/node': 12.20.24
      chokidar: ~3.4.0
      glob: ~7.0.5
    dependencies:
      '@rushstack/node-core-library': link:../node-core-library
      '@types/node': 12.20.24
      chokidar: 3.4.3
      glob: 7.0.6
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/glob': 7.1.1

  ../../libraries/worker-pool:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
    dependencies:
      '@types/node': 12.20.24
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1

  ../../repo-scripts/doc-plugin-rush-stack:
    specifiers:
      '@microsoft/api-documenter': workspace:*
      '@microsoft/api-extractor-model': workspace:*
      '@microsoft/tsdoc': 0.14.1
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/js-yaml': 3.12.1
      '@types/node': 12.20.24
      js-yaml: ~3.13.1
    dependencies:
      '@microsoft/api-documenter': link:../../apps/api-documenter
      '@microsoft/api-extractor-model': link:../../libraries/api-extractor-model
      '@microsoft/tsdoc': 0.14.1
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      js-yaml: 3.13.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/js-yaml': 3.12.1
      '@types/node': 12.20.24

  ../../repo-scripts/generate-api-docs:
    specifiers:
      '@microsoft/api-documenter': workspace:*
      '@rushstack/eslint-config': workspace:*
      doc-plugin-rush-stack: workspace:*
    devDependencies:
      '@microsoft/api-documenter': link:../../apps/api-documenter
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      doc-plugin-rush-stack: link:../doc-plugin-rush-stack

  ../../repo-scripts/repo-toolbox:
    specifiers:
      '@microsoft/rush-lib': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/ts-command-line': workspace:*
      '@types/diff': 5.0.1
      '@types/node': 12.20.24
      diff: ~5.0.0
    dependencies:
      '@microsoft/rush-lib': link:../../libraries/rush-lib
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/ts-command-line': link:../../libraries/ts-command-line
      diff: 5.0.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/diff': 5.0.1
      '@types/node': 12.20.24

  ../../rigs/heft-node-rig:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      eslint: ~8.7.0
      jest-environment-node: ~27.4.2
      typescript: ~4.8.4
    dependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      eslint: 8.7.0
      jest-environment-node: 27.4.6
      typescript: 4.8.4
    devDependencies:
      '@rushstack/heft': link:../../apps/heft

  ../../rigs/heft-web-rig:
    specifiers:
      '@microsoft/api-extractor': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-jest-plugin': workspace:*
      '@rushstack/heft-sass-plugin': workspace:*
      '@rushstack/heft-webpack5-plugin': workspace:*
      autoprefixer: ~10.4.2
      css-loader: ~6.6.0
      css-minimizer-webpack-plugin: ~3.4.1
      eslint: ~8.7.0
      html-webpack-plugin: ~5.5.0
      jest-environment-jsdom: ~27.4.2
      mini-css-extract-plugin: ~2.5.3
      postcss: ~8.4.6
      postcss-loader: ~6.2.1
      sass: ~1.49.7
      sass-loader: ~12.4.0
      source-map-loader: ~3.0.1
      style-loader: ~3.3.1
      terser-webpack-plugin: ~5.3.1
      typescript: ~4.8.4
      url-loader: ~4.1.1
      webpack: ~5.68.0
      webpack-bundle-analyzer: ~4.5.0
      webpack-merge: ~5.8.0
    dependencies:
      '@microsoft/api-extractor': link:../../apps/api-extractor
      '@rushstack/heft-jest-plugin': link:../../heft-plugins/heft-jest-plugin
      '@rushstack/heft-sass-plugin': link:../../heft-plugins/heft-sass-plugin
      '@rushstack/heft-webpack5-plugin': link:../../heft-plugins/heft-webpack5-plugin
      autoprefixer: 10.4.7_postcss@8.4.14
      css-loader: 6.6.0_webpack@5.68.0
      css-minimizer-webpack-plugin: 3.4.1_webpack@5.68.0
      eslint: 8.7.0
      html-webpack-plugin: 5.5.0_webpack@5.68.0
      jest-environment-jsdom: 27.4.6
      mini-css-extract-plugin: 2.5.3_webpack@5.68.0
      postcss: 8.4.14
      postcss-loader: 6.2.1_yo2uikd3tnzhibf7mpy6pnymra
      sass: 1.49.11
      sass-loader: 12.4.0_ldtenuersk6xjw5tkzwiywgimy
      source-map-loader: 3.0.1_webpack@5.68.0
      style-loader: 3.3.1_webpack@5.68.0
      terser-webpack-plugin: 5.3.3_webpack@5.68.0
      typescript: 4.8.4
      url-loader: 4.1.1_webpack@5.68.0
      webpack: 5.68.0
      webpack-bundle-analyzer: 4.5.0
      webpack-merge: 5.8.0
    devDependencies:
      '@rushstack/heft': link:../../apps/heft

  ../../rush-plugins/rush-amazon-s3-build-cache-plugin:
    specifiers:
      '@microsoft/rush-lib': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/rush-sdk': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/node-fetch': 1.6.9
      https-proxy-agent: ~5.0.0
      node-fetch: 2.6.7
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/rush-sdk': link:../../libraries/rush-sdk
      https-proxy-agent: 5.0.1
      node-fetch: 2.6.7
    devDependencies:
      '@microsoft/rush-lib': link:../../libraries/rush-lib
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/node-fetch': 1.6.9

  ../../rush-plugins/rush-azure-storage-build-cache-plugin:
    specifiers:
      '@azure/identity': ~2.1.0
      '@azure/storage-blob': ~12.11.0
      '@microsoft/rush-lib': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/rush-sdk': workspace:*
      '@rushstack/terminal': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
    dependencies:
      '@azure/identity': 2.1.0
      '@azure/storage-blob': 12.11.0
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/rush-sdk': link:../../libraries/rush-sdk
      '@rushstack/terminal': link:../../libraries/terminal
    devDependencies:
      '@microsoft/rush-lib': link:../../libraries/rush-lib
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../rush-plugins/rush-litewatch-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/rush-sdk': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/rush-sdk': link:../../libraries/rush-sdk
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../rush-plugins/rush-serve-plugin:
    specifiers:
      '@rushstack/debug-certificate-manager': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-config-file': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/rig-package': workspace:*
      '@rushstack/rush-sdk': workspace:*
      '@rushstack/ts-command-line': workspace:*
      '@types/express': 4.17.13
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      express: 4.18.1
    dependencies:
      '@rushstack/debug-certificate-manager': link:../../libraries/debug-certificate-manager
      '@rushstack/heft-config-file': link:../../libraries/heft-config-file
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/rig-package': link:../../libraries/rig-package
      '@rushstack/rush-sdk': link:../../libraries/rush-sdk
      '@rushstack/ts-command-line': link:../../libraries/ts-command-line
      express: 4.18.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/express': 4.17.13
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../webpack/hashed-folder-copy-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/heft-webpack5-plugin': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/webpack-plugin-utilities': workspace:*
      '@types/enhanced-resolve': 3.0.7
      '@types/glob': 7.1.1
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/webpack': 4.41.32
      glob: ~7.0.5
      webpack: ~4.44.2
    dependencies:
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@rushstack/webpack-plugin-utilities': link:../webpack-plugin-utilities
      glob: 7.0.6
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@rushstack/heft-webpack5-plugin': link:../../heft-plugins/heft-webpack5-plugin
      '@types/enhanced-resolve': 3.0.7
      '@types/glob': 7.1.1
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/webpack': 4.41.32
      webpack: 4.44.2

  ../../webpack/loader-load-themed-styles:
    specifiers:
      '@microsoft/load-themed-styles': workspace:*
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/loader-utils': 1.1.3
      '@types/node': 12.20.24
      '@types/webpack': 4.41.32
      loader-utils: ~1.1.0
    dependencies:
      loader-utils: 1.1.0
    devDependencies:
      '@microsoft/load-themed-styles': link:../../libraries/load-themed-styles
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/loader-utils': 1.1.3
      '@types/node': 12.20.24
      '@types/webpack': 4.41.32

  ../../webpack/loader-raw-script:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      loader-utils: ~1.1.0
    dependencies:
      loader-utils: 1.1.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24

  ../../webpack/preserve-dynamic-require-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      webpack: ~5.68.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      webpack: 5.68.0

  ../../webpack/set-webpack-public-path-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/heft-webpack5-plugin': workspace:*
      '@rushstack/webpack-plugin-utilities': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      '@types/webpack': 4.41.32
    dependencies:
      '@rushstack/webpack-plugin-utilities': link:../webpack-plugin-utilities
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@rushstack/heft-webpack5-plugin': link:../../heft-plugins/heft-webpack5-plugin
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      '@types/webpack': 4.41.32

  ../../webpack/webpack-plugin-utilities:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      webpack: ~5.68.0
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      webpack: 5.68.0

  ../../webpack/webpack4-localization-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/localization-utilities': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@rushstack/set-webpack-public-path-plugin': workspace:*
      '@types/loader-utils': 1.1.3
      '@types/lodash': 4.14.116
      '@types/minimatch': 3.0.5
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      '@types/webpack': 4.41.32
      loader-utils: ~1.1.0
      lodash: ~4.17.15
      minimatch: ~3.0.3
      webpack: ~4.44.2
    dependencies:
      '@rushstack/localization-utilities': link:../../libraries/localization-utilities
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      loader-utils: 1.1.0
      lodash: 4.17.21
      minimatch: 3.0.8
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@rushstack/set-webpack-public-path-plugin': link:../set-webpack-public-path-plugin
      '@types/loader-utils': 1.1.3
      '@types/lodash': 4.14.116
      '@types/minimatch': 3.0.5
      '@types/webpack': 4.41.32
      webpack: 4.44.2

  ../../webpack/webpack4-module-minifier-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/module-minifier': workspace:*
      '@rushstack/worker-pool': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      '@types/webpack': 4.41.32
      '@types/webpack-sources': 1.4.2
      tapable: 1.1.3
      webpack: ~4.44.2
      webpack-sources: ~1.4.3
    dependencies:
      '@rushstack/module-minifier': link:../../libraries/module-minifier
      '@rushstack/worker-pool': link:../../libraries/worker-pool
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      tapable: 1.1.3
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      '@types/webpack': 4.41.32
      '@types/webpack-sources': 1.4.2
      webpack: 4.44.2
      webpack-sources: 1.4.3

  ../../webpack/webpack5-localization-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/localization-utilities': workspace:*
      '@rushstack/node-core-library': workspace:*
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      memfs: 3.4.3
      webpack: ~5.68.0
    dependencies:
      '@rushstack/localization-utilities': link:../../libraries/localization-utilities
      '@rushstack/node-core-library': link:../../libraries/node-core-library
      '@types/node': 12.20.24
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@types/heft-jest': 1.0.1
      memfs: 3.4.3
      webpack: 5.68.0

  ../../webpack/webpack5-module-minifier-plugin:
    specifiers:
      '@rushstack/eslint-config': workspace:*
      '@rushstack/heft': workspace:*
      '@rushstack/heft-node-rig': workspace:*
      '@rushstack/module-minifier': workspace:*
      '@rushstack/worker-pool': workspace:*
      '@types/estree': 0.0.50
      '@types/heft-jest': 1.0.1
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      memfs: 3.4.3
      tapable: 2.2.1
      webpack: ~5.68.0
    dependencies:
      '@rushstack/worker-pool': link:../../libraries/worker-pool
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      tapable: 2.2.1
    devDependencies:
      '@rushstack/eslint-config': link:../../eslint/eslint-config
      '@rushstack/heft': link:../../apps/heft
      '@rushstack/heft-node-rig': link:../../rigs/heft-node-rig
      '@rushstack/module-minifier': link:../../libraries/module-minifier
      '@types/estree': 0.0.50
      '@types/heft-jest': 1.0.1
      memfs: 3.4.3
      webpack: 5.68.0

packages:
  /@ampproject/remapping/2.2.0:
    resolution:
      {
        integrity: sha512-qRmjj8nj9qmLTQXXmaR1cck3UXSRMPrbsLJAasZpF+t3riI71BXed5ebIOYwQntykeZuhjsdweEc9BxH5Jc26w==
      }
    engines: { node: '>=6.0.0' }
    dependencies:
      '@jridgewell/gen-mapping': 0.1.1
      '@jridgewell/trace-mapping': 0.3.13

  /@aws-cdk/aws-apigatewayv2-alpha/2.7.0-alpha.0_4k7vh4k5vxgov5k3ju6unzjkgi:
    resolution:
      {
        integrity: sha512-NHm+Jet4Iz1YDEo7lik4ItfGU1w97jCqNKilET0kcPndtxynDJNVpD1O0ycOb9L6hhLtpT5I7Llutt9Dy5gjYA==
      }
    engines: { node: '>= 14.15.0' }
    peerDependencies:
      aws-cdk-lib: ^2.7.0
      constructs: ^10.0.0
    dependencies:
      aws-cdk-lib: 2.7.0_constructs@10.0.130
      constructs: 10.0.130
    dev: true

  /@aws-cdk/aws-apigatewayv2-authorizers-alpha/2.7.0-alpha.0_lhdwln6d4cy5rqcla435fclwy4:
    resolution:
      {
        integrity: sha512-03VMs0IKvcm5xLan0PI+gczSQZfmYBJruqjB5Fn+VvH57kU7vu75Kgjs6gUc6CpoI38MH7QdamLs9eP9AvL/HQ==
      }
    engines: { node: '>= 14.15.0' }
    peerDependencies:
      '@aws-cdk/aws-apigatewayv2-alpha': 2.7.0-alpha.0
      aws-cdk-lib: ^2.7.0
      constructs: ^10.0.0
    dependencies:
      '@aws-cdk/aws-apigatewayv2-alpha': 2.7.0-alpha.0_4k7vh4k5vxgov5k3ju6unzjkgi
      aws-cdk-lib: 2.7.0_constructs@10.0.130
      constructs: 10.0.130
    dev: true

  /@aws-cdk/aws-apigatewayv2-integrations-alpha/2.7.0-alpha.0_lhdwln6d4cy5rqcla435fclwy4:
    resolution:
      {
        integrity: sha512-QayWlBXdnAXjDghrYHO/vHsViPx/mLb2Tx5xdGM5sgIICNAnnY3WBbZZC4WLIli3bnc22cxwFWGCWHuM/vfj5A==
      }
    engines: { node: '>= 14.15.0' }
    peerDependencies:
      '@aws-cdk/aws-apigatewayv2-alpha': 2.7.0-alpha.0
      aws-cdk-lib: ^2.7.0
      constructs: ^10.0.0
    dependencies:
      '@aws-cdk/aws-apigatewayv2-alpha': 2.7.0-alpha.0_4k7vh4k5vxgov5k3ju6unzjkgi
      aws-cdk-lib: 2.7.0_constructs@10.0.130
      constructs: 10.0.130
    dev: true

  /@aws-cdk/aws-appsync-alpha/2.7.0-alpha.0_4k7vh4k5vxgov5k3ju6unzjkgi:
    resolution:
      {
        integrity: sha512-4XyRBZG+hlAmyYv+xTJ1picE3eR9ImdbLpm/znde56/lOqOVBryP/h8xXL3EOAbOknqp7cnXAnjgV7BUOxLOdQ==
      }
    engines: { node: '>= 14.15.0' }
    peerDependencies:
      aws-cdk-lib: ^2.7.0
      constructs: ^10.0.0
    dependencies:
      aws-cdk-lib: 2.7.0_constructs@10.0.130
      constructs: 10.0.130
    dev: true

  /@aws-cdk/cfnspec/2.7.0:
    resolution:
      {
        integrity: sha512-RZbQLtTYZzC/DZkdW8Kla/9dI+UMgIrzAoEXhgTU9U0lVjXQ/3bdmmwSgC1bi3ckRRGJAL3+UBqoj2SAWh9ypg==
      }
    dependencies:
      fs-extra: 9.1.0
      md5: 2.3.0
    dev: true

  /@aws-cdk/cloud-assembly-schema/2.7.0:
    resolution:
      {
        integrity: sha512-vKTKLMPvzUhsYo3c4/EbMJq+bwIgHkwK0lV9fc5mQlnTUTyHe6nGIvyzmWWMd5BVEkgNzw+QdecxeeYJNu/doA==
      }
    engines: { node: '>= 14.15.0' }
    dependencies:
      jsonschema: 1.4.1
      semver: 7.3.7
    dev: true
    bundledDependencies:
      - jsonschema
      - semver

  /@aws-cdk/cloudformation-diff/2.7.0:
    resolution:
      {
        integrity: sha512-2bu2+13K6rsGwV0T3W+sTQzw0MgYcvVvB7SYqRSIhDJ+1ylZby7+0IApAn+XuIUr6+1KmcedvNku7LEiUWV8DA==
      }
    engines: { node: '>= 14.15.0' }
    dependencies:
      '@aws-cdk/cfnspec': 2.7.0
      '@types/node': 10.17.60
      chalk: 4.1.2
      diff: 5.0.0
      fast-deep-equal: 3.1.3
      string-width: 4.2.3
      table: 6.8.0
    dev: true

  /@aws-cdk/cx-api/2.7.0:
    resolution:
      {
        integrity: sha512-rfjpWyouHy3zNFEdhy5M75x4NsHZerInNAKx3tMbBIYgu258AyYJzJCecTKDGPCD1zB/u0FzshqeiqxY7pjrPA==
      }
    engines: { node: '>= 14.15.0' }
    dependencies:
      '@aws-cdk/cloud-assembly-schema': 2.7.0
      semver: 7.3.7
    dev: true
    bundledDependencies:
      - semver

  /@aws-cdk/region-info/2.7.0:
    resolution:
      {
        integrity: sha512-2j1MC2BOsfjAVfdqJa5aXxLQK6AqFtEsR4QOUKmwnDOV9qRr0yDoY3eXUpB480B4EOIW2e3jLfjkPHKu/P2DSw==
      }
    engines: { node: '>= 14.15.0' }
    dev: true

  /@azure/abort-controller/1.1.0:
    resolution:
      {
        integrity: sha512-TrRLIoSQVzfAJX9H1JeFjzAoDGcoK1IYX1UImfceTZpsyYfWr09Ss1aHW1y5TrrR3iq6RZLBwJ3E24uwPhwahw==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      tslib: 2.3.1
    dev: false

  /@azure/core-auth/1.3.2:
    resolution:
      {
        integrity: sha512-7CU6DmCHIZp5ZPiZ9r3J17lTKMmYsm/zGvNkjArQwPkrLlZ1TZ+EUYfGgh2X31OLMVAQCTJZW4cXHJi02EbJnA==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      '@azure/abort-controller': 1.1.0
      tslib: 2.3.1
    dev: false

  /@azure/core-auth/1.4.0:
    resolution:
      {
        integrity: sha512-HFrcTgmuSuukRf/EdPmqBrc5l6Q5Uu+2TbuhaKbgaCpP2TfAeiNaQPAadxO+CYBRHGUzIDteMAjFspFLDLnKVQ==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      '@azure/abort-controller': 1.1.0
      tslib: 2.3.1
    dev: false

  /@azure/core-client/1.6.1:
    resolution:
      {
        integrity: sha512-mZ1MSKhZBYoV8GAWceA+PEJFWV2VpdNSpxxcj1wjIAOi00ykRuIQChT99xlQGZWLY3/NApWhSImlFwsmCEs4vA==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      '@azure/abort-controller': 1.1.0
      '@azure/core-auth': 1.4.0
      '@azure/core-rest-pipeline': 1.9.2
      '@azure/core-tracing': 1.0.1
      '@azure/core-util': 1.1.0
      '@azure/logger': 1.0.3
      tslib: 2.3.1
    transitivePeerDependencies:
      - supports-color
    dev: false

  /@azure/core-http/2.2.7:
    resolution:
      {
        integrity: sha512-TyGMeDm90mkRS8XzSQbSMD+TqnWL1XKGCh0x0QVGMD8COH2yU0q5SaHm/IBEBkzcq0u73NhS/p57T3KVSgUFqQ==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      '@azure/abort-controller': 1.1.0
      '@azure/core-auth': 1.3.2
      '@azure/core-tracing': 1.0.0-preview.13
      '@azure/core-util': 1.1.0
      '@azure/logger': 1.0.3
      '@types/node-fetch': 2.6.2
      '@types/tunnel': 0.0.3
      form-data: 4.0.0
      node-fetch: 2.6.7
      process: 0.11.10
      tough-cookie: 4.0.0
      tslib: 2.3.1
      tunnel: 0.0.6
      uuid: 8.3.2
      xml2js: 0.4.23
    transitivePeerDependencies:
      - encoding
    dev: false

  /@azure/core-lro/2.3.1:
    resolution:
      {
        integrity: sha512-nQ+Xnm9g1EWcmbqgxJGmkNHfOHRUmrbYIlRT4KjluzhHQooaGO55m/h6wCX0ho3Jte2ZNBzZPJRmi6yBWeb3yA==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      '@azure/abort-controller': 1.1.0
      '@azure/logger': 1.0.3
      tslib: 2.3.1
    dev: false

  /@azure/core-paging/1.3.0:
    resolution:
      {
        integrity: sha512-H6Tg9eBm0brHqLy0OSAGzxIh1t4UL8eZVrSUMJ60Ra9cwq2pOskFqVpz2pYoHDsBY1jZ4V/P8LRGb5D5pmC6rg==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      tslib: 2.3.1
    dev: false

  /@azure/core-rest-pipeline/1.9.2:
    resolution:
      {
        integrity: sha512-8rXI6ircjenaLp+PkOFpo37tQ1PQfztZkfVj97BIF3RPxHAsoVSgkJtu3IK/bUEWcb7HzXSoyBe06M7ODRkRyw==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      '@azure/abort-controller': 1.1.0
      '@azure/core-auth': 1.4.0
      '@azure/core-tracing': 1.0.1
      '@azure/core-util': 1.1.0
      '@azure/logger': 1.0.3
      form-data: 4.0.0
      http-proxy-agent: 5.0.0
      https-proxy-agent: 5.0.1
      tslib: 2.3.1
      uuid: 8.3.2
    transitivePeerDependencies:
      - supports-color
    dev: false

  /@azure/core-tracing/1.0.0-preview.13:
    resolution:
      {
        integrity: sha512-KxDlhXyMlh2Jhj2ykX6vNEU0Vou4nHr025KoSEiz7cS3BNiHNaZcdECk/DmLkEB0as5T7b/TpRcehJ5yV6NeXQ==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      '@opentelemetry/api': 1.2.0
      tslib: 2.3.1
    dev: false

  /@azure/core-tracing/1.0.1:
    resolution:
      {
        integrity: sha512-I5CGMoLtX+pI17ZdiFJZgxMJApsK6jjfm85hpgp3oazCdq5Wxgh4wMr7ge/TTWW1B5WBuvIOI1fMU/FrOAMKrw==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      tslib: 2.3.1
    dev: false

  /@azure/core-util/1.1.0:
    resolution:
      {
        integrity: sha512-+i93lNJNA3Pl3KSuC6xKP2jTL4YFeDfO6VNOaYdk0cppZcLCxt811gS878VsqsCisaltdhl9lhMzK5kbxCiF4w==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      tslib: 2.3.1
    dev: false

  /@azure/identity/2.1.0:
    resolution:
      {
        integrity: sha512-BPDz1sK7Ul9t0l9YKLEa8PHqWU4iCfhGJ+ELJl6c8CP3TpJt2urNCbm0ZHsthmxRsYoMPbz2Dvzj30zXZVmAFw==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      '@azure/abort-controller': 1.1.0
      '@azure/core-auth': 1.3.2
      '@azure/core-client': 1.6.1
      '@azure/core-rest-pipeline': 1.9.2
      '@azure/core-tracing': 1.0.1
      '@azure/core-util': 1.1.0
      '@azure/logger': 1.0.3
      '@azure/msal-browser': 2.28.3
      '@azure/msal-common': 7.4.1
      '@azure/msal-node': 1.14.0
      events: 3.3.0
      jws: 4.0.0
      open: 8.4.0
      stoppable: 1.1.0
      tslib: 2.3.1
      uuid: 8.3.2
    transitivePeerDependencies:
      - supports-color
    dev: false

  /@azure/logger/1.0.3:
    resolution:
      {
        integrity: sha512-aK4s3Xxjrx3daZr3VylxejK3vG5ExXck5WOHDJ8in/k9AqlfIyFMMT1uG7u8mNjX+QRILTIn0/Xgschfh/dQ9g==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      tslib: 2.3.1
    dev: false

  /@azure/msal-browser/2.28.3:
    resolution:
      {
        integrity: sha512-2SdyH2el3s8BzPURf9RK17BvvXvaMEGpLc3D9WilZcmjJqP4nStVH7Ogwr/SNTuGV48FUhqEkP0RxDvzuFJSIw==
      }
    engines: { node: '>=0.8.0' }
    dependencies:
      '@azure/msal-common': 7.4.1
    dev: false

  /@azure/msal-common/7.4.1:
    resolution:
      {
        integrity: sha512-zxcxg9pRdgGTS5mrRJeQvwA8aIjD8qSGzaAiz5SeTVkyhtjB0AeFnAcvBOKHv/TkswWNfYKpERxsXOAKXkXk0w==
      }
    engines: { node: '>=0.8.0' }
    dev: false

  /@azure/msal-node/1.14.0:
    resolution:
      {
        integrity: sha512-3XB7FuHLhmGBjw7bxuz1LCHOXQgmNIO3J56tlbOjuJcyJtd4aBCgnYIXNKLed3uRcQNHEO0mlg24I4iGxAV/UA==
      }
    engines: { node: 10 || 12 || 14 || 16 || 18 }
    dependencies:
      '@azure/msal-common': 7.4.1
      jsonwebtoken: 8.5.1
      uuid: 8.3.2
    dev: false

  /@azure/storage-blob/12.11.0:
    resolution:
      {
        integrity: sha512-na+FisoARuaOWaHWpmdtk3FeuTWf2VWamdJ9/TJJzj5ZdXPLC3juoDgFs6XVuJIoK30yuBpyFBEDXVRK4pB7Tg==
      }
    engines: { node: '>=12.0.0' }
    dependencies:
      '@azure/abort-controller': 1.1.0
      '@azure/core-http': 2.2.7
      '@azure/core-lro': 2.3.1
      '@azure/core-paging': 1.3.0
      '@azure/core-tracing': 1.0.0-preview.13
      '@azure/logger': 1.0.3
      events: 3.3.0
      tslib: 2.3.1
    transitivePeerDependencies:
      - encoding
    dev: false

  /@babel/code-frame/7.12.11:
    resolution:
      {
        integrity: sha512-Zt1yodBx1UcyiePMSkWnU4hPqhwq7hGi2nFL1LeA3EUl+q2LQx16MISgJ0+z7dnmgvP9QtIleuETGOiOH1RcIw==
      }
    dependencies:
      '@babel/highlight': 7.17.12
    dev: true

  /@babel/code-frame/7.16.7:
    resolution:
      {
        integrity: sha512-iAXqUn8IIeBTNd72xsFlgaXHkMBMt6y4HJp1tIaK465CWLT/fG1aqB7ykr95gHHmlBdGbFeWWfyB4NJJ0nmeIg==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/highlight': 7.17.12

  /@babel/compat-data/7.18.5:
    resolution:
      {
        integrity: sha512-BxhE40PVCBxVEJsSBhB6UWyAuqJRxGsAw8BdHMJ3AKGydcwuWW4kOO3HmqBQAdcq/OP+/DlTVxLvsCzRTnZuGg==
      }
    engines: { node: '>=6.9.0' }

  /@babel/core/7.12.9:
    resolution:
      {
        integrity: sha512-gTXYh3M5wb7FRXQy+FErKFAv90BnlOuNn1QkCK2lREoPAjrQCO49+HVSrFoe5uakFAF5eenS75KbO2vQiLrTMQ==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/code-frame': 7.16.7
      '@babel/generator': 7.18.2
      '@babel/helper-module-transforms': 7.18.0
      '@babel/helpers': 7.18.2
      '@babel/parser': 7.18.5
      '@babel/template': 7.16.7
      '@babel/traverse': 7.18.5
      '@babel/types': 7.18.4
      convert-source-map: 1.8.0
      debug: 4.3.4
      gensync: 1.0.0-beta.2
      json5: 2.2.1
      lodash: 4.17.21
      resolve: 1.17.0
      semver: 5.7.1
      source-map: 0.5.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/core/7.17.12:
    resolution:
      {
        integrity: sha512-44ODe6O1IVz9s2oJE3rZ4trNNKTX9O7KpQpfAP4t8QII/zwrVRHL7i2pxhqtcY7tqMLrrKfMlBKnm1QlrRFs5w==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@ampproject/remapping': 2.2.0
      '@babel/code-frame': 7.16.7
      '@babel/generator': 7.18.2
      '@babel/helper-compilation-targets': 7.18.2_@babel+core@7.17.12
      '@babel/helper-module-transforms': 7.18.0
      '@babel/helpers': 7.18.2
      '@babel/parser': 7.18.5
      '@babel/template': 7.16.7
      '@babel/traverse': 7.18.5
      '@babel/types': 7.18.4
      convert-source-map: 1.8.0
      debug: 4.3.4
      gensync: 1.0.0-beta.2
      json5: 2.2.1
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color

  /@babel/generator/7.18.2:
    resolution:
      {
        integrity: sha512-W1lG5vUwFvfMd8HVXqdfbuG7RuaSrTCCD8cl8fP8wOivdbtbIg2Db3IWUcgvfxKbbn6ZBGYRW/Zk1MIwK49mgw==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/types': 7.18.4
      '@jridgewell/gen-mapping': 0.3.1
      jsesc: 2.5.2

  /@babel/helper-annotate-as-pure/7.16.7:
    resolution:
      {
        integrity: sha512-s6t2w/IPQVTAET1HitoowRGXooX8mCgtuP5195wD/QJPV6wYjpujCGF7JuMODVX2ZAJOf1GT6DT9MHEZvLOFSw==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/types': 7.18.4
    dev: true

  /@babel/helper-builder-binary-assignment-operator-visitor/7.16.7:
    resolution:
      {
        integrity: sha512-C6FdbRaxYjwVu/geKW4ZeQ0Q31AftgRcdSnZ5/jsH6BzCJbtvXvhpfkbkThYSuutZA7nCXpPR6AD9zd1dprMkA==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/helper-explode-assignable-expression': 7.16.7
      '@babel/types': 7.18.4
    dev: true

  /@babel/helper-compilation-targets/7.18.2_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-s1jnPotJS9uQnzFtiZVBUxe67CuBa679oWFHpxYYnTpRL/1ffhyX44R9uYiXoa/pLXcY9H2moJta0iaanlk/rQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/compat-data': 7.18.5
      '@babel/core': 7.17.12
      '@babel/helper-validator-option': 7.16.7
      browserslist: 4.20.4
      semver: 6.3.0

  /@babel/helper-create-class-features-plugin/7.18.0_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-Kh8zTGR9de3J63e5nS0rQUdRs/kbtwoeQQ0sriS0lItjC96u8XXZN6lKpuyWd2coKSU13py/y+LTmThLuVX0Pg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-environment-visitor': 7.18.2
      '@babel/helper-function-name': 7.17.9
      '@babel/helper-member-expression-to-functions': 7.17.7
      '@babel/helper-optimise-call-expression': 7.16.7
      '@babel/helper-replace-supers': 7.18.2
      '@babel/helper-split-export-declaration': 7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helper-create-regexp-features-plugin/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-b2aZrV4zvutr9AIa6/gA3wsZKRwTKYoDxYiFKcESS3Ug2GTXzwBEvMuuFLhCQpEnRXs1zng4ISAXSUxxKBIcxw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-annotate-as-pure': 7.16.7
      regexpu-core: 5.0.1
    dev: true

  /@babel/helper-define-polyfill-provider/0.1.5_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-nXuzCSwlJ/WKr8qxzW816gwyT6VZgiJG17zR40fou70yfAcqjoNyTLl/DQ+FExw5Hx5KNqshmN8Ldl/r2N7cTg==
      }
    peerDependencies:
      '@babel/core': ^7.4.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-compilation-targets': 7.18.2_@babel+core@7.17.12
      '@babel/helper-module-imports': 7.16.7
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/traverse': 7.18.5
      debug: 4.3.4
      lodash.debounce: 4.0.8
      resolve: 1.17.0
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helper-define-polyfill-provider/0.3.1_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-J9hGMpJQmtWmj46B3kBHmL38UhJGhYX7eqkcq+2gsstyYt341HmPeWspihX43yVRA0mS+8GGk2Gckc7bY/HCmA==
      }
    peerDependencies:
      '@babel/core': ^7.4.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-compilation-targets': 7.18.2_@babel+core@7.17.12
      '@babel/helper-module-imports': 7.16.7
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/traverse': 7.18.5
      debug: 4.3.4
      lodash.debounce: 4.0.8
      resolve: 1.17.0
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helper-environment-visitor/7.18.2:
    resolution:
      {
        integrity: sha512-14GQKWkX9oJzPiQQ7/J36FTXcD4kSp8egKjO9nINlSKiHITRA9q/R74qu8S9xlc/b/yjsJItQUeeh3xnGN0voQ==
      }
    engines: { node: '>=6.9.0' }

  /@babel/helper-explode-assignable-expression/7.16.7:
    resolution:
      {
        integrity: sha512-KyUenhWMC8VrxzkGP0Jizjo4/Zx+1nNZhgocs+gLzyZyB8SHidhoq9KK/8Ato4anhwsivfkBLftky7gvzbZMtQ==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/types': 7.18.4
    dev: true

  /@babel/helper-function-name/7.17.9:
    resolution:
      {
        integrity: sha512-7cRisGlVtiVqZ0MW0/yFB4atgpGLWEHUVYnb448hZK4x+vih0YO5UoS11XIYtZYqHd0dIPMdUSv8q5K4LdMnIg==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/template': 7.16.7
      '@babel/types': 7.18.4

  /@babel/helper-hoist-variables/7.16.7:
    resolution:
      {
        integrity: sha512-m04d/0Op34H5v7pbZw6pSKP7weA6lsMvfiIAMeIvkY/R4xQtBSMFEigu9QTZ2qB/9l22vsxtM8a+Q8CzD255fg==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/types': 7.18.4

  /@babel/helper-member-expression-to-functions/7.17.7:
    resolution:
      {
        integrity: sha512-thxXgnQ8qQ11W2wVUObIqDL4p148VMxkt5T/qpN5k2fboRyzFGFmKsTGViquyM5QHKUy48OZoca8kw4ajaDPyw==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/types': 7.18.4
    dev: true

  /@babel/helper-module-imports/7.16.7:
    resolution:
      {
        integrity: sha512-LVtS6TqjJHFc+nYeITRo6VLXve70xmq7wPhWTqDJusJEgGmkAACWwMiTNrvfoQo6hEhFwAIixNkvB0jPXDL8Wg==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/types': 7.18.4

  /@babel/helper-module-transforms/7.18.0:
    resolution:
      {
        integrity: sha512-kclUYSUBIjlvnzN2++K9f2qzYKFgjmnmjwL4zlmU5f8ZtzgWe8s0rUPSTGy2HmK4P8T52MQsS+HTQAgZd3dMEA==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/helper-environment-visitor': 7.18.2
      '@babel/helper-module-imports': 7.16.7
      '@babel/helper-simple-access': 7.18.2
      '@babel/helper-split-export-declaration': 7.16.7
      '@babel/helper-validator-identifier': 7.16.7
      '@babel/template': 7.16.7
      '@babel/traverse': 7.18.5
      '@babel/types': 7.18.4
    transitivePeerDependencies:
      - supports-color

  /@babel/helper-optimise-call-expression/7.16.7:
    resolution:
      {
        integrity: sha512-EtgBhg7rd/JcnpZFXpBy0ze1YRfdm7BnBX4uKMBd3ixa3RGAE002JZB66FJyNH7g0F38U05pXmA5P8cBh7z+1w==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/types': 7.18.4
    dev: true

  /@babel/helper-plugin-utils/7.10.4:
    resolution:
      {
        integrity: sha512-O4KCvQA6lLiMU9l2eawBPMf1xPP8xPfB3iEQw150hOVTqj/rfXz0ThTb4HEzqQfs2Bmo5Ay8BzxfzVtBrr9dVg==
      }
    dev: true

  /@babel/helper-plugin-utils/7.17.12:
    resolution:
      {
        integrity: sha512-JDkf04mqtN3y4iAbO1hv9U2ARpPyPL1zqyWs/2WG1pgSq9llHFjStX5jdxb84himgJm+8Ng+x0oiWF/nw/XQKA==
      }
    engines: { node: '>=6.9.0' }

  /@babel/helper-remap-async-to-generator/7.16.8:
    resolution:
      {
        integrity: sha512-fm0gH7Flb8H51LqJHy3HJ3wnE1+qtYR2A99K06ahwrawLdOFsCEWjZOrYricXJHoPSudNKxrMBUPEIPxiIIvBw==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-wrap-function': 7.16.8
      '@babel/types': 7.18.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helper-replace-supers/7.18.2:
    resolution:
      {
        integrity: sha512-XzAIyxx+vFnrOxiQrToSUOzUOn0e1J2Li40ntddek1Y69AXUTXoDJ40/D5RdjFu7s7qHiaeoTiempZcbuVXh2Q==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/helper-environment-visitor': 7.18.2
      '@babel/helper-member-expression-to-functions': 7.17.7
      '@babel/helper-optimise-call-expression': 7.16.7
      '@babel/traverse': 7.18.5
      '@babel/types': 7.18.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helper-simple-access/7.18.2:
    resolution:
      {
        integrity: sha512-7LIrjYzndorDY88MycupkpQLKS1AFfsVRm2k/9PtKScSy5tZq0McZTj+DiMRynboZfIqOKvo03pmhTaUgiD6fQ==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/types': 7.18.4

  /@babel/helper-skip-transparent-expression-wrappers/7.16.0:
    resolution:
      {
        integrity: sha512-+il1gTy0oHwUsBQZyJvukbB4vPMdcYBrFHa0Uc4AizLxbq6BOYC51Rv4tWocX9BLBDLZ4kc6qUFpQ6HRgL+3zw==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/types': 7.18.4
    dev: true

  /@babel/helper-split-export-declaration/7.16.7:
    resolution:
      {
        integrity: sha512-xbWoy/PFoxSWazIToT9Sif+jJTlrMcndIsaOKvTA6u7QEo7ilkRZpjew18/W3c7nm8fXdUDXh02VXTbZ0pGDNw==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/types': 7.18.4

  /@babel/helper-validator-identifier/7.16.7:
    resolution:
      {
        integrity: sha512-hsEnFemeiW4D08A5gUAZxLBTXpZ39P+a+DGDsHw1yxqyQ/jzFEnxf5uTEGp+3bzAbNOxU1paTgYS4ECU/IgfDw==
      }
    engines: { node: '>=6.9.0' }

  /@babel/helper-validator-option/7.16.7:
    resolution:
      {
        integrity: sha512-TRtenOuRUVo9oIQGPC5G9DgK4743cdxvtOw0weQNpZXaS16SCBi5MNjZF8vba3ETURjZpTbVn7Vvcf2eAwFozQ==
      }
    engines: { node: '>=6.9.0' }

  /@babel/helper-wrap-function/7.16.8:
    resolution:
      {
        integrity: sha512-8RpyRVIAW1RcDDGTA+GpPAwV22wXCfKOoM9bet6TLkGIFTkRQSkH1nMQ5Yet4MpoXe1ZwHPVtNasc2w0uZMqnw==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/helper-function-name': 7.17.9
      '@babel/template': 7.16.7
      '@babel/traverse': 7.18.5
      '@babel/types': 7.18.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helpers/7.18.2:
    resolution:
      {
        integrity: sha512-j+d+u5xT5utcQSzrh9p+PaJX94h++KN+ng9b9WEJq7pkUPAd61FGqhjuUEdfknb3E/uDBb7ruwEeKkIxNJPIrg==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/template': 7.16.7
      '@babel/traverse': 7.18.5
      '@babel/types': 7.18.4
    transitivePeerDependencies:
      - supports-color

  /@babel/highlight/7.17.12:
    resolution:
      {
        integrity: sha512-7yykMVF3hfZY2jsHZEEgLc+3x4o1O+fYyULu11GynEUQNwB6lua+IIQn1FiJxNucd5UlyJryrwsOh8PL9Sn8Qg==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/helper-validator-identifier': 7.16.7
      chalk: 2.4.2
      js-tokens: 4.0.0

  /@babel/parser/7.18.5:
    resolution:
      {
        integrity: sha512-YZWVaglMiplo7v8f1oMQ5ZPQr0vn7HPeZXxXWsxXJRjGVrzUFn9OxFQl1sb5wzfootjA/yChhW84BV+383FSOw==
      }
    engines: { node: '>=6.0.0' }
    hasBin: true

  /@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-xCJQXl4EeQ3J9C4yOmpTrtVGmzpm2iSzyxbkZHw7UCnZBftHpF/hpII80uWVyVrc40ytIClHjgWGTG1g/yB+aw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-/vt0hpIw0x4b6BLKUkwlvEoiGZYYLNZ96CzyHYPbtG2jZGz6LBe7/V+drYrc/d+ovrF9NBi0pmtvmNb/FsWtRQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.13.0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-skip-transparent-expression-wrappers': 7.16.0
      '@babel/plugin-proposal-optional-chaining': 7.17.12_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-async-generator-functions/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-RWVvqD1ooLKP6IqWTA5GyFVX2isGEgC5iFxKzfYOIy/QEFdxYyCybBDtIGjipHpb9bDWHzcqGqFakf+mVmBTdQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-remap-async-to-generator': 7.16.8
      '@babel/plugin-syntax-async-generators': 7.8.4_@babel+core@7.17.12
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-class-properties/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-U0mI9q8pW5Q9EaTHFPwSVusPMV/DV9Mm8p7csqROFLtIE9rBF5piLqyrBGigftALrBcsBGu4m38JneAe7ZDLXw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-create-class-features-plugin': 7.18.0_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-class-static-block/7.18.0_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-t+8LsRMMDE74c6sV7KShIw13sqbqd58tlqNrsWoWBTIMw7SVQ0cZ905wLNS/FBCy/3PyooRHLFFlfrUNyyz5lA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.12.0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-create-class-features-plugin': 7.18.0_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-class-static-block': 7.14.5_@babel+core@7.17.12
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-decorators/7.18.2_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-kbDISufFOxeczi0v4NQP3p5kIeW6izn/6klfWBrIIdGZZe4UpHR+QU03FAoWjGGd9SUXAwbw2pup1kaL4OQsJQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-create-class-features-plugin': 7.18.0_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-replace-supers': 7.18.2
      '@babel/helper-split-export-declaration': 7.16.7
      '@babel/plugin-syntax-decorators': 7.17.12_@babel+core@7.17.12
      charcodes: 0.2.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-dynamic-import/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-I8SW9Ho3/8DRSdmDdH3gORdyUuYnk1m4cMxUAdu5oy4n3OfN8flDEH+d60iG7dUfi0KkYwSvoalHzzdRzpWHTg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-export-default-from/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-LpsTRw725eBAXXKUOnJJct+SEaOzwR78zahcLuripD2+dKc2Sj+8Q2DzA+GC/jOpOu/KlDXuxrzG214o1zTauQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-export-default-from': 7.16.7_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-export-namespace-from/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-j7Ye5EWdwoXOpRmo5QmRyHPsDIe6+u70ZYZrd7uz+ebPYFKfRcLcNu3Ro0vOlJ5zuv8rU7xa+GttNiRzX56snQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-export-namespace-from': 7.8.3_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-json-strings/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-rKJ+rKBoXwLnIn7n6o6fulViHMrOThz99ybH+hKHcOZbnN14VuMnH9fo2eHE69C8pO4uX1Q7t2HYYIDmv8VYkg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-json-strings': 7.8.3_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-logical-assignment-operators/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-EqFo2s1Z5yy+JeJu7SFfbIUtToJTVlC61/C7WLKDntSw4Sz6JNAIfL7zQ74VvirxpjB5kz/kIx0gCcb+5OEo2Q==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-nullish-coalescing-operator/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-ws/g3FSGVzv+VH86+QvgtuJL/kR67xaEIF2x0iPqdDfYW6ra6JF3lKVBkWynRLcNtIC1oCTfDRVxmm2mKzy+ag==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-numeric-separator/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-vQgPMknOIgiuVqbokToyXbkY/OmmjAzr/0lhSIbG/KmnzXPGwW/AdhdKpi+O4X/VkWiWjnkKOBiqJrTaC98VKw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-numeric-separator': 7.10.4_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-object-rest-spread/7.12.1_@babel+core@7.12.9:
    resolution:
      {
        integrity: sha512-s6SowJIjzlhx8o7lsFx5zmY4At6CTtDvgNQDdPzkBQucle58A6b/TTeEBYtyDgmcXjUTM+vE8YOGHZzzbc/ioA==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.10.4
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.12.9
      '@babel/plugin-transform-parameters': 7.17.12_@babel+core@7.12.9
    dev: true

  /@babel/plugin-proposal-object-rest-spread/7.18.0_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-nbTv371eTrFabDfHLElkn9oyf9VG+VKK6WMzhY2o4eHKaG19BToD9947zzGMO6I/Irstx9d8CwX6njPNIAR/yw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/compat-data': 7.18.5
      '@babel/core': 7.17.12
      '@babel/helper-compilation-targets': 7.18.2_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-transform-parameters': 7.17.12_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-optional-catch-binding/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-eMOH/L4OvWSZAE1VkHbr1vckLG1WUcHGJSLqqQwl2GaUqG6QjddvrOaTUMNYiv77H5IKPMZ9U9P7EaHwvAShfA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-optional-chaining/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-7wigcOs/Z4YWlK7xxjkvaIw84vGhDv/P1dFGQap0nHkc8gFKY/r+hXc8Qzf5k1gY7CvGIcHqAnOagVKJJ1wVOQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-skip-transparent-expression-wrappers': 7.16.0
      '@babel/plugin-syntax-optional-chaining': 7.8.3_@babel+core@7.17.12
    dev: true

  /@babel/plugin-proposal-private-methods/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-SllXoxo19HmxhDWm3luPz+cPhtoTSKLJE9PXshsfrOzBqs60QP0r8OaJItrPhAj0d7mZMnNF0Y1UUggCDgMz1A==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-create-class-features-plugin': 7.18.0_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-private-property-in-object/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-/6BtVi57CJfrtDNKfK5b66ydK2J5pXUKBKSPD2G1whamMuEnZWgoOIfO8Vf9F/DoD4izBLD/Au4NMQfruzzykg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-create-class-features-plugin': 7.18.0_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-private-property-in-object': 7.14.5_@babel+core@7.17.12
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-unicode-property-regex/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-Wb9qLjXf3ZazqXA7IvI7ozqRIXIGPtSo+L5coFmEkhTQK18ao4UDDD0zdTGAarmbLj2urpRwrc6893cu5Bfh0A==
      }
    engines: { node: '>=4' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-create-regexp-features-plugin': 7.17.12_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-async-generators/7.8.4_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-bigint/7.8.3_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-class-properties/7.12.13_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-class-static-block/7.14.5_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-decorators/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-D1Hz0qtGTza8K2xGyEdVNCYLdVHukAcbQr4K3/s6r/esadyEriZovpJimQOpu8ju4/jV8dW/1xdaE0UpDroidw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-dynamic-import/7.8.3_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-export-default-from/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-4C3E4NsrLOgftKaTYTULhHsuQrGv3FHrBzOMDiS7UYKIpgGBkAdawg4h+EI8zPeK9M0fiIIh72hIwsI24K7MbA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-export-namespace-from/7.8.3_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-flow/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-B8QIgBvkIG6G2jgsOHQUist7Sm0EBLDCx8sen072IwqNuzMegZNXrYnSv77cYzA8mLDZAfQYqsLIhimiP1s2HQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-import-assertions/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-n/loy2zkq9ZEM8tEOwON9wTQSTNDTDEz6NujPtJGLU7qObzT1N4c4YZZf8E6ATB2AjNQg/Ib2AIpO03EZaCehw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-import-meta/7.10.4_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-json-strings/7.8.3_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-jsx/7.12.1_@babel+core@7.12.9:
    resolution:
      {
        integrity: sha512-1yRi7yAtB0ETgxdY9ti/p2TivUxJkTdhu/ZbF9MshVGqOx1TdB3b7xCXs49Fupgg50N45KcAsRP/ZqWjs9SRjg==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-jsx/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-spyY3E3AURfxh/RHtjx5j6hs8am5NbUBGfcZ2vB3uShSpZdQyXSf5rR5Mk76vbtlAZOelyVQ71Fg0x9SG4fsog==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-logical-assignment-operators/7.10.4_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-nullish-coalescing-operator/7.8.3_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-numeric-separator/7.10.4_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-object-rest-spread/7.8.3_@babel+core@7.12.9:
    resolution:
      {
        integrity: sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-object-rest-spread/7.8.3_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-optional-catch-binding/7.8.3_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-optional-chaining/7.8.3_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-private-property-in-object/7.14.5_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-syntax-top-level-await/7.14.5_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-syntax-typescript/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-TYY0SXFiO31YXtNg3HtFwNJHjLsAyIIhAhNWkQ5whPPS7HWUFlg9z0Ta4qAQNjQbP1wsSt/oKkmZ/4/WWdMUpw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12

  /@babel/plugin-transform-arrow-functions/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-PHln3CNi/49V+mza4xMwrg+WGYevSF1oaiXaC2EQfdp4HWlSjRsrDXWJiQBKpP7749u6vQ9mcry2uuFOv5CXvA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-async-to-generator/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-J8dbrWIOO3orDzir57NRsjg4uxucvhby0L/KZuGsWDj0g7twWK3g7JhJhOrXtuXiw8MeiSdJ3E0OW9H8LYEzLQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-module-imports': 7.16.7
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-remap-async-to-generator': 7.16.8
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-block-scoped-functions/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-JUuzlzmF40Z9cXyytcbZEZKckgrQzChbQJw/5PuEHYeqzCsvebDx0K0jWnIIVcmmDOAVctCgnYs0pMcrYj2zJg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-block-scoping/7.18.4_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-+Hq10ye+jlvLEogSOtq4mKvtk7qwcUQ1f0Mrueai866C82f844Yom2cttfJdMdqRLTxWpsbfbkIkOIfovyUQXw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-classes/7.18.4_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-e42NSG2mlKWgxKUAD9EJJSkZxR67+wZqzNxLSpc51T8tRU5SLFHsPmgYR5yr7sdgX4u+iHA1C5VafJ6AyImV3A==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-environment-visitor': 7.18.2
      '@babel/helper-function-name': 7.17.9
      '@babel/helper-optimise-call-expression': 7.16.7
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-replace-supers': 7.18.2
      '@babel/helper-split-export-declaration': 7.16.7
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-computed-properties/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-a7XINeplB5cQUWMg1E/GI1tFz3LfK021IjV1rj1ypE+R7jHm+pIHmHl25VNkZxtx9uuYp7ThGk8fur1HHG7PgQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-destructuring/7.18.0_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-Mo69klS79z6KEfrLg/1WkmVnB8javh75HX4pi2btjvlIoasuxilEyjtsQW6XPrubNd7AQy0MMaNIaQE4e7+PQw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-dotall-regex/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-Lyttaao2SjZF6Pf4vk1dVKv8YypMpomAbygW+mU5cYP3S5cWTfCJjG8xV6CFdzGFlfWK81IjL9viiTvpb6G7gQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-create-regexp-features-plugin': 7.17.12_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-duplicate-keys/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-EA5eYFUG6xeerdabina/xIoB95jJ17mAkR8ivx6ZSu9frKShBjpOGZPn511MTDTkiCO+zXnzNczvUM69YSf3Zw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-exponentiation-operator/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-8UYLSlyLgRixQvlYH3J2ekXFHDFLQutdy7FfFAMm3CPZ6q9wHCwnUyiXpQCe3gVVnQlHc5nsuiEVziteRNTXEA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-builder-binary-assignment-operator-visitor': 7.16.7
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-flow-strip-types/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-g8cSNt+cHCpG/uunPQELdq/TeV3eg1OLJYwxypwHtAWo9+nErH3lQx9CSO2uI9lF74A0mR0t4KoMjs1snSgnTw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-flow': 7.17.12_@babel+core@7.17.12
    dev: true

  /@babel/plugin-transform-for-of/7.18.1_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-+TTB5XwvJ5hZbO8xvl2H4XaMDOAK57zF4miuC9qQJgysPNEAZZ9Z69rdF5LJkozGdZrjBIUAIyKUWRMmebI7vg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-function-name/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-SU/C68YVwTRxqWj5kgsbKINakGag0KTgq9f2iZEXdStoAbOzLHEBRYzImmA6yFo8YZhJVflvXmIHUO7GWHmxxA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-compilation-targets': 7.18.2_@babel+core@7.17.12
      '@babel/helper-function-name': 7.17.9
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-literals/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-8iRkvaTjJciWycPIZ9k9duu663FT7VrBdNqNgxnVXEFwOIp55JWcZd23VBRySYbnS3PwQ3rGiabJBBBGj5APmQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-member-expression-literals/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-mBruRMbktKQwbxaJof32LT9KLy2f3gH+27a5XSuXo6h7R3vqltl0PgZ80C8ZMKw98Bf8bqt6BEVi3svOh2PzMw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-modules-amd/7.18.0_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-h8FjOlYmdZwl7Xm2Ug4iX2j7Qy63NANI+NQVWQzv6r25fqgg7k2dZl03p95kvqNclglHs4FZ+isv4p1uXMA+QA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-module-transforms': 7.18.0
      '@babel/helper-plugin-utils': 7.17.12
      babel-plugin-dynamic-import-node: 2.3.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-modules-commonjs/7.18.2_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-f5A865gFPAJAEE0K7F/+nm5CmAE3y8AWlMBG9unu5j9+tk50UQVK0QS8RNxSp7MJf0wh97uYyLWt3Zvu71zyOQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-module-transforms': 7.18.0
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-simple-access': 7.18.2
      babel-plugin-dynamic-import-node: 2.3.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-modules-systemjs/7.18.5_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-SEewrhPpcqMF1V7DhnEbhVJLrC+nnYfe1E0piZMZXBpxi9WvZqWGwpsk7JYP7wPWeqaBh4gyKlBhHJu3uz5g4Q==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-hoist-variables': 7.16.7
      '@babel/helper-module-transforms': 7.18.0
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-validator-identifier': 7.16.7
      babel-plugin-dynamic-import-node: 2.3.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-modules-umd/7.18.0_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-d/zZ8I3BWli1tmROLxXLc9A6YXvGK8egMxHp+E/rRwMh1Kip0AP77VwZae3snEJ33iiWwvNv2+UIIhfalqhzZA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-module-transforms': 7.18.0
      '@babel/helper-plugin-utils': 7.17.12
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-named-capturing-groups-regex/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-vWoWFM5CKaTeHrdUJ/3SIOTRV+MBVGybOC9mhJkaprGNt5demMymDW24yC74avb915/mIRe3TgNb/d8idvnCRA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-create-regexp-features-plugin': 7.17.12_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-new-target/7.18.5_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-TuRL5uGW4KXU6OsRj+mLp9BM7pO8e7SGNTEokQRRxHFkXYMFiy2jlKSZPFtI/mKORDzciH+hneskcSOp0gU8hg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-object-super/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-14J1feiQVWaGvRxj2WjyMuXS2jsBkgB3MdSN5HuC2G5nRspa5RK9COcs82Pwy5BuGcjb+fYaUj94mYcOj7rCvw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-replace-supers': 7.18.2
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-parameters/7.17.12_@babel+core@7.12.9:
    resolution:
      {
        integrity: sha512-6qW4rWo1cyCdq1FkYri7AHpauchbGLXpdwnYsfxFb+KtddHENfsY5JZb35xUwkK5opOLcJ3BNd2l7PhRYGlwIA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-parameters/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-6qW4rWo1cyCdq1FkYri7AHpauchbGLXpdwnYsfxFb+KtddHENfsY5JZb35xUwkK5opOLcJ3BNd2l7PhRYGlwIA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-property-literals/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-z4FGr9NMGdoIl1RqavCqGG+ZuYjfZ/hkCIeuH6Do7tXmSm0ls11nYVSJqFEUOSJbDab5wC6lRE/w6YjVcr6Hqw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-react-display-name/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-qgIg8BcZgd0G/Cz916D5+9kqX0c7nPZyXaP8R2tLNN5tkyIZdG5fEwBrxwplzSnjC1jvQmyMNVwUCZPcbGY7Pg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-react-jsx-development/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-RMvQWvpla+xy6MlBpPlrKZCMRs2AGiHOGHY3xRwl0pEeim348dDyxeH4xBsMPbIMhujeq7ihE702eM2Ew0Wo+A==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/plugin-transform-react-jsx': 7.17.12_@babel+core@7.17.12
    dev: true

  /@babel/plugin-transform-react-jsx/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-Lcaw8bxd1DKht3thfD4A12dqo1X16he1Lm8rIv8sTwjAYNInRS1qHa9aJoqvzpscItXvftKDCfaEQzwoVyXpEQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-module-imports': 7.16.7
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-jsx': 7.17.12_@babel+core@7.17.12
      '@babel/types': 7.18.4
    dev: true

  /@babel/plugin-transform-react-pure-annotations/7.18.0_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-6+0IK6ouvqDn9bmEG7mEyF/pwlJXVj5lwydybpyyH3D0A7Hftk+NCTdYjnLNZksn261xaOV5ksmp20pQEmc2RQ==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-regenerator/7.18.0_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-C8YdRw9uzx25HSIzwA7EM7YP0FhCe5wNvJbZzjVNHHPGVcDJ3Aie+qGYYdS1oVQgn+B3eAIJbWFLrJ4Jipv7nw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      regenerator-transform: 0.15.0
    dev: true

  /@babel/plugin-transform-reserved-words/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-1KYqwbJV3Co03NIi14uEHW8P50Md6KqFgt0FfpHdK6oyAHQVTosgPuPSiWud1HX0oYJ1hGRRlk0fP87jFpqXZA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-shorthand-properties/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-hah2+FEnoRoATdIb05IOXf+4GzXYTq75TVhIn1PewihbpyrNWUt2JbudKQOETWw6QpLe+AIUpJ5MVLYTQbeeUg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-spread/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-9pgmuQAtFi3lpNUstvG9nGfk9DkrdmWNp9KeKPFmuZCpEnxRzYlS8JgwPjYj+1AWDOSvoGN0H30p1cBOmT/Svg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-skip-transparent-expression-wrappers': 7.16.0
    dev: true

  /@babel/plugin-transform-sticky-regex/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-NJa0Bd/87QV5NZZzTuZG5BPJjLYadeSZ9fO6oOUoL4iQx+9EEuw/eEM92SrsT19Yc2jgB1u1hsjqDtH02c3Drw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-template-literals/7.18.2_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-/cmuBVw9sZBGZVOMkpAEaVLwm4JmK2GZ1dFKOGGpMzEHWFmyZZ59lUU0PdRr8YNYeQdNzTDwuxP2X2gzydTc9g==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-typeof-symbol/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-Q8y+Jp7ZdtSPXCThB6zjQ74N3lj0f6TDh1Hnf5B+sYlzQ8i5Pjp8gW0My79iekSpT4WnI06blqP6DT0OmaXXmw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-typescript/7.18.4_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-l4vHuSLUajptpHNEOUDEGsnpl9pfRLsN1XUoDQDD/YBuXTM+v37SHGS+c6n4jdcZy96QtuUuSvZYMLSSsjH8Mw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-create-class-features-plugin': 7.18.0_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-syntax-typescript': 7.17.12_@babel+core@7.17.12
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-unicode-escapes/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-TAV5IGahIz3yZ9/Hfv35TV2xEm+kaBDaZQCn2S/hG9/CZ0DktxJv9eKfPc7yYCvOYR4JGx1h8C+jcSOvgaaI/Q==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/plugin-transform-unicode-regex/7.16.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-oC5tYYKw56HO75KZVLQ+R/Nl3Hro9kf8iG0hXoaHP7tjAyCpvqBiSNe6vGrZni1Z6MggmUOC6A7VP7AVmw225Q==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-create-regexp-features-plugin': 7.17.12_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
    dev: true

  /@babel/preset-env/7.18.2_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-PfpdxotV6afmXMU47S08F9ZKIm2bJIQ0YbAAtDfIENX7G1NUAXigLREh69CWDjtgUy7dYn7bsMzkgdtAlmS68Q==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/compat-data': 7.18.5
      '@babel/core': 7.17.12
      '@babel/helper-compilation-targets': 7.18.2_@babel+core@7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-validator-option': 7.16.7
      '@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-async-generator-functions': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-class-properties': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-class-static-block': 7.18.0_@babel+core@7.17.12
      '@babel/plugin-proposal-dynamic-import': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-proposal-export-namespace-from': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-json-strings': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-logical-assignment-operators': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-nullish-coalescing-operator': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-numeric-separator': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-proposal-object-rest-spread': 7.18.0_@babel+core@7.17.12
      '@babel/plugin-proposal-optional-catch-binding': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-proposal-optional-chaining': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-private-methods': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-private-property-in-object': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-unicode-property-regex': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-syntax-async-generators': 7.8.4_@babel+core@7.17.12
      '@babel/plugin-syntax-class-properties': 7.12.13_@babel+core@7.17.12
      '@babel/plugin-syntax-class-static-block': 7.14.5_@babel+core@7.17.12
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-export-namespace-from': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-import-assertions': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-syntax-json-strings': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4_@babel+core@7.17.12
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-numeric-separator': 7.10.4_@babel+core@7.17.12
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-optional-chaining': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-private-property-in-object': 7.14.5_@babel+core@7.17.12
      '@babel/plugin-syntax-top-level-await': 7.14.5_@babel+core@7.17.12
      '@babel/plugin-transform-arrow-functions': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-async-to-generator': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-block-scoped-functions': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-block-scoping': 7.18.4_@babel+core@7.17.12
      '@babel/plugin-transform-classes': 7.18.4_@babel+core@7.17.12
      '@babel/plugin-transform-computed-properties': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-destructuring': 7.18.0_@babel+core@7.17.12
      '@babel/plugin-transform-dotall-regex': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-duplicate-keys': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-exponentiation-operator': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-for-of': 7.18.1_@babel+core@7.17.12
      '@babel/plugin-transform-function-name': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-literals': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-member-expression-literals': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-modules-amd': 7.18.0_@babel+core@7.17.12
      '@babel/plugin-transform-modules-commonjs': 7.18.2_@babel+core@7.17.12
      '@babel/plugin-transform-modules-systemjs': 7.18.5_@babel+core@7.17.12
      '@babel/plugin-transform-modules-umd': 7.18.0_@babel+core@7.17.12
      '@babel/plugin-transform-named-capturing-groups-regex': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-new-target': 7.18.5_@babel+core@7.17.12
      '@babel/plugin-transform-object-super': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-parameters': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-property-literals': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-regenerator': 7.18.0_@babel+core@7.17.12
      '@babel/plugin-transform-reserved-words': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-shorthand-properties': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-spread': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-sticky-regex': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-template-literals': 7.18.2_@babel+core@7.17.12
      '@babel/plugin-transform-typeof-symbol': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-unicode-escapes': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-unicode-regex': 7.16.7_@babel+core@7.17.12
      '@babel/preset-modules': 0.1.5_@babel+core@7.17.12
      '@babel/types': 7.18.4
      babel-plugin-polyfill-corejs2: 0.3.1_@babel+core@7.17.12
      babel-plugin-polyfill-corejs3: 0.5.2_@babel+core@7.17.12
      babel-plugin-polyfill-regenerator: 0.3.1_@babel+core@7.17.12
      core-js-compat: 3.23.1
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/preset-flow/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-7QDz7k4uiaBdu7N89VKjUn807pJRXmdirQu0KyR9LXnQrr5Jt41eIMKTS7ljej+H29erwmMrwq9Io9mJHLI3Lw==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-validator-option': 7.16.7
      '@babel/plugin-transform-flow-strip-types': 7.17.12_@babel+core@7.17.12
    dev: true

  /@babel/preset-modules/0.1.5_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-A57th6YRG7oR3cq/yt/Y84MvGgE0eJG2F1JLhKuyG+jFxEgrd/HAMJatiFtmOiZurz+0DkrvbheCLaV5f2JfjA==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/plugin-proposal-unicode-property-regex': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-dotall-regex': 7.16.7_@babel+core@7.17.12
      '@babel/types': 7.18.4
      esutils: 2.0.3
    dev: true

  /@babel/preset-react/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-h5U+rwreXtZaRBEQhW1hOJLMq8XNJBQ/9oymXiCXTuT/0uOwpbT0gUt+sXeOqoXBgNuUKI7TaObVwoEyWkpFgA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-validator-option': 7.16.7
      '@babel/plugin-transform-react-display-name': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-react-jsx': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-react-jsx-development': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-react-pure-annotations': 7.18.0_@babel+core@7.17.12
    dev: true

  /@babel/preset-typescript/7.17.12_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-S1ViF8W2QwAKUGJXxP9NAfNaqGDdEBJKpYkxHf5Yy2C4NPPzXGeR3Lhk7G8xJaaLcFTRfNjVbtbVtm8Gb0mqvg==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-plugin-utils': 7.17.12
      '@babel/helper-validator-option': 7.16.7
      '@babel/plugin-transform-typescript': 7.18.4_@babel+core@7.17.12
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/register/7.17.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-fg56SwvXRifootQEDQAu1mKdjh5uthPzdO0N6t358FktfL4XjAVXuH58ULoiW8mesxiOgNIrxiImqEwv0+hRRA==
      }
    engines: { node: '>=6.9.0' }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      clone-deep: 4.0.1
      find-cache-dir: 2.1.0
      make-dir: 2.1.0
      pirates: 4.0.5
      source-map-support: 0.5.21
    dev: true

  /@babel/runtime/7.18.3:
    resolution:
      {
        integrity: sha512-38Y8f7YUhce/K7RMwTp7m0uCumpv9hZkitCbBClqQIow1qSbCvGkcegKOXpEWCQLfWmevgRiWokZ1GkpfhbZug==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      regenerator-runtime: 0.13.9
    dev: true

  /@babel/template/7.16.7:
    resolution:
      {
        integrity: sha512-I8j/x8kHUrbYRTUxXrrMbfCa7jxkE7tZre39x3kjr9hvI82cK1FfqLygotcWN5kdPGWcLdWMHpSBavse5tWw3w==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/code-frame': 7.16.7
      '@babel/parser': 7.18.5
      '@babel/types': 7.18.4

  /@babel/traverse/7.18.5:
    resolution:
      {
        integrity: sha512-aKXj1KT66sBj0vVzk6rEeAO6Z9aiiQ68wfDgge3nHhA/my6xMM/7HGQUNumKZaoa2qUPQ5whJG9aAifsxUKfLA==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/code-frame': 7.16.7
      '@babel/generator': 7.18.2
      '@babel/helper-environment-visitor': 7.18.2
      '@babel/helper-function-name': 7.17.9
      '@babel/helper-hoist-variables': 7.16.7
      '@babel/helper-split-export-declaration': 7.16.7
      '@babel/parser': 7.18.5
      '@babel/types': 7.18.4
      debug: 4.3.4
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color

  /@babel/types/7.18.4:
    resolution:
      {
        integrity: sha512-ThN1mBcMq5pG/Vm2IcBmPPfyPXbd8S02rS+OBIDENdufvqC7Z/jHPCv9IcP01277aKtDI8g/2XysBN4hA8niiw==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      '@babel/helper-validator-identifier': 7.16.7
      to-fast-properties: 2.0.0

  /@balena/dockerignore/1.0.2:
    resolution:
      {
        integrity: sha512-wMue2Sy4GAVTk6Ic4tJVcnfdau+gx2EnG7S+uAEe+TWJFqE4YoWN4/H8MSLj4eYJKxGg26lZwboEniNiNwZQ6Q==
      }
    dev: true

  /@base2/pretty-print-object/1.0.1:
    resolution:
      {
        integrity: sha512-4iri8i1AqYHJE2DstZYkyEprg6Pq6sKx3xn5FpySk9sNhH7qN2LLlHJCfDTZRILNwQNPD7mATWM0TBui7uC1pA==
      }
    dev: true

  /@bcoe/v8-coverage/0.2.3:
    resolution:
      {
        integrity: sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw==
      }

  /@cnakazawa/watch/1.0.4:
    resolution:
      {
        integrity: sha512-v9kIhKwjeZThiWrLmj0y17CWoyddASLj9O2yvbZkbvw/N3rWOYy9zkV66ursAoVr0mV15bL8g0c4QZUE6cdDoQ==
      }
    engines: { node: '>=0.1.95' }
    hasBin: true
    dependencies:
      exec-sh: 0.3.6
      minimist: 1.2.6
    dev: true

  /@colors/colors/1.5.0:
    resolution:
      {
        integrity: sha512-ooWCrlZP11i8GImSjTHYHLkvFDP48nS4+204nGb1RiX/WXYHmJA2III9/e2DWVabCESdW7hBAEzHRqUn9OUVvQ==
      }
    engines: { node: '>=0.1.90' }
    requiresBuild: true
    dev: true
    optional: true

  /@cspotcode/source-map-support/0.8.1:
    resolution:
      {
        integrity: sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==
      }
    engines: { node: '>=12' }
    dependencies:
      '@jridgewell/trace-mapping': 0.3.9

  /@discoveryjs/json-ext/0.5.7:
    resolution:
      {
        integrity: sha512-dBVuXR082gk3jsFp7Rd/JI4kytwGHecnCoTtXFb7DB6CNHp4rg5k1bhg0nWdLGLnOV71lmDzGQaLMy8iPLY0pw==
      }
    engines: { node: '>=10.0.0' }
    dev: true

  /@emotion/cache/10.0.29:
    resolution:
      {
        integrity: sha512-fU2VtSVlHiF27empSbxi1O2JFdNWZO+2NFHfwO0pxgTep6Xa3uGb+3pVKfLww2l/IBGLNEZl5Xf/++A4wAYDYQ==
      }
    dependencies:
      '@emotion/sheet': 0.9.4
      '@emotion/stylis': 0.8.5
      '@emotion/utils': 0.11.3
      '@emotion/weak-memoize': 0.2.5
    dev: true

  /@emotion/core/10.3.1_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-447aUEjPIm0MnE6QYIaFz9VQOHSXf4Iu6EWOIqq11EAPqinkSZmfymPTmlOE3QjLv846lH4JVZBUOtwGbuQoww==
      }
    peerDependencies:
      '@types/react': '>=16'
      react: '>=16.3.0'
    dependencies:
      '@babel/runtime': 7.18.3
      '@emotion/cache': 10.0.29
      '@emotion/css': 10.0.27
      '@emotion/serialize': 0.11.16
      '@emotion/sheet': 0.9.4
      '@emotion/utils': 0.11.3
      '@types/react': 16.14.23
      react: 16.13.1
    dev: true

  /@emotion/css/10.0.27:
    resolution:
      {
        integrity: sha512-6wZjsvYeBhyZQYNrGoR5yPMYbMBNEnanDrqmsqS1mzDm1cOTu12shvl2j4QHNS36UaTE0USIJawCH9C8oW34Zw==
      }
    dependencies:
      '@emotion/serialize': 0.11.16
      '@emotion/utils': 0.11.3
      babel-plugin-emotion: 10.2.2
    dev: true

  /@emotion/hash/0.8.0:
    resolution:
      {
        integrity: sha512-kBJtf7PH6aWwZ6fka3zQ0p6SBYzx4fl1LoZXE2RrnYST9Xljm7WfKJrU4g/Xr3Beg72MLrp1AWNUmuYJTL7Cow==
      }
    dev: true

  /@emotion/is-prop-valid/0.8.8:
    resolution:
      {
        integrity: sha512-u5WtneEAr5IDG2Wv65yhunPSMLIpuKsbuOktRojfrEiEvRyC85LgPMZI63cr7NUqT8ZIGdSVg8ZKGxIug4lXcA==
      }
    dependencies:
      '@emotion/memoize': 0.7.4
    dev: true

  /@emotion/memoize/0.7.4:
    resolution:
      {
        integrity: sha512-Ja/Vfqe3HpuzRsG1oBtWTHk2PGZ7GR+2Vz5iYGelAw8dx32K0y7PjVuxK6z1nMpZOqAFsRUPCkK1YjJ56qJlgw==
      }
    dev: true

  /@emotion/memoize/0.7.5:
    resolution:
      {
        integrity: sha512-igX9a37DR2ZPGYtV6suZ6whr8pTFtyHL3K/oLUotxpSVO2ASaprmAe2Dkq7tBo7CRY7MMDrAa9nuQP9/YG8FxQ==
      }
    dev: true

  /@emotion/serialize/0.11.16:
    resolution:
      {
        integrity: sha512-G3J4o8by0VRrO+PFeSc3js2myYNOXVJ3Ya+RGVxnshRYgsvErfAOglKAiy1Eo1vhzxqtUvjCyS5gtewzkmvSSg==
      }
    dependencies:
      '@emotion/hash': 0.8.0
      '@emotion/memoize': 0.7.4
      '@emotion/unitless': 0.7.5
      '@emotion/utils': 0.11.3
      csstype: 2.6.20
    dev: true

  /@emotion/serialize/1.0.4:
    resolution:
      {
        integrity: sha512-1JHamSpH8PIfFwAMryO2bNka+y8+KA5yga5Ocf2d7ZEiJjb7xlLW7aknBGZqJLajuLOvJ+72vN+IBSwPlXD1Pg==
      }
    dependencies:
      '@emotion/hash': 0.8.0
      '@emotion/memoize': 0.7.5
      '@emotion/unitless': 0.7.5
      '@emotion/utils': 1.1.0
      csstype: 3.1.0
    dev: true

  /@emotion/sheet/0.9.4:
    resolution:
      {
        integrity: sha512-zM9PFmgVSqBw4zL101Q0HrBVTGmpAxFZH/pYx/cjJT5advXguvcgjHFTCaIO3enL/xr89vK2bh0Mfyj9aa0ANA==
      }
    dev: true

  /@emotion/styled-base/10.3.0_tpm53lxjhhnjmtj6wgjp3t3pxi:
    resolution:
      {
        integrity: sha512-PBRqsVKR7QRNkmfH78hTSSwHWcwDpecH9W6heujWAcyp2wdz/64PP73s7fWS1dIPm8/Exc8JAzYS8dEWXjv60w==
      }
    peerDependencies:
      '@emotion/core': ^10.0.28
      '@types/react': '>=16'
      react: '>=16.3.0'
    dependencies:
      '@babel/runtime': 7.18.3
      '@emotion/core': 10.3.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@emotion/is-prop-valid': 0.8.8
      '@emotion/serialize': 0.11.16
      '@emotion/utils': 0.11.3
      '@types/react': 16.14.23
      react: 16.13.1
    dev: true

  /@emotion/styled/10.3.0_tpm53lxjhhnjmtj6wgjp3t3pxi:
    resolution:
      {
        integrity: sha512-GgcUpXBBEU5ido+/p/mCT2/Xx+Oqmp9JzQRuC+a4lYM4i4LBBn/dWvc0rQ19N9ObA8/T4NWMrPNe79kMBDJqoQ==
      }
    peerDependencies:
      '@emotion/core': ^10.0.27
      '@types/react': '>=16'
      react: '>=16.3.0'
    dependencies:
      '@emotion/core': 10.3.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@emotion/styled-base': 10.3.0_tpm53lxjhhnjmtj6wgjp3t3pxi
      '@types/react': 16.14.23
      babel-plugin-emotion: 10.2.2
      react: 16.13.1
    dev: true

  /@emotion/stylis/0.8.5:
    resolution:
      {
        integrity: sha512-h6KtPihKFn3T9fuIrwvXXUOwlx3rfUvfZIcP5a6rh8Y7zjE3O06hT5Ss4S/YI1AYhuZ1kjaE/5EaOOI2NqSylQ==
      }
    dev: true

  /@emotion/unitless/0.7.5:
    resolution:
      {
        integrity: sha512-OWORNpfjMsSSUBVrRBVGECkhWcULOAJz9ZW8uK9qgxD+87M7jHRcvh/A96XXNhXTLmKcoYSQtBEX7lHMO7YRwg==
      }
    dev: true

  /@emotion/utils/0.11.3:
    resolution:
      {
        integrity: sha512-0o4l6pZC+hI88+bzuaX/6BgOvQVhbt2PfmxauVaYOGgbsAw14wdKyvMCZXnsnsHys94iadcF+RG/wZyx6+ZZBw==
      }
    dev: true

  /@emotion/utils/1.1.0:
    resolution:
      {
        integrity: sha512-iRLa/Y4Rs5H/f2nimczYmS5kFJEbpiVvgN3XVfZ022IYhuNA1IRSHEizcof88LtCTXtl9S2Cxt32KgaXEu72JQ==
      }
    dev: true

  /@emotion/weak-memoize/0.2.5:
    resolution:
      {
        integrity: sha512-6U71C2Wp7r5XtFtQzYrW5iKFT67OixrSxjI4MptCHzdSVlgabczzqLe0ZSgnub/5Kp4hSbpDB1tMytZY9pwxxA==
      }
    dev: true

  /@eslint/eslintrc/0.4.3:
    resolution:
      {
        integrity: sha512-J6KFFz5QCYUJq3pf0mjEcCJVERbzv71PUIDczuh9JkwGEzced6CO5ADLHB1rbf/+oPBtoPfMYNOpGDzCANlbXw==
      }
    engines: { node: ^10.12.0 || >=12.0.0 }
    dependencies:
      ajv: 6.12.6
      debug: 4.3.4
      espree: 7.3.1
      globals: 13.15.0
      ignore: 4.0.6
      import-fresh: 3.3.0
      js-yaml: 3.13.1
      minimatch: 3.1.2
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@eslint/eslintrc/1.3.0:
    resolution:
      {
        integrity: sha512-UWW0TMTmk2d7hLcWD1/e2g5HDM/HQ3csaLSqXCfqwh4uNDuNqlaKWXmEsL4Cs41Z0KnILNvwbHAah3C2yt06kw==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    dependencies:
      ajv: 6.12.6
      debug: 4.3.4
      espree: 9.3.2
      globals: 13.15.0
      ignore: 5.2.0
      import-fresh: 3.3.0
      js-yaml: 4.1.0
      minimatch: 3.1.2
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color

  /@fastify/ajv-compiler/1.1.0:
    resolution:
      {
        integrity: sha512-gvCOUNpXsWrIQ3A4aXCLIdblL0tDq42BG/2Xw7oxbil9h11uow10ztS2GuFazNBfjbrsZ5nl+nPl5jDSjj5TSg==
      }
    dependencies:
      ajv: 6.12.6
    dev: false

  /@fastify/forwarded/1.0.0:
    resolution:
      {
        integrity: sha512-VoO+6WD0aRz8bwgJZ8pkkxjq7o/782cQ1j945HWg0obZMgIadYW3Pew0+an+k1QL7IPZHM3db5WF6OP6x4ymMA==
      }
    engines: { node: '>= 10' }
    dev: false

  /@fastify/proxy-addr/3.0.0:
    resolution:
      {
        integrity: sha512-ty7wnUd/GeSqKTC2Jozsl5xGbnxUnEFC0On2/zPv/8ixywipQmVZwuWvNGnBoitJ2wixwVqofwXNua8j6Y62lQ==
      }
    dependencies:
      '@fastify/forwarded': 1.0.0
      ipaddr.js: 2.0.1
    dev: false

  /@fluentui/date-time-utilities/8.5.2:
    resolution:
      {
        integrity: sha512-u540ACUdnC+Jms1DIHkho80eJmoCg/LtAzR4a/1Tum6PicxWv59UYp9Ba7qFbIw+mrjWnwX/2ZmBpqTy9Rgn7w==
      }
    dependencies:
      '@fluentui/set-version': 8.2.2
      tslib: 2.3.1
    dev: false

  /@fluentui/dom-utilities/2.2.2:
    resolution:
      {
        integrity: sha512-puklLc6Jvg279OGagqkSfuHML6ckBhw3gJakdvIZHKeJiduh+34U4Finl3K24yBSXzG2WsN+LwLTd1Vcociy+g==
      }
    dependencies:
      '@fluentui/set-version': 8.2.2
      tslib: 2.3.1
    dev: false

  /@fluentui/font-icons-mdl2/8.4.13_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-rXJpRKxHg68zCKTrcmouklGpE/laXlTQaLyBuft8EcPczZX3aupYPZda9sp+Kknolmd3Lvypn2D9Vf+McJDtwg==
      }
    dependencies:
      '@fluentui/set-version': 8.2.2
      '@fluentui/style-utilities': 8.7.12_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/utilities': 8.13.1_qjwx5m6wssz3lnb35xwkc3pz6q
      tslib: 2.3.1
    transitivePeerDependencies:
      - '@types/react'
      - react
    dev: false

  /@fluentui/foundation-legacy/8.2.20_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-iyJSr5Y/yYt0x9yBLP+aIy5U9tiDlgbxJZo6enNwFo0zEuBeWg/2L2IgAUzAwJB2vb73oQBlQt8In602R0Vj8w==
      }
    peerDependencies:
      '@types/react': '>=16.8.0 <18.0.0'
      react: '>=16.8.0 <18.0.0'
    dependencies:
      '@fluentui/merge-styles': 8.5.3
      '@fluentui/set-version': 8.2.2
      '@fluentui/style-utilities': 8.7.12_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/utilities': 8.13.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@types/react': 16.14.23
      react: 16.13.1
      tslib: 2.3.1
    dev: false

  /@fluentui/keyboard-key/0.4.2:
    resolution:
      {
        integrity: sha512-6WdMrnFpY94uWefUGGRqO4WiS6R+Kso6/FR95SxXMuS6kfnjGJCHzywFGZcN5OU1fX067Zna4aPQ/nDwYMgBPw==
      }
    dependencies:
      tslib: 2.3.1
    dev: false

  /@fluentui/merge-styles/8.5.3:
    resolution:
      {
        integrity: sha512-bHWftN3zTp1bbBfmAEH8YK9UURWj2mffw7b7VaW2Og1qxwv3GMSza1cyv/d3EVqpMJ8AVwFv3mbi9p1ieMN9mw==
      }
    dependencies:
      '@fluentui/set-version': 8.2.2
      tslib: 2.3.1
    dev: false

  /@fluentui/react-focus/8.8.5_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-+BNjLHKpA0IqUToY9MMARGpYg3ngBmW+1KhJeVxCUnAESNMwnzJ6hx/3MOYUA/FPbYfBvs8QnpTZrrOd7sLG/A==
      }
    peerDependencies:
      '@types/react': '>=16.8.0 <18.0.0'
      react: '>=16.8.0 <18.0.0'
    dependencies:
      '@fluentui/keyboard-key': 0.4.2
      '@fluentui/merge-styles': 8.5.3
      '@fluentui/set-version': 8.2.2
      '@fluentui/style-utilities': 8.7.12_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/utilities': 8.13.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@types/react': 16.14.23
      react: 16.13.1
      tslib: 2.3.1
    dev: false

  /@fluentui/react-hooks/8.6.11_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-qQAg/Hqchz0BGL1KJhg211uhhBDxF0bvMCdVKVoeeJNj4q3Cdvam87zHi7/W5gP8i6jgCILr7MrV3dH9umA/Sw==
      }
    peerDependencies:
      '@types/react': '>=16.8.0 <18.0.0'
      react: '>=16.8.0 <18.0.0'
    dependencies:
      '@fluentui/react-window-provider': 2.2.2_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/set-version': 8.2.2
      '@fluentui/utilities': 8.13.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@types/react': 16.14.23
      react: 16.13.1
      tslib: 2.3.1
    dev: false

  /@fluentui/react-portal-compat-context/9.0.2_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-dZiXbi01rjs4mTbHOiwSGG8JkUYGNlt+hOJhfGQobzRfFRU8ZMJpsY+8AeIcXfT08vIapjC5ofI5Nscpp0PftQ==
      }
    peerDependencies:
      '@types/react': '>=16.8.0 <18.0.0'
      react: '>=16.8.0 <18.0.0'
    dependencies:
      '@types/react': 16.14.23
      react: 16.13.1
      tslib: 2.3.1
    dev: false

  /@fluentui/react-window-provider/2.2.2_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-/1uQ01HqGRpUOMozUy1FYmxp6blZZvtKN50rqxnQJr8O1bcpg8lJzhq064E8EjOXfdNh47zKSloP4ebbDI5vrw==
      }
    peerDependencies:
      '@types/react': '>=16.8.0 <18.0.0'
      react: '>=16.8.0 <18.0.0'
    dependencies:
      '@fluentui/set-version': 8.2.2
      '@types/react': 16.14.23
      react: 16.13.1
      tslib: 2.3.1
    dev: false

  /@fluentui/react/8.96.1_tlqvpdqnq63ssdllbmshthdmo4:
    resolution:
      {
        integrity: sha512-TzF4B3PTlPmpRirijwrGJTqOBmmlYnm42Y2XOZXKdIB48h1ZibqfXwSA8t/wpNYTNHBF5v4PtITTCIvnfhzMoA==
      }
    peerDependencies:
      '@types/react': '>=16.8.0 <18.0.0'
      '@types/react-dom': '>=16.8.0 <18.0.0'
      react: '>=16.8.0 <18.0.0'
      react-dom: '>=16.8.0 <18.0.0'
    dependencies:
      '@fluentui/date-time-utilities': 8.5.2
      '@fluentui/font-icons-mdl2': 8.4.13_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/foundation-legacy': 8.2.20_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/merge-styles': 8.5.3
      '@fluentui/react-focus': 8.8.5_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/react-hooks': 8.6.11_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/react-portal-compat-context': 9.0.2_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/react-window-provider': 2.2.2_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/set-version': 8.2.2
      '@fluentui/style-utilities': 8.7.12_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/theme': 2.6.16_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/utilities': 8.13.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@microsoft/load-themed-styles': 1.10.295
      '@types/react': 16.14.23
      '@types/react-dom': 16.9.14
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      tslib: 2.3.1
    dev: false

  /@fluentui/set-version/8.2.2:
    resolution:
      {
        integrity: sha512-Vg20KZ0ufgWjxx6GFbqC5wiVxXZDUWgNT0r0By/Eyj4bUSb1jG6lmf5z1oY1dUX0YS6Cp5e6GnvbNdXg5E7orA==
      }
    dependencies:
      tslib: 2.3.1
    dev: false

  /@fluentui/style-utilities/8.7.12_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-Ayxyo5brZxNI3CK4la+esJ5yDUQFAD26+BqjbIZvXemKq6ZsZDb2875H//saSVHc+dRq8R6J80A1GGV0fJpIEA==
      }
    dependencies:
      '@fluentui/merge-styles': 8.5.3
      '@fluentui/set-version': 8.2.2
      '@fluentui/theme': 2.6.16_qjwx5m6wssz3lnb35xwkc3pz6q
      '@fluentui/utilities': 8.13.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@microsoft/load-themed-styles': 1.10.295
      tslib: 2.3.1
    transitivePeerDependencies:
      - '@types/react'
      - react
    dev: false

  /@fluentui/theme/2.6.16_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-Ml2oMVvoOxRYD9HPjEkGCWvnQnzDyrufa5k8bPYN8xjJbbEGtDjjswcfrSVfHx1fCR1CFgybHR8jj3pvXRTXUQ==
      }
    peerDependencies:
      '@types/react': '>=16.8.0 <18.0.0'
      react: '>=16.8.0 <18.0.0'
    dependencies:
      '@fluentui/merge-styles': 8.5.3
      '@fluentui/set-version': 8.2.2
      '@fluentui/utilities': 8.13.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@types/react': 16.14.23
      react: 16.13.1
      tslib: 2.3.1
    dev: false

  /@fluentui/utilities/8.13.1_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-BpLa0lSYnZ3YoTGB6T/pQ0vUVq0PEr6gF+daptyeiLUkEXVoy3HYgX6ZanA62wJ89ycIwI8A+1aUEbmtDMupYg==
      }
    peerDependencies:
      '@types/react': '>=16.8.0 <18.0.0'
      react: '>=16.8.0 <18.0.0'
    dependencies:
      '@fluentui/dom-utilities': 2.2.2
      '@fluentui/merge-styles': 8.5.3
      '@fluentui/set-version': 8.2.2
      '@types/react': 16.14.23
      react: 16.13.1
      tslib: 2.3.1
    dev: false

  /@gar/promisify/1.1.3:
    resolution:
      {
        integrity: sha512-k2Ty1JcVojjJFwrg/ThKi2ujJ7XNLYaFGNB/bWT9wGR+oSMJHMa5w+CUq6p/pVrKeNNgA7pCqEcjSnHVoqJQFw==
      }
    dev: true

  /@graphql-tools/load-files/6.5.4_graphql@15.8.0:
    resolution:
      {
        integrity: sha512-l9HAtTr/uivUCSw06NH/xrvchh9jiI/ASQj3bp6GfhoCP8vaqWayVnCsRIew2r7MLXO9+DBXYSLu2Sh/ImfNrA==
      }
    peerDependencies:
      graphql: ^14.0.0 || ^15.0.0 || ^16.0.0 || ^17.0.0
    dependencies:
      globby: 11.1.0
      graphql: 15.8.0
      tslib: 2.4.0
      unixify: 1.0.0
    dev: true

  /@graphql-tools/merge/6.2.17_graphql@15.8.0:
    resolution:
      {
        integrity: sha512-G5YrOew39fZf16VIrc49q3c8dBqQDD0ax5LYPiNja00xsXDi0T9zsEWVt06ApjtSdSF6HDddlu5S12QjeN8Tow==
      }
    peerDependencies:
      graphql: ^14.0.0 || ^15.0.0
    dependencies:
      '@graphql-tools/schema': 8.3.14_graphql@15.8.0
      '@graphql-tools/utils': 8.0.2_graphql@15.8.0
      graphql: 15.8.0
      tslib: 2.3.1
    dev: true

  /@graphql-tools/merge/8.2.14_graphql@15.8.0:
    resolution:
      {
        integrity: sha512-od6lTF732nwPX91G79eiJf+dyRBHxCaKe7QL4IYeH4d1k+NYqx/ihYpFJNjDaqxmpHH92Hr+TxsP9SYRK3/QKg==
      }
    peerDependencies:
      graphql: ^14.0.0 || ^15.0.0 || ^16.0.0 || ^17.0.0
    dependencies:
      '@graphql-tools/utils': 8.6.13_graphql@15.8.0
      graphql: 15.8.0
      tslib: 2.4.0
    dev: true

  /@graphql-tools/schema/8.3.14_graphql@15.8.0:
    resolution:
      {
        integrity: sha512-ntA4pKwyyPHFFKcIw17FfqGZAiTNZl0tHieQpPIkN5fPc4oHcXOfaj1vBjtIC/Qn6H7XBBu3l2kMA8FpobdxTQ==
      }
    peerDependencies:
      graphql: ^14.0.0 || ^15.0.0 || ^16.0.0 || ^17.0.0
    dependencies:
      '@graphql-tools/merge': 8.2.14_graphql@15.8.0
      '@graphql-tools/utils': 8.6.13_graphql@15.8.0
      graphql: 15.8.0
      tslib: 2.4.0
      value-or-promise: 1.0.11
    dev: true

  /@graphql-tools/utils/8.0.2_graphql@15.8.0:
    resolution:
      {
        integrity: sha512-gzkavMOgbhnwkHJYg32Adv6f+LxjbQmmbdD5Hty0+CWxvaiuJq+nU6tzb/7VSU4cwhbNLx/lGu2jbCPEW1McZQ==
      }
    peerDependencies:
      graphql: ^14.0.0 || ^15.0.0
    dependencies:
      graphql: 15.8.0
      tslib: 2.3.1
    dev: true

  /@graphql-tools/utils/8.6.13_graphql@15.8.0:
    resolution:
      {
        integrity: sha512-FiVqrQzj4cgz0HcZ3CxUs8NtBGPZFpmsVyIgwmL6YCwIhjJQnT72h8G3/vk5zVfjfesht85YGp0inWWuoCKWzg==
      }
    peerDependencies:
      graphql: ^14.0.0 || ^15.0.0 || ^16.0.0 || ^17.0.0
    dependencies:
      graphql: 15.8.0
      tslib: 2.4.0
    dev: true

  /@humanwhocodes/config-array/0.5.0:
    resolution:
      {
        integrity: sha512-FagtKFz74XrTl7y6HCzQpwDfXP0yhxe9lHLD1UZxjvZIcbyRz8zTFF/yYNfSfzU414eDwZ1SrO0Qvtyf+wFMQg==
      }
    engines: { node: '>=10.10.0' }
    dependencies:
      '@humanwhocodes/object-schema': 1.2.1
      debug: 4.3.4
      minimatch: 3.1.2
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@humanwhocodes/config-array/0.9.5:
    resolution:
      {
        integrity: sha512-ObyMyWxZiCu/yTisA7uzx81s40xR2fD5Cg/2Kq7G02ajkNubJf6BopgDTmDyc3U7sXpNKM8cYOw7s7Tyr+DnCw==
      }
    engines: { node: '>=10.10.0' }
    dependencies:
      '@humanwhocodes/object-schema': 1.2.1
      debug: 4.3.4
      minimatch: 3.1.2
    transitivePeerDependencies:
      - supports-color

  /@humanwhocodes/object-schema/1.2.1:
    resolution:
      {
        integrity: sha512-ZnQMnLV4e7hDlUvw8H+U8ASL02SS2Gn6+9Ac3wGGLIe7+je2AeAOxPY+izIPJDfFDb7eDjev0Us8MO1iFRN8hA==
      }

  /@istanbuljs/load-nyc-config/1.1.0:
    resolution:
      {
        integrity: sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==
      }
    engines: { node: '>=8' }
    dependencies:
      camelcase: 5.3.1
      find-up: 4.1.0
      get-package-type: 0.1.0
      js-yaml: 3.13.1
      resolve-from: 5.0.0

  /@istanbuljs/schema/0.1.3:
    resolution:
      {
        integrity: sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==
      }
    engines: { node: '>=8' }

  /@jest/console/27.5.1:
    resolution:
      {
        integrity: sha512-kZ/tNpS3NXn0mlXXXPNuDZnb4c0oZ20r4K5eemM2k30ZC3G0T02nXUvyhf5YdbXWHPEJLc9qGLxEZ216MdL+Zg==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      '@types/node': 12.20.24
      chalk: 4.1.2
      jest-message-util: 27.5.1
      jest-util: 27.5.1
      slash: 3.0.0

  /@jest/core/27.4.7:
    resolution:
      {
        integrity: sha512-n181PurSJkVMS+kClIFSX/LLvw9ExSb+4IMtD6YnfxZVerw9ANYtW0bPrm0MJu2pfe9SY9FJ9FtQ+MdZkrZwjg==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/console': 27.5.1
      '@jest/reporters': 27.5.1
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      '@jest/transform': 27.5.1
      '@jest/types': 27.4.2
      '@types/node': 12.20.24
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      emittery: 0.8.1
      exit: 0.1.2
      graceful-fs: 4.2.10
      jest-changed-files: 27.5.1
      jest-config: 27.5.1_@types+node@12.20.24
      jest-haste-map: 27.5.1
      jest-message-util: 27.5.1
      jest-regex-util: 27.5.1
      jest-resolve: 27.5.1
      jest-resolve-dependencies: 27.5.1
      jest-runner: 27.5.1
      jest-runtime: 27.5.1_@types+node@12.20.24
      jest-snapshot: 27.5.1
      jest-util: 27.5.1
      jest-validate: 27.5.1
      jest-watcher: 27.5.1
      micromatch: 4.0.5
      rimraf: 3.0.2
      slash: 3.0.0
      strip-ansi: 6.0.1
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate

  /@jest/core/27.5.1:
    resolution:
      {
        integrity: sha512-AK6/UTrvQD0Cd24NSqmIA6rKsu0tKIxfiCducZvqxYdmMisOYAsdItspT+fQDQYARPf8XgjAFZi0ogW2agH5nQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/console': 27.5.1
      '@jest/reporters': 27.5.1
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      '@jest/transform': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 12.20.24
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      emittery: 0.8.1
      exit: 0.1.2
      graceful-fs: 4.2.10
      jest-changed-files: 27.5.1
      jest-config: 27.5.1_@types+node@12.20.24
      jest-haste-map: 27.5.1
      jest-message-util: 27.5.1
      jest-regex-util: 27.5.1
      jest-resolve: 27.5.1
      jest-resolve-dependencies: 27.5.1
      jest-runner: 27.5.1
      jest-runtime: 27.5.1_@types+node@12.20.24
      jest-snapshot: 27.5.1
      jest-util: 27.5.1
      jest-validate: 27.5.1
      jest-watcher: 27.5.1
      micromatch: 4.0.5
      rimraf: 3.0.2
      slash: 3.0.0
      strip-ansi: 6.0.1
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /@jest/environment/27.5.1:
    resolution:
      {
        integrity: sha512-/WQjhPJe3/ghaol/4Bq480JKXV/Rfw8nQdN7f41fM8VDHLcxKXou6QyXAh3EFr9/bVG3x74z1NWDkP87EiY8gA==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/fake-timers': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 12.20.24
      jest-mock: 27.5.1

  /@jest/fake-timers/27.5.1:
    resolution:
      {
        integrity: sha512-/aPowoolwa07k7/oM3aASneNeBGCmGQsc3ugN4u6s4C/+s5M64MFo/+djTdiwcbQlRfFElGuDXWzaWj6QgKObQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      '@sinonjs/fake-timers': 8.1.0
      '@types/node': 12.20.24
      jest-message-util: 27.5.1
      jest-mock: 27.5.1
      jest-util: 27.5.1

  /@jest/globals/27.5.1:
    resolution:
      {
        integrity: sha512-ZEJNB41OBQQgGzgyInAv0UUfDDj3upmHydjieSxFvTRuZElrx7tXg/uVQ5hYVEwiXs3+aMsAeEc9X7xiSKCm4Q==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/types': 27.5.1
      expect: 27.5.1

  /@jest/reporters/27.4.6:
    resolution:
      {
        integrity: sha512-+Zo9gV81R14+PSq4wzee4GC2mhAN9i9a7qgJWL90Gpx7fHYkWpTBvwWNZUXvJByYR9tAVBdc8VxDWqfJyIUrIQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@bcoe/v8-coverage': 0.2.3
      '@jest/console': 27.5.1
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      '@jest/transform': 27.5.1
      '@jest/types': 27.4.2
      '@types/istanbul-lib-coverage': 2.0.4
      '@types/node': 12.20.24
      chalk: 4.1.2
      collect-v8-coverage: 1.0.1_@types+node@12.20.24
      exit: 0.1.2
      glob: 7.2.3
      graceful-fs: 4.2.10
      istanbul-lib-coverage: 3.2.0
      istanbul-lib-instrument: 5.2.0
      istanbul-lib-report: 3.0.0
      istanbul-lib-source-maps: 4.0.1
      istanbul-reports: 3.1.4
      jest-haste-map: 27.5.1
      jest-resolve: 27.5.1
      jest-util: 27.5.1
      jest-worker: 27.5.1
      slash: 3.0.0
      source-map: 0.6.1
      string-length: 4.0.2
      terminal-link: 2.1.1
      v8-to-istanbul: 8.1.1
    transitivePeerDependencies:
      - supports-color

  /@jest/reporters/27.5.1:
    resolution:
      {
        integrity: sha512-cPXh9hWIlVJMQkVk84aIvXuBB4uQQmFqZiacloFuGiP3ah1sbCxCosidXFDfqG8+6fO1oR2dTJTlsOy4VFmUfw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@bcoe/v8-coverage': 0.2.3
      '@jest/console': 27.5.1
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      '@jest/transform': 27.5.1
      '@jest/types': 27.5.1
      '@types/istanbul-lib-coverage': 2.0.4
      '@types/node': 12.20.24
      chalk: 4.1.2
      collect-v8-coverage: 1.0.1_@types+node@12.20.24
      exit: 0.1.2
      glob: 7.2.3
      graceful-fs: 4.2.10
      istanbul-lib-coverage: 3.2.0
      istanbul-lib-instrument: 5.2.0
      istanbul-lib-report: 3.0.0
      istanbul-lib-source-maps: 4.0.1
      istanbul-reports: 3.1.4
      jest-haste-map: 27.5.1
      jest-resolve: 27.5.1
      jest-util: 27.5.1
      jest-worker: 27.5.1
      slash: 3.0.0
      source-map: 0.6.1
      string-length: 4.0.2
      terminal-link: 2.1.1
      v8-to-istanbul: 8.1.1
    transitivePeerDependencies:
      - supports-color

  /@jest/source-map/27.5.1:
    resolution:
      {
        integrity: sha512-y9NIHUYF3PJRlHk98NdC/N1gl88BL08aQQgu4k4ZopQkCw9t9cV8mtl3TV8b/YCB8XaVTFrmUTAJvjsntDireg==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      callsites: 3.1.0
      graceful-fs: 4.2.10
      source-map: 0.6.1

  /@jest/test-result/27.5.1_@types+node@12.20.24:
    resolution:
      {
        integrity: sha512-EW35l2RYFUcUQxFJz5Cv5MTOxlJIQs4I7gxzi2zVU7PJhOwfYq1MdC5nhSmYjX1gmMmLPvB3sIaC+BkcHRBfag==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/console': 27.5.1
      '@jest/types': 27.5.1
      '@types/istanbul-lib-coverage': 2.0.4
      collect-v8-coverage: 1.0.1_@types+node@12.20.24
      jest-haste-map: 27.5.1
      jest-resolve: 27.5.1
    transitivePeerDependencies:
      - '@types/node'

  /@jest/test-sequencer/27.5.1_@types+node@12.20.24:
    resolution:
      {
        integrity: sha512-LCheJF7WB2+9JuCS7VB/EmGIdQuhtqjRNI9A43idHv3E4KltCTsPsLxvdaubFHSYwY/fNjMWjl6vNRhDiN7vpQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-runtime: 27.5.1_@types+node@12.20.24
    transitivePeerDependencies:
      - '@types/node'
      - supports-color

  /@jest/transform/26.6.2:
    resolution:
      {
        integrity: sha512-E9JjhUgNzvuQ+vVAL21vlyfy12gP0GhazGgJC4h6qUt1jSdUXGWJ1wfu/X7Sd8etSgxV4ovT1pb9v5D6QW4XgA==
      }
    engines: { node: '>= 10.14.2' }
    dependencies:
      '@babel/core': 7.17.12
      '@jest/types': 26.6.2
      babel-plugin-istanbul: 6.1.1
      chalk: 4.1.2
      convert-source-map: 1.8.0
      fast-json-stable-stringify: 2.1.0
      graceful-fs: 4.2.10
      jest-haste-map: 26.6.2
      jest-regex-util: 26.0.0
      jest-util: 26.6.2
      micromatch: 4.0.5
      pirates: 4.0.5
      slash: 3.0.0
      source-map: 0.6.1
      write-file-atomic: 3.0.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@jest/transform/27.4.6:
    resolution:
      {
        integrity: sha512-9MsufmJC8t5JTpWEQJ0OcOOAXaH5ioaIX6uHVBLBMoCZPfKKQF+EqP8kACAvCZ0Y1h2Zr3uOccg8re+Dr5jxyw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@babel/core': 7.17.12
      '@jest/types': 27.4.2
      babel-plugin-istanbul: 6.1.1
      chalk: 4.1.2
      convert-source-map: 1.8.0
      fast-json-stable-stringify: 2.1.0
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-regex-util: 27.5.1
      jest-util: 27.5.1
      micromatch: 4.0.5
      pirates: 4.0.5
      slash: 3.0.0
      source-map: 0.6.1
      write-file-atomic: 3.0.3
    transitivePeerDependencies:
      - supports-color

  /@jest/transform/27.5.1:
    resolution:
      {
        integrity: sha512-ipON6WtYgl/1329g5AIJVbUuEh0wZVbdpGwC99Jw4LwuoBNS95MVphU6zOeD9pDkon+LLbFL7lOQRapbB8SCHw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@babel/core': 7.17.12
      '@jest/types': 27.5.1
      babel-plugin-istanbul: 6.1.1
      chalk: 4.1.2
      convert-source-map: 1.8.0
      fast-json-stable-stringify: 2.1.0
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-regex-util: 27.5.1
      jest-util: 27.5.1
      micromatch: 4.0.5
      pirates: 4.0.5
      slash: 3.0.0
      source-map: 0.6.1
      write-file-atomic: 3.0.3
    transitivePeerDependencies:
      - supports-color

  /@jest/types/26.6.2:
    resolution:
      {
        integrity: sha512-fC6QCp7Sc5sX6g8Tvbmj4XUTbyrik0akgRy03yjXbQaBWWNWGE7SGtJk98m0N8nzegD/7SggrUlivxo5ax4KWQ==
      }
    engines: { node: '>= 10.14.2' }
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4
      '@types/istanbul-reports': 3.0.1
      '@types/node': 12.20.24
      '@types/yargs': 15.0.14
      chalk: 4.1.2
    dev: true

  /@jest/types/27.4.2:
    resolution:
      {
        integrity: sha512-j35yw0PMTPpZsUoOBiuHzr1zTYoad1cVIE0ajEjcrJONxxrko/IRGKkXx3os0Nsi4Hu3+5VmDbVfq5WhG/pWAg==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4
      '@types/istanbul-reports': 3.0.1
      '@types/node': 12.20.24
      '@types/yargs': 16.0.4
      chalk: 4.1.2

  /@jest/types/27.5.1:
    resolution:
      {
        integrity: sha512-Cx46iJ9QpwQTjIdq5VJu2QTMMs3QlEjI0x1QbBP5W1+nMzyc2XmimiRR/CbX9TO0cPTeUlxWMOu8mslYsJ8DEw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4
      '@types/istanbul-reports': 3.0.1
      '@types/node': 12.20.24
      '@types/yargs': 16.0.4
      chalk: 4.1.2

  /@jridgewell/gen-mapping/0.1.1:
    resolution:
      {
        integrity: sha512-sQXCasFk+U8lWYEe66WxRDOE9PjVz4vSM51fTu3Hw+ClTpUSQb718772vH3pyS5pShp6lvQM7SxgIDXXXmOX7w==
      }
    engines: { node: '>=6.0.0' }
    dependencies:
      '@jridgewell/set-array': 1.1.1
      '@jridgewell/sourcemap-codec': 1.4.13

  /@jridgewell/gen-mapping/0.3.1:
    resolution:
      {
        integrity: sha512-GcHwniMlA2z+WFPWuY8lp3fsza0I8xPFMWL5+n8LYyP6PSvPrXf4+n8stDHZY2DM0zy9sVkRDy1jDI4XGzYVqg==
      }
    engines: { node: '>=6.0.0' }
    dependencies:
      '@jridgewell/set-array': 1.1.1
      '@jridgewell/sourcemap-codec': 1.4.13
      '@jridgewell/trace-mapping': 0.3.13

  /@jridgewell/resolve-uri/3.0.7:
    resolution:
      {
        integrity: sha512-8cXDaBBHOr2pQ7j77Y6Vp5VDT2sIqWyWQ56TjEq4ih/a4iST3dItRe8Q9fp0rrIl9DoKhWQtUQz/YpOxLkXbNA==
      }
    engines: { node: '>=6.0.0' }

  /@jridgewell/set-array/1.1.1:
    resolution:
      {
        integrity: sha512-Ct5MqZkLGEXTVmQYbGtx9SVqD2fqwvdubdps5D3djjAkgkKwT918VNOz65pEHFaYTeWcukmJmH5SwsA9Tn2ObQ==
      }
    engines: { node: '>=6.0.0' }

  /@jridgewell/source-map/0.3.2:
    resolution:
      {
        integrity: sha512-m7O9o2uR8k2ObDysZYzdfhb08VuEml5oWGiosa1VdaPZ/A6QyPkAJuwN0Q1lhULOf6B7MtQmHENS743hWtCrgw==
      }
    dependencies:
      '@jridgewell/gen-mapping': 0.3.1
      '@jridgewell/trace-mapping': 0.3.13

  /@jridgewell/sourcemap-codec/1.4.13:
    resolution:
      {
        integrity: sha512-GryiOJmNcWbovBxTfZSF71V/mXbgcV3MewDe3kIMCLyIh5e7SKAeUZs+rMnJ8jkMolZ/4/VsdBmMrw3l+VdZ3w==
      }

  /@jridgewell/trace-mapping/0.3.13:
    resolution:
      {
        integrity: sha512-o1xbKhp9qnIAoHJSWd6KlCZfqslL4valSF81H8ImioOAxluWYWOpWkpyktY2vnt4tbrX9XYaxovq6cgowaJp2w==
      }
    dependencies:
      '@jridgewell/resolve-uri': 3.0.7
      '@jridgewell/sourcemap-codec': 1.4.13

  /@jridgewell/trace-mapping/0.3.9:
    resolution:
      {
        integrity: sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==
      }
    dependencies:
      '@jridgewell/resolve-uri': 3.0.7
      '@jridgewell/sourcemap-codec': 1.4.13

  /@jsii/check-node/1.50.0:
    resolution:
      {
        integrity: sha512-CkL3EtRIxglzPraC2bR+plEw4pxrbCLUZRjTDxALjhJaO67SWyMUhtHkFerPH9vqIe7rQVkvrv6kJTwpNFRU5Q==
      }
    engines: { node: '>= 10.3.0' }
    dependencies:
      chalk: 4.1.2
      semver: 7.3.7
    dev: true

  /@leichtgewicht/ip-codec/2.0.4:
    resolution:
      {
        integrity: sha512-Hcv+nVC0kZnQ3tD9GVu5xSMR4VVYOteQIr/hwFPVEvPdlXqgGEuRjiheChHgdM+JyqdgNcmzZOX/tnl0JOiI7A==
      }

  /@lifaon/path/2.1.0:
    resolution:
      {
        integrity: sha512-E+eJpDdwenIQCaYMMuCnteR34qAvXtHhHKjZOPB+hK4+R1yGcmWLLAEl2aklxCHx6w5VCKc8imx9AT05FGHhBw==
      }
    dev: false

  /@mdx-js/loader/1.6.22_react@16.13.1:
    resolution:
      {
        integrity: sha512-9CjGwy595NaxAYp0hF9B/A0lH6C8Rms97e2JS9d3jVUtILn6pT5i5IV965ra3lIWc7Rs1GG1tBdVF7dCowYe6Q==
      }
    dependencies:
      '@mdx-js/mdx': 1.6.22
      '@mdx-js/react': 1.6.22_react@16.13.1
      loader-utils: 2.0.0
    transitivePeerDependencies:
      - react
      - supports-color
    dev: true

  /@mdx-js/mdx/1.6.22:
    resolution:
      {
        integrity: sha512-AMxuLxPz2j5/6TpF/XSdKpQP1NlG0z11dFOlq+2IP/lSgl11GY8ji6S/rgsViN/L0BDvHvUMruRb7ub+24LUYA==
      }
    dependencies:
      '@babel/core': 7.12.9
      '@babel/plugin-syntax-jsx': 7.12.1_@babel+core@7.12.9
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.12.9
      '@mdx-js/util': 1.6.22
      babel-plugin-apply-mdx-type-prop: 1.6.22_@babel+core@7.12.9
      babel-plugin-extract-import-names: 1.6.22
      camelcase-css: 2.0.1
      detab: 2.0.4
      hast-util-raw: 6.0.1
      lodash.uniq: 4.5.0
      mdast-util-to-hast: 10.0.1
      remark-footnotes: 2.0.0
      remark-mdx: 1.6.22
      remark-parse: 8.0.3
      remark-squeeze-paragraphs: 4.0.0
      style-to-object: 0.3.0
      unified: 9.2.0
      unist-builder: 2.0.3
      unist-util-visit: 2.0.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@mdx-js/react/1.6.22_react@16.13.1:
    resolution:
      {
        integrity: sha512-TDoPum4SHdfPiGSAaRBw7ECyI8VaHpK8GJugbJIJuqyh6kzw9ZLJZW3HGL3NNrJGxcAixUvqROm+YuQOo5eXtg==
      }
    peerDependencies:
      react: ^16.13.1 || ^17.0.0
    dependencies:
      react: 16.13.1
    dev: true

  /@mdx-js/util/1.6.22:
    resolution:
      {
        integrity: sha512-H1rQc1ZOHANWBvPcW+JpGwr+juXSxM8Q8YCkm3GhZd8REu1fHR3z99CErO1p9pkcfcxZnMdIZdIsXkOHY0NilA==
      }
    dev: true

  /@microsoft/api-extractor-model/7.24.3:
    resolution:
      {
        integrity: sha512-JElpLULqYDXQb0YIKKQhOJaNWBXsYeYu5J51Z4O6RGbOq7Tby9ViVfpDuXVXa87AMOSR5WKuaxG/5SnQVVNxiw==
      }
    dependencies:
      '@microsoft/tsdoc': 0.14.1
      '@microsoft/tsdoc-config': 0.16.1
      '@rushstack/node-core-library': 3.53.0
    dev: true

  /@microsoft/api-extractor/7.32.0:
    resolution:
      {
        integrity: sha512-BfvPpeVzWLFTdairVItzWQGsZr82fR4RH+8Q4I7t0f9xq66v4Qz9K+u25jbL5R42X01b/vvJMuRhX5KhU8J1Ug==
      }
    hasBin: true
    dependencies:
      '@microsoft/api-extractor-model': 7.24.3
      '@microsoft/tsdoc': 0.14.1
      '@microsoft/tsdoc-config': 0.16.1
      '@rushstack/node-core-library': 3.53.0
      '@rushstack/rig-package': 0.3.16
      '@rushstack/ts-command-line': 4.12.4
      colors: 1.2.5
      lodash: 4.17.21
      resolve: 1.17.0
      semver: 7.3.7
      source-map: 0.6.1
      typescript: 4.8.4
    dev: true

  /@microsoft/load-themed-styles/1.10.295:
    resolution:
      {
        integrity: sha512-W+IzEBw8a6LOOfRJM02dTT7BDZijxm+Z7lhtOAz1+y9vQm1Kdz9jlAO+qCEKsfxtUOmKilW8DIRqFw2aUgKeGg==
      }
    dev: false

  /@microsoft/teams-js/1.3.0-beta.4:
    resolution:
      {
        integrity: sha512-AxDfMpiVqh3hsqTxMEYtQoz866WB/sw/Jl0pgTLh6sMHHmIBNMd+E0pVcP9WNk8zTkr9LCphJ5SziU1C8BgZMA==
      }
    dev: true

  /@microsoft/tsdoc-config/0.16.1:
    resolution:
      {
        integrity: sha512-2RqkwiD4uN6MLnHFljqBlZIXlt/SaUT6cuogU1w2ARw4nKuuppSmR0+s+NC+7kXBQykd9zzu0P4HtBpZT5zBpQ==
      }
    dependencies:
      '@microsoft/tsdoc': 0.14.1
      ajv: 6.12.6
      jju: 1.4.0
      resolve: 1.19.0

  /@microsoft/tsdoc/0.14.1:
    resolution:
      {
        integrity: sha512-6Wci+Tp3CgPt/B9B0a3J4s3yMgLNSku6w5TV6mN+61C71UqsRBv2FUibBf3tPGlNxebgPHMEUzKpb1ggE8KCKw==
      }

  /@mrmlnc/readdir-enhanced/2.2.1:
    resolution:
      {
        integrity: sha512-bPHp6Ji8b41szTOcaP63VlnbbO5Ny6dwAATtY6JTjh5N2OLrb5Qk/Th5cRkRQhkWCt+EJsYrNB0MiL+Gpn6e3g==
      }
    engines: { node: '>=4' }
    dependencies:
      call-me-maybe: 1.0.1
      glob-to-regexp: 0.3.0
    dev: true

  /@nodelib/fs.scandir/2.1.5:
    resolution:
      {
        integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==
      }
    engines: { node: '>= 8' }
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  /@nodelib/fs.stat/1.1.3:
    resolution:
      {
        integrity: sha512-shAmDyaQC4H92APFoIaVDHCx5bStIocgvbwQyxPRrbUY20V1EYTbSDchWbuwlMG3V17cprZhA6+78JfB+3DTPw==
      }
    engines: { node: '>= 6' }
    dev: true

  /@nodelib/fs.stat/2.0.5:
    resolution:
      {
        integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==
      }
    engines: { node: '>= 8' }

  /@nodelib/fs.walk/1.2.8:
    resolution:
      {
        integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==
      }
    engines: { node: '>= 8' }
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.13.0

  /@npmcli/fs/1.1.1:
    resolution:
      {
        integrity: sha512-8KG5RD0GVP4ydEzRn/I4BNDuxDtqVbOdm8675T49OIG/NGhaK0pjPX7ZcDlvKYbA+ulvVK3ztfcF4uBdOxuJbQ==
      }
    dependencies:
      '@gar/promisify': 1.1.3
      semver: 7.3.7
    dev: true

  /@npmcli/move-file/1.1.2:
    resolution:
      {
        integrity: sha512-1SUf/Cg2GzGDyaf15aR9St9TWlb+XvbZXWpDx8YKs7MLzMH/BCeopv+y9vzrzgkfykCGuWOlSu3mZhj2+FQcrg==
      }
    engines: { node: '>=10' }
    dependencies:
      mkdirp: 1.0.4
      rimraf: 3.0.2
    dev: true

  /@opentelemetry/api/1.2.0:
    resolution:
      {
        integrity: sha512-0nBr+VZNKm9tvNDZFstI3Pq1fCTEDK5OZTnVKNvBNAKgd0yIvmwsP4m61rEv7ZP+tOUjWJhROpxK5MsnlF911g==
      }
    engines: { node: '>=8.0.0' }
    dev: false

  /@pmmmwh/react-refresh-webpack-plugin/0.5.7_yceubsmjd6jm3woocckpqejnhy:
    resolution:
      {
        integrity: sha512-bcKCAzF0DV2IIROp9ZHkRJa6O4jy7NlnHdWL3GmcUxYWNjLXkK5kfELELwEfSP5hXPfVL/qOGMAROuMQb9GG8Q==
      }
    engines: { node: '>= 10.13' }
    peerDependencies:
      '@types/webpack': 4.x || 5.x
      react-refresh: '>=0.10.0 <1.0.0'
      sockjs-client: ^1.4.0
      type-fest: '>=0.17.0 <3.0.0'
      webpack: '>=4.43.0 <6.0.0'
      webpack-dev-server: 3.x || 4.x
      webpack-hot-middleware: 2.x
      webpack-plugin-serve: 0.x || 1.x
    peerDependenciesMeta:
      '@types/webpack':
        optional: true
      sockjs-client:
        optional: true
      type-fest:
        optional: true
      webpack-dev-server:
        optional: true
      webpack-hot-middleware:
        optional: true
      webpack-plugin-serve:
        optional: true
    dependencies:
      ansi-html-community: 0.0.8
      common-path-prefix: 3.0.0
      core-js-pure: 3.23.1
      error-stack-parser: 2.1.4
      find-up: 5.0.0
      html-entities: 2.3.3
      loader-utils: 2.0.2
      react-refresh: 0.11.0
      schema-utils: 3.1.1
      source-map: 0.7.4
      webpack: 4.44.2
    dev: true

  /@pnpm/error/1.4.0:
    resolution:
      {
        integrity: sha512-vxkRrkneBPVmP23kyjnYwVOtipwlSl6UfL+h+Xa3TrABJTz5rYBXemlTsU5BzST8U4pD7YDkTb3SQu+MMuIDKA==
      }
    engines: { node: '>=10.16' }
    dev: false

  /@pnpm/link-bins/5.3.25:
    resolution:
      {
        integrity: sha512-9Xq8lLNRHFDqvYPXPgaiKkZ4rtdsm7izwM/cUsFDc5IMnG0QYIVBXQbgwhz2UvjUotbJrvfKLJaCfA3NGBnLDg==
      }
    engines: { node: '>=10.16' }
    dependencies:
      '@pnpm/error': 1.4.0
      '@pnpm/package-bins': 4.1.0
      '@pnpm/read-modules-dir': 2.0.3
      '@pnpm/read-package-json': 4.0.0
      '@pnpm/read-project-manifest': 1.1.7
      '@pnpm/types': 6.4.0
      '@zkochan/cmd-shim': 5.2.2
      is-subdir: 1.2.0
      is-windows: 1.0.2
      mz: 2.7.0
      normalize-path: 3.0.0
      p-settle: 4.1.1
      ramda: 0.27.2
    dev: false

  /@pnpm/logger/4.0.0:
    resolution:
      {
        integrity: sha512-SIShw+k556e7S7tLZFVSIHjCdiVog1qWzcKW2RbLEHPItdisAFVNIe34kYd9fMSswTlSRLS/qRjw3ZblzWmJ9Q==
      }
    engines: { node: '>=12.17' }
    dependencies:
      bole: 4.0.0
      ndjson: 2.0.0
    dev: true

  /@pnpm/package-bins/4.1.0:
    resolution:
      {
        integrity: sha512-57/ioGYLBbVRR80Ux9/q2i3y8Q+uQADc3c+Yse8jr/60YLOi3jcWz13e2Jy+ANYtZI258Qc5wk2X077rp0Ly/Q==
      }
    engines: { node: '>=10.16' }
    dependencies:
      '@pnpm/types': 6.4.0
      fast-glob: 3.2.11
      is-subdir: 1.2.0
    dev: false

  /@pnpm/read-modules-dir/2.0.3:
    resolution:
      {
        integrity: sha512-i9OgRvSlxrTS9a2oXokhDxvQzDtfqtsooJ9jaGoHkznue5aFCTSrNZFQ6M18o8hC03QWfnxaKi0BtOvNkKu2+A==
      }
    engines: { node: '>=10.13' }
    dependencies:
      mz: 2.7.0
    dev: false

  /@pnpm/read-package-json/4.0.0:
    resolution:
      {
        integrity: sha512-1cr2tEwe4YU6SI0Hmg+wnsr6yxBt2iJtqv6wrF84On8pS9hx4A2PLw3CIgbwxaG0b+ur5wzhNogwl4qD5FLFNg==
      }
    engines: { node: '>=10.16' }
    dependencies:
      '@pnpm/error': 1.4.0
      '@pnpm/types': 6.4.0
      load-json-file: 6.2.0
      normalize-package-data: 3.0.3
    dev: false

  /@pnpm/read-project-manifest/1.1.7:
    resolution:
      {
        integrity: sha512-tj8ExXZeDcMmMUj7D292ETe/RiEirr1X1wpT6Zy85z2MrFYoG9jfCJpps40OdZBNZBhxbuKtGPWKVSgXD0yrVw==
      }
    engines: { node: '>=10.16' }
    dependencies:
      '@pnpm/error': 1.4.0
      '@pnpm/types': 6.4.0
      '@pnpm/write-project-manifest': 1.1.7
      detect-indent: 6.1.0
      fast-deep-equal: 3.1.3
      graceful-fs: 4.2.4
      is-windows: 1.0.2
      json5: 2.2.1
      parse-json: 5.2.0
      read-yaml-file: 2.1.0
      sort-keys: 4.2.0
      strip-bom: 4.0.0
    dev: false

  /@pnpm/types/6.4.0:
    resolution:
      {
        integrity: sha512-nco4+4sZqNHn60Y4VE/fbtlShCBqipyUO+nKRPvDHqLrecMW9pzHWMVRxk4nrMRoeowj3q0rX3GYRBa8lsHTAg==
      }
    engines: { node: '>=10.16' }
    dev: false

  /@pnpm/write-project-manifest/1.1.7:
    resolution:
      {
        integrity: sha512-OLkDZSqkA1mkoPNPvLFXyI6fb0enCuFji6Zfditi/CLAo9kmIhQFmEUDu4krSB8i908EljG8YwL5Xjxzm5wsWA==
      }
    engines: { node: '>=10.16' }
    dependencies:
      '@pnpm/types': 6.4.0
      json5: 2.2.1
      mz: 2.7.0
      write-file-atomic: 3.0.3
      write-yaml-file: 4.2.0
    dev: false

  /@polka/url/1.0.0-next.21:
    resolution:
      {
        integrity: sha512-a5Sab1C4/icpTZVzZc5Ghpz88yQtGOyNqYXcZgOssB2uuAr+wF/MvN6bgtW32q7HHrvBki+BsZ0OuNv6EV3K9g==
      }

  /@popperjs/core/2.11.5:
    resolution:
      {
        integrity: sha512-9X2obfABZuDVLCgPK9aX0a/x4jaOEweTTWE2+9sr0Qqqevj2Uv5XorvusThmc9XGYpS9yI+fhh8RTafBtGposw==
      }
    dev: true

  /@rushstack/eslint-config/3.1.0_xptyflz73tdwkjjssjsy5r76ri:
    resolution:
      {
        integrity: sha512-1xV215H326tBe6rd7YNiOkJSFRMHngBcn6MADHna5bpKzGfUKjg0tG74Wp6Js8SPMKG+3D7h0J1wN9fyBatphw==
      }
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      typescript: '>=4.7.0'
    dependencies:
      '@rushstack/eslint-patch': 1.2.0
      '@rushstack/eslint-plugin': 0.11.0_xptyflz73tdwkjjssjsy5r76ri
      '@rushstack/eslint-plugin-packlets': 0.6.0_xptyflz73tdwkjjssjsy5r76ri
      '@rushstack/eslint-plugin-security': 0.5.0_xptyflz73tdwkjjssjsy5r76ri
      '@typescript-eslint/eslint-plugin': 5.38.0_suun7l2jb62tsjg4pf4g2ijvlq
      '@typescript-eslint/experimental-utils': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      '@typescript-eslint/parser': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      eslint: 7.30.0
      eslint-plugin-promise: 6.0.0_eslint@7.30.0
      eslint-plugin-react: 7.27.1_eslint@7.30.0
      eslint-plugin-tsdoc: 0.2.16
      typescript: 4.8.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@rushstack/eslint-patch/1.2.0:
    resolution:
      {
        integrity: sha512-sXo/qW2/pAcmT43VoRKOJbDOfV3cYpq3szSVfIThQXNt+E4DfKj361vaAt3c88U5tPUxzEswam7GW48PJqtKAg==
      }
    dev: true

  /@rushstack/eslint-plugin-packlets/0.6.0_xptyflz73tdwkjjssjsy5r76ri:
    resolution:
      {
        integrity: sha512-51J5N8UywQamDtBQq6qCCVhHojb753hr26DRe7erIqW+tTMWPfFrb2X5BQxYiFNmkQ6ii4p5RI/6j136IuALHg==
      }
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@rushstack/tree-pattern': 0.2.4
      '@typescript-eslint/experimental-utils': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      eslint: 7.30.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@rushstack/eslint-plugin-security/0.5.0_xptyflz73tdwkjjssjsy5r76ri:
    resolution:
      {
        integrity: sha512-qDtij3D2DY8VDHKeUdf+M2SpoctrY+eIA+fJFkpuHP7CTJZLBv5186+oCsJ59lZmKoBFREdgpaV3coXamoT8RQ==
      }
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@rushstack/tree-pattern': 0.2.4
      '@typescript-eslint/experimental-utils': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      eslint: 7.30.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@rushstack/eslint-plugin/0.11.0_xptyflz73tdwkjjssjsy5r76ri:
    resolution:
      {
        integrity: sha512-e8eVBOgb/xkpkgFmPP+oifrqCLh8I5BFI/emB/nf5+WnuS4hsTHkgprCEiJuvkhJRypsWrbchkIda9/1YFadxg==
      }
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@rushstack/tree-pattern': 0.2.4
      '@typescript-eslint/experimental-utils': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      eslint: 7.30.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@rushstack/heft-config-file/0.11.1:
    resolution:
      {
        integrity: sha512-Yh3M4B64SsDlF6A18JJDtoyNRNK2ql1QeQHpGQdt4Btv5Dya/kF0sbRvF3JXcE7pFDY0rJLu67OumGUc8nN9pw==
      }
    engines: { node: '>=10.13.0' }
    dependencies:
      '@rushstack/node-core-library': 3.53.0
      '@rushstack/rig-package': 0.3.16
      jsonpath-plus: 4.0.0
    dev: true

  /@rushstack/heft-jest-plugin/0.3.37_h3gpn2xakmccf6skk6kolq2tyq:
    resolution:
      {
        integrity: sha512-4WJ7KDQ6qjPwYowdWM/ywUjwD1NeiX5ecK/NG7OC9zA/WKXNW4m1zDEmjJdIHOWIPvDVK5VtXGFH5Q0tP6DUtg==
      }
    requiresBuild: true
    peerDependencies:
      '@rushstack/heft': ^0.48.0
    dependencies:
      '@jest/core': 27.4.7
      '@jest/reporters': 27.4.6
      '@jest/transform': 27.4.6
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-config-file': 0.11.1
      '@rushstack/node-core-library': 3.53.0
      jest-config: 27.4.7_@types+node@12.20.24
      jest-resolve: 27.4.6
      jest-snapshot: 27.4.6
      lodash: 4.17.21
    transitivePeerDependencies:
      - '@types/node'
      - bufferutil
      - canvas
      - node-notifier
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /@rushstack/heft-node-rig/1.11.0_h3gpn2xakmccf6skk6kolq2tyq:
    resolution:
      {
        integrity: sha512-XTEFPbpm7hBpOgmDt2q4j7AoRn6tgtjPQsph9bTVHpV8j3o8Hg06pKd/djKdG71wafC909uPGdlYawXX0pLfVw==
      }
    peerDependencies:
      '@rushstack/heft': ^0.48.0
    dependencies:
      '@microsoft/api-extractor': 7.32.0
      '@rushstack/heft': 0.48.0
      '@rushstack/heft-jest-plugin': 0.3.37_h3gpn2xakmccf6skk6kolq2tyq
      eslint: 8.7.0
      jest-environment-node: 27.4.6
      typescript: 4.8.4
    transitivePeerDependencies:
      - '@types/node'
      - bufferutil
      - canvas
      - node-notifier
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /@rushstack/heft/0.48.0:
    resolution:
      {
        integrity: sha512-HVhChSxmbfOiyKG7vSNLkNEuLZ3mVFzr6bw5vZDlr6Uo8ikb4Yt6K3PXCmdli03lbW9vnPZdLQapDtPlBPbhow==
      }
    engines: { node: '>=10.13.0' }
    hasBin: true
    dependencies:
      '@rushstack/heft-config-file': 0.11.1
      '@rushstack/node-core-library': 3.53.0
      '@rushstack/rig-package': 0.3.16
      '@rushstack/ts-command-line': 4.12.4
      '@types/tapable': 1.0.6
      argparse: 1.0.10
      chokidar: 3.4.3
      fast-glob: 3.2.11
      glob: 7.0.6
      glob-escape: 0.0.2
      prettier: 2.3.2
      semver: 7.3.7
      tapable: 1.1.3
      true-case-path: 2.2.1
    dev: true

  /@rushstack/node-core-library/3.53.0:
    resolution:
      {
        integrity: sha512-FXk3eDtTHKnaUq+fLyNY867ioRhMa6CJDJO5hZ3wuGlxm184nckAFiU+hx027AodjpnqjX6pYF0zZGq7k7P/vg==
      }
    dependencies:
      '@types/node': 12.20.24
      colors: 1.2.5
      fs-extra: 7.0.1
      import-lazy: 4.0.0
      jju: 1.4.0
      resolve: 1.17.0
      semver: 7.3.7
      z-schema: 5.0.3
    dev: true

  /@rushstack/rig-package/0.3.16:
    resolution:
      {
        integrity: sha512-FoSQng2RtapEUe+CBPKxbpZUhUht5s2+mMiztRH95qqp81dsUpfEWojtV6XrUVyWIRk2/cY1CDZUKJWxMrT26Q==
      }
    dependencies:
      resolve: 1.17.0
      strip-json-comments: 3.1.1
    dev: true

  /@rushstack/tree-pattern/0.2.4:
    resolution:
      {
        integrity: sha512-H8i0OinWsdKM1TKEKPeRRTw85e+/7AIFpxm7q1blceZJhuxRBjCGAUZvQXZK4CMLx75xPqh/h1t5WHwFmElAPA==
      }
    dev: true

  /@rushstack/ts-command-line/4.12.4:
    resolution:
      {
        integrity: sha512-ckZHEfPiJCmBdWd/syve5zu2TNsPIqbFie3jWzM/izZa6ZOkDwex/K1ww+kJ12hFBnN44lMD7voJvKXajUCEDA==
      }
    dependencies:
      '@types/argparse': 1.0.38
      argparse: 1.0.10
      colors: 1.2.5
      string-argv: 0.3.1
    dev: true

  /@serverless-stack/aws-lambda-ric/2.0.13:
    resolution:
      {
        integrity: sha512-Aj4X2wMW6O5/PQoKoBdQGC3LwQyGTgW1XZtF0rs07WE9s6Q+46zWaVgURQjoNmTNQKpHSGJYo6B+ycp9u7/CSA==
      }
    hasBin: true
    dependencies:
      node-addon-api: 3.2.1
      node-gyp: 8.1.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@serverless-stack/cli/0.67.0_constructs@10.0.130:
    resolution:
      {
        integrity: sha512-QVpFHqbVezHVHQP2wvVlomcOQ1CliEUq08vG2FcLX7tyAKi0EXlVNGOTx9AcA51jBPATtQFy8J1jeUXQeJ7ZbA==
      }
    hasBin: true
    dependencies:
      '@aws-cdk/aws-apigatewayv2-alpha': 2.7.0-alpha.0_4k7vh4k5vxgov5k3ju6unzjkgi
      '@serverless-stack/aws-lambda-ric': 2.0.13
      '@serverless-stack/core': 0.67.2
      '@serverless-stack/resources': 0.67.0
      aws-cdk: 2.7.0
      aws-cdk-lib: 2.7.0_constructs@10.0.130
      aws-sdk: 2.1155.0
      body-parser: 1.20.0
      chalk: 4.1.2
      chokidar: 3.5.3
      cross-spawn: 7.0.3
      detect-port-alt: 1.1.6
      esbuild: 0.12.29
      esbuild-runner: 2.2.1_esbuild@0.12.29
      express: 4.18.1
      fs-extra: 9.1.0
      remeda: 0.0.32
      source-map-support: 0.5.21
      ws: 7.5.8
      yargs: 15.4.1
    transitivePeerDependencies:
      - bufferutil
      - constructs
      - supports-color
      - utf-8-validate
    dev: true

  /@serverless-stack/core/0.67.2:
    resolution:
      {
        integrity: sha512-9Z7dDCWRu38EGR9XL9cD2pZBNtX1vrpij9r4mOAae5PUk3XqROfzoEqObIhkU78Qzl/N74bKMu75z0IzXqa2rA==
      }
    dependencies:
      '@trpc/server': 9.25.2
      async-retry: 1.3.3
      aws-cdk: 2.7.0
      aws-cdk-lib: 2.7.0_constructs@10.0.130
      aws-sdk: 2.1155.0
      chalk: 4.1.2
      chokidar: 3.5.3
      ci-info: 3.3.2
      conf: 10.1.2
      constructs: 10.0.130
      cross-spawn: 7.0.3
      dataloader: 2.1.0
      dendriform-immer-patch-optimiser: 2.1.2_immer@9.0.15
      dotenv: 10.0.0
      dotenv-expand: 5.1.0
      esbuild: 0.14.44
      eslint: 8.17.0
      express: 4.18.1
      fs-extra: 9.1.0
      immer: 9.0.15
      js-yaml: 4.1.0
      log4js: 6.5.2
      picomatch: 2.3.1
      remeda: 0.0.32
      typescript: 4.8.4
      uuid: 8.3.2
      xstate: 4.26.1
      zod: 3.17.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@serverless-stack/resources/0.67.0:
    resolution:
      {
        integrity: sha512-9ySIlDBvbQ5jko+HhwCzjAWPwwj0NRnzs6SdOfU8IqK/FTBnQW/4FdeKwr/0dffnVdua2eymyfzOx4sL81l/Tw==
      }
    dependencies:
      '@aws-cdk/aws-apigatewayv2-alpha': 2.7.0-alpha.0_4k7vh4k5vxgov5k3ju6unzjkgi
      '@aws-cdk/aws-apigatewayv2-authorizers-alpha': 2.7.0-alpha.0_lhdwln6d4cy5rqcla435fclwy4
      '@aws-cdk/aws-apigatewayv2-integrations-alpha': 2.7.0-alpha.0_lhdwln6d4cy5rqcla435fclwy4
      '@aws-cdk/aws-appsync-alpha': 2.7.0-alpha.0_4k7vh4k5vxgov5k3ju6unzjkgi
      '@graphql-tools/load-files': 6.5.4_graphql@15.8.0
      '@graphql-tools/merge': 6.2.17_graphql@15.8.0
      '@serverless-stack/core': 0.67.2
      archiver: 5.3.1
      aws-cdk-lib: 2.7.0_constructs@10.0.130
      chalk: 4.1.2
      constructs: 10.0.130
      cross-spawn: 7.0.3
      esbuild: 0.14.44
      fs-extra: 9.1.0
      glob: 7.2.3
      graphql: 15.8.0
      zip-local: 0.3.5
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@sindresorhus/is/0.14.0:
    resolution:
      {
        integrity: sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ==
      }
    engines: { node: '>=6' }
    dev: true

  /@sinonjs/commons/1.8.3:
    resolution:
      {
        integrity: sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ==
      }
    dependencies:
      type-detect: 4.0.8

  /@sinonjs/fake-timers/8.1.0:
    resolution:
      {
        integrity: sha512-OAPJUAtgeINhh/TAlUID4QTs53Njm7xzddaVlEs/SXwgtiD1tW22zAB/W1wdqfrpmikgaWQ9Fw6Ws+hsiRm5Vg==
      }
    dependencies:
      '@sinonjs/commons': 1.8.3

  /@storybook/addon-actions/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-t2w3iLXFul+R/1ekYxIEzUOZZmvEa7EzUAVAuCHP4i6x0jBnTTZ7sAIUVRaxVREPguH5IqI/2OklYhKanty2Yw==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      react:
        optional: true
      react-dom:
        optional: true
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      core-js: 3.23.1
      fast-deep-equal: 3.1.3
      global: 4.4.0
      lodash: 4.17.21
      polished: 4.2.2
      prop-types: 15.8.1
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-inspector: 5.1.1_react@16.13.1
      regenerator-runtime: 0.13.9
      telejson: 5.3.3
      ts-dedent: 2.2.0
      util-deprecate: 1.0.2
      uuid-browser: 3.1.0
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/addon-backgrounds/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-xQIV1SsjjRXP7P5tUoGKv+pul1EY8lsV7iBXQb5eGbp4AffBj3qoYBSZbX4uiazl21o0MQiQoeIhhaPVaFIIGg==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      react:
        optional: true
      react-dom:
        optional: true
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/client-logger': 6.4.22
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      core-js: 3.23.1
      global: 4.4.0
      memoizerific: 1.11.3
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
      ts-dedent: 2.2.0
      util-deprecate: 1.0.2
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/addon-controls/6.4.22_xf6r4yukfywdkj47txjlawutqi:
    resolution:
      {
        integrity: sha512-f/M/W+7UTEUnr/L6scBMvksq+ZA8GTfh3bomE5FtWyOyaFppq9k8daKAvdYNlzXAOrUUsoZVJDgpb20Z2VBiSQ==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      react:
        optional: true
      react-dom:
        optional: true
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/client-logger': 6.4.22
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core-common': 6.4.22_4o36x7vjmnuefo3jox56hgoacm
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/node-logger': 6.4.22
      '@storybook/store': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      core-js: 3.23.1
      lodash: 4.17.21
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      ts-dedent: 2.2.0
    transitivePeerDependencies:
      - '@types/react'
      - eslint
      - supports-color
      - typescript
      - vue-template-compiler
      - webpack-cli
      - webpack-command
    dev: true

  /@storybook/addon-docs/6.4.22_sf6zhoyncw267gjzvcqcfauqdy:
    resolution:
      {
        integrity: sha512-9j+i+W+BGHJuRe4jUrqk6ubCzP4fc1xgFS2o8pakRiZgPn5kUQPdkticmsyh1XeEJifwhqjKJvkEDrcsleytDA==
      }
    peerDependencies:
      '@storybook/angular': 6.4.22
      '@storybook/html': 6.4.22
      '@storybook/react': 6.4.22
      '@storybook/vue': 6.4.22
      '@storybook/vue3': 6.4.22
      '@storybook/web-components': 6.4.22
      lit: ^2.0.0
      lit-html: ^1.4.1 || ^2.0.0
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
      svelte: ^3.31.2
      sveltedoc-parser: ^4.1.0
      vue: ^2.6.10 || ^3.0.0
      webpack: '*'
    peerDependenciesMeta:
      '@storybook/angular':
        optional: true
      '@storybook/html':
        optional: true
      '@storybook/react':
        optional: true
      '@storybook/vue':
        optional: true
      '@storybook/vue3':
        optional: true
      '@storybook/web-components':
        optional: true
      lit:
        optional: true
      lit-html:
        optional: true
      react:
        optional: true
      react-dom:
        optional: true
      svelte:
        optional: true
      sveltedoc-parser:
        optional: true
      vue:
        optional: true
      webpack:
        optional: true
    dependencies:
      '@babel/core': 7.17.12
      '@babel/generator': 7.18.2
      '@babel/parser': 7.18.5
      '@babel/plugin-transform-react-jsx': 7.17.12_@babel+core@7.17.12
      '@babel/preset-env': 7.18.2_@babel+core@7.17.12
      '@jest/transform': 26.6.2
      '@mdx-js/loader': 1.6.22_react@16.13.1
      '@mdx-js/mdx': 1.6.22
      '@mdx-js/react': 1.6.22_react@16.13.1
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/builder-webpack4': 6.4.22_xf6r4yukfywdkj47txjlawutqi
      '@storybook/client-logger': 6.4.22
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core': 6.4.22_m2ha4wqgs5y6chnytfqlahqmme
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/csf-tools': 6.4.22
      '@storybook/node-logger': 6.4.22
      '@storybook/postinstall': 6.4.22
      '@storybook/preview-web': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/react': 6.4.22_6pxnn2xtr5yph4wackblrq76km
      '@storybook/source-loader': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/store': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      acorn: 7.4.1
      acorn-jsx: 5.3.2_acorn@7.4.1
      acorn-walk: 7.2.0
      core-js: 3.23.1
      doctrine: 3.0.0
      escodegen: 2.0.0
      fast-deep-equal: 3.1.3
      global: 4.4.0
      html-tags: 3.2.0
      js-string-escape: 1.0.1
      loader-utils: 2.0.2
      lodash: 4.17.21
      nanoid: 3.3.4
      p-limit: 3.1.0
      prettier: 2.3.0
      prop-types: 15.8.1
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-element-to-jsx-string: 14.3.4_5owmthsvj5ictknaj3ev736ofq
      regenerator-runtime: 0.13.9
      remark-external-links: 8.0.0
      remark-slug: 6.1.0
      ts-dedent: 2.2.0
      util-deprecate: 1.0.2
      webpack: 4.44.2
    transitivePeerDependencies:
      - '@storybook/builder-webpack5'
      - '@storybook/manager-webpack5'
      - '@types/react'
      - bufferutil
      - encoding
      - eslint
      - supports-color
      - typescript
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
      - webpack-command
    dev: true

  /@storybook/addon-essentials/6.4.22_q2qw673im4ojqxzlijezcm3cd4:
    resolution:
      {
        integrity: sha512-GTv291fqvWq2wzm7MruBvCGuWaCUiuf7Ca3kzbQ/WqWtve7Y/1PDsqRNQLGZrQxkXU0clXCqY1XtkTrtA3WGFQ==
      }
    peerDependencies:
      '@babel/core': ^7.9.6
      '@storybook/vue': 6.4.22
      '@storybook/web-components': 6.4.22
      babel-loader: ^8.0.0
      lit-html: ^1.4.1 || ^2.0.0-rc.3
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
      webpack: '*'
    peerDependenciesMeta:
      '@storybook/vue':
        optional: true
      '@storybook/web-components':
        optional: true
      lit-html:
        optional: true
      react:
        optional: true
      react-dom:
        optional: true
      webpack:
        optional: true
    dependencies:
      '@babel/core': 7.17.12
      '@storybook/addon-actions': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/addon-backgrounds': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/addon-controls': 6.4.22_xf6r4yukfywdkj47txjlawutqi
      '@storybook/addon-docs': 6.4.22_sf6zhoyncw267gjzvcqcfauqdy
      '@storybook/addon-measure': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/addon-outline': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/addon-toolbars': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/addon-viewport': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/node-logger': 6.4.22
      babel-loader: 8.2.5_4bf35c6ryl6gwyrcrj2ykng7ny
      core-js: 3.23.1
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
      ts-dedent: 2.2.0
      webpack: 4.44.2
    transitivePeerDependencies:
      - '@storybook/angular'
      - '@storybook/builder-webpack5'
      - '@storybook/html'
      - '@storybook/manager-webpack5'
      - '@storybook/react'
      - '@storybook/vue3'
      - '@types/react'
      - bufferutil
      - encoding
      - eslint
      - lit
      - supports-color
      - svelte
      - sveltedoc-parser
      - typescript
      - utf-8-validate
      - vue
      - vue-template-compiler
      - webpack-cli
      - webpack-command
    dev: true

  /@storybook/addon-links/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-OSOyDnTXnmcplJHlXTYUTMkrfpLqxtHp2R69IXfAyI1e8WNDb79mXflrEXDA/RSNEliLkqYwCyYby7gDMGds5Q==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      react:
        optional: true
      react-dom:
        optional: true
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/client-logger': 6.4.22
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/router': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@types/qs': 6.9.7
      core-js: 3.23.1
      global: 4.4.0
      prop-types: 15.8.1
      qs: 6.10.5
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
      ts-dedent: 2.2.0
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/addon-measure/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-CjDXoCNIXxNfXfgyJXPc0McjCcwN1scVNtHa9Ckr+zMjiQ8pPHY7wDZCQsG69KTqcWHiVfxKilI82456bcHYhQ==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      react:
        optional: true
      react-dom:
        optional: true
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/client-logger': 6.4.22
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      core-js: 3.23.1
      global: 4.4.0
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/addon-outline/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-VIMEzvBBRbNnupGU7NV0ahpFFb6nKVRGYWGREjtABdFn2fdKr1YicOHFe/3U7hRGjb5gd+VazSvyUvhaKX9T7Q==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      react:
        optional: true
      react-dom:
        optional: true
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/client-logger': 6.4.22
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      core-js: 3.23.1
      global: 4.4.0
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
      ts-dedent: 2.2.0
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/addon-toolbars/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-FFyj6XDYpBBjcUu6Eyng7R805LUbVclEfydZjNiByAoDVyCde9Hb4sngFxn/T4fKAfBz/32HKVXd5iq4AHYtLg==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      react:
        optional: true
      react-dom:
        optional: true
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      core-js: 3.23.1
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/addon-viewport/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-6jk0z49LemeTblez5u2bYXYr6U+xIdLbywe3G283+PZCBbEDE6eNYy2d2HDL+LbCLbezJBLYPHPalElphjJIcw==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      react:
        optional: true
      react-dom:
        optional: true
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/client-logger': 6.4.22
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core-events': 6.4.22
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      core-js: 3.23.1
      global: 4.4.0
      memoizerific: 1.11.3
      prop-types: 15.8.1
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/addons/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-P/R+Jsxh7pawKLYo8MtE3QU/ilRFKbtCewV/T1o5U/gm8v7hKQdFz3YdRMAra4QuCY8bQIp7MKd2HrB5aH5a1A==
      }
    peerDependencies:
      '@types/react': '>=16'
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    dependencies:
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/channels': 6.4.22
      '@storybook/client-logger': 6.4.22
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/router': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@types/react': 16.14.23
      '@types/webpack-env': 1.17.0
      core-js: 3.23.1
      global: 4.4.0
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
    dev: true

  /@storybook/api/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-lAVI3o2hKupYHXFTt+1nqFct942up5dHH6YD7SZZJGyW21dwKC3HK1IzCsTawq3fZAKkgWFgmOO649hKk60yKg==
      }
    peerDependencies:
      '@types/react': '>=16'
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    dependencies:
      '@storybook/channels': 6.4.22
      '@storybook/client-logger': 6.4.22
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/router': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/semver': 7.3.2
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@types/react': 16.14.23
      core-js: 3.23.1
      fast-deep-equal: 3.1.3
      global: 4.4.0
      lodash: 4.17.21
      memoizerific: 1.11.3
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
      store2: 2.13.2
      telejson: 5.3.3
      ts-dedent: 2.2.0
      util-deprecate: 1.0.2
    dev: true

  /@storybook/builder-webpack4/6.4.22_xf6r4yukfywdkj47txjlawutqi:
    resolution:
      {
        integrity: sha512-A+GgGtKGnBneRFSFkDarUIgUTI8pYFdLmUVKEAGdh2hL+vLXAz9A46sEY7C8LQ85XWa8TKy3OTDxqR4+4iWj3A==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@babel/core': 7.17.12
      '@babel/plugin-proposal-class-properties': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-decorators': 7.18.2_@babel+core@7.17.12
      '@babel/plugin-proposal-export-default-from': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-nullish-coalescing-operator': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-object-rest-spread': 7.18.0_@babel+core@7.17.12
      '@babel/plugin-proposal-optional-chaining': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-private-methods': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-transform-arrow-functions': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-block-scoping': 7.18.4_@babel+core@7.17.12
      '@babel/plugin-transform-classes': 7.18.4_@babel+core@7.17.12
      '@babel/plugin-transform-destructuring': 7.18.0_@babel+core@7.17.12
      '@babel/plugin-transform-for-of': 7.18.1_@babel+core@7.17.12
      '@babel/plugin-transform-parameters': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-shorthand-properties': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-spread': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-template-literals': 7.18.2_@babel+core@7.17.12
      '@babel/preset-env': 7.18.2_@babel+core@7.17.12
      '@babel/preset-react': 7.17.12_@babel+core@7.17.12
      '@babel/preset-typescript': 7.17.12_@babel+core@7.17.12
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/channel-postmessage': 6.4.22
      '@storybook/channels': 6.4.22
      '@storybook/client-api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/client-logger': 6.4.22
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core-common': 6.4.22_4o36x7vjmnuefo3jox56hgoacm
      '@storybook/core-events': 6.4.22
      '@storybook/node-logger': 6.4.22
      '@storybook/preview-web': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/router': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/semver': 7.3.2
      '@storybook/store': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/ui': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@types/node': 14.18.21
      '@types/webpack': 4.41.32
      autoprefixer: 9.8.8
      babel-loader: 8.2.5_4bf35c6ryl6gwyrcrj2ykng7ny
      babel-plugin-macros: 2.8.0
      babel-plugin-polyfill-corejs3: 0.1.7_@babel+core@7.17.12
      case-sensitive-paths-webpack-plugin: 2.4.0
      core-js: 3.23.1
      css-loader: 3.6.0_webpack@4.44.2
      file-loader: 6.2.0_webpack@4.44.2
      find-up: 5.0.0
      fork-ts-checker-webpack-plugin: 4.1.6
      glob: 7.2.3
      glob-promise: 3.4.0_glob@7.2.3
      global: 4.4.0
      html-webpack-plugin: 4.5.2_webpack@4.44.2
      pnp-webpack-plugin: 1.6.4_typescript@4.8.4
      postcss: 7.0.39
      postcss-flexbugs-fixes: 4.2.1
      postcss-loader: 4.3.0_4a2i7aa2i6hzz4ngguaxzo4tzi
      raw-loader: 4.0.2_webpack@4.44.2
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      stable: 0.1.8
      style-loader: 1.3.0_webpack@4.44.2
      terser-webpack-plugin: 4.2.3_webpack@4.44.2
      ts-dedent: 2.2.0
      typescript: 4.8.4
      url-loader: 4.1.1_zmzwotvrfu62vdeozbyveyswza
      util-deprecate: 1.0.2
      webpack: 4.44.2
      webpack-dev-middleware: 3.7.3_2jhnw6fokymnjfoumvhvkjoyjq
      webpack-filter-warnings-plugin: 1.2.1_webpack@4.44.2
      webpack-hot-middleware: 2.25.1
      webpack-virtual-modules: 0.2.2
    transitivePeerDependencies:
      - '@types/react'
      - eslint
      - supports-color
      - vue-template-compiler
      - webpack-cli
      - webpack-command
    dev: true

  /@storybook/channel-postmessage/6.4.22:
    resolution:
      {
        integrity: sha512-gt+0VZLszt2XZyQMh8E94TqjHZ8ZFXZ+Lv/Mmzl0Yogsc2H+6VzTTQO4sv0IIx6xLbpgG72g5cr8VHsxW5kuDQ==
      }
    dependencies:
      '@storybook/channels': 6.4.22
      '@storybook/client-logger': 6.4.22
      '@storybook/core-events': 6.4.22
      core-js: 3.23.1
      global: 4.4.0
      qs: 6.10.5
      telejson: 5.3.3
    dev: true

  /@storybook/channel-websocket/6.4.22:
    resolution:
      {
        integrity: sha512-Bm/FcZ4Su4SAK5DmhyKKfHkr7HiHBui6PNutmFkASJInrL9wBduBfN8YQYaV7ztr8ezoHqnYRx8sj28jpwa6NA==
      }
    dependencies:
      '@storybook/channels': 6.4.22
      '@storybook/client-logger': 6.4.22
      core-js: 3.23.1
      global: 4.4.0
      telejson: 5.3.3
    dev: true

  /@storybook/channels/6.4.22:
    resolution:
      {
        integrity: sha512-cfR74tu7MLah1A8Rru5sak71I+kH2e/sY6gkpVmlvBj4hEmdZp4Puj9PTeaKcMXh9DgIDPNA5mb8yvQH6VcyxQ==
      }
    dependencies:
      core-js: 3.23.1
      ts-dedent: 2.2.0
      util-deprecate: 1.0.2
    dev: true

  /@storybook/cli/6.4.22_qrag5zyjgmrwa7rjqjc5fiwide:
    resolution:
      {
        integrity: sha512-Paj5JtiYG6HjYYEiLm0SGg6GJ+ebJSvfbbYx5W+MNiojyMwrzkof+G2VEGk5AbE2JSkXvDQJ/9B8/SuS94yqvA==
      }
    hasBin: true
    peerDependencies:
      jest: '*'
    dependencies:
      '@babel/core': 7.17.12
      '@babel/preset-env': 7.18.2_@babel+core@7.17.12
      '@storybook/codemod': 6.4.22_@babel+preset-env@7.18.2
      '@storybook/core-common': 6.4.22_4o36x7vjmnuefo3jox56hgoacm
      '@storybook/csf-tools': 6.4.22
      '@storybook/node-logger': 6.4.22
      '@storybook/semver': 7.3.2
      boxen: 5.1.2
      chalk: 4.1.2
      commander: 6.2.1
      core-js: 3.23.1
      cross-spawn: 7.0.3
      envinfo: 7.8.1
      express: 4.18.1
      find-up: 5.0.0
      fs-extra: 9.1.0
      get-port: 5.1.1
      globby: 11.1.0
      jest: 27.4.7_@types+node@12.20.24
      jscodeshift: 0.13.1_@babel+preset-env@7.18.2
      json5: 2.2.1
      leven: 3.1.0
      prompts: 2.4.2
      puppeteer-core: 2.1.1
      read-pkg-up: 7.0.1
      shelljs: 0.8.5
      strip-json-comments: 3.1.1
      ts-dedent: 2.2.0
      update-notifier: 5.1.0
    transitivePeerDependencies:
      - eslint
      - react
      - react-dom
      - supports-color
      - typescript
      - vue-template-compiler
      - webpack-cli
      - webpack-command
    dev: true

  /@storybook/client-api/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-sO6HJNtrrdit7dNXQcZMdlmmZG1k6TswH3gAyP/DoYajycrTwSJ6ovkarzkO+0QcJ+etgra4TEdTIXiGHBMe/A==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/channel-postmessage': 6.4.22
      '@storybook/channels': 6.4.22
      '@storybook/client-logger': 6.4.22
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/store': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@types/qs': 6.9.7
      '@types/webpack-env': 1.17.0
      core-js: 3.23.1
      fast-deep-equal: 3.1.3
      global: 4.4.0
      lodash: 4.17.21
      memoizerific: 1.11.3
      qs: 6.10.5
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
      store2: 2.13.2
      synchronous-promise: 2.0.15
      ts-dedent: 2.2.0
      util-deprecate: 1.0.2
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/client-logger/6.4.22:
    resolution:
      {
        integrity: sha512-LXhxh/lcDsdGnK8kimqfhu3C0+D2ylCSPPQNbU0IsLRmTfbpQYMdyl0XBjPdHiRVwlL7Gkw5OMjYemQgJ02zlw==
      }
    dependencies:
      core-js: 3.23.1
      global: 4.4.0
    dev: true

  /@storybook/codemod/6.4.22_@babel+preset-env@7.18.2:
    resolution:
      {
        integrity: sha512-xqnTKUQU2W3vS3dce9s4bYhy15tIfAHIzog37jqpKYOHnByXpPj/KkluGePtv5I6cvMxqP8IhQzn+Eh/lVjM4Q==
      }
    dependencies:
      '@babel/types': 7.18.4
      '@mdx-js/mdx': 1.6.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/csf-tools': 6.4.22
      '@storybook/node-logger': 6.4.22
      core-js: 3.23.1
      cross-spawn: 7.0.3
      globby: 11.1.0
      jscodeshift: 0.13.1_@babel+preset-env@7.18.2
      lodash: 4.17.21
      prettier: 2.3.0
      recast: 0.19.1
      regenerator-runtime: 0.13.9
    transitivePeerDependencies:
      - '@babel/preset-env'
      - supports-color
    dev: true

  /@storybook/components/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-dCbXIJF9orMvH72VtAfCQsYbe57OP7fAADtR6YTwfCw9Sm1jFuZr8JbblQ1HcrXEoJG21nOyad3Hm5EYVb/sBw==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    dependencies:
      '@popperjs/core': 2.11.5
      '@storybook/client-logger': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@types/color-convert': 2.0.0
      '@types/overlayscrollbars': 1.12.1
      '@types/react-syntax-highlighter': 11.0.5
      color-convert: 2.0.1
      core-js: 3.23.1
      fast-deep-equal: 3.1.3
      global: 4.4.0
      lodash: 4.17.21
      markdown-to-jsx: 7.1.7_react@16.13.1
      memoizerific: 1.11.3
      overlayscrollbars: 1.13.2
      polished: 4.2.2
      prop-types: 15.8.1
      react: 16.13.1
      react-colorful: 5.5.1_5owmthsvj5ictknaj3ev736ofq
      react-dom: 16.13.1_react@16.13.1
      react-popper-tooltip: 3.1.1_5owmthsvj5ictknaj3ev736ofq
      react-syntax-highlighter: 13.5.3_react@16.13.1
      react-textarea-autosize: 8.3.4_qjwx5m6wssz3lnb35xwkc3pz6q
      regenerator-runtime: 0.13.9
      ts-dedent: 2.2.0
      util-deprecate: 1.0.2
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/core-client/6.4.22_m2ha4wqgs5y6chnytfqlahqmme:
    resolution:
      {
        integrity: sha512-uHg4yfCBeM6eASSVxStWRVTZrAnb4FT6X6v/xDqr4uXCpCttZLlBzrSDwPBLNNLtCa7ntRicHM8eGKIOD5lMYQ==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
      typescript: '*'
      webpack: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/channel-postmessage': 6.4.22
      '@storybook/channel-websocket': 6.4.22
      '@storybook/client-api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/client-logger': 6.4.22
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/preview-web': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/store': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/ui': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      airbnb-js-shims: 2.2.1
      ansi-to-html: 0.6.15
      core-js: 3.23.1
      global: 4.4.0
      lodash: 4.17.21
      qs: 6.10.5
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
      ts-dedent: 2.2.0
      typescript: 4.8.4
      unfetch: 4.2.0
      util-deprecate: 1.0.2
      webpack: 4.44.2
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/core-common/6.4.22_4o36x7vjmnuefo3jox56hgoacm:
    resolution:
      {
        integrity: sha512-PD3N/FJXPNRHeQS2zdgzYFtqPLdi3MLwAicbnw+U3SokcsspfsAuyYHZOYZgwO8IAEKy6iCc7TpBdiSJZ/vAKQ==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@babel/core': 7.17.12
      '@babel/plugin-proposal-class-properties': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-decorators': 7.18.2_@babel+core@7.17.12
      '@babel/plugin-proposal-export-default-from': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-nullish-coalescing-operator': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-object-rest-spread': 7.18.0_@babel+core@7.17.12
      '@babel/plugin-proposal-optional-chaining': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-private-methods': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-transform-arrow-functions': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-block-scoping': 7.18.4_@babel+core@7.17.12
      '@babel/plugin-transform-classes': 7.18.4_@babel+core@7.17.12
      '@babel/plugin-transform-destructuring': 7.18.0_@babel+core@7.17.12
      '@babel/plugin-transform-for-of': 7.18.1_@babel+core@7.17.12
      '@babel/plugin-transform-parameters': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-shorthand-properties': 7.16.7_@babel+core@7.17.12
      '@babel/plugin-transform-spread': 7.17.12_@babel+core@7.17.12
      '@babel/preset-env': 7.18.2_@babel+core@7.17.12
      '@babel/preset-react': 7.17.12_@babel+core@7.17.12
      '@babel/preset-typescript': 7.17.12_@babel+core@7.17.12
      '@babel/register': 7.17.7_@babel+core@7.17.12
      '@storybook/node-logger': 6.4.22
      '@storybook/semver': 7.3.2
      '@types/node': 14.18.21
      '@types/pretty-hrtime': 1.0.1
      babel-loader: 8.2.5_4bf35c6ryl6gwyrcrj2ykng7ny
      babel-plugin-macros: 3.1.0
      babel-plugin-polyfill-corejs3: 0.1.7_@babel+core@7.17.12
      chalk: 4.1.2
      core-js: 3.23.1
      express: 4.18.1
      file-system-cache: 1.1.0
      find-up: 5.0.0
      fork-ts-checker-webpack-plugin: 6.5.2_l2tljvf7qg4dnwbeffjdh4wj4e
      fs-extra: 9.1.0
      glob: 7.2.3
      handlebars: 4.7.7
      interpret: 2.2.0
      json5: 2.2.1
      lazy-universal-dotenv: 3.0.1
      picomatch: 2.3.1
      pkg-dir: 5.0.0
      pretty-hrtime: 1.0.3
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      resolve-from: 5.0.0
      slash: 3.0.0
      telejson: 5.3.3
      ts-dedent: 2.2.0
      typescript: 4.8.4
      util-deprecate: 1.0.2
      webpack: 4.44.2
    transitivePeerDependencies:
      - eslint
      - supports-color
      - vue-template-compiler
      - webpack-cli
      - webpack-command
    dev: true

  /@storybook/core-events/6.4.22:
    resolution:
      {
        integrity: sha512-5GYY5+1gd58Gxjqex27RVaX6qbfIQmJxcbzbNpXGNSqwqAuIIepcV1rdCVm6I4C3Yb7/AQ3cN5dVbf33QxRIwA==
      }
    dependencies:
      core-js: 3.23.1
    dev: true

  /@storybook/core-server/6.4.22_xf6r4yukfywdkj47txjlawutqi:
    resolution:
      {
        integrity: sha512-wFh3e2fa0un1d4+BJP+nd3FVWUO7uHTqv3OGBfOmzQMKp4NU1zaBNdSQG7Hz6mw0fYPBPZgBjPfsJRwIYLLZyw==
      }
    peerDependencies:
      '@storybook/builder-webpack5': 6.4.22
      '@storybook/manager-webpack5': 6.4.22
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
      typescript: '*'
    peerDependenciesMeta:
      '@storybook/builder-webpack5':
        optional: true
      '@storybook/manager-webpack5':
        optional: true
      typescript:
        optional: true
    dependencies:
      '@discoveryjs/json-ext': 0.5.7
      '@storybook/builder-webpack4': 6.4.22_xf6r4yukfywdkj47txjlawutqi
      '@storybook/core-client': 6.4.22_m2ha4wqgs5y6chnytfqlahqmme
      '@storybook/core-common': 6.4.22_4o36x7vjmnuefo3jox56hgoacm
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/csf-tools': 6.4.22
      '@storybook/manager-webpack4': 6.4.22_xf6r4yukfywdkj47txjlawutqi
      '@storybook/node-logger': 6.4.22
      '@storybook/semver': 7.3.2
      '@storybook/store': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@types/node': 14.18.21
      '@types/node-fetch': 2.6.2
      '@types/pretty-hrtime': 1.0.1
      '@types/webpack': 4.41.32
      better-opn: 2.1.1
      boxen: 5.1.2
      chalk: 4.1.2
      cli-table3: 0.6.2
      commander: 6.2.1
      compression: 1.7.4
      core-js: 3.23.1
      cpy: 8.1.2
      detect-port: 1.3.0
      express: 4.18.1
      file-system-cache: 1.1.0
      fs-extra: 9.1.0
      globby: 11.1.0
      ip: 1.1.8
      lodash: 4.17.21
      node-fetch: 2.6.7
      pretty-hrtime: 1.0.3
      prompts: 2.4.2
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
      serve-favicon: 2.5.0
      slash: 3.0.0
      telejson: 5.3.3
      ts-dedent: 2.2.0
      typescript: 4.8.4
      util-deprecate: 1.0.2
      watchpack: 2.4.0
      webpack: 4.44.2
      ws: 8.8.0
    transitivePeerDependencies:
      - '@types/react'
      - bufferutil
      - encoding
      - eslint
      - supports-color
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
      - webpack-command
    dev: true

  /@storybook/core/6.4.22_m2ha4wqgs5y6chnytfqlahqmme:
    resolution:
      {
        integrity: sha512-KZYJt7GM5NgKFXbPRZZZPEONZ5u/tE/cRbMdkn/zWN3He8+VP+65/tz8hbriI/6m91AWVWkBKrODSkeq59NgRA==
      }
    peerDependencies:
      '@storybook/builder-webpack5': 6.4.22
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
      typescript: '*'
      webpack: '*'
    peerDependenciesMeta:
      '@storybook/builder-webpack5':
        optional: true
      typescript:
        optional: true
    dependencies:
      '@storybook/core-client': 6.4.22_m2ha4wqgs5y6chnytfqlahqmme
      '@storybook/core-server': 6.4.22_xf6r4yukfywdkj47txjlawutqi
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      typescript: 4.8.4
      webpack: 4.44.2
    transitivePeerDependencies:
      - '@storybook/manager-webpack5'
      - '@types/react'
      - bufferutil
      - encoding
      - eslint
      - supports-color
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
      - webpack-command
    dev: true

  /@storybook/csf-tools/6.4.22:
    resolution:
      {
        integrity: sha512-LMu8MZAiQspJAtMBLU2zitsIkqQv7jOwX7ih5JrXlyaDticH7l2j6Q+1mCZNWUOiMTizj0ivulmUsSaYbpToSw==
      }
    dependencies:
      '@babel/core': 7.17.12
      '@babel/generator': 7.18.2
      '@babel/parser': 7.18.5
      '@babel/plugin-transform-react-jsx': 7.17.12_@babel+core@7.17.12
      '@babel/preset-env': 7.18.2_@babel+core@7.17.12
      '@babel/traverse': 7.18.5
      '@babel/types': 7.18.4
      '@mdx-js/mdx': 1.6.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      core-js: 3.23.1
      fs-extra: 9.1.0
      global: 4.4.0
      js-string-escape: 1.0.1
      lodash: 4.17.21
      prettier: 2.3.0
      regenerator-runtime: 0.13.9
      ts-dedent: 2.2.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@storybook/csf/0.0.2--canary.87bc651.0:
    resolution:
      {
        integrity: sha512-ajk1Uxa+rBpFQHKrCcTmJyQBXZ5slfwHVEaKlkuFaW77it8RgbPJp/ccna3sgoi8oZ7FkkOyvv1Ve4SmwFqRqw==
      }
    dependencies:
      lodash: 4.17.21
    dev: true

  /@storybook/manager-webpack4/6.4.22_xf6r4yukfywdkj47txjlawutqi:
    resolution:
      {
        integrity: sha512-nzhDMJYg0vXdcG0ctwE6YFZBX71+5NYaTGkxg3xT7gbgnP1YFXn9gVODvgq3tPb3gcRapjyOIxUa20rV+r8edA==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@babel/core': 7.17.12
      '@babel/plugin-transform-template-literals': 7.18.2_@babel+core@7.17.12
      '@babel/preset-react': 7.17.12_@babel+core@7.17.12
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core-client': 6.4.22_m2ha4wqgs5y6chnytfqlahqmme
      '@storybook/core-common': 6.4.22_4o36x7vjmnuefo3jox56hgoacm
      '@storybook/node-logger': 6.4.22
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/ui': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@types/node': 14.18.21
      '@types/webpack': 4.41.32
      babel-loader: 8.2.5_4bf35c6ryl6gwyrcrj2ykng7ny
      case-sensitive-paths-webpack-plugin: 2.4.0
      chalk: 4.1.2
      core-js: 3.23.1
      css-loader: 3.6.0_webpack@4.44.2
      express: 4.18.1
      file-loader: 6.2.0_webpack@4.44.2
      file-system-cache: 1.1.0
      find-up: 5.0.0
      fs-extra: 9.1.0
      html-webpack-plugin: 4.5.2_webpack@4.44.2
      node-fetch: 2.6.7
      pnp-webpack-plugin: 1.6.4_typescript@4.8.4
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      read-pkg-up: 7.0.1
      regenerator-runtime: 0.13.9
      resolve-from: 5.0.0
      style-loader: 1.3.0_webpack@4.44.2
      telejson: 5.3.3
      terser-webpack-plugin: 4.2.3_webpack@4.44.2
      ts-dedent: 2.2.0
      typescript: 4.8.4
      url-loader: 4.1.1_zmzwotvrfu62vdeozbyveyswza
      util-deprecate: 1.0.2
      webpack: 4.44.2
      webpack-dev-middleware: 3.7.3_2jhnw6fokymnjfoumvhvkjoyjq
      webpack-virtual-modules: 0.2.2
    transitivePeerDependencies:
      - '@types/react'
      - encoding
      - eslint
      - supports-color
      - vue-template-compiler
      - webpack-cli
      - webpack-command
    dev: true

  /@storybook/node-logger/6.4.22:
    resolution:
      {
        integrity: sha512-sUXYFqPxiqM7gGH7gBXvO89YEO42nA4gBicJKZjj9e+W4QQLrftjF9l+mAw2K0mVE10Bn7r4pfs5oEZ0aruyyA==
      }
    dependencies:
      '@types/npmlog': 4.1.4
      chalk: 4.1.2
      core-js: 3.23.1
      npmlog: 5.0.1
      pretty-hrtime: 1.0.3
    dev: true

  /@storybook/postinstall/6.4.22:
    resolution:
      {
        integrity: sha512-LdIvA+l70Mp5FSkawOC16uKocefc+MZLYRHqjTjgr7anubdi6y7W4n9A7/Yw4IstZHoknfL88qDj/uK5N+Ahzw==
      }
    dependencies:
      core-js: 3.23.1
    dev: true

  /@storybook/preview-web/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-sWS+sgvwSvcNY83hDtWUUL75O2l2LY/GTAS0Zp2dh3WkObhtuJ/UehftzPZlZmmv7PCwhb4Q3+tZDKzMlFxnKQ==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/channel-postmessage': 6.4.22
      '@storybook/client-logger': 6.4.22
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/store': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      ansi-to-html: 0.6.15
      core-js: 3.23.1
      global: 4.4.0
      lodash: 4.17.21
      qs: 6.10.5
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
      synchronous-promise: 2.0.15
      ts-dedent: 2.2.0
      unfetch: 4.2.0
      util-deprecate: 1.0.2
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/react-docgen-typescript-plugin/1.0.2-canary.253f8c1.0_l2tljvf7qg4dnwbeffjdh4wj4e:
    resolution:
      {
        integrity: sha512-mmoRG/rNzAiTbh+vGP8d57dfcR2aP+5/Ll03KKFyfy5FqWFm/Gh7u27ikx1I3LmVMI8n6jh5SdWMkMKon7/tDw==
      }
    peerDependencies:
      typescript: '>= 3.x'
      webpack: '>= 4'
    dependencies:
      debug: 4.3.4
      endent: 2.1.0
      find-cache-dir: 3.3.2
      flat-cache: 3.0.4
      micromatch: 4.0.5
      react-docgen-typescript: 2.2.2_typescript@4.8.4
      tslib: 2.3.1
      typescript: 4.8.4
      webpack: 4.44.2
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@storybook/react/6.4.22_6pxnn2xtr5yph4wackblrq76km:
    resolution:
      {
        integrity: sha512-5BFxtiguOcePS5Ty/UoH7C6odmvBYIZutfiy4R3Ua6FYmtxac5vP9r5KjCz1IzZKT8mCf4X+PuK1YvDrPPROgQ==
      }
    engines: { node: '>=10.13.0' }
    hasBin: true
    peerDependencies:
      '@babel/core': ^7.11.5
      '@types/node': '>=12'
      '@types/react': '>=16'
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
      typescript: '*'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      typescript:
        optional: true
    dependencies:
      '@babel/core': 7.17.12
      '@babel/preset-flow': 7.17.12_@babel+core@7.17.12
      '@babel/preset-react': 7.17.12_@babel+core@7.17.12
      '@pmmmwh/react-refresh-webpack-plugin': 0.5.7_yceubsmjd6jm3woocckpqejnhy
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core': 6.4.22_m2ha4wqgs5y6chnytfqlahqmme
      '@storybook/core-common': 6.4.22_4o36x7vjmnuefo3jox56hgoacm
      '@storybook/csf': 0.0.2--canary.87bc651.0
      '@storybook/node-logger': 6.4.22
      '@storybook/react-docgen-typescript-plugin': 1.0.2-canary.253f8c1.0_l2tljvf7qg4dnwbeffjdh4wj4e
      '@storybook/semver': 7.3.2
      '@storybook/store': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@types/node': 12.20.24
      '@types/react': 16.14.23
      '@types/webpack-env': 1.17.0
      babel-plugin-add-react-displayname: 0.0.5
      babel-plugin-named-asset-import: 0.3.8_@babel+core@7.17.12
      babel-plugin-react-docgen: 4.2.1
      core-js: 3.23.1
      global: 4.4.0
      lodash: 4.17.21
      prop-types: 15.8.1
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-refresh: 0.11.0
      read-pkg-up: 7.0.1
      regenerator-runtime: 0.13.9
      ts-dedent: 2.2.0
      typescript: 4.8.4
      webpack: 4.44.2
    transitivePeerDependencies:
      - '@storybook/builder-webpack5'
      - '@storybook/manager-webpack5'
      - '@types/webpack'
      - bufferutil
      - encoding
      - eslint
      - sockjs-client
      - supports-color
      - type-fest
      - utf-8-validate
      - vue-template-compiler
      - webpack-cli
      - webpack-command
      - webpack-dev-server
      - webpack-hot-middleware
      - webpack-plugin-serve
    dev: true

  /@storybook/router/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-zeuE8ZgFhNerQX8sICQYNYL65QEi3okyzw7ynF58Ud6nRw4fMxSOHcj2T+nZCIU5ufozRL4QWD/Rg9P2s/HtLw==
      }
    peerDependencies:
      '@types/react': '>=16'
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    dependencies:
      '@storybook/client-logger': 6.4.22
      '@types/react': 16.14.23
      core-js: 3.23.1
      fast-deep-equal: 3.1.3
      global: 4.4.0
      history: 5.0.0
      lodash: 4.17.21
      memoizerific: 1.11.3
      qs: 6.10.5
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-router: 6.3.0_qjwx5m6wssz3lnb35xwkc3pz6q
      react-router-dom: 6.3.0_e4p5kqppx5gth2ijr2xdvk24ma
      ts-dedent: 2.2.0
    dev: true

  /@storybook/semver/7.3.2:
    resolution:
      {
        integrity: sha512-SWeszlsiPsMI0Ps0jVNtH64cI5c0UF3f7KgjVKJoNP30crQ6wUSddY2hsdeczZXEKVJGEn50Q60flcGsQGIcrg==
      }
    engines: { node: '>=10' }
    hasBin: true
    dependencies:
      core-js: 3.23.1
      find-up: 4.1.0
    dev: true

  /@storybook/source-loader/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-O4RxqPgRyOgAhssS6q1Rtc8LiOvPBpC1EqhCYWRV3K+D2EjFarfQMpjgPj18hC+QzpUSfzoBZYqsMECewEuLNw==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/client-logger': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      core-js: 3.23.1
      estraverse: 5.3.0
      global: 4.4.0
      loader-utils: 2.0.2
      lodash: 4.17.21
      prettier: 2.3.0
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/store/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-lrmcZtYJLc2emO+1l6AG4Txm9445K6Pyv9cGAuhOJ9Kks0aYe0YtvMkZVVry0RNNAIv6Ypz72zyKc/QK+tZLAQ==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    dependencies:
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/client-logger': 6.4.22
      '@storybook/core-events': 6.4.22
      '@storybook/csf': 0.0.2--canary.87bc651.0
      core-js: 3.23.1
      fast-deep-equal: 3.1.3
      global: 4.4.0
      lodash: 4.17.21
      memoizerific: 1.11.3
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      regenerator-runtime: 0.13.9
      slash: 3.0.0
      stable: 0.1.8
      synchronous-promise: 2.0.15
      ts-dedent: 2.2.0
      util-deprecate: 1.0.2
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/theming/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-NVMKH/jxSPtnMTO4VCN1k47uztq+u9fWv4GSnzq/eezxdGg9ceGL4/lCrNGoNajht9xbrsZ4QvsJ/V2sVGM8wA==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    dependencies:
      '@emotion/core': 10.3.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@emotion/is-prop-valid': 0.8.8
      '@emotion/serialize': 1.0.4
      '@emotion/styled': 10.3.0_tpm53lxjhhnjmtj6wgjp3t3pxi
      '@emotion/utils': 1.1.0
      '@storybook/client-logger': 6.4.22
      core-js: 3.23.1
      deep-object-diff: 1.1.7
      emotion-theming: 10.3.0_tpm53lxjhhnjmtj6wgjp3t3pxi
      global: 4.4.0
      memoizerific: 1.11.3
      polished: 4.2.2
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      resolve-from: 5.0.0
      ts-dedent: 2.2.0
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@storybook/ui/6.4.22_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-UVjMoyVsqPr+mkS1L7m30O/xrdIEgZ5SCWsvqhmyMUok3F3tRB+6M+OA5Yy+cIVfvObpA7MhxirUT1elCGXsWQ==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
      react-dom: ^16.8.0 || ^17.0.0
    dependencies:
      '@emotion/core': 10.3.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@storybook/addons': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/api': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/channels': 6.4.22
      '@storybook/client-logger': 6.4.22
      '@storybook/components': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/core-events': 6.4.22
      '@storybook/router': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      '@storybook/semver': 7.3.2
      '@storybook/theming': 6.4.22_e4p5kqppx5gth2ijr2xdvk24ma
      copy-to-clipboard: 3.3.1
      core-js: 3.23.1
      core-js-pure: 3.23.1
      downshift: 6.1.7_react@16.13.1
      emotion-theming: 10.3.0_tpm53lxjhhnjmtj6wgjp3t3pxi
      fuse.js: 3.6.1
      global: 4.4.0
      lodash: 4.17.21
      markdown-to-jsx: 7.1.7_react@16.13.1
      memoizerific: 1.11.3
      polished: 4.2.2
      qs: 6.10.5
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-draggable: 4.4.5_5owmthsvj5ictknaj3ev736ofq
      react-helmet-async: 1.3.0_5owmthsvj5ictknaj3ev736ofq
      react-sizeme: 3.0.2
      regenerator-runtime: 0.13.9
      resolve-from: 5.0.0
      store2: 2.13.2
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /@szmarczak/http-timer/1.1.2:
    resolution:
      {
        integrity: sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==
      }
    engines: { node: '>=6' }
    dependencies:
      defer-to-connect: 1.1.3
    dev: true

  /@tootallnate/once/1.1.2:
    resolution:
      {
        integrity: sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw==
      }
    engines: { node: '>= 6' }

  /@tootallnate/once/2.0.0:
    resolution:
      {
        integrity: sha512-XCuKFP5PS55gnMVu3dty8KPatLqUoy/ZYzDzAGCQ8JNFCkLXzmI7vNHCR+XpbZaMWQK/vQubr7PkYq8g470J/A==
      }
    engines: { node: '>= 10' }
    dev: false

  /@trpc/server/9.25.2:
    resolution:
      {
        integrity: sha512-E5ibK5jLgWremiPs2pO+Y/YktRH7+CqmMwp97mTp9ymYZn3od4C9TuFg6bxEK1bQKnUezpzHJyGRADVKCWrjsw==
      }
    dev: true

  /@trysound/sax/0.2.0:
    resolution:
      {
        integrity: sha512-L7z9BgrNEcYyUYtF+HaEfiS5ebkh9jXqbszz7pC0hRBPaatV0XjSD3+eHrpqFemQfgwiFF0QPIarnIihIDn7OA==
      }
    engines: { node: '>=10.13.0' }
    dev: false

  /@tsconfig/node10/1.0.9:
    resolution:
      {
        integrity: sha512-jNsYVVxU8v5g43Erja32laIDHXeoNvFEpX33OK4d6hljo3jDhCBDhx5dhCCTMWUojscpAagGiRkBKxpdl9fxqA==
      }

  /@tsconfig/node12/1.0.11:
    resolution:
      {
        integrity: sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==
      }

  /@tsconfig/node14/1.0.3:
    resolution:
      {
        integrity: sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==
      }

  /@tsconfig/node16/1.0.3:
    resolution:
      {
        integrity: sha512-yOlFc+7UtL/89t2ZhjPvvB/DeAr3r+Dq58IgzsFkOAvVC6NMJXmCGjbptdXdR9qsX7pKcTL+s87FtYREi2dEEQ==
      }

  /@types/argparse/1.0.38:
    resolution:
      {
        integrity: sha512-ebDJ9b0e702Yr7pWgB0jzm+CX4Srzz8RcXtLJDJB+BSccqMa36uyH/zUsSYao5+BD1ytv3k3rPYCq4mAE1hsXA==
      }

  /@types/aws-lambda/8.10.93:
    resolution:
      {
        integrity: sha512-Vsyi9ogDAY3REZDjYnXMRJJa62SDvxHXxJI5nGDQdZW058dDE+av/anynN2rLKbCKXDRNw3D/sQmqxVflZFi4A==
      }
    dev: true

  /@types/babel__core/7.1.19:
    resolution:
      {
        integrity: sha512-WEOTgRsbYkvA/KCsDwVEGkd7WAr1e3g31VHQ8zy5gul/V1qKullU/BU5I68X5v7V3GnB9eotmom4v5a5gjxorw==
      }
    dependencies:
      '@babel/parser': 7.18.5
      '@babel/types': 7.18.4
      '@types/babel__generator': 7.6.4
      '@types/babel__template': 7.4.1
      '@types/babel__traverse': 7.17.1

  /@types/babel__generator/7.6.4:
    resolution:
      {
        integrity: sha512-tFkciB9j2K755yrTALxD44McOrk+gfpIpvC3sxHjRawj6PfnQxrse4Clq5y/Rq+G3mrBurMax/lG8Qn2t9mSsg==
      }
    dependencies:
      '@babel/types': 7.18.4

  /@types/babel__template/7.4.1:
    resolution:
      {
        integrity: sha512-azBFKemX6kMg5Io+/rdGT0dkGreboUVR0Cdm3fz9QJWpaQGJRQXl7C+6hOTCZcMll7KFyEQpgbYI2lHdsS4U7g==
      }
    dependencies:
      '@babel/parser': 7.18.5
      '@babel/types': 7.18.4

  /@types/babel__traverse/7.17.1:
    resolution:
      {
        integrity: sha512-kVzjari1s2YVi77D3w1yuvohV2idweYXMCDzqBiVNN63TcDWrIlTVOYpqVrvbbyOE/IyzBoTKF0fdnLPEORFxA==
      }
    dependencies:
      '@babel/types': 7.18.4

  /@types/body-parser/1.19.2:
    resolution:
      {
        integrity: sha512-ALYone6pm6QmwZoAgeyNksccT9Q4AWZQ6PvfwR37GT6r6FWUPguq6sUmNGSMV2Wr761oQoBxwGGa6DR5o1DC9g==
      }
    dependencies:
      '@types/connect': 3.4.35
      '@types/node': 12.20.24

  /@types/bonjour/3.5.10:
    resolution:
      {
        integrity: sha512-p7ienRMiS41Nu2/igbJxxLDWrSZ0WxM8UQgCeO9KhoVF7cOVFkrKsiDr1EsJIla8vV3oEEjGcz11jc5yimhzZw==
      }
    dependencies:
      '@types/node': 12.20.24

  /@types/cli-table/0.3.0:
    resolution:
      {
        integrity: sha512-QnZUISJJXyhyD6L1e5QwXDV/A5i2W1/gl6D6YMc8u0ncPepbv/B4w3S+izVvtAg60m6h+JP09+Y/0zF2mojlFQ==
      }
    dev: true

  /@types/color-convert/2.0.0:
    resolution:
      {
        integrity: sha512-m7GG7IKKGuJUXvkZ1qqG3ChccdIM/qBBo913z+Xft0nKCX4hAU/IxKwZBU4cpRZ7GS5kV4vOblUkILtSShCPXQ==
      }
    dependencies:
      '@types/color-name': 1.1.1
    dev: true

  /@types/color-name/1.1.1:
    resolution:
      {
        integrity: sha512-rr+OQyAjxze7GgWrSaJwydHStIhHq2lvY3BOC2Mj7KnzI7XK0Uw1TOOdI9lDoajEbSWLiYgoo4f1R51erQfhPQ==
      }
    dev: true

  /@types/connect-history-api-fallback/1.3.5:
    resolution:
      {
        integrity: sha512-h8QJa8xSb1WD4fpKBDcATDNGXghFj6/3GRWG6dhmRcu0RX1Ubasur2Uvx5aeEwlf0MwblEC2bMzzMQntxnw/Cw==
      }
    dependencies:
      '@types/express-serve-static-core': 4.17.29
      '@types/node': 12.20.24

  /@types/connect/3.4.35:
    resolution:
      {
        integrity: sha512-cdeYyv4KWoEgpBISTxWvqYsVy444DOqehiF3fM3ne10AmJ62RSyNkUnxMJXHQWRQQX2eR94m5y1IZyDwBjV9FQ==
      }
    dependencies:
      '@types/node': 12.20.24

  /@types/diff/5.0.1:
    resolution:
      {
        integrity: sha512-XIpxU6Qdvp1ZE6Kr3yrkv1qgUab0fyf4mHYvW8N3Bx3PCsbN6or1q9/q72cv5jIFWolaGH08U9XyYoLLIykyKQ==
      }
    dev: true

  /@types/enhanced-resolve/3.0.7:
    resolution:
      {
        integrity: sha512-H23Fzk0BCz4LoKq1ricnLSRQuzoXTv57bGUwC+Cn84kKPaoHIS7bhFhfy4DzMeSBxoXc6jFziYoqpCab1U511w==
      }
    dependencies:
      '@types/node': 12.20.24
      '@types/tapable': 0.2.5
    dev: true

  /@types/eslint-scope/3.7.3:
    resolution:
      {
        integrity: sha512-PB3ldyrcnAicT35TWPs5IcwKD8S333HMaa2VVv4+wdvebJkjWuW/xESoB8IwRcog8HYVYamb1g/R31Qv5Bx03g==
      }
    dependencies:
      '@types/eslint': 8.2.0
      '@types/estree': 0.0.50

  /@types/eslint/8.2.0:
    resolution:
      {
        integrity: sha512-74hbvsnc+7TEDa1z5YLSe4/q8hGYB3USNvCuzHUJrjPV6hXaq8IXcngCrHkuvFt0+8rFz7xYXrHgNayIX0UZvQ==
      }
    dependencies:
      '@types/estree': 0.0.50
      '@types/json-schema': 7.0.11

  /@types/estree/0.0.50:
    resolution:
      {
        integrity: sha512-C6N5s2ZFtuZRj54k2/zyRhNDjJwwcViAM3Nbm8zjBpbqAdZ00mr0CFxvSKeO8Y/e03WVFLpQMdHYVfUd6SB+Hw==
      }

  /@types/events/3.0.0:
    resolution:
      {
        integrity: sha512-EaObqwIvayI5a8dCzhFrjKzVwKLxjoG9T6Ppd5CEo07LRKfQ8Yokw54r5+Wq7FaBQ+yXRvQAYPrHwya1/UFt9g==
      }
    dev: true

  /@types/express-serve-static-core/4.17.29:
    resolution:
      {
        integrity: sha512-uMd++6dMKS32EOuw1Uli3e3BPgdLIXmezcfHv7N4c1s3gkhikBplORPpMq3fuWkxncZN1reb16d5n8yhQ80x7Q==
      }
    dependencies:
      '@types/node': 12.20.24
      '@types/qs': 6.9.7
      '@types/range-parser': 1.2.4

  /@types/express/4.17.13:
    resolution:
      {
        integrity: sha512-6bSZTPaTIACxn48l50SR+axgrqm6qXFIxrdAKaG6PaJk3+zuUr35hBlgT7vOmJcum+OEaIBLtHV/qloEAFITeA==
      }
    dependencies:
      '@types/body-parser': 1.19.2
      '@types/express-serve-static-core': 4.17.29
      '@types/qs': 6.9.7
      '@types/serve-static': 1.13.10

  /@types/fs-extra/7.0.0:
    resolution:
      {
        integrity: sha512-ndoMMbGyuToTy4qB6Lex/inR98nPiNHacsgMPvy+zqMLgSxbt8VtWpDArpGp69h1fEDQHn1KB+9DWD++wgbwYA==
      }
    dependencies:
      '@types/node': 12.20.24
    dev: true

  /@types/glob/7.1.1:
    resolution:
      {
        integrity: sha512-1Bh06cbWJUHMC97acuD6UMG29nMt0Aqz1vF3guLfG+kHHJhy3AyohZFFxYk2f7Q1SQIrNwvncxAE0N/9s70F2w==
      }
    dependencies:
      '@types/events': 3.0.0
      '@types/minimatch': 3.0.5
      '@types/node': 12.20.24
    dev: true

  /@types/graceful-fs/4.1.5:
    resolution:
      {
        integrity: sha512-anKkLmZZ+xm4p8JWBf4hElkM4XR+EZeA2M9BAkkTldmcyDY4mbdIJnRghDJH3Ov5ooY7/UAoENtmdMSkaAd7Cw==
      }
    dependencies:
      '@types/node': 12.20.24

  /@types/hast/2.3.4:
    resolution:
      {
        integrity: sha512-wLEm0QvaoawEDoTRwzTXp4b4jpwiJDvR5KMnFnVodm3scufTlBOWRD6N1OBf9TZMhjlNsSfcO5V+7AF4+Vy+9g==
      }
    dependencies:
      '@types/unist': 2.0.6
    dev: true

  /@types/heft-jest/1.0.1:
    resolution:
      {
        integrity: sha512-cF2iEUpvGh2WgLowHVAdjI05xuDo+GwCA8hGV3Q5PBl8apjd6BTcpPFQ2uPlfUM7BLpgur2xpYo8VeBXopMI4A==
      }
    dependencies:
      '@types/jest': 27.4.0
    dev: true

  /@types/html-minifier-terser/5.1.2:
    resolution:
      {
        integrity: sha512-h4lTMgMJctJybDp8CQrxTUiiYmedihHWkjnF/8Pxseu2S6Nlfcy8kwboQ8yejh456rP2yWoEVm1sS/FVsfM48w==
      }

  /@types/html-minifier-terser/6.1.0:
    resolution:
      {
        integrity: sha512-oh/6byDPnL1zeNXFrDXFLyZjkr1MsBG667IM792caf1L2UPOOMf65NFzjUH/ltyfwjAGfs1rsX1eftK0jC/KIg==
      }

  /@types/http-proxy/1.17.9:
    resolution:
      {
        integrity: sha512-QsbSjA/fSk7xB+UXlCT3wHBy5ai9wOcNDWwZAtud+jXhwOM3l+EYZh8Lng4+/6n8uar0J7xILzqftJdJ/Wdfkw==
      }
    dependencies:
      '@types/node': 12.20.24

  /@types/inquirer/7.3.1:
    resolution:
      {
        integrity: sha512-osD38QVIfcdgsPCT0V3lD7eH0OFurX71Jft18bZrsVQWVRt6TuxRzlr0GJLrxoHZR2V5ph7/qP8se/dcnI7o0g==
      }
    dependencies:
      '@types/through': 0.0.30
      rxjs: 6.6.7
    dev: true

  /@types/is-function/1.0.1:
    resolution:
      {
        integrity: sha512-A79HEEiwXTFtfY+Bcbo58M2GRYzCr9itHWzbzHVFNEYCcoU/MMGwYYf721gBrnhpj1s6RGVVha/IgNFnR0Iw/Q==
      }
    dev: true

  /@types/istanbul-lib-coverage/2.0.4:
    resolution:
      {
        integrity: sha512-z/QT1XN4K4KYuslS23k62yDIDLwLFkzxOuMplDtObz0+y7VqJCaO2o+SPwHCvLFZh7xazvvoor2tA/hPz9ee7g==
      }

  /@types/istanbul-lib-report/3.0.0:
    resolution:
      {
        integrity: sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg==
      }
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4

  /@types/istanbul-reports/3.0.1:
    resolution:
      {
        integrity: sha512-c3mAZEuK0lvBp8tmuL74XRKn1+y2dcwOUpH7x4WrF6gk1GIgiluDRgMYQtw2OFcBvAJWlt6ASU3tSqxp0Uu0Aw==
      }
    dependencies:
      '@types/istanbul-lib-report': 3.0.0

  /@types/jest/27.4.0:
    resolution:
      {
        integrity: sha512-gHl8XuC1RZ8H2j5sHv/JqsaxXkDDM9iDOgu0Wp8sjs4u/snb2PVehyWXJPr+ORA0RPpgw231mnutWI1+0hgjIQ==
      }
    dependencies:
      jest-diff: 27.5.1
      pretty-format: 27.5.1

  /@types/jju/1.4.1:
    resolution:
      {
        integrity: sha512-LFt+YA7Lv2IZROMwokZKiPNORAV5N3huMs3IKnzlE430HWhWYZ8b+78HiwJXJJP1V2IEjinyJURuRJfGoaFSIA==
      }
    dev: true

  /@types/js-yaml/3.12.1:
    resolution:
      {
        integrity: sha512-SGGAhXLHDx+PK4YLNcNGa6goPf9XRWQNAUUbffkwVGGXIxmDKWyGGL4inzq2sPmExu431Ekb9aEMn9BkPqEYFA==
      }
    dev: true

  /@types/json-schema/7.0.11:
    resolution:
      {
        integrity: sha512-wOuvG1SN4Us4rez+tylwwwCV1psiNVOkJeM3AUWUNWg/jDQY2+HE/444y5gc+jBmRqASOm2Oeh5c1axHobwRKQ==
      }

  /@types/loader-utils/1.1.3:
    resolution:
      {
        integrity: sha512-euKGFr2oCB3ASBwG39CYJMR3N9T0nanVqXdiH7Zu/Nqddt6SmFRxytq/i2w9LQYNQekEtGBz+pE3qG6fQTNvRg==
      }
    dependencies:
      '@types/node': 12.20.24
      '@types/webpack': 4.41.32
    dev: true

  /@types/lodash/4.14.116:
    resolution:
      {
        integrity: sha512-lRnAtKnxMXcYYXqOiotTmJd74uawNWuPnsnPrrO7HiFuE3npE2iQhfABatbYDyxTNqZNuXzcKGhw37R7RjBFLg==
      }

  /@types/long/4.0.0:
    resolution:
      {
        integrity: sha512-1w52Nyx4Gq47uuu0EVcsHBxZFJgurQ+rTKS3qMHxR1GY2T8c2AJYd6vZoZ9q1rupaDjU0yT+Jc2XTyXkjeMA+Q==
      }
    dev: false

  /@types/mdast/3.0.10:
    resolution:
      {
        integrity: sha512-W864tg/Osz1+9f4lrGTZpCSO5/z4608eUp19tbozkq2HJK6i3z1kT0H9tlADXuYIb1YYOBByU4Jsqkk75q48qA==
      }
    dependencies:
      '@types/unist': 2.0.6
    dev: true

  /@types/mime-types/2.1.1:
    resolution:
      {
        integrity: sha512-vXOTGVSLR2jMw440moWTC7H19iUyLtP3Z1YTj7cSsubOICinjMxFeb/V57v9QdyyPGbbWolUFSSmSiRSn94tFw==
      }
    dev: true

  /@types/mime/1.3.2:
    resolution:
      {
        integrity: sha512-YATxVxgRqNH6nHEIsvg6k2Boc1JHI9ZbH5iWFFv/MTkchz3b1ieGDa5T0a9RznNdI0KhVbdbWSN+KWWrQZRxTw==
      }

  /@types/minimatch/3.0.5:
    resolution:
      {
        integrity: sha512-Klz949h02Gz2uZCMGwDUSDS1YBlTdDDgbWHi+81l29tQALUtvz4rAYi5uoVhE5Lagoq6DeqAUlbrHvW/mXDgdQ==
      }
    dev: true

  /@types/minimist/1.2.2:
    resolution:
      {
        integrity: sha512-jhuKLIRrhvCPLqwPcx6INqmKeiA5EWrsCOPhrlFSrbrmU4ZMPjj5Ul/oLCMDO98XRUIwVm78xICz4EPCektzeQ==
      }
    dev: false

  /@types/minipass/3.1.2:
    resolution:
      {
        integrity: sha512-foLGjgrJkUjLG/o2t2ymlZGEoBNBa/TfoUZ7oCTkOjP1T43UGBJspovJou/l3ZuHvye2ewR5cZNtp2zyWgILMA==
      }
    dependencies:
      '@types/node': 12.20.24
    dev: true

  /@types/node-fetch/1.6.9:
    resolution:
      {
        integrity: sha512-n2r6WLoY7+uuPT7pnEtKJCmPUGyJ+cbyBR8Avnu4+m1nzz7DwBVuyIvvlBzCZ/nrpC7rIgb3D6pNavL7rFEa9g==
      }
    dependencies:
      '@types/node': 12.20.24

  /@types/node-fetch/2.6.2:
    resolution:
      {
        integrity: sha512-DHqhlq5jeESLy19TYhLakJ07kNumXWjcDdxXsLUMJZ6ue8VZJj4kLPQVE/2mdHh3xZziNF1xppu5lwmS53HR+A==
      }
    dependencies:
      '@types/node': 12.20.24
      form-data: 3.0.1

  /@types/node-forge/1.0.4:
    resolution:
      {
        integrity: sha512-UpX8LTRrarEZPQvQqF5/6KQAqZolOVckH7txWdlsWIJrhBFFtwEUTcqeDouhrJl6t0F7Wg5cyUOAqqF8a6hheg==
      }
    dependencies:
      '@types/node': 12.20.24
    dev: true

  /@types/node-sass/4.11.2:
    resolution:
      {
        integrity: sha512-pOFlTw/OtZda4e+yMjq6/QYuvY0RDMQ+mxXdWj7rfSyf18V8hS4SfgurO+MasAkQsv6Wt6edOGlwh5QqJml9gw==
      }
    dependencies:
      '@types/node': 12.20.24
    dev: true

  /@types/node/10.17.60:
    resolution:
      {
        integrity: sha512-F0KIgDJfy2nA3zMLmWGKxcH2ZVEtCZXHHdOQs2gSaQ27+lNeEfGxzkIw90aXswATX7AZ33tahPbzy6KAfUreVw==
      }
    dev: true

  /@types/node/12.20.24:
    resolution:
      {
        integrity: sha512-yxDeaQIAJlMav7fH5AQqPH1u8YIuhYJXYBzxaQ4PifsU0GDO38MSdmEDeRlIxrKbC6NbEaaEHDanWb+y30U8SQ==
      }

  /@types/node/14.18.21:
    resolution:
      {
        integrity: sha512-x5W9s+8P4XteaxT/jKF0PSb7XEvo5VmqEWgsMlyeY4ZlLK8I6aH6g5TPPyDlLAep+GYf4kefb7HFyc7PAO3m+Q==
      }
    dev: true

  /@types/normalize-package-data/2.4.1:
    resolution:
      {
        integrity: sha512-Gj7cI7z+98M282Tqmp2K5EIsoouUEzbBJhQQzDE3jSIRk6r9gsz0oUokqIUR4u1R3dMHo0pDHM7sNOHyhulypw==
      }

  /@types/npm-package-arg/6.1.0:
    resolution:
      {
        integrity: sha512-vbt5fb0y1svMhu++1lwtKmZL76d0uPChFlw7kEzyUmTwfmpHRcFb8i0R8ElT69q/L+QLgK2hgECivIAvaEDwag==
      }
    dev: true

  /@types/npm-packlist/1.1.2:
    resolution:
      {
        integrity: sha512-9NYoEH87t90e6dkaQOuUTY/R1xUE0a67sXzJBuAB+b+/z4FysHFD19g/O154ToGjyWqKYkezVUtuBdtfd4hyfw==
      }
    dev: true

  /@types/npmlog/4.1.4:
    resolution:
      {
        integrity: sha512-WKG4gTr8przEZBiJ5r3s8ZIAoMXNbOgQ+j/d5O4X3x6kZJRLNvyUJuUK/KoG3+8BaOHPhp2m7WC6JKKeovDSzQ==
      }
    dev: true

  /@types/overlayscrollbars/1.12.1:
    resolution:
      {
        integrity: sha512-V25YHbSoKQN35UasHf0EKD9U2vcmexRSp78qa8UglxFH8H3D+adEa9zGZwrqpH4TdvqeMrgMqVqsLB4woAryrQ==
      }
    dev: true

  /@types/parse-json/4.0.0:
    resolution:
      {
        integrity: sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==
      }

  /@types/parse5/5.0.3:
    resolution:
      {
        integrity: sha512-kUNnecmtkunAoQ3CnjmMkzNU/gtxG8guhi+Fk2U/kOpIKjIMKnXGp4IJCgQJrXSgMsWYimYG4TGjz/UzbGEBTw==
      }
    dev: true

  /@types/prettier/2.6.3:
    resolution:
      {
        integrity: sha512-ymZk3LEC/fsut+/Q5qejp6R9O1rMxz3XaRHDV6kX8MrGAhOSPqVARbDi+EZvInBpw+BnCX3TD240byVkOfQsHg==
      }

  /@types/pretty-hrtime/1.0.1:
    resolution:
      {
        integrity: sha512-VjID5MJb1eGKthz2qUerWT8+R4b9N+CHvGCzg9fn4kWZgaF9AhdYikQio3R7wV8YY1NsQKPaCwKz1Yff+aHNUQ==
      }
    dev: true

  /@types/prop-types/15.7.5:
    resolution:
      {
        integrity: sha512-JCB8C6SnDoQf0cNycqd/35A7MjcnK+ZTqE7judS6o7utxUCg6imJg3QK2qzHKszlTjcj2cn+NwMB2i96ubpj7w==
      }

  /@types/qs/6.9.7:
    resolution:
      {
        integrity: sha512-FGa1F62FT09qcrueBA6qYTrJPVDzah9a+493+o2PCXsesWHIn27G98TsSMs3WPNbZIEj4+VJf6saSFpvD+3Zsw==
      }

  /@types/range-parser/1.2.4:
    resolution:
      {
        integrity: sha512-EEhsLsD6UsDM1yFhAvy0Cjr6VwmpMWqFBCb9w07wVugF7w9nfajxLuVmngTIpgS6svCnm6Vaw+MZhoDCKnOfsw==
      }

  /@types/react-dom/16.9.14:
    resolution:
      {
        integrity: sha512-FIX2AVmPTGP30OUJ+0vadeIFJJ07Mh1m+U0rxfgyW34p3rTlXI+nlenvAxNn4BP36YyI9IJ/+UJ7Wu22N1pI7A==
      }
    dependencies:
      '@types/react': 16.14.23

  /@types/react-syntax-highlighter/11.0.5:
    resolution:
      {
        integrity: sha512-VIOi9i2Oj5XsmWWoB72p3KlZoEbdRAcechJa8Ztebw7bDl2YmR+odxIqhtJGp1q2EozHs02US+gzxJ9nuf56qg==
      }
    dependencies:
      '@types/react': 16.14.23
    dev: true

  /@types/react/16.14.23:
    resolution:
      {
        integrity: sha512-WngBZLuSkP4IAgPi0HOsGCHo6dn3CcuLQnCfC17VbA7YBgipZiZoTOhObwl/93DsFW0Y2a/ZXeonpW4DxirEJg==
      }
    dependencies:
      '@types/prop-types': 15.7.5
      '@types/scheduler': 0.16.2
      csstype: 3.1.0

  /@types/read-package-tree/5.1.0:
    resolution:
      {
        integrity: sha512-QEaGDX5COe5Usog79fca6PEycs59075O/W0QcOJjVNv+ZQ26xjqxg8sWu63Lwdt4KAI08gb4Muho1EbEKs3YFw==
      }
    dev: true

  /@types/resolve/1.17.1:
    resolution:
      {
        integrity: sha512-yy7HuzQhj0dhGpD8RLXSZWEkLsV9ibvxvi6EiJ3bkqLAO1RGo0WbkWQiwpRlSFymTJRz0d3k5LM3kkx8ArDbLw==
      }
    dependencies:
      '@types/node': 12.20.24
    dev: true

  /@types/retry/0.12.0:
    resolution:
      {
        integrity: sha512-wWKOClTTiizcZhXnPY4wikVAwmdYHp8q6DmC+EJUzAMsycb7HB32Kh9RN4+0gExjmPmZSAQjgURXIGATPegAvA==
      }

  /@types/scheduler/0.16.2:
    resolution:
      {
        integrity: sha512-hppQEBDmlwhFAXKJX2KnWLYu5yMfi91yazPb2l+lbJiwW+wdo1gNeRA+3RgNSO39WYX2euey41KEwnqesU2Jew==
      }

  /@types/semver/7.3.5:
    resolution:
      {
        integrity: sha512-iotVxtCCsPLRAvxMFFgxL8HD2l4mAZ2Oin7/VJ2ooWO0VOK4EGOGmZWZn1uCq7RofR3I/1IOSjCHlFT71eVK0Q==
      }

  /@types/serialize-javascript/5.0.2:
    resolution:
      {
        integrity: sha512-BRLlwZzRoZukGaBtcUxkLsZsQfWZpvog6MZk3PWQO9Q6pXmXFzjU5iGzZ+943evp6tkkbN98N1Z31KT0UG1yRw==
      }
    dev: true

  /@types/serve-index/1.9.1:
    resolution:
      {
        integrity: sha512-d/Hs3nWDxNL2xAczmOVZNj92YZCS6RGxfBPjKzuu/XirCgXdpKEb88dYNbrYGint6IVWLNP+yonwVAuRC0T2Dg==
      }
    dependencies:
      '@types/express': 4.17.13

  /@types/serve-static/1.13.10:
    resolution:
      {
        integrity: sha512-nCkHGI4w7ZgAdNkrEu0bv+4xNV/XDqW+DydknebMOQwkpDGx8G+HTlj7R7ABI8i8nKxVw0wtKPi1D+lPOkh4YQ==
      }
    dependencies:
      '@types/mime': 1.3.2
      '@types/node': 12.20.24

  /@types/sockjs/0.3.33:
    resolution:
      {
        integrity: sha512-f0KEEe05NvUnat+boPTZ0dgaLZ4SfSouXUgv5noUiefG2ajgKjmETo9ZJyuqsl7dfl2aHlLJUiki6B4ZYldiiw==
      }
    dependencies:
      '@types/node': 12.20.24

  /@types/source-list-map/0.1.2:
    resolution:
      {
        integrity: sha512-K5K+yml8LTo9bWJI/rECfIPrGgxdpeNbj+d53lwN4QjW1MCwlkhUms+gtdzigTeUyBr09+u8BwOIY3MXvHdcsA==
      }

  /@types/ssri/7.1.1:
    resolution:
      {
        integrity: sha512-DPP/jkDaqGiyU75MyMURxLWyYLwKSjnAuGe9ZCsLp9QZOpXmDfuevk769F0BS86TmRuD5krnp06qw9nSoNO+0g==
      }
    dependencies:
      '@types/node': 12.20.24
    dev: true

  /@types/stack-utils/2.0.1:
    resolution:
      {
        integrity: sha512-Hl219/BT5fLAaz6NDkSuhzasy49dwQS/DSdu4MdggFB8zcXv7vflBI3xp7FEmkmdDkBUI2bPUNeMttp2knYdxw==
      }

  /@types/strict-uri-encode/2.0.0:
    resolution:
      {
        integrity: sha512-R6vDd7CHxcWMzv5wfVhR3qyCRVQoZKwVd6kit0rkozTThRZSXZKEW2Kz3AxfVqq9+UyJAz1g8Q+bJ3CL6NzztQ==
      }
    dev: true

  /@types/strip-bom/3.0.0:
    resolution:
      {
        integrity: sha512-xevGOReSYGM7g/kUBZzPqCrR/KYAo+F0yiPc85WFTJa0MSLtyFTVTU6cJu/aV4mid7IffDIWqo69THF2o4JiEQ==
      }
    dev: true

  /@types/strip-json-comments/0.0.30:
    resolution:
      {
        integrity: sha512-7NQmHra/JILCd1QqpSzl8+mJRc8ZHz3uDm8YV1Ks9IhK0epEiTw8aIErbvH9PI+6XbqhyIQy3462nEsn7UVzjQ==
      }
    dev: true

  /@types/tapable/0.2.5:
    resolution:
      {
        integrity: sha512-dEoVvo/I9QFomyhY+4Q6Qk+I+dhG59TYceZgC6Q0mCifVPErx6Y83PNTKGDS5e9h9Eti6q0S2mm16BU6iQK+3w==
      }
    dev: true

  /@types/tapable/1.0.6:
    resolution:
      {
        integrity: sha512-W+bw9ds02rAQaMvaLYxAbJ6cvguW/iJXNT6lTssS1ps6QdrMKttqEAMEG/b5CR8TZl3/L7/lH0ZV5nNR1LXikA==
      }

  /@types/tar/6.1.1:
    resolution:
      {
        integrity: sha512-8mto3YZfVpqB1CHMaYz1TUYIQfZFbh/QbEq5Hsn6D0ilCfqRVCdalmc89B7vi3jhl9UYIk+dWDABShNfOkv5HA==
      }
    dependencies:
      '@types/minipass': 3.1.2
      '@types/node': 12.20.24
    dev: true

  /@types/through/0.0.30:
    resolution:
      {
        integrity: sha512-FvnCJljyxhPM3gkRgWmxmDZyAQSiBQQWLI0A0VFL0K7W1oRUrPJSqNO0NvTnLkBcotdlp3lKvaT0JrnyRDkzOg==
      }
    dependencies:
      '@types/node': 12.20.24
    dev: true

  /@types/tunnel/0.0.3:
    resolution:
      {
        integrity: sha512-sOUTGn6h1SfQ+gbgqC364jLFBw2lnFqkgF3q0WovEHRLMrVD1sd5aufqi/aJObLekJO+Aq5z646U4Oxy6shXMA==
      }
    dependencies:
      '@types/node': 12.20.24
    dev: false

  /@types/uglify-js/3.16.0:
    resolution:
      {
        integrity: sha512-0yeUr92L3r0GLRnBOvtYK1v2SjqMIqQDHMl7GLb+l2L8+6LSFWEEWEIgVsPdMn5ImLM8qzWT8xFPtQYpp8co0g==
      }
    dependencies:
      source-map: 0.6.1

  /@types/unist/2.0.6:
    resolution:
      {
        integrity: sha512-PBjIUxZHOuj0R15/xuwJYjFi+KZdNFrehocChv4g5hu6aFroHue8m0lBP0POdK2nKzbw0cgV1mws8+V/JAcEkQ==
      }
    dev: true

  /@types/webpack-env/1.13.0:
    resolution:
      {
        integrity: sha512-0BANcVFVqkAD1i7/fWy9Vu6KjB9whuAmkfFX0GFwNzubu2i0qXDsLvGZSbU1QimJHWH4rqjJDQ/PX9v5OVepEA==
      }

  /@types/webpack-env/1.17.0:
    resolution:
      {
        integrity: sha512-eHSaNYEyxRA5IAG0Ym/yCyf86niZUIF/TpWKofQI/CVfh5HsMEUyfE2kwFxha4ow0s5g0LfISQxpDKjbRDrizw==
      }
    dev: true

  /@types/webpack-sources/1.4.2:
    resolution:
      {
        integrity: sha512-77T++JyKow4BQB/m9O96n9d/UUHWLQHlcqXb9Vsf4F1+wKNrrlWNFPDLKNT92RJnCSL6CieTc+NDXtCVZswdTw==
      }
    dependencies:
      '@types/node': 12.20.24
      '@types/source-list-map': 0.1.2
      source-map: 0.7.4

  /@types/webpack/4.41.32:
    resolution:
      {
        integrity: sha512-cb+0ioil/7oz5//7tZUSwbrSAN/NWHrQylz5cW8G0dWTcF/g+/dSdMlKVZspBYuMAN1+WnwHrkxiRrLcwd0Heg==
      }
    dependencies:
      '@types/node': 12.20.24
      '@types/tapable': 1.0.6
      '@types/uglify-js': 3.16.0
      '@types/webpack-sources': 1.4.2
      anymatch: 3.1.2
      source-map: 0.6.1

  /@types/wordwrap/1.0.1:
    resolution:
      {
        integrity: sha512-xe+rWyom8xn0laMWH3M7elOpWj2rDQk+3f13RAur89GKsf4FO5qmBNtXXtwepFo2XNgQI0nePdCEStoHFnNvWg==
      }
    dev: true

  /@types/ws/8.5.3:
    resolution:
      {
        integrity: sha512-6YOoWjruKj1uLf3INHH7D3qTXwFfEsg1kf3c0uDdSBJwfa/llkwIjrAGV7j7mVgGNbzTQ3HiHKKDXl6bJPD97w==
      }
    dependencies:
      '@types/node': 12.20.24

  /@types/xmldoc/1.1.4:
    resolution:
      {
        integrity: sha512-a/ONNCf9itbmzEz1ohx0Fv5TLJzXIPQTapxFu+DlYlDtn9UcAa1OhnrOOMwbU8125hFjrkJKL3qllD7vO5Bivw==
      }
    dev: true

  /@types/yargs-parser/21.0.0:
    resolution:
      {
        integrity: sha512-iO9ZQHkZxHn4mSakYV0vFHAVDyEOIJQrV2uZ06HxEPcx+mt8swXoZHIbaaJ2crJYFfErySgktuTZ3BeLz+XmFA==
      }

  /@types/yargs/15.0.14:
    resolution:
      {
        integrity: sha512-yEJzHoxf6SyQGhBhIYGXQDSCkJjB6HohDShto7m8vaKg9Yp0Yn8+71J9eakh2bnPg6BfsH9PRMhiRTZnd4eXGQ==
      }
    dependencies:
      '@types/yargs-parser': 21.0.0
    dev: true

  /@types/yargs/16.0.4:
    resolution:
      {
        integrity: sha512-T8Yc9wt/5LbJyCaLiHPReJa0kApcIgJ7Bn735GjItUfh08Z1pJvu8QZqb9s+mMvKV6WUQRV7K2R46YbjMXTTJw==
      }
    dependencies:
      '@types/yargs-parser': 21.0.0

  /@typescript-eslint/eslint-plugin/5.38.0_sput6fej2qsjw5ind4uh6pfbcy:
    resolution:
      {
        integrity: sha512-GgHi/GNuUbTOeoJiEANi0oI6fF3gBQc3bGFYj40nnAPCbhrtEDf2rjBmefFadweBmO1Du1YovHeDP2h5JLhtTQ==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      '@typescript-eslint/parser': ^5.0.0
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/parser': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
      '@typescript-eslint/scope-manager': 5.38.0_typescript@4.8.4
      '@typescript-eslint/type-utils': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
      '@typescript-eslint/utils': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
      debug: 4.3.4
      eslint: 8.7.0
      ignore: 5.2.0
      regexpp: 3.2.0
      semver: 7.3.7
      tsutils: 3.21.0_typescript@4.8.4
      typescript: 4.8.4
    transitivePeerDependencies:
      - supports-color
    dev: false

  /@typescript-eslint/eslint-plugin/5.38.0_suun7l2jb62tsjg4pf4g2ijvlq:
    resolution:
      {
        integrity: sha512-GgHi/GNuUbTOeoJiEANi0oI6fF3gBQc3bGFYj40nnAPCbhrtEDf2rjBmefFadweBmO1Du1YovHeDP2h5JLhtTQ==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      '@typescript-eslint/parser': ^5.0.0
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/parser': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      '@typescript-eslint/scope-manager': 5.38.0_typescript@4.8.4
      '@typescript-eslint/type-utils': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      '@typescript-eslint/utils': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      debug: 4.3.4
      eslint: 7.30.0
      ignore: 5.2.0
      regexpp: 3.2.0
      semver: 7.3.7
      tsutils: 3.21.0_typescript@4.8.4
      typescript: 4.8.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/experimental-utils/5.38.0_esueefhpt5ql6xiqdj4wcgwfzi:
    resolution:
      {
        integrity: sha512-kzXBRfvGlicgGk4CYuRUqKvwc2s3wHXNssUWWJU18bhMRxriFm3BZWyQ6vEHBRpEIMKB6b7MIQHO+9lYlts19w==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@typescript-eslint/utils': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
      eslint: 8.7.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: false

  /@typescript-eslint/experimental-utils/5.38.0_xptyflz73tdwkjjssjsy5r76ri:
    resolution:
      {
        integrity: sha512-kzXBRfvGlicgGk4CYuRUqKvwc2s3wHXNssUWWJU18bhMRxriFm3BZWyQ6vEHBRpEIMKB6b7MIQHO+9lYlts19w==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@typescript-eslint/utils': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      eslint: 7.30.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@typescript-eslint/parser/5.38.0_esueefhpt5ql6xiqdj4wcgwfzi:
    resolution:
      {
        integrity: sha512-/F63giJGLDr0ms1Cr8utDAxP2SPiglaD6V+pCOcG35P2jCqdfR7uuEhz1GIC3oy4hkUF8xA1XSXmd9hOh/a5EA==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/scope-manager': 5.38.0_typescript@4.8.4
      '@typescript-eslint/types': 5.38.0_typescript@4.8.4
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      debug: 4.3.4
      eslint: 8.7.0
      typescript: 4.8.4
    transitivePeerDependencies:
      - supports-color

  /@typescript-eslint/parser/5.38.0_xptyflz73tdwkjjssjsy5r76ri:
    resolution:
      {
        integrity: sha512-/F63giJGLDr0ms1Cr8utDAxP2SPiglaD6V+pCOcG35P2jCqdfR7uuEhz1GIC3oy4hkUF8xA1XSXmd9hOh/a5EA==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/scope-manager': 5.38.0_typescript@4.8.4
      '@typescript-eslint/types': 5.38.0_typescript@4.8.4
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      debug: 4.3.4
      eslint: 7.30.0
      typescript: 4.8.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/scope-manager/5.38.0_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-ByhHIuNyKD9giwkkLqzezZ9y5bALW8VNY6xXcP+VxoH4JBDKjU5WNnsiD4HJdglHECdV+lyaxhvQjTUbRboiTA==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    dependencies:
      '@typescript-eslint/types': 5.38.0_typescript@4.8.4
      '@typescript-eslint/visitor-keys': 5.38.0_typescript@4.8.4
    transitivePeerDependencies:
      - typescript

  /@typescript-eslint/type-utils/5.38.0_esueefhpt5ql6xiqdj4wcgwfzi:
    resolution:
      {
        integrity: sha512-iZq5USgybUcj/lfnbuelJ0j3K9dbs1I3RICAJY9NZZpDgBYXmuUlYQGzftpQA9wC8cKgtS6DASTvF3HrXwwozA==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      eslint: '*'
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      '@typescript-eslint/utils': 5.38.0_esueefhpt5ql6xiqdj4wcgwfzi
      debug: 4.3.4
      eslint: 8.7.0
      tsutils: 3.21.0_typescript@4.8.4
      typescript: 4.8.4
    transitivePeerDependencies:
      - supports-color
    dev: false

  /@typescript-eslint/type-utils/5.38.0_xptyflz73tdwkjjssjsy5r76ri:
    resolution:
      {
        integrity: sha512-iZq5USgybUcj/lfnbuelJ0j3K9dbs1I3RICAJY9NZZpDgBYXmuUlYQGzftpQA9wC8cKgtS6DASTvF3HrXwwozA==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      eslint: '*'
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      '@typescript-eslint/utils': 5.38.0_xptyflz73tdwkjjssjsy5r76ri
      debug: 4.3.4
      eslint: 7.30.0
      tsutils: 3.21.0_typescript@4.8.4
      typescript: 4.8.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/types/5.38.0_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-HHu4yMjJ7i3Cb+8NUuRCdOGu2VMkfmKyIJsOr9PfkBVYLYrtMCK/Ap50Rpov+iKpxDTfnqvDbuPLgBE5FwUNfA==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      typescript: '*'
    dependencies:
      typescript: 4.8.4

  /@typescript-eslint/typescript-estree/5.38.0_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-6P0RuphkR+UuV7Avv7MU3hFoWaGcrgOdi8eTe1NwhMp2/GjUJoODBTRWzlHpZh6lFOaPmSvgxGlROa0Sg5Zbyg==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/types': 5.38.0_typescript@4.8.4
      '@typescript-eslint/visitor-keys': 5.38.0_typescript@4.8.4
      debug: 4.3.4
      globby: 11.1.0
      is-glob: 4.0.3
      semver: 7.3.7
      tsutils: 3.21.0_typescript@4.8.4
      typescript: 4.8.4
    transitivePeerDependencies:
      - supports-color

  /@typescript-eslint/utils/5.38.0_esueefhpt5ql6xiqdj4wcgwfzi:
    resolution:
      {
        integrity: sha512-6sdeYaBgk9Fh7N2unEXGz+D+som2QCQGPAf1SxrkEr+Z32gMreQ0rparXTNGRRfYUWk/JzbGdcM8NSSd6oqnTA==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@types/json-schema': 7.0.11
      '@typescript-eslint/scope-manager': 5.38.0_typescript@4.8.4
      '@typescript-eslint/types': 5.38.0_typescript@4.8.4
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      eslint: 8.7.0
      eslint-scope: 5.1.1
      eslint-utils: 3.0.0_eslint@8.7.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: false

  /@typescript-eslint/utils/5.38.0_xptyflz73tdwkjjssjsy5r76ri:
    resolution:
      {
        integrity: sha512-6sdeYaBgk9Fh7N2unEXGz+D+som2QCQGPAf1SxrkEr+Z32gMreQ0rparXTNGRRfYUWk/JzbGdcM8NSSd6oqnTA==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@types/json-schema': 7.0.11
      '@typescript-eslint/scope-manager': 5.38.0_typescript@4.8.4
      '@typescript-eslint/types': 5.38.0_typescript@4.8.4
      '@typescript-eslint/typescript-estree': 5.38.0_typescript@4.8.4
      eslint: 7.30.0
      eslint-scope: 5.1.1
      eslint-utils: 3.0.0_eslint@7.30.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@typescript-eslint/visitor-keys/5.38.0_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-MxnrdIyArnTi+XyFLR+kt/uNAcdOnmT+879os7qDRI+EYySR4crXJq9BXPfRzzLGq0wgxkwidrCJ9WCAoacm1w==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    dependencies:
      '@typescript-eslint/types': 5.38.0_typescript@4.8.4
      eslint-visitor-keys: 3.3.0
    transitivePeerDependencies:
      - typescript

  /@webassemblyjs/ast/1.11.1:
    resolution:
      {
        integrity: sha512-ukBh14qFLjxTQNTXocdyksN5QdM28S1CxHt2rdskFyL+xFV7VremuBLVbmCePj+URalXBENx/9Lm7lnhihtCSw==
      }
    dependencies:
      '@webassemblyjs/helper-numbers': 1.11.1
      '@webassemblyjs/helper-wasm-bytecode': 1.11.1

  /@webassemblyjs/ast/1.9.0:
    resolution:
      {
        integrity: sha512-C6wW5L+b7ogSDVqymbkkvuW9kruN//YisMED04xzeBBqjHa2FYnmvOlS6Xj68xWQRgWvI9cIglsjFowH/RJyEA==
      }
    dependencies:
      '@webassemblyjs/helper-module-context': 1.9.0
      '@webassemblyjs/helper-wasm-bytecode': 1.9.0
      '@webassemblyjs/wast-parser': 1.9.0

  /@webassemblyjs/floating-point-hex-parser/1.11.1:
    resolution:
      {
        integrity: sha512-iGRfyc5Bq+NnNuX8b5hwBrRjzf0ocrJPI6GWFodBFzmFnyvrQ83SHKhmilCU/8Jv67i4GJZBMhEzltxzcNagtQ==
      }

  /@webassemblyjs/floating-point-hex-parser/1.9.0:
    resolution:
      {
        integrity: sha512-TG5qcFsS8QB4g4MhrxK5TqfdNe7Ey/7YL/xN+36rRjl/BlGE/NcBvJcqsRgCP6Z92mRE+7N50pRIi8SmKUbcQA==
      }

  /@webassemblyjs/helper-api-error/1.11.1:
    resolution:
      {
        integrity: sha512-RlhS8CBCXfRUR/cwo2ho9bkheSXG0+NwooXcc3PAILALf2QLdFyj7KGsKRbVc95hZnhnERon4kW/D3SZpp6Tcg==
      }

  /@webassemblyjs/helper-api-error/1.9.0:
    resolution:
      {
        integrity: sha512-NcMLjoFMXpsASZFxJ5h2HZRcEhDkvnNFOAKneP5RbKRzaWJN36NC4jqQHKwStIhGXu5mUWlUUk7ygdtrO8lbmw==
      }

  /@webassemblyjs/helper-buffer/1.11.1:
    resolution:
      {
        integrity: sha512-gwikF65aDNeeXa8JxXa2BAk+REjSyhrNC9ZwdT0f8jc4dQQeDQ7G4m0f2QCLPJiMTTO6wfDmRmj/pW0PsUvIcA==
      }

  /@webassemblyjs/helper-buffer/1.9.0:
    resolution:
      {
        integrity: sha512-qZol43oqhq6yBPx7YM3m9Bv7WMV9Eevj6kMi6InKOuZxhw+q9hOkvq5e/PpKSiLfyetpaBnogSbNCfBwyB00CA==
      }

  /@webassemblyjs/helper-code-frame/1.9.0:
    resolution:
      {
        integrity: sha512-ERCYdJBkD9Vu4vtjUYe8LZruWuNIToYq/ME22igL+2vj2dQ2OOujIZr3MEFvfEaqKoVqpsFKAGsRdBSBjrIvZA==
      }
    dependencies:
      '@webassemblyjs/wast-printer': 1.9.0

  /@webassemblyjs/helper-fsm/1.9.0:
    resolution:
      {
        integrity: sha512-OPRowhGbshCb5PxJ8LocpdX9Kl0uB4XsAjl6jH/dWKlk/mzsANvhwbiULsaiqT5GZGT9qinTICdj6PLuM5gslw==
      }

  /@webassemblyjs/helper-module-context/1.9.0:
    resolution:
      {
        integrity: sha512-MJCW8iGC08tMk2enck1aPW+BE5Cw8/7ph/VGZxwyvGbJwjktKkDK7vy7gAmMDx88D7mhDTCNKAW5tED+gZ0W8g==
      }
    dependencies:
      '@webassemblyjs/ast': 1.9.0

  /@webassemblyjs/helper-numbers/1.11.1:
    resolution:
      {
        integrity: sha512-vDkbxiB8zfnPdNK9Rajcey5C0w+QJugEglN0of+kmO8l7lDb77AnlKYQF7aarZuCrv+l0UvqL+68gSDr3k9LPQ==
      }
    dependencies:
      '@webassemblyjs/floating-point-hex-parser': 1.11.1
      '@webassemblyjs/helper-api-error': 1.11.1
      '@xtuc/long': 4.2.2

  /@webassemblyjs/helper-wasm-bytecode/1.11.1:
    resolution:
      {
        integrity: sha512-PvpoOGiJwXeTrSf/qfudJhwlvDQxFgelbMqtq52WWiXC6Xgg1IREdngmPN3bs4RoO83PnL/nFrxucXj1+BX62Q==
      }

  /@webassemblyjs/helper-wasm-bytecode/1.9.0:
    resolution:
      {
        integrity: sha512-R7FStIzyNcd7xKxCZH5lE0Bqy+hGTwS3LJjuv1ZVxd9O7eHCedSdrId/hMOd20I+v8wDXEn+bjfKDLzTepoaUw==
      }

  /@webassemblyjs/helper-wasm-section/1.11.1:
    resolution:
      {
        integrity: sha512-10P9No29rYX1j7F3EVPX3JvGPQPae+AomuSTPiF9eBQeChHI6iqjMIwR9JmOJXwpnn/oVGDk7I5IlskuMwU/pg==
      }
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/helper-buffer': 1.11.1
      '@webassemblyjs/helper-wasm-bytecode': 1.11.1
      '@webassemblyjs/wasm-gen': 1.11.1

  /@webassemblyjs/helper-wasm-section/1.9.0:
    resolution:
      {
        integrity: sha512-XnMB8l3ek4tvrKUUku+IVaXNHz2YsJyOOmz+MMkZvh8h1uSJpSen6vYnw3IoQ7WwEuAhL8Efjms1ZWjqh2agvw==
      }
    dependencies:
      '@webassemblyjs/ast': 1.9.0
      '@webassemblyjs/helper-buffer': 1.9.0
      '@webassemblyjs/helper-wasm-bytecode': 1.9.0
      '@webassemblyjs/wasm-gen': 1.9.0

  /@webassemblyjs/ieee754/1.11.1:
    resolution:
      {
        integrity: sha512-hJ87QIPtAMKbFq6CGTkZYJivEwZDbQUgYd3qKSadTNOhVY7p+gfP6Sr0lLRVTaG1JjFj+r3YchoqRYxNH3M0GQ==
      }
    dependencies:
      '@xtuc/ieee754': 1.2.0

  /@webassemblyjs/ieee754/1.9.0:
    resolution:
      {
        integrity: sha512-dcX8JuYU/gvymzIHc9DgxTzUUTLexWwt8uCTWP3otys596io0L5aW02Gb1RjYpx2+0Jus1h4ZFqjla7umFniTg==
      }
    dependencies:
      '@xtuc/ieee754': 1.2.0

  /@webassemblyjs/leb128/1.11.1:
    resolution:
      {
        integrity: sha512-BJ2P0hNZ0u+Th1YZXJpzW6miwqQUGcIHT1G/sf72gLVD9DZ5AdYTqPNbHZh6K1M5VmKvFXwGSWZADz+qBWxeRw==
      }
    dependencies:
      '@xtuc/long': 4.2.2

  /@webassemblyjs/leb128/1.9.0:
    resolution:
      {
        integrity: sha512-ENVzM5VwV1ojs9jam6vPys97B/S65YQtv/aanqnU7D8aSoHFX8GyhGg0CMfyKNIHBuAVjy3tlzd5QMMINa7wpw==
      }
    dependencies:
      '@xtuc/long': 4.2.2

  /@webassemblyjs/utf8/1.11.1:
    resolution:
      {
        integrity: sha512-9kqcxAEdMhiwQkHpkNiorZzqpGrodQQ2IGrHHxCy+Ozng0ofyMA0lTqiLkVs1uzTRejX+/O0EOT7KxqVPuXosQ==
      }

  /@webassemblyjs/utf8/1.9.0:
    resolution:
      {
        integrity: sha512-GZbQlWtopBTP0u7cHrEx+73yZKrQoBMpwkGEIqlacljhXCkVM1kMQge/Mf+csMJAjEdSwhOyLAS0AoR3AG5P8w==
      }

  /@webassemblyjs/wasm-edit/1.11.1:
    resolution:
      {
        integrity: sha512-g+RsupUC1aTHfR8CDgnsVRVZFJqdkFHpsHMfJuWQzWU3tvnLC07UqHICfP+4XyL2tnr1amvl1Sdp06TnYCmVkA==
      }
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/helper-buffer': 1.11.1
      '@webassemblyjs/helper-wasm-bytecode': 1.11.1
      '@webassemblyjs/helper-wasm-section': 1.11.1
      '@webassemblyjs/wasm-gen': 1.11.1
      '@webassemblyjs/wasm-opt': 1.11.1
      '@webassemblyjs/wasm-parser': 1.11.1
      '@webassemblyjs/wast-printer': 1.11.1

  /@webassemblyjs/wasm-edit/1.9.0:
    resolution:
      {
        integrity: sha512-FgHzBm80uwz5M8WKnMTn6j/sVbqilPdQXTWraSjBwFXSYGirpkSWE2R9Qvz9tNiTKQvoKILpCuTjBKzOIm0nxw==
      }
    dependencies:
      '@webassemblyjs/ast': 1.9.0
      '@webassemblyjs/helper-buffer': 1.9.0
      '@webassemblyjs/helper-wasm-bytecode': 1.9.0
      '@webassemblyjs/helper-wasm-section': 1.9.0
      '@webassemblyjs/wasm-gen': 1.9.0
      '@webassemblyjs/wasm-opt': 1.9.0
      '@webassemblyjs/wasm-parser': 1.9.0
      '@webassemblyjs/wast-printer': 1.9.0

  /@webassemblyjs/wasm-gen/1.11.1:
    resolution:
      {
        integrity: sha512-F7QqKXwwNlMmsulj6+O7r4mmtAlCWfO/0HdgOxSklZfQcDu0TpLiD1mRt/zF25Bk59FIjEuGAIyn5ei4yMfLhA==
      }
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/helper-wasm-bytecode': 1.11.1
      '@webassemblyjs/ieee754': 1.11.1
      '@webassemblyjs/leb128': 1.11.1
      '@webassemblyjs/utf8': 1.11.1

  /@webassemblyjs/wasm-gen/1.9.0:
    resolution:
      {
        integrity: sha512-cPE3o44YzOOHvlsb4+E9qSqjc9Qf9Na1OO/BHFy4OI91XDE14MjFN4lTMezzaIWdPqHnsTodGGNP+iRSYfGkjA==
      }
    dependencies:
      '@webassemblyjs/ast': 1.9.0
      '@webassemblyjs/helper-wasm-bytecode': 1.9.0
      '@webassemblyjs/ieee754': 1.9.0
      '@webassemblyjs/leb128': 1.9.0
      '@webassemblyjs/utf8': 1.9.0

  /@webassemblyjs/wasm-opt/1.11.1:
    resolution:
      {
        integrity: sha512-VqnkNqnZlU5EB64pp1l7hdm3hmQw7Vgqa0KF/KCNO9sIpI6Fk6brDEiX+iCOYrvMuBWDws0NkTOxYEb85XQHHw==
      }
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/helper-buffer': 1.11.1
      '@webassemblyjs/wasm-gen': 1.11.1
      '@webassemblyjs/wasm-parser': 1.11.1

  /@webassemblyjs/wasm-opt/1.9.0:
    resolution:
      {
        integrity: sha512-Qkjgm6Anhm+OMbIL0iokO7meajkzQD71ioelnfPEj6r4eOFuqm4YC3VBPqXjFyyNwowzbMD+hizmprP/Fwkl2A==
      }
    dependencies:
      '@webassemblyjs/ast': 1.9.0
      '@webassemblyjs/helper-buffer': 1.9.0
      '@webassemblyjs/wasm-gen': 1.9.0
      '@webassemblyjs/wasm-parser': 1.9.0

  /@webassemblyjs/wasm-parser/1.11.1:
    resolution:
      {
        integrity: sha512-rrBujw+dJu32gYB7/Lup6UhdkPx9S9SnobZzRVL7VcBH9Bt9bCBLEuX/YXOOtBsOZ4NQrRykKhffRWHvigQvOA==
      }
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/helper-api-error': 1.11.1
      '@webassemblyjs/helper-wasm-bytecode': 1.11.1
      '@webassemblyjs/ieee754': 1.11.1
      '@webassemblyjs/leb128': 1.11.1
      '@webassemblyjs/utf8': 1.11.1

  /@webassemblyjs/wasm-parser/1.9.0:
    resolution:
      {
        integrity: sha512-9+wkMowR2AmdSWQzsPEjFU7njh8HTO5MqO8vjwEHuM+AMHioNqSBONRdr0NQQ3dVQrzp0s8lTcYqzUdb7YgELA==
      }
    dependencies:
      '@webassemblyjs/ast': 1.9.0
      '@webassemblyjs/helper-api-error': 1.9.0
      '@webassemblyjs/helper-wasm-bytecode': 1.9.0
      '@webassemblyjs/ieee754': 1.9.0
      '@webassemblyjs/leb128': 1.9.0
      '@webassemblyjs/utf8': 1.9.0

  /@webassemblyjs/wast-parser/1.9.0:
    resolution:
      {
        integrity: sha512-qsqSAP3QQ3LyZjNC/0jBJ/ToSxfYJ8kYyuiGvtn/8MK89VrNEfwj7BPQzJVHi0jGTRK2dGdJ5PRqhtjzoww+bw==
      }
    dependencies:
      '@webassemblyjs/ast': 1.9.0
      '@webassemblyjs/floating-point-hex-parser': 1.9.0
      '@webassemblyjs/helper-api-error': 1.9.0
      '@webassemblyjs/helper-code-frame': 1.9.0
      '@webassemblyjs/helper-fsm': 1.9.0
      '@xtuc/long': 4.2.2

  /@webassemblyjs/wast-printer/1.11.1:
    resolution:
      {
        integrity: sha512-IQboUWM4eKzWW+N/jij2sRatKMh99QEelo3Eb2q0qXkvPRISAj8Qxtmw5itwqK+TTkBuUIE45AxYPToqPtL5gg==
      }
    dependencies:
      '@webassemblyjs/ast': 1.11.1
      '@xtuc/long': 4.2.2

  /@webassemblyjs/wast-printer/1.9.0:
    resolution:
      {
        integrity: sha512-2J0nE95rHXHyQ24cWjMKJ1tqB/ds8z/cyeOZxJhcb+rW+SQASVjuznUSmdz5GpVJTzU8JkhYut0D3siFDD6wsA==
      }
    dependencies:
      '@webassemblyjs/ast': 1.9.0
      '@webassemblyjs/wast-parser': 1.9.0
      '@xtuc/long': 4.2.2

  /@xtuc/ieee754/1.2.0:
    resolution:
      {
        integrity: sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==
      }

  /@xtuc/long/4.2.2:
    resolution:
      {
        integrity: sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==
      }

  /@yarnpkg/lockfile/1.0.2:
    resolution:
      {
        integrity: sha512-MqJ00WXw89ga0rK6GZkdmmgv3bAsxpJixyTthjcix73O44pBqotyU2BejBkLuIsaOBI6SEu77vAnSyLe5iIHkw==
      }
    dev: false

  /@zkochan/cmd-shim/5.2.2:
    resolution:
      {
        integrity: sha512-uNWpBESHNlerKPs34liL43S14y1j3G39dpSf/wzkyP+axOzqvQTr4i+Nz/4shyS5FIL4fTi/ejHCDMT0ZneNWQ==
      }
    engines: { node: '>=10.13' }
    dependencies:
      cmd-extension: 1.0.2
      is-windows: 1.0.2
    dev: false

  /abab/2.0.6:
    resolution:
      {
        integrity: sha512-j2afSsaIENvHZN2B8GOpF566vZ5WVk5opAiMTvWgaQT8DkbOqsTfvNAvHoRGU2zzP8cPoqys+xHTRDWW8L+/BA==
      }

  /abbrev/1.1.1:
    resolution:
      {
        integrity: sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==
      }

  /abstract-logging/2.0.1:
    resolution:
      {
        integrity: sha512-2BjRTZxTPvheOvGbBslFSYOUkr+SjPtOnrLP33f+VIWLzezQpZcqVg7ja3L4dBXmzzgwT+a029jRx5PCi3JuiA==
      }
    dev: false

  /accepts/1.3.8:
    resolution:
      {
        integrity: sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==
      }
    engines: { node: '>= 0.6' }
    dependencies:
      mime-types: 2.1.35
      negotiator: 0.6.3

  /acorn-globals/6.0.0:
    resolution:
      {
        integrity: sha512-ZQl7LOWaF5ePqqcX4hLuv/bLXYQNfNWw2c0/yX/TsPRKamzHcTGQnlCjHT3TsmkOUVEPS3crCxiPfdzE/Trlhg==
      }
    dependencies:
      acorn: 7.4.1
      acorn-walk: 7.2.0

  /acorn-import-assertions/1.8.0_acorn@8.7.1:
    resolution:
      {
        integrity: sha512-m7VZ3jwz4eK6A4Vtt8Ew1/mNbP24u0FhdyfA7fSvnJR6LMdfOYnmuIrrJAgrYfYJ10F/otaHTtrtrtmHdMNzEw==
      }
    peerDependencies:
      acorn: ^8
    dependencies:
      acorn: 8.7.1

  /acorn-jsx/5.3.2_acorn@7.4.1:
    resolution:
      {
        integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==
      }
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      acorn: 7.4.1
    dev: true

  /acorn-jsx/5.3.2_acorn@8.7.1:
    resolution:
      {
        integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==
      }
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      acorn: 8.7.1

  /acorn-walk/7.2.0:
    resolution:
      {
        integrity: sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA==
      }
    engines: { node: '>=0.4.0' }

  /acorn-walk/8.2.0:
    resolution:
      {
        integrity: sha512-k+iyHEuPgSw6SbuDpGQM+06HQUa04DZ3o+F6CSzXMvvI5KMvnaEqXe+YVe555R9nn6GPt404fos4wcgpw12SDA==
      }
    engines: { node: '>=0.4.0' }

  /acorn/6.4.2:
    resolution:
      {
        integrity: sha512-XtGIhXwF8YM8bJhGxG5kXgjkEuNGLTkoYqVE+KMR+aspr4KGYmKYg7yUe3KghyQ9yheNwLnjmzh/7+gfDBmHCQ==
      }
    engines: { node: '>=0.4.0' }
    hasBin: true

  /acorn/7.4.1:
    resolution:
      {
        integrity: sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==
      }
    engines: { node: '>=0.4.0' }
    hasBin: true

  /acorn/8.7.1:
    resolution:
      {
        integrity: sha512-Xx54uLJQZ19lKygFXOWsscKUbsBZW0CPykPhVQdhIeIwrbPmJzqeASDInc8nKBnp/JT6igTs82qPXz069H8I/A==
      }
    engines: { node: '>=0.4.0' }
    hasBin: true

  /address/1.2.0:
    resolution:
      {
        integrity: sha512-tNEZYz5G/zYunxFm7sfhAxkXEuLj3K6BKwv6ZURlsF6yiUQ65z0Q2wZW9L5cPUl9ocofGvXOdFYbFHp0+6MOig==
      }
    engines: { node: '>= 10.0.0' }
    dev: true

  /agent-base/5.1.1:
    resolution:
      {
        integrity: sha512-TMeqbNl2fMW0nMjTEPOwe3J/PRFP4vqeoNuQMG0HlMrtm5QxKqdvAkZ1pRBQ/ulIyDD5Yq0nJ7YbdD8ey0TO3g==
      }
    engines: { node: '>= 6.0.0' }
    dev: true

  /agent-base/6.0.2:
    resolution:
      {
        integrity: sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==
      }
    engines: { node: '>= 6.0.0' }
    dependencies:
      debug: 4.3.4
    transitivePeerDependencies:
      - supports-color

  /agentkeepalive/4.2.1:
    resolution:
      {
        integrity: sha512-Zn4cw2NEqd+9fiSVWMscnjyQ1a8Yfoc5oBajLeo5w+YBHgDUcEBY2hS4YpTz6iN5f/2zQiktcuM6tS8x1p9dpA==
      }
    engines: { node: '>= 8.0.0' }
    dependencies:
      debug: 4.3.4
      depd: 1.1.2
      humanize-ms: 1.2.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /aggregate-error/3.1.0:
    resolution:
      {
        integrity: sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==
      }
    engines: { node: '>=8' }
    dependencies:
      clean-stack: 2.2.0
      indent-string: 4.0.0
    dev: true

  /airbnb-js-shims/2.2.1:
    resolution:
      {
        integrity: sha512-wJNXPH66U2xjgo1Zwyjf9EydvJ2Si94+vSdk6EERcBfB2VZkeltpqIats0cqIZMLCXP3zcyaUKGYQeIBT6XjsQ==
      }
    dependencies:
      array-includes: 3.1.5
      array.prototype.flat: 1.3.0
      array.prototype.flatmap: 1.3.0
      es5-shim: 4.6.7
      es6-shim: 0.35.6
      function.prototype.name: 1.1.5
      globalthis: 1.0.3
      object.entries: 1.1.5
      object.fromentries: 2.0.5
      object.getownpropertydescriptors: 2.1.4
      object.values: 1.1.5
      promise.allsettled: 1.0.5
      promise.prototype.finally: 3.1.3
      string.prototype.matchall: 4.0.7
      string.prototype.padend: 3.1.3
      string.prototype.padstart: 3.1.3
      symbol.prototype.description: 1.0.5
    dev: true

  /ajv-errors/1.0.1_ajv@6.12.6:
    resolution:
      {
        integrity: sha512-DCRfO/4nQ+89p/RK43i8Ezd41EqdGIU4ld7nGF8OQ14oc/we5rEntLCUa7+jrn3nn83BosfwZA0wb4pon2o8iQ==
      }
    peerDependencies:
      ajv: '>=5.0.0'
    dependencies:
      ajv: 6.12.6

  /ajv-formats/2.1.1:
    resolution:
      {
        integrity: sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==
      }
    peerDependenciesMeta:
      ajv:
        optional: true
    dependencies:
      ajv: 8.11.0

  /ajv-keywords/3.5.2_ajv@6.12.6:
    resolution:
      {
        integrity: sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==
      }
    peerDependencies:
      ajv: ^6.9.1
    dependencies:
      ajv: 6.12.6

  /ajv-keywords/5.1.0_ajv@8.11.0:
    resolution:
      {
        integrity: sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==
      }
    peerDependencies:
      ajv: ^8.8.2
    dependencies:
      ajv: 8.11.0
      fast-deep-equal: 3.1.3

  /ajv/6.12.6:
    resolution:
      {
        integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==
      }
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  /ajv/8.11.0:
    resolution:
      {
        integrity: sha512-wGgprdCvMalC0BztXvitD2hC04YffAvtsUn93JbGXYLAtCUO4xd17mCCZQxUOItiBwZvJScWo8NIvQMQ71rdpg==
      }
    dependencies:
      fast-deep-equal: 3.1.3
      json-schema-traverse: 1.0.0
      require-from-string: 2.0.2
      uri-js: 4.4.1

  /amdefine/1.0.1:
    resolution:
      {
        integrity: sha512-S2Hw0TtNkMJhIabBwIojKL9YHO5T0n5eNqWJ7Lrlel/zDbftQpxpapi8tZs3X1HWa+u+QeydGmzzNU0m09+Rcg==
      }
    engines: { node: '>=0.4.2' }
    dev: false

  /ansi-align/3.0.1:
    resolution:
      {
        integrity: sha512-IOfwwBF5iczOjp/WeY4YxyjqAFMQoZufdQWDd19SEExbVLNXqvpzSJ/M7Za4/sCPmQ0+GRquoA7bGcINcxew6w==
      }
    dependencies:
      string-width: 4.2.3
    dev: true

  /ansi-colors/3.2.4:
    resolution:
      {
        integrity: sha512-hHUXGagefjN2iRrID63xckIvotOXOojhQKWIPUZ4mNUZ9nLZW+7FMNoE1lOkEhNWYsx/7ysGIuJYCiMAA9FnrA==
      }
    engines: { node: '>=6' }
    dev: true

  /ansi-colors/4.1.3:
    resolution:
      {
        integrity: sha512-/6w/C21Pm1A7aZitlI5Ni/2J6FFQN8i1Cvz3kHABAAbw93v/NlvKdVOqz7CCWz/3iv/JplRSEEZ83XION15ovw==
      }
    engines: { node: '>=6' }
    dev: true

  /ansi-escapes/4.3.2:
    resolution:
      {
        integrity: sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==
      }
    engines: { node: '>=8' }
    dependencies:
      type-fest: 0.21.3

  /ansi-html-community/0.0.8:
    resolution:
      {
        integrity: sha512-1APHAyr3+PCamwNw3bXCPp4HFLONZt/yIH0sZp0/469KWNTEy+qN5jQ3GVX6DMZ1UXAi34yVwtTeaG/HpBuuzw==
      }
    engines: { '0': node >= 0.8.0 }
    hasBin: true

  /ansi-regex/2.1.1:
    resolution:
      {
        integrity: sha512-TIGnTpdo+E3+pCyAluZvtED5p5wCqLdezCyhPZzKPcxvFplEt4i+W7OONCKgeZFT3+y5NZZfOOS/Bdcanm1MYA==
      }
    engines: { node: '>=0.10.0' }

  /ansi-regex/4.1.1:
    resolution:
      {
        integrity: sha512-ILlv4k/3f6vfQ4OoP2AGvirOktlQ98ZEL1k9FaQjxa3L1abBgbuTDAdPOpvbGncC0BTVQrl+OM8xZGK6tWXt7g==
      }
    engines: { node: '>=6' }
    dev: false

  /ansi-regex/5.0.1:
    resolution:
      {
        integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==
      }
    engines: { node: '>=8' }

  /ansi-styles/2.2.1:
    resolution:
      {
        integrity: sha512-kmCevFghRiWM7HB5zTPULl4r9bVFSWjz62MhqizDGUrq2NWuNMQyuv4tHHoKJHs69M/MF64lEcHdYIocrdWQYA==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /ansi-styles/3.2.1:
    resolution:
      {
        integrity: sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==
      }
    engines: { node: '>=4' }
    dependencies:
      color-convert: 1.9.3

  /ansi-styles/4.3.0:
    resolution:
      {
        integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==
      }
    engines: { node: '>=8' }
    dependencies:
      color-convert: 2.0.1

  /ansi-styles/5.2.0:
    resolution:
      {
        integrity: sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==
      }
    engines: { node: '>=10' }

  /ansi-to-html/0.6.15:
    resolution:
      {
        integrity: sha512-28ijx2aHJGdzbs+O5SNQF65r6rrKYnkuwTYm8lZlChuoJ9P1vVzIpWO20sQTqTPDXYp6NFwk326vApTtLVFXpQ==
      }
    engines: { node: '>=8.0.0' }
    hasBin: true
    dependencies:
      entities: 2.2.0
    dev: true

  /any-promise/1.3.0:
    resolution:
      {
        integrity: sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==
      }
    dev: false

  /anymatch/2.0.0:
    resolution:
      {
        integrity: sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==
      }
    dependencies:
      micromatch: 3.1.10
      normalize-path: 2.1.1

  /anymatch/3.1.2:
    resolution:
      {
        integrity: sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==
      }
    engines: { node: '>= 8' }
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  /app-root-dir/1.0.2:
    resolution:
      {
        integrity: sha512-jlpIfsOoNoafl92Sz//64uQHGSyMrD2vYG5d8o2a4qGvyNCvXur7bzIsWtAC/6flI2RYAp3kv8rsfBtaLm7w0g==
      }
    dev: true

  /aproba/1.2.0:
    resolution:
      {
        integrity: sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw==
      }

  /aproba/2.0.0:
    resolution:
      {
        integrity: sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ==
      }
    dev: true

  /archiver-utils/2.1.0:
    resolution:
      {
        integrity: sha512-bEL/yUb/fNNiNTuUz979Z0Yg5L+LzLxGJz8x79lYmR54fmTIb6ob/hNQgkQnIUDWIFjZVQwl9Xs356I6BAMHfw==
      }
    engines: { node: '>= 6' }
    dependencies:
      glob: 7.2.3
      graceful-fs: 4.2.10
      lazystream: 1.0.1
      lodash.defaults: 4.2.0
      lodash.difference: 4.5.0
      lodash.flatten: 4.4.0
      lodash.isplainobject: 4.0.6
      lodash.union: 4.6.0
      normalize-path: 3.0.0
      readable-stream: 2.3.7
    dev: true

  /archiver/5.3.1:
    resolution:
      {
        integrity: sha512-8KyabkmbYrH+9ibcTScQ1xCJC/CGcugdVIwB+53f5sZziXgwUh3iXlAlANMxcZyDEfTHMe6+Z5FofV8nopXP7w==
      }
    engines: { node: '>= 10' }
    dependencies:
      archiver-utils: 2.1.0
      async: 3.2.4
      buffer-crc32: 0.2.13
      readable-stream: 3.6.0
      readdir-glob: 1.1.1
      tar-stream: 2.2.0
      zip-stream: 4.1.0
    dev: true

  /archy/1.0.0:
    resolution:
      {
        integrity: sha512-Xg+9RwCg/0p32teKdGMPTPnVXKD0w3DfHnFTficozsAgsvq2XenPJq/MYpzzQ/v8zrOyJn6Ds39VA4JIDwFfqw==
      }
    dev: false

  /are-we-there-yet/1.1.7:
    resolution:
      {
        integrity: sha512-nxwy40TuMiUGqMyRHgCSWZ9FM4VAoRP4xUYSTv5ImRog+h9yISPbVH7H8fASCIzYn9wlEv4zvFL7uKDMCFQm3g==
      }
    dependencies:
      delegates: 1.0.0
      readable-stream: 2.3.7

  /are-we-there-yet/2.0.0:
    resolution:
      {
        integrity: sha512-Ci/qENmwHnsYo9xKIcUJN5LeDKdJ6R1Z1j9V/J5wyq8nh/mYPEpIKJbBZXtZjG04HiK7zV/p6Vs9952MrMeUIw==
      }
    engines: { node: '>=10' }
    dependencies:
      delegates: 1.0.0
      readable-stream: 3.6.0
    dev: true

  /arg/4.1.3:
    resolution:
      {
        integrity: sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==
      }

  /argparse/1.0.10:
    resolution:
      {
        integrity: sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==
      }
    dependencies:
      sprintf-js: 1.0.3

  /argparse/2.0.1:
    resolution:
      {
        integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==
      }

  /arr-diff/4.0.0:
    resolution:
      {
        integrity: sha512-YVIQ82gZPGBebQV/a8dar4AitzCQs0jjXwMPZllpXMaGjXPYVUawSxQrRsjhjupyVxEvbHgUmIhKVlND+j02kA==
      }
    engines: { node: '>=0.10.0' }

  /arr-flatten/1.1.0:
    resolution:
      {
        integrity: sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==
      }
    engines: { node: '>=0.10.0' }

  /arr-union/3.1.0:
    resolution:
      {
        integrity: sha512-sKpyeERZ02v1FeCZT8lrfJq5u6goHCtpTAzPwJYe7c8SPFOboNjNg1vz2L4VTn9T4PQxEx13TbXLmYUcS6Ug7Q==
      }
    engines: { node: '>=0.10.0' }

  /array-flatten/1.1.1:
    resolution:
      {
        integrity: sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==
      }

  /array-flatten/2.1.2:
    resolution:
      {
        integrity: sha512-hNfzcOV8W4NdualtqBFPyVO+54DSJuZGY9qT4pRroB6S9e3iiido2ISIC5h9R2sPJ8H3FHCIiEnsv1lPXO3KtQ==
      }

  /array-includes/3.1.5:
    resolution:
      {
        integrity: sha512-iSDYZMMyTPkiFasVqfuAQnWAYcvO/SeBSCGKePoEthjp4LEMTe4uLc7b025o4jAZpHhihh8xPo99TNWUWWkGDQ==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
      get-intrinsic: 1.1.2
      is-string: 1.0.7

  /array-union/1.0.2:
    resolution:
      {
        integrity: sha512-Dxr6QJj/RdU/hCaBjOfxW+q6lyuVE6JFWIrAUpuOOhoJJoQ99cUn3igRaHVB5P9WrgFVN0FfArM3x0cueOU8ng==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      array-uniq: 1.0.3
    dev: true

  /array-union/2.1.0:
    resolution:
      {
        integrity: sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==
      }
    engines: { node: '>=8' }

  /array-uniq/1.0.3:
    resolution:
      {
        integrity: sha512-MNha4BWQ6JbwhFhj03YK552f7cb3AzoE8SzeljgChvL1dl3IcvggXVz1DilzySZkCja+CXuZbdW7yATchWn8/Q==
      }
    engines: { node: '>=0.10.0' }
    dev: true

  /array-unique/0.3.2:
    resolution:
      {
        integrity: sha512-SleRWjh9JUud2wH1hPs9rZBZ33H6T9HOiL0uwGnGx9FpE6wKGyfWugmbkEOIs6qWrZhg0LWeLziLrEwQJhs5mQ==
      }
    engines: { node: '>=0.10.0' }

  /array.prototype.flat/1.3.0:
    resolution:
      {
        integrity: sha512-12IUEkHsAhA4DY5s0FPgNXIdc8VRSqD9Zp78a5au9abH/SOBrsp082JOWFNTjkMozh8mqcdiKuaLGhPeYztxSw==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
      es-shim-unscopables: 1.0.0
    dev: true

  /array.prototype.flatmap/1.3.0:
    resolution:
      {
        integrity: sha512-PZC9/8TKAIxcWKdyeb77EzULHPrIX/tIZebLJUQOMR1OwYosT8yggdfWScfTBCDj5utONvOuPQQumYsU2ULbkg==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
      es-shim-unscopables: 1.0.0

  /array.prototype.map/1.0.4:
    resolution:
      {
        integrity: sha512-Qds9QnX7A0qISY7JT5WuJO0NJPE9CMlC6JzHQfhpqAAQQzufVRoeH7EzUY5GcPTx72voG8LV/5eo+b8Qi8hmhA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
      es-array-method-boxes-properly: 1.0.0
      is-string: 1.0.7
    dev: true

  /array.prototype.reduce/1.0.4:
    resolution:
      {
        integrity: sha512-WnM+AjG/DvLRLo4DDl+r+SvCzYtD2Jd9oeBYMcEaI7t3fFrHY9M53/wdLcTvmZNQ70IU6Htj0emFkZ5TS+lrdw==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
      es-array-method-boxes-properly: 1.0.0
      is-string: 1.0.7

  /arrify/1.0.1:
    resolution:
      {
        integrity: sha512-3CYzex9M9FGQjCGMGyi6/31c8GJbgb0qGyrx5HWxPd0aCwh4cB2YjMb2Xf9UuoogrMrlO9cTqnB5rI5GHZTcUA==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /arrify/2.0.1:
    resolution:
      {
        integrity: sha512-3duEwti880xqi4eAMN8AyR4a0ByT90zoYdLlevfrvU43vb0YZwZVfxOgxWrLXXXpyugL0hNZc9G6BiB5B3nUug==
      }
    engines: { node: '>=8' }
    dev: true

  /asap/2.0.6:
    resolution:
      {
        integrity: sha512-BSHWgDSAiKs50o2Re8ppvp3seVHXSRM44cdSsT9FfNEUUZLOGWVCsiWaRPWM1Znn+mqZ1OfVZ3z3DWEzSp7hRA==
      }
    dev: false

  /asn1.js/5.4.1:
    resolution:
      {
        integrity: sha512-+I//4cYPccV8LdmBLiX8CYvf9Sp3vQsrqu2QNXRcrbiWvcx/UdlFiqUJJzxRQxgsZmvhXhn4cSKeSmoFjVdupA==
      }
    dependencies:
      bn.js: 4.12.0
      inherits: 2.0.4
      minimalistic-assert: 1.0.1
      safer-buffer: 2.1.2

  /asn1/0.2.6:
    resolution:
      {
        integrity: sha512-ix/FxPn0MDjeyJ7i/yoHGFt/EX6LyNbxSEhPPXODPL+KB0VPk86UYfL0lMdy+KCnv+fmvIzySwaK5COwqVbWTQ==
      }
    dependencies:
      safer-buffer: 2.1.2
    dev: false

  /assert-plus/1.0.0:
    resolution:
      {
        integrity: sha512-NfJ4UzBCcQGLDlQq7nHxH+tv3kyZ0hHQqF5BO6J7tNJeP5do1llPr8dZ8zHonfhAu0PHAdMkSo+8o0wxg9lZWw==
      }
    engines: { node: '>=0.8' }
    dev: false

  /assert/1.5.0:
    resolution:
      {
        integrity: sha512-EDsgawzwoun2CZkCgtxJbv392v4nbk9XDD06zI+kQYoBM/3RBWLlEyJARDOmhAAosBjWACEkKL6S+lIZtcAubA==
      }
    dependencies:
      object-assign: 4.1.1
      util: 0.10.3

  /assign-symbols/1.0.0:
    resolution:
      {
        integrity: sha512-Q+JC7Whu8HhmTdBph/Tq59IoRtoy6KAm5zzPv00WdujX82lbAL8K7WVjne7vdCsAmbF4AYaDOPyO3k0kl8qIrw==
      }
    engines: { node: '>=0.10.0' }

  /ast-types/0.13.3:
    resolution:
      {
        integrity: sha512-XTZ7xGML849LkQP86sWdQzfhwbt3YwIO6MqbX9mUNYY98VKaaVZP7YNNm70IpwecbkkxmfC5IYAzOQ/2p29zRA==
      }
    engines: { node: '>=4' }
    dev: true

  /ast-types/0.13.4:
    resolution:
      {
        integrity: sha512-x1FCFnFifvYDDzTaLII71vG5uvDwgtmDTEVWAxrgeiR8VjMONcCXJx7E+USjDtHlwFmt9MysbqgF9b9Vjr6w+w==
      }
    engines: { node: '>=4' }
    dependencies:
      tslib: 2.3.1
    dev: true

  /ast-types/0.14.2:
    resolution:
      {
        integrity: sha512-O0yuUDnZeQDL+ncNGlJ78BiO4jnYI3bvMsD5prT0/nsgijG/LpNBIr63gTjVTNsiGkgQhiyCShTgxt8oXOrklA==
      }
    engines: { node: '>=4' }
    dependencies:
      tslib: 2.3.1
    dev: true

  /astral-regex/2.0.0:
    resolution:
      {
        integrity: sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==
      }
    engines: { node: '>=8' }
    dev: true

  /async-each/1.0.3:
    resolution:
      {
        integrity: sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==
      }
    optional: true

  /async-foreach/0.1.3:
    resolution:
      {
        integrity: sha512-VUeSMD8nEGBWaZK4lizI1sf3yEC7pnAQ/mrI7pC2fBz2s/tq5jWWEngTwaf0Gruu/OoXRGLGg1XFqpYBiGTYJA==
      }
    dev: false

  /async-limiter/1.0.1:
    resolution:
      {
        integrity: sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==
      }
    dev: true

  /async-retry/1.3.3:
    resolution:
      {
        integrity: sha512-wfr/jstw9xNi/0teMHrRW7dsz3Lt5ARhYNZ2ewpadnhaIp5mbALhOAP+EAdsC7t4Z6wqsDVv9+W6gm1Dk9mEyw==
      }
    dependencies:
      retry: 0.13.1
    dev: true

  /async/1.5.2:
    resolution:
      {
        integrity: sha512-nSVgobk4rv61R9PUSDtYt7mPVB2olxNR5RWJcAsH676/ef11bUZwvu7+RGYrYauVdDPcO519v68wRhXQtxsV9w==
      }
    dev: true

  /async/3.2.4:
    resolution:
      {
        integrity: sha512-iAB+JbDEGXhyIUavoDl9WP/Jj106Kz9DEn1DPgYw5ruDn0e3Wgi3sKFm55sASdGBNOQB8F59d9qQ7deqrHA8wQ==
      }
    dev: true

  /asynckit/0.4.0:
    resolution:
      {
        integrity: sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==
      }

  /at-least-node/1.0.0:
    resolution:
      {
        integrity: sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==
      }
    engines: { node: '>= 4.0.0' }
    dev: true

  /atob/2.1.2:
    resolution:
      {
        integrity: sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==
      }
    engines: { node: '>= 4.5.0' }
    hasBin: true

  /atomic-sleep/1.0.0:
    resolution:
      {
        integrity: sha512-kNOjDqAh7px0XWNI+4QbzoiR/nTkHAWNud2uvnJquD1/x5a7EQZMJT0AczqK0Qn67oY/TTQ1LbUKajZpp3I9tQ==
      }
    engines: { node: '>=8.0.0' }
    dev: false

  /atomically/1.7.0:
    resolution:
      {
        integrity: sha512-Xcz9l0z7y9yQ9rdDaxlmaI4uJHf/T8g9hOEzJcsEqX2SjCj4J20uK7+ldkDHMbpJDK76wF7xEIgxc/vSlsfw5w==
      }
    engines: { node: '>=10.12.0' }
    dev: true

  /autoprefixer/10.4.7_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-ypHju4Y2Oav95SipEcCcI5J7CGPuvz8oat7sUtYj3ClK44bldfvtvcxK6IEK++7rqB7YchDGzweZIBG+SD0ZAA==
      }
    engines: { node: ^10 || ^12 || >=14 }
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      browserslist: 4.20.4
      caniuse-lite: 1.0.30001354
      fraction.js: 4.2.0
      normalize-range: 0.1.2
      picocolors: 1.0.0
      postcss: 8.4.14
      postcss-value-parser: 4.2.0

  /autoprefixer/9.8.8:
    resolution:
      {
        integrity: sha512-eM9d/swFopRt5gdJ7jrpCwgvEMIayITpojhkkSMRsFHYuH5bkSQ4p/9qTEHtmNudUZh22Tehu7I6CxAW0IXTKA==
      }
    hasBin: true
    dependencies:
      browserslist: 4.20.4
      caniuse-lite: 1.0.30001354
      normalize-range: 0.1.2
      num2fraction: 1.2.2
      picocolors: 0.2.1
      postcss: 7.0.39
      postcss-value-parser: 4.2.0
    dev: true

  /avvio/7.2.5:
    resolution:
      {
        integrity: sha512-AOhBxyLVdpOad3TujtC9kL/9r3HnTkxwQ5ggOsYrvvZP1cCFvzHWJd5XxZDFuTn+IN8vkKSG5SEJrd27vCSbeA==
      }
    dependencies:
      archy: 1.0.0
      debug: 4.3.4
      fastq: 1.13.0
      queue-microtask: 1.2.3
    transitivePeerDependencies:
      - supports-color
    dev: false

  /aws-cdk-lib/2.7.0_constructs@10.0.130:
    resolution:
      {
        integrity: sha512-9mxm9WD5rioZxTCQ6FqMzkZ0NH5+4oBFtlNL10duXJ+P+7Zcs82mHHycX7wjD689Gnl6hZla/DOlUV04HQvNhw==
      }
    engines: { node: '>= 14.15.0' }
    peerDependencies:
      constructs: ^10.0.0
    dependencies:
      '@balena/dockerignore': 1.0.2
      case: 1.6.3
      constructs: 10.0.130
      fs-extra: 9.1.0
      ignore: 5.2.0
      jsonschema: 1.4.1
      minimatch: 3.1.2
      punycode: 2.1.1
      semver: 7.3.7
      yaml: 1.10.2
    dev: true
    bundledDependencies:
      - '@balena/dockerignore'
      - case
      - fs-extra
      - ignore
      - jsonschema
      - minimatch
      - punycode
      - semver
      - yaml

  /aws-cdk/2.7.0:
    resolution:
      {
        integrity: sha512-hZdvrFuN6AoT7hYM1lOrZBO5knE0X3lC/+uoIuZFbSu0AkZViM0pwF1pHWW+un//PWzIDSb/nzx7I08LjcpQ7Q==
      }
    engines: { node: '>= 14.15.0' }
    hasBin: true
    dependencies:
      '@aws-cdk/cloud-assembly-schema': 2.7.0
      '@aws-cdk/cloudformation-diff': 2.7.0
      '@aws-cdk/cx-api': 2.7.0
      '@aws-cdk/region-info': 2.7.0
      '@jsii/check-node': 1.50.0
      archiver: 5.3.1
      aws-sdk: 2.1155.0
      camelcase: 6.3.0
      cdk-assets: 2.7.0
      chalk: 4.1.2
      chokidar: 3.5.3
      decamelize: 5.0.1
      fs-extra: 9.1.0
      glob: 7.2.3
      json-diff: 0.7.4
      minimatch: 3.0.8
      promptly: 3.2.0
      proxy-agent: 5.0.0
      semver: 7.3.7
      source-map-support: 0.5.21
      strip-ansi: 6.0.1
      table: 6.8.0
      uuid: 8.3.2
      wrap-ansi: 7.0.0
      yaml: 1.10.2
      yargs: 16.2.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /aws-sdk/2.1155.0:
    resolution:
      {
        integrity: sha512-H2QircO+R3/tx7DhRKYsGuj0YJcIY2N53U2gDExAmy34/oNAGUcS1eKB8DwTbpNPrnQgZzYDGBgHMTFWtN2XZA==
      }
    engines: { node: '>= 10.0.0' }
    dependencies:
      buffer: 4.9.2
      events: 1.1.1
      ieee754: 1.1.13
      jmespath: 0.16.0
      querystring: 0.2.0
      sax: 1.2.1
      url: 0.10.3
      uuid: 8.0.0
      xml2js: 0.4.19
    dev: true

  /aws-sign2/0.7.0:
    resolution:
      {
        integrity: sha512-08kcGqnYf/YmjoRhfxyu+CLxBjUtHLXLXX/vUfx9l2LYzG3c1m61nrpyFUZI6zeS+Li/wWMMidD9KgrqtGq3mA==
      }
    dev: false

  /aws4/1.11.0:
    resolution:
      {
        integrity: sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==
      }
    dev: false

  /axios/0.27.2:
    resolution:
      {
        integrity: sha512-t+yRIyySRTp/wua5xEr+z1q60QmLq8ABsS5O9Me1AsE5dfKqgnCFzwiCZZ/cGNd1lq4/7akDWMxdhVlucjmnOQ==
      }
    dependencies:
      follow-redirects: 1.15.1
      form-data: 4.0.0
    transitivePeerDependencies:
      - debug
    dev: false

  /babel-core/7.0.0-bridge.0_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-poPX9mZH/5CSanm50Q+1toVci6pv5KSRv/5TWCwtzQS5XEwn40BcCrgIeMFWP9CKKIniKXNxoIOnOq4VVlGXhg==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
    dev: true

  /babel-jest/27.5.1_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-cdQ5dXjGRd0IBRATiQ4mZGlGlRE8kJpjPOixdNRdT+m3UcNqmYWN6rK6nvtXYfY3D76cb8s/O1Ss8ea24PIwcg==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    peerDependencies:
      '@babel/core': ^7.8.0
    dependencies:
      '@babel/core': 7.17.12
      '@jest/transform': 27.5.1
      '@jest/types': 27.5.1
      '@types/babel__core': 7.1.19
      babel-plugin-istanbul: 6.1.1
      babel-preset-jest: 27.5.1_@babel+core@7.17.12
      chalk: 4.1.2
      graceful-fs: 4.2.10
      slash: 3.0.0
    transitivePeerDependencies:
      - supports-color

  /babel-loader/8.2.5_4bf35c6ryl6gwyrcrj2ykng7ny:
    resolution:
      {
        integrity: sha512-OSiFfH89LrEMiWd4pLNqGz4CwJDtbs2ZVc+iGu2HrkRfPxId9F2anQj38IxWpmRfsUY0aBZYi1EFcd3mhtRMLQ==
      }
    engines: { node: '>= 8.9' }
    peerDependencies:
      '@babel/core': ^7.0.0
      webpack: '>=2'
    dependencies:
      '@babel/core': 7.17.12
      find-cache-dir: 3.3.2
      loader-utils: 2.0.2
      make-dir: 3.1.0
      schema-utils: 2.7.1
      webpack: 4.44.2
    dev: true

  /babel-plugin-add-react-displayname/0.0.5:
    resolution:
      {
        integrity: sha512-LY3+Y0XVDYcShHHorshrDbt4KFWL4bSeniCtl4SYZbask+Syngk1uMPCeN9+nSiZo6zX5s0RTq/J9Pnaaf/KHw==
      }
    dev: true

  /babel-plugin-apply-mdx-type-prop/1.6.22_@babel+core@7.12.9:
    resolution:
      {
        integrity: sha512-VefL+8o+F/DfK24lPZMtJctrCVOfgbqLAGZSkxwhazQv4VxPg3Za/i40fu22KR2m8eEda+IfSOlPLUSIiLcnCQ==
      }
    peerDependencies:
      '@babel/core': ^7.11.6
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.10.4
      '@mdx-js/util': 1.6.22
    dev: true

  /babel-plugin-dynamic-import-node/2.3.3:
    resolution:
      {
        integrity: sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==
      }
    dependencies:
      object.assign: 4.1.2
    dev: true

  /babel-plugin-emotion/10.2.2:
    resolution:
      {
        integrity: sha512-SMSkGoqTbTyUTDeuVuPIWifPdUGkTk1Kf9BWRiXIOIcuyMfsdp2EjeiiFvOzX8NOBvEh/ypKYvUh2rkgAJMCLA==
      }
    dependencies:
      '@babel/helper-module-imports': 7.16.7
      '@emotion/hash': 0.8.0
      '@emotion/memoize': 0.7.4
      '@emotion/serialize': 0.11.16
      babel-plugin-macros: 2.8.0
      babel-plugin-syntax-jsx: 6.18.0
      convert-source-map: 1.8.0
      escape-string-regexp: 1.0.5
      find-root: 1.1.0
      source-map: 0.5.7
    dev: true

  /babel-plugin-extract-import-names/1.6.22:
    resolution:
      {
        integrity: sha512-yJ9BsJaISua7d8zNT7oRG1ZLBJCIdZ4PZqmH8qa9N5AK01ifk3fnkc98AXhtzE7UkfCsEumvoQWgoYLhOnJ7jQ==
      }
    dependencies:
      '@babel/helper-plugin-utils': 7.10.4
    dev: true

  /babel-plugin-istanbul/6.1.1:
    resolution:
      {
        integrity: sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==
      }
    engines: { node: '>=8' }
    dependencies:
      '@babel/helper-plugin-utils': 7.17.12
      '@istanbuljs/load-nyc-config': 1.1.0
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-instrument: 5.2.0
      test-exclude: 6.0.0
    transitivePeerDependencies:
      - supports-color

  /babel-plugin-jest-hoist/27.5.1:
    resolution:
      {
        integrity: sha512-50wCwD5EMNW4aRpOwtqzyZHIewTYNxLA4nhB+09d8BIssfNfzBRhkBIHiaPv1Si226TQSvp8gxAJm2iY2qs2hQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@babel/template': 7.16.7
      '@babel/types': 7.18.4
      '@types/babel__core': 7.1.19
      '@types/babel__traverse': 7.17.1

  /babel-plugin-macros/2.8.0:
    resolution:
      {
        integrity: sha512-SEP5kJpfGYqYKpBrj5XU3ahw5p5GOHJ0U5ssOSQ/WBVdwkD2Dzlce95exQTs3jOVWPPKLBN2rlEWkCK7dSmLvg==
      }
    dependencies:
      '@babel/runtime': 7.18.3
      cosmiconfig: 6.0.0
      resolve: 1.17.0
    dev: true

  /babel-plugin-macros/3.1.0:
    resolution:
      {
        integrity: sha512-Cg7TFGpIr01vOQNODXOOaGz2NpCU5gl8x1qJFbb6hbZxR7XrcE2vtbAsTAbJ7/xwJtUuJEw8K8Zr/AE0LHlesg==
      }
    engines: { node: '>=10', npm: '>=6' }
    dependencies:
      '@babel/runtime': 7.18.3
      cosmiconfig: 7.0.1
      resolve: 1.22.0
    dev: true

  /babel-plugin-named-asset-import/0.3.8_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-WXiAc++qo7XcJ1ZnTYGtLxmBCVbddAml3CEXgWaBzNzLNoxtQ8AiGEFDMOhot9XjTCQbvP5E77Fj9Gk924f00Q==
      }
    peerDependencies:
      '@babel/core': ^7.1.0
    dependencies:
      '@babel/core': 7.17.12
    dev: true

  /babel-plugin-polyfill-corejs2/0.3.1_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-v7/T6EQcNfVLfcN2X8Lulb7DjprieyLWJK/zOWH5DUYcAgex9sP3h25Q+DLsX9TloXe3y1O8l2q2Jv9q8UVB9w==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/compat-data': 7.18.5
      '@babel/core': 7.17.12
      '@babel/helper-define-polyfill-provider': 0.3.1_@babel+core@7.17.12
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-polyfill-corejs3/0.1.7_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-u+gbS9bbPhZWEeyy1oR/YaaSpod/KDT07arZHb80aTpl8H5ZBq+uN1nN9/xtX7jQyfLdPfoqI4Rue/MQSWJquw==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-define-polyfill-provider': 0.1.5_@babel+core@7.17.12
      core-js-compat: 3.23.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-polyfill-corejs3/0.5.2_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-G3uJih0XWiID451fpeFaYGVuxHEjzKTHtc9uGFEjR6hHrvNzeS/PX+LLLcetJcytsB5m4j+K3o/EpXJNb/5IEQ==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-define-polyfill-provider': 0.3.1_@babel+core@7.17.12
      core-js-compat: 3.23.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-polyfill-regenerator/0.3.1_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-Y2B06tvgHYt1x0yz17jGkGeeMr5FeKUu+ASJ+N6nB5lQ8Dapfg42i0OVrf8PNGJ3zKL4A23snMi1IRwrqqND7A==
      }
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/helper-define-polyfill-provider': 0.3.1_@babel+core@7.17.12
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-react-docgen/4.2.1:
    resolution:
      {
        integrity: sha512-UQ0NmGHj/HAqi5Bew8WvNfCk8wSsmdgNd8ZdMjBCICtyCJCq9LiqgqvjCYe570/Wg7AQArSq1VQ60Dd/CHN7mQ==
      }
    dependencies:
      ast-types: 0.14.2
      lodash: 4.17.21
      react-docgen: 5.4.2
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-syntax-jsx/6.18.0:
    resolution:
      {
        integrity: sha512-qrPaCSo9c8RHNRHIotaufGbuOBN8rtdC4QrrFFc43vyWCCz7Kl7GL1PGaXtMGQZUXrkCjNEgxDfmAuAabr/rlw==
      }
    dev: true

  /babel-preset-current-node-syntax/1.0.1_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-M7LQ0bxarkxQoN+vz5aJPsLBn77n8QgTFmo8WK0/44auK2xlCXrYcUxHFxgU7qW5Yzw/CjmLRK2uJzaCd7LvqQ==
      }
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.17.12
      '@babel/plugin-syntax-async-generators': 7.8.4_@babel+core@7.17.12
      '@babel/plugin-syntax-bigint': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-class-properties': 7.12.13_@babel+core@7.17.12
      '@babel/plugin-syntax-import-meta': 7.10.4_@babel+core@7.17.12
      '@babel/plugin-syntax-json-strings': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4_@babel+core@7.17.12
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-numeric-separator': 7.10.4_@babel+core@7.17.12
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-optional-chaining': 7.8.3_@babel+core@7.17.12
      '@babel/plugin-syntax-top-level-await': 7.14.5_@babel+core@7.17.12

  /babel-preset-jest/27.5.1_@babel+core@7.17.12:
    resolution:
      {
        integrity: sha512-Nptf2FzlPCWYuJg41HBqXVT8ym6bXOevuCTbhxlUpjwtysGaIWFvDEjp4y+G7fl13FgOdjs7P/DmErqH7da0Ag==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.17.12
      babel-plugin-jest-hoist: 27.5.1
      babel-preset-current-node-syntax: 1.0.1_@babel+core@7.17.12

  /bail/1.0.5:
    resolution:
      {
        integrity: sha512-xFbRxM1tahm08yHBP16MMjVUAvDaBMD38zsM9EMAUN61omwLmKlOpB/Zku5QkjZ8TZ4vn53pj+t518cH0S03RQ==
      }
    dev: true

  /balanced-match/1.0.2:
    resolution:
      {
        integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==
      }

  /base/0.11.2:
    resolution:
      {
        integrity: sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      cache-base: 1.0.1
      class-utils: 0.3.6
      component-emitter: 1.3.0
      define-property: 1.0.0
      isobject: 3.0.1
      mixin-deep: 1.3.2
      pascalcase: 0.1.1

  /base64-js/1.5.1:
    resolution:
      {
        integrity: sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==
      }

  /batch-processor/1.0.0:
    resolution: { integrity: sha1-dclcMrdI4IUNEMKxaPa9vpiRrOg= }
    dev: true

  /batch/0.6.1:
    resolution: { integrity: sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY= }

  /bcrypt-pbkdf/1.0.2:
    resolution:
      {
        integrity: sha512-qeFIXtP4MSoi6NLqO12WfqARWWuCKi2Rn/9hJLEmtB5yTNr9DqFWkJRCf2qShWzPeAMRnOgCrq0sg/KLv5ES9w==
      }
    dependencies:
      tweetnacl: 0.14.5
    dev: false

  /better-opn/2.1.1:
    resolution:
      {
        integrity: sha512-kIPXZS5qwyKiX/HcRvDYfmBQUa8XP17I0mYZZ0y4UhpYOSvtsLHDYqmomS+Mj20aDvD3knEiQ0ecQy2nhio3yA==
      }
    engines: { node: '>8.0.0' }
    dependencies:
      open: 7.4.2
    dev: true

  /better-path-resolve/1.0.0:
    resolution:
      {
        integrity: sha512-pbnl5XzGBdrFU/wT4jqmJVPn2B6UHPBOhzMQkY/SPUPB6QtUXtmBHBIwCbXJol93mOpGMnQyP/+BB19q04xj7g==
      }
    engines: { node: '>=4' }
    dependencies:
      is-windows: 1.0.2
    dev: false

  /big.js/3.2.0:
    resolution:
      {
        integrity: sha512-+hN/Zh2D08Mx65pZ/4g5bsmNiZUuChDiQfTUQ7qJr4/kuopCr88xZsAXv6mBoZEsUI4OuGHlX59qE94K2mMW8Q==
      }
    dev: false

  /big.js/5.2.2:
    resolution:
      {
        integrity: sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==
      }

  /binary-extensions/1.13.1:
    resolution:
      {
        integrity: sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==
      }
    engines: { node: '>=0.10.0' }
    optional: true

  /binary-extensions/2.2.0:
    resolution:
      {
        integrity: sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==
      }
    engines: { node: '>=8' }

  /bindings/1.5.0:
    resolution:
      {
        integrity: sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==
      }
    requiresBuild: true
    dependencies:
      file-uri-to-path: 1.0.0
    optional: true

  /bl/4.1.0:
    resolution:
      {
        integrity: sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==
      }
    dependencies:
      buffer: 5.7.1
      inherits: 2.0.4
      readable-stream: 3.6.0
    dev: true

  /bluebird/3.7.2:
    resolution:
      {
        integrity: sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg==
      }

  /bn.js/4.12.0:
    resolution:
      {
        integrity: sha512-c98Bf3tPniI+scsdk237ku1Dc3ujXQTSgyiPUDEOe7tRkhrqridvh8klBv0HCEso1OLOYcHuCv/cS6DNxKH+ZA==
      }

  /bn.js/5.2.1:
    resolution:
      {
        integrity: sha512-eXRvHzWyYPBuB4NBy0cmYQjGitUrtqwbvlzP3G6VFnNRbsZQIxQ10PbKKHt8gZ/HW/D/747aDl+QkDqg3KQLMQ==
      }

  /body-parser/1.20.0:
    resolution:
      {
        integrity: sha512-DfJ+q6EPcGKZD1QWUjSpqp+Q7bDQTsQIF4zfUAtZ6qk+H/3/QRhg9CEp39ss+/T2vw0+HaidC0ecJj/DRLIaKg==
      }
    engines: { node: '>= 0.8', npm: 1.2.8000 || >= 1.4.16 }
    dependencies:
      bytes: 3.1.2
      content-type: 1.0.4
      debug: 2.6.9
      depd: 2.0.0
      destroy: 1.2.0
      http-errors: 2.0.0
      iconv-lite: 0.4.24
      on-finished: 2.4.1
      qs: 6.10.3
      raw-body: 2.5.1
      type-is: 1.6.18
      unpipe: 1.0.0

  /bole/4.0.0:
    resolution:
      {
        integrity: sha512-Bk/2qoyOSlwU1dnDFk/oPM2FCNKAlYlBHfpAgwGX+K9HUtxSvmIAQCmMWMOvE6BlHHRCwsH1MxJe/r1ieodxqQ==
      }
    dependencies:
      fast-safe-stringify: 2.1.1
      individual: 3.0.0
    dev: true

  /bonjour-service/1.0.13:
    resolution:
      {
        integrity: sha512-LWKRU/7EqDUC9CTAQtuZl5HzBALoCYwtLhffW3et7vZMwv3bWLpJf8bRYlMD5OCcDpTfnPgNCV4yo9ZIaJGMiA==
      }
    dependencies:
      array-flatten: 2.1.2
      dns-equal: 1.0.0
      fast-deep-equal: 3.1.3
      multicast-dns: 7.2.5

  /boolbase/1.0.0:
    resolution:
      {
        integrity: sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==
      }

  /boxen/5.1.2:
    resolution:
      {
        integrity: sha512-9gYgQKXx+1nP8mP7CzFyaUARhg7D3n1dF/FnErWmu9l6JvGpNUN278h0aSb+QjoiKSWG+iZ3uHrcqk0qrY9RQQ==
      }
    engines: { node: '>=10' }
    dependencies:
      ansi-align: 3.0.1
      camelcase: 6.3.0
      chalk: 4.1.2
      cli-boxes: 2.2.1
      string-width: 4.2.3
      type-fest: 0.20.2
      widest-line: 3.1.0
      wrap-ansi: 7.0.0
    dev: true

  /brace-expansion/1.1.11:
    resolution:
      {
        integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==
      }
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  /braces/2.3.2:
    resolution:
      {
        integrity: sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      arr-flatten: 1.1.0
      array-unique: 0.3.2
      extend-shallow: 2.0.1
      fill-range: 4.0.0
      isobject: 3.0.1
      repeat-element: 1.1.4
      snapdragon: 0.8.2
      snapdragon-node: 2.1.1
      split-string: 3.1.0
      to-regex: 3.0.2

  /braces/3.0.2:
    resolution:
      {
        integrity: sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==
      }
    engines: { node: '>=8' }
    dependencies:
      fill-range: 7.0.1

  /brorand/1.1.0:
    resolution:
      {
        integrity: sha512-cKV8tMCEpQs4hK/ik71d6LrPOnpkpGBR0wzxqr68g2m/LB2GxVYQroAjMJZRVM1Y4BCjCKc3vAamxSzOY2RP+w==
      }

  /browser-process-hrtime/1.0.0:
    resolution:
      {
        integrity: sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==
      }

  /browserify-aes/1.2.0:
    resolution:
      {
        integrity: sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==
      }
    dependencies:
      buffer-xor: 1.0.3
      cipher-base: 1.0.4
      create-hash: 1.2.0
      evp_bytestokey: 1.0.3
      inherits: 2.0.4
      safe-buffer: 5.2.1

  /browserify-cipher/1.0.1:
    resolution:
      {
        integrity: sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==
      }
    dependencies:
      browserify-aes: 1.2.0
      browserify-des: 1.0.2
      evp_bytestokey: 1.0.3

  /browserify-des/1.0.2:
    resolution:
      {
        integrity: sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==
      }
    dependencies:
      cipher-base: 1.0.4
      des.js: 1.0.1
      inherits: 2.0.4
      safe-buffer: 5.2.1

  /browserify-rsa/4.1.0:
    resolution:
      {
        integrity: sha512-AdEER0Hkspgno2aR97SAf6vi0y0k8NuOpGnVH3O99rcA5Q6sh8QxcngtHuJ6uXwnfAXNM4Gn1Gb7/MV1+Ymbog==
      }
    dependencies:
      bn.js: 5.2.1
      randombytes: 2.1.0

  /browserify-sign/4.2.1:
    resolution:
      {
        integrity: sha512-/vrA5fguVAKKAVTNJjgSm1tRQDHUU6DbwO9IROu/0WAzC8PKhucDSh18J0RMvVeHAn5puMd+QHC2erPRNf8lmg==
      }
    dependencies:
      bn.js: 5.2.1
      browserify-rsa: 4.1.0
      create-hash: 1.2.0
      create-hmac: 1.1.7
      elliptic: 6.5.4
      inherits: 2.0.4
      parse-asn1: 5.1.6
      readable-stream: 3.6.0
      safe-buffer: 5.2.1

  /browserify-zlib/0.2.0:
    resolution:
      {
        integrity: sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==
      }
    dependencies:
      pako: 1.0.11

  /browserslist/4.20.4:
    resolution:
      {
        integrity: sha512-ok1d+1WpnU24XYN7oC3QWgTyMhY/avPJ/r9T00xxvUOIparA/gc+UPUMaod3i+G6s+nI2nUb9xZ5k794uIwShw==
      }
    engines: { node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7 }
    hasBin: true
    dependencies:
      caniuse-lite: 1.0.30001354
      electron-to-chromium: 1.4.157
      escalade: 3.1.1
      node-releases: 2.0.5
      picocolors: 1.0.0

  /bser/2.1.1:
    resolution:
      {
        integrity: sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==
      }
    dependencies:
      node-int64: 0.4.0

  /buffer-crc32/0.2.13:
    resolution:
      {
        integrity: sha512-VO9Ht/+p3SN7SKWqcrgEzjGbRSJYTx+Q1pTQC0wrWqHx0vpJraQ6GtHx8tvcg1rlK1byhU5gccxgOgj7B0TDkQ==
      }
    dev: true

  /buffer-equal-constant-time/1.0.1:
    resolution:
      {
        integrity: sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==
      }
    dev: false

  /buffer-from/1.1.2:
    resolution:
      {
        integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==
      }

  /buffer-xor/1.0.3:
    resolution:
      {
        integrity: sha512-571s0T7nZWK6vB67HI5dyUF7wXiNcfaPPPTl6zYCNApANjIvYJTg7hlud/+cJpdAhS7dVzqMLmfhfHR3rAcOjQ==
      }

  /buffer/4.9.2:
    resolution:
      {
        integrity: sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==
      }
    dependencies:
      base64-js: 1.5.1
      ieee754: 1.2.1
      isarray: 1.0.0

  /buffer/5.7.1:
    resolution:
      {
        integrity: sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==
      }
    dependencies:
      base64-js: 1.5.1
      ieee754: 1.2.1
    dev: true

  /builtin-modules/1.1.1:
    resolution:
      {
        integrity: sha512-wxXCdllwGhI2kCC0MnvTGYTMvnVZTvqgypkiTI8Pa5tcz2i6VqsqwYGgqwXji+4RgCzms6EajE4IxiUH6HH8nQ==
      }
    engines: { node: '>=0.10.0' }
    dev: true

  /builtin-modules/3.1.0:
    resolution:
      {
        integrity: sha512-k0KL0aWZuBt2lrxrcASWDfwOLMnodeQjodT/1SxEQAXsHANgo6ZC/VEaSEHCXt7aSTZ4/4H5LKa+tBXmW7Vtvw==
      }
    engines: { node: '>=6' }
    dev: false

  /builtin-status-codes/3.0.0:
    resolution:
      {
        integrity: sha512-HpGFw18DgFWlncDfjTa2rcQ4W88O1mC8e8yZ2AvQY5KDaktSTwo+KRf6nHK6FRI5FyRyb/5T6+TSxfP7QyGsmQ==
      }

  /builtins/1.0.3:
    resolution:
      {
        integrity: sha512-uYBjakWipfaO/bXI7E8rq6kpwHRZK5cNYrUv2OzZSI/FvmdMyXJ2tG9dKcjEC5YHmHpUAwsargWIZNWdxb/bnQ==
      }
    dev: false

  /buttono/1.0.4:
    resolution:
      {
        integrity: sha512-aLOeyK3zrhZnqvH6LzwIbjur8mkKhW8Xl3/jolX+RCJnGG354+L48q1SJWdky89uhQ/mBlTxY/d0x8+ciE0ZWw==
      }
    dev: false

  /bytes/3.0.0:
    resolution: { integrity: sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg= }
    engines: { node: '>= 0.8' }

  /bytes/3.1.2:
    resolution:
      {
        integrity: sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==
      }
    engines: { node: '>= 0.8' }

  /c8/7.11.3:
    resolution:
      {
        integrity: sha512-6YBmsaNmqRm9OS3ZbIiL2EZgi1+Xc4O24jL3vMYGE6idixYuGdy76rIfIdltSKDj9DpLNrcXSonUTR1miBD0wA==
      }
    engines: { node: '>=10.12.0' }
    hasBin: true
    dependencies:
      '@bcoe/v8-coverage': 0.2.3
      '@istanbuljs/schema': 0.1.3
      find-up: 5.0.0
      foreground-child: 2.0.0
      istanbul-lib-coverage: 3.2.0
      istanbul-lib-report: 3.0.0
      istanbul-reports: 3.1.4
      rimraf: 3.0.2
      test-exclude: 6.0.0
      v8-to-istanbul: 9.0.0
      yargs: 16.2.0
      yargs-parser: 20.2.9
    dev: true

  /cacache/12.0.4:
    resolution:
      {
        integrity: sha512-a0tMB40oefvuInr4Cwb3GerbL9xTj1D5yg0T5xrjGCGyfvbxseIXX7BAO/u/hIXdafzOI5JC3wDwHyf24buOAQ==
      }
    dependencies:
      bluebird: 3.7.2
      chownr: 1.1.4
      figgy-pudding: 3.5.2
      glob: 7.2.3
      graceful-fs: 4.2.10
      infer-owner: 1.0.4
      lru-cache: 5.1.1
      mississippi: 3.0.0
      mkdirp: 0.5.6
      move-concurrently: 1.0.1
      promise-inflight: 1.0.1
      rimraf: 2.7.1
      ssri: 6.0.2
      unique-filename: 1.1.1
      y18n: 4.0.3

  /cacache/15.3.0:
    resolution:
      {
        integrity: sha512-VVdYzXEn+cnbXpFgWs5hTT7OScegHVmLhJIR8Ufqk3iFD6A6j5iSX1KuBTfNEv4tdJWE2PzA6IVFtcLC7fN9wQ==
      }
    engines: { node: '>= 10' }
    dependencies:
      '@npmcli/fs': 1.1.1
      '@npmcli/move-file': 1.1.2
      chownr: 2.0.0
      fs-minipass: 2.1.0
      glob: 7.2.3
      infer-owner: 1.0.4
      lru-cache: 6.0.0
      minipass: 3.1.6
      minipass-collect: 1.0.2
      minipass-flush: 1.0.5
      minipass-pipeline: 1.2.4
      mkdirp: 1.0.4
      p-map: 4.0.0
      promise-inflight: 1.0.1
      rimraf: 3.0.2
      ssri: 8.0.1
      tar: 6.1.11
      unique-filename: 1.1.1
    dev: true

  /cache-base/1.0.1:
    resolution:
      {
        integrity: sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      collection-visit: 1.0.0
      component-emitter: 1.3.0
      get-value: 2.0.6
      has-value: 1.0.0
      isobject: 3.0.1
      set-value: 2.0.1
      to-object-path: 0.3.0
      union-value: 1.0.1
      unset-value: 1.0.0

  /cacheable-request/6.1.0:
    resolution:
      {
        integrity: sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==
      }
    engines: { node: '>=8' }
    dependencies:
      clone-response: 1.0.2
      get-stream: 5.2.0
      http-cache-semantics: 4.1.0
      keyv: 3.1.0
      lowercase-keys: 2.0.0
      normalize-url: 4.5.1
      responselike: 1.0.2
    dev: true

  /call-bind/1.0.2:
    resolution:
      {
        integrity: sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==
      }
    dependencies:
      function-bind: 1.1.1
      get-intrinsic: 1.1.2

  /call-me-maybe/1.0.1:
    resolution:
      {
        integrity: sha512-wCyFsDQkKPwwF8BDwOiWNx/9K45L/hvggQiDbve+viMNMQnWhrlYIuBk09offfwCRtCO9P6XwUttufzU11WCVw==
      }
    dev: true

  /callsites/3.1.0:
    resolution:
      {
        integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==
      }
    engines: { node: '>=6' }

  /camel-case/4.1.2:
    resolution:
      {
        integrity: sha512-gxGWBrTT1JuMx6R+o5PTXMmUnhnVzLQ9SNutD4YqKtI6ap897t3tKECYla6gCWEkplXnlNybEkZg9GEGxKFCgw==
      }
    dependencies:
      pascal-case: 3.1.2
      tslib: 2.3.1

  /camelcase-css/2.0.1:
    resolution:
      {
        integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==
      }
    engines: { node: '>= 6' }
    dev: true

  /camelcase-keys/6.2.2:
    resolution:
      {
        integrity: sha512-YrwaA0vEKazPBkn0ipTiMpSajYDSe+KjQfrjhcBMxJt/znbvlHd8Pw/Vamaz5EB4Wfhs3SUR3Z9mwRu/P3s3Yg==
      }
    engines: { node: '>=8' }
    dependencies:
      camelcase: 5.3.1
      map-obj: 4.3.0
      quick-lru: 4.0.1
    dev: false

  /camelcase/5.3.1:
    resolution:
      {
        integrity: sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==
      }
    engines: { node: '>=6' }

  /camelcase/6.3.0:
    resolution:
      {
        integrity: sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==
      }
    engines: { node: '>=10' }

  /caniuse-api/3.0.0:
    resolution:
      {
        integrity: sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==
      }
    dependencies:
      browserslist: 4.20.4
      caniuse-lite: 1.0.30001354
      lodash.memoize: 4.1.2
      lodash.uniq: 4.5.0
    dev: false

  /caniuse-lite/1.0.30001354:
    resolution:
      {
        integrity: sha512-mImKeCkyGDAHNywYFA4bqnLAzTUvVkqPvhY4DV47X+Gl2c5Z8c3KNETnXp14GQt11LvxE8AwjzGxJ+rsikiOzg==
      }

  /capture-exit/2.0.0:
    resolution:
      {
        integrity: sha512-PiT/hQmTonHhl/HFGN+Lx3JJUznrVYJ3+AQsnthneZbvW7x+f08Tk7yLJTLEOUvBTbduLeeBkxEaYXUOUrRq6g==
      }
    engines: { node: 6.* || 8.* || >= 10.* }
    dependencies:
      rsvp: 4.8.5
    dev: true

  /case-sensitive-paths-webpack-plugin/2.4.0:
    resolution:
      {
        integrity: sha512-roIFONhcxog0JSSWbvVAh3OocukmSgpqOH6YpMkCvav/ySIV3JKg4Dc8vYtQjYi/UxpNE36r/9v+VqTQqgkYmw==
      }
    engines: { node: '>=4' }
    dev: true

  /case/1.6.3:
    resolution:
      {
        integrity: sha512-mzDSXIPaFwVDvZAHqZ9VlbyF4yyXRuX6IvB06WvPYkqJVO24kX1PPhv9bfpKNFZyxYFmmgo03HUiD8iklmJYRQ==
      }
    engines: { node: '>= 0.8.0' }
    dev: true

  /caseless/0.12.0:
    resolution:
      {
        integrity: sha512-4tYFyifaFfGacoiObjJegolkwSU4xQNGbVgUiNYVUxbQ2x2lUsFvY4hVgVzGiIe6WLOPqycWXA40l+PWsxthUw==
      }
    dev: false

  /ccount/1.1.0:
    resolution:
      {
        integrity: sha512-vlNK021QdI7PNeiUh/lKkC/mNHHfV0m/Ad5JoI0TYtlBnJAslM/JIkm/tGC88bkLIwO6OQ5uV6ztS6kVAtCDlg==
      }
    dev: true

  /cdk-assets/2.7.0:
    resolution:
      {
        integrity: sha512-6MMQ9/iXSXPQNOD2PsHRmE+0+qVTAS2Wjx/1FGtTT5rTGN3bRqnq8KQtkWyNz/RanvEgrouR9dSPY+tQzfdHmw==
      }
    engines: { node: '>= 14.15.0' }
    hasBin: true
    dependencies:
      '@aws-cdk/cloud-assembly-schema': 2.7.0
      '@aws-cdk/cx-api': 2.7.0
      archiver: 5.3.1
      aws-sdk: 2.1155.0
      glob: 7.2.3
      mime: 2.6.0
      yargs: 16.2.0
    dev: true

  /chalk/1.1.3:
    resolution:
      {
        integrity: sha512-U3lRVLMSlsCfjqYPbLyVv11M9CPW4I728d6TCKMAOJueEeB9/8o+eSsMnxPJD+Q+K909sdESg7C+tIkoH6on1A==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      ansi-styles: 2.2.1
      escape-string-regexp: 1.0.5
      has-ansi: 2.0.0
      strip-ansi: 3.0.1
      supports-color: 2.0.0
    dev: false

  /chalk/2.4.2:
    resolution:
      {
        integrity: sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==
      }
    engines: { node: '>=4' }
    dependencies:
      ansi-styles: 3.2.1
      escape-string-regexp: 1.0.5
      supports-color: 5.5.0

  /chalk/3.0.0:
    resolution:
      {
        integrity: sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==
      }
    engines: { node: '>=8' }
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0
    dev: true

  /chalk/4.1.2:
    resolution:
      {
        integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==
      }
    engines: { node: '>=10' }
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  /char-regex/1.0.2:
    resolution:
      {
        integrity: sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==
      }
    engines: { node: '>=10' }

  /character-entities-legacy/1.1.4:
    resolution:
      {
        integrity: sha512-3Xnr+7ZFS1uxeiUDvV02wQ+QDbc55o97tIV5zHScSPJpcLm/r0DFPcoY3tYRp+VZukxuMeKgXYmsXQHO05zQeA==
      }
    dev: true

  /character-entities/1.2.4:
    resolution:
      {
        integrity: sha512-iBMyeEHxfVnIakwOuDXpVkc54HijNgCyQB2w0VfGQThle6NXn50zU6V/u+LDhxHcDUPojn6Kpga3PTAD8W1bQw==
      }
    dev: true

  /character-reference-invalid/1.1.4:
    resolution:
      {
        integrity: sha512-mKKUkUbhPpQlCOfIuZkvSEgktjPFIsZKRRbC6KWVEMvlzblj3i3asQv5ODsrwt0N3pHAEvjP8KTQPHkp0+6jOg==
      }
    dev: true

  /charcodes/0.2.0:
    resolution:
      {
        integrity: sha512-Y4kiDb+AM4Ecy58YkuZrrSRJBDQdQ2L+NyS1vHHFtNtUjgutcZfx3yp1dAONI/oPaPmyGfCLx5CxL+zauIMyKQ==
      }
    engines: { node: '>=6' }
    dev: true

  /chardet/0.7.0:
    resolution:
      {
        integrity: sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==
      }
    dev: false

  /charenc/0.0.2:
    resolution: { integrity: sha1-wKHS86cJLgN3S/qD8UwPxXkKhmc= }
    dev: true

  /chokidar/2.1.8:
    resolution:
      {
        integrity: sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==
      }
    deprecated: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
    dependencies:
      anymatch: 2.0.0
      async-each: 1.0.3
      braces: 2.3.2
      glob-parent: 3.1.0
      inherits: 2.0.4
      is-binary-path: 1.0.1
      is-glob: 4.0.3
      normalize-path: 3.0.0
      path-is-absolute: 1.0.1
      readdirp: 2.2.1
      upath: 1.2.0
    optionalDependencies:
      fsevents: 1.2.13
    optional: true

  /chokidar/3.4.3:
    resolution:
      {
        integrity: sha512-DtM3g7juCXQxFVSNPNByEC2+NImtBuxQQvWlHunpJIS5Ocr0lG306cC7FCi7cEA0fzmybPUIl4txBIobk1gGOQ==
      }
    engines: { node: '>= 8.10.0' }
    dependencies:
      anymatch: 3.1.2
      braces: 3.0.2
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.5.0
    optionalDependencies:
      fsevents: 2.1.3

  /chokidar/3.5.3:
    resolution:
      {
        integrity: sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==
      }
    engines: { node: '>= 8.10.0' }
    dependencies:
      anymatch: 3.1.2
      braces: 3.0.2
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.2

  /chownr/1.1.4:
    resolution:
      {
        integrity: sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==
      }

  /chownr/2.0.0:
    resolution:
      {
        integrity: sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==
      }
    engines: { node: '>=10' }

  /chrome-trace-event/1.0.3:
    resolution:
      {
        integrity: sha512-p3KULyQg4S7NIHixdwbGX+nFHkoBiA4YQmyWtjb8XngSKV124nJmRysgAeujbUVb15vh+RvFUfCPqU7rXk+hZg==
      }
    engines: { node: '>=6.0' }

  /ci-info/2.0.0:
    resolution:
      {
        integrity: sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ==
      }
    dev: true

  /ci-info/3.3.2:
    resolution:
      {
        integrity: sha512-xmDt/QIAdeZ9+nfdPsaBCpMvHNLFiLdjj59qjqn+6iPe6YmHGQ35sBnQ8uslRBXFmXkiZQOJRjvQeoGppoTjjg==
      }

  /cipher-base/1.0.4:
    resolution:
      {
        integrity: sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==
      }
    dependencies:
      inherits: 2.0.4
      safe-buffer: 5.2.1

  /cjs-module-lexer/1.2.2:
    resolution:
      {
        integrity: sha512-cOU9usZw8/dXIXKtwa8pM0OTJQuJkxMN6w30csNRUerHfeQ5R6U3kkU/FtJeIf3M202OHfY2U8ccInBG7/xogA==
      }

  /class-utils/0.3.6:
    resolution:
      {
        integrity: sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      arr-union: 3.1.0
      define-property: 0.2.5
      isobject: 3.0.1
      static-extend: 0.1.2

  /clean-css/4.2.4:
    resolution:
      {
        integrity: sha512-EJUDT7nDVFDvaQgAo2G/PJvxmp1o/c6iXLbswsBbUFXi1Nr+AjA2cKmfbKDMjMvzEe75g3P6JkaDDAKk96A85A==
      }
    engines: { node: '>= 4.0' }
    dependencies:
      source-map: 0.6.1

  /clean-css/5.3.0:
    resolution:
      {
        integrity: sha512-YYuuxv4H/iNb1Z/5IbMRoxgrzjWGhOEFfd+groZ5dMCVkpENiMZmwspdrzBo9286JjM1gZJPAyL7ZIdzuvu2AQ==
      }
    engines: { node: '>= 10.0' }
    dependencies:
      source-map: 0.6.1

  /clean-stack/2.2.0:
    resolution:
      {
        integrity: sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==
      }
    engines: { node: '>=6' }
    dev: true

  /cli-boxes/2.2.1:
    resolution:
      {
        integrity: sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw==
      }
    engines: { node: '>=6' }
    dev: true

  /cli-color/2.0.2:
    resolution:
      {
        integrity: sha512-g4JYjrTW9MGtCziFNjkqp3IMpGhnJyeB0lOtRPjQkYhXzKYr6tYnXKyEVnMzITxhpbahsEW9KsxOYIDKwcsIBw==
      }
    engines: { node: '>=0.10' }
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.61
      es6-iterator: 2.0.3
      memoizee: 0.4.15
      timers-ext: 0.1.7
    dev: true

  /cli-cursor/3.1.0:
    resolution:
      {
        integrity: sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==
      }
    engines: { node: '>=8' }
    dependencies:
      restore-cursor: 3.1.0
    dev: false

  /cli-table/0.3.11:
    resolution:
      {
        integrity: sha512-IqLQi4lO0nIB4tcdTpN4LCB9FI3uqrJZK7RC515EnhZ6qBaglkIgICb1wjeAqpdoOabm1+SuQtkXIPdYC93jhQ==
      }
    engines: { node: '>= 0.2.0' }
    dependencies:
      colors: 1.0.3
    dev: false

  /cli-table3/0.6.2:
    resolution:
      {
        integrity: sha512-QyavHCaIC80cMivimWu4aWHilIpiDpfm3hGmqAmXVL1UsnbLuBSMd21hTX6VY4ZSDSM73ESLeF8TOYId3rBTbw==
      }
    engines: { node: 10.* || >= 12.* }
    dependencies:
      string-width: 4.2.3
    optionalDependencies:
      '@colors/colors': 1.5.0
    dev: true

  /cli-width/3.0.0:
    resolution:
      {
        integrity: sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw==
      }
    engines: { node: '>= 10' }
    dev: false

  /cliui/5.0.0:
    resolution:
      {
        integrity: sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==
      }
    dependencies:
      string-width: 3.1.0
      strip-ansi: 5.2.0
      wrap-ansi: 5.1.0
    dev: false

  /cliui/6.0.0:
    resolution:
      {
        integrity: sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==
      }
    dependencies:
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wrap-ansi: 6.2.0
    dev: true

  /cliui/7.0.4:
    resolution:
      {
        integrity: sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==
      }
    dependencies:
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wrap-ansi: 7.0.0
    dev: true

  /clone-deep/4.0.1:
    resolution:
      {
        integrity: sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==
      }
    engines: { node: '>=6' }
    dependencies:
      is-plain-object: 2.0.4
      kind-of: 6.0.3
      shallow-clone: 3.0.1

  /clone-response/1.0.2:
    resolution:
      {
        integrity: sha512-yjLXh88P599UOyPTFX0POsd7WxnbsVsGohcwzHOLspIhhpalPw1BcqED8NblyZLKcGrL8dTgMlcaZxV2jAD41Q==
      }
    dependencies:
      mimic-response: 1.0.1
    dev: true

  /clsx/1.1.1:
    resolution:
      {
        integrity: sha512-6/bPho624p3S2pMyvP5kKBPXnI3ufHLObBFCfgx+LkeR5lg2XYy2hqZqUf45ypD8COn2bhgGJSUE+l5dhNBieA==
      }
    engines: { node: '>=6' }
    dev: true

  /cmd-extension/1.0.2:
    resolution:
      {
        integrity: sha512-iWDjmP8kvsMdBmLTHxFaqXikO8EdFRDfim7k6vUHglY/2xJ5jLrPsnQGijdfp4U+sr/BeecG0wKm02dSIAeQ1g==
      }
    engines: { node: '>=10' }
    dev: false

  /co/4.6.0:
    resolution:
      {
        integrity: sha512-QVb0dM5HvG+uaxitm8wONl7jltx8dqhfU33DcqtOZcLSVIKSDDLDi7+0LbAKiyI8hD9u42m2YxXSkMGWThaecQ==
      }
    engines: { iojs: '>= 1.0.0', node: '>= 0.12.0' }

  /code-point-at/1.1.0:
    resolution:
      {
        integrity: sha512-RpAVKQA5T63xEj6/giIbUEtZwJ4UFIc3ZtvEkiaUERylqe8xb5IvqcgOurZLahv93CLKfxcw5YI+DZcUBRyLXA==
      }
    engines: { node: '>=0.10.0' }

  /collapse-white-space/1.0.6:
    resolution:
      {
        integrity: sha512-jEovNnrhMuqyCcjfEJA56v0Xq8SkIoPKDyaHahwo3POf4qcSXqMYuwNcOTzp74vTsR9Tn08z4MxWqAhcekogkQ==
      }
    dev: true

  /collect-v8-coverage/1.0.1_@types+node@12.20.24:
    resolution:
      {
        integrity: sha512-iBPtljfCNcTKNAto0KEtDfZ3qzjJvqE3aTGZsbhjSBlorqpXJlaWWtPO35D+ZImoC3KWejX64o+yPGxhWSTzfg==
      }
    peerDependencies:
      '@types/node': '>=12'
    dependencies:
      '@types/node': 12.20.24

  /collection-visit/1.0.0:
    resolution:
      {
        integrity: sha512-lNkKvzEeMBBjUGHZ+q6z9pSJla0KWAQPvtzhEV9+iGyQYG+pBpl7xKDhxoNSOZH2hhv0v5k0y2yAM4o4SjoSkw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      map-visit: 1.0.0
      object-visit: 1.0.1

  /color-convert/1.9.3:
    resolution:
      {
        integrity: sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==
      }
    dependencies:
      color-name: 1.1.3

  /color-convert/2.0.1:
    resolution:
      {
        integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==
      }
    engines: { node: '>=7.0.0' }
    dependencies:
      color-name: 1.1.4

  /color-name/1.1.3:
    resolution:
      {
        integrity: sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==
      }

  /color-name/1.1.4:
    resolution:
      {
        integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==
      }

  /color-support/1.1.3:
    resolution:
      {
        integrity: sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==
      }
    hasBin: true
    dev: true

  /colord/2.9.2:
    resolution:
      {
        integrity: sha512-Uqbg+J445nc1TKn4FoDPS6ZZqAvEDnwrH42yo8B40JSOgSLxMZ/gt3h4nmCtPLQeXhjJJkqBx7SCY35WnIixaQ==
      }
    dev: false

  /colorette/2.0.19:
    resolution:
      {
        integrity: sha512-3tlv/dIP7FWvj3BsbHrGLJ6l/oKh1O3TcgBqMn+yyCagOxc23fyzDS6HypQbgxWbkpDnf52p1LuR4eWDQ/K9WQ==
      }

  /colors/1.0.3:
    resolution:
      {
        integrity: sha512-pFGrxThWcWQ2MsAz6RtgeWe4NK2kUE1WfsrvvlctdII745EW9I0yflqhe7++M5LEc7bV2c/9/5zc8sFcpL0Drw==
      }
    engines: { node: '>=0.1.90' }
    dev: false

  /colors/1.2.5:
    resolution:
      {
        integrity: sha512-erNRLao/Y3Fv54qUa0LBB+//Uf3YwMUmdJinN20yMXm9zdKKqH9wt7R9IIVZ+K7ShzfpLV/Zg8+VyrBJYB4lpg==
      }
    engines: { node: '>=0.1.90' }

  /combined-stream/1.0.8:
    resolution:
      {
        integrity: sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==
      }
    engines: { node: '>= 0.8' }
    dependencies:
      delayed-stream: 1.0.0

  /comma-separated-tokens/1.0.8:
    resolution:
      {
        integrity: sha512-GHuDRO12Sypu2cV70d1dkA2EUmXHgntrzbpvOB+Qy+49ypNfGgFQIC2fhhXbnyrJRynDCAARsT7Ou0M6hirpfw==
      }
    dev: true

  /commander/2.20.3:
    resolution:
      {
        integrity: sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==
      }

  /commander/4.1.1:
    resolution:
      {
        integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==
      }
    engines: { node: '>= 6' }

  /commander/6.2.1:
    resolution:
      {
        integrity: sha512-U7VdrJFnJgo4xjrHpTzu0yrHPGImdsmD95ZlgYSEajAn2JKzDhDTPG9kBTefmObL2w/ngeZnilk+OV9CG3d7UA==
      }
    engines: { node: '>= 6' }
    dev: true

  /commander/7.2.0:
    resolution:
      {
        integrity: sha512-QrWXB+ZQSVPmIWIhtEO9H+gwHaMGYiF5ChvoJ+K9ZGHG/sVsa6yiesAD1GC/x46sET00Xlwo1u49RVVVzvcSkw==
      }
    engines: { node: '>= 10' }

  /commander/8.3.0:
    resolution:
      {
        integrity: sha512-OkTL9umf+He2DZkUq8f8J9of7yL6RJKI24dVITBmNfZBmri9zYZQrKkuXiKhyfPSu8tUhnVBB1iKXevvnlR4Ww==
      }
    engines: { node: '>= 12' }

  /commander/9.3.0:
    resolution:
      {
        integrity: sha512-hv95iU5uXPbK83mjrJKuZyFM/LBAoCV/XhVGkS5Je6tl7sxr6A0ITMw5WoRV46/UaJ46Nllm3Xt7IaJhXTIkzw==
      }
    engines: { node: ^12.20.0 || >=14 }
    dev: false

  /common-path-prefix/3.0.0:
    resolution:
      {
        integrity: sha512-QE33hToZseCH3jS0qN96O/bSh3kaw/h+Tq7ngyY9eWDUnTlTNUyqfqvCXioLe5Na5jFsL78ra/wuBU4iuEgd4w==
      }
    dev: true

  /commondir/1.0.1:
    resolution:
      {
        integrity: sha512-W9pAhw0ja1Edb5GVdIF1mjZw/ASI0AlShXM83UUGe2DVr5TdAPEA1OA8m/g8zWp9x6On7gqufY+FatDbC3MDQg==
      }

  /component-emitter/1.3.0:
    resolution:
      {
        integrity: sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==
      }

  /compress-commons/4.1.1:
    resolution:
      {
        integrity: sha512-QLdDLCKNV2dtoTorqgxngQCMA+gWXkM/Nwu7FpeBhk/RdkzimqC3jueb/FDmaZeXh+uby1jkBqE3xArsLBE5wQ==
      }
    engines: { node: '>= 10' }
    dependencies:
      buffer-crc32: 0.2.13
      crc32-stream: 4.0.2
      normalize-path: 3.0.0
      readable-stream: 3.6.0
    dev: true

  /compressible/2.0.18:
    resolution:
      {
        integrity: sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==
      }
    engines: { node: '>= 0.6' }
    dependencies:
      mime-db: 1.52.0

  /compression/1.7.4:
    resolution:
      {
        integrity: sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      accepts: 1.3.8
      bytes: 3.0.0
      compressible: 2.0.18
      debug: 2.6.9
      on-headers: 1.0.2
      safe-buffer: 5.1.2
      vary: 1.1.2

  /compute-scroll-into-view/1.0.17:
    resolution:
      {
        integrity: sha512-j4dx+Fb0URmzbwwMUrhqWM2BEWHdFGx+qZ9qqASHRPqvTYdqvWnHg0H1hIbcyLnvgnoNAVMlwkepyqM3DaIFUg==
      }
    dev: true

  /concat-map/0.0.1:
    resolution:
      {
        integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==
      }

  /concat-stream/1.6.2:
    resolution:
      {
        integrity: sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==
      }
    engines: { '0': node >= 0.8 }
    dependencies:
      buffer-from: 1.1.2
      inherits: 2.0.4
      readable-stream: 2.3.7
      typedarray: 0.0.6

  /conf/10.1.2:
    resolution:
      {
        integrity: sha512-o9Fv1Mv+6A0JpoayQ8JleNp3hhkbOJP/Re/Q+QqxMPHPkABVsRjQGWZn9A5GcqLiTNC6d89p2PB5ZhHVDSMwyg==
      }
    engines: { node: '>=12' }
    dependencies:
      ajv: 8.11.0
      ajv-formats: 2.1.1
      atomically: 1.7.0
      debounce-fn: 4.0.0
      dot-prop: 6.0.1
      env-paths: 2.2.1
      json-schema-typed: 7.0.3
      onetime: 5.1.2
      pkg-up: 3.1.0
      semver: 7.3.7
    dev: true

  /configstore/5.0.1:
    resolution:
      {
        integrity: sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==
      }
    engines: { node: '>=8' }
    dependencies:
      dot-prop: 5.3.0
      graceful-fs: 4.2.10
      make-dir: 3.1.0
      unique-string: 2.0.0
      write-file-atomic: 3.0.3
      xdg-basedir: 4.0.0
    dev: true

  /connect-history-api-fallback/2.0.0:
    resolution:
      {
        integrity: sha512-U73+6lQFmfiNPrYbXqr6kZ1i1wiRqXnp2nhMsINseWXO8lDau0LGEffJ8kQi4EjLZympVgRdvqjAgiZ1tgzDDA==
      }
    engines: { node: '>=0.8' }

  /console-browserify/1.2.0:
    resolution:
      {
        integrity: sha512-ZMkYO/LkF17QvCPqM0gxw8yUzigAOZOSWSHg91FH6orS7vcEj5dVZTidN2fQ14yBSdg97RqhSNwLUXInd52OTA==
      }

  /console-control-strings/1.1.0:
    resolution:
      {
        integrity: sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==
      }

  /constants-browserify/1.0.0:
    resolution:
      {
        integrity: sha512-xFxOwqIzR/e1k1gLiWEophSCMqXcwVHIH7akf7b/vxcUeGunlj3hvZaaqxwHsTgn+IndtkQJgSztIDWeumWJDQ==
      }

  /constructs/10.0.130:
    resolution:
      {
        integrity: sha512-9LYBePJHHnuXCr42eN0T4+O8xXHRxxak6G/UX+avt8ZZ/SNE9HFbFD8a+FKP8ixSNzzaEamDMswrMwPPTtU8cA==
      }
    engines: { node: '>= 12.7.0' }
    dev: true

  /content-disposition/0.5.4:
    resolution:
      {
        integrity: sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==
      }
    engines: { node: '>= 0.6' }
    dependencies:
      safe-buffer: 5.2.1

  /content-type/1.0.4:
    resolution:
      {
        integrity: sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==
      }
    engines: { node: '>= 0.6' }

  /convert-source-map/1.8.0:
    resolution:
      {
        integrity: sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA==
      }
    dependencies:
      safe-buffer: 5.1.2

  /cookie-signature/1.0.6:
    resolution:
      {
        integrity: sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==
      }

  /cookie/0.5.0:
    resolution:
      {
        integrity: sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw==
      }
    engines: { node: '>= 0.6' }

  /copy-concurrently/1.0.5:
    resolution:
      {
        integrity: sha512-f2domd9fsVDFtaFcbaRZuYXwtdmnzqbADSwhSWYxYB/Q8zsdUUFMXVRwXGDMWmbEzAn1kdRrtI1T/KTFOL4X2A==
      }
    dependencies:
      aproba: 1.2.0
      fs-write-stream-atomic: 1.0.10
      iferr: 0.1.5
      mkdirp: 0.5.6
      rimraf: 2.7.1
      run-queue: 1.0.3

  /copy-descriptor/0.1.1:
    resolution:
      {
        integrity: sha512-XgZ0pFcakEUlbwQEVNg3+QAis1FyTL3Qel9FYy8pSkQqoG3PNoT0bOCQtOXcOkur21r2Eq2kI+IE+gsmAEVlYw==
      }
    engines: { node: '>=0.10.0' }

  /copy-to-clipboard/3.3.1:
    resolution:
      {
        integrity: sha512-i13qo6kIHTTpCm8/Wup+0b1mVWETvu2kIMzKoK8FpkLkFxlt0znUAHcMzox+T8sPlqtZXq3CulEjQHsYiGFJUw==
      }
    dependencies:
      toggle-selection: 1.0.6
    dev: true

  /core-js-compat/3.23.1:
    resolution:
      {
        integrity: sha512-KeYrEc8t6FJsKYB2qnDwRHWaC0cJNaqlHfCpMe5q3j/W1nje3moib/txNklddLPCtGb+etcBIyJ8zuMa/LN5/A==
      }
    dependencies:
      browserslist: 4.20.4
      semver: 7.0.0
    dev: true

  /core-js-pure/3.23.1:
    resolution:
      {
        integrity: sha512-3qNgf6TqI3U1uhuSYRzJZGfFd4T+YlbyVPl+jgRiKjdZopvG4keZQwWZDAWpu1UH9nCgTpUzIV3GFawC7cJsqg==
      }
    requiresBuild: true
    dev: true

  /core-js/3.23.1:
    resolution:
      {
        integrity: sha512-wfMYHWi1WQjpgZNC9kAlN4ut04TM9fUTdi7CqIoTVM7yaiOUQTklOzfb+oWH3r9edQcT3F887swuVmxrV+CC8w==
      }
    requiresBuild: true
    dev: true

  /core-util-is/1.0.2:
    resolution:
      {
        integrity: sha512-3lqz5YjWTYnW6dlDa5TLaTCcShfar1e40rmcJVwCBJC6mWlFuj0eCHIElmG1g5kyuJ/GD+8Wn4FFCcz4gJPfaQ==
      }
    dev: false

  /core-util-is/1.0.3:
    resolution:
      {
        integrity: sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==
      }

  /cors/2.8.5:
    resolution:
      {
        integrity: sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==
      }
    engines: { node: '>= 0.10' }
    dependencies:
      object-assign: 4.1.1
      vary: 1.1.2
    dev: false

  /cosmiconfig/6.0.0:
    resolution:
      {
        integrity: sha512-xb3ZL6+L8b9JLLCx3ZdoZy4+2ECphCMo2PwqgP1tlfVq6M6YReyzBJtvWWtbDSpNr9hn96pkCiZqUcFEc+54Qg==
      }
    engines: { node: '>=8' }
    dependencies:
      '@types/parse-json': 4.0.0
      import-fresh: 3.3.0
      parse-json: 5.2.0
      path-type: 4.0.0
      yaml: 1.10.2
    dev: true

  /cosmiconfig/7.0.1:
    resolution:
      {
        integrity: sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==
      }
    engines: { node: '>=10' }
    dependencies:
      '@types/parse-json': 4.0.0
      import-fresh: 3.3.0
      parse-json: 5.2.0
      path-type: 4.0.0
      yaml: 1.10.2

  /cp-file/7.0.0:
    resolution:
      {
        integrity: sha512-0Cbj7gyvFVApzpK/uhCtQ/9kE9UnYpxMzaq5nQQC/Dh4iaj5fxp7iEFIullrYwzj8nf0qnsI1Qsx34hAeAebvw==
      }
    engines: { node: '>=8' }
    dependencies:
      graceful-fs: 4.2.10
      make-dir: 3.1.0
      nested-error-stacks: 2.1.1
      p-event: 4.2.0
    dev: true

  /cpy/8.1.2:
    resolution:
      {
        integrity: sha512-dmC4mUesv0OYH2kNFEidtf/skUwv4zePmGeepjyyJ0qTo5+8KhA1o99oIAwVVLzQMAeDJml74d6wPPKb6EZUTg==
      }
    engines: { node: '>=8' }
    dependencies:
      arrify: 2.0.1
      cp-file: 7.0.0
      globby: 9.2.0
      has-glob: 1.0.0
      junk: 3.1.0
      nested-error-stacks: 2.1.1
      p-all: 2.1.0
      p-filter: 2.1.0
      p-map: 3.0.0
    dev: true

  /crc-32/1.2.2:
    resolution:
      {
        integrity: sha512-ROmzCKrTnOwybPcJApAA6WBWij23HVfGVNKqqrZpuyZOHqK2CwHSvpGuyt/UNNvaIjEd8X5IFGp4Mh+Ie1IHJQ==
      }
    engines: { node: '>=0.8' }
    hasBin: true
    dev: true

  /crc32-stream/4.0.2:
    resolution:
      {
        integrity: sha512-DxFZ/Hk473b/muq1VJ///PMNLj0ZMnzye9thBpmjpJKCc5eMgB95aK8zCGrGfQ90cWo561Te6HK9D+j4KPdM6w==
      }
    engines: { node: '>= 10' }
    dependencies:
      crc-32: 1.2.2
      readable-stream: 3.6.0
    dev: true

  /create-ecdh/4.0.4:
    resolution:
      {
        integrity: sha512-mf+TCx8wWc9VpuxfP2ht0iSISLZnt0JgWlrOKZiNqyUZWnjIaCIVNQArMHnCZKfEYRg6IM7A+NeJoN8gf/Ws0A==
      }
    dependencies:
      bn.js: 4.12.0
      elliptic: 6.5.4

  /create-hash/1.2.0:
    resolution:
      {
        integrity: sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==
      }
    dependencies:
      cipher-base: 1.0.4
      inherits: 2.0.4
      md5.js: 1.3.5
      ripemd160: 2.0.2
      sha.js: 2.4.11

  /create-hmac/1.1.7:
    resolution:
      {
        integrity: sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==
      }
    dependencies:
      cipher-base: 1.0.4
      create-hash: 1.2.0
      inherits: 2.0.4
      ripemd160: 2.0.2
      safe-buffer: 5.2.1
      sha.js: 2.4.11

  /create-require/1.1.1:
    resolution:
      {
        integrity: sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==
      }

  /cross-spawn/6.0.5:
    resolution:
      {
        integrity: sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==
      }
    engines: { node: '>=4.8' }
    dependencies:
      nice-try: 1.0.5
      path-key: 2.0.1
      semver: 5.7.1
      shebang-command: 1.2.0
      which: 1.3.1

  /cross-spawn/7.0.3:
    resolution:
      {
        integrity: sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==
      }
    engines: { node: '>= 8' }
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  /crypt/0.0.2:
    resolution: { integrity: sha1-iNf/fsDfuG9xPch7u0LQRNPmxBs= }
    dev: true

  /crypto-browserify/3.12.0:
    resolution:
      {
        integrity: sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==
      }
    dependencies:
      browserify-cipher: 1.0.1
      browserify-sign: 4.2.1
      create-ecdh: 4.0.4
      create-hash: 1.2.0
      create-hmac: 1.1.7
      diffie-hellman: 5.0.3
      inherits: 2.0.4
      pbkdf2: 3.1.2
      public-encrypt: 4.0.3
      randombytes: 2.1.0
      randomfill: 1.0.4

  /crypto-random-string/2.0.0:
    resolution:
      {
        integrity: sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA==
      }
    engines: { node: '>=8' }
    dev: true

  /css-declaration-sorter/6.3.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-OGT677UGHJTAVMRhPO+HJ4oKln3wkBTwtDFH0ojbqm+MJm6xuDMHp2nkhh/ThaBqq20IbraBQSWKfSLNHQO9Og==
      }
    engines: { node: ^10 || ^12 || >=14 }
    peerDependencies:
      postcss: ^8.0.9
    dependencies:
      postcss: 8.4.14
    dev: false

  /css-loader/3.6.0_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-M5lSukoWi1If8dhQAUCvj4H8vUt3vOnwbQBH9DdTm/s4Ym2B/3dPMtYZeJmq7Q3S3Pa+I94DcZ7pc9bP14cWIQ==
      }
    engines: { node: '>= 8.9.0' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      camelcase: 5.3.1
      cssesc: 3.0.0
      icss-utils: 4.1.1
      loader-utils: 1.4.0
      normalize-path: 3.0.0
      postcss: 7.0.39
      postcss-modules-extract-imports: 2.0.0
      postcss-modules-local-by-default: 3.0.3
      postcss-modules-scope: 2.2.0
      postcss-modules-values: 3.0.0
      postcss-value-parser: 4.2.0
      schema-utils: 2.7.1
      semver: 6.3.0
      webpack: 4.44.2
    dev: true

  /css-loader/5.2.7_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-Q7mOvpBNBG7YrVGMxRxcBJZFL75o+cH2abNASdibkj/fffYD8qWbInZrD0S9ccI6vZclF3DsHE7njGlLtaHbhg==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      webpack: ^4.27.0 || ^5.0.0
    dependencies:
      icss-utils: 5.1.0_postcss@8.4.14
      loader-utils: 2.0.2
      postcss: 8.4.14
      postcss-modules-extract-imports: 3.0.0_postcss@8.4.14
      postcss-modules-local-by-default: 4.0.0_postcss@8.4.14
      postcss-modules-scope: 3.0.0_postcss@8.4.14
      postcss-modules-values: 4.0.0_postcss@8.4.14
      postcss-value-parser: 4.2.0
      schema-utils: 3.1.1
      semver: 7.3.7
      webpack: 4.44.2
    dev: true

  /css-loader/6.6.0_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-FK7H2lisOixPT406s5gZM1S3l8GrfhEBT3ZiL2UX1Ng1XWs0y2GPllz/OTyvbaHe12VgQrIXIzuEGVlbUhodqg==
      }
    engines: { node: '>= 12.13.0' }
    peerDependencies:
      webpack: ^5.0.0
    dependencies:
      icss-utils: 5.1.0_postcss@8.4.14
      postcss: 8.4.14
      postcss-modules-extract-imports: 3.0.0_postcss@8.4.14
      postcss-modules-local-by-default: 4.0.0_postcss@8.4.14
      postcss-modules-scope: 3.0.0_postcss@8.4.14
      postcss-modules-values: 4.0.0_postcss@8.4.14
      postcss-value-parser: 4.2.0
      semver: 7.3.7
      webpack: 5.68.0

  /css-minimizer-webpack-plugin/3.4.1_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-1u6D71zeIfgngN2XNRJefc/hY7Ybsxd74Jm4qngIXyUEk7fss3VUzuHxLAq/R8NAba4QU9OUSaMZlbpRc7bM4Q==
      }
    engines: { node: '>= 12.13.0' }
    peerDependencies:
      '@parcel/css': '*'
      clean-css: '*'
      csso: '*'
      esbuild: '*'
      webpack: ^5.0.0
    peerDependenciesMeta:
      '@parcel/css':
        optional: true
      clean-css:
        optional: true
      csso:
        optional: true
      esbuild:
        optional: true
    dependencies:
      cssnano: 5.1.11_postcss@8.4.14
      jest-worker: 27.5.1
      postcss: 8.4.14
      schema-utils: 4.0.0
      serialize-javascript: 6.0.0
      source-map: 0.6.1
      webpack: 5.68.0
    dev: false

  /css-modules-loader-core/1.1.0:
    resolution:
      {
        integrity: sha512-XWOBwgy5nwBn76aA+6ybUGL/3JBnCtBX9Ay9/OWIpzKYWlVHMazvJ+WtHumfi+xxdPF440cWK7JCYtt8xDifew==
      }
    dependencies:
      icss-replace-symbols: 1.1.0
      postcss: 6.0.1
      postcss-modules-extract-imports: 1.1.0
      postcss-modules-local-by-default: 1.2.0
      postcss-modules-scope: 1.1.0
      postcss-modules-values: 1.3.0
    dev: false

  /css-select/4.3.0:
    resolution:
      {
        integrity: sha512-wPpOYtnsVontu2mODhA19JrqWxNsfdatRKd64kmpRbQgh1KtItko5sTnEpPdpSaJszTOhEMlF/RPz28qj4HqhQ==
      }
    dependencies:
      boolbase: 1.0.0
      css-what: 6.1.0
      domhandler: 4.3.1
      domutils: 2.8.0
      nth-check: 2.1.1

  /css-selector-tokenizer/0.7.3:
    resolution:
      {
        integrity: sha512-jWQv3oCEL5kMErj4wRnK/OPoBi0D+P1FR2cDCKYPaMeD2eW3/mttav8HT4hT1CKopiJI/psEULjkClhvJo4Lvg==
      }
    dependencies:
      cssesc: 3.0.0
      fastparse: 1.1.2
    dev: false

  /css-tree/1.1.3:
    resolution:
      {
        integrity: sha512-tRpdppF7TRazZrjJ6v3stzv93qxRcSsFmW6cX0Zm2NVKpxE1WV1HblnghVv9TreireHkqI/VDEsfolRF1p6y7Q==
      }
    engines: { node: '>=8.0.0' }
    dependencies:
      mdn-data: 2.0.14
      source-map: 0.6.1
    dev: false

  /css-what/6.1.0:
    resolution:
      {
        integrity: sha512-HTUrgRJ7r4dsZKU6GjmpfRK1O76h97Z8MfS1G0FozR+oF2kG6Vfe8JE6zwrkbxigziPHinCJ+gCPjA9EaBDtRw==
      }
    engines: { node: '>= 6' }

  /cssesc/3.0.0:
    resolution:
      {
        integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==
      }
    engines: { node: '>=4' }
    hasBin: true

  /cssnano-preset-default/5.2.11_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-4PadR1NtuaIK8MvLNuY7MznK4WJteldGlzCiMaaTiOUP+apeiIvUDIXykzUOoqgOOUAHrU64ncdD90NfZR3LSQ==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      css-declaration-sorter: 6.3.0_postcss@8.4.14
      cssnano-utils: 3.1.0_postcss@8.4.14
      postcss: 8.4.14
      postcss-calc: 8.2.4_postcss@8.4.14
      postcss-colormin: 5.3.0_postcss@8.4.14
      postcss-convert-values: 5.1.2_postcss@8.4.14
      postcss-discard-comments: 5.1.2_postcss@8.4.14
      postcss-discard-duplicates: 5.1.0_postcss@8.4.14
      postcss-discard-empty: 5.1.1_postcss@8.4.14
      postcss-discard-overridden: 5.1.0_postcss@8.4.14
      postcss-merge-longhand: 5.1.5_postcss@8.4.14
      postcss-merge-rules: 5.1.2_postcss@8.4.14
      postcss-minify-font-values: 5.1.0_postcss@8.4.14
      postcss-minify-gradients: 5.1.1_postcss@8.4.14
      postcss-minify-params: 5.1.3_postcss@8.4.14
      postcss-minify-selectors: 5.2.1_postcss@8.4.14
      postcss-normalize-charset: 5.1.0_postcss@8.4.14
      postcss-normalize-display-values: 5.1.0_postcss@8.4.14
      postcss-normalize-positions: 5.1.0_postcss@8.4.14
      postcss-normalize-repeat-style: 5.1.0_postcss@8.4.14
      postcss-normalize-string: 5.1.0_postcss@8.4.14
      postcss-normalize-timing-functions: 5.1.0_postcss@8.4.14
      postcss-normalize-unicode: 5.1.0_postcss@8.4.14
      postcss-normalize-url: 5.1.0_postcss@8.4.14
      postcss-normalize-whitespace: 5.1.1_postcss@8.4.14
      postcss-ordered-values: 5.1.2_postcss@8.4.14
      postcss-reduce-initial: 5.1.0_postcss@8.4.14
      postcss-reduce-transforms: 5.1.0_postcss@8.4.14
      postcss-svgo: 5.1.0_postcss@8.4.14
      postcss-unique-selectors: 5.1.1_postcss@8.4.14
    dev: false

  /cssnano-utils/3.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-JQNR19/YZhz4psLX/rQ9M83e3z2Wf/HdJbryzte4a3NSuafyp9w/I4U+hx5C2S9g41qlstH7DEWnZaaj83OuEA==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
    dev: false

  /cssnano/5.1.11_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-2nx+O6LvewPo5EBtYrKc8762mMkZRk9cMGIOP4UlkmxHm7ObxH+zvsJJ+qLwPkUc4/yumL/qJkavYi9NlodWIQ==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      cssnano-preset-default: 5.2.11_postcss@8.4.14
      lilconfig: 2.0.5
      postcss: 8.4.14
      yaml: 1.10.2
    dev: false

  /csso/4.2.0:
    resolution:
      {
        integrity: sha512-wvlcdIbf6pwKEk7vHj8/Bkc0B4ylXZruLvOgs9doS5eOsOpuodOV2zJChSpkp+pRpYQLQMeF04nr3Z68Sta9jA==
      }
    engines: { node: '>=8.0.0' }
    dependencies:
      css-tree: 1.1.3
    dev: false

  /cssom/0.3.8:
    resolution:
      {
        integrity: sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==
      }

  /cssom/0.4.4:
    resolution:
      {
        integrity: sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw==
      }

  /cssstyle/2.3.0:
    resolution:
      {
        integrity: sha512-AZL67abkUzIuvcHqk7c09cezpGNcxUxU4Ioi/05xHk4DQeTkWmGYftIE6ctU6AEt+Gn4n1lDStOtj7FKycP71A==
      }
    engines: { node: '>=8' }
    dependencies:
      cssom: 0.3.8

  /csstype/2.6.20:
    resolution:
      {
        integrity: sha512-/WwNkdXfckNgw6S5R125rrW8ez139lBHWouiBvX8dfMFtcn6V81REDqnH7+CRpRipfYlyU1CmOnOxrmGcFOjeA==
      }
    dev: true

  /csstype/3.1.0:
    resolution:
      {
        integrity: sha512-uX1KG+x9h5hIJsaKR9xHUeUraxf8IODOwq9JLNPq6BwB04a/xgpq3rcx47l5BZu5zBPlgD342tdke3Hom/nJRA==
      }

  /cyclist/1.0.1:
    resolution:
      {
        integrity: sha512-NJGVKPS81XejHcLhaLJS7plab0fK3slPh11mESeeDq2W4ZI5kUKK/LRRdVDvjJseojbPB7ZwjnyOybg3Igea/A==
      }

  /d/1.0.1:
    resolution:
      {
        integrity: sha512-m62ShEObQ39CfralilEQRjH6oAMtNCV1xJyEx5LpRYUVN+EviphDgUc/F3hnYbADmkiNs67Y+3ylmlG7Lnu+FA==
      }
    dependencies:
      es5-ext: 0.10.61
      type: 1.2.0
    dev: true

  /dashdash/1.14.1:
    resolution:
      {
        integrity: sha512-jRFi8UDGo6j+odZiEpjazZaWqEal3w/basFjQHQEwVtZJGDpxbH1MeYluwCS8Xq5wmLJooDlMgvVarmWfGM44g==
      }
    engines: { node: '>=0.10' }
    dependencies:
      assert-plus: 1.0.0
    dev: false

  /data-uri-to-buffer/3.0.1:
    resolution:
      {
        integrity: sha512-WboRycPNsVw3B3TL559F7kuBUM4d8CgMEvk6xEJlOp7OBPjt6G7z8WMWlD2rOFZLk6OYfFIUGsCOWzcQH9K2og==
      }
    engines: { node: '>= 6' }
    dev: true

  /data-urls/2.0.0:
    resolution:
      {
        integrity: sha512-X5eWTSXO/BJmpdIKCRuKUgSCgAN0OwliVK3yPKbwIWU1Tdw5BRajxlzMidvh+gwko9AfQ9zIj52pzF91Q3YAvQ==
      }
    engines: { node: '>=10' }
    dependencies:
      abab: 2.0.6
      whatwg-mimetype: 2.3.0
      whatwg-url: 8.7.0

  /dataloader/2.1.0:
    resolution:
      {
        integrity: sha512-qTcEYLen3r7ojZNgVUaRggOI+KM7jrKxXeSHhogh/TWxYMeONEMqY+hmkobiYQozsGIyg9OYVzO4ZIfoB4I0pQ==
      }
    dev: true

  /date-format/4.0.11:
    resolution:
      {
        integrity: sha512-VS20KRyorrbMCQmpdl2hg5KaOUsda1RbnsJg461FfrcyCUg+pkd0b40BSW4niQyTheww4DBXQnS7HwSrKkipLw==
      }
    engines: { node: '>=4.0' }
    dev: true

  /debounce-fn/4.0.0:
    resolution:
      {
        integrity: sha512-8pYCQiL9Xdcg0UPSD3d+0KMlOjp+KGU5EPwYddgzQ7DATsg4fuUDjQtsYLmWjnk2obnNHgV3vE2Y4jejSOJVBQ==
      }
    engines: { node: '>=10' }
    dependencies:
      mimic-fn: 3.1.0
    dev: true

  /debug/2.6.9:
    resolution:
      {
        integrity: sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==
      }
    dependencies:
      ms: 2.0.0

  /debug/3.2.7:
    resolution:
      {
        integrity: sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==
      }
    dependencies:
      ms: 2.1.3
    dev: true

  /debug/4.3.4:
    resolution:
      {
        integrity: sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==
      }
    engines: { node: '>=6.0' }
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true
    dependencies:
      ms: 2.1.2

  /debuglog/1.0.1:
    resolution:
      {
        integrity: sha512-syBZ+rnAK3EgMsH2aYEOLUW7mZSY9Gb+0wUMCFsZvcmiz+HigA0LOcq/HoQqVuGG+EKykunc7QG2bzrponfaSw==
      }
    dev: false

  /decamelize-keys/1.1.0:
    resolution:
      {
        integrity: sha512-ocLWuYzRPoS9bfiSdDd3cxvrzovVMZnRDVEzAs+hWIVXGDbHxWMECij2OBuyB/An0FFW/nLuq6Kv1i/YC5Qfzg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      decamelize: 1.2.0
      map-obj: 1.0.1
    dev: false

  /decamelize/1.2.0:
    resolution:
      {
        integrity: sha512-z2S+W9X73hAUUki+N+9Za2lBlun89zigOyGrsax+KUQ6wKW4ZoWpEYBkGhQjwAjjDCkWxhY0VKEhk8wzY7F5cA==
      }
    engines: { node: '>=0.10.0' }

  /decamelize/5.0.1:
    resolution:
      {
        integrity: sha512-VfxadyCECXgQlkoEAjeghAr5gY3Hf+IKjKb+X8tGVDtveCjN+USwprd2q3QXBR9T1+x2DG0XZF5/w+7HAtSaXA==
      }
    engines: { node: '>=10' }
    dev: true

  /decimal.js/10.3.1:
    resolution:
      {
        integrity: sha512-V0pfhfr8suzyPGOx3nmq4aHqabehUZn6Ch9kyFpV79TGDTWFmHqUqXdabR7QHqxzrYolF4+tVmJhUG4OURg5dQ==
      }

  /decode-uri-component/0.2.0:
    resolution:
      {
        integrity: sha512-hjf+xovcEn31w/EUYdTXQh/8smFL/dzYjohQGEIgjyNavaJfBY2p5F527Bo1VPATxv0VYTUC2bOcXvqFwk78Og==
      }
    engines: { node: '>=0.10' }

  /decompress-response/3.3.0:
    resolution:
      {
        integrity: sha512-BzRPQuY1ip+qDonAOz42gRm/pg9F768C+npV/4JOsxRC2sq+Rlk+Q4ZCAsOhnIaMrgarILY+RMUIvMmmX1qAEA==
      }
    engines: { node: '>=4' }
    dependencies:
      mimic-response: 1.0.1
    dev: true

  /dedent/0.7.0:
    resolution:
      {
        integrity: sha512-Q6fKUPqnAHAyhiUgFU7BUzLiv0kd8saH9al7tnu5Q/okj6dnupxyTgFIBjVzJATdfIAm9NAsvXNzjaKa+bxVyA==
      }

  /deep-extend/0.6.0:
    resolution:
      {
        integrity: sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==
      }
    engines: { node: '>=4.0.0' }
    dev: true

  /deep-is/0.1.4:
    resolution:
      {
        integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==
      }

  /deep-object-diff/1.1.7:
    resolution:
      {
        integrity: sha512-QkgBca0mL08P6HiOjoqvmm6xOAl2W6CT2+34Ljhg0OeFan8cwlcdq8jrLKsBBuUFAZLsN5b6y491KdKEoSo9lg==
      }
    dev: true

  /deepmerge/4.2.2:
    resolution:
      {
        integrity: sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg==
      }
    engines: { node: '>=0.10.0' }

  /default-gateway/6.0.3:
    resolution:
      {
        integrity: sha512-fwSOJsbbNzZ/CUFpqFBqYfYNLj1NbMPm8MMCIzHjC83iSJRBEGmDUxU+WP661BaBQImeC2yHwXtz+P/O9o+XEg==
      }
    engines: { node: '>= 10' }
    dependencies:
      execa: 5.1.1

  /defer-to-connect/1.1.3:
    resolution:
      {
        integrity: sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ==
      }
    dev: true

  /define-lazy-prop/2.0.0:
    resolution:
      {
        integrity: sha512-Ds09qNh8yw3khSjiJjiUInaGX9xlqZDY7JVryGxdxV7NPeuqQfplOpQ66yJFZut3jLa5zOwkXw1g9EI2uKh4Og==
      }
    engines: { node: '>=8' }

  /define-properties/1.1.4:
    resolution:
      {
        integrity: sha512-uckOqKcfaVvtBdsVkdPv3XjveQJsNQqmhXgRi8uhvWWuPYZCNlzT8qAyblUgNoXdHdjMTzAqeGjAoli8f+bzPA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      has-property-descriptors: 1.0.0
      object-keys: 1.1.1

  /define-property/0.2.5:
    resolution:
      {
        integrity: sha512-Rr7ADjQZenceVOAKop6ALkkRAmH1A4Gx9hV/7ZujPUN2rkATqFO0JZLZInbAjpZYoJ1gUx8MRMQVkYemcbMSTA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-descriptor: 0.1.6

  /define-property/1.0.0:
    resolution:
      {
        integrity: sha512-cZTYKFWspt9jZsMscWo8sc/5lbPC9Q0N5nBLgb+Yd915iL3udB1uFgS3B8YCx66UVHq018DAVFoee7x+gxggeA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-descriptor: 1.0.2

  /define-property/2.0.2:
    resolution:
      {
        integrity: sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-descriptor: 1.0.2
      isobject: 3.0.1

  /degenerator/3.0.2:
    resolution:
      {
        integrity: sha512-c0mef3SNQo56t6urUU6tdQAs+ThoD0o9B9MJ8HEt7NQcGEILCRFqQb7ZbP9JAv+QF1Ky5plydhMR/IrqWDm+TQ==
      }
    engines: { node: '>= 6' }
    dependencies:
      ast-types: 0.13.4
      escodegen: 1.14.3
      esprima: 4.0.1
      vm2: 3.9.9
    dev: true

  /delayed-stream/1.0.0:
    resolution:
      {
        integrity: sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==
      }
    engines: { node: '>=0.4.0' }

  /delegates/1.0.0:
    resolution:
      {
        integrity: sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==
      }

  /dendriform-immer-patch-optimiser/2.1.2_immer@9.0.15:
    resolution:
      {
        integrity: sha512-IGoxH1AsYMjwGnuRqCrCzJwWESdgRh9334hDxayRWj1Loa2QhyTiu5PcQ6i+b5YRHnkrFMrCIX5zpvnQTxBFuQ==
      }
    engines: { node: '>=10' }
    peerDependencies:
      immer: '9'
    dependencies:
      immer: 9.0.15
    dev: true

  /depd/1.1.2:
    resolution:
      {
        integrity: sha512-7emPTl6Dpo6JRXOXjLRxck+FlLRX5847cLKEn00PLAgc3g2hTZZgr+e4c2v6QpSmLeFP3n5yUo7ft6avBK/5jQ==
      }
    engines: { node: '>= 0.6' }

  /depd/2.0.0:
    resolution:
      {
        integrity: sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==
      }
    engines: { node: '>= 0.8' }

  /des.js/1.0.1:
    resolution:
      {
        integrity: sha512-Q0I4pfFrv2VPd34/vfLrFOoRmlYj3OV50i7fskps1jZWK1kApMWWT9G6RRUeYedLcBDIhnSDaUvJMb3AhUlaEA==
      }
    dependencies:
      inherits: 2.0.4
      minimalistic-assert: 1.0.1

  /destroy/1.2.0:
    resolution:
      {
        integrity: sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==
      }
    engines: { node: '>= 0.8', npm: 1.2.8000 || >= 1.4.16 }

  /detab/2.0.4:
    resolution:
      {
        integrity: sha512-8zdsQA5bIkoRECvCrNKPla84lyoR7DSAyf7p0YgXzBO9PDJx8KntPUay7NS6yp+KdxdVtiE5SpHKtbp2ZQyA9g==
      }
    dependencies:
      repeat-string: 1.6.1
    dev: true

  /detect-file/1.0.0:
    resolution:
      {
        integrity: sha512-DtCOLG98P007x7wiiOmfI0fi3eIKyWiLTGJ2MDnVi/E04lWGbf+JzrRHMm0rgIIZJGtHpKpbVgLWHrv8xXpc3Q==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /detect-indent/6.1.0:
    resolution:
      {
        integrity: sha512-reYkTUJAZb9gUuZ2RvVCNhVHdg62RHnJ7WJl8ftMi4diZ6NWlciOzQN88pUhSELEwflJht4oQDv0F0BMlwaYtA==
      }
    engines: { node: '>=8' }
    dev: false

  /detect-newline/3.1.0:
    resolution:
      {
        integrity: sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==
      }
    engines: { node: '>=8' }

  /detect-node/2.1.0:
    resolution:
      {
        integrity: sha512-T0NIuQpnTvFDATNuHN5roPwSBG83rFsuO+MXXH9/3N1eFbn4wcPjttvjMLEPWJ0RGUYgQE7cGgS3tNxbqCGM7g==
      }

  /detect-port-alt/1.1.6:
    resolution:
      {
        integrity: sha512-5tQykt+LqfJFBEYaDITx7S7cR7mJ/zQmLXZ2qt5w04ainYZw6tBf9dBunMjVeVOdYVRUzUOE4HkY5J7+uttb5Q==
      }
    engines: { node: '>= 4.2.1' }
    hasBin: true
    dependencies:
      address: 1.2.0
      debug: 2.6.9
    dev: true

  /detect-port/1.3.0:
    resolution:
      {
        integrity: sha512-E+B1gzkl2gqxt1IhUzwjrxBKRqx1UzC3WLONHinn8S3T6lwV/agVCyitiFOsGJ/eYuEUBvD71MZHy3Pv1G9doQ==
      }
    engines: { node: '>= 4.2.1' }
    hasBin: true
    dependencies:
      address: 1.2.0
      debug: 2.6.9
    dev: true

  /dezalgo/1.0.4:
    resolution:
      {
        integrity: sha512-rXSP0bf+5n0Qonsb+SVVfNfIsimO4HEtmnIpPHY8Q1UCzKlQrDMfdobr8nJOOsRgWCyMRqeSBQzmWUMq7zvVig==
      }
    dependencies:
      asap: 2.0.6
      wrappy: 1.0.2
    dev: false

  /diff-sequences/27.5.1:
    resolution:
      {
        integrity: sha512-k1gCAXAsNgLwEL+Y8Wvl+M6oEFj5bgazfZULpS5CneoPPXRaCCW7dm+q21Ky2VEE5X+VeRDBVg1Pcvvsr4TtNQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }

  /diff/4.0.2:
    resolution:
      {
        integrity: sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==
      }
    engines: { node: '>=0.3.1' }

  /diff/5.0.0:
    resolution:
      {
        integrity: sha512-/VTCrvm5Z0JGty/BWHljh+BAiw3IK+2j87NGMu8Nwc/f48WoDAC395uomO9ZD117ZOBaHmkX1oyLvkVM/aIT3w==
      }
    engines: { node: '>=0.3.1' }

  /diffie-hellman/5.0.3:
    resolution:
      {
        integrity: sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==
      }
    dependencies:
      bn.js: 4.12.0
      miller-rabin: 4.0.1
      randombytes: 2.1.0

  /difflib/0.2.4:
    resolution:
      {
        integrity: sha512-9YVwmMb0wQHQNr5J9m6BSj6fk4pfGITGQOOs+D9Fl+INODWFOfvhIU1hNv6GgR1RBoC/9NJcwu77zShxV0kT7w==
      }
    dependencies:
      heap: 0.2.7
    dev: true

  /dir-glob/2.2.2:
    resolution:
      {
        integrity: sha512-f9LBi5QWzIW3I6e//uxZoLBlUt9kcp66qo0sSCxL6YZKc75R1c4MFCoe/LaZiBGmgujvQdxc5Bn3QhfyvK5Hsw==
      }
    engines: { node: '>=4' }
    dependencies:
      path-type: 3.0.0
    dev: true

  /dir-glob/3.0.1:
    resolution:
      {
        integrity: sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==
      }
    engines: { node: '>=8' }
    dependencies:
      path-type: 4.0.0

  /dns-equal/1.0.0:
    resolution:
      {
        integrity: sha512-z+paD6YUQsk+AbGCEM4PrOXSss5gd66QfcVBFTKR/HpFL9jCqikS94HYwKww6fQyO7IxrIIyUu+g0Ka9tUS2Cg==
      }

  /dns-packet/5.4.0:
    resolution:
      {
        integrity: sha512-EgqGeaBB8hLiHLZtp/IbaDQTL8pZ0+IvwzSHA6d7VyMDM+B9hgddEMa9xjK5oYnw0ci0JQ6g2XCD7/f6cafU6g==
      }
    engines: { node: '>=6' }
    dependencies:
      '@leichtgewicht/ip-codec': 2.0.4

  /doctrine/2.1.0:
    resolution:
      {
        integrity: sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      esutils: 2.0.3

  /doctrine/3.0.0:
    resolution:
      {
        integrity: sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==
      }
    engines: { node: '>=6.0.0' }
    dependencies:
      esutils: 2.0.3

  /dom-converter/0.2.0:
    resolution:
      {
        integrity: sha512-gd3ypIPfOMr9h5jIKq8E3sHOTCjeirnl0WK5ZdS1AW0Odt0b1PaWaHdJ4Qk4klv+YB9aJBS7mESXjFoDQPu6DA==
      }
    dependencies:
      utila: 0.4.0

  /dom-serializer/1.4.1:
    resolution:
      {
        integrity: sha512-VHwB3KfrcOOkelEG2ZOfxqLZdfkil8PtJi4P8N2MMXucZq2yLp75ClViUlOVwyoHEDjYU433Aq+5zWP61+RGag==
      }
    dependencies:
      domelementtype: 2.3.0
      domhandler: 4.3.1
      entities: 2.2.0

  /dom-walk/0.1.2:
    resolution:
      {
        integrity: sha512-6QvTW9mrGeIegrFXdtQi9pk7O/nSK6lSdXW2eqUspN5LWD7UTji2Fqw5V2YLjBpHEoU9Xl/eUWNpDeZvoyOv2w==
      }
    dev: true

  /domain-browser/1.2.0:
    resolution:
      {
        integrity: sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA==
      }
    engines: { node: '>=0.4', npm: '>=1.2' }

  /domelementtype/2.3.0:
    resolution:
      {
        integrity: sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==
      }

  /domexception/2.0.1:
    resolution:
      {
        integrity: sha512-yxJ2mFy/sibVQlu5qHjOkf9J3K6zgmCxgJ94u2EdvDOV09H+32LtRswEcUsmUWN72pVLOEnTSRaIVVzVQgS0dg==
      }
    engines: { node: '>=8' }
    dependencies:
      webidl-conversions: 5.0.0

  /domhandler/4.3.1:
    resolution:
      {
        integrity: sha512-GrwoxYN+uWlzO8uhUXRl0P+kHE4GtVPfYzVLcUxPL7KNdHKj66vvlhiweIHqYYXWlw+T8iLMp42Lm67ghw4WMQ==
      }
    engines: { node: '>= 4' }
    dependencies:
      domelementtype: 2.3.0

  /domutils/2.8.0:
    resolution:
      {
        integrity: sha512-w96Cjofp72M5IIhpjgobBimYEfoPjx1Vx0BSX9P30WBdZW2WIKU0T1Bd0kz2eNZ9ikjKgHbEyKx8BB6H1L3h3A==
      }
    dependencies:
      dom-serializer: 1.4.1
      domelementtype: 2.3.0
      domhandler: 4.3.1

  /dot-case/3.0.4:
    resolution:
      {
        integrity: sha512-Kv5nKlh6yRrdrGvxeJ2e5y2eRUpkUosIW4A2AS38zwSz27zu7ufDwQPi5Jhs3XAlGNetl3bmnGhQsMtkKJnj3w==
      }
    dependencies:
      no-case: 3.0.4
      tslib: 2.3.1

  /dot-prop/5.3.0:
    resolution:
      {
        integrity: sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==
      }
    engines: { node: '>=8' }
    dependencies:
      is-obj: 2.0.0
    dev: true

  /dot-prop/6.0.1:
    resolution:
      {
        integrity: sha512-tE7ztYzXHIeyvc7N+hR3oi7FIbf/NIjVP9hmAt3yMXzrQ072/fpjGLx2GxNxGxUl5V73MEqYzioOMoVhGMJ5cA==
      }
    engines: { node: '>=10' }
    dependencies:
      is-obj: 2.0.0
    dev: true

  /dotenv-expand/5.1.0:
    resolution:
      {
        integrity: sha512-YXQl1DSa4/PQyRfgrv6aoNjhasp/p4qs9FjJ4q4cQk+8m4r6k4ZSiEyytKG8f8W9gi8WsQtIObNmKd+tMzNTmA==
      }
    dev: true

  /dotenv/10.0.0:
    resolution:
      {
        integrity: sha512-rlBi9d8jpv9Sf1klPjNfFAuWDjKLwTIJJ/VxtoTwIR6hnZxcEOQCZg2oIL3MWBYw5GpUDKOEnND7LXTbIpQ03Q==
      }
    engines: { node: '>=10' }
    dev: true

  /dotenv/8.6.0:
    resolution:
      {
        integrity: sha512-IrPdXQsk2BbzvCBGBOTmmSH5SodmqZNt4ERAZDmW4CT+tL8VtvinqywuANaFu4bOMWki16nqf0e4oC0QIaDr/g==
      }
    engines: { node: '>=10' }
    dev: true

  /downshift/6.1.7_react@16.13.1:
    resolution:
      {
        integrity: sha512-cVprZg/9Lvj/uhYRxELzlu1aezRcgPWBjTvspiGTVEU64gF5pRdSRKFVLcxqsZC637cLAGMbL40JavEfWnqgNg==
      }
    peerDependencies:
      react: '>=16.12.0'
    dependencies:
      '@babel/runtime': 7.18.3
      compute-scroll-into-view: 1.0.17
      prop-types: 15.8.1
      react: 16.13.1
      react-is: 17.0.2
      tslib: 2.3.1
    dev: true

  /dreamopt/0.8.0:
    resolution:
      {
        integrity: sha512-vyJTp8+mC+G+5dfgsY+r3ckxlz+QMX40VjPQsZc5gxVAxLmi64TBoVkP54A/pRAXMXsbu2GMMBrZPxNv23waMg==
      }
    engines: { node: '>=0.4.0' }
    dependencies:
      wordwrap: 1.0.0
    dev: true

  /duplexer/0.1.2:
    resolution:
      {
        integrity: sha512-jtD6YG370ZCIi/9GTaJKQxWTZD045+4R4hTk/x1UyoqadyJ9x9CgSi1RlVDQF8U2sxLLSnFkCaMihqljHIWgMg==
      }

  /duplexer3/0.1.4:
    resolution:
      {
        integrity: sha512-CEj8FwwNA4cVH2uFCoHUrmojhYh1vmCdOaneKJXwkeY1i9jnlslVo9dx+hQ5Hl9GnH/Bwy/IjxAyOePyPKYnzA==
      }
    dev: true

  /duplexify/3.7.1:
    resolution:
      {
        integrity: sha512-07z8uv2wMyS51kKhD1KsdXJg5WQ6t93RneqRxUHnskXVtlYYkLqM0gqStQZ3pj073g687jPCHrqNfCzawLYh5g==
      }
    dependencies:
      end-of-stream: 1.4.4
      inherits: 2.0.4
      readable-stream: 2.3.7
      stream-shift: 1.0.1

  /dynamic-dedupe/0.3.0:
    resolution:
      {
        integrity: sha512-ssuANeD+z97meYOqd50e04Ze5qp4bPqo8cCkI4TRjZkzAUgIDTrXV1R8QCdINpiI+hw14+rYazvTRdQrz0/rFQ==
      }
    dependencies:
      xtend: 4.0.2
    dev: true

  /ecc-jsbn/0.1.2:
    resolution:
      {
        integrity: sha512-eh9O+hwRHNbG4BLTjEl3nw044CkGm5X6LoaCf7LPp7UU8Qrt47JYNi6nPX8xjW97TKGKm1ouctg0QSpZe9qrnw==
      }
    dependencies:
      jsbn: 0.1.1
      safer-buffer: 2.1.2
    dev: false

  /ecdsa-sig-formatter/1.0.11:
    resolution:
      {
        integrity: sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==
      }
    dependencies:
      safe-buffer: 5.2.1
    dev: false

  /ee-first/1.1.1:
    resolution:
      {
        integrity: sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==
      }

  /electron-to-chromium/1.4.157:
    resolution:
      {
        integrity: sha512-gteFnXPKsDAdm1U5vVuyrLnKOaR/x/SY+HjUQoHypLUYWJt4RaWU3PaiTBEkRDJh8/Zd8KC/EFjV+uPaHsjKFA==
      }

  /element-resize-detector/1.2.4:
    resolution:
      {
        integrity: sha512-Fl5Ftk6WwXE0wqCgNoseKWndjzZlDCwuPTcoVZfCP9R3EHQF8qUtr3YUPNETegRBOKqQKPW3n4kiIWngGi8tKg==
      }
    dependencies:
      batch-processor: 1.0.0
    dev: true

  /elliptic/6.5.4:
    resolution:
      {
        integrity: sha512-iLhC6ULemrljPZb+QutR5TQGB+pdW6KGD5RSegS+8sorOZT+rdQFbsQFJgvN3eRqNALqJer4oQ16YvJHlU8hzQ==
      }
    dependencies:
      bn.js: 4.12.0
      brorand: 1.1.0
      hash.js: 1.1.7
      hmac-drbg: 1.0.1
      inherits: 2.0.4
      minimalistic-assert: 1.0.1
      minimalistic-crypto-utils: 1.0.1

  /emittery/0.8.1:
    resolution:
      {
        integrity: sha512-uDfvUjVrfGJJhymx/kz6prltenw1u7WrCg1oa94zYY8xxVpLLUu045LAT0dhDZdXG58/EpPL/5kA180fQ/qudg==
      }
    engines: { node: '>=10' }

  /emoji-regex/7.0.3:
    resolution:
      {
        integrity: sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==
      }
    dev: false

  /emoji-regex/8.0.0:
    resolution:
      {
        integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==
      }

  /emojis-list/2.1.0:
    resolution:
      {
        integrity: sha512-knHEZMgs8BB+MInokmNTg/OyPlAddghe1YBgNwJBc5zsJi/uyIcXoSDsL/W9ymOsBoBGdPIHXYJ9+qKFwRwDng==
      }
    engines: { node: '>= 0.10' }
    dev: false

  /emojis-list/3.0.0:
    resolution:
      {
        integrity: sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==
      }
    engines: { node: '>= 4' }

  /emotion-theming/10.3.0_tpm53lxjhhnjmtj6wgjp3t3pxi:
    resolution:
      {
        integrity: sha512-mXiD2Oj7N9b6+h/dC6oLf9hwxbtKHQjoIqtodEyL8CpkN4F3V4IK/BT4D0C7zSs4BBFOu4UlPJbvvBLa88SGEA==
      }
    peerDependencies:
      '@emotion/core': ^10.0.27
      '@types/react': '>=16'
      react: '>=16.3.0'
    dependencies:
      '@babel/runtime': 7.18.3
      '@emotion/core': 10.3.1_qjwx5m6wssz3lnb35xwkc3pz6q
      '@emotion/weak-memoize': 0.2.5
      '@types/react': 16.14.23
      hoist-non-react-statics: 3.3.2
      react: 16.13.1
    dev: true

  /encodeurl/1.0.2:
    resolution:
      {
        integrity: sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==
      }
    engines: { node: '>= 0.8' }

  /encoding/0.1.13:
    resolution:
      {
        integrity: sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==
      }
    requiresBuild: true
    dependencies:
      iconv-lite: 0.6.3
    dev: true
    optional: true

  /end-of-stream/1.4.4:
    resolution:
      {
        integrity: sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==
      }
    dependencies:
      once: 1.4.0

  /endent/2.1.0:
    resolution:
      {
        integrity: sha512-r8VyPX7XL8U01Xgnb1CjZ3XV+z90cXIJ9JPE/R9SEC9vpw2P6CfsRPJmp20DppC5N7ZAMCmjYkJIa744Iyg96w==
      }
    dependencies:
      dedent: 0.7.0
      fast-json-parse: 1.0.3
      objectorarray: 1.0.5
    dev: true

  /enhanced-resolve/4.5.0:
    resolution:
      {
        integrity: sha512-Nv9m36S/vxpsI+Hc4/ZGRs0n9mXqSWGGq49zxb/cJfPAQMbUtttJAlNPS4AQzaBdw/pKskw5bMbekT/Y7W/Wlg==
      }
    engines: { node: '>=6.9.0' }
    dependencies:
      graceful-fs: 4.2.10
      memory-fs: 0.5.0
      tapable: 1.1.3

  /enhanced-resolve/5.9.3:
    resolution:
      {
        integrity: sha512-Bq9VSor+kjvW3f9/MiiR4eE3XYgOl7/rS8lnSxbRbF3kS0B2r+Y9w5krBWxZgDxASVZbdYrn5wT4j/Wb0J9qow==
      }
    engines: { node: '>=10.13.0' }
    dependencies:
      graceful-fs: 4.2.10
      tapable: 2.2.1

  /enquirer/2.3.6:
    resolution:
      {
        integrity: sha512-yjNnPr315/FjS4zIsUxYguYUPP2e1NK4d7E7ZOLiyYCcbFBiTMyID+2wvm2w6+pZ/odMA7cRkjhsPbltwBOrLg==
      }
    engines: { node: '>=8.6' }
    dependencies:
      ansi-colors: 4.1.3
    dev: true

  /entities/2.2.0:
    resolution:
      {
        integrity: sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A==
      }

  /env-paths/2.2.1:
    resolution:
      {
        integrity: sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==
      }
    engines: { node: '>=6' }

  /envinfo/7.8.1:
    resolution:
      {
        integrity: sha512-/o+BXHmB7ocbHEAs6F2EnG0ogybVVUdkRunTT2glZU9XAaGmhqskrvKwqXuDfNjEO0LZKWdejEEpnq8aM0tOaw==
      }
    engines: { node: '>=4' }
    hasBin: true
    dev: true

  /err-code/2.0.3:
    resolution:
      {
        integrity: sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA==
      }
    dev: true

  /errno/0.1.8:
    resolution:
      {
        integrity: sha512-dJ6oBr5SQ1VSd9qkk7ByRgb/1SH4JZjCHSW/mr63/QcXO9zLVxvJ6Oy13nio03rxpSnVDDjFor75SjVeZWPW/A==
      }
    hasBin: true
    dependencies:
      prr: 1.0.1

  /error-ex/1.3.2:
    resolution:
      {
        integrity: sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==
      }
    dependencies:
      is-arrayish: 0.2.1

  /error-stack-parser/2.1.4:
    resolution:
      {
        integrity: sha512-Sk5V6wVazPhq5MhpO+AUxJn5x7XSXGl1R93Vn7i+zS15KDVxQijejNCrz8340/2bgLBjR9GtEG8ZVKONDjcqGQ==
      }
    dependencies:
      stackframe: 1.3.4
    dev: true

  /es-abstract/1.20.1:
    resolution:
      {
        integrity: sha512-WEm2oBhfoI2sImeM4OF2zE2V3BYdSF+KnSi9Sidz51fQHd7+JuF8Xgcj9/0o+OWeIeIS/MiuNnlruQrJf16GQA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      es-to-primitive: 1.2.1
      function-bind: 1.1.1
      function.prototype.name: 1.1.5
      get-intrinsic: 1.1.2
      get-symbol-description: 1.0.0
      has: 1.0.3
      has-property-descriptors: 1.0.0
      has-symbols: 1.0.3
      internal-slot: 1.0.3
      is-callable: 1.2.4
      is-negative-zero: 2.0.2
      is-regex: 1.1.4
      is-shared-array-buffer: 1.0.2
      is-string: 1.0.7
      is-weakref: 1.0.2
      object-inspect: 1.12.2
      object-keys: 1.1.1
      object.assign: 4.1.2
      regexp.prototype.flags: 1.4.3
      string.prototype.trimend: 1.0.5
      string.prototype.trimstart: 1.0.5
      unbox-primitive: 1.0.2

  /es-array-method-boxes-properly/1.0.0:
    resolution:
      {
        integrity: sha512-wd6JXUmyHmt8T5a2xreUwKcGPq6f1f+WwIJkijUqiGcJz1qqnZgP6XIK+QyIWU5lT7imeNxUll48bziG+TSYcA==
      }

  /es-get-iterator/1.1.2:
    resolution:
      {
        integrity: sha512-+DTO8GYwbMCwbywjimwZMHp8AuYXOS2JZFWoi2AlPOS3ebnII9w/NLpNZtA7A0YLaVDw+O7KFCeoIV7OPvM7hQ==
      }
    dependencies:
      call-bind: 1.0.2
      get-intrinsic: 1.1.2
      has-symbols: 1.0.3
      is-arguments: 1.1.1
      is-map: 2.0.2
      is-set: 2.0.2
      is-string: 1.0.7
      isarray: 2.0.5
    dev: true

  /es-module-lexer/0.9.3:
    resolution:
      {
        integrity: sha512-1HQ2M2sPtxwnvOvT1ZClHyQDiggdNjURWpY2we6aMKCQiUVxTmVs2UYPLIrD84sS+kMdUwfBSylbJPwNnBrnHQ==
      }

  /es-shim-unscopables/1.0.0:
    resolution:
      {
        integrity: sha512-Jm6GPcCdC30eMLbZ2x8z2WuRwAws3zTBBKuusffYVUrNj/GVSUAZ+xKMaUpfNDR5IbyNA5LJbaecoUVbmUcB1w==
      }
    dependencies:
      has: 1.0.3

  /es-to-primitive/1.2.1:
    resolution:
      {
        integrity: sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      is-callable: 1.2.4
      is-date-object: 1.0.5
      is-symbol: 1.0.4

  /es5-ext/0.10.61:
    resolution:
      {
        integrity: sha512-yFhIqQAzu2Ca2I4SE2Au3rxVfmohU9Y7wqGR+s7+H7krk26NXhIRAZDgqd6xqjCEFUomDEA3/Bo/7fKmIkW1kA==
      }
    engines: { node: '>=0.10' }
    requiresBuild: true
    dependencies:
      es6-iterator: 2.0.3
      es6-symbol: 3.1.3
      next-tick: 1.1.0
    dev: true

  /es5-shim/4.6.7:
    resolution:
      {
        integrity: sha512-jg21/dmlrNQI7JyyA2w7n+yifSxBng0ZralnSfVZjoCawgNTCnS+yBCyVM9DL5itm7SUnDGgv7hcq2XCZX4iRQ==
      }
    engines: { node: '>=0.4.0' }
    dev: true

  /es6-iterator/2.0.3:
    resolution:
      {
        integrity: sha512-zw4SRzoUkd+cl+ZoE15A9o1oQd920Bb0iOJMQkQhl3jNc03YqVjAhG7scf9C5KWRU/R13Orf588uCC6525o02g==
      }
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.61
      es6-symbol: 3.1.3
    dev: true

  /es6-shim/0.35.6:
    resolution:
      {
        integrity: sha512-EmTr31wppcaIAgblChZiuN/l9Y7DPyw8Xtbg7fIVngn6zMW+IEBJDJngeKC3x6wr0V/vcA2wqeFnaw1bFJbDdA==
      }
    dev: true

  /es6-symbol/3.1.3:
    resolution:
      {
        integrity: sha512-NJ6Yn3FuDinBaBRWl/q5X/s4koRHBrgKAu+yGI6JCBeiu3qrcbJhwT2GeR/EXVfylRk8dpQVJoLEFhK+Mu31NA==
      }
    dependencies:
      d: 1.0.1
      ext: 1.6.0
    dev: true

  /es6-weak-map/2.0.3:
    resolution:
      {
        integrity: sha512-p5um32HOTO1kP+w7PRnB+5lQ43Z6muuMuIMffvDN8ZB4GcnjLBV6zGStpbASIMk4DCAvEaamhe2zhyCb/QXXsA==
      }
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.61
      es6-iterator: 2.0.3
      es6-symbol: 3.1.3
    dev: true

  /esbuild-android-64/0.14.44:
    resolution:
      {
        integrity: sha512-dFPHBXmx385zuJULAD/Cmq/LyPRXiAWbf9ylZtY0wJ8iVyWfKYaCYxeJx8OAZUuj46ZwNa7MzW2GBAQLOeiemg==
      }
    engines: { node: '>=12' }
    cpu: [x64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-android-arm64/0.14.44:
    resolution:
      {
        integrity: sha512-qqaqqyxHXjZ/0ddKU3I3Nb7lAvVM69ELMhb8+91FyomAUmQPlHtxe+TTiWxXGHE72XEzcgTEGq4VauqLNkN22g==
      }
    engines: { node: '>=12' }
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-darwin-64/0.14.44:
    resolution:
      {
        integrity: sha512-RBmtGKGY06+AW6IOJ1LE/dEeF7HH34C1/Ces9FSitU4bIbIpL4KEuQpTFoxwb4ry5s2hyw7vbPhhtyOd18FH9g==
      }
    engines: { node: '>=12' }
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-darwin-arm64/0.14.44:
    resolution:
      {
        integrity: sha512-Bmhx5Cfo4Hdb7WyyyDupTB8HPmnFZ8baLfPlzLdYvF6OzsIbV+CY+m/AWf0OQvY40BlkzCLJ/7Lfwbb71Tngmg==
      }
    engines: { node: '>=12' }
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-freebsd-64/0.14.44:
    resolution:
      {
        integrity: sha512-O4HpWa5ZgxbNPQTF7URicLzYa+TidGlmGT/RAC3GjbGEQQYkd0R1Slyh69Yrmb2qmcOcPAgWHbNo1UhK4WmZ4w==
      }
    engines: { node: '>=12' }
    cpu: [x64]
    os: [freebsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-freebsd-arm64/0.14.44:
    resolution:
      {
        integrity: sha512-f0/jkAKccnDY7mg1F9l/AMzEm+VXWXK6c3IrOEmd13jyKfpTZKTIlt+yI04THPDCDZTzXHTRUBLozqp+m8Mg5Q==
      }
    engines: { node: '>=12' }
    cpu: [arm64]
    os: [freebsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-32/0.14.44:
    resolution:
      {
        integrity: sha512-WSIhzLldMR7YUoEL7Ix319tC+NFmW9Pu7NgFWxUfOXeWsT0Wg484hm6bNgs7+oY2pGzg715y/Wrqi1uNOMmZJw==
      }
    engines: { node: '>=12' }
    cpu: [ia32]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-64/0.14.44:
    resolution:
      {
        integrity: sha512-zgscTrCMcRZRIsVugqBTP/B5lPLNchBlWjQ8sQq2Epnv+UDtYKgXEq1ctWAmibZNy2E9QRCItKMeIEqeTUT5kA==
      }
    engines: { node: '>=12' }
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-arm/0.14.44:
    resolution:
      {
        integrity: sha512-laPBPwGfsbBxGw6F6jnqic2CPXLyC1bPrmnSOeJ9oEnx1rcKkizd4HWCRUc0xv+l4z/USRfx/sEfYlWSLeqoJQ==
      }
    engines: { node: '>=12' }
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-arm64/0.14.44:
    resolution:
      {
        integrity: sha512-H0H/2/wgiScTwBve/JR8/o+Zhabx5KPk8T2mkYZFKQGl1hpUgC+AOmRyqy/Js3p66Wim4F4Akv3I3sJA1sKg0w==
      }
    engines: { node: '>=12' }
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-mips64le/0.14.44:
    resolution:
      {
        integrity: sha512-ri3Okw0aleYy7o5n9zlIq+FCtq3tcMlctN6X1H1ucILjBJuH8pan2trJPKWeb8ppntFvE28I9eEXhwkWh6wYKg==
      }
    engines: { node: '>=12' }
    cpu: [mips64el]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-ppc64le/0.14.44:
    resolution:
      {
        integrity: sha512-96TqL/MvFRuIVXz+GtCIXzRQ43ZwEk4XTn0RWUNJduXXMDQ/V1iOV28U6x6Oe3NesK4xkoKSaK2+F3VHcU8ZrA==
      }
    engines: { node: '>=12' }
    cpu: [ppc64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-riscv64/0.14.44:
    resolution:
      {
        integrity: sha512-rrK9qEp2M8dhilsPn4T9gxUsAumkITc1kqYbpyNMr9EWo+J5ZBj04n3GYldULrcCw4ZCHAJ+qPjqr8b6kG2inA==
      }
    engines: { node: '>=12' }
    cpu: [riscv64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-s390x/0.14.44:
    resolution:
      {
        integrity: sha512-2YmTm9BrW5aUwBSe8wIEARd9EcnOQmkHp4+IVaO09Ez/C5T866x+ABzhG0bwx0b+QRo9q97CRMaQx2Ngb6/hfw==
      }
    engines: { node: '>=12' }
    cpu: [s390x]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-netbsd-64/0.14.44:
    resolution:
      {
        integrity: sha512-zypdzPmZTCqYS30WHxbcvtC0E6e/ECvl4WueUdbdWhs2dfWJt5RtCBME664EpTznixR3lSN1MQ2NhwQF8MQryw==
      }
    engines: { node: '>=12' }
    cpu: [x64]
    os: [netbsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-openbsd-64/0.14.44:
    resolution:
      {
        integrity: sha512-8J43ab9ByYl7KteC03HGQjr2HY1ge7sN04lFnwMFWYk2NCn8IuaeeThvLeNjzOYhyT3I6K8puJP0uVXUu+D1xw==
      }
    engines: { node: '>=12' }
    cpu: [x64]
    os: [openbsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-runner/2.2.1_esbuild@0.12.29:
    resolution:
      {
        integrity: sha512-VP0VfJJZiZ3cKzdOH59ZceDxx/GzBKra7tiGM8MfFMLv6CR1/cpsvtQ3IsJI3pz7HyeYxtbPyecj3fHwR+3XcQ==
      }
    hasBin: true
    peerDependencies:
      esbuild: '*'
    dependencies:
      esbuild: 0.12.29
      source-map-support: 0.5.19
      tslib: 2.3.1
    dev: true

  /esbuild-sunos-64/0.14.44:
    resolution:
      {
        integrity: sha512-OH1/09CGUJwffA+HNM6mqPkSIyHVC3ZnURU/4CCIx7IqWUBn1Sh1HRLQC8/TWNgcs0/1u7ygnc2pgf/AHZJ/Ow==
      }
    engines: { node: '>=12' }
    cpu: [x64]
    os: [sunos]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-windows-32/0.14.44:
    resolution:
      {
        integrity: sha512-mCAOL9/rRqwfOfxTu2sjq/eAIs7eAXGiU6sPBnowggI7QS953Iq6o3/uDu010LwfN7zr18c/lEj6/PTwwTB3AA==
      }
    engines: { node: '>=12' }
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-windows-64/0.14.44:
    resolution:
      {
        integrity: sha512-AG6BH3+YG0s2Q/IfB1cm68FdyFnoE1P+GFbmgFO3tA4UIP8+BKsmKGGZ5I3+ZjcnzOwvT74bQRVrfnQow2KO5Q==
      }
    engines: { node: '>=12' }
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-windows-arm64/0.14.44:
    resolution:
      {
        integrity: sha512-ygYPfYE5By4Sd6szsNr10B0RtWVNOSGmZABSaj4YQBLqh9b9i45VAjVWa8tyIy+UAbKF7WGwybi2wTbSVliO8A==
      }
    engines: { node: '>=12' }
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild/0.12.29:
    resolution:
      {
        integrity: sha512-w/XuoBCSwepyiZtIRsKsetiLDUVGPVw1E/R3VTFSecIy8UR7Cq3SOtwKHJMFoVqqVG36aGkzh4e8BvpO1Fdc7g==
      }
    hasBin: true
    requiresBuild: true
    dev: true

  /esbuild/0.14.44:
    resolution:
      {
        integrity: sha512-Rn+lRRfj60r/3svI6NgAVnetzp3vMOj17BThuhshSj/gS1LR03xrjkDYyfPmrYG/0c3D68rC6FNYMQ3yRbiXeQ==
      }
    engines: { node: '>=12' }
    hasBin: true
    requiresBuild: true
    optionalDependencies:
      esbuild-android-64: 0.14.44
      esbuild-android-arm64: 0.14.44
      esbuild-darwin-64: 0.14.44
      esbuild-darwin-arm64: 0.14.44
      esbuild-freebsd-64: 0.14.44
      esbuild-freebsd-arm64: 0.14.44
      esbuild-linux-32: 0.14.44
      esbuild-linux-64: 0.14.44
      esbuild-linux-arm: 0.14.44
      esbuild-linux-arm64: 0.14.44
      esbuild-linux-mips64le: 0.14.44
      esbuild-linux-ppc64le: 0.14.44
      esbuild-linux-riscv64: 0.14.44
      esbuild-linux-s390x: 0.14.44
      esbuild-netbsd-64: 0.14.44
      esbuild-openbsd-64: 0.14.44
      esbuild-sunos-64: 0.14.44
      esbuild-windows-32: 0.14.44
      esbuild-windows-64: 0.14.44
      esbuild-windows-arm64: 0.14.44
    dev: true

  /escalade/3.1.1:
    resolution:
      {
        integrity: sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==
      }
    engines: { node: '>=6' }

  /escape-goat/2.1.1:
    resolution:
      {
        integrity: sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q==
      }
    engines: { node: '>=8' }
    dev: true

  /escape-html/1.0.3:
    resolution:
      {
        integrity: sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==
      }

  /escape-string-regexp/1.0.5:
    resolution:
      {
        integrity: sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==
      }
    engines: { node: '>=0.8.0' }

  /escape-string-regexp/2.0.0:
    resolution:
      {
        integrity: sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==
      }
    engines: { node: '>=8' }

  /escape-string-regexp/4.0.0:
    resolution:
      {
        integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==
      }
    engines: { node: '>=10' }

  /escodegen/1.14.3:
    resolution:
      {
        integrity: sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==
      }
    engines: { node: '>=4.0' }
    hasBin: true
    dependencies:
      esprima: 4.0.1
      estraverse: 4.3.0
      esutils: 2.0.3
      optionator: 0.8.3
    optionalDependencies:
      source-map: 0.6.1
    dev: true

  /escodegen/2.0.0:
    resolution:
      {
        integrity: sha512-mmHKys/C8BFUGI+MAWNcSYoORYLMdPzjrknd2Vc+bUsjN5bXcr8EhrNB+UTqfL1y3I9c4fw2ihgtMPQLBRiQxw==
      }
    engines: { node: '>=6.0' }
    hasBin: true
    dependencies:
      esprima: 4.0.1
      estraverse: 5.3.0
      esutils: 2.0.3
      optionator: 0.8.3
    optionalDependencies:
      source-map: 0.6.1

  /eslint-plugin-promise/6.0.0_eslint@7.30.0:
    resolution:
      {
        integrity: sha512-7GPezalm5Bfi/E22PnQxDWH2iW9GTvAlUNTztemeHb6c1BniSyoeTrM87JkC0wYdi6aQrZX9p2qEiAno8aTcbw==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      eslint: ^7.0.0 || ^8.0.0
    dependencies:
      eslint: 7.30.0
    dev: true

  /eslint-plugin-promise/6.0.0_eslint@8.7.0:
    resolution:
      {
        integrity: sha512-7GPezalm5Bfi/E22PnQxDWH2iW9GTvAlUNTztemeHb6c1BniSyoeTrM87JkC0wYdi6aQrZX9p2qEiAno8aTcbw==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    peerDependencies:
      eslint: ^7.0.0 || ^8.0.0
    dependencies:
      eslint: 8.7.0
    dev: false

  /eslint-plugin-react/7.27.1_eslint@7.30.0:
    resolution:
      {
        integrity: sha512-meyunDjMMYeWr/4EBLTV1op3iSG3mjT/pz5gti38UzfM4OPpNc2m0t2xvKCOMU5D6FSdd34BIMFOvQbW+i8GAA==
      }
    engines: { node: '>=4' }
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8
    dependencies:
      array-includes: 3.1.5
      array.prototype.flatmap: 1.3.0
      doctrine: 2.1.0
      eslint: 7.30.0
      estraverse: 5.3.0
      jsx-ast-utils: 3.3.0
      minimatch: 3.1.2
      object.entries: 1.1.5
      object.fromentries: 2.0.5
      object.hasown: 1.1.1
      object.values: 1.1.5
      prop-types: 15.8.1
      resolve: 2.0.0-next.3
      semver: 6.3.0
      string.prototype.matchall: 4.0.7
    dev: true

  /eslint-plugin-react/7.27.1_eslint@8.7.0:
    resolution:
      {
        integrity: sha512-meyunDjMMYeWr/4EBLTV1op3iSG3mjT/pz5gti38UzfM4OPpNc2m0t2xvKCOMU5D6FSdd34BIMFOvQbW+i8GAA==
      }
    engines: { node: '>=4' }
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8
    dependencies:
      array-includes: 3.1.5
      array.prototype.flatmap: 1.3.0
      doctrine: 2.1.0
      eslint: 8.7.0
      estraverse: 5.3.0
      jsx-ast-utils: 3.3.0
      minimatch: 3.1.2
      object.entries: 1.1.5
      object.fromentries: 2.0.5
      object.hasown: 1.1.1
      object.values: 1.1.5
      prop-types: 15.8.1
      resolve: 2.0.0-next.3
      semver: 6.3.0
      string.prototype.matchall: 4.0.7
    dev: false

  /eslint-plugin-tsdoc/0.2.16:
    resolution:
      {
        integrity: sha512-F/RWMnyDQuGlg82vQEFHQtGyWi7++XJKdYNn0ulIbyMOFqYIjoJOUdE6olORxgwgLkpJxsCJpJbTHgxJ/ggfXw==
      }
    dependencies:
      '@microsoft/tsdoc': 0.14.1
      '@microsoft/tsdoc-config': 0.16.1

  /eslint-scope/4.0.3:
    resolution:
      {
        integrity: sha512-p7VutNr1O/QrxysMo3E45FjYDTeXBy0iTltPFNSqKAIfjDSXC+4dj+qfyuD8bfAXrW/y6lW3O76VaYNPKfpKrg==
      }
    engines: { node: '>=4.0.0' }
    dependencies:
      esrecurse: 4.3.0
      estraverse: 4.3.0

  /eslint-scope/5.1.1:
    resolution:
      {
        integrity: sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==
      }
    engines: { node: '>=8.0.0' }
    dependencies:
      esrecurse: 4.3.0
      estraverse: 4.3.0

  /eslint-scope/7.1.1:
    resolution:
      {
        integrity: sha512-QKQM/UXpIiHcLqJ5AOyIW7XZmzjkzQXYE54n1++wb0u9V/abW3l9uQnxX8Z5Xd18xyKIMTUAyQ0k1e8pz6LUrw==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0

  /eslint-utils/2.1.0:
    resolution:
      {
        integrity: sha512-w94dQYoauyvlDc43XnGB8lU3Zt713vNChgt4EWwhXAP2XkBvndfxF0AgIqKOOasjPIPzj9JqgwkwbCYD0/V3Zg==
      }
    engines: { node: '>=6' }
    dependencies:
      eslint-visitor-keys: 1.3.0
    dev: true

  /eslint-utils/3.0.0_eslint@7.30.0:
    resolution:
      {
        integrity: sha512-uuQC43IGctw68pJA1RgbQS8/NP7rch6Cwd4j3ZBtgo4/8Flj4eGE7ZYSZRN3iq5pVUv6GPdW5Z1RFleo84uLDA==
      }
    engines: { node: ^10.0.0 || ^12.0.0 || >= 14.0.0 }
    peerDependencies:
      eslint: '>=5'
    dependencies:
      eslint: 7.30.0
      eslint-visitor-keys: 2.1.0
    dev: true

  /eslint-utils/3.0.0_eslint@8.17.0:
    resolution:
      {
        integrity: sha512-uuQC43IGctw68pJA1RgbQS8/NP7rch6Cwd4j3ZBtgo4/8Flj4eGE7ZYSZRN3iq5pVUv6GPdW5Z1RFleo84uLDA==
      }
    engines: { node: ^10.0.0 || ^12.0.0 || >= 14.0.0 }
    peerDependencies:
      eslint: '>=5'
    dependencies:
      eslint: 8.17.0
      eslint-visitor-keys: 2.1.0
    dev: true

  /eslint-utils/3.0.0_eslint@8.7.0:
    resolution:
      {
        integrity: sha512-uuQC43IGctw68pJA1RgbQS8/NP7rch6Cwd4j3ZBtgo4/8Flj4eGE7ZYSZRN3iq5pVUv6GPdW5Z1RFleo84uLDA==
      }
    engines: { node: ^10.0.0 || ^12.0.0 || >= 14.0.0 }
    peerDependencies:
      eslint: '>=5'
    dependencies:
      eslint: 8.7.0
      eslint-visitor-keys: 2.1.0

  /eslint-visitor-keys/1.3.0:
    resolution:
      {
        integrity: sha512-6J72N8UNa462wa/KFODt/PJ3IU60SDpC3QXC1Hjc1BXXpfL2C9R5+AU7jhe0F6GREqVMh4Juu+NY7xn+6dipUQ==
      }
    engines: { node: '>=4' }
    dev: true

  /eslint-visitor-keys/2.1.0:
    resolution:
      {
        integrity: sha512-0rSmRBzXgDzIsD6mGdJgevzgezI534Cer5L/vyMX0kHzT/jiB43jRhd9YUlMGYLQy2zprNmoT8qasCGtY+QaKw==
      }
    engines: { node: '>=10' }

  /eslint-visitor-keys/3.3.0:
    resolution:
      {
        integrity: sha512-mQ+suqKJVyeuwGYHAdjMFqjCyfl8+Ldnxuyp3ldiMBFKkvytrXUZWaiPCEav8qDHKty44bD+qV1IP4T+w+xXRA==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }

  /eslint/7.30.0:
    resolution:
      {
        integrity: sha512-VLqz80i3as3NdloY44BQSJpFw534L9Oh+6zJOUaViV4JPd+DaHwutqP7tcpkW3YiXbK6s05RZl7yl7cQn+lijg==
      }
    engines: { node: ^10.12.0 || >=12.0.0 }
    hasBin: true
    dependencies:
      '@babel/code-frame': 7.12.11
      '@eslint/eslintrc': 0.4.3
      '@humanwhocodes/config-array': 0.5.0
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.3
      debug: 4.3.4
      doctrine: 3.0.0
      enquirer: 2.3.6
      escape-string-regexp: 4.0.0
      eslint-scope: 5.1.1
      eslint-utils: 2.1.0
      eslint-visitor-keys: 2.1.0
      espree: 7.3.1
      esquery: 1.4.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 6.0.1
      functional-red-black-tree: 1.0.1
      glob-parent: 5.1.2
      globals: 13.15.0
      ignore: 4.0.6
      import-fresh: 3.3.0
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      js-yaml: 3.13.1
      json-stable-stringify-without-jsonify: 1.0.1
      levn: 0.4.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.1
      progress: 2.0.3
      regexpp: 3.2.0
      semver: 7.3.7
      strip-ansi: 6.0.1
      strip-json-comments: 3.1.1
      table: 6.8.0
      text-table: 0.2.0
      v8-compile-cache: 2.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /eslint/8.17.0:
    resolution:
      {
        integrity: sha512-gq0m0BTJfci60Fz4nczYxNAlED+sMcihltndR8t9t1evnU/azx53x3t2UHXC/uRjcbvRw/XctpaNygSTcQD+Iw==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    hasBin: true
    dependencies:
      '@eslint/eslintrc': 1.3.0
      '@humanwhocodes/config-array': 0.9.5
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.3
      debug: 4.3.4
      doctrine: 3.0.0
      escape-string-regexp: 4.0.0
      eslint-scope: 7.1.1
      eslint-utils: 3.0.0_eslint@8.17.0
      eslint-visitor-keys: 3.3.0
      espree: 9.3.2
      esquery: 1.4.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 6.0.1
      functional-red-black-tree: 1.0.1
      glob-parent: 6.0.2
      globals: 13.15.0
      ignore: 5.2.0
      import-fresh: 3.3.0
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      js-yaml: 4.1.0
      json-stable-stringify-without-jsonify: 1.0.1
      levn: 0.4.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.1
      regexpp: 3.2.0
      strip-ansi: 6.0.1
      strip-json-comments: 3.1.1
      text-table: 0.2.0
      v8-compile-cache: 2.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /eslint/8.7.0:
    resolution:
      {
        integrity: sha512-ifHYzkBGrzS2iDU7KjhCAVMGCvF6M3Xfs8X8b37cgrUlDt6bWRTpRh6T/gtSXv1HJ/BUGgmjvNvOEGu85Iif7w==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    hasBin: true
    dependencies:
      '@eslint/eslintrc': 1.3.0
      '@humanwhocodes/config-array': 0.9.5
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.3
      debug: 4.3.4
      doctrine: 3.0.0
      escape-string-regexp: 4.0.0
      eslint-scope: 7.1.1
      eslint-utils: 3.0.0_eslint@8.7.0
      eslint-visitor-keys: 3.3.0
      espree: 9.3.2
      esquery: 1.4.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 6.0.1
      functional-red-black-tree: 1.0.1
      glob-parent: 6.0.2
      globals: 13.15.0
      ignore: 5.2.0
      import-fresh: 3.3.0
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      js-yaml: 4.1.0
      json-stable-stringify-without-jsonify: 1.0.1
      levn: 0.4.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.1
      regexpp: 3.2.0
      strip-ansi: 6.0.1
      strip-json-comments: 3.1.1
      text-table: 0.2.0
      v8-compile-cache: 2.3.0
    transitivePeerDependencies:
      - supports-color

  /espree/7.3.1:
    resolution:
      {
        integrity: sha512-v3JCNCE64umkFpmkFGqzVKsOT0tN1Zr+ueqLZfpV1Ob8e+CEgPWa+OxCoGH3tnhimMKIaBm4m/vaRpJ/krRz2g==
      }
    engines: { node: ^10.12.0 || >=12.0.0 }
    dependencies:
      acorn: 7.4.1
      acorn-jsx: 5.3.2_acorn@7.4.1
      eslint-visitor-keys: 1.3.0
    dev: true

  /espree/9.3.2:
    resolution:
      {
        integrity: sha512-D211tC7ZwouTIuY5x9XnS0E9sWNChB7IYKX/Xp5eQj3nFXhqmiUDB9q27y76oFl8jTg3pXcQx/bpxMfs3CIZbA==
      }
    engines: { node: ^12.22.0 || ^14.17.0 || >=16.0.0 }
    dependencies:
      acorn: 8.7.1
      acorn-jsx: 5.3.2_acorn@8.7.1
      eslint-visitor-keys: 3.3.0

  /esprima/4.0.1:
    resolution:
      {
        integrity: sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==
      }
    engines: { node: '>=4' }
    hasBin: true

  /esquery/1.4.0:
    resolution:
      {
        integrity: sha512-cCDispWt5vHHtwMY2YrAQ4ibFkAL8RbH5YGBnZBc90MolvvfkkQcJro/aZiAQUlQ3qgrYS6D6v8Gc5G5CQsc9w==
      }
    engines: { node: '>=0.10' }
    dependencies:
      estraverse: 5.3.0

  /esrecurse/4.3.0:
    resolution:
      {
        integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==
      }
    engines: { node: '>=4.0' }
    dependencies:
      estraverse: 5.3.0

  /estraverse/4.3.0:
    resolution:
      {
        integrity: sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==
      }
    engines: { node: '>=4.0' }

  /estraverse/5.3.0:
    resolution:
      {
        integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==
      }
    engines: { node: '>=4.0' }

  /estree-to-babel/3.2.1:
    resolution:
      {
        integrity: sha512-YNF+mZ/Wu2FU/gvmzuWtYc8rloubL7wfXCTgouFrnjGVXPA/EeYYA7pupXWrb3Iv1cTBeSSxxJIbK23l4MRNqg==
      }
    engines: { node: '>=8.3.0' }
    dependencies:
      '@babel/traverse': 7.18.5
      '@babel/types': 7.18.4
      c8: 7.11.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /esutils/2.0.3:
    resolution:
      {
        integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==
      }
    engines: { node: '>=0.10.0' }

  /etag/1.8.1:
    resolution:
      {
        integrity: sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==
      }
    engines: { node: '>= 0.6' }

  /event-emitter/0.3.5:
    resolution:
      {
        integrity: sha512-D9rRn9y7kLPnJ+hMq7S/nhvoKwwvVJahBi2BPmx3bvbsEdK3W9ii8cBSGjP+72/LnM4n6fo3+dkCX5FeTQruXA==
      }
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.61
    dev: true

  /eventemitter3/4.0.7:
    resolution:
      {
        integrity: sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==
      }

  /events/1.1.1:
    resolution:
      {
        integrity: sha512-kEcvvCBByWXGnZy6JUlgAp2gBIUjfCAV6P6TgT1/aaQKcmuAEC4OZTV1I4EWQLz2gxZw76atuVyvHhTxvi0Flw==
      }
    engines: { node: '>=0.4.x' }
    dev: true

  /events/3.3.0:
    resolution:
      {
        integrity: sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==
      }
    engines: { node: '>=0.8.x' }

  /evp_bytestokey/1.0.3:
    resolution:
      {
        integrity: sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==
      }
    dependencies:
      md5.js: 1.3.5
      safe-buffer: 5.2.1

  /exec-sh/0.3.6:
    resolution:
      {
        integrity: sha512-nQn+hI3yp+oD0huYhKwvYI32+JFeq+XkNcD1GAo3Y/MjxsfVGmrrzrnzjWiNY6f+pUCP440fThsFh5gZrRAU/w==
      }
    dev: true

  /execa/1.0.0:
    resolution:
      {
        integrity: sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==
      }
    engines: { node: '>=6' }
    dependencies:
      cross-spawn: 6.0.5
      get-stream: 4.1.0
      is-stream: 1.1.0
      npm-run-path: 2.0.2
      p-finally: 1.0.0
      signal-exit: 3.0.7
      strip-eof: 1.0.0
    dev: true

  /execa/5.1.1:
    resolution:
      {
        integrity: sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==
      }
    engines: { node: '>=10' }
    dependencies:
      cross-spawn: 7.0.3
      get-stream: 6.0.1
      human-signals: 2.1.0
      is-stream: 2.0.1
      merge-stream: 2.0.0
      npm-run-path: 4.0.1
      onetime: 5.1.2
      signal-exit: 3.0.7
      strip-final-newline: 2.0.0

  /exit/0.1.2:
    resolution:
      {
        integrity: sha512-Zk/eNKV2zbjpKzrsQ+n1G6poVbErQxJ0LBOJXaKZ1EViLzH+hrLu9cdXI4zw9dBQJslwBEpbQ2P1oS7nDxs6jQ==
      }
    engines: { node: '>= 0.8.0' }

  /expand-brackets/2.1.4:
    resolution:
      {
        integrity: sha512-w/ozOKR9Obk3qoWeY/WDi6MFta9AoMR+zud60mdnbniMcBxRuFJyDt2LdX/14A1UABeqk+Uk+LDfUpvoGKppZA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      debug: 2.6.9
      define-property: 0.2.5
      extend-shallow: 2.0.1
      posix-character-classes: 0.1.1
      regex-not: 1.0.2
      snapdragon: 0.8.2
      to-regex: 3.0.2

  /expand-tilde/2.0.2:
    resolution:
      {
        integrity: sha512-A5EmesHW6rfnZ9ysHQjPdJRni0SRar0tjtG5MNtm9n5TUvsYU8oozprtRD4AqHxcZWWlVuAmQo2nWKfN9oyjTw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      homedir-polyfill: 1.0.3
    dev: false

  /expect/27.5.1:
    resolution:
      {
        integrity: sha512-E1q5hSUG2AmYQwQJ041nvgpkODHQvB+RKlB4IYdru6uJsyFTRyZAP463M+1lINorwbqAmUggi6+WwkD8lCS/Dw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      jest-get-type: 27.5.1
      jest-matcher-utils: 27.5.1
      jest-message-util: 27.5.1

  /express/4.18.1:
    resolution:
      {
        integrity: sha512-zZBcOX9TfehHQhtupq57OF8lFZ3UZi08Y97dwFCkD8p9d/d2Y3M+ykKcwaMDEL+4qyUolgBDX6AblpR3fL212Q==
      }
    engines: { node: '>= 0.10.0' }
    dependencies:
      accepts: 1.3.8
      array-flatten: 1.1.1
      body-parser: 1.20.0
      content-disposition: 0.5.4
      content-type: 1.0.4
      cookie: 0.5.0
      cookie-signature: 1.0.6
      debug: 2.6.9
      depd: 2.0.0
      encodeurl: 1.0.2
      escape-html: 1.0.3
      etag: 1.8.1
      finalhandler: 1.2.0
      fresh: 0.5.2
      http-errors: 2.0.0
      merge-descriptors: 1.0.1
      methods: 1.1.2
      on-finished: 2.4.1
      parseurl: 1.3.3
      path-to-regexp: 0.1.7
      proxy-addr: 2.0.7
      qs: 6.10.3
      range-parser: 1.2.1
      safe-buffer: 5.2.1
      send: 0.18.0
      serve-static: 1.15.0
      setprototypeof: 1.2.0
      statuses: 2.0.1
      type-is: 1.6.18
      utils-merge: 1.0.1
      vary: 1.1.2

  /ext/1.6.0:
    resolution:
      {
        integrity: sha512-sdBImtzkq2HpkdRLtlLWDa6w4DX22ijZLKx8BMPUuKe1c5lbN6xwQDQCxSfxBQnHZ13ls/FH0MQZx/q/gr6FQg==
      }
    dependencies:
      type: 2.6.0
    dev: true

  /extend-shallow/2.0.1:
    resolution:
      {
        integrity: sha512-zCnTtlxNoAiDc3gqY2aYAWFx7XWWiasuF2K8Me5WbN8otHKTUKBwjPtNpRs/rbUZm7KxWAaNj7P1a/p52GbVug==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-extendable: 0.1.1

  /extend-shallow/3.0.2:
    resolution:
      {
        integrity: sha512-BwY5b5Ql4+qZoefgMj2NUmx+tehVTH/Kf4k1ZEtOHNFcm2wSxMRo992l6X3TIgni2eZVTZ85xMOjF31fwZAj6Q==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      assign-symbols: 1.0.0
      is-extendable: 1.0.1

  /extend/3.0.2:
    resolution:
      {
        integrity: sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==
      }

  /external-editor/3.1.0:
    resolution:
      {
        integrity: sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==
      }
    engines: { node: '>=4' }
    dependencies:
      chardet: 0.7.0
      iconv-lite: 0.4.24
      tmp: 0.0.33
    dev: false

  /extglob/2.0.4:
    resolution:
      {
        integrity: sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      array-unique: 0.3.2
      define-property: 1.0.0
      expand-brackets: 2.1.4
      extend-shallow: 2.0.1
      fragment-cache: 0.2.1
      regex-not: 1.0.2
      snapdragon: 0.8.2
      to-regex: 3.0.2

  /extract-zip/1.7.0:
    resolution:
      {
        integrity: sha512-xoh5G1W/PB0/27lXgMQyIhP5DSY/LhoCsOyZgb+6iMmRtCwVBo55uKaMoEYrDCKQhWvqEip5ZPKAc6eFNyf/MA==
      }
    hasBin: true
    dependencies:
      concat-stream: 1.6.2
      debug: 2.6.9
      mkdirp: 0.5.6
      yauzl: 2.10.0
    dev: true

  /extsprintf/1.3.0:
    resolution:
      {
        integrity: sha512-11Ndz7Nv+mvAC1j0ktTa7fAb0vLyGGX+rMHNBYQviQDGU0Hw7lhctJANqbPhu9nV9/izT/IntTgZ7Im/9LJs9g==
      }
    engines: { '0': node >=0.6.0 }
    dev: false

  /fast-decode-uri-component/1.0.1:
    resolution:
      {
        integrity: sha512-WKgKWg5eUxvRZGwW8FvfbaH7AXSh2cL+3j5fMGzUMCxWBJ3dV3a7Wz8y2f/uQ0e3B6WmodD3oS54jTQ9HVTIIg==
      }
    dev: false

  /fast-deep-equal/3.1.3:
    resolution:
      {
        integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==
      }

  /fast-glob/2.2.7:
    resolution:
      {
        integrity: sha512-g1KuQwHOZAmOZMuBtHdxDtju+T2RT8jgCC9aANsbpdiDDTSnjgfuVsIBNKbUeJI3oKMRExcfNDtJl4OhbffMsw==
      }
    engines: { node: '>=4.0.0' }
    dependencies:
      '@mrmlnc/readdir-enhanced': 2.2.1
      '@nodelib/fs.stat': 1.1.3
      glob-parent: 3.1.0
      is-glob: 4.0.3
      merge2: 1.4.1
      micromatch: 3.1.10
    dev: true

  /fast-glob/3.2.11:
    resolution:
      {
        integrity: sha512-xrO3+1bxSo3ZVHAnqzyuewYT6aMFHRAd4Kcs92MAonjwQZLsK9d0SF1IyQ3k5PoirxTW0Oe/RqFgMQ6TcNE5Ew==
      }
    engines: { node: '>=8.6.0' }
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.5

  /fast-json-parse/1.0.3:
    resolution:
      {
        integrity: sha512-FRWsaZRWEJ1ESVNbDWmsAlqDk96gPQezzLghafp5J4GUKjbCz3OkAHuZs5TuPEtkbVQERysLp9xv6c24fBm8Aw==
      }
    dev: true

  /fast-json-stable-stringify/2.1.0:
    resolution:
      {
        integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==
      }

  /fast-json-stringify/2.7.13:
    resolution:
      {
        integrity: sha512-ar+hQ4+OIurUGjSJD1anvYSDcUflywhKjfxnsW4TBTD7+u0tJufv6DKRWoQk3vI6YBOWMoz0TQtfbe7dxbQmvA==
      }
    engines: { node: '>= 10.0.0' }
    dependencies:
      ajv: 6.12.6
      deepmerge: 4.2.2
      rfdc: 1.3.0
      string-similarity: 4.0.4
    dev: false

  /fast-levenshtein/2.0.6:
    resolution:
      {
        integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==
      }

  /fast-redact/3.1.1:
    resolution:
      {
        integrity: sha512-odVmjC8x8jNeMZ3C+rPMESzXVSEU8tSWSHv9HFxP2mm89G/1WwqhrerJDQm9Zus8X6aoRgQDThKqptdNA6bt+A==
      }
    engines: { node: '>=6' }
    dev: false

  /fast-safe-stringify/2.1.1:
    resolution:
      {
        integrity: sha512-W+KJc2dmILlPplD/H4K9l9LcAHAfPtP6BY84uVLXQ6Evcz9Lcg33Y2z1IVblT6xdY54PXYVHEv+0Wpq8Io6zkA==
      }

  /fastify-error/0.3.1:
    resolution:
      {
        integrity: sha512-oCfpcsDndgnDVgiI7bwFKAun2dO+4h84vBlkWsWnz/OUK9Reff5UFoFl241xTiLeHWX/vU9zkDVXqYUxjOwHcQ==
      }
    dev: false

  /fastify-warning/0.2.0:
    resolution:
      {
        integrity: sha512-s1EQguBw/9qtc1p/WTY4eq9WMRIACkj+HTcOIK1in4MV5aFaQC9ZCIt0dJ7pr5bIf4lPpHvAtP2ywpTNgs7hqw==
      }
    deprecated: This module renamed to process-warning
    dev: false

  /fastify/3.16.2:
    resolution:
      {
        integrity: sha512-tdu0fz6wk9AbtD91AbzZGjKgEQLcIy7rT2vEzTUL/zifAMS/L7ViKY9p9k3g3yCRnIQzYzxH2RAbvYZaTbKasw==
      }
    engines: { node: '>=10.16.0' }
    dependencies:
      '@fastify/ajv-compiler': 1.1.0
      '@fastify/proxy-addr': 3.0.0
      abstract-logging: 2.0.1
      avvio: 7.2.5
      fast-json-stringify: 2.7.13
      fastify-error: 0.3.1
      fastify-warning: 0.2.0
      find-my-way: 4.5.1
      flatstr: 1.0.12
      light-my-request: 4.10.1
      pino: 6.14.0
      readable-stream: 3.6.0
      rfdc: 1.3.0
      secure-json-parse: 2.4.0
      semver: 7.3.7
      tiny-lru: 7.0.6
    transitivePeerDependencies:
      - supports-color
    dev: false

  /fastparse/1.1.2:
    resolution:
      {
        integrity: sha512-483XLLxTVIwWK3QTrMGRqUfUpoOs/0hbQrl2oz4J0pAcm3A3bu84wxTFqGqkJzewCLdME38xJLJAxBABfQT8sQ==
      }
    dev: false

  /fastq/1.13.0:
    resolution:
      {
        integrity: sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==
      }
    dependencies:
      reusify: 1.0.4

  /fault/1.0.4:
    resolution:
      {
        integrity: sha512-CJ0HCB5tL5fYTEA7ToAq5+kTwd++Borf1/bifxd9iT70QcXr4MRrO3Llf8Ifs70q+SJcGHFtnIE/Nw6giCtECA==
      }
    dependencies:
      format: 0.2.2
    dev: true

  /faye-websocket/0.11.4:
    resolution:
      {
        integrity: sha512-CzbClwlXAuiRQAlUyfqPgvPoNKTckTPGfwZV4ZdAhVcP2lh9KUxJg2b5GkE7XbjKQ3YJnQ9z6D9ntLAlB+tP8g==
      }
    engines: { node: '>=0.8.0' }
    dependencies:
      websocket-driver: 0.7.4

  /fb-watchman/2.0.1:
    resolution:
      {
        integrity: sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==
      }
    dependencies:
      bser: 2.1.1

  /fd-slicer/1.1.0:
    resolution:
      {
        integrity: sha512-cE1qsB/VwyQozZ+q1dGxR8LBYNZeofhEdUNGSMbQD3Gw2lAzX9Zb3uIU6Ebc/Fmyjo9AWWfnn0AUCHqtevs/8g==
      }
    dependencies:
      pend: 1.2.0
    dev: true

  /figgy-pudding/3.5.2:
    resolution:
      {
        integrity: sha512-0btnI/H8f2pavGMN8w40mlSKOfTK2SVJmBfBeVIj3kNw0swwgzyRq0d5TJVOwodFmtvpPeWPN/MCcfuWF0Ezbw==
      }

  /figures/3.2.0:
    resolution:
      {
        integrity: sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==
      }
    engines: { node: '>=8' }
    dependencies:
      escape-string-regexp: 1.0.5
    dev: false

  /file-entry-cache/6.0.1:
    resolution:
      {
        integrity: sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==
      }
    engines: { node: ^10.12.0 || >=12.0.0 }
    dependencies:
      flat-cache: 3.0.4

  /file-loader/6.0.0_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-/aMOAYEFXDdjG0wytpTL5YQLfZnnTmLNjn+AIrJ/6HVnTfDqLsVKUUwkDf4I4kgex36BvjuXEn/TX9B/1ESyqQ==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      loader-utils: 2.0.2
      schema-utils: 2.7.1
      webpack: 4.44.2
    dev: true

  /file-loader/6.2.0_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-qo3glqyTa61Ytg4u73GultjHGjdRyig3tG6lPtyX/jOEJvHif9uB0/OCI2Kif6ctF3caQTW2G5gym21oAsI4pw==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      loader-utils: 2.0.2
      schema-utils: 3.1.1
      webpack: 4.44.2
    dev: true

  /file-system-cache/1.1.0:
    resolution:
      {
        integrity: sha512-IzF5MBq+5CR0jXx5RxPe4BICl/oEhBSXKaL9fLhAXrIfIUS77Hr4vzrYyqYMHN6uTt+BOqi3fDCTjjEBCjERKw==
      }
    dependencies:
      fs-extra: 10.1.0
      ramda: 0.28.0
    dev: true

  /file-uri-to-path/1.0.0:
    resolution:
      {
        integrity: sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==
      }
    requiresBuild: true
    optional: true

  /file-uri-to-path/2.0.0:
    resolution:
      {
        integrity: sha512-hjPFI8oE/2iQPVe4gbrJ73Pp+Xfub2+WI2LlXDbsaJBwT5wuMh35WNWVYYTpnz895shtwfyutMFLFywpQAFdLg==
      }
    engines: { node: '>= 6' }
    dev: true

  /fill-range/4.0.0:
    resolution:
      {
        integrity: sha512-VcpLTWqWDiTerugjj8e3+esbg+skS3M9e54UuR3iCeIDMXCLTsAH8hTSzDQU/X6/6t3eYkOKoZSef2PlU6U1XQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      extend-shallow: 2.0.1
      is-number: 3.0.0
      repeat-string: 1.6.1
      to-regex-range: 2.1.1

  /fill-range/7.0.1:
    resolution:
      {
        integrity: sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==
      }
    engines: { node: '>=8' }
    dependencies:
      to-regex-range: 5.0.1

  /finalhandler/1.2.0:
    resolution:
      {
        integrity: sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==
      }
    engines: { node: '>= 0.8' }
    dependencies:
      debug: 2.6.9
      encodeurl: 1.0.2
      escape-html: 1.0.3
      on-finished: 2.4.1
      parseurl: 1.3.3
      statuses: 2.0.1
      unpipe: 1.0.0

  /find-cache-dir/2.1.0:
    resolution:
      {
        integrity: sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==
      }
    engines: { node: '>=6' }
    dependencies:
      commondir: 1.0.1
      make-dir: 2.1.0
      pkg-dir: 3.0.0

  /find-cache-dir/3.3.2:
    resolution:
      {
        integrity: sha512-wXZV5emFEjrridIgED11OoUKLxiYjAcqot/NJdAkOhlJ+vGzwhOAfcG5OX1jP+S0PcjEn8bdMJv+g2jwQ3Onig==
      }
    engines: { node: '>=8' }
    dependencies:
      commondir: 1.0.1
      make-dir: 3.1.0
      pkg-dir: 4.2.0
    dev: true

  /find-my-way/4.5.1:
    resolution:
      {
        integrity: sha512-kE0u7sGoUFbMXcOG/xpkmz4sRLCklERnBcg7Ftuu1iAxsfEt2S46RLJ3Sq7vshsEy2wJT2hZxE58XZK27qa8kg==
      }
    engines: { node: '>=10' }
    dependencies:
      fast-decode-uri-component: 1.0.1
      fast-deep-equal: 3.1.3
      safe-regex2: 2.0.0
      semver-store: 0.3.0
    dev: false

  /find-root/1.1.0:
    resolution:
      {
        integrity: sha512-NKfW6bec6GfKc0SGx1e07QZY9PE99u0Bft/0rzSD5k3sO/vwkVUpDUKVm5Gpp5Ue3YfShPFTX2070tDs5kB9Ng==
      }
    dev: true

  /find-up/3.0.0:
    resolution:
      {
        integrity: sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==
      }
    engines: { node: '>=6' }
    dependencies:
      locate-path: 3.0.0

  /find-up/4.1.0:
    resolution:
      {
        integrity: sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==
      }
    engines: { node: '>=8' }
    dependencies:
      locate-path: 5.0.0
      path-exists: 4.0.0

  /find-up/5.0.0:
    resolution:
      {
        integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==
      }
    engines: { node: '>=10' }
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0
    dev: true

  /findup-sync/3.0.0:
    resolution:
      {
        integrity: sha512-YbffarhcicEhOrm4CtrwdKBdCuz576RLdhJDsIfvNtxUuhdRet1qZcsMjqbePtAseKdAnDyM/IyXbu7PRPRLYg==
      }
    engines: { node: '>= 0.10' }
    dependencies:
      detect-file: 1.0.0
      is-glob: 4.0.3
      micromatch: 3.1.10
      resolve-dir: 1.0.1
    dev: false

  /flat-cache/3.0.4:
    resolution:
      {
        integrity: sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==
      }
    engines: { node: ^10.12.0 || >=12.0.0 }
    dependencies:
      flatted: 3.2.5
      rimraf: 3.0.2

  /flatstr/1.0.12:
    resolution:
      {
        integrity: sha512-4zPxDyhCyiN2wIAtSLI6gc82/EjqZc1onI4Mz/l0pWrAlsSfYH/2ZIcU+e3oA2wDwbzIWNKwa23F8rh6+DRWkw==
      }
    dev: false

  /flatted/3.2.5:
    resolution:
      {
        integrity: sha512-WIWGi2L3DyTUvUrwRKgGi9TwxQMUEqPOPQBVi71R96jZXJdFskXEmf54BoZaS1kknGODoIGASGEzBUYdyMCBJg==
      }

  /flow-parser/0.180.0:
    resolution:
      {
        integrity: sha512-kkzsuGAhckWgn/G+JfCyEa6BYslGrjlH4CJL0LZhdn9of9ukvi7SzVQSFsrEhuhh/zQUghfUEoaeZy1wjQXpUg==
      }
    engines: { node: '>=0.4.0' }
    dev: true

  /flush-write-stream/1.1.1:
    resolution:
      {
        integrity: sha512-3Z4XhFZ3992uIq0XOqb9AreonueSYphE6oYbpt5+3u06JWklbsPkNv3ZKkP9Bz/r+1MWCaMoSQ28P85+1Yc77w==
      }
    dependencies:
      inherits: 2.0.4
      readable-stream: 2.3.7

  /follow-redirects/1.15.1:
    resolution:
      {
        integrity: sha512-yLAMQs+k0b2m7cVxpS1VKJVvoz7SS9Td1zss3XRwXj+ZDH00RJgnuLx7E44wx02kQLrdM3aOOy+FpzS7+8OizA==
      }
    engines: { node: '>=4.0' }
    peerDependencies:
      debug: '*'
    peerDependenciesMeta:
      debug:
        optional: true

  /for-in/1.0.2:
    resolution:
      {
        integrity: sha512-7EwmXrOjyL+ChxMhmG5lnW9MPt1aIeZEwKhQzoBUdTV0N3zuwWDZYVJatDvZ2OyzPUvdIAZDsCetk3coyMfcnQ==
      }
    engines: { node: '>=0.10.0' }

  /foreground-child/2.0.0:
    resolution:
      {
        integrity: sha512-dCIq9FpEcyQyXKCkyzmlPTFNgrCzPudOe+mhvJU5zAtlBnGVy2yKxtfsxK2tQBThwq225jcvBjpw1Gr40uzZCA==
      }
    engines: { node: '>=8.0.0' }
    dependencies:
      cross-spawn: 7.0.3
      signal-exit: 3.0.7
    dev: true

  /forever-agent/0.6.1:
    resolution:
      {
        integrity: sha512-j0KLYPhm6zeac4lz3oJ3o65qvgQCcPubiyotZrXqEaG4hNagNYO8qdlUrX5vwqv9ohqeT/Z3j6+yW067yWWdUw==
      }
    dev: false

  /fork-ts-checker-webpack-plugin/4.1.6:
    resolution:
      {
        integrity: sha512-DUxuQaKoqfNne8iikd14SAkh5uw4+8vNifp6gmA73yYNS6ywLIWSLD/n/mBzHQRpW3J7rbATEakmiA8JvkTyZw==
      }
    engines: { node: '>=6.11.5', yarn: '>=1.0.0' }
    dependencies:
      '@babel/code-frame': 7.16.7
      chalk: 2.4.2
      micromatch: 3.1.10
      minimatch: 3.1.2
      semver: 5.7.1
      tapable: 1.1.3
      worker-rpc: 0.1.1
    dev: true

  /fork-ts-checker-webpack-plugin/6.5.2_l2tljvf7qg4dnwbeffjdh4wj4e:
    resolution:
      {
        integrity: sha512-m5cUmF30xkZ7h4tWUgTAcEaKmUW7tfyUyTqNNOz7OxWJ0v1VWKTcOvH8FWHUwSjlW/356Ijc9vi3XfcPstpQKA==
      }
    engines: { node: '>=10', yarn: '>=1.0.0' }
    peerDependencies:
      eslint: '>= 6'
      typescript: '>= 2.7'
      vue-template-compiler: '*'
      webpack: '>= 4'
    peerDependenciesMeta:
      eslint:
        optional: true
      vue-template-compiler:
        optional: true
    dependencies:
      '@babel/code-frame': 7.16.7
      '@types/json-schema': 7.0.11
      chalk: 4.1.2
      chokidar: 3.5.3
      cosmiconfig: 6.0.0
      deepmerge: 4.2.2
      fs-extra: 9.1.0
      glob: 7.2.3
      memfs: 3.4.3
      minimatch: 3.1.2
      schema-utils: 2.7.0
      semver: 7.3.7
      tapable: 1.1.3
      typescript: 4.8.4
      webpack: 4.44.2
    dev: true

  /form-data/2.3.3:
    resolution:
      {
        integrity: sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==
      }
    engines: { node: '>= 0.12' }
    dependencies:
      asynckit: 0.4.0
      combined-stream: 1.0.8
      mime-types: 2.1.35
    dev: false

  /form-data/3.0.1:
    resolution:
      {
        integrity: sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==
      }
    engines: { node: '>= 6' }
    dependencies:
      asynckit: 0.4.0
      combined-stream: 1.0.8
      mime-types: 2.1.35

  /form-data/4.0.0:
    resolution:
      {
        integrity: sha512-ETEklSGi5t0QMZuiXoA/Q6vcnxcLQP5vdugSpuAyi6SVGi2clPPp+xgEhuMaHC+zGgn31Kd235W35f7Hykkaww==
      }
    engines: { node: '>= 6' }
    dependencies:
      asynckit: 0.4.0
      combined-stream: 1.0.8
      mime-types: 2.1.35
    dev: false

  /format/0.2.2:
    resolution:
      {
        integrity: sha512-wzsgA6WOq+09wrU1tsJ09udeR/YZRaeArL9e1wPbFg3GG2yDnC2ldKpxs4xunpFF9DgqCqOIra3bc1HWrJ37Ww==
      }
    engines: { node: '>=0.4.x' }
    dev: true

  /forwarded/0.2.0:
    resolution:
      {
        integrity: sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==
      }
    engines: { node: '>= 0.6' }

  /fraction.js/4.2.0:
    resolution:
      {
        integrity: sha512-MhLuK+2gUcnZe8ZHlaaINnQLl0xRIGRfcGk2yl8xoQAfHrSsL3rYu6FCmBdkdbhc9EPlwyGHewaRsvwRMJtAlA==
      }

  /fragment-cache/0.2.1:
    resolution:
      {
        integrity: sha512-GMBAbW9antB8iZRHLoGw0b3HANt57diZYFO/HL1JGIC1MjKrdmhxvrJbupnVvpys0zsz7yBApXdQyfepKly2kA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      map-cache: 0.2.2

  /fresh/0.5.2:
    resolution:
      {
        integrity: sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==
      }
    engines: { node: '>= 0.6' }

  /from2/2.3.0:
    resolution:
      {
        integrity: sha512-OMcX/4IC/uqEPVgGeyfN22LJk6AZrMkRZHxcHBMBvHScDGgwTm2GT2Wkgtocyd3JfZffjj2kYUDXXII0Fk9W0g==
      }
    dependencies:
      inherits: 2.0.4
      readable-stream: 2.3.7

  /fs-constants/1.0.0:
    resolution:
      {
        integrity: sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow==
      }
    dev: true

  /fs-extra/10.1.0:
    resolution:
      {
        integrity: sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==
      }
    engines: { node: '>=12' }
    dependencies:
      graceful-fs: 4.2.10
      jsonfile: 6.1.0
      universalify: 2.0.0
    dev: true

  /fs-extra/7.0.1:
    resolution:
      {
        integrity: sha512-YJDaCJZEnBmcbw13fvdAM9AwNOJwOzrE4pqMqBq5nFiEqXUqHwlK4B+3pUw6JNvfSPtX05xFHtYy/1ni01eGCw==
      }
    engines: { node: '>=6 <7 || >=8' }
    dependencies:
      graceful-fs: 4.2.10
      jsonfile: 4.0.0
      universalify: 0.1.2

  /fs-extra/8.1.0:
    resolution:
      {
        integrity: sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==
      }
    engines: { node: '>=6 <7 || >=8' }
    dependencies:
      graceful-fs: 4.2.10
      jsonfile: 4.0.0
      universalify: 0.1.2
    dev: true

  /fs-extra/9.1.0:
    resolution:
      {
        integrity: sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==
      }
    engines: { node: '>=10' }
    dependencies:
      at-least-node: 1.0.0
      graceful-fs: 4.2.10
      jsonfile: 6.1.0
      universalify: 2.0.0
    dev: true

  /fs-minipass/2.1.0:
    resolution:
      {
        integrity: sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==
      }
    engines: { node: '>= 8' }
    dependencies:
      minipass: 3.1.6

  /fs-monkey/1.0.3:
    resolution:
      {
        integrity: sha512-cybjIfiiE+pTWicSCLFHSrXZ6EilF30oh91FDP9S2B051prEa7QWfrVTQm10/dDpswBDXZugPa1Ogu8Yh+HV0Q==
      }

  /fs-write-stream-atomic/1.0.10:
    resolution:
      {
        integrity: sha512-gehEzmPn2nAwr39eay+x3X34Ra+M2QlVUTLhkXPjWdeO8RF9kszk116avgBJM3ZyNHgHXBNx+VmPaFC36k0PzA==
      }
    dependencies:
      graceful-fs: 4.2.10
      iferr: 0.1.5
      imurmurhash: 0.1.4
      readable-stream: 2.3.7

  /fs.realpath/1.0.0:
    resolution:
      {
        integrity: sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==
      }

  /fsevents/1.2.13:
    resolution:
      {
        integrity: sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==
      }
    engines: { node: '>= 4.0' }
    os: [darwin]
    deprecated: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
    requiresBuild: true
    dependencies:
      bindings: 1.5.0
      nan: 2.16.0
    optional: true

  /fsevents/2.1.3:
    resolution:
      {
        integrity: sha512-Auw9a4AxqWpa9GUfj370BMPzzyncfBABW8Mab7BGWBYDj4Isgq+cDKtx0i6u9jcX9pQDnswsaaOTgTmA5pEjuQ==
      }
    engines: { node: ^8.16.0 || ^10.6.0 || >=11.0.0 }
    os: [darwin]
    deprecated: '"Please update to latest v2.3 or v2.2"'
    requiresBuild: true
    optional: true

  /fsevents/2.3.2:
    resolution:
      {
        integrity: sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==
      }
    engines: { node: ^8.16.0 || ^10.6.0 || >=11.0.0 }
    os: [darwin]
    requiresBuild: true
    optional: true

  /ftp/0.3.10:
    resolution:
      {
        integrity: sha512-faFVML1aBx2UoDStmLwv2Wptt4vw5x03xxX172nhA5Y5HBshW5JweqQ2W4xL4dezQTG8inJsuYcpPHHU3X5OTQ==
      }
    engines: { node: '>=0.8.0' }
    dependencies:
      readable-stream: 1.1.14
      xregexp: 2.0.0
    dev: true

  /function-bind/1.1.1:
    resolution:
      {
        integrity: sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==
      }

  /function.prototype.name/1.1.5:
    resolution:
      {
        integrity: sha512-uN7m/BzVKQnCUF/iW8jYea67v++2u7m5UgENbHRtdDVclOUP+FMPlCNdmk0h/ysGyo2tavMJEDqJAkJdRa1vMA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
      functions-have-names: 1.2.3

  /functional-red-black-tree/1.0.1:
    resolution:
      {
        integrity: sha512-dsKNQNdj6xA3T+QlADDA7mOSlX0qiMINjn0cgr+eGHGsbSHzTabcIogz2+p/iqP1Xs6EP/sS2SbqH+brGTbq0g==
      }

  /functions-have-names/1.2.3:
    resolution:
      {
        integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==
      }

  /fuse.js/3.6.1:
    resolution:
      {
        integrity: sha512-hT9yh/tiinkmirKrlv4KWOjztdoZo1mx9Qh4KvWqC7isoXwdUY3PNWUxceF4/qO9R6riA2C29jdTOeQOIROjgw==
      }
    engines: { node: '>=6' }
    dev: true

  /gauge/2.7.4:
    resolution:
      {
        integrity: sha512-14x4kjc6lkD3ltw589k0NrPD6cCNTD6CWoVUNpB85+DrtONoZn+Rug6xZU5RvSC4+TZPxA5AnBibQYAvZn41Hg==
      }
    dependencies:
      aproba: 1.2.0
      console-control-strings: 1.1.0
      has-unicode: 2.0.1
      object-assign: 4.1.1
      signal-exit: 3.0.7
      string-width: 1.0.2
      strip-ansi: 3.0.1
      wide-align: 1.1.5

  /gauge/3.0.2:
    resolution:
      {
        integrity: sha512-+5J6MS/5XksCuXq++uFRsnUd7Ovu1XenbeuIuNRJxYWjgQbPuFhT14lAvsWfqfAmnwluf1OwMjz39HjfLPci0Q==
      }
    engines: { node: '>=10' }
    dependencies:
      aproba: 2.0.0
      color-support: 1.1.3
      console-control-strings: 1.1.0
      has-unicode: 2.0.1
      object-assign: 4.1.1
      signal-exit: 3.0.7
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wide-align: 1.1.5
    dev: true

  /gaze/1.1.3:
    resolution:
      {
        integrity: sha512-BRdNm8hbWzFzWHERTrejLqwHDfS4GibPoq5wjTPIoJHoBtKGPg3xAFfxmM+9ztbXelxcf2hwQcaz1PtmFeue8g==
      }
    engines: { node: '>= 4.0.0' }
    dependencies:
      globule: 1.3.3
    dev: false

  /generic-names/2.0.1:
    resolution:
      {
        integrity: sha512-kPCHWa1m9wGG/OwQpeweTwM/PYiQLrUIxXbt/P4Nic3LbGjCP0YwrALHW1uNLKZ0LIMg+RF+XRlj2ekT9ZlZAQ==
      }
    dependencies:
      loader-utils: 1.1.0
    dev: false

  /gensync/1.0.0-beta.2:
    resolution:
      {
        integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==
      }
    engines: { node: '>=6.9.0' }

  /get-caller-file/2.0.5:
    resolution:
      {
        integrity: sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==
      }
    engines: { node: 6.* || 8.* || >= 10.* }

  /get-intrinsic/1.1.2:
    resolution:
      {
        integrity: sha512-Jfm3OyCxHh9DJyc28qGk+JmfkpO41A4XkneDSujN9MDXrm4oDKdHvndhZ2dN94+ERNfkYJWDclW6k2L/ZGHjXA==
      }
    dependencies:
      function-bind: 1.1.1
      has: 1.0.3
      has-symbols: 1.0.3

  /get-package-type/0.1.0:
    resolution:
      {
        integrity: sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==
      }
    engines: { node: '>=8.0.0' }

  /get-port/5.1.1:
    resolution:
      {
        integrity: sha512-g/Q1aTSDOxFpchXC4i8ZWvxA1lnPqx/JHqcpIw0/LX9T8x/GBbi6YnlN5nhaKIFkT8oFsscUKgDJYxfwfS6QsQ==
      }
    engines: { node: '>=8' }
    dev: true

  /get-stdin/4.0.1:
    resolution:
      {
        integrity: sha512-F5aQMywwJ2n85s4hJPTT9RPxGmubonuB10MNYo17/xph174n2MIR33HRguhzVag10O/npM7SPk73LMZNP+FaWw==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /get-stream/4.1.0:
    resolution:
      {
        integrity: sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==
      }
    engines: { node: '>=6' }
    dependencies:
      pump: 3.0.0
    dev: true

  /get-stream/5.2.0:
    resolution:
      {
        integrity: sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==
      }
    engines: { node: '>=8' }
    dependencies:
      pump: 3.0.0
    dev: true

  /get-stream/6.0.1:
    resolution:
      {
        integrity: sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==
      }
    engines: { node: '>=10' }

  /get-symbol-description/1.0.0:
    resolution:
      {
        integrity: sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      get-intrinsic: 1.1.2

  /get-uri/3.0.2:
    resolution:
      {
        integrity: sha512-+5s0SJbGoyiJTZZ2JTpFPLMPSch72KEqGOTvQsBqg0RBWvwhWUSYZFAtz3TPW0GXJuLBJPts1E241iHg+VRfhg==
      }
    engines: { node: '>= 6' }
    dependencies:
      '@tootallnate/once': 1.1.2
      data-uri-to-buffer: 3.0.1
      debug: 4.3.4
      file-uri-to-path: 2.0.0
      fs-extra: 8.1.0
      ftp: 0.3.10
    transitivePeerDependencies:
      - supports-color
    dev: true

  /get-value/2.0.6:
    resolution:
      {
        integrity: sha512-Ln0UQDlxH1BapMu3GPtf7CuYNwRZf2gwCuPqbyG6pB8WfmFpzqcy4xtAaAMUhnNqjMKTiCPZG2oMT3YSx8U2NA==
      }
    engines: { node: '>=0.10.0' }

  /getpass/0.1.7:
    resolution:
      {
        integrity: sha512-0fzj9JxOLfJ+XGLhR8ze3unN0KZCgZwiSSDz168VERjK8Wl8kVSdcu2kspd4s4wtAa1y/qrVRiAA0WclVsu0ng==
      }
    dependencies:
      assert-plus: 1.0.0
    dev: false

  /git-repo-info/2.1.1:
    resolution:
      {
        integrity: sha512-8aCohiDo4jwjOwma4FmYFd3i97urZulL8XL24nIPxuE+GZnfsAyy/g2Shqx6OjUiFKUXZM+Yy+KHnOmmA3FVcg==
      }
    engines: { node: '>= 4.0' }
    dev: false

  /github-slugger/1.4.0:
    resolution:
      {
        integrity: sha512-w0dzqw/nt51xMVmlaV1+JRzN+oCa1KfcgGEWhxUG16wbdA+Xnt/yoFO8Z8x/V82ZcZ0wy6ln9QDup5avbhiDhQ==
      }
    dev: true

  /glob-escape/0.0.2:
    resolution:
      {
        integrity: sha512-L/cXYz8x7qer1HAyUQ+mbjcUsJVdpRxpAf7CwqHoNBs9vTpABlGfNN4tzkDxt+u3Z7ZncVyKlCNPtzb0R/7WbA==
      }
    engines: { node: '>= 0.10' }

  /glob-parent/3.1.0:
    resolution:
      {
        integrity: sha512-E8Ak/2+dZY6fnzlR7+ueWvhsH1SjHr4jjss4YS/h4py44jY9MhK/VFdaZJAWDz6BbL21KeteKxFSFpq8OS5gVA==
      }
    dependencies:
      is-glob: 3.1.0
      path-dirname: 1.0.2

  /glob-parent/5.1.2:
    resolution:
      {
        integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==
      }
    engines: { node: '>= 6' }
    dependencies:
      is-glob: 4.0.3

  /glob-parent/6.0.2:
    resolution:
      {
        integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==
      }
    engines: { node: '>=10.13.0' }
    dependencies:
      is-glob: 4.0.3

  /glob-promise/3.4.0_glob@7.2.3:
    resolution:
      {
        integrity: sha512-q08RJ6O+eJn+dVanerAndJwIcumgbDdYiUT7zFQl3Wm1xD6fBKtah7H8ZJChj4wP+8C+QfeVy8xautR7rdmKEw==
      }
    engines: { node: '>=4' }
    peerDependencies:
      glob: '*'
    dependencies:
      '@types/glob': 7.1.1
      glob: 7.2.3
    dev: true

  /glob-to-regexp/0.3.0:
    resolution:
      {
        integrity: sha512-Iozmtbqv0noj0uDDqoL0zNq0VBEfK2YFoMAZoxJe4cwphvLR+JskfF30QhXHOR4m3KrE6NLRYw+U9MRXvifyig==
      }
    dev: true

  /glob-to-regexp/0.4.1:
    resolution:
      {
        integrity: sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==
      }

  /glob/7.0.6:
    resolution:
      {
        integrity: sha512-f8c0rE8JiCxpa52kWPAOa3ZaYEnzofDzCQLCn3Vdk0Z5OVLq3BsRFJI4S4ykpeVW6QMGBUkMeUpoEgWnMTnw5Q==
      }
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.0.8
      once: 1.4.0
      path-is-absolute: 1.0.1

  /glob/7.1.7:
    resolution:
      {
        integrity: sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==
      }
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.1.2
      once: 1.4.0
      path-is-absolute: 1.0.1
    dev: false

  /glob/7.2.3:
    resolution:
      {
        integrity: sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==
      }
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.1.2
      once: 1.4.0
      path-is-absolute: 1.0.1

  /global-dirs/3.0.0:
    resolution:
      {
        integrity: sha512-v8ho2DS5RiCjftj1nD9NmnfaOzTdud7RRnVd9kFNOjqZbISlx5DQ+OrTkywgd0dIt7oFCvKetZSHoHcP3sDdiA==
      }
    engines: { node: '>=10' }
    dependencies:
      ini: 2.0.0
    dev: true

  /global-modules/1.0.0:
    resolution:
      {
        integrity: sha512-sKzpEkf11GpOFuw0Zzjzmt4B4UZwjOcG757PPvrfhxcLFbq0wpsgpOqxpxtxFiCG4DtG93M6XRVbF2oGdev7bg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      global-prefix: 1.0.2
      is-windows: 1.0.2
      resolve-dir: 1.0.1
    dev: false

  /global-modules/2.0.0:
    resolution:
      {
        integrity: sha512-NGbfmJBp9x8IxyJSd1P+otYK8vonoJactOogrVfFRIAEY1ukil8RSKDz2Yo7wh1oihl51l/r6W4epkeKJHqL8A==
      }
    engines: { node: '>=6' }
    dependencies:
      global-prefix: 3.0.0
    dev: false

  /global-prefix/1.0.2:
    resolution:
      {
        integrity: sha512-5lsx1NUDHtSjfg0eHlmYvZKv8/nVqX4ckFbM+FrGcQ+04KWcWFo9P5MxPZYSzUvyzmdTbI7Eix8Q4IbELDqzKg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      expand-tilde: 2.0.2
      homedir-polyfill: 1.0.3
      ini: 1.3.8
      is-windows: 1.0.2
      which: 1.3.1
    dev: false

  /global-prefix/3.0.0:
    resolution:
      {
        integrity: sha512-awConJSVCHVGND6x3tmMaKcQvwXLhjdkmomy2W+Goaui8YPgYgXJZewhg3fWC+DlfqqQuWg8AwqjGTD2nAPVWg==
      }
    engines: { node: '>=6' }
    dependencies:
      ini: 1.3.8
      kind-of: 6.0.3
      which: 1.3.1
    dev: false

  /global/4.4.0:
    resolution:
      {
        integrity: sha512-wv/LAoHdRE3BeTGz53FAamhGlPLhlssK45usmGFThIi4XqnBmjKQ16u+RNbP7WvigRZDxUsM0J3gcQ5yicaL0w==
      }
    dependencies:
      min-document: 2.19.0
      process: 0.11.10
    dev: true

  /globals/11.12.0:
    resolution:
      {
        integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==
      }
    engines: { node: '>=4' }

  /globals/13.15.0:
    resolution:
      {
        integrity: sha512-bpzcOlgDhMG070Av0Vy5Owklpv1I6+j96GhUI7Rh7IzDCKLzboflLrrfqMu8NquDbiR4EOQk7XzJwqVJxicxog==
      }
    engines: { node: '>=8' }
    dependencies:
      type-fest: 0.20.2

  /globalthis/1.0.3:
    resolution:
      {
        integrity: sha512-sFdI5LyBiNTHjRd7cGPWapiHWMOXKyuBNX/cWJ3NfzrZQVa8GI/8cofCl74AOVqq9W5kNmguTIzJ/1s2gyI9wA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      define-properties: 1.1.4
    dev: true

  /globby/11.1.0:
    resolution:
      {
        integrity: sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==
      }
    engines: { node: '>=10' }
    dependencies:
      array-union: 2.1.0
      dir-glob: 3.0.1
      fast-glob: 3.2.11
      ignore: 5.2.0
      merge2: 1.4.1
      slash: 3.0.0

  /globby/9.2.0:
    resolution:
      {
        integrity: sha512-ollPHROa5mcxDEkwg6bPt3QbEf4pDQSNtd6JPL1YvOvAo/7/0VAm9TccUeoTmarjPw4pfUthSCqcyfNB1I3ZSg==
      }
    engines: { node: '>=6' }
    dependencies:
      '@types/glob': 7.1.1
      array-union: 1.0.2
      dir-glob: 2.2.2
      fast-glob: 2.2.7
      glob: 7.2.3
      ignore: 4.0.6
      pify: 4.0.1
      slash: 2.0.0
    dev: true

  /globule/1.3.3:
    resolution:
      {
        integrity: sha512-mb1aYtDbIjTu4ShMB85m3UzjX9BVKe9WCzsnfMSZk+K5GpIbBOexgg4PPCt5eHDEG5/ZQAUX2Kct02zfiPLsKg==
      }
    engines: { node: '>= 0.10' }
    dependencies:
      glob: 7.1.7
      lodash: 4.17.21
      minimatch: 3.0.8
    dev: false

  /got/9.6.0:
    resolution:
      {
        integrity: sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==
      }
    engines: { node: '>=8.6' }
    dependencies:
      '@sindresorhus/is': 0.14.0
      '@szmarczak/http-timer': 1.1.2
      cacheable-request: 6.1.0
      decompress-response: 3.3.0
      duplexer3: 0.1.4
      get-stream: 4.1.0
      lowercase-keys: 1.0.1
      mimic-response: 1.0.1
      p-cancelable: 1.1.0
      to-readable-stream: 1.0.0
      url-parse-lax: 3.0.0
    dev: true

  /graceful-fs/4.2.10:
    resolution:
      {
        integrity: sha512-9ByhssR2fPVsNZj478qUUbKfmL0+t5BDVyjShtyZZLiK7ZDAArFFfopyOTj0M05wE2tJPisA4iTnnXl2YoPvOA==
      }

  /graceful-fs/4.2.4:
    resolution:
      {
        integrity: sha512-WjKPNJF79dtJAVniUlGGWHYGz2jWxT6VhN/4m1NdkbZ2nOsEF+cI1Edgql5zCRhs/VsQYRvrXctxktVXZUkixw==
      }
    dev: false

  /graphql/15.8.0:
    resolution:
      {
        integrity: sha512-5gghUc24tP9HRznNpV2+FIoq3xKkj5dTQqf4v0CpdPbFVwFkWoxOM+o+2OC9ZSvjEMTjfmG9QT+gcvggTwW1zw==
      }
    engines: { node: '>= 10.x' }
    dev: true

  /gzip-size/6.0.0:
    resolution:
      {
        integrity: sha512-ax7ZYomf6jqPTQ4+XCpUGyXKHk5WweS+e05MBO4/y3WJ5RkmPXNKvX+bx1behVILVwr6JSQvZAku021CHPXG3Q==
      }
    engines: { node: '>=10' }
    dependencies:
      duplexer: 0.1.2

  /handle-thing/2.0.1:
    resolution:
      {
        integrity: sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg==
      }

  /handlebars/4.7.7:
    resolution:
      {
        integrity: sha512-aAcXm5OAfE/8IXkcZvCepKU3VzW1/39Fb5ZuqMtgI/hT8X2YgoMvBY5dLhq/cpOvw7Lk1nK/UF71aLG/ZnVYRA==
      }
    engines: { node: '>=0.4.7' }
    hasBin: true
    dependencies:
      minimist: 1.2.6
      neo-async: 2.6.2
      source-map: 0.6.1
      wordwrap: 1.0.0
    optionalDependencies:
      uglify-js: 3.16.0
    dev: true

  /har-schema/2.0.0:
    resolution:
      {
        integrity: sha512-Oqluz6zhGX8cyRaTQlFMPw80bSJVG2x/cFb8ZPhUILGgHka9SsokCCOQgpveePerqidZOrT14ipqfJb7ILcW5Q==
      }
    engines: { node: '>=4' }
    dev: false

  /har-validator/5.1.5:
    resolution:
      {
        integrity: sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==
      }
    engines: { node: '>=6' }
    deprecated: this library is no longer supported
    dependencies:
      ajv: 6.12.6
      har-schema: 2.0.0
    dev: false

  /hard-rejection/2.1.0:
    resolution:
      {
        integrity: sha512-VIZB+ibDhx7ObhAe7OVtoEbuP4h/MuOTHJ+J8h/eBXotJYl0fBgR72xDFCKgIh22OJZIOVNxBMWuhAr10r8HdA==
      }
    engines: { node: '>=6' }
    dev: false

  /has-ansi/2.0.0:
    resolution:
      {
        integrity: sha512-C8vBJ8DwUCx19vhm7urhTuUsr4/IyP6l4VzNQDv+ryHQObW3TTTp9yB68WpYgRe2bbaGuZ/se74IqFeVnMnLZg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      ansi-regex: 2.1.1
    dev: false

  /has-bigints/1.0.2:
    resolution:
      {
        integrity: sha512-tSvCKtBr9lkF0Ex0aQiP9N+OpV4zi2r/Nee5VkRDbaqv35RLYMzbwQfFSZZH0kR+Rd6302UJZ2p/bJCEoR3VoQ==
      }

  /has-flag/1.0.0:
    resolution:
      {
        integrity: sha512-DyYHfIYwAJmjAjSSPKANxI8bFY9YtFrgkAfinBojQ8YJTOuOuav64tMUJv584SES4xl74PmuaevIyaLESHdTAA==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /has-flag/3.0.0:
    resolution:
      {
        integrity: sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==
      }
    engines: { node: '>=4' }

  /has-flag/4.0.0:
    resolution:
      {
        integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==
      }
    engines: { node: '>=8' }

  /has-glob/1.0.0:
    resolution:
      {
        integrity: sha512-D+8A457fBShSEI3tFCj65PAbT++5sKiFtdCdOam0gnfBgw9D277OERk+HM9qYJXmdVLZ/znez10SqHN0BBQ50g==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-glob: 3.1.0
    dev: true

  /has-property-descriptors/1.0.0:
    resolution:
      {
        integrity: sha512-62DVLZGoiEBDHQyqG4w9xCuZ7eJEwNmJRWw2VY84Oedb7WFcA27fiEVe8oUQx9hAUJ4ekurquucTGwsyO1XGdQ==
      }
    dependencies:
      get-intrinsic: 1.1.2

  /has-symbols/1.0.3:
    resolution:
      {
        integrity: sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==
      }
    engines: { node: '>= 0.4' }

  /has-tostringtag/1.0.0:
    resolution:
      {
        integrity: sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      has-symbols: 1.0.3

  /has-unicode/2.0.1:
    resolution:
      {
        integrity: sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==
      }

  /has-value/0.3.1:
    resolution:
      {
        integrity: sha512-gpG936j8/MzaeID5Yif+577c17TxaDmhuyVgSwtnL/q8UUTySg8Mecb+8Cf1otgLoD7DDH75axp86ER7LFsf3Q==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      get-value: 2.0.6
      has-values: 0.1.4
      isobject: 2.1.0

  /has-value/1.0.0:
    resolution:
      {
        integrity: sha512-IBXk4GTsLYdQ7Rvt+GRBrFSVEkmuOUy4re0Xjd9kJSUQpnTrWR4/y9RpfexN9vkAPMFuQoeWKwqzPozRTlasGw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      get-value: 2.0.6
      has-values: 1.0.0
      isobject: 3.0.1

  /has-values/0.1.4:
    resolution:
      {
        integrity: sha512-J8S0cEdWuQbqD9//tlZxiMuMNmxB8PlEwvYwuxsTmR1G5RXUePEX/SJn7aD0GMLieuZYSwNH0cQuJGwnYunXRQ==
      }
    engines: { node: '>=0.10.0' }

  /has-values/1.0.0:
    resolution:
      {
        integrity: sha512-ODYZC64uqzmtfGMEAX/FvZiRyWLpAC3vYnNunURUnkGVTS+mI0smVsWaPydRBsE3g+ok7h960jChO8mFcWlHaQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-number: 3.0.0
      kind-of: 4.0.0

  /has-yarn/2.1.0:
    resolution:
      {
        integrity: sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw==
      }
    engines: { node: '>=8' }
    dev: true

  /has/1.0.3:
    resolution:
      {
        integrity: sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==
      }
    engines: { node: '>= 0.4.0' }
    dependencies:
      function-bind: 1.1.1

  /hash-base/3.1.0:
    resolution:
      {
        integrity: sha512-1nmYp/rhMDiE7AYkDw+lLwlAzz0AntGIe51F3RfFfEqyQ3feY2eI/NcwC6umIQVOASPMsWJLJScWKSSvzL9IVA==
      }
    engines: { node: '>=4' }
    dependencies:
      inherits: 2.0.4
      readable-stream: 3.6.0
      safe-buffer: 5.2.1

  /hash.js/1.1.7:
    resolution:
      {
        integrity: sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==
      }
    dependencies:
      inherits: 2.0.4
      minimalistic-assert: 1.0.1

  /hast-to-hyperscript/9.0.1:
    resolution:
      {
        integrity: sha512-zQgLKqF+O2F72S1aa4y2ivxzSlko3MAvxkwG8ehGmNiqd98BIN3JM1rAJPmplEyLmGLO2QZYJtIneOSZ2YbJuA==
      }
    dependencies:
      '@types/unist': 2.0.6
      comma-separated-tokens: 1.0.8
      property-information: 5.6.0
      space-separated-tokens: 1.1.5
      style-to-object: 0.3.0
      unist-util-is: 4.1.0
      web-namespaces: 1.1.4
    dev: true

  /hast-util-from-parse5/6.0.1:
    resolution:
      {
        integrity: sha512-jeJUWiN5pSxW12Rh01smtVkZgZr33wBokLzKLwinYOUfSzm1Nl/c3GUGebDyOKjdsRgMvoVbV0VpAcpjF4NrJA==
      }
    dependencies:
      '@types/parse5': 5.0.3
      hastscript: 6.0.0
      property-information: 5.6.0
      vfile: 4.2.1
      vfile-location: 3.2.0
      web-namespaces: 1.1.4
    dev: true

  /hast-util-parse-selector/2.2.5:
    resolution:
      {
        integrity: sha512-7j6mrk/qqkSehsM92wQjdIgWM2/BW61u/53G6xmC8i1OmEdKLHbk419QKQUjz6LglWsfqoiHmyMRkP1BGjecNQ==
      }
    dev: true

  /hast-util-raw/6.0.1:
    resolution:
      {
        integrity: sha512-ZMuiYA+UF7BXBtsTBNcLBF5HzXzkyE6MLzJnL605LKE8GJylNjGc4jjxazAHUtcwT5/CEt6afRKViYB4X66dig==
      }
    dependencies:
      '@types/hast': 2.3.4
      hast-util-from-parse5: 6.0.1
      hast-util-to-parse5: 6.0.0
      html-void-elements: 1.0.5
      parse5: 6.0.1
      unist-util-position: 3.1.0
      vfile: 4.2.1
      web-namespaces: 1.1.4
      xtend: 4.0.2
      zwitch: 1.0.5
    dev: true

  /hast-util-to-parse5/6.0.0:
    resolution:
      {
        integrity: sha512-Lu5m6Lgm/fWuz8eWnrKezHtVY83JeRGaNQ2kn9aJgqaxvVkFCZQBEhgodZUDUvoodgyROHDb3r5IxAEdl6suJQ==
      }
    dependencies:
      hast-to-hyperscript: 9.0.1
      property-information: 5.6.0
      web-namespaces: 1.1.4
      xtend: 4.0.2
      zwitch: 1.0.5
    dev: true

  /hastscript/6.0.0:
    resolution:
      {
        integrity: sha512-nDM6bvd7lIqDUiYEiu5Sl/+6ReP0BMk/2f4U/Rooccxkj0P5nm+acM5PrGJ/t5I8qPGiqZSE6hVAwZEdZIvP4w==
      }
    dependencies:
      '@types/hast': 2.3.4
      comma-separated-tokens: 1.0.8
      hast-util-parse-selector: 2.2.5
      property-information: 5.6.0
      space-separated-tokens: 1.1.5
    dev: true

  /he/1.2.0:
    resolution:
      {
        integrity: sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==
      }
    hasBin: true

  /heap/0.2.7:
    resolution:
      {
        integrity: sha512-2bsegYkkHO+h/9MGbn6KWcE45cHZgPANo5LXF7EvWdT0yT2EguSVO1nDgU5c8+ZOPwp2vMNa7YFsJhVcDR9Sdg==
      }
    dev: true

  /highlight.js/10.7.3:
    resolution:
      {
        integrity: sha512-tzcUFauisWKNHaRkN4Wjl/ZA07gENAjFl3J/c480dprkGTg5EQstgaNFqBfUqCq54kZRIEcreTsAgF/m2quD7A==
      }
    dev: true

  /history/5.0.0:
    resolution:
      {
        integrity: sha512-3NyRMKIiFSJmIPdq7FxkNMJkQ7ZEtVblOQ38VtKaA0zZMW1Eo6Q6W8oDKEflr1kNNTItSnk4JMCO1deeSgbLLg==
      }
    dependencies:
      '@babel/runtime': 7.18.3
    dev: true

  /history/5.3.0:
    resolution:
      {
        integrity: sha512-ZqaKwjjrAYUYfLG+htGaIIZ4nioX2L70ZUMIFysS3xvBsSG4x/n1V6TXV3N8ZYNuFGlDirFg32T7B6WOUPDYcQ==
      }
    dependencies:
      '@babel/runtime': 7.18.3
    dev: true

  /hmac-drbg/1.0.1:
    resolution:
      {
        integrity: sha512-Tti3gMqLdZfhOQY1Mzf/AanLiqh1WTiJgEj26ZuYQ9fbkLomzGchCws4FyrSd4VkpBfiNhaE1On+lOz894jvXg==
      }
    dependencies:
      hash.js: 1.1.7
      minimalistic-assert: 1.0.1
      minimalistic-crypto-utils: 1.0.1

  /hoist-non-react-statics/3.3.2:
    resolution:
      {
        integrity: sha512-/gGivxi8JPKWNm/W0jSmzcMPpfpPLc3dY/6GxhX2hQ9iGj3aDfklV4ET7NjKpSinLpJ5vafa9iiGIEZg10SfBw==
      }
    dependencies:
      react-is: 16.13.1
    dev: true

  /homedir-polyfill/1.0.3:
    resolution:
      {
        integrity: sha512-eSmmWE5bZTK2Nou4g0AI3zZ9rswp7GRKoKXS1BLUkvPviOqs4YTN1djQIqrXy9k5gEtdLPy86JjRwsNM9tnDcA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      parse-passwd: 1.0.0
    dev: false

  /hosted-git-info/2.8.9:
    resolution:
      {
        integrity: sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==
      }

  /hosted-git-info/4.1.0:
    resolution:
      {
        integrity: sha512-kyCuEOWjJqZuDbRHzL8V93NzQhwIB71oFWSyzVo+KPZI+pnQPPxucdkrOZvkLRnrf5URsQM+IJ09Dw29cRALIA==
      }
    engines: { node: '>=10' }
    dependencies:
      lru-cache: 6.0.0
    dev: false

  /hpack.js/2.1.6:
    resolution:
      {
        integrity: sha512-zJxVehUdMGIKsRaNt7apO2Gqp0BdqW5yaiGHXXmbpvxgBYVZnAql+BJb4RO5ad2MgpbZKn5G6nMnegrH1FcNYQ==
      }
    dependencies:
      inherits: 2.0.4
      obuf: 1.1.2
      readable-stream: 2.3.7
      wbuf: 1.7.3

  /html-encoding-sniffer/2.0.1:
    resolution:
      {
        integrity: sha512-D5JbOMBIR/TVZkubHT+OyT2705QvogUW4IBn6nHd756OwieSF9aDYFj4dv6HHEVGYbHaLETa3WggZYWWMyy3ZQ==
      }
    engines: { node: '>=10' }
    dependencies:
      whatwg-encoding: 1.0.5

  /html-entities/2.3.3:
    resolution:
      {
        integrity: sha512-DV5Ln36z34NNTDgnz0EWGBLZENelNAtkiFA4kyNOG2tDI6Mz1uSWiq1wAKdyjnJwyDiDO7Fa2SO1CTxPXL8VxA==
      }

  /html-escaper/2.0.2:
    resolution:
      {
        integrity: sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==
      }

  /html-minifier-terser/5.1.1:
    resolution:
      {
        integrity: sha512-ZPr5MNObqnV/T9akshPKbVgyOqLmy+Bxo7juKCfTfnjNniTAMdy4hz21YQqoofMBJD2kdREaqPPdThoR78Tgxg==
      }
    engines: { node: '>=6' }
    hasBin: true
    dependencies:
      camel-case: 4.1.2
      clean-css: 4.2.4
      commander: 4.1.1
      he: 1.2.0
      param-case: 3.0.4
      relateurl: 0.2.7
      terser: 4.8.0

  /html-minifier-terser/6.1.0:
    resolution:
      {
        integrity: sha512-YXxSlJBZTP7RS3tWnQw74ooKa6L9b9i9QYXY21eUEvhZ3u9XLfv6OnFsQq6RxkhHygsaUMvYsZRV5rU/OVNZxw==
      }
    engines: { node: '>=12' }
    hasBin: true
    dependencies:
      camel-case: 4.1.2
      clean-css: 5.3.0
      commander: 8.3.0
      he: 1.2.0
      param-case: 3.0.4
      relateurl: 0.2.7
      terser: 5.14.1

  /html-tags/3.2.0:
    resolution:
      {
        integrity: sha512-vy7ClnArOZwCnqZgvv+ddgHgJiAFXe3Ge9ML5/mBctVJoUoYPCdxVucOywjDARn6CVoh3dRSFdPHy2sX80L0Wg==
      }
    engines: { node: '>=8' }
    dev: true

  /html-void-elements/1.0.5:
    resolution:
      {
        integrity: sha512-uE/TxKuyNIcx44cIWnjr/rfIATDH7ZaOMmstu0CwhFG1Dunhlp4OC6/NMbhiwoq5BpW0ubi303qnEk/PZj614w==
      }
    dev: true

  /html-webpack-plugin/4.5.2_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-q5oYdzjKUIPQVjOosjgvCHQOv9Ett9CYYHlgvJeXG0qQvdSojnBq4vAdQBwn1+yGveAwHCoe/rMR86ozX3+c2A==
      }
    engines: { node: '>=6.9' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      '@types/html-minifier-terser': 5.1.2
      '@types/tapable': 1.0.6
      '@types/webpack': 4.41.32
      html-minifier-terser: 5.1.1
      loader-utils: 1.4.0
      lodash: 4.17.21
      pretty-error: 2.1.2
      tapable: 1.1.3
      util.promisify: 1.0.0
      webpack: 4.44.2

  /html-webpack-plugin/4.5.2_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-q5oYdzjKUIPQVjOosjgvCHQOv9Ett9CYYHlgvJeXG0qQvdSojnBq4vAdQBwn1+yGveAwHCoe/rMR86ozX3+c2A==
      }
    engines: { node: '>=6.9' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      '@types/html-minifier-terser': 5.1.2
      '@types/tapable': 1.0.6
      '@types/webpack': 4.41.32
      html-minifier-terser: 5.1.1
      loader-utils: 1.4.0
      lodash: 4.17.21
      pretty-error: 2.1.2
      tapable: 1.1.3
      util.promisify: 1.0.0
      webpack: 5.68.0
    dev: true

  /html-webpack-plugin/5.5.0_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-sy88PC2cRTVxvETRgUHFrL4No3UxvcH8G1NepGhqaTT+GXN2kTamqasot0inS5hXeg1cMbFDt27zzo9p35lZVw==
      }
    engines: { node: '>=10.13.0' }
    peerDependencies:
      webpack: ^5.20.0
    dependencies:
      '@types/html-minifier-terser': 6.1.0
      html-minifier-terser: 6.1.0
      lodash: 4.17.21
      pretty-error: 4.0.0
      tapable: 2.2.1
      webpack: 5.68.0

  /htmlparser2/6.1.0:
    resolution:
      {
        integrity: sha512-gyyPk6rgonLFEDGoeRgQNaEUvdJ4ktTmmUh/h2t7s+M8oPpIPxgNACWa+6ESR57kXstwqPiCut0V8NRpcwgU7A==
      }
    dependencies:
      domelementtype: 2.3.0
      domhandler: 4.3.1
      domutils: 2.8.0
      entities: 2.2.0

  /http-cache-semantics/4.1.0:
    resolution:
      {
        integrity: sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ==
      }
    dev: true

  /http-deceiver/1.2.7:
    resolution:
      {
        integrity: sha512-LmpOGxTfbpgtGVxJrj5k7asXHCgNZp5nLfp+hWc8QQRqtb7fUy6kRY3BO1h9ddF6yIPYUARgxGOwB42DnxIaNw==
      }

  /http-errors/1.6.3:
    resolution:
      {
        integrity: sha512-lks+lVC8dgGyh97jxvxeYTWQFvh4uw4yC12gVl63Cg30sjPX4wuGcdkICVXDAESr6OJGjqGA8Iz5mkeN6zlD7A==
      }
    engines: { node: '>= 0.6' }
    dependencies:
      depd: 1.1.2
      inherits: 2.0.3
      setprototypeof: 1.1.0
      statuses: 1.5.0

  /http-errors/2.0.0:
    resolution:
      {
        integrity: sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==
      }
    engines: { node: '>= 0.8' }
    dependencies:
      depd: 2.0.0
      inherits: 2.0.4
      setprototypeof: 1.2.0
      statuses: 2.0.1
      toidentifier: 1.0.1

  /http-parser-js/0.5.6:
    resolution:
      {
        integrity: sha512-vDlkRPDJn93swjcjqMSaGSPABbIarsr1TLAui/gLDXzV5VsJNdXNzMYDyNBLQkjWQCJ1uizu8T2oDMhmGt0PRA==
      }

  /http-proxy-agent/4.0.1:
    resolution:
      {
        integrity: sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==
      }
    engines: { node: '>= 6' }
    dependencies:
      '@tootallnate/once': 1.1.2
      agent-base: 6.0.2
      debug: 4.3.4
    transitivePeerDependencies:
      - supports-color

  /http-proxy-agent/5.0.0:
    resolution:
      {
        integrity: sha512-n2hY8YdoRE1i7r6M0w9DIw5GgZN0G25P8zLCRQ8rjXtTU3vsNFBI/vWK/UIeE6g5MUUz6avwAPXmL6Fy9D/90w==
      }
    engines: { node: '>= 6' }
    dependencies:
      '@tootallnate/once': 2.0.0
      agent-base: 6.0.2
      debug: 4.3.4
    transitivePeerDependencies:
      - supports-color
    dev: false

  /http-proxy-middleware/2.0.6:
    resolution:
      {
        integrity: sha512-ya/UeJ6HVBYxrgYotAZo1KvPWlgB48kUJLDePFeneHsVujFaW5WNj2NgWCAE//B1Dl02BIfYlpNgBy8Kf8Rjmw==
      }
    engines: { node: '>=12.0.0' }
    peerDependenciesMeta:
      '@types/express':
        optional: true
    dependencies:
      '@types/express': 4.17.13
      '@types/http-proxy': 1.17.9
      http-proxy: 1.18.1
      is-glob: 4.0.3
      is-plain-obj: 3.0.0
      micromatch: 4.0.5
    transitivePeerDependencies:
      - debug

  /http-proxy/1.18.1:
    resolution:
      {
        integrity: sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==
      }
    engines: { node: '>=8.0.0' }
    dependencies:
      eventemitter3: 4.0.7
      follow-redirects: 1.15.1
      requires-port: 1.0.0
    transitivePeerDependencies:
      - debug

  /http-signature/1.2.0:
    resolution:
      {
        integrity: sha512-CAbnr6Rz4CYQkLYUtSNXxQPUH2gK8f3iWexVlsnMeD+GjlsQ0Xsy1cOX+mN3dtxYomRy21CiOzU8Uhw6OwncEQ==
      }
    engines: { node: '>=0.8', npm: '>=1.3.7' }
    dependencies:
      assert-plus: 1.0.0
      jsprim: 1.4.2
      sshpk: 1.17.0
    dev: false

  /https-browserify/1.0.0:
    resolution:
      {
        integrity: sha512-J+FkSdyD+0mA0N+81tMotaRMfSL9SGi+xpD3T6YApKsc3bGSXJlfXri3VyFOeYkfLRQisDk1W+jIFFKBeUBbBg==
      }

  /https-proxy-agent/4.0.0:
    resolution:
      {
        integrity: sha512-zoDhWrkR3of1l9QAL8/scJZyLu8j/gBkcwcaQOZh7Gyh/+uJQzGVETdgT30akuwkpL8HTRfssqI3BZuV18teDg==
      }
    engines: { node: '>= 6.0.0' }
    dependencies:
      agent-base: 5.1.1
      debug: 4.3.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /https-proxy-agent/5.0.1:
    resolution:
      {
        integrity: sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==
      }
    engines: { node: '>= 6' }
    dependencies:
      agent-base: 6.0.2
      debug: 4.3.4
    transitivePeerDependencies:
      - supports-color

  /human-signals/2.1.0:
    resolution:
      {
        integrity: sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==
      }
    engines: { node: '>=10.17.0' }

  /humanize-ms/1.2.1:
    resolution:
      {
        integrity: sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==
      }
    dependencies:
      ms: 2.1.3
    dev: true

  /iconv-lite/0.4.24:
    resolution:
      {
        integrity: sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      safer-buffer: 2.1.2

  /iconv-lite/0.6.3:
    resolution:
      {
        integrity: sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      safer-buffer: 2.1.2

  /icss-replace-symbols/1.1.0:
    resolution:
      {
        integrity: sha512-chIaY3Vh2mh2Q3RGXttaDIzeiPvaVXJ+C4DAh/w3c37SKZ/U6PGMmuicR2EQQp9bKG8zLMCl7I+PtIoOOPp8Gg==
      }
    dev: false

  /icss-utils/4.1.1:
    resolution:
      {
        integrity: sha512-4aFq7wvWyMHKgxsH8QQtGpvbASCf+eM3wPRLI6R+MgAnTCZ6STYsRvttLvRWK0Nfif5piF394St3HeJDaljGPA==
      }
    engines: { node: '>= 6' }
    dependencies:
      postcss: 7.0.39
    dev: true

  /icss-utils/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-soFhflCVWLfRNOPU3iv5Z9VUdT44xFRbzjLsEzSr5AQmgqPMTHdU3PMT1Cf1ssx8fLNJDA1juftYl+PUcv3MqA==
      }
    engines: { node: ^10 || ^12 || >= 14 }
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      postcss: 8.4.14

  /ieee754/1.1.13:
    resolution:
      {
        integrity: sha512-4vf7I2LYV/HaWerSo3XmlMkp5eZ83i+/CDluXi/IGTs/O1sejBNhTtnxzmRZfvOUqj7lZjqHkeTvpgSFDlWZTg==
      }
    dev: true

  /ieee754/1.2.1:
    resolution:
      {
        integrity: sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==
      }

  /iferr/0.1.5:
    resolution:
      {
        integrity: sha512-DUNFN5j7Tln0D+TxzloUjKB+CtVu6myn0JEFak6dG18mNt9YkQ6lzGCdafwofISZ1lLF3xRHJ98VKy9ynkcFaA==
      }

  /ignore-by-default/1.0.1:
    resolution:
      {
        integrity: sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==
      }
    dev: true

  /ignore-walk/3.0.4:
    resolution:
      {
        integrity: sha512-PY6Ii8o1jMRA1z4F2hRkH/xN59ox43DavKvD3oDpfurRlOJyAHpifIwpbdv1n4jt4ov0jSpw3kQ4GhJnpBL6WQ==
      }
    dependencies:
      minimatch: 3.1.2
    dev: false

  /ignore/4.0.6:
    resolution:
      {
        integrity: sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==
      }
    engines: { node: '>= 4' }
    dev: true

  /ignore/5.1.9:
    resolution:
      {
        integrity: sha512-2zeMQpbKz5dhZ9IwL0gbxSW5w0NK/MSAMtNuhgIHEPmaU3vPdKPL0UdvUCXs5SS4JAwsBxysK5sFMW8ocFiVjQ==
      }
    engines: { node: '>= 4' }
    dev: false

  /ignore/5.2.0:
    resolution:
      {
        integrity: sha512-CmxgYGiEPCLhfLnpPp1MoRmifwEIOgjcHXxOBjv7mY96c+eWScsOP9c112ZyLdWHi0FxHjI+4uVhKYp/gcdRmQ==
      }
    engines: { node: '>= 4' }

  /immediate/3.0.6:
    resolution:
      {
        integrity: sha512-XXOFtyqDjNDAQxVfYxuF7g9Il/IbWmmlQg2MYKOH8ExIT1qg6xc4zyS3HaEEATgs1btfzxq15ciUiY7gjSXRGQ==
      }
    dev: false

  /immer/9.0.15:
    resolution:
      {
        integrity: sha512-2eB/sswms9AEUSkOm4SbV5Y7Vmt/bKRwByd52jfLkW4OLYeaTP3EEiJ9agqU0O/tq6Dk62Zfj+TJSqfm1rLVGQ==
      }
    dev: true

  /immutable/4.1.0:
    resolution:
      {
        integrity: sha512-oNkuqVTA8jqG1Q6c+UglTOD1xhC1BtjKI7XkCXRkZHrN5m18/XsnUp8Q89GkQO/z+0WjonSvl0FLhDYftp46nQ==
      }
    dev: false

  /import-fresh/3.3.0:
    resolution:
      {
        integrity: sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==
      }
    engines: { node: '>=6' }
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  /import-lazy/2.1.0:
    resolution:
      {
        integrity: sha512-m7ZEHgtw69qOGw+jwxXkHlrlIPdTGkyh66zXZ1ajZbxkDBNjSY/LGbmjc7h0s2ELsUDTAhFr55TrPSSqJGPG0A==
      }
    engines: { node: '>=4' }
    dev: true

  /import-lazy/4.0.0:
    resolution:
      {
        integrity: sha512-rKtvo6a868b5Hu3heneU+L4yEQ4jYKLtjpnPeUdK7h0yzXGmyBTypknlkCvHFBqfX9YlorEiMM6Dnq/5atfHkw==
      }
    engines: { node: '>=8' }

  /import-local/2.0.0:
    resolution:
      {
        integrity: sha512-b6s04m3O+s3CGSbqDIyP4R6aAwAeYlVq9+WUWep6iHa8ETRf9yei1U48C5MmfJmV9AiLYYBKPMq/W+/WRpQmCQ==
      }
    engines: { node: '>=6' }
    hasBin: true
    dependencies:
      pkg-dir: 3.0.0
      resolve-cwd: 2.0.0
    dev: false

  /import-local/3.1.0:
    resolution:
      {
        integrity: sha512-ASB07uLtnDs1o6EHjKpX34BKYDSqnFerfTOJL2HvMqF70LnxpjkzDB8J44oT9pu4AMPkQwf8jl6szgvNd2tRIg==
      }
    engines: { node: '>=8' }
    hasBin: true
    dependencies:
      pkg-dir: 4.2.0
      resolve-cwd: 3.0.0
    dev: true

  /imurmurhash/0.1.4:
    resolution:
      {
        integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==
      }
    engines: { node: '>=0.8.19' }

  /indent-string/4.0.0:
    resolution:
      {
        integrity: sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==
      }
    engines: { node: '>=8' }

  /individual/3.0.0:
    resolution:
      {
        integrity: sha512-rUY5vtT748NMRbEMrTNiFfy29BgGZwGXUi2NFUVMWQrogSLzlJvQV9eeMWi+g1aVaQ53tpyLAQtd5x/JH0Nh1g==
      }
    dev: true

  /infer-owner/1.0.4:
    resolution:
      {
        integrity: sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A==
      }

  /inflight/1.0.6:
    resolution:
      {
        integrity: sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==
      }
    dependencies:
      once: 1.4.0
      wrappy: 1.0.2

  /inherits/2.0.1:
    resolution:
      {
        integrity: sha512-8nWq2nLTAwd02jTqJExUYFSD/fKq6VH9Y/oG2accc/kdI0V98Bag8d5a4gi3XHz73rDWa2PvTtvcWYquKqSENA==
      }

  /inherits/2.0.3:
    resolution:
      {
        integrity: sha512-x00IRNXNy63jwGkJmzPigoySHbaqpNuzKbBOmzK+g2OdZpQ9w+sxCN+VSB3ja7IAge2OP2qpfxTjeNcyjmW1uw==
      }

  /inherits/2.0.4:
    resolution:
      {
        integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==
      }

  /ini/1.3.8:
    resolution:
      {
        integrity: sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==
      }

  /ini/2.0.0:
    resolution:
      {
        integrity: sha512-7PnF4oN3CvZF23ADhA5wRaYEQpJ8qygSkbtTXWBeXWXmEVRXK+1ITciHWwHhsjv1TmW0MgacIv6hEi5pX5NQdA==
      }
    engines: { node: '>=10' }
    dev: true

  /inline-style-parser/0.1.1:
    resolution:
      {
        integrity: sha512-7NXolsK4CAS5+xvdj5OMMbI962hU/wvwoxk+LWR9Ek9bVtyuuYScDN6eS0rUm6TxApFpw7CX1o4uJzcd4AyD3Q==
      }
    dev: true

  /inpath/1.0.2:
    resolution:
      {
        integrity: sha512-DTt55ovuYFC62a8oJxRjV2MmTPUdxN43Gd8I2ZgawxbAha6PvJkDQy/RbZGFCJF5IXrpp4PAYtW1w3aV7jXkew==
      }
    dev: false

  /inquirer/7.3.3:
    resolution:
      {
        integrity: sha512-JG3eIAj5V9CwcGvuOmoo6LB9kbAYT8HXffUl6memuszlwDC/qvFAJw49XJ5NROSFNPxp3iQg1GqkFhaY/CR0IA==
      }
    engines: { node: '>=8.0.0' }
    dependencies:
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      cli-cursor: 3.1.0
      cli-width: 3.0.0
      external-editor: 3.1.0
      figures: 3.2.0
      lodash: 4.17.21
      mute-stream: 0.0.8
      run-async: 2.4.1
      rxjs: 6.6.7
      string-width: 4.2.3
      strip-ansi: 6.0.1
      through: 2.3.8
    dev: false

  /internal-slot/1.0.3:
    resolution:
      {
        integrity: sha512-O0DB1JC/sPyZl7cIo78n5dR7eUSwwpYPiXRhTzNxZVAMUuB8vlnRFyLxdrVToks6XPLVnFfbzaVd5WLjhgg+vA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      get-intrinsic: 1.1.2
      has: 1.0.3
      side-channel: 1.0.4

  /interpret/1.4.0:
    resolution:
      {
        integrity: sha512-agE4QfB2Lkp9uICn7BAqoscw4SZP9kTE2hxiFI3jBPmXJfdqiahTbUuKGsMoN2GtqL9AxhYioAcVvgsb1HvRbA==
      }
    engines: { node: '>= 0.10' }

  /interpret/2.2.0:
    resolution:
      {
        integrity: sha512-Ju0Bz/cEia55xDwUWEa8+olFpCiQoypjnQySseKtmjNrnps3P+xfpUmGr90T7yjlVJmOtybRvPXhKMbHr+fWnw==
      }
    engines: { node: '>= 0.10' }
    dev: true

  /invariant/2.2.4:
    resolution:
      {
        integrity: sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==
      }
    dependencies:
      loose-envify: 1.4.0
    dev: true

  /ip/1.1.8:
    resolution:
      {
        integrity: sha512-PuExPYUiu6qMBQb4l06ecm6T6ujzhmh+MeJcW9wa89PoAz5pvd4zPgN5WJV104mb6S2T1AwNIAaB70JNrLQWhg==
      }
    dev: true

  /ipaddr.js/1.9.1:
    resolution:
      {
        integrity: sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==
      }
    engines: { node: '>= 0.10' }

  /ipaddr.js/2.0.1:
    resolution:
      {
        integrity: sha512-1qTgH9NG+IIJ4yfKs2e6Pp1bZg8wbDbKHT21HrLIeYBTRLgMYKnMTPAuI3Lcs61nfx5h1xlXnbJtH1kX5/d/ng==
      }
    engines: { node: '>= 10' }

  /is-absolute-url/3.0.3:
    resolution:
      {
        integrity: sha512-opmNIX7uFnS96NtPmhWQgQx6/NYFgsUXYMllcfzwWKUMwfo8kku1TvE6hkNcH+Q1ts5cMVrsY7j0bxXQDciu9Q==
      }
    engines: { node: '>=8' }
    dev: true

  /is-accessor-descriptor/0.1.6:
    resolution:
      {
        integrity: sha512-e1BM1qnDbMRG3ll2U9dSK0UMHuWOs3pY3AtcFsmvwPtKL3MML/Q86i+GilLfvqEs4GW+ExB91tQ3Ig9noDIZ+A==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      kind-of: 3.2.2

  /is-accessor-descriptor/1.0.0:
    resolution:
      {
        integrity: sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      kind-of: 6.0.3

  /is-alphabetical/1.0.4:
    resolution:
      {
        integrity: sha512-DwzsA04LQ10FHTZuL0/grVDk4rFoVH1pjAToYwBrHSxcrBIGQuXrQMtD5U1b0U2XVgKZCTLLP8u2Qxqhy3l2Vg==
      }
    dev: true

  /is-alphanumerical/1.0.4:
    resolution:
      {
        integrity: sha512-UzoZUr+XfVz3t3v4KyGEniVL9BDRoQtY7tOyrRybkVNjDFWyo1yhXNGrrBTQxp3ib9BLAWs7k2YKBQsFRkZG9A==
      }
    dependencies:
      is-alphabetical: 1.0.4
      is-decimal: 1.0.4
    dev: true

  /is-arguments/1.1.1:
    resolution:
      {
        integrity: sha512-8Q7EARjzEnKpt/PCD7e1cgUS0a6X8u5tdSiMqXhojOdoV9TsMsiO+9VLC5vAmO8N7/GmXn7yjR8qnA6bVAEzfA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      has-tostringtag: 1.0.0
    dev: true

  /is-arrayish/0.2.1:
    resolution:
      {
        integrity: sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==
      }

  /is-bigint/1.0.4:
    resolution:
      {
        integrity: sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==
      }
    dependencies:
      has-bigints: 1.0.2

  /is-binary-path/1.0.1:
    resolution:
      {
        integrity: sha512-9fRVlXc0uCxEDj1nQzaWONSpbTfx0FmJfzHF7pwlI8DkWGoHBBea4Pg5Ky0ojwwxQmnSifgbKkI06Qv0Ljgj+Q==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      binary-extensions: 1.13.1
    optional: true

  /is-binary-path/2.1.0:
    resolution:
      {
        integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==
      }
    engines: { node: '>=8' }
    dependencies:
      binary-extensions: 2.2.0

  /is-boolean-object/1.1.2:
    resolution:
      {
        integrity: sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      has-tostringtag: 1.0.0

  /is-buffer/1.1.6:
    resolution:
      {
        integrity: sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==
      }

  /is-buffer/2.0.5:
    resolution:
      {
        integrity: sha512-i2R6zNFDwgEHJyQUtJEk0XFi1i0dPFn/oqjK3/vPCcDeJvW5NQ83V8QbicfF1SupOaB0h8ntgBC2YiE7dfyctQ==
      }
    engines: { node: '>=4' }
    dev: true

  /is-callable/1.2.4:
    resolution:
      {
        integrity: sha512-nsuwtxZfMX67Oryl9LCQ+upnC0Z0BgpwntpS89m1H/TLF0zNfzfLMV/9Wa/6MZsj0acpEjAO0KF1xT6ZdLl95w==
      }
    engines: { node: '>= 0.4' }

  /is-ci/2.0.0:
    resolution:
      {
        integrity: sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==
      }
    hasBin: true
    dependencies:
      ci-info: 2.0.0
    dev: true

  /is-core-module/2.9.0:
    resolution:
      {
        integrity: sha512-+5FPy5PnwmO3lvfMb0AsoPaBG+5KHUI0wYFXOtYPnVVVspTFUuMZNfNaNVRt3FZadstu2c8x23vykRW/NBoU6A==
      }
    dependencies:
      has: 1.0.3

  /is-data-descriptor/0.1.4:
    resolution:
      {
        integrity: sha512-+w9D5ulSoBNlmw9OHn3U2v51SyoCd0he+bB3xMl62oijhrspxowjU+AIcDY0N3iEJbUEkB15IlMASQsxYigvXg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      kind-of: 3.2.2

  /is-data-descriptor/1.0.0:
    resolution:
      {
        integrity: sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      kind-of: 6.0.3

  /is-date-object/1.0.5:
    resolution:
      {
        integrity: sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      has-tostringtag: 1.0.0

  /is-decimal/1.0.4:
    resolution:
      {
        integrity: sha512-RGdriMmQQvZ2aqaQq3awNA6dCGtKpiDFcOzrTWrDAT2MiWrKQVPmxLGHl7Y2nNu6led0kEyoX0enY0qXYsv9zw==
      }
    dev: true

  /is-descriptor/0.1.6:
    resolution:
      {
        integrity: sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-accessor-descriptor: 0.1.6
      is-data-descriptor: 0.1.4
      kind-of: 5.1.0

  /is-descriptor/1.0.2:
    resolution:
      {
        integrity: sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-accessor-descriptor: 1.0.0
      is-data-descriptor: 1.0.0
      kind-of: 6.0.3

  /is-docker/2.2.1:
    resolution:
      {
        integrity: sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==
      }
    engines: { node: '>=8' }
    hasBin: true

  /is-dom/1.1.0:
    resolution:
      {
        integrity: sha512-u82f6mvhYxRPKpw8V1N0W8ce1xXwOrQtgGcxl6UCL5zBmZu3is/18K0rR7uFCnMDuAsS/3W54mGL4vsaFUQlEQ==
      }
    dependencies:
      is-object: 1.0.2
      is-window: 1.0.2
    dev: true

  /is-extendable/0.1.1:
    resolution:
      {
        integrity: sha512-5BMULNob1vgFX6EjQw5izWDxrecWK9AM72rugNr0TFldMOi0fj6Jk+zeKIt0xGj4cEfQIJth4w3OKWOJ4f+AFw==
      }
    engines: { node: '>=0.10.0' }

  /is-extendable/1.0.1:
    resolution:
      {
        integrity: sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-plain-object: 2.0.4

  /is-extglob/2.1.1:
    resolution:
      {
        integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==
      }
    engines: { node: '>=0.10.0' }

  /is-fullwidth-code-point/1.0.0:
    resolution:
      {
        integrity: sha512-1pqUqRjkhPJ9miNq9SwMfdvi6lBJcd6eFxvfaivQhaH3SgisfiuudvFntdKOmxuee/77l+FPjKrQjWvmPjWrRw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      number-is-nan: 1.0.1

  /is-fullwidth-code-point/2.0.0:
    resolution:
      {
        integrity: sha512-VHskAKYM8RfSFXwee5t5cbN5PZeq1Wrh6qd5bkyiXIf6UQcN6w/A0eXM9r6t8d+GYOh+o6ZhiEnb88LN/Y8m2w==
      }
    engines: { node: '>=4' }
    dev: false

  /is-fullwidth-code-point/3.0.0:
    resolution:
      {
        integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==
      }
    engines: { node: '>=8' }

  /is-function/1.0.2:
    resolution:
      {
        integrity: sha512-lw7DUp0aWXYg+CBCN+JKkcE0Q2RayZnSvnZBlwgxHBQhqt5pZNVy4Ri7H9GmmXkdu7LUthszM+Tor1u/2iBcpQ==
      }
    dev: true

  /is-generator-fn/2.1.0:
    resolution:
      {
        integrity: sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ==
      }
    engines: { node: '>=6' }

  /is-glob/3.1.0:
    resolution:
      {
        integrity: sha512-UFpDDrPgM6qpnFNI+rh/p3bUaq9hKLZN8bMUWzxmcnZVS3omf4IPK+BrewlnWjO1WmUsMYuSjKh4UJuV4+Lqmw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-extglob: 2.1.1

  /is-glob/4.0.3:
    resolution:
      {
        integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-extglob: 2.1.1

  /is-hexadecimal/1.0.4:
    resolution:
      {
        integrity: sha512-gyPJuv83bHMpocVYoqof5VDiZveEoGoFL8m3BXNb2VW8Xs+rz9kqO8LOQ5DH6EsuvilT1ApazU0pyl+ytbPtlw==
      }
    dev: true

  /is-installed-globally/0.4.0:
    resolution:
      {
        integrity: sha512-iwGqO3J21aaSkC7jWnHP/difazwS7SFeIqxv6wEtLU8Y5KlzFTjyqcSIT0d8s4+dDhKytsk9PJZ2BkS5eZwQRQ==
      }
    engines: { node: '>=10' }
    dependencies:
      global-dirs: 3.0.0
      is-path-inside: 3.0.3
    dev: true

  /is-lambda/1.0.1:
    resolution:
      {
        integrity: sha512-z7CMFGNrENq5iFB9Bqo64Xk6Y9sg+epq1myIcdHaGnbMTYOxvzsEtdYqQUylB7LxfkvgrrjP32T6Ywciio9UIQ==
      }
    dev: true

  /is-map/2.0.2:
    resolution:
      {
        integrity: sha512-cOZFQQozTha1f4MxLFzlgKYPTyj26picdZTx82hbc/Xf4K/tZOOXSCkMvU4pKioRXGDLJRn0GM7Upe7kR721yg==
      }
    dev: true

  /is-negative-zero/2.0.2:
    resolution:
      {
        integrity: sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA==
      }
    engines: { node: '>= 0.4' }

  /is-npm/5.0.0:
    resolution:
      {
        integrity: sha512-WW/rQLOazUq+ST/bCAVBp/2oMERWLsR7OrKyt052dNDk4DHcDE0/7QSXITlmi+VBcV13DfIbysG3tZJm5RfdBA==
      }
    engines: { node: '>=10' }
    dev: true

  /is-number-object/1.0.7:
    resolution:
      {
        integrity: sha512-k1U0IRzLMo7ZlYIfzRu23Oh6MiIFasgpb9X76eqfFZAqwH44UI4KTBvBYIZ1dSL9ZzChTB9ShHfLkR4pdW5krQ==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      has-tostringtag: 1.0.0

  /is-number/3.0.0:
    resolution:
      {
        integrity: sha512-4cboCqIpliH+mAvFNegjZQ4kgKc3ZUhQVr3HvWbSh5q3WH2v82ct+T2Y1hdU5Gdtorx/cLifQjqCbL7bpznLTg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      kind-of: 3.2.2

  /is-number/7.0.0:
    resolution:
      {
        integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==
      }
    engines: { node: '>=0.12.0' }

  /is-obj/2.0.0:
    resolution:
      {
        integrity: sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==
      }
    engines: { node: '>=8' }
    dev: true

  /is-object/1.0.2:
    resolution:
      {
        integrity: sha512-2rRIahhZr2UWb45fIOuvZGpFtz0TyOZLf32KxBbSoUCeZR495zCKlWUKKUByk3geS2eAs7ZAABt0Y/Rx0GiQGA==
      }
    dev: true

  /is-path-inside/3.0.3:
    resolution:
      {
        integrity: sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==
      }
    engines: { node: '>=8' }
    dev: true

  /is-plain-obj/1.1.0:
    resolution:
      {
        integrity: sha512-yvkRyxmFKEOQ4pNXCmJG5AEQNlXJS5LaONXo5/cLdTZdWvsZ1ioJEonLGAosKlMWE8lwUy/bJzMjcw8az73+Fg==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /is-plain-obj/2.1.0:
    resolution:
      {
        integrity: sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==
      }
    engines: { node: '>=8' }

  /is-plain-obj/3.0.0:
    resolution:
      {
        integrity: sha512-gwsOE28k+23GP1B6vFl1oVh/WOzmawBrKwo5Ev6wMKzPkaXaCDIQKzLnvsA42DRlbVTWorkgTKIviAKCWkfUwA==
      }
    engines: { node: '>=10' }

  /is-plain-object/2.0.4:
    resolution:
      {
        integrity: sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      isobject: 3.0.1

  /is-plain-object/5.0.0:
    resolution:
      {
        integrity: sha512-VRSzKkbMm5jMDoKLbltAkFQ5Qr7VDiTFGXxYFXXowVj387GeGNOCsOH6Msy00SGZ3Fp84b1Naa1psqgcCIEP5Q==
      }
    engines: { node: '>=0.10.0' }
    dev: true

  /is-potential-custom-element-name/1.0.1:
    resolution:
      {
        integrity: sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ==
      }

  /is-promise/2.2.2:
    resolution:
      {
        integrity: sha512-+lP4/6lKUBfQjZ2pdxThZvLUAafmZb8OAxFb8XXtiQmS35INgr85hdOGoEs124ez1FCnZJt6jau/T+alh58QFQ==
      }
    dev: true

  /is-regex/1.1.4:
    resolution:
      {
        integrity: sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      has-tostringtag: 1.0.0

  /is-set/2.0.2:
    resolution:
      {
        integrity: sha512-+2cnTEZeY5z/iXGbLhPrOAaK/Mau5k5eXq9j14CpRTftq0pAJu2MwVRSZhyZWBzx3o6X795Lz6Bpb6R0GKf37g==
      }
    dev: true

  /is-shared-array-buffer/1.0.2:
    resolution:
      {
        integrity: sha512-sqN2UDu1/0y6uvXyStCOzyhAjCSlHceFoMKJW8W9EU9cvic/QdsZ0kEU93HEy3IUEFZIiH/3w+AH/UQbPHNdhA==
      }
    dependencies:
      call-bind: 1.0.2

  /is-stream/1.1.0:
    resolution:
      {
        integrity: sha512-uQPm8kcs47jx38atAcWTVxyltQYoPT68y9aWYdV6yWXSyW8mzSat0TL6CiWdZeCdF3KrAvpVtnHbTv4RN+rqdQ==
      }
    engines: { node: '>=0.10.0' }
    dev: true

  /is-stream/2.0.1:
    resolution:
      {
        integrity: sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==
      }
    engines: { node: '>=8' }

  /is-string/1.0.7:
    resolution:
      {
        integrity: sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      has-tostringtag: 1.0.0

  /is-subdir/1.2.0:
    resolution:
      {
        integrity: sha512-2AT6j+gXe/1ueqbW6fLZJiIw3F8iXGJtt0yDrZaBhAZEG1raiTxKWU+IPqMCzQAXOUCKdA4UDMgacKH25XG2Cw==
      }
    engines: { node: '>=4' }
    dependencies:
      better-path-resolve: 1.0.0
    dev: false

  /is-symbol/1.0.4:
    resolution:
      {
        integrity: sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      has-symbols: 1.0.3

  /is-typedarray/1.0.0:
    resolution:
      {
        integrity: sha512-cyA56iCMHAh5CdzjJIa4aohJyeO1YbwLi3Jc35MmRU6poroFjIGZzUzupGiRPOjgHg9TLu43xbpwXk523fMxKA==
      }

  /is-weakref/1.0.2:
    resolution:
      {
        integrity: sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==
      }
    dependencies:
      call-bind: 1.0.2

  /is-whitespace-character/1.0.4:
    resolution:
      {
        integrity: sha512-SDweEzfIZM0SJV0EUga669UTKlmL0Pq8Lno0QDQsPnvECB3IM2aP0gdx5TrU0A01MAPfViaZiI2V1QMZLaKK5w==
      }
    dev: true

  /is-window/1.0.2:
    resolution:
      {
        integrity: sha512-uj00kdXyZb9t9RcAUAwMZAnkBUwdYGhYlt7djMXhfyhUCzwNba50tIiBKR7q0l7tdoBtFVw/3JmLY6fI3rmZmg==
      }
    dev: true

  /is-windows/1.0.2:
    resolution:
      {
        integrity: sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==
      }
    engines: { node: '>=0.10.0' }

  /is-word-character/1.0.4:
    resolution:
      {
        integrity: sha512-5SMO8RVennx3nZrqtKwCGyyetPE9VDba5ugvKLaD4KopPG5kR4mQ7tNt/r7feL5yt5h3lpuBbIUmCOG2eSzXHA==
      }
    dev: true

  /is-wsl/1.1.0:
    resolution:
      {
        integrity: sha512-gfygJYZ2gLTDlmbWMI0CE2MwnFzSN/2SZfkMlItC4K/JBlsWVDB0bO6XhqcY13YXE7iMcAJnzTCJjPiTeJJ0Mw==
      }
    engines: { node: '>=4' }

  /is-wsl/2.2.0:
    resolution:
      {
        integrity: sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==
      }
    engines: { node: '>=8' }
    dependencies:
      is-docker: 2.2.1

  /is-yarn-global/0.3.0:
    resolution:
      {
        integrity: sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw==
      }
    dev: true

  /isarray/0.0.1:
    resolution:
      {
        integrity: sha512-D2S+3GLxWH+uhrNEcoh/fnmYeP8E8/zHl644d/jdA0g2uyXvy3sb0qxotE+ne0LtccHknQzWwZEzhak7oJ0COQ==
      }
    dev: true

  /isarray/1.0.0:
    resolution:
      {
        integrity: sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==
      }

  /isarray/2.0.5:
    resolution:
      {
        integrity: sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==
      }
    dev: true

  /isexe/2.0.0:
    resolution:
      {
        integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==
      }

  /isobject/2.1.0:
    resolution:
      {
        integrity: sha512-+OUdGJlgjOBZDfxnDjYYG6zp487z0JGNQq3cYQYg5f5hKR+syHMsaztzGeml/4kGG55CSpKSpWTY+jYGgsHLgA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      isarray: 1.0.0

  /isobject/3.0.1:
    resolution:
      {
        integrity: sha512-WhB9zCku7EGTj/HQQRz5aUQEUeoQZH2bWcltRErOpymJ4boYE6wL9Tbr23krRPSZ+C5zqNSrSw+Cc7sZZ4b7vg==
      }
    engines: { node: '>=0.10.0' }

  /isobject/4.0.0:
    resolution:
      {
        integrity: sha512-S/2fF5wH8SJA/kmwr6HYhK/RI/OkhD84k8ntalo0iJjZikgq1XFvR5M8NPT1x5F7fBwCG3qHfnzeP/Vh/ZxCUA==
      }
    engines: { node: '>=0.10.0' }
    dev: true

  /isstream/0.1.2:
    resolution:
      {
        integrity: sha512-Yljz7ffyPbrLpLngrMtZ7NduUgVvi6wG9RJ9IUcyCd59YQ911PBJphODUcbOVbqYfxe1wuYf/LJ8PauMRwsM/g==
      }
    dev: false

  /istanbul-lib-coverage/3.2.0:
    resolution:
      {
        integrity: sha512-eOeJ5BHCmHYvQK7xt9GkdHuzuCGS1Y6g9Gvnx3Ym33fz/HpLRYxiS0wHNr+m/MBC8B647Xt608vCDEvhl9c6Mw==
      }
    engines: { node: '>=8' }

  /istanbul-lib-instrument/5.2.0:
    resolution:
      {
        integrity: sha512-6Lthe1hqXHBNsqvgDzGO6l03XNeu3CrG4RqQ1KM9+l5+jNGpEJfIELx1NS3SEHmJQA8np/u+E4EPRKRiu6m19A==
      }
    engines: { node: '>=8' }
    dependencies:
      '@babel/core': 7.17.12
      '@babel/parser': 7.18.5
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-coverage: 3.2.0
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color

  /istanbul-lib-report/3.0.0:
    resolution:
      {
        integrity: sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==
      }
    engines: { node: '>=8' }
    dependencies:
      istanbul-lib-coverage: 3.2.0
      make-dir: 3.1.0
      supports-color: 7.2.0

  /istanbul-lib-source-maps/4.0.1:
    resolution:
      {
        integrity: sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw==
      }
    engines: { node: '>=10' }
    dependencies:
      debug: 4.3.4
      istanbul-lib-coverage: 3.2.0
      source-map: 0.6.1
    transitivePeerDependencies:
      - supports-color

  /istanbul-reports/3.1.4:
    resolution:
      {
        integrity: sha512-r1/DshN4KSE7xWEknZLLLLDn5CJybV3nw01VTkp6D5jzLuELlcbudfj/eSQFvrKsJuTVCGnePO7ho82Nw9zzfw==
      }
    engines: { node: '>=8' }
    dependencies:
      html-escaper: 2.0.2
      istanbul-lib-report: 3.0.0

  /iterate-iterator/1.0.2:
    resolution:
      {
        integrity: sha512-t91HubM4ZDQ70M9wqp+pcNpu8OyJ9UAtXntT/Bcsvp5tZMnz9vRa+IunKXeI8AnfZMTv0jNuVEmGeLSMjVvfPw==
      }
    dev: true

  /iterate-value/1.0.2:
    resolution:
      {
        integrity: sha512-A6fMAio4D2ot2r/TYzr4yUWrmwNdsN5xL7+HUiyACE4DXm+q8HtPcnFTp+NnW3k4N05tZ7FVYFFb2CR13NxyHQ==
      }
    dependencies:
      es-get-iterator: 1.1.2
      iterate-iterator: 1.0.2
    dev: true

  /jest-changed-files/27.5.1:
    resolution:
      {
        integrity: sha512-buBLMiByfWGCoMsLLzGUUSpAmIAGnbR2KJoMN10ziLhOLvP4e0SlypHnAel8iqQXTrcbmfEY9sSqae5sgUsTvw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      execa: 5.1.1
      throat: 6.0.1

  /jest-circus/27.5.1:
    resolution:
      {
        integrity: sha512-D95R7x5UtlMA5iBYsOHFFbMD/GVA4R/Kdq15f7xYWUfWHBto9NYRsOvnSauTgdF+ogCpJ4tyKOXhUifxS65gdw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      '@jest/types': 27.5.1
      '@types/node': 12.20.24
      chalk: 4.1.2
      co: 4.6.0
      dedent: 0.7.0
      expect: 27.5.1
      is-generator-fn: 2.1.0
      jest-each: 27.5.1
      jest-matcher-utils: 27.5.1
      jest-message-util: 27.5.1
      jest-runtime: 27.5.1_@types+node@12.20.24
      jest-snapshot: 27.5.1
      jest-util: 27.5.1
      pretty-format: 27.5.1
      slash: 3.0.0
      stack-utils: 2.0.5
      throat: 6.0.1
    transitivePeerDependencies:
      - supports-color

  /jest-cli/27.5.1_@types+node@12.20.24:
    resolution:
      {
        integrity: sha512-Hc6HOOwYq4/74/c62dEE3r5elx8wjYqxY0r0G/nFrLDPMFRu6RA/u8qINOIkvhxG7mMQ5EJsOGfRpI8L6eFUVw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/core': 27.5.1
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      '@jest/types': 27.5.1
      chalk: 4.1.2
      exit: 0.1.2
      graceful-fs: 4.2.10
      import-local: 3.1.0
      jest-config: 27.5.1_@types+node@12.20.24
      jest-util: 27.5.1
      jest-validate: 27.5.1
      prompts: 2.4.2
      yargs: 16.2.0
    transitivePeerDependencies:
      - '@types/node'
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /jest-config/27.4.7_@types+node@12.20.24:
    resolution:
      {
        integrity: sha512-xz/o/KJJEedHMrIY9v2ParIoYSrSVY6IVeE4z5Z3i101GoA5XgfbJz+1C8EYPsv7u7f39dS8F9v46BHDhn0vlw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    peerDependencies:
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      ts-node:
        optional: true
    dependencies:
      '@babel/core': 7.17.12
      '@jest/test-sequencer': 27.5.1_@types+node@12.20.24
      '@jest/types': 27.4.2
      babel-jest: 27.5.1_@babel+core@7.17.12
      chalk: 4.1.2
      ci-info: 3.3.2
      deepmerge: 4.2.2
      glob: 7.2.3
      graceful-fs: 4.2.10
      jest-circus: 27.5.1
      jest-environment-jsdom: 27.5.1
      jest-environment-node: 27.5.1
      jest-get-type: 27.5.1
      jest-jasmine2: 27.5.1
      jest-regex-util: 27.5.1
      jest-resolve: 27.5.1
      jest-runner: 27.5.1
      jest-util: 27.5.1
      jest-validate: 27.5.1
      micromatch: 4.0.5
      pretty-format: 27.5.1
      slash: 3.0.0
    transitivePeerDependencies:
      - '@types/node'
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate

  /jest-config/27.5.1_@types+node@12.20.24:
    resolution:
      {
        integrity: sha512-5sAsjm6tGdsVbW9ahcChPAFCk4IlkQUknH5AvKjuLTSlcO/wCZKyFdn7Rg0EkC+OGgWODEy2hDpWB1PgzH0JNA==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    peerDependencies:
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      ts-node:
        optional: true
    dependencies:
      '@babel/core': 7.17.12
      '@jest/test-sequencer': 27.5.1_@types+node@12.20.24
      '@jest/types': 27.5.1
      babel-jest: 27.5.1_@babel+core@7.17.12
      chalk: 4.1.2
      ci-info: 3.3.2
      deepmerge: 4.2.2
      glob: 7.2.3
      graceful-fs: 4.2.10
      jest-circus: 27.5.1
      jest-environment-jsdom: 27.5.1
      jest-environment-node: 27.5.1
      jest-get-type: 27.5.1
      jest-jasmine2: 27.5.1
      jest-regex-util: 27.5.1
      jest-resolve: 27.5.1
      jest-runner: 27.5.1
      jest-util: 27.5.1
      jest-validate: 27.5.1
      micromatch: 4.0.5
      parse-json: 5.2.0
      pretty-format: 27.5.1
      slash: 3.0.0
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - '@types/node'
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate

  /jest-diff/27.5.1:
    resolution:
      {
        integrity: sha512-m0NvkX55LDt9T4mctTEgnZk3fmEg3NRYutvMPWM/0iPnkFj2wIeF45O1718cMSOFO1vINkqmxqD8vE37uTEbqw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      chalk: 4.1.2
      diff-sequences: 27.5.1
      jest-get-type: 27.5.1
      pretty-format: 27.5.1

  /jest-docblock/27.5.1:
    resolution:
      {
        integrity: sha512-rl7hlABeTsRYxKiUfpHrQrG4e2obOiTQWfMEH3PxPjOtdsfLQO4ReWSZaQ7DETm4xu07rl4q/h4zcKXyU0/OzQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      detect-newline: 3.1.0

  /jest-each/27.5.1:
    resolution:
      {
        integrity: sha512-1Ff6p+FbhT/bXQnEouYy00bkNSY7OUpfIcmdl8vZ31A1UUaurOLPA8a8BbJOF2RDUElwJhmeaV7LnagI+5UwNQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      chalk: 4.1.2
      jest-get-type: 27.5.1
      jest-util: 27.5.1
      pretty-format: 27.5.1

  /jest-environment-jsdom/27.4.6:
    resolution:
      {
        integrity: sha512-o3dx5p/kHPbUlRvSNjypEcEtgs6LmvESMzgRFQE6c+Prwl2JLA4RZ7qAnxc5VM8kutsGRTB15jXeeSbJsKN9iA==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/fake-timers': 27.5.1
      '@jest/types': 27.4.2
      '@types/node': 12.20.24
      jest-mock: 27.5.1
      jest-util: 27.5.1
      jsdom: 16.7.0
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate
    dev: false

  /jest-environment-jsdom/27.5.1:
    resolution:
      {
        integrity: sha512-TFBvkTC1Hnnnrka/fUb56atfDtJ9VMZ94JkjTbggl1PEpwrYtUBKMezB3inLmWqQsXYLcMwNoDQwoBTAvFfsfw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/fake-timers': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 12.20.24
      jest-mock: 27.5.1
      jest-util: 27.5.1
      jsdom: 16.7.0
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate

  /jest-environment-node/27.4.6:
    resolution:
      {
        integrity: sha512-yfHlZ9m+kzTKZV0hVfhVu6GuDxKAYeFHrfulmy7Jxwsq4V7+ZK7f+c0XP/tbVDMQW7E4neG2u147hFkuVz0MlQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/fake-timers': 27.5.1
      '@jest/types': 27.4.2
      '@types/node': 12.20.24
      jest-mock: 27.5.1
      jest-util: 27.5.1

  /jest-environment-node/27.5.1:
    resolution:
      {
        integrity: sha512-Jt4ZUnxdOsTGwSRAfKEnE6BcwsSPNOijjwifq5sDFSA2kesnXTvNqKHYgM0hDq3549Uf/KzdXNYn4wMZJPlFLw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/fake-timers': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 12.20.24
      jest-mock: 27.5.1
      jest-util: 27.5.1

  /jest-get-type/27.5.1:
    resolution:
      {
        integrity: sha512-2KY95ksYSaK7DMBWQn6dQz3kqAf3BB64y2udeG+hv4KfSOb9qwcYQstTJc1KCbsix+wLZWZYN8t7nwX3GOBLRw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }

  /jest-haste-map/26.6.2:
    resolution:
      {
        integrity: sha512-easWIJXIw71B2RdR8kgqpjQrbMRWQBgiBwXYEhtGUTaX+doCjBheluShdDMeR8IMfJiTqH4+zfhtg29apJf/8w==
      }
    engines: { node: '>= 10.14.2' }
    dependencies:
      '@jest/types': 26.6.2
      '@types/graceful-fs': 4.1.5
      '@types/node': 12.20.24
      anymatch: 3.1.2
      fb-watchman: 2.0.1
      graceful-fs: 4.2.10
      jest-regex-util: 26.0.0
      jest-serializer: 26.6.2
      jest-util: 26.6.2
      jest-worker: 26.6.2
      micromatch: 4.0.5
      sane: 4.1.0
      walker: 1.0.8
    optionalDependencies:
      fsevents: 2.3.2
    dev: true

  /jest-haste-map/27.5.1:
    resolution:
      {
        integrity: sha512-7GgkZ4Fw4NFbMSDSpZwXeBiIbx+t/46nJ2QitkOjvwPYyZmqttu2TDSimMHP1EkPOi4xUZAN1doE5Vd25H4Jng==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      '@types/graceful-fs': 4.1.5
      '@types/node': 12.20.24
      anymatch: 3.1.2
      fb-watchman: 2.0.1
      graceful-fs: 4.2.10
      jest-regex-util: 27.5.1
      jest-serializer: 27.5.1
      jest-util: 27.5.1
      jest-worker: 27.5.1
      micromatch: 4.0.5
      walker: 1.0.8
    optionalDependencies:
      fsevents: 2.3.2

  /jest-jasmine2/27.5.1:
    resolution:
      {
        integrity: sha512-jtq7VVyG8SqAorDpApwiJJImd0V2wv1xzdheGHRGyuT7gZm6gG47QEskOlzsN1PG/6WNaCo5pmwMHDf3AkG2pQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/source-map': 27.5.1
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      '@jest/types': 27.5.1
      '@types/node': 12.20.24
      chalk: 4.1.2
      co: 4.6.0
      expect: 27.5.1
      is-generator-fn: 2.1.0
      jest-each: 27.5.1
      jest-matcher-utils: 27.5.1
      jest-message-util: 27.5.1
      jest-runtime: 27.5.1_@types+node@12.20.24
      jest-snapshot: 27.5.1
      jest-util: 27.5.1
      pretty-format: 27.5.1
      throat: 6.0.1
    transitivePeerDependencies:
      - supports-color

  /jest-leak-detector/27.5.1:
    resolution:
      {
        integrity: sha512-POXfWAMvfU6WMUXftV4HolnJfnPOGEu10fscNCA76KBpRRhcMN2c8d3iT2pxQS3HLbA+5X4sOUPzYO2NUyIlHQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      jest-get-type: 27.5.1
      pretty-format: 27.5.1

  /jest-matcher-utils/27.5.1:
    resolution:
      {
        integrity: sha512-z2uTx/T6LBaCoNWNFWwChLBKYxTMcGBRjAt+2SbP929/Fflb9aa5LGma654Rz8z9HLxsrUaYzxE9T/EFIL/PAw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      chalk: 4.1.2
      jest-diff: 27.5.1
      jest-get-type: 27.5.1
      pretty-format: 27.5.1

  /jest-message-util/27.5.1:
    resolution:
      {
        integrity: sha512-rMyFe1+jnyAAf+NHwTclDz0eAaLkVDdKVHHBFWsBWHnnh5YeJMNWWsv7AbFYXfK3oTqvL7VTWkhNLu1jX24D+g==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@babel/code-frame': 7.16.7
      '@jest/types': 27.5.1
      '@types/stack-utils': 2.0.1
      chalk: 4.1.2
      graceful-fs: 4.2.10
      micromatch: 4.0.5
      pretty-format: 27.5.1
      slash: 3.0.0
      stack-utils: 2.0.5

  /jest-mock/27.5.1:
    resolution:
      {
        integrity: sha512-K4jKbY1d4ENhbrG2zuPWaQBvDly+iZ2yAW+T1fATN78hc0sInwn7wZB8XtlNnvHug5RMwV897Xm4LqmPM4e2Og==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      '@types/node': 12.20.24

  /jest-pnp-resolver/1.2.2_jest-resolve@27.4.6:
    resolution:
      {
        integrity: sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w==
      }
    engines: { node: '>=6' }
    peerDependencies:
      jest-resolve: '*'
    peerDependenciesMeta:
      jest-resolve:
        optional: true
    dependencies:
      jest-resolve: 27.4.6

  /jest-pnp-resolver/1.2.2_jest-resolve@27.5.1:
    resolution:
      {
        integrity: sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w==
      }
    engines: { node: '>=6' }
    peerDependencies:
      jest-resolve: '*'
    peerDependenciesMeta:
      jest-resolve:
        optional: true
    dependencies:
      jest-resolve: 27.5.1

  /jest-regex-util/26.0.0:
    resolution:
      {
        integrity: sha512-Gv3ZIs/nA48/Zvjrl34bf+oD76JHiGDUxNOVgUjh3j890sblXryjY4rss71fPtD/njchl6PSE2hIhvyWa1eT0A==
      }
    engines: { node: '>= 10.14.2' }
    dev: true

  /jest-regex-util/27.5.1:
    resolution:
      {
        integrity: sha512-4bfKq2zie+x16okqDXjXn9ql2B0dScQu+vcwe4TvFVhkVyuWLqpZrZtXxLLWoXYgn0E87I6r6GRYHF7wFZBUvg==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }

  /jest-resolve-dependencies/27.5.1:
    resolution:
      {
        integrity: sha512-QQOOdY4PE39iawDn5rzbIePNigfe5B9Z91GDD1ae/xNDlu9kaat8QQ5EKnNmVWPV54hUdxCVwwj6YMgR2O7IOg==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      jest-regex-util: 27.5.1
      jest-snapshot: 27.5.1
    transitivePeerDependencies:
      - supports-color

  /jest-resolve/27.4.6:
    resolution:
      {
        integrity: sha512-SFfITVApqtirbITKFAO7jOVN45UgFzcRdQanOFzjnbd+CACDoyeX7206JyU92l4cRr73+Qy/TlW51+4vHGt+zw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.4.2
      chalk: 4.1.2
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-pnp-resolver: 1.2.2_jest-resolve@27.4.6
      jest-util: 27.5.1
      jest-validate: 27.5.1
      resolve: 1.22.0
      resolve.exports: 1.1.0
      slash: 3.0.0

  /jest-resolve/27.5.1:
    resolution:
      {
        integrity: sha512-FFDy8/9E6CV83IMbDpcjOhumAQPDyETnU2KZ1O98DwTnz8AOBsW/Xv3GySr1mOZdItLR+zDZ7I/UdTFbgSOVCw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      chalk: 4.1.2
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-pnp-resolver: 1.2.2_jest-resolve@27.5.1
      jest-util: 27.5.1
      jest-validate: 27.5.1
      resolve: 1.22.0
      resolve.exports: 1.1.0
      slash: 3.0.0

  /jest-runner/27.5.1:
    resolution:
      {
        integrity: sha512-g4NPsM4mFCOwFKXO4p/H/kWGdJp9V8kURY2lX8Me2drgXqG7rrZAx5kv+5H7wtt/cdFIjhqYx1HrlqWHaOvDaQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/console': 27.5.1
      '@jest/environment': 27.5.1
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      '@jest/transform': 27.5.1
      '@jest/types': 27.5.1
      '@types/node': 12.20.24
      chalk: 4.1.2
      emittery: 0.8.1
      graceful-fs: 4.2.10
      jest-docblock: 27.5.1
      jest-environment-jsdom: 27.5.1
      jest-environment-node: 27.5.1
      jest-haste-map: 27.5.1
      jest-leak-detector: 27.5.1
      jest-message-util: 27.5.1
      jest-resolve: 27.5.1
      jest-runtime: 27.5.1_@types+node@12.20.24
      jest-util: 27.5.1
      jest-worker: 27.5.1
      source-map-support: 0.5.21
      throat: 6.0.1
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate

  /jest-runtime/27.5.1_@types+node@12.20.24:
    resolution:
      {
        integrity: sha512-o7gxw3Gf+H2IGt8fv0RiyE1+r83FJBRruoA+FXrlHw6xEyBsU8ugA6IPfTdVyA0w8HClpbK+DGJxH59UrNMx8A==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/environment': 27.5.1
      '@jest/fake-timers': 27.5.1
      '@jest/globals': 27.5.1
      '@jest/source-map': 27.5.1
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      '@jest/transform': 27.5.1
      '@jest/types': 27.5.1
      chalk: 4.1.2
      cjs-module-lexer: 1.2.2
      collect-v8-coverage: 1.0.1_@types+node@12.20.24
      execa: 5.1.1
      glob: 7.2.3
      graceful-fs: 4.2.10
      jest-haste-map: 27.5.1
      jest-message-util: 27.5.1
      jest-mock: 27.5.1
      jest-regex-util: 27.5.1
      jest-resolve: 27.5.1
      jest-snapshot: 27.5.1
      jest-util: 27.5.1
      slash: 3.0.0
      strip-bom: 4.0.0
    transitivePeerDependencies:
      - '@types/node'
      - supports-color

  /jest-serializer/26.6.2:
    resolution:
      {
        integrity: sha512-S5wqyz0DXnNJPd/xfIzZ5Xnp1HrJWBczg8mMfMpN78OJ5eDxXyf+Ygld9wX1DnUWbIbhM1YDY95NjR4CBXkb2g==
      }
    engines: { node: '>= 10.14.2' }
    dependencies:
      '@types/node': 12.20.24
      graceful-fs: 4.2.10
    dev: true

  /jest-serializer/27.5.1:
    resolution:
      {
        integrity: sha512-jZCyo6iIxO1aqUxpuBlwTDMkzOAJS4a3eYz3YzgxxVQFwLeSA7Jfq5cbqCY+JLvTDrWirgusI/0KwxKMgrdf7w==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@types/node': 12.20.24
      graceful-fs: 4.2.10

  /jest-snapshot/27.4.6:
    resolution:
      {
        integrity: sha512-fafUCDLQfzuNP9IRcEqaFAMzEe7u5BF7mude51wyWv7VRex60WznZIC7DfKTgSIlJa8aFzYmXclmN328aqSDmQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@babel/core': 7.17.12
      '@babel/generator': 7.18.2
      '@babel/plugin-syntax-typescript': 7.17.12_@babel+core@7.17.12
      '@babel/traverse': 7.18.5
      '@babel/types': 7.18.4
      '@jest/transform': 27.5.1
      '@jest/types': 27.4.2
      '@types/babel__traverse': 7.17.1
      '@types/prettier': 2.6.3
      babel-preset-current-node-syntax: 1.0.1_@babel+core@7.17.12
      chalk: 4.1.2
      expect: 27.5.1
      graceful-fs: 4.2.10
      jest-diff: 27.5.1
      jest-get-type: 27.5.1
      jest-haste-map: 27.5.1
      jest-matcher-utils: 27.5.1
      jest-message-util: 27.5.1
      jest-util: 27.5.1
      natural-compare: 1.4.0
      pretty-format: 27.5.1
      semver: 7.3.7
    transitivePeerDependencies:
      - supports-color

  /jest-snapshot/27.5.1:
    resolution:
      {
        integrity: sha512-yYykXI5a0I31xX67mgeLw1DZ0bJB+gpq5IpSuCAoyDi0+BhgU/RIrL+RTzDmkNTchvDFWKP8lp+w/42Z3us5sA==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@babel/core': 7.17.12
      '@babel/generator': 7.18.2
      '@babel/plugin-syntax-typescript': 7.17.12_@babel+core@7.17.12
      '@babel/traverse': 7.18.5
      '@babel/types': 7.18.4
      '@jest/transform': 27.5.1
      '@jest/types': 27.5.1
      '@types/babel__traverse': 7.17.1
      '@types/prettier': 2.6.3
      babel-preset-current-node-syntax: 1.0.1_@babel+core@7.17.12
      chalk: 4.1.2
      expect: 27.5.1
      graceful-fs: 4.2.10
      jest-diff: 27.5.1
      jest-get-type: 27.5.1
      jest-haste-map: 27.5.1
      jest-matcher-utils: 27.5.1
      jest-message-util: 27.5.1
      jest-util: 27.5.1
      natural-compare: 1.4.0
      pretty-format: 27.5.1
      semver: 7.3.7
    transitivePeerDependencies:
      - supports-color

  /jest-util/26.6.2:
    resolution:
      {
        integrity: sha512-MDW0fKfsn0OI7MS7Euz6h8HNDXVQ0gaM9uW6RjfDmd1DAFcaxX9OqIakHIqhbnmF08Cf2DLDG+ulq8YQQ0Lp0Q==
      }
    engines: { node: '>= 10.14.2' }
    dependencies:
      '@jest/types': 26.6.2
      '@types/node': 12.20.24
      chalk: 4.1.2
      graceful-fs: 4.2.10
      is-ci: 2.0.0
      micromatch: 4.0.5
    dev: true

  /jest-util/27.5.1:
    resolution:
      {
        integrity: sha512-Kv2o/8jNvX1MQ0KGtw480E/w4fBCDOnH6+6DmeKi6LZUIlKA5kwY0YNdlzaWTiVgxqAqik11QyxDOKk543aKXw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      '@types/node': 12.20.24
      chalk: 4.1.2
      ci-info: 3.3.2
      graceful-fs: 4.2.10
      picomatch: 2.3.1

  /jest-validate/27.5.1:
    resolution:
      {
        integrity: sha512-thkNli0LYTmOI1tDB3FI1S1RTp/Bqyd9pTarJwL87OIBFuqEb5Apv5EaApEudYg4g86e3CT6kM0RowkhtEnCBQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/types': 27.5.1
      camelcase: 6.3.0
      chalk: 4.1.2
      jest-get-type: 27.5.1
      leven: 3.1.0
      pretty-format: 27.5.1

  /jest-watch-select-projects/2.0.0:
    resolution:
      {
        integrity: sha512-j00nW4dXc2NiCW6znXgFLF9g8PJ0zP25cpQ1xRro/HU2GBfZQFZD0SoXnAlaoKkIY4MlfTMkKGbNXFpvCdjl1w==
      }
    dependencies:
      ansi-escapes: 4.3.2
      chalk: 3.0.0
      prompts: 2.4.2
    dev: true

  /jest-watcher/27.5.1:
    resolution:
      {
        integrity: sha512-z676SuD6Z8o8qbmEGhoEUFOM1+jfEiL3DXHK/xgEiG2EyNYfFG60jluWcupY6dATjfEsKQuibReS1djInQnoVw==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      '@jest/test-result': 27.5.1_@types+node@12.20.24
      '@jest/types': 27.5.1
      '@types/node': 12.20.24
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      jest-util: 27.5.1
      string-length: 4.0.2

  /jest-worker/26.6.2:
    resolution:
      {
        integrity: sha512-KWYVV1c4i+jbMpaBC+U++4Va0cp8OisU185o73T1vo99hqi7w8tSJfUXYswwqqrjzwxa6KpRK54WhPvwf5w6PQ==
      }
    engines: { node: '>= 10.13.0' }
    dependencies:
      '@types/node': 12.20.24
      merge-stream: 2.0.0
      supports-color: 7.2.0
    dev: true

  /jest-worker/27.5.1:
    resolution:
      {
        integrity: sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg==
      }
    engines: { node: '>= 10.13.0' }
    dependencies:
      '@types/node': 12.20.24
      merge-stream: 2.0.0
      supports-color: 8.1.1

  /jest/27.4.7_@types+node@12.20.24:
    resolution:
      {
        integrity: sha512-8heYvsx7nV/m8m24Vk26Y87g73Ba6ueUd0MWed/NXMhSZIm62U/llVbS0PJe1SHunbyXjJ/BqG1z9bFjGUIvTg==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/core': 27.5.1
      import-local: 3.1.0
      jest-cli: 27.5.1_@types+node@12.20.24
    transitivePeerDependencies:
      - '@types/node'
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /jju/1.4.0:
    resolution:
      {
        integrity: sha512-8wb9Yw966OSxApiCt0K3yNJL8pnNeIv+OEq2YMidz4FKP6nonSRoOXc80iXY4JaN2FC11B9qsNmDsm+ZOfMROA==
      }

  /jmespath/0.16.0:
    resolution:
      {
        integrity: sha512-9FzQjJ7MATs1tSpnco1K6ayiYE3figslrXA72G2HQ/n76RzvYlofyi5QM+iX4YRs/pu3yzxlVQSST23+dMDknw==
      }
    engines: { node: '>= 0.6.0' }
    dev: true

  /js-base64/2.6.4:
    resolution:
      {
        integrity: sha512-pZe//GGmwJndub7ZghVHz7vjb2LgC1m8B07Au3eYqeqv9emhESByMXxaEgkUkEqJe87oBbSniGYoQNIBklc7IQ==
      }
    dev: false

  /js-string-escape/1.0.1:
    resolution:
      {
        integrity: sha512-Smw4xcfIQ5LVjAOuJCvN/zIodzA/BBSsluuoSykP+lUvScIi4U6RJLfwHet5cxFnCswUjISV8oAXaqaJDY3chg==
      }
    engines: { node: '>= 0.8' }
    dev: true

  /js-tokens/4.0.0:
    resolution:
      {
        integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==
      }

  /js-yaml/3.13.1:
    resolution:
      {
        integrity: sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==
      }
    hasBin: true
    dependencies:
      argparse: 1.0.10
      esprima: 4.0.1

  /js-yaml/4.1.0:
    resolution:
      {
        integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==
      }
    hasBin: true
    dependencies:
      argparse: 2.0.1

  /jsbn/0.1.1:
    resolution:
      {
        integrity: sha512-UVU9dibq2JcFWxQPA6KCqj5O42VOmAY3zQUfEKxU0KpTGXwNoCjkX1e13eHNvw/xPynt6pU0rZ1htjWTNTSXsg==
      }
    dev: false

  /jscodeshift/0.13.1_@babel+preset-env@7.18.2:
    resolution:
      {
        integrity: sha512-lGyiEbGOvmMRKgWk4vf+lUrCWO/8YR8sUR3FKF1Cq5fovjZDlIcw3Hu5ppLHAnEXshVffvaM0eyuY/AbOeYpnQ==
      }
    hasBin: true
    peerDependencies:
      '@babel/preset-env': ^7.1.6
    dependencies:
      '@babel/core': 7.17.12
      '@babel/parser': 7.18.5
      '@babel/plugin-proposal-class-properties': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-nullish-coalescing-operator': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-proposal-optional-chaining': 7.17.12_@babel+core@7.17.12
      '@babel/plugin-transform-modules-commonjs': 7.18.2_@babel+core@7.17.12
      '@babel/preset-env': 7.18.2_@babel+core@7.17.12
      '@babel/preset-flow': 7.17.12_@babel+core@7.17.12
      '@babel/preset-typescript': 7.17.12_@babel+core@7.17.12
      '@babel/register': 7.17.7_@babel+core@7.17.12
      babel-core: 7.0.0-bridge.0_@babel+core@7.17.12
      chalk: 4.1.2
      flow-parser: 0.180.0
      graceful-fs: 4.2.10
      micromatch: 3.1.10
      neo-async: 2.6.2
      node-dir: 0.1.17
      recast: 0.20.5
      temp: 0.8.4
      write-file-atomic: 2.4.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jsdom/16.7.0:
    resolution:
      {
        integrity: sha512-u9Smc2G1USStM+s/x1ru5Sxrl6mPYCbByG1U/hUmqaVsm4tbNyS7CicOSRyuGQYZhTu0h84qkZZQ/I+dzizSVw==
      }
    engines: { node: '>=10' }
    peerDependencies:
      canvas: ^2.5.0
    peerDependenciesMeta:
      canvas:
        optional: true
    dependencies:
      abab: 2.0.6
      acorn: 8.7.1
      acorn-globals: 6.0.0
      cssom: 0.4.4
      cssstyle: 2.3.0
      data-urls: 2.0.0
      decimal.js: 10.3.1
      domexception: 2.0.1
      escodegen: 2.0.0
      form-data: 3.0.1
      html-encoding-sniffer: 2.0.1
      http-proxy-agent: 4.0.1
      https-proxy-agent: 5.0.1
      is-potential-custom-element-name: 1.0.1
      nwsapi: 2.2.0
      parse5: 6.0.1
      saxes: 5.0.1
      symbol-tree: 3.2.4
      tough-cookie: 4.0.0
      w3c-hr-time: 1.0.2
      w3c-xmlserializer: 2.0.0
      webidl-conversions: 6.1.0
      whatwg-encoding: 1.0.5
      whatwg-mimetype: 2.3.0
      whatwg-url: 8.7.0
      ws: 7.5.8
      xml-name-validator: 3.0.0
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate

  /jsesc/0.5.0:
    resolution:
      {
        integrity: sha512-uZz5UnB7u4T9LvwmFqXii7pZSouaRPorGs5who1Ip7VO0wxanFvBL7GkM6dTHlgX+jhBApRetaWpnDabOeTcnA==
      }
    hasBin: true
    dev: true

  /jsesc/2.5.2:
    resolution:
      {
        integrity: sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==
      }
    engines: { node: '>=4' }
    hasBin: true

  /json-buffer/3.0.0:
    resolution: { integrity: sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg= }
    dev: true

  /json-diff/0.7.4:
    resolution:
      {
        integrity: sha512-FJ2P+ShDbzu9epF+kCKgoSUhPIUW7Ta7A4XlIT0L5LzgaR/z1TBF1mm0XhRGj8RlA3Xm0j+c/FsWOHDtuoYejA==
      }
    hasBin: true
    dependencies:
      cli-color: 2.0.2
      difflib: 0.2.4
      dreamopt: 0.8.0
    dev: true

  /json-parse-better-errors/1.0.2:
    resolution:
      {
        integrity: sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==
      }

  /json-parse-even-better-errors/2.3.1:
    resolution:
      {
        integrity: sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==
      }

  /json-schema-traverse/0.4.1:
    resolution:
      {
        integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==
      }

  /json-schema-traverse/1.0.0:
    resolution:
      {
        integrity: sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==
      }

  /json-schema-typed/7.0.3:
    resolution:
      {
        integrity: sha512-7DE8mpG+/fVw+dTpjbxnx47TaMnDfOI1jwft9g1VybltZCduyRQPJPvc+zzKY9WPHxhPWczyFuYa6I8Mw4iU5A==
      }
    dev: true

  /json-schema/0.4.0:
    resolution:
      {
        integrity: sha512-es94M3nTIfsEPisRafak+HDLfHXnKBhV3vU5eqPcS3flIWqcxJWgXHXiey3YrpaNsanY5ei1VoYEbOzijuq9BA==
      }
    dev: false

  /json-stable-stringify-without-jsonify/1.0.1:
    resolution:
      {
        integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==
      }

  /json-stringify-safe/5.0.1:
    resolution:
      {
        integrity: sha512-ZClg6AaYvamvYEE82d3Iyd3vSSIjQ+odgjaTzRuO3s7toCdFKczob2i0zCh7JE8kWn17yvAWhUVxvqGwUalsRA==
      }

  /json5/0.5.1:
    resolution:
      {
        integrity: sha512-4xrs1aW+6N5DalkqSVA8fxh458CXvR99WU8WLKmq4v8eWAL86Xo3BVqyd3SkA9wEVjCMqyvvRRkshAdOnBp5rw==
      }
    hasBin: true
    dev: false

  /json5/1.0.1:
    resolution:
      {
        integrity: sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==
      }
    hasBin: true
    dependencies:
      minimist: 1.2.6

  /json5/2.2.1:
    resolution:
      {
        integrity: sha512-1hqLFMSrGHRHxav9q9gNjJ5EXznIxGVO09xQRrwplcS8qs28pZ8s8hupZAmqDwZUmVZ2Qb2jnyPOWcDH8m8dlA==
      }
    engines: { node: '>=6' }
    hasBin: true

  /jsonfile/4.0.0:
    resolution:
      {
        integrity: sha512-m6F1R3z8jjlf2imQHS2Qez5sjKWQzbuuhuJ/FKYFRZvPE3PuHcSMVZzfsLhGVOkfd20obL5SWEBew5ShlquNxg==
      }
    optionalDependencies:
      graceful-fs: 4.2.10

  /jsonfile/6.1.0:
    resolution:
      {
        integrity: sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==
      }
    dependencies:
      universalify: 2.0.0
    optionalDependencies:
      graceful-fs: 4.2.10
    dev: true

  /jsonpath-plus/4.0.0:
    resolution:
      {
        integrity: sha512-e0Jtg4KAzDJKKwzbLaUtinCn0RZseWBVRTRGihSpvFlM3wTR7ExSp+PTdeTsDrLNJUe7L7JYJe8mblHX5SCT6A==
      }
    engines: { node: '>=10.0' }

  /jsonschema/1.4.1:
    resolution:
      {
        integrity: sha512-S6cATIPVv1z0IlxdN+zUk5EPjkGCdnhN4wVSBlvoUO1tOLJootbo9CquNJmbIh4yikWHiUedhRYrNPn1arpEmQ==
      }
    dev: true

  /jsonwebtoken/8.5.1:
    resolution:
      {
        integrity: sha512-XjwVfRS6jTMsqYs0EsuJ4LGxXV14zQybNd4L2r0UvbVnSF9Af8x7p5MzbJ90Ioz/9TI41/hTCvznF/loiSzn8w==
      }
    engines: { node: '>=4', npm: '>=1.4.28' }
    dependencies:
      jws: 3.2.2
      lodash.includes: 4.3.0
      lodash.isboolean: 3.0.3
      lodash.isinteger: 4.0.4
      lodash.isnumber: 3.0.3
      lodash.isplainobject: 4.0.6
      lodash.isstring: 4.0.1
      lodash.once: 4.1.1
      ms: 2.1.3
      semver: 5.7.1
    dev: false

  /jsprim/1.4.2:
    resolution:
      {
        integrity: sha512-P2bSOMAc/ciLz6DzgjVlGJP9+BrJWu5UDGK70C2iweC5QBIeFf0ZXRvGjEj2uYgrY2MkAAhsSWHDWlFtEroZWw==
      }
    engines: { node: '>=0.6.0' }
    dependencies:
      assert-plus: 1.0.0
      extsprintf: 1.3.0
      json-schema: 0.4.0
      verror: 1.10.0
    dev: false

  /jsx-ast-utils/3.3.0:
    resolution:
      {
        integrity: sha512-XzO9luP6L0xkxwhIJMTJQpZo/eeN60K08jHdexfD569AGxeNug6UketeHXEhROoM8aR7EcUoOQmIhcJQjcuq8Q==
      }
    engines: { node: '>=4.0' }
    dependencies:
      array-includes: 3.1.5
      object.assign: 4.1.2

  /jszip/2.6.1:
    resolution:
      {
        integrity: sha512-C4Z++nYQv+CudUkCWUdz+yKVhQiFJjuWSmRJ5Sg3d3/OzcJ6U4ooUYlmE3+rJXrVk89KWQaiJ9mPp/VLQ4D66g==
      }
    dependencies:
      pako: 1.0.11
    dev: true

  /jszip/3.7.1:
    resolution:
      {
        integrity: sha512-ghL0tz1XG9ZEmRMcEN2vt7xabrDdqHHeykgARpmZ0BiIctWxM47Vt63ZO2dnp4QYt/xJVLLy5Zv1l/xRdh2byg==
      }
    dependencies:
      lie: 3.3.0
      pako: 1.0.11
      readable-stream: 2.3.7
      set-immediate-shim: 1.0.1
    dev: false

  /junk/3.1.0:
    resolution:
      {
        integrity: sha512-pBxcB3LFc8QVgdggvZWyeys+hnrNWg4OcZIU/1X59k5jQdLBlCsYGRQaz234SqoRLTCgMH00fY0xRJH+F9METQ==
      }
    engines: { node: '>=8' }
    dev: true

  /jwa/1.4.1:
    resolution:
      {
        integrity: sha512-qiLX/xhEEFKUAJ6FiBMbes3w9ATzyk5W7Hvzpa/SLYdxNtng+gcurvrI7TbACjIXlsJyr05/S1oUhZrc63evQA==
      }
    dependencies:
      buffer-equal-constant-time: 1.0.1
      ecdsa-sig-formatter: 1.0.11
      safe-buffer: 5.2.1
    dev: false

  /jwa/2.0.0:
    resolution:
      {
        integrity: sha512-jrZ2Qx916EA+fq9cEAeCROWPTfCwi1IVHqT2tapuqLEVVDKFDENFw1oL+MwrTvH6msKxsd1YTDVw6uKEcsrLEA==
      }
    dependencies:
      buffer-equal-constant-time: 1.0.1
      ecdsa-sig-formatter: 1.0.11
      safe-buffer: 5.2.1
    dev: false

  /jws/3.2.2:
    resolution:
      {
        integrity: sha512-YHlZCB6lMTllWDtSPHz/ZXTsi8S00usEV6v1tjq8tOUZzw7DpSDWVXjXDre6ed1w/pd495ODpHZYSdkRTsa0HA==
      }
    dependencies:
      jwa: 1.4.1
      safe-buffer: 5.2.1
    dev: false

  /jws/4.0.0:
    resolution:
      {
        integrity: sha512-KDncfTmOZoOMTFG4mBlG0qUIOlc03fmzH+ru6RgYVZhPkyiy/92Owlt/8UEN+a4TXR1FQetfIpJE8ApdvdVxTg==
      }
    dependencies:
      jwa: 2.0.0
      safe-buffer: 5.2.1
    dev: false

  /keyv/3.1.0:
    resolution:
      {
        integrity: sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==
      }
    dependencies:
      json-buffer: 3.0.0
    dev: true

  /kind-of/3.2.2:
    resolution:
      {
        integrity: sha512-NOW9QQXMoZGg/oqnVNoNTTIFEIid1627WCffUBJEdMxYApq7mNE7CpzucIPc+ZQg25Phej7IJSmX3hO+oblOtQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-buffer: 1.1.6

  /kind-of/4.0.0:
    resolution:
      {
        integrity: sha512-24XsCxmEbRwEDbz/qz3stgin8TTzZ1ESR56OMCN0ujYg+vRutNSiOj9bHH9u85DKgXguraugV5sFuvbD4FW/hw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-buffer: 1.1.6

  /kind-of/5.1.0:
    resolution:
      {
        integrity: sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==
      }
    engines: { node: '>=0.10.0' }

  /kind-of/6.0.3:
    resolution:
      {
        integrity: sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==
      }
    engines: { node: '>=0.10.0' }

  /kleur/3.0.3:
    resolution:
      {
        integrity: sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==
      }
    engines: { node: '>=6' }
    dev: true

  /klona/2.0.5:
    resolution:
      {
        integrity: sha512-pJiBpiXMbt7dkzXe8Ghj/u4FfXOOa98fPW+bihOJ4SjnoijweJrNThJfd3ifXpXhREjpoF2mZVH1GfS9LV3kHQ==
      }
    engines: { node: '>= 8' }

  /latest-version/5.1.0:
    resolution:
      {
        integrity: sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==
      }
    engines: { node: '>=8' }
    dependencies:
      package-json: 6.5.0
    dev: true

  /lazy-universal-dotenv/3.0.1:
    resolution:
      {
        integrity: sha512-prXSYk799h3GY3iOWnC6ZigYzMPjxN2svgjJ9shk7oMadSNX3wXy0B6F32PMJv7qtMnrIbUxoEHzbutvxR2LBQ==
      }
    engines: { node: '>=6.0.0', npm: '>=6.0.0', yarn: '>=1.0.0' }
    dependencies:
      '@babel/runtime': 7.18.3
      app-root-dir: 1.0.2
      core-js: 3.23.1
      dotenv: 8.6.0
      dotenv-expand: 5.1.0
    dev: true

  /lazystream/1.0.1:
    resolution:
      {
        integrity: sha512-b94GiNHQNy6JNTrt5w6zNyffMrNkXZb3KTkCZJb2V1xaEGCk093vkZ2jk3tpaeP33/OiXC+WvK9AxUebnf5nbw==
      }
    engines: { node: '>= 0.6.3' }
    dependencies:
      readable-stream: 2.3.7
    dev: true

  /leven/3.1.0:
    resolution:
      {
        integrity: sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==
      }
    engines: { node: '>=6' }

  /levn/0.3.0:
    resolution:
      {
        integrity: sha512-0OO4y2iOHix2W6ujICbKIaEQXvFQHue65vUG3pb5EUomzPI90z9hsA1VsO/dbIIpC53J8gxM9Q4Oho0jrCM/yA==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      prelude-ls: 1.1.2
      type-check: 0.3.2

  /levn/0.4.1:
    resolution:
      {
        integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0

  /lie/3.3.0:
    resolution:
      {
        integrity: sha512-UaiMJzeWRlEujzAuw5LokY1L5ecNQYZKfmyZ9L7wDHb/p5etKaxXhohBcrw0EYby+G/NA52vRSN4N39dxHAIwQ==
      }
    dependencies:
      immediate: 3.0.6
    dev: false

  /light-my-request/4.10.1:
    resolution:
      {
        integrity: sha512-l+zWk0HXGhGzY7IYTZnYEqIpj3Mpcyk2f8+FkKUyREywvaiWCf2jyQVxpasKRsploY/nVpoqTlxx72CIeQNcIQ==
      }
    dependencies:
      ajv: 8.11.0
      cookie: 0.5.0
      process-warning: 1.0.0
      set-cookie-parser: 2.5.0
    dev: false

  /lilconfig/2.0.5:
    resolution:
      {
        integrity: sha512-xaYmXZtTHPAw5m+xLN8ab9C+3a8YmV3asNSPOATITbtwrfbwaLJj8h66H1WMIpALCkqsIzK3h7oQ+PdX+LQ9Eg==
      }
    engines: { node: '>=10' }
    dev: false

  /lines-and-columns/1.2.4:
    resolution:
      {
        integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==
      }

  /load-json-file/6.2.0:
    resolution:
      {
        integrity: sha512-gUD/epcRms75Cw8RT1pUdHugZYM5ce64ucs2GEISABwkRsOQr0q2wm/MV2TKThycIe5e0ytRweW2RZxclogCdQ==
      }
    engines: { node: '>=8' }
    dependencies:
      graceful-fs: 4.2.10
      parse-json: 5.2.0
      strip-bom: 4.0.0
      type-fest: 0.6.0
    dev: false

  /loader-runner/2.4.0:
    resolution:
      {
        integrity: sha512-Jsmr89RcXGIwivFY21FcRrisYZfvLMTWx5kOLc+JTxtpBOG6xML0vzbc6SEQG2FO9/4Fc3wW4LVcB5DmGflaRw==
      }
    engines: { node: '>=4.3.0 <5.0.0 || >=5.10' }

  /loader-runner/4.3.0:
    resolution:
      {
        integrity: sha512-3R/1M+yS3j5ou80Me59j7F9IMs4PXs3VqRrm0TU3AbKPxlmpoY1TNscJV/oGJXo8qCatFGTfDbY6W6ipGOYXfg==
      }
    engines: { node: '>=6.11.5' }

  /loader-utils/1.1.0:
    resolution:
      {
        integrity: sha512-gkD9aSEG9UGglyPcDJqY9YBTUtCLKaBK6ihD2VP1d1X60lTfFspNZNulGBBbUZLkPygy4LySYHyxBpq+VhjObQ==
      }
    engines: { node: '>=4.0.0' }
    dependencies:
      big.js: 3.2.0
      emojis-list: 2.1.0
      json5: 0.5.1
    dev: false

  /loader-utils/1.4.0:
    resolution:
      {
        integrity: sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==
      }
    engines: { node: '>=4.0.0' }
    dependencies:
      big.js: 5.2.2
      emojis-list: 3.0.0
      json5: 1.0.1

  /loader-utils/2.0.0:
    resolution:
      {
        integrity: sha512-rP4F0h2RaWSvPEkD7BLDFQnvSf+nK+wr3ESUjNTyAGobqrijmW92zc+SO6d4p4B1wh7+B/Jg1mkQe5NYUEHtHQ==
      }
    engines: { node: '>=8.9.0' }
    dependencies:
      big.js: 5.2.2
      emojis-list: 3.0.0
      json5: 2.2.1
    dev: true

  /loader-utils/2.0.2:
    resolution:
      {
        integrity: sha512-TM57VeHptv569d/GKh6TAYdzKblwDNiumOdkFnejjD0XwTH87K90w3O7AiJRqdQoXygvi1VQTJTLGhJl7WqA7A==
      }
    engines: { node: '>=8.9.0' }
    dependencies:
      big.js: 5.2.2
      emojis-list: 3.0.0
      json5: 2.2.1

  /locate-path/3.0.0:
    resolution:
      {
        integrity: sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==
      }
    engines: { node: '>=6' }
    dependencies:
      p-locate: 3.0.0
      path-exists: 3.0.0

  /locate-path/5.0.0:
    resolution:
      {
        integrity: sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==
      }
    engines: { node: '>=8' }
    dependencies:
      p-locate: 4.1.0

  /locate-path/6.0.0:
    resolution:
      {
        integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==
      }
    engines: { node: '>=10' }
    dependencies:
      p-locate: 5.0.0
    dev: true

  /lodash.camelcase/4.3.0:
    resolution:
      {
        integrity: sha512-TwuEnCnxbc3rAvhf/LbG7tJUDzhqXyFnv3dtzLOPgCG/hODL7WFnsbwktkD7yUV0RrreP/l1PALq/YSg6VvjlA==
      }
    dev: false

  /lodash.debounce/4.0.8:
    resolution:
      {
        integrity: sha512-FT1yDzDYEoYWhnSGnpE/4Kj1fLZkDFyqRb7fNt6FdYOSxlUWAtp42Eh6Wb0rGIv/m9Bgo7x4GhQbm5Ys4SG5ow==
      }
    dev: true

  /lodash.defaults/4.2.0:
    resolution:
      {
        integrity: sha512-qjxPLHd3r5DnsdGacqOMU6pb/avJzdh9tFX2ymgoZE27BmjXrNy/y4LoaiTeAb+O3gL8AfpJGtqfX/ae2leYYQ==
      }
    dev: true

  /lodash.difference/4.5.0:
    resolution:
      {
        integrity: sha512-dS2j+W26TQ7taQBGN8Lbbq04ssV3emRw4NY58WErlTO29pIqS0HmoT5aJ9+TUQ1N3G+JOZSji4eugsWwGp9yPA==
      }
    dev: true

  /lodash.flatten/4.4.0:
    resolution:
      {
        integrity: sha512-C5N2Z3DgnnKr0LOpv/hKCgKdb7ZZwafIrsesve6lmzvZIRZRGaZ/l6Q8+2W7NaT+ZwO3fFlSCzCzrDCFdJfZ4g==
      }
    dev: true

  /lodash.get/4.4.2:
    resolution:
      {
        integrity: sha512-z+Uw/vLuy6gQe8cfaFWD7p0wVv8fJl3mbzXh33RS+0oW2wvUqiRXiQ69gLWSLpgB5/6sU+r6BlQR0MBILadqTQ==
      }

  /lodash.includes/4.3.0:
    resolution:
      {
        integrity: sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==
      }
    dev: false

  /lodash.isboolean/3.0.3:
    resolution:
      {
        integrity: sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==
      }
    dev: false

  /lodash.isequal/4.5.0:
    resolution:
      {
        integrity: sha512-pDo3lu8Jhfjqls6GkMgpahsF9kCyayhgykjyLMNFTKWrpVdAQtYyB4muAMWozBB4ig/dtWAmsMxLEI8wuz+DYQ==
      }

  /lodash.isinteger/4.0.4:
    resolution:
      {
        integrity: sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==
      }
    dev: false

  /lodash.isnumber/3.0.3:
    resolution:
      {
        integrity: sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==
      }
    dev: false

  /lodash.isplainobject/4.0.6:
    resolution:
      {
        integrity: sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==
      }

  /lodash.isstring/4.0.1:
    resolution:
      {
        integrity: sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==
      }
    dev: false

  /lodash.memoize/4.1.2:
    resolution:
      {
        integrity: sha512-t7j+NzmgnQzTAYXcsHYLgimltOV1MXHtlOWf6GjL9Kj8GK5FInw5JotxvbOs+IvV1/Dzo04/fCGfLVs7aXb4Ag==
      }
    dev: false

  /lodash.merge/4.6.2:
    resolution:
      {
        integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==
      }

  /lodash.once/4.1.1:
    resolution:
      {
        integrity: sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==
      }
    dev: false

  /lodash.truncate/4.4.2:
    resolution:
      {
        integrity: sha512-jttmRe7bRse52OsWIMDLaXxWqRAmtIUccAQ3garviCqJjafXOfNMO0yMfNpdD6zbGaTU0P5Nz7e7gAT6cKmJRw==
      }
    dev: true

  /lodash.union/4.6.0:
    resolution:
      {
        integrity: sha512-c4pB2CdGrGdjMKYLA+XiRDO7Y0PRQbm/Gzg8qMj+QH+pFVAoTp5sBpO0odL3FjoPCGjK96p6qsP+yQoiLoOBcw==
      }
    dev: true

  /lodash.uniq/4.5.0:
    resolution:
      {
        integrity: sha512-xfBaXQd9ryd9dlSDvnvI0lvxfLJlYAZzXomUYzLKtUeOQvOP5piqAWuGtrhWeqaXK9hhoM/iyJc5AV+XfsX3HQ==
      }

  /lodash/4.17.21:
    resolution:
      {
        integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==
      }

  /log4js/6.5.2:
    resolution:
      {
        integrity: sha512-DXtpNtt+KDOMT7RHUDIur/WsSA3rntlUh9Zg4XCdV42wUuMmbFkl38+LZ92Z5QvQA7mD5kAVkLiBSEH/tvUB8A==
      }
    engines: { node: '>=8.0' }
    dependencies:
      date-format: 4.0.11
      debug: 4.3.4
      flatted: 3.2.5
      rfdc: 1.3.0
      streamroller: 3.1.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /long/4.0.0:
    resolution:
      {
        integrity: sha512-XsP+KhQif4bjX1kbuSiySJFNAehNxgLb6hPRGJ9QsUr8ajHkuXGdrHmFUTUUXhDwVX2R5bY4JNZEwbUiMhV+MA==
      }
    dev: false

  /loose-envify/1.4.0:
    resolution:
      {
        integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==
      }
    hasBin: true
    dependencies:
      js-tokens: 4.0.0

  /lower-case/2.0.2:
    resolution:
      {
        integrity: sha512-7fm3l3NAF9WfN6W3JOmf5drwpVqX78JtoGJ3A6W0a6ZnldM41w2fV5D490psKFTpMds8TJse/eHLFFsNHHjHgg==
      }
    dependencies:
      tslib: 2.3.1

  /lowercase-keys/1.0.1:
    resolution:
      {
        integrity: sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==
      }
    engines: { node: '>=0.10.0' }
    dev: true

  /lowercase-keys/2.0.0:
    resolution:
      {
        integrity: sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA==
      }
    engines: { node: '>=8' }
    dev: true

  /lowlight/1.20.0:
    resolution:
      {
        integrity: sha512-8Ktj+prEb1RoCPkEOrPMYUN/nCggB7qAWe3a7OpMjWQkh3l2RD5wKRQ+o8Q8YuI9RG/xs95waaI/E6ym/7NsTw==
      }
    dependencies:
      fault: 1.0.4
      highlight.js: 10.7.3
    dev: true

  /lru-cache/5.1.1:
    resolution:
      {
        integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==
      }
    dependencies:
      yallist: 3.1.1

  /lru-cache/6.0.0:
    resolution:
      {
        integrity: sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==
      }
    engines: { node: '>=10' }
    dependencies:
      yallist: 4.0.0

  /lru-queue/0.1.0:
    resolution:
      {
        integrity: sha512-BpdYkt9EvGl8OfWHDQPISVpcl5xZthb+XPsbELj5AQXxIC8IriDZIQYjBJPEm5rS420sjZ0TLEzRcq5KdBhYrQ==
      }
    dependencies:
      es5-ext: 0.10.61
    dev: true

  /make-dir/2.1.0:
    resolution:
      {
        integrity: sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==
      }
    engines: { node: '>=6' }
    dependencies:
      pify: 4.0.1
      semver: 5.7.1

  /make-dir/3.1.0:
    resolution:
      {
        integrity: sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==
      }
    engines: { node: '>=8' }
    dependencies:
      semver: 6.3.0

  /make-error/1.3.6:
    resolution:
      {
        integrity: sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==
      }

  /make-fetch-happen/8.0.14:
    resolution:
      {
        integrity: sha512-EsS89h6l4vbfJEtBZnENTOFk8mCRpY5ru36Xe5bcX1KYIli2mkSHqoFsp5O1wMDvTJJzxe/4THpCTtygjeeGWQ==
      }
    engines: { node: '>= 10' }
    dependencies:
      agentkeepalive: 4.2.1
      cacache: 15.3.0
      http-cache-semantics: 4.1.0
      http-proxy-agent: 4.0.1
      https-proxy-agent: 5.0.1
      is-lambda: 1.0.1
      lru-cache: 6.0.0
      minipass: 3.1.6
      minipass-collect: 1.0.2
      minipass-fetch: 1.4.1
      minipass-flush: 1.0.5
      minipass-pipeline: 1.2.4
      promise-retry: 2.0.1
      socks-proxy-agent: 5.0.1
      ssri: 8.0.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /makeerror/1.0.12:
    resolution:
      {
        integrity: sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==
      }
    dependencies:
      tmpl: 1.0.5

  /map-cache/0.2.2:
    resolution:
      {
        integrity: sha512-8y/eV9QQZCiyn1SprXSrCmqJN0yNRATe+PO8ztwqrvrbdRLA3eYJF0yaR0YayLWkMbsQSKWS9N2gPcGEc4UsZg==
      }
    engines: { node: '>=0.10.0' }

  /map-obj/1.0.1:
    resolution:
      {
        integrity: sha512-7N/q3lyZ+LVCp7PzuxrJr4KMbBE2hW7BT7YNia330OFxIf4d3r5zVpicP2650l7CPN6RM9zOJRl3NGpqSiw3Eg==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /map-obj/4.3.0:
    resolution:
      {
        integrity: sha512-hdN1wVrZbb29eBGiGjJbeP8JbKjq1urkHJ/LIP/NY48MZ1QVXUsQBV1G1zvYFHn1XE06cwjBsOI2K3Ulnj1YXQ==
      }
    engines: { node: '>=8' }
    dev: false

  /map-or-similar/1.5.0:
    resolution:
      {
        integrity: sha512-0aF7ZmVon1igznGI4VS30yugpduQW3y3GkcgGJOp7d8x8QrizhigUxjI/m2UojsXXto+jLAH3KSz+xOJTiORjg==
      }
    dev: true

  /map-visit/1.0.0:
    resolution:
      {
        integrity: sha512-4y7uGv8bd2WdM9vpQsiQNo41Ln1NvhvDRuVt0k2JZQ+ezN2uaQes7lZeZ+QQUHOLQAtDaBJ+7wCbi+ab/KFs+w==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      object-visit: 1.0.1

  /markdown-escapes/1.0.4:
    resolution:
      {
        integrity: sha512-8z4efJYk43E0upd0NbVXwgSTQs6cT3T06etieCMEg7dRbzCbxUCK/GHlX8mhHRDcp+OLlHkPKsvqQTCvsRl2cg==
      }
    dev: true

  /markdown-to-jsx/7.1.7_react@16.13.1:
    resolution:
      {
        integrity: sha512-VI3TyyHlGkO8uFle0IOibzpO1c1iJDcXcS/zBrQrXQQvJ2tpdwVzVZ7XdKsyRz1NdRmre4dqQkMZzUHaKIG/1w==
      }
    engines: { node: '>= 10' }
    peerDependencies:
      react: '>= 0.14.0'
    dependencies:
      react: 16.13.1
    dev: true

  /md5.js/1.3.5:
    resolution:
      {
        integrity: sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==
      }
    dependencies:
      hash-base: 3.1.0
      inherits: 2.0.4
      safe-buffer: 5.2.1

  /md5/2.3.0:
    resolution:
      {
        integrity: sha512-T1GITYmFaKuO91vxyoQMFETst+O71VUPEU3ze5GNzDm0OWdP8v1ziTaAEPUr/3kLsY3Sftgz242A1SetQiDL7g==
      }
    dependencies:
      charenc: 0.0.2
      crypt: 0.0.2
      is-buffer: 1.1.6
    dev: true

  /mdast-squeeze-paragraphs/4.0.0:
    resolution:
      {
        integrity: sha512-zxdPn69hkQ1rm4J+2Cs2j6wDEv7O17TfXTJ33tl/+JPIoEmtV9t2ZzBM5LPHE8QlHsmVD8t3vPKCyY3oH+H8MQ==
      }
    dependencies:
      unist-util-remove: 2.1.0
    dev: true

  /mdast-util-definitions/4.0.0:
    resolution:
      {
        integrity: sha512-k8AJ6aNnUkB7IE+5azR9h81O5EQ/cTDXtWdMq9Kk5KcEW/8ritU5CeLg/9HhOC++nALHBlaogJ5jz0Ybk3kPMQ==
      }
    dependencies:
      unist-util-visit: 2.0.3
    dev: true

  /mdast-util-to-hast/10.0.1:
    resolution:
      {
        integrity: sha512-BW3LM9SEMnjf4HXXVApZMt8gLQWVNXc3jryK0nJu/rOXPOnlkUjmdkDlmxMirpbU9ILncGFIwLH/ubnWBbcdgA==
      }
    dependencies:
      '@types/mdast': 3.0.10
      '@types/unist': 2.0.6
      mdast-util-definitions: 4.0.0
      mdurl: 1.0.1
      unist-builder: 2.0.3
      unist-util-generated: 1.1.6
      unist-util-position: 3.1.0
      unist-util-visit: 2.0.3
    dev: true

  /mdast-util-to-string/1.1.0:
    resolution:
      {
        integrity: sha512-jVU0Nr2B9X3MU4tSK7JP1CMkSvOj7X5l/GboG1tKRw52lLF1x2Ju92Ms9tNetCcbfX3hzlM73zYo2NKkWSfF/A==
      }
    dev: true

  /mdn-data/2.0.14:
    resolution:
      {
        integrity: sha512-dn6wd0uw5GsdswPFfsgMp5NSB0/aDe6fK94YJV/AJDYXL6HVLWBsxeq7js7Ad+mU2K9LAlwpk6kN2D5mwCPVow==
      }
    dev: false

  /mdurl/1.0.1:
    resolution:
      {
        integrity: sha512-/sKlQJCBYVY9Ers9hqzKou4H6V5UWc/M59TH2dvkt+84itfnq7uFOMLpOiOS4ujvHP4etln18fmIxA5R5fll0g==
      }
    dev: true

  /media-typer/0.3.0:
    resolution:
      {
        integrity: sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==
      }
    engines: { node: '>= 0.6' }

  /memfs/3.4.3:
    resolution:
      {
        integrity: sha512-eivjfi7Ahr6eQTn44nvTnR60e4a1Fs1Via2kCR5lHo/kyNoiMWaXCNJ/GpSd0ilXas2JSOl9B5FTIhflXu0hlg==
      }
    engines: { node: '>= 4.0.0' }
    dependencies:
      fs-monkey: 1.0.3

  /memoizee/0.4.15:
    resolution:
      {
        integrity: sha512-UBWmJpLZd5STPm7PMUlOw/TSy972M+z8gcyQ5veOnSDRREz/0bmpyTfKt3/51DhEBqCZQn1udM/5flcSPYhkdQ==
      }
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.61
      es6-weak-map: 2.0.3
      event-emitter: 0.3.5
      is-promise: 2.2.2
      lru-queue: 0.1.0
      next-tick: 1.1.0
      timers-ext: 0.1.7
    dev: true

  /memoizerific/1.11.3:
    resolution:
      {
        integrity: sha512-/EuHYwAPdLtXwAwSZkh/Gutery6pD2KYd44oQLhAvQp/50mpyduZh8Q7PYHXTCJ+wuXxt7oij2LXyIJOOYFPog==
      }
    dependencies:
      map-or-similar: 1.5.0
    dev: true

  /memory-fs/0.4.1:
    resolution:
      {
        integrity: sha512-cda4JKCxReDXFXRqOHPQscuIYg1PvxbE2S2GP45rnwfEK+vZaXC8C1OFvdHIbgw0DLzowXGVoxLaAmlgRy14GQ==
      }
    dependencies:
      errno: 0.1.8
      readable-stream: 2.3.7

  /memory-fs/0.5.0:
    resolution:
      {
        integrity: sha512-jA0rdU5KoQMC0e6ppoNRtpp6vjFq6+NY7r8hywnC7V+1Xj/MtHwGIbB1QaK/dunyjWteJzmkpd7ooeWg10T7GA==
      }
    engines: { node: '>=4.3.0 <5.0.0 || >=5.10' }
    dependencies:
      errno: 0.1.8
      readable-stream: 2.3.7

  /meow/9.0.0:
    resolution:
      {
        integrity: sha512-+obSblOQmRhcyBt62furQqRAQpNyWXo8BuQ5bN7dG8wmwQ+vwHKp/rCFD4CrTP8CsDQD1sjoZ94K417XEUk8IQ==
      }
    engines: { node: '>=10' }
    dependencies:
      '@types/minimist': 1.2.2
      camelcase-keys: 6.2.2
      decamelize: 1.2.0
      decamelize-keys: 1.1.0
      hard-rejection: 2.1.0
      minimist-options: 4.1.0
      normalize-package-data: 3.0.3
      read-pkg-up: 7.0.1
      redent: 3.0.0
      trim-newlines: 3.0.1
      type-fest: 0.18.1
      yargs-parser: 20.2.9
    dev: false

  /merge-descriptors/1.0.1:
    resolution:
      {
        integrity: sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w==
      }

  /merge-stream/2.0.0:
    resolution:
      {
        integrity: sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==
      }

  /merge2/1.4.1:
    resolution:
      {
        integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==
      }
    engines: { node: '>= 8' }

  /methods/1.1.2:
    resolution:
      {
        integrity: sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==
      }
    engines: { node: '>= 0.6' }

  /microevent.ts/0.1.1:
    resolution:
      {
        integrity: sha512-jo1OfR4TaEwd5HOrt5+tAZ9mqT4jmpNAusXtyfNzqVm9uiSYFZlKM1wYL4oU7azZW/PxQW53wM0S6OR1JHNa2g==
      }
    dev: true

  /micromatch/3.1.10:
    resolution:
      {
        integrity: sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      arr-diff: 4.0.0
      array-unique: 0.3.2
      braces: 2.3.2
      define-property: 2.0.2
      extend-shallow: 3.0.2
      extglob: 2.0.4
      fragment-cache: 0.2.1
      kind-of: 6.0.3
      nanomatch: 1.2.13
      object.pick: 1.3.0
      regex-not: 1.0.2
      snapdragon: 0.8.2
      to-regex: 3.0.2

  /micromatch/4.0.5:
    resolution:
      {
        integrity: sha512-DMy+ERcEW2q8Z2Po+WNXuw3c5YaUSFjAO5GsJqfEl7UjvtIuFKO6ZrKvcItdy98dwFI2N1tg3zNIdKaQT+aNdA==
      }
    engines: { node: '>=8.6' }
    dependencies:
      braces: 3.0.2
      picomatch: 2.3.1

  /miller-rabin/4.0.1:
    resolution:
      {
        integrity: sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==
      }
    hasBin: true
    dependencies:
      bn.js: 4.12.0
      brorand: 1.1.0

  /mime-db/1.52.0:
    resolution:
      {
        integrity: sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==
      }
    engines: { node: '>= 0.6' }

  /mime-types/2.1.35:
    resolution:
      {
        integrity: sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==
      }
    engines: { node: '>= 0.6' }
    dependencies:
      mime-db: 1.52.0

  /mime/1.6.0:
    resolution:
      {
        integrity: sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==
      }
    engines: { node: '>=4' }
    hasBin: true

  /mime/2.6.0:
    resolution:
      {
        integrity: sha512-USPkMeET31rOMiarsBNIHZKLGgvKc/LrjofAnBlOttf5ajRvqiRA8QsenbcooctK6d6Ts6aqZXBA+XbkKthiQg==
      }
    engines: { node: '>=4.0.0' }
    hasBin: true
    dev: true

  /mimic-fn/2.1.0:
    resolution:
      {
        integrity: sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==
      }
    engines: { node: '>=6' }

  /mimic-fn/3.1.0:
    resolution:
      {
        integrity: sha512-Ysbi9uYW9hFyfrThdDEQuykN4Ey6BuwPD2kpI5ES/nFTDn/98yxYNLZJcgUAKPT/mcrLLKaGzJR9YVxJrIdASQ==
      }
    engines: { node: '>=8' }
    dev: true

  /mimic-response/1.0.1:
    resolution:
      {
        integrity: sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==
      }
    engines: { node: '>=4' }
    dev: true

  /min-document/2.19.0:
    resolution:
      {
        integrity: sha512-9Wy1B3m3f66bPPmU5hdA4DR4PB2OfDU/+GS3yAB7IQozE3tqXaVv2zOjgla7MEGSRv95+ILmOuvhLkOK6wJtCQ==
      }
    dependencies:
      dom-walk: 0.1.2
    dev: true

  /min-indent/1.0.1:
    resolution:
      {
        integrity: sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg==
      }
    engines: { node: '>=4' }

  /mini-css-extract-plugin/2.5.3_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-YseMB8cs8U/KCaAGQoqYmfUuhhGW0a9p9XvWXrxVOkE3/IiISTLw4ALNt7JR5B2eYauFM+PQGSbXMDmVbR7Tfw==
      }
    engines: { node: '>= 12.13.0' }
    peerDependencies:
      webpack: ^5.0.0
    dependencies:
      schema-utils: 4.0.0
      webpack: 5.68.0
    dev: false

  /minimalistic-assert/1.0.1:
    resolution:
      {
        integrity: sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==
      }

  /minimalistic-crypto-utils/1.0.1:
    resolution:
      {
        integrity: sha512-JIYlbt6g8i5jKfJ3xz7rF0LXmv2TkDxBLUkiBeZ7bAx4GnnNMr8xFpGnOxn6GhTEHx3SjRrZEoU+j04prX1ktg==
      }

  /minimatch/3.0.8:
    resolution:
      {
        integrity: sha512-6FsRAQsxQ61mw+qP1ZzbL9Bc78x2p5OqNgNpnoAFLTrX8n5Kxph0CsnhmKKNXTWjXqU5L0pGPR7hYk+XWZr60Q==
      }
    dependencies:
      brace-expansion: 1.1.11

  /minimatch/3.1.2:
    resolution:
      {
        integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==
      }
    dependencies:
      brace-expansion: 1.1.11

  /minimist-options/4.1.0:
    resolution:
      {
        integrity: sha512-Q4r8ghd80yhO/0j1O3B2BjweX3fiHg9cdOwjJd2J76Q135c+NDxGCqdYKQ1SKBuFfgWbAUzBfvYjPUEeNgqN1A==
      }
    engines: { node: '>= 6' }
    dependencies:
      arrify: 1.0.1
      is-plain-obj: 1.1.0
      kind-of: 6.0.3
    dev: false

  /minimist/1.2.6:
    resolution:
      {
        integrity: sha512-Jsjnk4bw3YJqYzbdyBiNsPWHPfO++UGG749Cxs6peCu5Xg4nrena6OVxOYxrQTqww0Jmwt+Ref8rggumkTLz9Q==
      }

  /minipass-collect/1.0.2:
    resolution:
      {
        integrity: sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==
      }
    engines: { node: '>= 8' }
    dependencies:
      minipass: 3.1.6
    dev: true

  /minipass-fetch/1.4.1:
    resolution:
      {
        integrity: sha512-CGH1eblLq26Y15+Azk7ey4xh0J/XfJfrCox5LDJiKqI2Q2iwOLOKrlmIaODiSQS8d18jalF6y2K2ePUm0CmShw==
      }
    engines: { node: '>=8' }
    dependencies:
      minipass: 3.1.6
      minipass-sized: 1.0.3
      minizlib: 2.1.2
    optionalDependencies:
      encoding: 0.1.13
    dev: true

  /minipass-flush/1.0.5:
    resolution:
      {
        integrity: sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==
      }
    engines: { node: '>= 8' }
    dependencies:
      minipass: 3.1.6
    dev: true

  /minipass-pipeline/1.2.4:
    resolution:
      {
        integrity: sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==
      }
    engines: { node: '>=8' }
    dependencies:
      minipass: 3.1.6
    dev: true

  /minipass-sized/1.0.3:
    resolution:
      {
        integrity: sha512-MbkQQ2CTiBMlA2Dm/5cY+9SWFEN8pzzOXi6rlM5Xxq0Yqbda5ZQy9sU75a673FE9ZK0Zsbr6Y5iP6u9nktfg2g==
      }
    engines: { node: '>=8' }
    dependencies:
      minipass: 3.1.6
    dev: true

  /minipass/3.1.6:
    resolution:
      {
        integrity: sha512-rty5kpw9/z8SX9dmxblFA6edItUmwJgMeYDZRrwlIVN27i8gysGbznJwUggw2V/FVqFSDdWy040ZPS811DYAqQ==
      }
    engines: { node: '>=8' }
    dependencies:
      yallist: 4.0.0

  /minizlib/2.1.2:
    resolution:
      {
        integrity: sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==
      }
    engines: { node: '>= 8' }
    dependencies:
      minipass: 3.1.6
      yallist: 4.0.0

  /mississippi/3.0.0:
    resolution:
      {
        integrity: sha512-x471SsVjUtBRtcvd4BzKE9kFC+/2TeWgKCgw0bZcw1b9l2X3QX5vCWgF+KaZaYm87Ss//rHnWryupDrgLvmSkA==
      }
    engines: { node: '>=4.0.0' }
    dependencies:
      concat-stream: 1.6.2
      duplexify: 3.7.1
      end-of-stream: 1.4.4
      flush-write-stream: 1.1.1
      from2: 2.3.0
      parallel-transform: 1.2.0
      pump: 3.0.0
      pumpify: 1.5.1
      stream-each: 1.2.3
      through2: 2.0.5

  /mixin-deep/1.3.2:
    resolution:
      {
        integrity: sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      for-in: 1.0.2
      is-extendable: 1.0.1

  /mkdirp/0.5.6:
    resolution:
      {
        integrity: sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==
      }
    hasBin: true
    dependencies:
      minimist: 1.2.6

  /mkdirp/1.0.4:
    resolution:
      {
        integrity: sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==
      }
    engines: { node: '>=10' }
    hasBin: true

  /move-concurrently/1.0.1:
    resolution:
      {
        integrity: sha512-hdrFxZOycD/g6A6SoI2bB5NA/5NEqD0569+S47WZhPvm46sD50ZHdYaFmnua5lndde9rCHGjmfK7Z8BuCt/PcQ==
      }
    dependencies:
      aproba: 1.2.0
      copy-concurrently: 1.0.5
      fs-write-stream-atomic: 1.0.10
      mkdirp: 0.5.6
      rimraf: 2.7.1
      run-queue: 1.0.3

  /mrmime/1.0.1:
    resolution:
      {
        integrity: sha512-hzzEagAgDyoU1Q6yg5uI+AorQgdvMCur3FcKf7NhMKWsaYg+RnbTyHRa/9IlLF9rf455MOCtcqqrQQ83pPP7Uw==
      }
    engines: { node: '>=10' }

  /ms/2.0.0:
    resolution:
      {
        integrity: sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==
      }

  /ms/2.1.1:
    resolution:
      {
        integrity: sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==
      }
    dev: true

  /ms/2.1.2:
    resolution:
      {
        integrity: sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==
      }

  /ms/2.1.3:
    resolution:
      {
        integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==
      }

  /multicast-dns/7.2.5:
    resolution:
      {
        integrity: sha512-2eznPJP8z2BFLX50tf0LuODrpINqP1RVIm/CObbTcBRITQgmC/TjcREF1NeTBzIcR5XO/ukWo+YHOjBbFwIupg==
      }
    hasBin: true
    dependencies:
      dns-packet: 5.4.0
      thunky: 1.1.0

  /mute-stream/0.0.8:
    resolution:
      {
        integrity: sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA==
      }

  /mz/2.7.0:
    resolution:
      {
        integrity: sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==
      }
    dependencies:
      any-promise: 1.3.0
      object-assign: 4.1.1
      thenify-all: 1.6.0
    dev: false

  /nan/2.16.0:
    resolution:
      {
        integrity: sha512-UdAqHyFngu7TfQKsCBgAA6pWDkT8MAO7d0jyOecVhN5354xbLqdn8mV9Tat9gepAupm0bt2DbeaSC8vS52MuFA==
      }

  /nanoid/3.3.4:
    resolution:
      {
        integrity: sha512-MqBkQh/OHTS2egovRtLk45wEyNXwF+cokD+1YPf9u5VfJiRdAiRwB2froX5Co9Rh20xs4siNPm8naNotSD6RBw==
      }
    engines: { node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1 }
    hasBin: true

  /nanomatch/1.2.13:
    resolution:
      {
        integrity: sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      arr-diff: 4.0.0
      array-unique: 0.3.2
      define-property: 2.0.2
      extend-shallow: 3.0.2
      fragment-cache: 0.2.1
      is-windows: 1.0.2
      kind-of: 6.0.3
      object.pick: 1.3.0
      regex-not: 1.0.2
      snapdragon: 0.8.2
      to-regex: 3.0.2

  /natural-compare/1.4.0:
    resolution:
      {
        integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==
      }

  /ndjson/2.0.0:
    resolution:
      {
        integrity: sha512-nGl7LRGrzugTtaFcJMhLbpzJM6XdivmbkdlaGcrk/LXg2KL/YBC6z1g70xh0/al+oFuVFP8N8kiWRucmeEH/qQ==
      }
    engines: { node: '>=10' }
    hasBin: true
    dependencies:
      json-stringify-safe: 5.0.1
      minimist: 1.2.6
      readable-stream: 3.6.0
      split2: 3.2.2
      through2: 4.0.2
    dev: true

  /negotiator/0.6.3:
    resolution:
      {
        integrity: sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==
      }
    engines: { node: '>= 0.6' }

  /neo-async/2.6.2:
    resolution:
      {
        integrity: sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==
      }

  /nested-error-stacks/2.1.1:
    resolution:
      {
        integrity: sha512-9iN1ka/9zmX1ZvLV9ewJYEk9h7RyRRtqdK0woXcqohu8EWIerfPUjYJPg0ULy0UqP7cslmdGc8xKDJcojlKiaw==
      }
    dev: true

  /netmask/2.0.2:
    resolution:
      {
        integrity: sha512-dBpDMdxv9Irdq66304OLfEmQ9tbNRFnFTuZiLo+bD+r332bBmMJ8GBLXklIXXgxd3+v9+KUnZaUR5PJMa75Gsg==
      }
    engines: { node: '>= 0.4.0' }
    dev: true

  /next-tick/1.1.0:
    resolution:
      {
        integrity: sha512-CXdUiJembsNjuToQvxayPZF9Vqht7hewsvy2sOWafLvi2awflj9mOC6bHIg50orX8IJvWKY9wYQ/zB2kogPslQ==
      }
    dev: true

  /nice-try/1.0.5:
    resolution:
      {
        integrity: sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==
      }

  /no-case/3.0.4:
    resolution:
      {
        integrity: sha512-fgAN3jGAh+RoxUGZHTSOLJIqUc2wmoBwGR4tbpNAKmmovFoWq0OdRkb0VkldReO2a2iBT/OEulG9XSUc10r3zg==
      }
    dependencies:
      lower-case: 2.0.2
      tslib: 2.3.1

  /node-addon-api/3.2.1:
    resolution:
      {
        integrity: sha512-mmcei9JghVNDYydghQmeDX8KoAm0FAiYyIcUt/N4nhyAipB17pllZQDOJD2fotxABnt4Mdz+dKTO7eftLg4d0A==
      }
    dev: true

  /node-dir/0.1.17:
    resolution:
      {
        integrity: sha512-tmPX422rYgofd4epzrNoOXiE8XFZYOcCq1vD7MAXCDO+O+zndlA2ztdKKMa+EeuBG5tHETpr4ml4RGgpqDCCAg==
      }
    engines: { node: '>= 0.10.5' }
    dependencies:
      minimatch: 3.0.8
    dev: true

  /node-fetch/2.6.7:
    resolution:
      {
        integrity: sha512-ZjMPFEfVx5j+y2yF35Kzx5sF7kDzxuDj6ziH4FFbOp87zKDZNx8yExJIb05OGF4Nlt9IHFIMBkRl41VdvcNdbQ==
      }
    engines: { node: 4.x || >=6.0.0 }
    peerDependencies:
      encoding: ^0.1.0
    peerDependenciesMeta:
      encoding:
        optional: true
    dependencies:
      whatwg-url: 5.0.0

  /node-forge/1.3.1:
    resolution:
      {
        integrity: sha512-dPEtOeMvF9VMcYV/1Wb8CPoVAXtp6MKMlcbAt4ddqmGqUJ6fQZFXkNZNkNlfevtNkGtaSoXf/vNNNSvgrdXwtA==
      }
    engines: { node: '>= 6.13.0' }

  /node-gyp/7.1.2:
    resolution:
      {
        integrity: sha512-CbpcIo7C3eMu3dL1c3d0xw449fHIGALIJsRP4DDPHpyiW8vcriNY7ubh9TE4zEKfSxscY7PjeFnshE7h75ynjQ==
      }
    engines: { node: '>= 10.12.0' }
    hasBin: true
    dependencies:
      env-paths: 2.2.1
      glob: 7.2.3
      graceful-fs: 4.2.10
      nopt: 5.0.0
      npmlog: 4.1.2
      request: 2.88.2
      rimraf: 3.0.2
      semver: 7.3.7
      tar: 6.1.11
      which: 2.0.2
    dev: false

  /node-gyp/8.1.0:
    resolution:
      {
        integrity: sha512-o2elh1qt7YUp3lkMwY3/l4KF3j/A3fI/Qt4NH+CQQgPJdqGE9y7qnP84cjIWN27Q0jJkrSAhCVDg+wBVNBYdBg==
      }
    engines: { node: '>= 10.12.0' }
    hasBin: true
    dependencies:
      env-paths: 2.2.1
      glob: 7.2.3
      graceful-fs: 4.2.10
      make-fetch-happen: 8.0.14
      nopt: 5.0.0
      npmlog: 4.1.2
      rimraf: 3.0.2
      semver: 7.3.7
      tar: 6.1.11
      which: 2.0.2
    transitivePeerDependencies:
      - supports-color
    dev: true

  /node-int64/0.4.0:
    resolution:
      {
        integrity: sha512-O5lz91xSOeoXP6DulyHfllpq+Eg00MWitZIbtPfoSEvqIHdl5gfcY6hYzDWnj0qD5tz52PI08u9qUvSVeUBeHw==
      }

  /node-libs-browser/2.2.1:
    resolution:
      {
        integrity: sha512-h/zcD8H9kaDZ9ALUWwlBUDo6TKF8a7qBSCSEGfjTVIYeqsioSKaAX+BN7NgiMGp6iSIXZ3PxgCu8KS3b71YK5Q==
      }
    dependencies:
      assert: 1.5.0
      browserify-zlib: 0.2.0
      buffer: 4.9.2
      console-browserify: 1.2.0
      constants-browserify: 1.0.0
      crypto-browserify: 3.12.0
      domain-browser: 1.2.0
      events: 3.3.0
      https-browserify: 1.0.0
      os-browserify: 0.3.0
      path-browserify: 0.0.1
      process: 0.11.10
      punycode: 1.4.1
      querystring-es3: 0.2.1
      readable-stream: 2.3.7
      stream-browserify: 2.0.2
      stream-http: 2.8.3
      string_decoder: 1.3.0
      timers-browserify: 2.0.12
      tty-browserify: 0.0.0
      url: 0.11.0
      util: 0.11.1
      vm-browserify: 1.1.2

  /node-releases/2.0.5:
    resolution:
      {
        integrity: sha512-U9h1NLROZTq9uE1SNffn6WuPDg8icmi3ns4rEl/oTfIle4iLjTliCzgTsbaIFMq/Xn078/lfY/BL0GWZ+psK4Q==
      }

  /node-sass/6.0.1:
    resolution:
      {
        integrity: sha512-f+Rbqt92Ful9gX0cGtdYwjTrWAaGURgaK5rZCWOgCNyGWusFYHhbqCCBoFBeat+HKETOU02AyTxNhJV0YZf2jQ==
      }
    engines: { node: '>=12' }
    hasBin: true
    requiresBuild: true
    dependencies:
      async-foreach: 0.1.3
      chalk: 1.1.3
      cross-spawn: 7.0.3
      gaze: 1.1.3
      get-stdin: 4.0.1
      glob: 7.0.6
      lodash: 4.17.21
      meow: 9.0.0
      nan: 2.16.0
      node-gyp: 7.1.2
      npmlog: 4.1.2
      request: 2.88.2
      sass-graph: 2.2.5
      stdout-stream: 1.4.1
      true-case-path: 1.0.3
    dev: false

  /nodemon/2.0.20:
    resolution:
      {
        integrity: sha512-Km2mWHKKY5GzRg6i1j5OxOHQtuvVsgskLfigG25yTtbyfRGn/GNvIbRyOf1PSCKJ2aT/58TiuUsuOU5UToVViw==
      }
    engines: { node: '>=8.10.0' }
    hasBin: true
    dependencies:
      chokidar: 3.5.3
      debug: 3.2.7
      ignore-by-default: 1.0.1
      minimatch: 3.1.2
      pstree.remy: 1.1.8
      semver: 5.7.1
      simple-update-notifier: 1.0.7
      supports-color: 5.5.0
      touch: 3.1.0
      undefsafe: 2.0.5
    dev: true

  /nopt/1.0.10:
    resolution:
      {
        integrity: sha512-NWmpvLSqUrgrAC9HCuxEvb+PSloHpqVu+FqcO4eeF2h5qYRhA7ev6KvelyQAKtegUbC6RypJnlEOhd8vloNKYg==
      }
    hasBin: true
    dependencies:
      abbrev: 1.1.1
    dev: true

  /nopt/5.0.0:
    resolution:
      {
        integrity: sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==
      }
    engines: { node: '>=6' }
    hasBin: true
    dependencies:
      abbrev: 1.1.1

  /normalize-package-data/2.5.0:
    resolution:
      {
        integrity: sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==
      }
    dependencies:
      hosted-git-info: 2.8.9
      resolve: 1.17.0
      semver: 5.7.1
      validate-npm-package-license: 3.0.4

  /normalize-package-data/3.0.3:
    resolution:
      {
        integrity: sha512-p2W1sgqij3zMMyRC067Dg16bfzVH+w7hyegmpIvZ4JNjqtGOVAIvLmjBx3yP7YTe9vKJgkoNOPjwQGogDoMXFA==
      }
    engines: { node: '>=10' }
    dependencies:
      hosted-git-info: 4.1.0
      is-core-module: 2.9.0
      semver: 7.3.7
      validate-npm-package-license: 3.0.4
    dev: false

  /normalize-path/2.1.1:
    resolution:
      {
        integrity: sha512-3pKJwH184Xo/lnH6oyP1q2pMd7HcypqqmRs91/6/i2CGtWwIKGCkOOMTm/zXbgTEWHw1uNpNi/igc3ePOYHb6w==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      remove-trailing-separator: 1.1.0

  /normalize-path/3.0.0:
    resolution:
      {
        integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==
      }
    engines: { node: '>=0.10.0' }

  /normalize-range/0.1.2:
    resolution:
      {
        integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==
      }
    engines: { node: '>=0.10.0' }

  /normalize-url/4.5.1:
    resolution:
      {
        integrity: sha512-9UZCFRHQdNrfTpGg8+1INIg93B6zE0aXMVFkw1WFwvO4SlZywU6aLg5Of0Ap/PgcbSw4LNxvMWXMeugwMCX0AA==
      }
    engines: { node: '>=8' }
    dev: true

  /normalize-url/6.1.0:
    resolution:
      {
        integrity: sha512-DlL+XwOy3NxAQ8xuC0okPgK46iuVNAK01YN7RueYBqqFeGsBjV9XmCAzAdgt+667bCl5kPh9EqKKDwnaPG1I7A==
      }
    engines: { node: '>=10' }
    dev: false

  /npm-bundled/1.1.2:
    resolution:
      {
        integrity: sha512-x5DHup0SuyQcmL3s7Rx/YQ8sbw/Hzg0rj48eN0dV7hf5cmQq5PXIeioroH3raV1QC1yh3uTYuMThvEQF3iKgGQ==
      }
    dependencies:
      npm-normalize-package-bin: 1.0.1
    dev: false

  /npm-normalize-package-bin/1.0.1:
    resolution:
      {
        integrity: sha512-EPfafl6JL5/rU+ot6P3gRSCpPDW5VmIzX959Ob1+ySFUuuYHWHekXpwdUZcKP5C+DS4GEtdJluwBjnsNDl+fSA==
      }
    dev: false

  /npm-package-arg/6.1.1:
    resolution:
      {
        integrity: sha512-qBpssaL3IOZWi5vEKUKW0cO7kzLeT+EQO9W8RsLOZf76KF9E/K9+wH0C7t06HXPpaH8WH5xF1MExLuCwbTqRUg==
      }
    dependencies:
      hosted-git-info: 2.8.9
      osenv: 0.1.5
      semver: 5.7.1
      validate-npm-package-name: 3.0.0
    dev: false

  /npm-packlist/2.1.5:
    resolution:
      {
        integrity: sha512-KCfK3Vi2F+PH1klYauoQzg81GQ8/GGjQRKYY6tRnpQUPKTs/1gBZSRWtTEd7jGdSn1LZL7gpAmJT+BcS55k2XQ==
      }
    engines: { node: '>=10' }
    hasBin: true
    dependencies:
      glob: 7.2.3
      ignore-walk: 3.0.4
      npm-bundled: 1.1.2
      npm-normalize-package-bin: 1.0.1
    dev: false

  /npm-run-path/2.0.2:
    resolution:
      {
        integrity: sha512-lJxZYlT4DW/bRUtFh1MQIWqmLwQfAxnqWG4HhEdjMlkrJYnJn0Jrr2u3mgxqaWsdiBc76TYkTG/mhrnYTuzfHw==
      }
    engines: { node: '>=4' }
    dependencies:
      path-key: 2.0.1
    dev: true

  /npm-run-path/4.0.1:
    resolution:
      {
        integrity: sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==
      }
    engines: { node: '>=8' }
    dependencies:
      path-key: 3.1.1

  /npmlog/4.1.2:
    resolution:
      {
        integrity: sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==
      }
    dependencies:
      are-we-there-yet: 1.1.7
      console-control-strings: 1.1.0
      gauge: 2.7.4
      set-blocking: 2.0.0

  /npmlog/5.0.1:
    resolution:
      {
        integrity: sha512-AqZtDUWOMKs1G/8lwylVjrdYgqA4d9nu8hc+0gzRxlDb1I10+FHBGMXs6aiQHFdCUUlqH99MUMuLfzWDNDtfxw==
      }
    dependencies:
      are-we-there-yet: 2.0.0
      console-control-strings: 1.1.0
      gauge: 3.0.2
      set-blocking: 2.0.0
    dev: true

  /nth-check/2.1.1:
    resolution:
      {
        integrity: sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==
      }
    dependencies:
      boolbase: 1.0.0

  /num2fraction/1.2.2:
    resolution:
      {
        integrity: sha512-Y1wZESM7VUThYY+4W+X4ySH2maqcA+p7UR+w8VWNWVAd6lwuXXWz/w/Cz43J/dI2I+PS6wD5N+bJUF+gjWvIqg==
      }
    dev: true

  /number-is-nan/1.0.1:
    resolution:
      {
        integrity: sha512-4jbtZXNAsfZbAHiiqjLPBiCl16dES1zI4Hpzzxw61Tk+loF+sBDBKx1ICKKKwIqQ7M0mFn1TmkN7euSncWgHiQ==
      }
    engines: { node: '>=0.10.0' }

  /nwsapi/2.2.0:
    resolution:
      {
        integrity: sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ==
      }

  /oauth-sign/0.9.0:
    resolution:
      {
        integrity: sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==
      }
    dev: false

  /object-assign/4.1.1:
    resolution:
      {
        integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==
      }
    engines: { node: '>=0.10.0' }

  /object-copy/0.1.0:
    resolution:
      {
        integrity: sha512-79LYn6VAb63zgtmAteVOWo9Vdj71ZVBy3Pbse+VqxDpEP83XuujMrGqHIwAXJ5I/aM0zU7dIyIAhifVTPrNItQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      copy-descriptor: 0.1.1
      define-property: 0.2.5
      kind-of: 3.2.2

  /object-inspect/1.12.2:
    resolution:
      {
        integrity: sha512-z+cPxW0QGUp0mcqcsgQyLVRDoXFQbXOwBaqyF7VIgI4TWNQsDHrBpUQslRmIfAoYWdYzs6UlKJtB2XJpTaNSpQ==
      }

  /object-keys/1.1.1:
    resolution:
      {
        integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==
      }
    engines: { node: '>= 0.4' }

  /object-visit/1.0.1:
    resolution:
      {
        integrity: sha512-GBaMwwAVK9qbQN3Scdo0OyvgPW7l3lnaVMj84uTOZlswkX0KpF6fyDBJhtTthf7pymztoN36/KEr1DyhF96zEA==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      isobject: 3.0.1

  /object.assign/4.1.2:
    resolution:
      {
        integrity: sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      has-symbols: 1.0.3
      object-keys: 1.1.1

  /object.entries/1.1.5:
    resolution:
      {
        integrity: sha512-TyxmjUoZggd4OrrU1W66FMDG6CuqJxsFvymeyXI51+vQLN67zYfZseptRge703kKQdo4uccgAKebXFcRCzk4+g==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1

  /object.fromentries/2.0.5:
    resolution:
      {
        integrity: sha512-CAyG5mWQRRiBU57Re4FKoTBjXfDoNwdFVH2Y1tS9PqCsfUTymAohOkEMSG3aRNKmv4lV3O7p1et7c187q6bynw==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1

  /object.getownpropertydescriptors/2.1.4:
    resolution:
      {
        integrity: sha512-sccv3L/pMModT6dJAYF3fzGMVcb38ysQ0tEE6ixv2yXJDtEIPph268OlAdJj5/qZMZDq2g/jqvwppt36uS/uQQ==
      }
    engines: { node: '>= 0.8' }
    dependencies:
      array.prototype.reduce: 1.0.4
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1

  /object.hasown/1.1.1:
    resolution:
      {
        integrity: sha512-LYLe4tivNQzq4JdaWW6WO3HMZZJWzkkH8fnI6EebWl0VZth2wL2Lovm74ep2/gZzlaTdV62JZHEqHQ2yVn8Q/A==
      }
    dependencies:
      define-properties: 1.1.4
      es-abstract: 1.20.1

  /object.pick/1.3.0:
    resolution:
      {
        integrity: sha512-tqa/UMy/CCoYmj+H5qc07qvSL9dqcs/WZENZ1JbtWBlATP+iVOe778gE6MSijnyCnORzDuX6hU+LA4SZ09YjFQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      isobject: 3.0.1

  /object.values/1.1.5:
    resolution:
      {
        integrity: sha512-QUZRW0ilQ3PnPpbNtgdNV1PDbEqLIiSFB3l+EnGtBQ/8SUTLj1PZwtQHABZtLgwpJZTSZhuGLOGk57Drx2IvYg==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1

  /objectorarray/1.0.5:
    resolution:
      {
        integrity: sha512-eJJDYkhJFFbBBAxeh8xW+weHlkI28n2ZdQV/J/DNfWfSKlGEf2xcfAbZTv3riEXHAhL9SVOTs2pRmXiSTf78xg==
      }
    dev: true

  /obuf/1.1.2:
    resolution:
      {
        integrity: sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==
      }

  /on-finished/2.4.1:
    resolution:
      {
        integrity: sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==
      }
    engines: { node: '>= 0.8' }
    dependencies:
      ee-first: 1.1.1

  /on-headers/1.0.2:
    resolution:
      {
        integrity: sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==
      }
    engines: { node: '>= 0.8' }

  /once/1.4.0:
    resolution:
      {
        integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==
      }
    dependencies:
      wrappy: 1.0.2

  /onetime/5.1.2:
    resolution:
      {
        integrity: sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==
      }
    engines: { node: '>=6' }
    dependencies:
      mimic-fn: 2.1.0

  /open/7.4.2:
    resolution:
      {
        integrity: sha512-MVHddDVweXZF3awtlAS+6pgKLlm/JgxZ90+/NBurBoQctVOOB/zDdVjcyPzQ+0laDGbsWgrRkflI65sQeOgT9Q==
      }
    engines: { node: '>=8' }
    dependencies:
      is-docker: 2.2.1
      is-wsl: 2.2.0
    dev: true

  /open/8.4.0:
    resolution:
      {
        integrity: sha512-XgFPPM+B28FtCCgSb9I+s9szOC1vZRSwgWsRUA5ylIxRTgKozqjOCrVOqGsYABPYK5qnfqClxZTFBa8PKt2v6Q==
      }
    engines: { node: '>=12' }
    dependencies:
      define-lazy-prop: 2.0.0
      is-docker: 2.2.1
      is-wsl: 2.2.0

  /opener/1.5.2:
    resolution:
      {
        integrity: sha512-ur5UIdyw5Y7yEj9wLzhqXiy6GZ3Mwx0yGI+5sMn2r0N0v3cKJvUmFH5yPP+WXh9e0xfyzyJX95D8l088DNFj7A==
      }
    hasBin: true

  /optionator/0.8.3:
    resolution:
      {
        integrity: sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.3.0
      prelude-ls: 1.1.2
      type-check: 0.3.2
      word-wrap: 1.2.3

  /optionator/0.9.1:
    resolution:
      {
        integrity: sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.3

  /os-browserify/0.3.0:
    resolution:
      {
        integrity: sha512-gjcpUc3clBf9+210TRaDWbf+rZZZEshZ+DlXMRCeAjp0xhTrnQsKHypIy1J3d5hKdUzj69t708EHtU8P6bUn0A==
      }

  /os-homedir/1.0.2:
    resolution:
      {
        integrity: sha512-B5JU3cabzk8c67mRRd3ECmROafjYMXbuzlwtqdM8IbS8ktlTix8aFGb2bAGKrSRIlnfKwovGUUr72JUPyOb6kQ==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /os-tmpdir/1.0.2:
    resolution:
      {
        integrity: sha512-D2FR03Vir7FIu45XBY20mTb+/ZSWB00sjU9jdQXt83gDrI4Ztz5Fs7/yy74g2N5SVQY4xY1qDr4rNddwYRVX0g==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /osenv/0.1.5:
    resolution:
      {
        integrity: sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==
      }
    dependencies:
      os-homedir: 1.0.2
      os-tmpdir: 1.0.2
    dev: false

  /overlayscrollbars/1.13.2:
    resolution:
      {
        integrity: sha512-xk9eJ8fpuh28WABSDpMpOv90aDQk+x5wLeqU4AGbJg56eGLeKxVPQzMxeX6+BM2dsIIOcBj3Fwvn8A0EzhHN3g==
      }
    dev: true

  /p-all/2.1.0:
    resolution:
      {
        integrity: sha512-HbZxz5FONzz/z2gJfk6bFca0BCiSRF8jU3yCsWOen/vR6lZjfPOu/e7L3uFzTW1i0H8TlC3vqQstEJPQL4/uLA==
      }
    engines: { node: '>=6' }
    dependencies:
      p-map: 2.1.0
    dev: true

  /p-cancelable/1.1.0:
    resolution:
      {
        integrity: sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw==
      }
    engines: { node: '>=6' }
    dev: true

  /p-event/4.2.0:
    resolution:
      {
        integrity: sha512-KXatOjCRXXkSePPb1Nbi0p0m+gQAwdlbhi4wQKJPI1HsMQS9g+Sqp2o+QHziPr7eYJyOZet836KoHEVM1mwOrQ==
      }
    engines: { node: '>=8' }
    dependencies:
      p-timeout: 3.2.0
    dev: true

  /p-filter/2.1.0:
    resolution:
      {
        integrity: sha512-ZBxxZ5sL2HghephhpGAQdoskxplTwr7ICaehZwLIlfL6acuVgZPm8yBNuRAFBGEqtD/hmUeq9eqLg2ys9Xr/yw==
      }
    engines: { node: '>=8' }
    dependencies:
      p-map: 2.1.0
    dev: true

  /p-finally/1.0.0:
    resolution:
      {
        integrity: sha512-LICb2p9CB7FS+0eR1oqWnHhp0FljGLZCWBE9aix0Uye9W8LTQPwMTYVGWQWIw9RdQiDg4+epXQODwIYJtSJaow==
      }
    engines: { node: '>=4' }
    dev: true

  /p-limit/2.3.0:
    resolution:
      {
        integrity: sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==
      }
    engines: { node: '>=6' }
    dependencies:
      p-try: 2.2.0

  /p-limit/3.1.0:
    resolution:
      {
        integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==
      }
    engines: { node: '>=10' }
    dependencies:
      yocto-queue: 0.1.0
    dev: true

  /p-locate/3.0.0:
    resolution:
      {
        integrity: sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==
      }
    engines: { node: '>=6' }
    dependencies:
      p-limit: 2.3.0

  /p-locate/4.1.0:
    resolution:
      {
        integrity: sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==
      }
    engines: { node: '>=8' }
    dependencies:
      p-limit: 2.3.0

  /p-locate/5.0.0:
    resolution:
      {
        integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==
      }
    engines: { node: '>=10' }
    dependencies:
      p-limit: 3.1.0
    dev: true

  /p-map/2.1.0:
    resolution:
      {
        integrity: sha512-y3b8Kpd8OAN444hxfBbFfj1FY/RjtTd8tzYwhUqNYXx0fXx2iX4maP4Qr6qhIKbQXI02wTLAda4fYUbDagTUFw==
      }
    engines: { node: '>=6' }
    dev: true

  /p-map/3.0.0:
    resolution:
      {
        integrity: sha512-d3qXVTF/s+W+CdJ5A29wywV2n8CQQYahlgz2bFiA+4eVNJbHJodPZ+/gXwPGh0bOqA+j8S+6+ckmvLGPk1QpxQ==
      }
    engines: { node: '>=8' }
    dependencies:
      aggregate-error: 3.1.0
    dev: true

  /p-map/4.0.0:
    resolution:
      {
        integrity: sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==
      }
    engines: { node: '>=10' }
    dependencies:
      aggregate-error: 3.1.0
    dev: true

  /p-reflect/2.1.0:
    resolution:
      {
        integrity: sha512-paHV8NUz8zDHu5lhr/ngGWQiW067DK/+IbJ+RfZ4k+s8y4EKyYCz8pGYWjxCg35eHztpJAt+NUgvN4L+GCbPlg==
      }
    engines: { node: '>=8' }
    dev: false

  /p-retry/4.6.2:
    resolution:
      {
        integrity: sha512-312Id396EbJdvRONlngUx0NydfrIQ5lsYu0znKVUzVvArzEIt08V1qhtyESbGVd1FGX7UKtiFp5uwKZdM8wIuQ==
      }
    engines: { node: '>=8' }
    dependencies:
      '@types/retry': 0.12.0
      retry: 0.13.1

  /p-settle/4.1.1:
    resolution:
      {
        integrity: sha512-6THGh13mt3gypcNMm0ADqVNCcYa3BK6DWsuJWFCuEKP1rpY+OKGp7gaZwVmLspmic01+fsg/fN57MfvDzZ/PuQ==
      }
    engines: { node: '>=10' }
    dependencies:
      p-limit: 2.3.0
      p-reflect: 2.1.0
    dev: false

  /p-timeout/3.2.0:
    resolution:
      {
        integrity: sha512-rhIwUycgwwKcP9yTOOFK/AKsAopjjCakVqLHePO3CC6Mir1Z99xT+R63jZxAT5lFZLa2inS5h+ZS2GvR99/FBg==
      }
    engines: { node: '>=8' }
    dependencies:
      p-finally: 1.0.0
    dev: true

  /p-try/2.2.0:
    resolution:
      {
        integrity: sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==
      }
    engines: { node: '>=6' }

  /pac-proxy-agent/5.0.0:
    resolution:
      {
        integrity: sha512-CcFG3ZtnxO8McDigozwE3AqAw15zDvGH+OjXO4kzf7IkEKkQ4gxQ+3sdF50WmhQ4P/bVusXcqNE2S3XrNURwzQ==
      }
    engines: { node: '>= 8' }
    dependencies:
      '@tootallnate/once': 1.1.2
      agent-base: 6.0.2
      debug: 4.3.4
      get-uri: 3.0.2
      http-proxy-agent: 4.0.1
      https-proxy-agent: 5.0.1
      pac-resolver: 5.0.1
      raw-body: 2.5.1
      socks-proxy-agent: 5.0.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /pac-resolver/5.0.1:
    resolution:
      {
        integrity: sha512-cy7u00ko2KVgBAjuhevqpPeHIkCIqPe1v24cydhWjmeuzaBfmUWFCZJ1iAh5TuVzVZoUzXIW7K8sMYOZ84uZ9Q==
      }
    engines: { node: '>= 8' }
    dependencies:
      degenerator: 3.0.2
      ip: 1.1.8
      netmask: 2.0.2
    dev: true

  /package-json/6.5.0:
    resolution:
      {
        integrity: sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==
      }
    engines: { node: '>=8' }
    dependencies:
      got: 9.6.0
      registry-auth-token: 4.2.1
      registry-url: 5.1.0
      semver: 6.3.0
    dev: true

  /pako/1.0.11:
    resolution:
      {
        integrity: sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==
      }

  /parallel-transform/1.2.0:
    resolution:
      {
        integrity: sha512-P2vSmIu38uIlvdcU7fDkyrxj33gTUy/ABO5ZUbGowxNCopBq/OoD42bP4UmMrJoPyk4Uqf0mu3mtWBhHCZD8yg==
      }
    dependencies:
      cyclist: 1.0.1
      inherits: 2.0.4
      readable-stream: 2.3.7

  /param-case/3.0.4:
    resolution:
      {
        integrity: sha512-RXlj7zCYokReqWpOPH9oYivUzLYZ5vAPIfEmCTNViosC78F8F0H9y7T7gG2M39ymgutxF5gcFEsyZQSph9Bp3A==
      }
    dependencies:
      dot-case: 3.0.4
      tslib: 2.3.1

  /parent-module/1.0.1:
    resolution:
      {
        integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==
      }
    engines: { node: '>=6' }
    dependencies:
      callsites: 3.1.0

  /parse-asn1/5.1.6:
    resolution:
      {
        integrity: sha512-RnZRo1EPU6JBnra2vGHj0yhp6ebyjBZpmUCLHWiFhxlzvBCCpAuZ7elsBp1PVAbQN0/04VD/19rfzlBSwLstMw==
      }
    dependencies:
      asn1.js: 5.4.1
      browserify-aes: 1.2.0
      evp_bytestokey: 1.0.3
      pbkdf2: 3.1.2
      safe-buffer: 5.2.1

  /parse-entities/2.0.0:
    resolution:
      {
        integrity: sha512-kkywGpCcRYhqQIchaWqZ875wzpS/bMKhz5HnN3p7wveJTkTtyAB/AlnS0f8DFSqYW1T82t6yEAkEcB+A1I3MbQ==
      }
    dependencies:
      character-entities: 1.2.4
      character-entities-legacy: 1.1.4
      character-reference-invalid: 1.1.4
      is-alphanumerical: 1.0.4
      is-decimal: 1.0.4
      is-hexadecimal: 1.0.4
    dev: true

  /parse-json/5.2.0:
    resolution:
      {
        integrity: sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==
      }
    engines: { node: '>=8' }
    dependencies:
      '@babel/code-frame': 7.16.7
      error-ex: 1.3.2
      json-parse-even-better-errors: 2.3.1
      lines-and-columns: 1.2.4

  /parse-passwd/1.0.0:
    resolution:
      {
        integrity: sha512-1Y1A//QUXEZK7YKz+rD9WydcE1+EuPr6ZBgKecAB8tmoW6UFv0NREVJe1p+jRxtThkcbbKkfwIbWJe/IeE6m2Q==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /parse5/6.0.1:
    resolution:
      {
        integrity: sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw==
      }

  /parseurl/1.3.3:
    resolution:
      {
        integrity: sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==
      }
    engines: { node: '>= 0.8' }

  /pascal-case/3.1.2:
    resolution:
      {
        integrity: sha512-uWlGT3YSnK9x3BQJaOdcZwrnV6hPpd8jFH1/ucpiLRPh/2zCVJKS19E4GvYHvaCcACn3foXZ0cLB9Wrx1KGe5g==
      }
    dependencies:
      no-case: 3.0.4
      tslib: 2.3.1

  /pascalcase/0.1.1:
    resolution:
      {
        integrity: sha512-XHXfu/yOQRy9vYOtUDVMN60OEJjW013GoObG1o+xwQTpB9eYJX/BjXMsdW13ZDPruFhYYn0AG22w0xgQMwl3Nw==
      }
    engines: { node: '>=0.10.0' }

  /path-browserify/0.0.1:
    resolution:
      {
        integrity: sha512-BapA40NHICOS+USX9SN4tyhq+A2RrN/Ws5F0Z5aMHDp98Fl86lX8Oti8B7uN93L4Ifv4fHOEA+pQw87gmMO/lQ==
      }

  /path-dirname/1.0.2:
    resolution:
      {
        integrity: sha512-ALzNPpyNq9AqXMBjeymIjFDAkAFH06mHJH/cSBHAgU0s4vfpBn6b2nf8tiRLvagKD8RbTpq2FKTBg7cl9l3c7Q==
      }

  /path-exists/3.0.0:
    resolution:
      {
        integrity: sha512-bpC7GYwiDYQ4wYLe+FA8lhRjhQCMcQGuSgGGqDkg/QerRWw9CmGRT0iSOVRSZJ29NMLZgIzqaljJ63oaL4NIJQ==
      }
    engines: { node: '>=4' }

  /path-exists/4.0.0:
    resolution:
      {
        integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==
      }
    engines: { node: '>=8' }

  /path-is-absolute/1.0.1:
    resolution:
      {
        integrity: sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==
      }
    engines: { node: '>=0.10.0' }

  /path-key/2.0.1:
    resolution:
      {
        integrity: sha512-fEHGKCSmUSDPv4uoj8AlD+joPlq3peND+HRYyxFz4KPw4z926S/b8rIuFs2FYJg3BwsxJf6A9/3eIdLaYC+9Dw==
      }
    engines: { node: '>=4' }

  /path-key/3.1.1:
    resolution:
      {
        integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==
      }
    engines: { node: '>=8' }

  /path-parse/1.0.7:
    resolution:
      {
        integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==
      }

  /path-to-regexp/0.1.7:
    resolution:
      {
        integrity: sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ==
      }

  /path-type/3.0.0:
    resolution:
      {
        integrity: sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==
      }
    engines: { node: '>=4' }
    dependencies:
      pify: 3.0.0
    dev: true

  /path-type/4.0.0:
    resolution:
      {
        integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==
      }
    engines: { node: '>=8' }

  /pbkdf2/3.1.2:
    resolution:
      {
        integrity: sha512-iuh7L6jA7JEGu2WxDwtQP1ddOpaJNC4KlDEFfdQajSGgGPNi4OyDc2R7QnbY2bR9QjBVGwgvTdNJZoE7RaxUMA==
      }
    engines: { node: '>=0.12' }
    dependencies:
      create-hash: 1.2.0
      create-hmac: 1.1.7
      ripemd160: 2.0.2
      safe-buffer: 5.2.1
      sha.js: 2.4.11

  /pend/1.2.0:
    resolution:
      {
        integrity: sha512-F3asv42UuXchdzt+xXqfW1OGlVBe+mxa2mqI0pg5yAHZPvFmY3Y6drSf/GQ1A86WgWEN9Kzh/WrgKa6iGcHXLg==
      }
    dev: true

  /performance-now/2.1.0:
    resolution:
      {
        integrity: sha512-7EAHlyLHI56VEIdK57uwHdHKIaAGbnXPiw0yWbarQZOKaKpvUIgW0jWRVLiatnM+XXlSwsanIBH/hzGMJulMow==
      }
    dev: false

  /picocolors/0.2.1:
    resolution:
      {
        integrity: sha512-cMlDqaLEqfSaW8Z7N5Jw+lyIW869EzT73/F5lhtY9cLGoVxSXznfgfXMO0Z5K0o0Q2TkTXq+0KFsdnSe3jDViA==
      }

  /picocolors/1.0.0:
    resolution:
      {
        integrity: sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==
      }

  /picomatch/2.3.1:
    resolution:
      {
        integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==
      }
    engines: { node: '>=8.6' }

  /pidof/1.0.2:
    resolution:
      {
        integrity: sha512-LLJhTVEUCZnotdAM5rd7KiTdLGgk6i763/hsd5pO+8yuF7mdgg0ob8w/98KrTAcPsj6YzGrkFLPVtBOr1uW2ag==
      }
    dev: false

  /pify/3.0.0:
    resolution:
      {
        integrity: sha512-C3FsVNH1udSEX48gGX1xfvwTWfsYWj5U+8/uK15BGzIGrKoUpghX8hWZwa/OFnakBiiVNmBvemTJR5mcy7iPcg==
      }
    engines: { node: '>=4' }
    dev: true

  /pify/4.0.1:
    resolution:
      {
        integrity: sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==
      }
    engines: { node: '>=6' }

  /pino-std-serializers/3.2.0:
    resolution:
      {
        integrity: sha512-EqX4pwDPrt3MuOAAUBMU0Tk5kR/YcCM5fNPEzgCO2zJ5HfX0vbiH9HbJglnyeQsN96Kznae6MWD47pZB5avTrg==
      }
    dev: false

  /pino/6.14.0:
    resolution:
      {
        integrity: sha512-iuhEDel3Z3hF9Jfe44DPXR8l07bhjuFY3GMHIXbjnY9XcafbyDDwl2sN2vw2GjMPf5Nkoe+OFao7ffn9SXaKDg==
      }
    hasBin: true
    dependencies:
      fast-redact: 3.1.1
      fast-safe-stringify: 2.1.1
      flatstr: 1.0.12
      pino-std-serializers: 3.2.0
      process-warning: 1.0.0
      quick-format-unescaped: 4.0.4
      sonic-boom: 1.4.1
    dev: false

  /pirates/4.0.5:
    resolution:
      {
        integrity: sha512-8V9+HQPupnaXMA23c5hvl69zXvTwTzyAYasnkb0Tts4XvO4CliqONMOnvlq26rkhLC3nWDFBJf73LU1e1VZLaQ==
      }
    engines: { node: '>= 6' }

  /pkg-dir/3.0.0:
    resolution:
      {
        integrity: sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==
      }
    engines: { node: '>=6' }
    dependencies:
      find-up: 3.0.0

  /pkg-dir/4.2.0:
    resolution:
      {
        integrity: sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==
      }
    engines: { node: '>=8' }
    dependencies:
      find-up: 4.1.0
    dev: true

  /pkg-dir/5.0.0:
    resolution:
      {
        integrity: sha512-NPE8TDbzl/3YQYY7CSS228s3g2ollTFnc+Qi3tqmqJp9Vg2ovUpixcJEo2HJScN2Ez+kEaal6y70c0ehqJBJeA==
      }
    engines: { node: '>=10' }
    dependencies:
      find-up: 5.0.0
    dev: true

  /pkg-up/3.1.0:
    resolution:
      {
        integrity: sha512-nDywThFk1i4BQK4twPQ6TA4RT8bDY96yeuCVBWL3ePARCiEKDRSrNGbFIgUJpLp+XeIR65v8ra7WuJOFUBtkMA==
      }
    engines: { node: '>=8' }
    dependencies:
      find-up: 3.0.0
    dev: true

  /pnp-webpack-plugin/1.6.4_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-7Wjy+9E3WwLOEL30D+m8TSTF7qJJUJLONBnwQp0518siuMxUQUbgZwssaFX+QKlZkjHZcw/IpZCt/H0srrntSg==
      }
    engines: { node: '>=6' }
    dependencies:
      ts-pnp: 1.2.0_typescript@4.8.4
    transitivePeerDependencies:
      - typescript
    dev: true

  /polished/4.2.2:
    resolution:
      {
        integrity: sha512-Sz2Lkdxz6F2Pgnpi9U5Ng/WdWAUZxmHrNPoVlm3aAemxoy2Qy7LGjQg4uf8qKelDAUW94F4np3iH2YPf2qefcQ==
      }
    engines: { node: '>=10' }
    dependencies:
      '@babel/runtime': 7.18.3
    dev: true

  /posix-character-classes/0.1.1:
    resolution:
      {
        integrity: sha512-xTgYBc3fuo7Yt7JbiuFxSYGToMoz8fLoE6TC9Wx1P/u+LfeThMOAqmuyECnlBaaJb+u1m9hHiXUEtwW4OzfUJg==
      }
    engines: { node: '>=0.10.0' }

  /postcss-calc/8.2.4_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-SmWMSJmB8MRnnULldx0lQIyhSNvuDl9HfrZkaqqE/WHAhToYsAvDq+yAsA/kIyINDszOp3Rh0GFoNuH5Ypsm3Q==
      }
    peerDependencies:
      postcss: ^8.2.2
    dependencies:
      postcss: 8.4.14
      postcss-selector-parser: 6.0.10
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-colormin/5.3.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-WdDO4gOFG2Z8n4P8TWBpshnL3JpmNmJwdnfP2gbk2qBA8PWwOYcmjmI/t3CmMeL72a7Hkd+x/Mg9O2/0rD54Pg==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.20.4
      caniuse-api: 3.0.0
      colord: 2.9.2
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-convert-values/5.1.2_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-c6Hzc4GAv95B7suy4udszX9Zy4ETyMCgFPUDtWjdFTKH1SE9eFY/jEpHSwTH1QPuwxHpWslhckUQWbNRM4ho5g==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.20.4
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-discard-comments/5.1.2_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-+L8208OVbHVF2UQf1iDmRcbdjJkuBF6IS29yBDSiWUIzpYaAhtNl6JYnYm12FnkeCwQqF5LeklOu6rAqgfBZqQ==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
    dev: false

  /postcss-discard-duplicates/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-zmX3IoSI2aoenxHV6C7plngHWWhUOV3sP1T8y2ifzxzbtnuhk1EdPwm0S1bIUNaJ2eNbWeGLEwzw8huPD67aQw==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
    dev: false

  /postcss-discard-empty/5.1.1_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-zPz4WljiSuLWsI0ir4Mcnr4qQQ5e1Ukc3i7UfE2XcrwKK2LIPIqE5jxMRxO6GbI3cv//ztXDsXwEWT3BHOGh3A==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
    dev: false

  /postcss-discard-overridden/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-21nOL7RqWR1kasIVdKs8HNqQJhFxLsyRfAnUDm4Fe4t4mCWL9OJiHvlHPjcd8zc5Myu89b/7wZDnOSjFgeWRtw==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
    dev: false

  /postcss-flexbugs-fixes/4.2.1:
    resolution:
      {
        integrity: sha512-9SiofaZ9CWpQWxOwRh1b/r85KD5y7GgvsNt1056k6OYLvWUun0czCvogfJgylC22uJTwW1KzY3Gz65NZRlvoiQ==
      }
    dependencies:
      postcss: 7.0.39
    dev: true

  /postcss-loader/4.1.0_5acfmy7ci7uo46t3nkxjtzzdua:
    resolution:
      {
        integrity: sha512-vbCkP70F3Q9PIk6d47aBwjqAMI4LfkXCoyxj+7NPNuVIwfTGdzv2KVQes59/RuxMniIgsYQCFSY42P3+ykJfaw==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      postcss: ^7.0.0 || ^8.0.1
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      cosmiconfig: 7.0.1
      klona: 2.0.5
      loader-utils: 2.0.2
      postcss: 8.4.14
      schema-utils: 3.1.1
      semver: 7.3.7
      webpack: 4.44.2
    dev: true

  /postcss-loader/4.3.0_4a2i7aa2i6hzz4ngguaxzo4tzi:
    resolution:
      {
        integrity: sha512-M/dSoIiNDOo8Rk0mUqoj4kpGq91gcxCfb9PoyZVdZ76/AuhxylHDYZblNE8o+EQ9AMSASeMFEKxZf5aU6wlx1Q==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      postcss: ^7.0.0 || ^8.0.1
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      cosmiconfig: 7.0.1
      klona: 2.0.5
      loader-utils: 2.0.2
      postcss: 7.0.39
      schema-utils: 3.1.1
      semver: 7.3.7
      webpack: 4.44.2
    dev: true

  /postcss-loader/6.2.1_yo2uikd3tnzhibf7mpy6pnymra:
    resolution:
      {
        integrity: sha512-WbbYpmAaKcux/P66bZ40bpWsBucjx/TTgVVzRZ9yUO8yQfVBlameJ0ZGVaPfH64hNSBh63a+ICP5nqOpBA0w+Q==
      }
    engines: { node: '>= 12.13.0' }
    peerDependencies:
      postcss: ^7.0.0 || ^8.0.1
      webpack: ^5.0.0
    dependencies:
      cosmiconfig: 7.0.1
      klona: 2.0.5
      postcss: 8.4.14
      semver: 7.3.7
      webpack: 5.68.0
    dev: false

  /postcss-merge-longhand/5.1.5_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-NOG1grw9wIO+60arKa2YYsrbgvP6tp+jqc7+ZD5/MalIw234ooH2C6KlR6FEn4yle7GqZoBxSK1mLBE9KPur6w==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
      stylehacks: 5.1.0_postcss@8.4.14
    dev: false

  /postcss-merge-rules/5.1.2_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-zKMUlnw+zYCWoPN6yhPjtcEdlJaMUZ0WyVcxTAmw3lkkN/NDMRkOkiuctQEoWAOvH7twaxUUdvBWl0d4+hifRQ==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.20.4
      caniuse-api: 3.0.0
      cssnano-utils: 3.1.0_postcss@8.4.14
      postcss: 8.4.14
      postcss-selector-parser: 6.0.10
    dev: false

  /postcss-minify-font-values/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-el3mYTgx13ZAPPirSVsHqFzl+BBBDrXvbySvPGFnQcTI4iNslrPaFq4muTkLZmKlGk4gyFAYUBMH30+HurREyA==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-minify-gradients/5.1.1_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-VGvXMTpCEo4qHTNSa9A0a3D+dxGFZCYwR6Jokk+/3oB6flu2/PnPXAh2x7x52EkY5xlIHLm+Le8tJxe/7TNhzw==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      colord: 2.9.2
      cssnano-utils: 3.1.0_postcss@8.4.14
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-minify-params/5.1.3_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-bkzpWcjykkqIujNL+EVEPOlLYi/eZ050oImVtHU7b4lFS82jPnsCb44gvC6pxaNt38Els3jWYDHTjHKf0koTgg==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.20.4
      cssnano-utils: 3.1.0_postcss@8.4.14
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-minify-selectors/5.2.1_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-nPJu7OjZJTsVUmPdm2TcaiohIwxP+v8ha9NehQ2ye9szv4orirRU3SDdtUmKH+10nzn0bAyOXZ0UEr7OpvLehg==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-selector-parser: 6.0.10
    dev: false

  /postcss-modules-extract-imports/1.1.0:
    resolution:
      {
        integrity: sha512-zF9+UIEvtpeqMGxhpeT9XaIevQSrBBCz9fi7SwfkmjVacsSj8DY5eFVgn+wY8I9vvdDDwK5xC8Myq4UkoLFIkA==
      }
    dependencies:
      postcss: 6.0.1
    dev: false

  /postcss-modules-extract-imports/2.0.0:
    resolution:
      {
        integrity: sha512-LaYLDNS4SG8Q5WAWqIJgdHPJrDDr/Lv775rMBFUbgjTz6j34lUznACHcdRWroPvXANP2Vj7yNK57vp9eFqzLWQ==
      }
    engines: { node: '>= 6' }
    dependencies:
      postcss: 7.0.39
    dev: true

  /postcss-modules-extract-imports/3.0.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-bdHleFnP3kZ4NYDhuGlVK+CMrQ/pqUm8bx/oGL93K6gVwiclvX5x0n76fYMKuIGKzlABOy13zsvqjb0f92TEXw==
      }
    engines: { node: ^10 || ^12 || >= 14 }
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      postcss: 8.4.14

  /postcss-modules-local-by-default/1.2.0:
    resolution:
      {
        integrity: sha512-X4cquUPIaAd86raVrBwO8fwRfkIdbwFu7CTfEOjiZQHVQwlHRSkTgH5NLDmMm5+1hQO8u6dZ+TOOJDbay1hYpA==
      }
    dependencies:
      css-selector-tokenizer: 0.7.3
      postcss: 6.0.1
    dev: false

  /postcss-modules-local-by-default/3.0.3:
    resolution:
      {
        integrity: sha512-e3xDq+LotiGesympRlKNgaJ0PCzoUIdpH0dj47iWAui/kyTgh3CiAr1qP54uodmJhl6p9rN6BoNcdEDVJx9RDw==
      }
    engines: { node: '>= 6' }
    dependencies:
      icss-utils: 4.1.1
      postcss: 7.0.39
      postcss-selector-parser: 6.0.10
      postcss-value-parser: 4.2.0
    dev: true

  /postcss-modules-local-by-default/4.0.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-sT7ihtmGSF9yhm6ggikHdV0hlziDTX7oFoXtuVWeDd3hHObNkcHRo9V3yg7vCAY7cONyxJC/XXCmmiHHcvX7bQ==
      }
    engines: { node: ^10 || ^12 || >= 14 }
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      icss-utils: 5.1.0_postcss@8.4.14
      postcss: 8.4.14
      postcss-selector-parser: 6.0.10
      postcss-value-parser: 4.2.0

  /postcss-modules-scope/1.1.0:
    resolution:
      {
        integrity: sha512-LTYwnA4C1He1BKZXIx1CYiHixdSe9LWYVKadq9lK5aCCMkoOkFyZ7aigt+srfjlRplJY3gIol6KUNefdMQJdlw==
      }
    dependencies:
      css-selector-tokenizer: 0.7.3
      postcss: 6.0.1
    dev: false

  /postcss-modules-scope/2.2.0:
    resolution:
      {
        integrity: sha512-YyEgsTMRpNd+HmyC7H/mh3y+MeFWevy7V1evVhJWewmMbjDHIbZbOXICC2y+m1xI1UVfIT1HMW/O04Hxyu9oXQ==
      }
    engines: { node: '>= 6' }
    dependencies:
      postcss: 7.0.39
      postcss-selector-parser: 6.0.10
    dev: true

  /postcss-modules-scope/3.0.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-hncihwFA2yPath8oZ15PZqvWGkWf+XUfQgUGamS4LqoP1anQLOsOJw0vr7J7IwLpoY9fatA2qiGUGmuZL0Iqlg==
      }
    engines: { node: ^10 || ^12 || >= 14 }
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      postcss: 8.4.14
      postcss-selector-parser: 6.0.10

  /postcss-modules-values/1.3.0:
    resolution:
      {
        integrity: sha512-i7IFaR9hlQ6/0UgFuqM6YWaCfA1Ej8WMg8A5DggnH1UGKJvTV/ugqq/KaULixzzOi3T/tF6ClBXcHGCzdd5unA==
      }
    dependencies:
      icss-replace-symbols: 1.1.0
      postcss: 6.0.1
    dev: false

  /postcss-modules-values/3.0.0:
    resolution:
      {
        integrity: sha512-1//E5jCBrZ9DmRX+zCtmQtRSV6PV42Ix7Bzj9GbwJceduuf7IqP8MgeTXuRDHOWj2m0VzZD5+roFWDuU8RQjcg==
      }
    dependencies:
      icss-utils: 4.1.1
      postcss: 7.0.39
    dev: true

  /postcss-modules-values/4.0.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-RDxHkAiEGI78gS2ofyvCsu7iycRv7oqw5xMWn9iMoR0N/7mf9D50ecQqUo5BZ9Zh2vH4bCUR/ktCqbB9m8vJjQ==
      }
    engines: { node: ^10 || ^12 || >= 14 }
    peerDependencies:
      postcss: ^8.1.0
    dependencies:
      icss-utils: 5.1.0_postcss@8.4.14
      postcss: 8.4.14

  /postcss-modules/1.5.0:
    resolution:
      {
        integrity: sha512-KiAihzcV0TxTTNA5OXreyIXctuHOfR50WIhqBpc8pe0Q5dcs/Uap9EVlifOI9am7zGGdGOJQ6B1MPYKo2UxgOg==
      }
    dependencies:
      css-modules-loader-core: 1.1.0
      generic-names: 2.0.1
      lodash.camelcase: 4.3.0
      postcss: 7.0.39
      string-hash: 1.1.3
    dev: false

  /postcss-normalize-charset/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-mSgUJ+pd/ldRGVx26p2wz9dNZ7ji6Pn8VWBajMXFf8jk7vUoSrZ2lt/wZR7DtlZYKesmZI680qjr2CeFF2fbUg==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
    dev: false

  /postcss-normalize-display-values/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-WP4KIM4o2dazQXWmFaqMmcvsKmhdINFblgSeRgn8BJ6vxaMyaJkwAzpPpuvSIoG/rmX3M+IrRZEz2H0glrQNEA==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-normalize-positions/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-8gmItgA4H5xiUxgN/3TVvXRoJxkAWLW6f/KKhdsH03atg0cB8ilXnrB5PpSshwVu/dD2ZsRFQcR1OEmSBDAgcQ==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-normalize-repeat-style/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-IR3uBjc+7mcWGL6CtniKNQ4Rr5fTxwkaDHwMBDGGs1x9IVRkYIT/M4NelZWkAOBdV6v3Z9S46zqaKGlyzHSchw==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-normalize-string/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-oYiIJOf4T9T1N4i+abeIc7Vgm/xPCGih4bZz5Nm0/ARVJ7K6xrDlLwvwqOydvyL3RHNf8qZk6vo3aatiw/go3w==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-normalize-timing-functions/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-DOEkzJ4SAXv5xkHl0Wa9cZLF3WCBhF3o1SKVxKQAa+0pYKlueTpCgvkFAHfk+Y64ezX9+nITGrDZeVGgITJXjg==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-normalize-unicode/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-J6M3MizAAZ2dOdSjy2caayJLQT8E8K9XjLce8AUQMwOrCvjCHv24aLC/Lps1R1ylOfol5VIDMaM/Lo9NGlk1SQ==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.20.4
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-normalize-url/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-5upGeDO+PVthOxSmds43ZeMeZfKH+/DKgGRD7TElkkyS46JXAUhMzIKiCa7BabPeIy3AQcTkXwVVN7DbqsiCew==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      normalize-url: 6.1.0
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-normalize-whitespace/5.1.1_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-83ZJ4t3NUDETIHTa3uEg6asWjSBYL5EdkVB0sDncx9ERzOKBVJIUeDO9RyA9Zwtig8El1d79HBp0JEi8wvGQnA==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-ordered-values/5.1.2_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-wr2avRbW4HS2XE2ZCqpfp4N/tDC6GZKZ+SVP8UBTOVS8QWrc4TD8MYrebJrvVVlGPKszmiSCzue43NDiVtgDmg==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      cssnano-utils: 3.1.0_postcss@8.4.14
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-reduce-initial/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-5OgTUviz0aeH6MtBjHfbr57tml13PuedK/Ecg8szzd4XRMbYxH4572JFG067z+FqBIf6Zp/d+0581glkvvWMFw==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.20.4
      caniuse-api: 3.0.0
      postcss: 8.4.14
    dev: false

  /postcss-reduce-transforms/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-2fbdbmgir5AvpW9RLtdONx1QoYG2/EtqpNQbFASDlixBbAYuTcJ0dECwlqNqH7VbaUnEnh8SrxOe2sRIn24XyQ==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
    dev: false

  /postcss-selector-parser/6.0.10:
    resolution:
      {
        integrity: sha512-IQ7TZdoaqbT+LCpShg46jnZVlhWD2w6iQYAcYXfHARZ7X1t/UGhhceQDs5X0cGqKvYlHNOuv7Oa1xmb0oQuA3w==
      }
    engines: { node: '>=4' }
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  /postcss-svgo/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-D75KsH1zm5ZrHyxPakAxJWtkyXew5qwS70v56exwvw542d9CRtTo78K0WeFxZB4G7JXKKMbEZtZayTGdIky/eA==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-value-parser: 4.2.0
      svgo: 2.8.0
    dev: false

  /postcss-unique-selectors/5.1.1_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-5JiODlELrz8L2HwxfPnhOWZYWDxVHWL83ufOv84NrcgipI7TaeRsatAhK4Tr2/ZiYldpK/wBvw5BD3qfaK96GA==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      postcss: 8.4.14
      postcss-selector-parser: 6.0.10
    dev: false

  /postcss-value-parser/4.2.0:
    resolution:
      {
        integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==
      }

  /postcss/6.0.1:
    resolution:
      {
        integrity: sha512-VbGX1LQgQbf9l3cZ3qbUuC3hGqIEOGQFHAEHQ/Diaeo0yLgpgK5Rb8J+OcamIfQ9PbAU/fzBjVtQX3AhJHUvZw==
      }
    engines: { node: '>=4.0.0' }
    dependencies:
      chalk: 1.1.3
      source-map: 0.5.7
      supports-color: 3.2.3
    dev: false

  /postcss/7.0.39:
    resolution:
      {
        integrity: sha512-yioayjNbHn6z1/Bywyb2Y4s3yvDAeXGOyxqD+LnVOinq6Mdmd++SW2wUNVzavyyHxd6+DxzWGIuosg6P1Rj8uA==
      }
    engines: { node: '>=6.0.0' }
    dependencies:
      picocolors: 0.2.1
      source-map: 0.6.1

  /postcss/8.4.14:
    resolution:
      {
        integrity: sha512-E398TUmfAYFPBSdzgeieK2Y1+1cpdxJx8yXbK/m57nRhKSmk1GB2tO4lbLBtlkfPQTDKfe4Xqv1ASWPpayPEig==
      }
    engines: { node: ^10 || ^12 || >=14 }
    dependencies:
      nanoid: 3.3.4
      picocolors: 1.0.0
      source-map-js: 1.0.2

  /prelude-ls/1.1.2:
    resolution:
      {
        integrity: sha512-ESF23V4SKG6lVSGZgYNpbsiaAkdab6ZgOxe52p7+Kid3W3u3bxR4Vfd/o21dmN7jSt0IwgZ4v5MUd26FEtXE9w==
      }
    engines: { node: '>= 0.8.0' }

  /prelude-ls/1.2.1:
    resolution:
      {
        integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==
      }
    engines: { node: '>= 0.8.0' }

  /prepend-http/2.0.0:
    resolution:
      {
        integrity: sha512-ravE6m9Atw9Z/jjttRUZ+clIXogdghyZAuWJ3qEzjT+jI/dL1ifAqhZeC5VHzQp1MSt1+jxKkFNemj/iO7tVUA==
      }
    engines: { node: '>=4' }
    dev: true

  /prettier/2.3.0:
    resolution:
      {
        integrity: sha512-kXtO4s0Lz/DW/IJ9QdWhAf7/NmPWQXkFr/r/WkR3vyI+0v8amTDxiaQSLzs8NBlytfLWX/7uQUMIW677yLKl4w==
      }
    engines: { node: '>=10.13.0' }
    hasBin: true
    dev: true

  /prettier/2.3.2:
    resolution:
      {
        integrity: sha512-lnJzDfJ66zkMy58OL5/NY5zp70S7Nz6KqcKkXYzn2tMVrNxvbqaBpg7H3qHaLxCJ5lNMsGuM8+ohS7cZrthdLQ==
      }
    engines: { node: '>=10.13.0' }
    hasBin: true

  /pretty-error/2.1.2:
    resolution:
      {
        integrity: sha512-EY5oDzmsX5wvuynAByrmY0P0hcp+QpnAKbJng2A2MPjVKXCxrDSUkzghVJ4ZGPIv+JC4gX8fPUWscC0RtjsWGw==
      }
    dependencies:
      lodash: 4.17.21
      renderkid: 2.0.7

  /pretty-error/4.0.0:
    resolution:
      {
        integrity: sha512-AoJ5YMAcXKYxKhuJGdcvse+Voc6v1RgnsR3nWcYU7q4t6z0Q6T86sv5Zq8VIRbOWWFpvdGE83LtdSMNd+6Y0xw==
      }
    dependencies:
      lodash: 4.17.21
      renderkid: 3.0.0

  /pretty-format/27.5.1:
    resolution:
      {
        integrity: sha512-Qb1gy5OrP5+zDf2Bvnzdl3jsTf1qXVMazbvCoKhtKqVs4/YK4ozX4gKQJJVyNe+cajNPn0KoC0MC3FUmaHWEmQ==
      }
    engines: { node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0 }
    dependencies:
      ansi-regex: 5.0.1
      ansi-styles: 5.2.0
      react-is: 17.0.2

  /pretty-hrtime/1.0.3:
    resolution:
      {
        integrity: sha512-66hKPCr+72mlfiSjlEB1+45IjXSqvVAIy6mocupoww4tBFE9R9IhwwUGoI4G++Tc9Aq+2rxOt0RFU6gPcrte0A==
      }
    engines: { node: '>= 0.8' }
    dev: true

  /prismjs/1.27.0:
    resolution:
      {
        integrity: sha512-t13BGPUlFDR7wRB5kQDG4jjl7XeuH6jbJGt11JHPL96qwsEHNX2+68tFXqc1/k+/jALsbSWJKUOT/hcYAZ5LkA==
      }
    engines: { node: '>=6' }
    dev: true

  /prismjs/1.28.0:
    resolution:
      {
        integrity: sha512-8aaXdYvl1F7iC7Xm1spqSaY/OJBpYW3v+KJ+F17iYxvdc8sfjW194COK5wVhMZX45tGteiBQgdvD/nhxcRwylw==
      }
    engines: { node: '>=6' }
    dev: true

  /private/0.1.8:
    resolution:
      {
        integrity: sha512-VvivMrbvd2nKkiG38qjULzlc+4Vx4wm/whI9pQD35YrARNnhxeiRktSOhSukRLFNlzg6Br/cJPet5J/u19r/mg==
      }
    engines: { node: '>= 0.6' }
    dev: true

  /process-nextick-args/2.0.1:
    resolution:
      {
        integrity: sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==
      }

  /process-warning/1.0.0:
    resolution:
      {
        integrity: sha512-du4wfLyj4yCZq1VupnVSZmRsPJsNuxoDQFdCFHLaYiEbFBD7QE0a+I4D7hOxrVnh78QE/YipFAj9lXHiXocV+Q==
      }
    dev: false

  /process/0.11.10:
    resolution:
      {
        integrity: sha512-cdGef/drWFoydD1JsMzuFf8100nZl+GT+yacc2bEced5f9Rjk4z+WtFUTBu9PhOi9j/jfmBPu0mMEY4wIdAF8A==
      }
    engines: { node: '>= 0.6.0' }

  /progress/2.0.3:
    resolution:
      {
        integrity: sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==
      }
    engines: { node: '>=0.4.0' }
    dev: true

  /promise-inflight/1.0.1:
    resolution:
      {
        integrity: sha512-6zWPyEOFaQBJYcGMHBKTKJ3u6TBsnMFOIZSa6ce1e/ZrrsOlnHRHbabMjLiBYKp+n44X9eUI6VUPaukCXHuG4g==
      }

  /promise-retry/2.0.1:
    resolution:
      {
        integrity: sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==
      }
    engines: { node: '>=10' }
    dependencies:
      err-code: 2.0.3
      retry: 0.12.0
    dev: true

  /promise.allsettled/1.0.5:
    resolution:
      {
        integrity: sha512-tVDqeZPoBC0SlzJHzWGZ2NKAguVq2oiYj7gbggbiTvH2itHohijTp7njOUA0aQ/nl+0lr/r6egmhoYu63UZ/pQ==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      array.prototype.map: 1.0.4
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
      get-intrinsic: 1.1.2
      iterate-value: 1.0.2
    dev: true

  /promise.prototype.finally/3.1.3:
    resolution:
      {
        integrity: sha512-EXRF3fC9/0gz4qkt/f5EP5iW4kj9oFpBICNpCNOb/52+8nlHIX07FPLbi/q4qYBQ1xZqivMzTpNQSnArVASolQ==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
    dev: true

  /promptly/3.2.0:
    resolution:
      {
        integrity: sha512-WnR9obtgW+rG4oUV3hSnNGl1pHm3V1H/qD9iJBumGSmVsSC5HpZOLuu8qdMb6yCItGfT7dcRszejr/5P3i9Pug==
      }
    dependencies:
      read: 1.0.7
    dev: true

  /prompts/2.4.2:
    resolution:
      {
        integrity: sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==
      }
    engines: { node: '>= 6' }
    dependencies:
      kleur: 3.0.3
      sisteransi: 1.0.5
    dev: true

  /prop-types/15.8.1:
    resolution:
      {
        integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==
      }
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  /property-information/5.6.0:
    resolution:
      {
        integrity: sha512-YUHSPk+A30YPv+0Qf8i9Mbfe/C0hdPXk1s1jPVToV8pk8BQtpw10ct89Eo7OWkutrwqvT0eicAxlOg3dOAu8JA==
      }
    dependencies:
      xtend: 4.0.2
    dev: true

  /proxy-addr/2.0.7:
    resolution:
      {
        integrity: sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==
      }
    engines: { node: '>= 0.10' }
    dependencies:
      forwarded: 0.2.0
      ipaddr.js: 1.9.1

  /proxy-agent/5.0.0:
    resolution:
      {
        integrity: sha512-gkH7BkvLVkSfX9Dk27W6TyNOWWZWRilRfk1XxGNWOYJ2TuedAv1yFpCaU9QSBmBe716XOTNpYNOzhysyw8xn7g==
      }
    engines: { node: '>= 8' }
    dependencies:
      agent-base: 6.0.2
      debug: 4.3.4
      http-proxy-agent: 4.0.1
      https-proxy-agent: 5.0.1
      lru-cache: 5.1.1
      pac-proxy-agent: 5.0.0
      proxy-from-env: 1.1.0
      socks-proxy-agent: 5.0.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /proxy-from-env/1.1.0:
    resolution:
      {
        integrity: sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==
      }
    dev: true

  /prr/1.0.1:
    resolution:
      {
        integrity: sha512-yPw4Sng1gWghHQWj0B3ZggWUm4qVbPwPFcRG8KyxiU7J2OHFSoEHKS+EZ3fv5l1t9CyCiop6l/ZYeWbrgoQejw==
      }

  /pseudolocale/1.1.0:
    resolution:
      {
        integrity: sha512-OZ8I/hwYEJ3beN3IEcNnt8EpcqblH0/x23hulKBXjs+WhTTEle+ijCHCkh2bd+cIIeCuCwSCbBe93IthGG6hLw==
      }
    dependencies:
      commander: 9.3.0
    dev: false

  /psl/1.8.0:
    resolution:
      {
        integrity: sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==
      }

  /pstree.remy/1.1.8:
    resolution:
      {
        integrity: sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==
      }
    dev: true

  /public-encrypt/4.0.3:
    resolution:
      {
        integrity: sha512-zVpa8oKZSz5bTMTFClc1fQOnyyEzpl5ozpi1B5YcvBrdohMjH2rfsBtyXcuNuwjsDIXmBYlF2N5FlJYhR29t8Q==
      }
    dependencies:
      bn.js: 4.12.0
      browserify-rsa: 4.1.0
      create-hash: 1.2.0
      parse-asn1: 5.1.6
      randombytes: 2.1.0
      safe-buffer: 5.2.1

  /pump/2.0.1:
    resolution:
      {
        integrity: sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==
      }
    dependencies:
      end-of-stream: 1.4.4
      once: 1.4.0

  /pump/3.0.0:
    resolution:
      {
        integrity: sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==
      }
    dependencies:
      end-of-stream: 1.4.4
      once: 1.4.0

  /pumpify/1.5.1:
    resolution:
      {
        integrity: sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==
      }
    dependencies:
      duplexify: 3.7.1
      inherits: 2.0.4
      pump: 2.0.1

  /punycode/1.3.2:
    resolution:
      {
        integrity: sha512-RofWgt/7fL5wP1Y7fxE7/EmTLzQVnB0ycyibJ0OOHIlJqTNzglYFxVwETOcIoJqJmpDXJ9xImDv+Fq34F/d4Dw==
      }

  /punycode/1.4.1:
    resolution:
      {
        integrity: sha512-jmYNElW7yvO7TV33CjSmvSiE2yco3bV2czu/OzDKdMNVZQWfxCblURLhf+47syQRBntjfLdd/H0egrzIG+oaFQ==
      }

  /punycode/2.1.1:
    resolution:
      {
        integrity: sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==
      }
    engines: { node: '>=6' }

  /pupa/2.1.1:
    resolution:
      {
        integrity: sha512-l1jNAspIBSFqbT+y+5FosojNpVpF94nlI+wDUpqP9enwOTfHx9f0gh5nB96vl+6yTpsJsypeNrwfzPrKuHB41A==
      }
    engines: { node: '>=8' }
    dependencies:
      escape-goat: 2.1.1
    dev: true

  /puppeteer-core/2.1.1:
    resolution:
      {
        integrity: sha512-n13AWriBMPYxnpbb6bnaY5YoY6rGj8vPLrz6CZF3o0qJNEwlcfJVxBzYZ0NJsQ21UbdJoijPCDrM++SUVEz7+w==
      }
    engines: { node: '>=8.16.0' }
    dependencies:
      '@types/mime-types': 2.1.1
      debug: 4.3.4
      extract-zip: 1.7.0
      https-proxy-agent: 4.0.0
      mime: 2.6.0
      mime-types: 2.1.35
      progress: 2.0.3
      proxy-from-env: 1.1.0
      rimraf: 2.7.1
      ws: 6.2.2
    transitivePeerDependencies:
      - supports-color
    dev: true

  /q/1.5.1:
    resolution:
      {
        integrity: sha512-kV/CThkXo6xyFEZUugw/+pIOywXcDbFYgSct5cT3gqlbkBE1SJdwy6UQoZvodiWF/ckQLZyDE/Bu1M6gVu5lVw==
      }
    engines: { node: '>=0.6.0', teleport: '>=0.2.0' }
    dev: true

  /qs/6.10.3:
    resolution:
      {
        integrity: sha512-wr7M2E0OFRfIfJZjKGieI8lBKb7fRCH4Fv5KNPEs7gJ8jadvotdsS08PzOKR7opXhZ/Xkjtt3WF9g38drmyRqQ==
      }
    engines: { node: '>=0.6' }
    dependencies:
      side-channel: 1.0.4

  /qs/6.10.5:
    resolution:
      {
        integrity: sha512-O5RlPh0VFtR78y79rgcgKK4wbAI0C5zGVLztOIdpWX6ep368q5Hv6XRxDvXuZ9q3C6v+e3n8UfZZJw7IIG27eQ==
      }
    engines: { node: '>=0.6' }
    dependencies:
      side-channel: 1.0.4
    dev: true

  /qs/6.5.3:
    resolution:
      {
        integrity: sha512-qxXIEh4pCGfHICj1mAJQ2/2XVZkjCDTcEgfoSQxc/fYivUZxTkk7L3bDBJSoNrEzXI17oUO5Dp07ktqE5KzczA==
      }
    engines: { node: '>=0.6' }
    dev: false

  /querystring-es3/0.2.1:
    resolution:
      {
        integrity: sha512-773xhDQnZBMFobEiztv8LIl70ch5MSF/jUQVlhwFyBILqq96anmoctVIYz+ZRp0qbCKATTn6ev02M3r7Ga5vqA==
      }
    engines: { node: '>=0.4.x' }

  /querystring/0.2.0:
    resolution: { integrity: sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA= }
    engines: { node: '>=0.4.x' }
    deprecated: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.

  /querystring/0.2.1:
    resolution:
      {
        integrity: sha512-wkvS7mL/JMugcup3/rMitHmd9ecIGd2lhFhK9N3UUQ450h66d1r3Y9nvXzQAW1Lq+wyx61k/1pfKS5KuKiyEbg==
      }
    engines: { node: '>=0.4.x' }
    deprecated: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
    dev: true

  /queue-microtask/1.2.3:
    resolution:
      {
        integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==
      }

  /quick-format-unescaped/4.0.4:
    resolution:
      {
        integrity: sha512-tYC1Q1hgyRuHgloV/YXs2w15unPVh8qfu/qCTfhTYamaw7fyhumKa2yGpdSo87vY32rIclj+4fWYQXUMs9EHvg==
      }
    dev: false

  /quick-lru/4.0.1:
    resolution:
      {
        integrity: sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==
      }
    engines: { node: '>=8' }
    dev: false

  /ramda/0.27.2:
    resolution:
      {
        integrity: sha512-SbiLPU40JuJniHexQSAgad32hfwd+DRUdwF2PlVuI5RZD0/vahUco7R8vD86J/tcEKKF9vZrUVwgtmGCqlCKyA==
      }
    dev: false

  /ramda/0.28.0:
    resolution:
      {
        integrity: sha512-9QnLuG/kPVgWvMQ4aODhsBUFKOUmnbUnsSXACv+NCQZcHbeb+v8Lodp8OVxtRULN1/xOyYLLaL6npE6dMq5QTA==
      }
    dev: true

  /randombytes/2.1.0:
    resolution:
      {
        integrity: sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==
      }
    dependencies:
      safe-buffer: 5.2.1

  /randomfill/1.0.4:
    resolution:
      {
        integrity: sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==
      }
    dependencies:
      randombytes: 2.1.0
      safe-buffer: 5.2.1

  /range-parser/1.2.1:
    resolution:
      {
        integrity: sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==
      }
    engines: { node: '>= 0.6' }

  /raw-body/2.5.1:
    resolution:
      {
        integrity: sha512-qqJBtEyVgS0ZmPGdCFPWJ3FreoqvG4MVQln/kCgF7Olq95IbOp0/BWyMwbdtn4VTvkM8Y7khCQ2Xgk/tcrCXig==
      }
    engines: { node: '>= 0.8' }
    dependencies:
      bytes: 3.1.2
      http-errors: 2.0.0
      iconv-lite: 0.4.24
      unpipe: 1.0.0

  /raw-loader/4.0.2_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-ZnScIV3ag9A4wPX/ZayxL/jZH+euYb6FcUinPcgiQW0+UBtEv0O6Q3lGd3cqJ+GHH+rksEv3Pj99oxJ3u3VIKA==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      loader-utils: 2.0.2
      schema-utils: 3.1.1
      webpack: 4.44.2
    dev: true

  /rc/1.2.8:
    resolution:
      {
        integrity: sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==
      }
    hasBin: true
    dependencies:
      deep-extend: 0.6.0
      ini: 1.3.8
      minimist: 1.2.6
      strip-json-comments: 2.0.1
    dev: true

  /react-colorful/5.5.1_5owmthsvj5ictknaj3ev736ofq:
    resolution:
      {
        integrity: sha512-M1TJH2X3RXEt12sWkpa6hLc/bbYS0H6F4rIqjQZ+RxNBstpY67d9TrFXtqdZwhpmBXcCwEi7stKqFue3ZRkiOg==
      }
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'
    dependencies:
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
    dev: true

  /react-docgen-typescript/2.2.2_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-tvg2ZtOpOi6QDwsb3GZhOjDkkX0h8Z2gipvTg6OVMUyoYoURhEiRNePT8NZItTVCDh39JJHnLdfCOkzoLbFnTg==
      }
    peerDependencies:
      typescript: '>= 4.3.x'
    dependencies:
      typescript: 4.8.4
    dev: true

  /react-docgen/5.4.2:
    resolution:
      {
        integrity: sha512-4Z5XYpHsn2bbUfaflxoS30VhUvQLBe4GCwwM5v1e1FUOeDdaoJi6wUGSmYp6OdXYEISEAOEIaSPBk4iezNCKBw==
      }
    engines: { node: '>=8.10.0' }
    hasBin: true
    dependencies:
      '@babel/core': 7.17.12
      '@babel/generator': 7.18.2
      '@babel/runtime': 7.18.3
      ast-types: 0.14.2
      commander: 2.20.3
      doctrine: 3.0.0
      estree-to-babel: 3.2.1
      neo-async: 2.6.2
      node-dir: 0.1.17
      strip-indent: 3.0.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /react-dom/16.13.1_react@16.13.1:
    resolution:
      {
        integrity: sha512-81PIMmVLnCNLO/fFOQxdQkvEq/+Hfpv24XNJfpyZhTRfO0QcmQIF/PgCa1zCOj2w1hrn12MFLyaJ/G0+Mxtfag==
      }
    peerDependencies:
      react: ^16.13.1
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      prop-types: 15.8.1
      react: 16.13.1
      scheduler: 0.19.1

  /react-draggable/4.4.5_5owmthsvj5ictknaj3ev736ofq:
    resolution:
      {
        integrity: sha512-OMHzJdyJbYTZo4uQE393fHcqqPYsEtkjfMgvCHr6rejT+Ezn4OZbNyGH50vv+SunC1RMvwOTSWkEODQLzw1M9g==
      }
    peerDependencies:
      react: '>= 16.3.0'
      react-dom: '>= 16.3.0'
    dependencies:
      clsx: 1.1.1
      prop-types: 15.8.1
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
    dev: true

  /react-element-to-jsx-string/14.3.4_5owmthsvj5ictknaj3ev736ofq:
    resolution:
      {
        integrity: sha512-t4ZwvV6vwNxzujDQ+37bspnLwA4JlgUPWhLjBJWsNIDceAf6ZKUTCjdm08cN6WeZ5pTMKiCJkmAYnpmR4Bm+dg==
      }
    peerDependencies:
      react: ^0.14.8 || ^15.0.1 || ^16.0.0 || ^17.0.1
      react-dom: ^0.14.8 || ^15.0.1 || ^16.0.0 || ^17.0.1
    dependencies:
      '@base2/pretty-print-object': 1.0.1
      is-plain-object: 5.0.0
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-is: 17.0.2
    dev: true

  /react-fast-compare/3.2.0:
    resolution:
      {
        integrity: sha512-rtGImPZ0YyLrscKI9xTpV8psd6I8VAtjKCzQDlzyDvqJA8XOW78TXYQwNRNd8g8JZnDu8q9Fu/1v4HPAVwVdHA==
      }
    dev: true

  /react-helmet-async/1.3.0_5owmthsvj5ictknaj3ev736ofq:
    resolution:
      {
        integrity: sha512-9jZ57/dAn9t3q6hneQS0wukqC2ENOBgMNVEhb/ZG9ZSxUetzVIw4iAmEU38IaVg3QGYauQPhSeUTuIUtFglWpg==
      }
    peerDependencies:
      react: ^16.6.0 || ^17.0.0 || ^18.0.0
      react-dom: ^16.6.0 || ^17.0.0 || ^18.0.0
    dependencies:
      '@babel/runtime': 7.18.3
      invariant: 2.2.4
      prop-types: 15.8.1
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-fast-compare: 3.2.0
      shallowequal: 1.1.0
    dev: true

  /react-inspector/5.1.1_react@16.13.1:
    resolution:
      {
        integrity: sha512-GURDaYzoLbW8pMGXwYPDBIv6nqei4kK7LPRZ9q9HCZF54wqXz/dnylBp/kfE9XmekBhHvLDdcYeyIwSrvtOiWg==
      }
    peerDependencies:
      react: ^16.8.4 || ^17.0.0
    dependencies:
      '@babel/runtime': 7.18.3
      is-dom: 1.1.0
      prop-types: 15.8.1
      react: 16.13.1
    dev: true

  /react-is/16.13.1:
    resolution:
      {
        integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==
      }

  /react-is/17.0.2:
    resolution:
      {
        integrity: sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w==
      }

  /react-is/18.2.0:
    resolution:
      {
        integrity: sha512-xWGDIW6x921xtzPkhiULtthJHoJvBbF3q26fzloPCK0hsvxtPVelvftw3zjbHWSkR2km9Z+4uxbDDK/6Zw9B8w==
      }
    dev: false

  /react-popper-tooltip/3.1.1_5owmthsvj5ictknaj3ev736ofq:
    resolution:
      {
        integrity: sha512-EnERAnnKRptQBJyaee5GJScWNUKQPDD2ywvzZyUjst/wj5U64C8/CnSYLNEmP2hG0IJ3ZhtDxE8oDN+KOyavXQ==
      }
    peerDependencies:
      react: ^16.6.0 || ^17.0.0
      react-dom: ^16.6.0 || ^17.0.0
    dependencies:
      '@babel/runtime': 7.18.3
      '@popperjs/core': 2.11.5
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-popper: 2.3.0_fl5p7bkku5n7yrtovox5pf4kua
    dev: true

  /react-popper/2.3.0_fl5p7bkku5n7yrtovox5pf4kua:
    resolution:
      {
        integrity: sha512-e1hj8lL3uM+sgSR4Lxzn5h1GxBlpa4CQz0XLF8kx4MDrDRWY0Ena4c97PUeSX9i5W3UAfDP0z0FXCTQkoXUl3Q==
      }
    peerDependencies:
      '@popperjs/core': ^2.0.0
      react: ^16.8.0 || ^17 || ^18
      react-dom: ^16.8.0 || ^17 || ^18
    dependencies:
      '@popperjs/core': 2.11.5
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-fast-compare: 3.2.0
      warning: 4.0.3
    dev: true

  /react-refresh/0.11.0:
    resolution:
      {
        integrity: sha512-F27qZr8uUqwhWZboondsPx8tnC3Ct3SxZA3V5WyEvujRyyNv0VYPhoBg1gZ8/MV5tubQp76Trw8lTv9hzRBa+A==
      }
    engines: { node: '>=0.10.0' }
    dev: true

  /react-router-dom/6.3.0_e4p5kqppx5gth2ijr2xdvk24ma:
    resolution:
      {
        integrity: sha512-uaJj7LKytRxZNQV8+RbzJWnJ8K2nPsOOEuX7aQstlMZKQT0164C+X2w6bnkqU3sjtLvpd5ojrezAyfZ1+0sStw==
      }
    peerDependencies:
      '@types/react': '>=16'
      react: '>=16.8'
      react-dom: '>=16.8'
    dependencies:
      '@types/react': 16.14.23
      history: 5.3.0
      react: 16.13.1
      react-dom: 16.13.1_react@16.13.1
      react-router: 6.3.0_qjwx5m6wssz3lnb35xwkc3pz6q
    dev: true

  /react-router/6.3.0_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-7Wh1DzVQ+tlFjkeo+ujvjSqSJmkt1+8JO+T5xklPlgrh70y7ogx75ODRW0ThWhY7S+6yEDks8TYrtQe/aoboBQ==
      }
    peerDependencies:
      '@types/react': '>=16'
      react: '>=16.8'
    dependencies:
      '@types/react': 16.14.23
      history: 5.3.0
      react: 16.13.1
    dev: true

  /react-sizeme/3.0.2:
    resolution:
      {
        integrity: sha512-xOIAOqqSSmKlKFJLO3inBQBdymzDuXx4iuwkNcJmC96jeiOg5ojByvL+g3MW9LPEsojLbC6pf68zOfobK8IPlw==
      }
    dependencies:
      element-resize-detector: 1.2.4
      invariant: 2.2.4
      shallowequal: 1.1.0
      throttle-debounce: 3.0.1
    dev: true

  /react-syntax-highlighter/13.5.3_react@16.13.1:
    resolution:
      {
        integrity: sha512-crPaF+QGPeHNIblxxCdf2Lg936NAHKhNhuMzRL3F9ct6aYXL3NcZtCL0Rms9+qVo6Y1EQLdXGypBNSbPL/r+qg==
      }
    peerDependencies:
      react: '>= 0.14.0'
    dependencies:
      '@babel/runtime': 7.18.3
      highlight.js: 10.7.3
      lowlight: 1.20.0
      prismjs: 1.28.0
      react: 16.13.1
      refractor: 3.6.0
    dev: true

  /react-textarea-autosize/8.3.4_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-CdtmP8Dc19xL8/R6sWvtknD/eCXkQr30dtvC4VmGInhRsfF8X/ihXCq6+9l9qbxmKRiq407/7z5fxE7cVWQNgQ==
      }
    engines: { node: '>=10' }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    dependencies:
      '@babel/runtime': 7.18.3
      react: 16.13.1
      use-composed-ref: 1.3.0_react@16.13.1
      use-latest: 1.2.1_qjwx5m6wssz3lnb35xwkc3pz6q
    transitivePeerDependencies:
      - '@types/react'
    dev: true

  /react/16.13.1:
    resolution:
      {
        integrity: sha512-YMZQQq32xHLX0bz5Mnibv1/LHb3Sqzngu7xstSM+vrkE5Kzr9xE0yMByK5kMoTK30YVJE61WfbxIFFvfeDKT1w==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      prop-types: 15.8.1

  /read-package-json/2.1.2:
    resolution:
      {
        integrity: sha512-D1KmuLQr6ZSJS0tW8hf3WGpRlwszJOXZ3E8Yd/DNRaM5d+1wVRZdHlpGBLAuovjr28LbWvjpWkBHMxpRGGjzNA==
      }
    dependencies:
      glob: 7.2.3
      json-parse-even-better-errors: 2.3.1
      normalize-package-data: 2.5.0
      npm-normalize-package-bin: 1.0.1
    dev: false

  /read-package-tree/5.1.6:
    resolution:
      {
        integrity: sha512-FCX1aT3GWyY658wzDICef4p+n0dB+ENRct8E/Qyvppj6xVpOYerBHfUu7OP5Rt1/393Tdglguf5ju5DEX4wZNg==
      }
    deprecated: The functionality that this package provided is now in @npmcli/arborist
    dependencies:
      debuglog: 1.0.1
      dezalgo: 1.0.4
      once: 1.4.0
      read-package-json: 2.1.2
      readdir-scoped-modules: 1.1.0
    dev: false

  /read-pkg-up/7.0.1:
    resolution:
      {
        integrity: sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==
      }
    engines: { node: '>=8' }
    dependencies:
      find-up: 4.1.0
      read-pkg: 5.2.0
      type-fest: 0.8.1

  /read-pkg/5.2.0:
    resolution:
      {
        integrity: sha512-Ug69mNOpfvKDAc2Q8DRpMjjzdtrnv9HcSMX+4VsZxD1aZ6ZzrIE7rlzXBtWTyhULSMKg076AW6WR5iZpD0JiOg==
      }
    engines: { node: '>=8' }
    dependencies:
      '@types/normalize-package-data': 2.4.1
      normalize-package-data: 2.5.0
      parse-json: 5.2.0
      type-fest: 0.6.0

  /read-yaml-file/2.1.0:
    resolution:
      {
        integrity: sha512-UkRNRIwnhG+y7hpqnycCL/xbTk7+ia9VuVTC0S+zVbwd65DI9eUpRMfsWIGrCWxTU/mi+JW8cHQCrv+zfCbEPQ==
      }
    engines: { node: '>=10.13' }
    dependencies:
      js-yaml: 4.1.0
      strip-bom: 4.0.0
    dev: false

  /read/1.0.7:
    resolution:
      {
        integrity: sha512-rSOKNYUmaxy0om1BNjMN4ezNT6VKK+2xF4GBhc81mkH7L60i6dp8qPYrkndNLT3QPphoII3maL9PVC9XmhHwVQ==
      }
    engines: { node: '>=0.8' }
    dependencies:
      mute-stream: 0.0.8

  /readable-stream/1.1.14:
    resolution:
      {
        integrity: sha512-+MeVjFf4L44XUkhM1eYbD8fyEsxcV81pqMSR5gblfcLCHfZvbrqy4/qYHE+/R5HoBUT11WV5O08Cr1n3YXkWVQ==
      }
    dependencies:
      core-util-is: 1.0.3
      inherits: 2.0.4
      isarray: 0.0.1
      string_decoder: 0.10.31
    dev: true

  /readable-stream/2.3.7:
    resolution:
      {
        integrity: sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==
      }
    dependencies:
      core-util-is: 1.0.3
      inherits: 2.0.4
      isarray: 1.0.0
      process-nextick-args: 2.0.1
      safe-buffer: 5.1.2
      string_decoder: 1.1.1
      util-deprecate: 1.0.2

  /readable-stream/3.6.0:
    resolution:
      {
        integrity: sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==
      }
    engines: { node: '>= 6' }
    dependencies:
      inherits: 2.0.4
      string_decoder: 1.3.0
      util-deprecate: 1.0.2

  /readdir-glob/1.1.1:
    resolution:
      {
        integrity: sha512-91/k1EzZwDx6HbERR+zucygRFfiPl2zkIYZtv3Jjr6Mn7SkKcVct8aVO+sSRiGMc6fLf72du3d92/uY63YPdEA==
      }
    dependencies:
      minimatch: 3.1.2
    dev: true

  /readdir-scoped-modules/1.1.0:
    resolution:
      {
        integrity: sha512-asaikDeqAQg7JifRsZn1NJZXo9E+VwlyCfbkZhwyISinqk5zNS6266HS5kah6P0SaQKGF6SkNnZVHUzHFYxYDw==
      }
    dependencies:
      debuglog: 1.0.1
      dezalgo: 1.0.4
      graceful-fs: 4.2.10
      once: 1.4.0
    dev: false

  /readdirp/2.2.1:
    resolution:
      {
        integrity: sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==
      }
    engines: { node: '>=0.10' }
    dependencies:
      graceful-fs: 4.2.10
      micromatch: 3.1.10
      readable-stream: 2.3.7
    optional: true

  /readdirp/3.5.0:
    resolution:
      {
        integrity: sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==
      }
    engines: { node: '>=8.10.0' }
    dependencies:
      picomatch: 2.3.1

  /readdirp/3.6.0:
    resolution:
      {
        integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==
      }
    engines: { node: '>=8.10.0' }
    dependencies:
      picomatch: 2.3.1

  /recast/0.19.1:
    resolution:
      {
        integrity: sha512-8FCjrBxjeEU2O6I+2hyHyBFH1siJbMBLwIRvVr1T3FD2cL754sOaJDsJ/8h3xYltasbJ8jqWRIhMuDGBSiSbjw==
      }
    engines: { node: '>= 4' }
    dependencies:
      ast-types: 0.13.3
      esprima: 4.0.1
      private: 0.1.8
      source-map: 0.6.1
    dev: true

  /recast/0.20.5:
    resolution:
      {
        integrity: sha512-E5qICoPoNL4yU0H0NoBDntNB0Q5oMSNh9usFctYniLBluTthi3RsQVBXIJNbApOlvSwW/RGxIuokPcAc59J5fQ==
      }
    engines: { node: '>= 4' }
    dependencies:
      ast-types: 0.14.2
      esprima: 4.0.1
      source-map: 0.6.1
      tslib: 2.3.1
    dev: true

  /rechoir/0.6.2:
    resolution:
      {
        integrity: sha512-HFM8rkZ+i3zrV+4LQjwQ0W+ez98pApMGM3HUrN04j3CqzPOzl9nmP15Y8YXNm8QHGv/eacOVEjqhmWpkRV0NAw==
      }
    engines: { node: '>= 0.10' }
    dependencies:
      resolve: 1.17.0
    dev: true

  /redent/3.0.0:
    resolution:
      {
        integrity: sha512-6tDA8g98We0zd0GvVeMT9arEOnTw9qM03L9cJXaCjrip1OO764RDBLBfrB4cwzNGDj5OA5ioymC9GkizgWJDUg==
      }
    engines: { node: '>=8' }
    dependencies:
      indent-string: 4.0.0
      strip-indent: 3.0.0
    dev: false

  /refractor/3.6.0:
    resolution:
      {
        integrity: sha512-MY9W41IOWxxk31o+YvFCNyNzdkc9M20NoZK5vq6jkv4I/uh2zkWcfudj0Q1fovjUQJrNewS9NMzeTtqPf+n5EA==
      }
    dependencies:
      hastscript: 6.0.0
      parse-entities: 2.0.0
      prismjs: 1.27.0
    dev: true

  /regenerate-unicode-properties/10.0.1:
    resolution:
      {
        integrity: sha512-vn5DU6yg6h8hP/2OkQo3K7uVILvY4iu0oI4t3HFa81UPkhGJwkRwM10JEc3upjdhHjs/k8GJY1sRBhk5sr69Bw==
      }
    engines: { node: '>=4' }
    dependencies:
      regenerate: 1.4.2
    dev: true

  /regenerate/1.4.2:
    resolution:
      {
        integrity: sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==
      }
    dev: true

  /regenerator-runtime/0.13.9:
    resolution:
      {
        integrity: sha512-p3VT+cOEgxFsRRA9X4lkI1E+k2/CtnKtU4gcxyaCUreilL/vqI6CdZ3wxVUx3UOUg+gnUOQQcRI7BmSI656MYA==
      }
    dev: true

  /regenerator-transform/0.15.0:
    resolution:
      {
        integrity: sha512-LsrGtPmbYg19bcPHwdtmXwbW+TqNvtY4riE3P83foeHRroMbH6/2ddFBfab3t7kbzc7v7p4wbkIecHImqt0QNg==
      }
    dependencies:
      '@babel/runtime': 7.18.3
    dev: true

  /regex-not/1.0.2:
    resolution:
      {
        integrity: sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      extend-shallow: 3.0.2
      safe-regex: 1.1.0

  /regexp.prototype.flags/1.4.3:
    resolution:
      {
        integrity: sha512-fjggEOO3slI6Wvgjwflkc4NFRCTZAu5CnNfBd5qOMYhWdn67nJBBu34/TkD++eeFmd8C9r9jfXJ27+nSiRkSUA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      functions-have-names: 1.2.3

  /regexpp/3.2.0:
    resolution:
      {
        integrity: sha512-pq2bWo9mVD43nbts2wGv17XLiNLya+GklZ8kaDLV2Z08gDCsGpnKn9BFMepvWuHCbyVvY7J5o5+BVvoQbmlJLg==
      }
    engines: { node: '>=8' }

  /regexpu-core/5.0.1:
    resolution:
      {
        integrity: sha512-CriEZlrKK9VJw/xQGJpQM5rY88BtuL8DM+AEwvcThHilbxiTAy8vq4iJnd2tqq8wLmjbGZzP7ZcKFjbGkmEFrw==
      }
    engines: { node: '>=4' }
    dependencies:
      regenerate: 1.4.2
      regenerate-unicode-properties: 10.0.1
      regjsgen: 0.6.0
      regjsparser: 0.8.4
      unicode-match-property-ecmascript: 2.0.0
      unicode-match-property-value-ecmascript: 2.0.0
    dev: true

  /registry-auth-token/4.2.1:
    resolution:
      {
        integrity: sha512-6gkSb4U6aWJB4SF2ZvLb76yCBjcvufXBqvvEx1HbmKPkutswjW1xNVRY0+daljIYRbogN7O0etYSlbiaEQyMyw==
      }
    engines: { node: '>=6.0.0' }
    dependencies:
      rc: 1.2.8
    dev: true

  /registry-url/5.1.0:
    resolution:
      {
        integrity: sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==
      }
    engines: { node: '>=8' }
    dependencies:
      rc: 1.2.8
    dev: true

  /regjsgen/0.6.0:
    resolution:
      {
        integrity: sha512-ozE883Uigtqj3bx7OhL1KNbCzGyW2NQZPl6Hs09WTvCuZD5sTI4JY58bkbQWa/Y9hxIsvJ3M8Nbf7j54IqeZbA==
      }
    dev: true

  /regjsparser/0.8.4:
    resolution:
      {
        integrity: sha512-J3LABycON/VNEu3abOviqGHuB/LOtOQj8SKmfP9anY5GfAVw/SPjwzSjxGjbZXIxbGfqTHtJw58C2Li/WkStmA==
      }
    hasBin: true
    dependencies:
      jsesc: 0.5.0
    dev: true

  /relateurl/0.2.7:
    resolution:
      {
        integrity: sha512-G08Dxvm4iDN3MLM0EsP62EDV9IuhXPR6blNz6Utcp7zyV3tr4HVNINt6MpaRWbxoOHT3Q7YN2P+jaHX8vUbgog==
      }
    engines: { node: '>= 0.10' }

  /remark-external-links/8.0.0:
    resolution:
      {
        integrity: sha512-5vPSX0kHoSsqtdftSHhIYofVINC8qmp0nctkeU9YoJwV3YfiBRiI6cbFRJ0oI/1F9xS+bopXG0m2KS8VFscuKA==
      }
    dependencies:
      extend: 3.0.2
      is-absolute-url: 3.0.3
      mdast-util-definitions: 4.0.0
      space-separated-tokens: 1.1.5
      unist-util-visit: 2.0.3
    dev: true

  /remark-footnotes/2.0.0:
    resolution:
      {
        integrity: sha512-3Clt8ZMH75Ayjp9q4CorNeyjwIxHFcTkaektplKGl2A1jNGEUey8cKL0ZC5vJwfcD5GFGsNLImLG/NGzWIzoMQ==
      }
    dev: true

  /remark-mdx/1.6.22:
    resolution:
      {
        integrity: sha512-phMHBJgeV76uyFkH4rvzCftLfKCr2RZuF+/gmVcaKrpsihyzmhXjA0BEMDaPTXG5y8qZOKPVo83NAOX01LPnOQ==
      }
    dependencies:
      '@babel/core': 7.12.9
      '@babel/helper-plugin-utils': 7.10.4
      '@babel/plugin-proposal-object-rest-spread': 7.12.1_@babel+core@7.12.9
      '@babel/plugin-syntax-jsx': 7.12.1_@babel+core@7.12.9
      '@mdx-js/util': 1.6.22
      is-alphabetical: 1.0.4
      remark-parse: 8.0.3
      unified: 9.2.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /remark-parse/8.0.3:
    resolution:
      {
        integrity: sha512-E1K9+QLGgggHxCQtLt++uXltxEprmWzNfg+MxpfHsZlrddKzZ/hZyWHDbK3/Ap8HJQqYJRXP+jHczdL6q6i85Q==
      }
    dependencies:
      ccount: 1.1.0
      collapse-white-space: 1.0.6
      is-alphabetical: 1.0.4
      is-decimal: 1.0.4
      is-whitespace-character: 1.0.4
      is-word-character: 1.0.4
      markdown-escapes: 1.0.4
      parse-entities: 2.0.0
      repeat-string: 1.6.1
      state-toggle: 1.0.3
      trim: 0.0.1
      trim-trailing-lines: 1.1.4
      unherit: 1.1.3
      unist-util-remove-position: 2.0.1
      vfile-location: 3.2.0
      xtend: 4.0.2
    dev: true

  /remark-slug/6.1.0:
    resolution:
      {
        integrity: sha512-oGCxDF9deA8phWvxFuyr3oSJsdyUAxMFbA0mZ7Y1Sas+emILtO+e5WutF9564gDsEN4IXaQXm5pFo6MLH+YmwQ==
      }
    dependencies:
      github-slugger: 1.4.0
      mdast-util-to-string: 1.1.0
      unist-util-visit: 2.0.3
    dev: true

  /remark-squeeze-paragraphs/4.0.0:
    resolution:
      {
        integrity: sha512-8qRqmL9F4nuLPIgl92XUuxI3pFxize+F1H0e/W3llTk0UsjJaj01+RrirkMw7P21RKe4X6goQhYRSvNWX+70Rw==
      }
    dependencies:
      mdast-squeeze-paragraphs: 4.0.0
    dev: true

  /remeda/0.0.32:
    resolution:
      {
        integrity: sha512-FEdl8ONpqY7AvvMHG5WYdomc0mGf2khHPUDu6QvNkOq4Wjkw5BvzWM4QyksAQ/US1sFIIRG8TVBn6iJx6HbRrA==
      }
    dev: true

  /remove-trailing-separator/1.1.0:
    resolution:
      {
        integrity: sha512-/hS+Y0u3aOfIETiaiirUFwDBDzmXPvO+jAfKTitUngIPzdKc6Z0LoFjM/CK5PL4C+eKwHohlHAb6H0VFfmmUsw==
      }

  /renderkid/2.0.7:
    resolution:
      {
        integrity: sha512-oCcFyxaMrKsKcTY59qnCAtmDVSLfPbrv6A3tVbPdFMMrv5jaK10V6m40cKsoPNhAqN6rmHW9sswW4o3ruSrwUQ==
      }
    dependencies:
      css-select: 4.3.0
      dom-converter: 0.2.0
      htmlparser2: 6.1.0
      lodash: 4.17.21
      strip-ansi: 3.0.1

  /renderkid/3.0.0:
    resolution:
      {
        integrity: sha512-q/7VIQA8lmM1hF+jn+sFSPWGlMkSAeNYcPLmDQx2zzuiDfaLrOmumR8iaUKlenFgh0XRPIUeSPlH3A+AW3Z5pg==
      }
    dependencies:
      css-select: 4.3.0
      dom-converter: 0.2.0
      htmlparser2: 6.1.0
      lodash: 4.17.21
      strip-ansi: 6.0.1

  /repeat-element/1.1.4:
    resolution:
      {
        integrity: sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ==
      }
    engines: { node: '>=0.10.0' }

  /repeat-string/1.6.1:
    resolution:
      {
        integrity: sha512-PV0dzCYDNfRi1jCDbJzpW7jNNDRuCOG/jI5ctQcGKt/clZD+YcPS3yIlWuTJMmESC8aevCFmWJy5wjAFgNqN6w==
      }
    engines: { node: '>=0.10' }

  /request/2.88.2:
    resolution:
      {
        integrity: sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==
      }
    engines: { node: '>= 6' }
    deprecated: request has been deprecated, see https://github.com/request/request/issues/3142
    dependencies:
      aws-sign2: 0.7.0
      aws4: 1.11.0
      caseless: 0.12.0
      combined-stream: 1.0.8
      extend: 3.0.2
      forever-agent: 0.6.1
      form-data: 2.3.3
      har-validator: 5.1.5
      http-signature: 1.2.0
      is-typedarray: 1.0.0
      isstream: 0.1.2
      json-stringify-safe: 5.0.1
      mime-types: 2.1.35
      oauth-sign: 0.9.0
      performance-now: 2.1.0
      qs: 6.5.3
      safe-buffer: 5.2.1
      tough-cookie: 2.5.0
      tunnel-agent: 0.6.0
      uuid: 3.4.0
    dev: false

  /require-directory/2.1.1:
    resolution:
      {
        integrity: sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==
      }
    engines: { node: '>=0.10.0' }

  /require-from-string/2.0.2:
    resolution:
      {
        integrity: sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==
      }
    engines: { node: '>=0.10.0' }

  /require-main-filename/2.0.0:
    resolution:
      {
        integrity: sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==
      }

  /requires-port/1.0.0:
    resolution:
      {
        integrity: sha512-KigOCHcocU3XODJxsu8i/j8T9tzT4adHiecwORRQ0ZZFcp7ahwXuRU1m+yuO90C5ZUyGeGfocHDI14M3L3yDAQ==
      }

  /resolve-cwd/2.0.0:
    resolution:
      {
        integrity: sha512-ccu8zQTrzVr954472aUVPLEcB3YpKSYR3cg/3lo1okzobPBM+1INXBbBZlDbnI/hbEocnf8j0QVo43hQKrbchg==
      }
    engines: { node: '>=4' }
    dependencies:
      resolve-from: 3.0.0
    dev: false

  /resolve-cwd/3.0.0:
    resolution:
      {
        integrity: sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==
      }
    engines: { node: '>=8' }
    dependencies:
      resolve-from: 5.0.0
    dev: true

  /resolve-dir/1.0.1:
    resolution:
      {
        integrity: sha512-R7uiTjECzvOsWSfdM0QKFNBVFcK27aHOUwdvK53BcW8zqnGdYp0Fbj82cy54+2A4P2tFM22J5kRfe1R+lM/1yg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      expand-tilde: 2.0.2
      global-modules: 1.0.0
    dev: false

  /resolve-from/3.0.0:
    resolution:
      {
        integrity: sha512-GnlH6vxLymXJNMBo7XP1fJIzBFbdYt49CuTwmB/6N53t+kMPRMFKz783LlQ4tv28XoQfMWinAJX6WCGf2IlaIw==
      }
    engines: { node: '>=4' }
    dev: false

  /resolve-from/4.0.0:
    resolution:
      {
        integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==
      }
    engines: { node: '>=4' }

  /resolve-from/5.0.0:
    resolution:
      {
        integrity: sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==
      }
    engines: { node: '>=8' }

  /resolve-url/0.2.1:
    resolution:
      {
        integrity: sha512-ZuF55hVUQaaczgOIwqWzkEcEidmlD/xl44x1UZnhOXcYuFN2S6+rcxpG+C1N3So0wvNI3DmJICUFfu2SxhBmvg==
      }
    deprecated: https://github.com/lydell/resolve-url#deprecated

  /resolve.exports/1.1.0:
    resolution:
      {
        integrity: sha512-J1l+Zxxp4XK3LUDZ9m60LRJF/mAe4z6a4xyabPHk7pvK5t35dACV32iIjJDFeWZFfZlO29w6SZ67knR0tHzJtQ==
      }
    engines: { node: '>=10' }

  /resolve/1.17.0:
    resolution:
      {
        integrity: sha512-ic+7JYiV8Vi2yzQGFWOkiZD5Z9z7O2Zhm9XMaTxdJExKasieFCr+yXZ/WmXsckHiKl12ar0y6XiXDx3m4RHn1w==
      }
    dependencies:
      path-parse: 1.0.7

  /resolve/1.19.0:
    resolution:
      {
        integrity: sha512-rArEXAgsBG4UgRGcynxWIWKFvh/XZCcS8UJdHhwy91zwAvCZIbcs+vAbflgBnNjYMs/i/i+/Ux6IZhML1yPvxg==
      }
    dependencies:
      is-core-module: 2.9.0
      path-parse: 1.0.7

  /resolve/1.22.0:
    resolution:
      {
        integrity: sha512-Hhtrw0nLeSrFQ7phPp4OOcVjLPIeMnRlr5mcnVuMe7M/7eBn98A3hmFRLoFo3DLZkivSYwhRUJTyPyWAk56WLw==
      }
    hasBin: true
    dependencies:
      is-core-module: 2.9.0
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  /resolve/2.0.0-next.3:
    resolution:
      {
        integrity: sha512-W8LucSynKUIDu9ylraa7ueVZ7hc0uAgJBxVsQSKOXOyle8a93qXhcz+XAXZ8bIq2d6i4Ehddn6Evt+0/UwKk6Q==
      }
    dependencies:
      is-core-module: 2.9.0
      path-parse: 1.0.7

  /responselike/1.0.2:
    resolution:
      {
        integrity: sha512-/Fpe5guzJk1gPqdJLJR5u7eG/gNY4nImjbRDaVWVMRhne55TCmj2i9Q+54PBRfatRC8v/rIiv9BN0pMd9OV5EQ==
      }
    dependencies:
      lowercase-keys: 1.0.1
    dev: true

  /restore-cursor/3.1.0:
    resolution:
      {
        integrity: sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==
      }
    engines: { node: '>=8' }
    dependencies:
      onetime: 5.1.2
      signal-exit: 3.0.7
    dev: false

  /ret/0.1.15:
    resolution:
      {
        integrity: sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==
      }
    engines: { node: '>=0.12' }

  /ret/0.2.2:
    resolution:
      {
        integrity: sha512-M0b3YWQs7R3Z917WRQy1HHA7Ba7D8hvZg6UE5mLykJxQVE2ju0IXbGlaHPPlkY+WN7wFP+wUMXmBFA0aV6vYGQ==
      }
    engines: { node: '>=4' }
    dev: false

  /retry/0.12.0:
    resolution:
      {
        integrity: sha512-9LkiTwjUh6rT555DtE9rTX+BKByPfrMzEAtnlEtdEwr3Nkffwiihqe2bWADg+OQRjt9gl6ICdmB/ZFDCGAtSow==
      }
    engines: { node: '>= 4' }
    dev: true

  /retry/0.13.1:
    resolution:
      {
        integrity: sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg==
      }
    engines: { node: '>= 4' }

  /reusify/1.0.4:
    resolution:
      {
        integrity: sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==
      }
    engines: { iojs: '>=1.0.0', node: '>=0.10.0' }

  /rfdc/1.3.0:
    resolution:
      {
        integrity: sha512-V2hovdzFbOi77/WajaSMXk2OLm+xNIeQdMMuB7icj7bk6zi2F8GGAxigcnDFpJHbNyNcgyJDiP+8nOrY5cZGrA==
      }

  /rimraf/2.6.3:
    resolution:
      {
        integrity: sha512-mwqeW5XsA2qAejG46gYdENaxXjx9onRNCfn7L0duuP4hCuTIi/QO7PDK07KJfp1d+izWPrzEJDcSqBa0OZQriA==
      }
    hasBin: true
    dependencies:
      glob: 7.2.3
    dev: true

  /rimraf/2.7.1:
    resolution:
      {
        integrity: sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==
      }
    hasBin: true
    dependencies:
      glob: 7.2.3

  /rimraf/3.0.2:
    resolution:
      {
        integrity: sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==
      }
    hasBin: true
    dependencies:
      glob: 7.2.3

  /ripemd160/2.0.2:
    resolution:
      {
        integrity: sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==
      }
    dependencies:
      hash-base: 3.1.0
      inherits: 2.0.4

  /rsvp/4.8.5:
    resolution:
      {
        integrity: sha512-nfMOlASu9OnRJo1mbEk2cz0D56a1MBNrJ7orjRZQG10XDyuvwksKbuXNp6qa+kbn839HwjwhBzhFmdsaEAfauA==
      }
    engines: { node: 6.* || >= 7.* }
    dev: true

  /run-async/2.4.1:
    resolution:
      {
        integrity: sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ==
      }
    engines: { node: '>=0.12.0' }
    dev: false

  /run-parallel/1.2.0:
    resolution:
      {
        integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==
      }
    dependencies:
      queue-microtask: 1.2.3

  /run-queue/1.0.3:
    resolution:
      {
        integrity: sha512-ntymy489o0/QQplUDnpYAYUsO50K9SBrIVaKCWDOJzYJts0f9WH9RFJkyagebkw5+y1oi00R7ynNW/d12GBumg==
      }
    dependencies:
      aproba: 1.2.0

  /rxjs/6.6.7:
    resolution:
      {
        integrity: sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==
      }
    engines: { npm: '>=2.0.0' }
    dependencies:
      tslib: 1.14.1

  /safe-buffer/5.1.1:
    resolution:
      {
        integrity: sha512-kKvNJn6Mm93gAczWVJg7wH+wGYWNrDHdWvpUmHyEsgCtIwwo3bqPtV4tR5tuPaUhTOo/kvhVwd8XwwOllGYkbg==
      }
    dev: true

  /safe-buffer/5.1.2:
    resolution:
      {
        integrity: sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==
      }

  /safe-buffer/5.2.1:
    resolution:
      {
        integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==
      }

  /safe-regex/1.1.0:
    resolution:
      {
        integrity: sha512-aJXcif4xnaNUzvUuC5gcb46oTS7zvg4jpMTnuqtrEPlR3vFr4pxtdTwaF1Qs3Enjn9HK+ZlwQui+a7z0SywIzg==
      }
    dependencies:
      ret: 0.1.15

  /safe-regex2/2.0.0:
    resolution:
      {
        integrity: sha512-PaUSFsUaNNuKwkBijoAPHAK6/eM6VirvyPWlZ7BAQy4D+hCvh4B6lIG+nPdhbFfIbP+gTGBcrdsOaUs0F+ZBOQ==
      }
    dependencies:
      ret: 0.2.2
    dev: false

  /safer-buffer/2.1.2:
    resolution:
      {
        integrity: sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==
      }

  /sane/4.1.0:
    resolution:
      {
        integrity: sha512-hhbzAgTIX8O7SHfp2c8/kREfEn4qO/9q8C9beyY6+tvZ87EpoZ3i1RIEvp27YBswnNbY9mWd6paKVmKbAgLfZA==
      }
    engines: { node: 6.* || 8.* || >= 10.* }
    deprecated: some dependency vulnerabilities fixed, support for node < 10 dropped, and newer ECMAScript syntax/features added
    hasBin: true
    dependencies:
      '@cnakazawa/watch': 1.0.4
      anymatch: 2.0.0
      capture-exit: 2.0.0
      exec-sh: 0.3.6
      execa: 1.0.0
      fb-watchman: 2.0.1
      micromatch: 3.1.10
      minimist: 1.2.6
      walker: 1.0.8
    dev: true

  /sass-graph/2.2.5:
    resolution:
      {
        integrity: sha512-VFWDAHOe6mRuT4mZRd4eKE+d8Uedrk6Xnh7Sh9b4NGufQLQjOrvf/MQoOdx+0s92L89FeyUUNfU597j/3uNpag==
      }
    hasBin: true
    dependencies:
      glob: 7.0.6
      lodash: 4.17.21
      scss-tokenizer: 0.2.3
      yargs: 13.3.2
    dev: false

  /sass-loader/10.0.5_sass@1.3.2+webpack@4.44.2:
    resolution:
      {
        integrity: sha512-2LqoNPtKkZq/XbXNQ4C64GFEleSEHKv6NPSI+bMC/l+jpEXGJhiRYkAQToO24MR7NU4JRY2RpLpJ/gjo2Uf13w==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      fibers: '>= 3.1.0'
      node-sass: ^4.0.0 || ^5.0.0
      sass: ^1.3.0
      webpack: ^4.36.0 || ^5.0.0
    peerDependenciesMeta:
      fibers:
        optional: true
      node-sass:
        optional: true
      sass:
        optional: true
    dependencies:
      klona: 2.0.5
      loader-utils: 2.0.2
      neo-async: 2.6.2
      sass: 1.3.2
      schema-utils: 3.1.1
      semver: 7.3.7
      webpack: 4.44.2
    dev: true

  /sass-loader/12.4.0_ldtenuersk6xjw5tkzwiywgimy:
    resolution:
      {
        integrity: sha512-7xN+8khDIzym1oL9XyS6zP6Ges+Bo2B2xbPrjdMHEYyV3AQYhd/wXeru++3ODHF0zMjYmVadblSKrPrjEkL8mg==
      }
    engines: { node: '>= 12.13.0' }
    peerDependencies:
      fibers: '>= 3.1.0'
      node-sass: ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0
      sass: ^1.3.0
      webpack: ^5.0.0
    peerDependenciesMeta:
      fibers:
        optional: true
      node-sass:
        optional: true
      sass:
        optional: true
    dependencies:
      klona: 2.0.5
      neo-async: 2.6.2
      sass: 1.49.11
      webpack: 5.68.0
    dev: false

  /sass/1.3.2:
    resolution:
      {
        integrity: sha512-1dBIuVtEc5lcgHaEUY8FE50YlTZB59pyodpaVoPkBppxm9JcE6X2u+IcVitMxoQnvJvpjk8esR7UlnbNmFTH+Q==
      }
    engines: { node: '>=0.11.8' }
    hasBin: true
    dev: true

  /sass/1.49.11:
    resolution:
      {
        integrity: sha512-wvS/geXgHUGs6A/4ud5BFIWKO1nKd7wYIGimDk4q4GFkJicILActpv9ueMT4eRGSsp1BdKHuw1WwAHXbhsJELQ==
      }
    engines: { node: '>=12.0.0' }
    hasBin: true
    dependencies:
      chokidar: 3.4.3
      immutable: 4.1.0
      source-map-js: 1.0.2
    dev: false

  /sax/1.2.1:
    resolution:
      {
        integrity: sha512-8I2a3LovHTOpm7NV5yOyO8IHqgVsfK4+UuySrXU8YXkSRX7k6hCV9b3HrkKCr3nMpgj+0bmocaJJWpvp1oc7ZA==
      }
    dev: true

  /sax/1.2.4:
    resolution:
      {
        integrity: sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw==
      }
    dev: false

  /saxes/5.0.1:
    resolution:
      {
        integrity: sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw==
      }
    engines: { node: '>=10' }
    dependencies:
      xmlchars: 2.2.0

  /scheduler/0.19.1:
    resolution:
      {
        integrity: sha512-n/zwRWRYSUj0/3g/otKDRPMh6qv2SYMWNq85IEa8iZyAv8od9zDYpGSnpBEjNgcMNq6Scbu5KfIPxNF72R/2EA==
      }
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1

  /schema-utils/1.0.0:
    resolution:
      {
        integrity: sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==
      }
    engines: { node: '>= 4' }
    dependencies:
      ajv: 6.12.6
      ajv-errors: 1.0.1_ajv@6.12.6
      ajv-keywords: 3.5.2_ajv@6.12.6

  /schema-utils/2.7.0:
    resolution:
      {
        integrity: sha512-0ilKFI6QQF5nxDZLFn2dMjvc4hjg/Wkg7rHd3jK6/A4a1Hl9VFdQWvgB1UMGoU94pad1P/8N7fMcEnLnSiju8A==
      }
    engines: { node: '>= 8.9.0' }
    dependencies:
      '@types/json-schema': 7.0.11
      ajv: 6.12.6
      ajv-keywords: 3.5.2_ajv@6.12.6
    dev: true

  /schema-utils/2.7.1:
    resolution:
      {
        integrity: sha512-SHiNtMOUGWBQJwzISiVYKu82GiV4QYGePp3odlY1tuKO7gPtphAT5R/py0fA6xtbgLL/RvtJZnU9b8s0F1q0Xg==
      }
    engines: { node: '>= 8.9.0' }
    dependencies:
      '@types/json-schema': 7.0.11
      ajv: 6.12.6
      ajv-keywords: 3.5.2_ajv@6.12.6
    dev: true

  /schema-utils/3.1.1:
    resolution:
      {
        integrity: sha512-Y5PQxS4ITlC+EahLuXaY86TXfR7Dc5lw294alXOq86JAHCihAIZfqv8nNCWvaEJvaC51uN9hbLGeV0cFBdH+Fw==
      }
    engines: { node: '>= 10.13.0' }
    dependencies:
      '@types/json-schema': 7.0.11
      ajv: 6.12.6
      ajv-keywords: 3.5.2_ajv@6.12.6

  /schema-utils/4.0.0:
    resolution:
      {
        integrity: sha512-1edyXKgh6XnJsJSQ8mKWXnN/BVaIbFMLpouRUrXgVq7WYne5kw3MW7UPhO44uRXQSIpTSXoJbmrR2X0w9kUTyg==
      }
    engines: { node: '>= 12.13.0' }
    dependencies:
      '@types/json-schema': 7.0.11
      ajv: 8.11.0
      ajv-formats: 2.1.1
      ajv-keywords: 5.1.0_ajv@8.11.0

  /scss-tokenizer/0.2.3:
    resolution:
      {
        integrity: sha512-dYE8LhncfBUar6POCxMTm0Ln+erjeczqEvCJib5/7XNkdw1FkUGgwMPY360FY0FgPWQxHWCx29Jl3oejyGLM9Q==
      }
    dependencies:
      js-base64: 2.6.4
      source-map: 0.4.4
    dev: false

  /secure-json-parse/2.4.0:
    resolution:
      {
        integrity: sha512-Q5Z/97nbON5t/L/sH6mY2EacfjVGwrCcSi5D3btRO2GZ8pf1K1UN7Z9H5J57hjVU2Qzxr1xO+FmBhOvEkzCMmg==
      }
    dev: false

  /select-hose/2.0.0:
    resolution:
      {
        integrity: sha512-mEugaLK+YfkijB4fx0e6kImuJdCIt2LxCRcbEYPqRGCs4F2ogyfZU5IAZRdjCP8JPq2AtdNoC/Dux63d9Kiryg==
      }

  /selfsigned/2.0.1:
    resolution:
      {
        integrity: sha512-LmME957M1zOsUhG+67rAjKfiWFox3SBxE/yymatMZsAx+oMrJ0YQ8AToOnyCm7xbeg2ep37IHLxdu0o2MavQOQ==
      }
    engines: { node: '>=10' }
    dependencies:
      node-forge: 1.3.1

  /semver-diff/3.1.1:
    resolution:
      {
        integrity: sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==
      }
    engines: { node: '>=8' }
    dependencies:
      semver: 6.3.0
    dev: true

  /semver-store/0.3.0:
    resolution:
      {
        integrity: sha512-TcZvGMMy9vodEFSse30lWinkj+JgOBvPn8wRItpQRSayhc+4ssDs335uklkfvQQJgL/WvmHLVj4Ycv2s7QCQMg==
      }
    dev: false

  /semver/5.7.1:
    resolution:
      {
        integrity: sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==
      }
    hasBin: true

  /semver/6.3.0:
    resolution:
      {
        integrity: sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==
      }
    hasBin: true

  /semver/7.0.0:
    resolution:
      {
        integrity: sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==
      }
    hasBin: true
    dev: true

  /semver/7.3.7:
    resolution:
      {
        integrity: sha512-QlYTucUYOews+WeEujDoEGziz4K6c47V/Bd+LjSSYcA94p+DmINdf7ncaUinThfvZyu13lN9OY1XDxt8C0Tw0g==
      }
    engines: { node: '>=10' }
    hasBin: true
    dependencies:
      lru-cache: 6.0.0

  /send/0.18.0:
    resolution:
      {
        integrity: sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      debug: 2.6.9
      depd: 2.0.0
      destroy: 1.2.0
      encodeurl: 1.0.2
      escape-html: 1.0.3
      etag: 1.8.1
      fresh: 0.5.2
      http-errors: 2.0.0
      mime: 1.6.0
      ms: 2.1.3
      on-finished: 2.4.1
      range-parser: 1.2.1
      statuses: 2.0.1

  /serialize-javascript/4.0.0:
    resolution:
      {
        integrity: sha512-GaNA54380uFefWghODBWEGisLZFj00nS5ACs6yHa9nLqlLpVLO8ChDGeKRjZnV4Nh4n0Qi7nhYZD/9fCPzEqkw==
      }
    dependencies:
      randombytes: 2.1.0

  /serialize-javascript/5.0.1:
    resolution:
      {
        integrity: sha512-SaaNal9imEO737H2c05Og0/8LUXG7EnsZyMa8MzkmuHoELfT6txuj0cMqRj6zfPKnmQ1yasR4PCJc8x+M4JSPA==
      }
    dependencies:
      randombytes: 2.1.0
    dev: true

  /serialize-javascript/6.0.0:
    resolution:
      {
        integrity: sha512-Qr3TosvguFt8ePWqsvRfrKyQXIiW+nGbYpy8XK24NQHE83caxWt+mIymTT19DGFbNWNLfEwsrkSmN64lVWB9ag==
      }
    dependencies:
      randombytes: 2.1.0

  /serve-favicon/2.5.0:
    resolution:
      {
        integrity: sha512-FMW2RvqNr03x+C0WxTyu6sOv21oOjkq5j8tjquWccwa6ScNyGFOGJVpuS1NmTVGBAHS07xnSKotgf2ehQmf9iA==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      etag: 1.8.1
      fresh: 0.5.2
      ms: 2.1.1
      parseurl: 1.3.3
      safe-buffer: 5.1.1
    dev: true

  /serve-index/1.9.1:
    resolution:
      {
        integrity: sha512-pXHfKNP4qujrtteMrSBb0rc8HJ9Ms/GrXwcUtUtD5s4ewDJI8bT3Cz2zTVRMKtri49pLx2e0Ya8ziP5Ya2pZZw==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      accepts: 1.3.8
      batch: 0.6.1
      debug: 2.6.9
      escape-html: 1.0.3
      http-errors: 1.6.3
      mime-types: 2.1.35
      parseurl: 1.3.3

  /serve-static/1.15.0:
    resolution:
      {
        integrity: sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      encodeurl: 1.0.2
      escape-html: 1.0.3
      parseurl: 1.3.3
      send: 0.18.0

  /set-blocking/2.0.0:
    resolution:
      {
        integrity: sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==
      }

  /set-cookie-parser/2.5.0:
    resolution:
      {
        integrity: sha512-cHMAtSXilfyBePduZEBVPTCftTQWz6ehWJD5YNUg4mqvRosrrjKbo4WS8JkB0/RxonMoohHm7cOGH60mDkRQ9w==
      }
    dev: false

  /set-immediate-shim/1.0.1:
    resolution:
      {
        integrity: sha512-Li5AOqrZWCVA2n5kryzEmqai6bKSIvpz5oUJHPVj6+dsbD3X1ixtsY5tEnsaNpH3pFAHmG8eIHUrtEtohrg+UQ==
      }
    engines: { node: '>=0.10.0' }
    dev: false

  /set-value/2.0.1:
    resolution:
      {
        integrity: sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      extend-shallow: 2.0.1
      is-extendable: 0.1.1
      is-plain-object: 2.0.4
      split-string: 3.1.0

  /setimmediate/1.0.5:
    resolution:
      {
        integrity: sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA==
      }

  /setprototypeof/1.1.0:
    resolution:
      {
        integrity: sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==
      }

  /setprototypeof/1.2.0:
    resolution:
      {
        integrity: sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==
      }

  /sha.js/2.4.11:
    resolution:
      {
        integrity: sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==
      }
    hasBin: true
    dependencies:
      inherits: 2.0.4
      safe-buffer: 5.2.1

  /shallow-clone/3.0.1:
    resolution:
      {
        integrity: sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==
      }
    engines: { node: '>=8' }
    dependencies:
      kind-of: 6.0.3

  /shallowequal/1.1.0:
    resolution:
      {
        integrity: sha512-y0m1JoUZSlPAjXVtPPW70aZWfIL/dSP7AFkRnniLCrK/8MDKog3TySTBmckD+RObVxH0v4Tox67+F14PdED2oQ==
      }
    dev: true

  /shebang-command/1.2.0:
    resolution:
      {
        integrity: sha512-EV3L1+UQWGor21OmnvojK36mhg+TyIKDh3iFBKBohr5xeXIhNBcx8oWdgkTEEQ+BEFFYdLRuqMfd5L84N1V5Vg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      shebang-regex: 1.0.0

  /shebang-command/2.0.0:
    resolution:
      {
        integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==
      }
    engines: { node: '>=8' }
    dependencies:
      shebang-regex: 3.0.0

  /shebang-regex/1.0.0:
    resolution:
      {
        integrity: sha512-wpoSFAxys6b2a2wHZ1XpDSgD7N9iVjg29Ph9uV/uaP9Ex/KXlkTZTeddxDPSYQpgvzKLGJke2UU0AzoGCjNIvQ==
      }
    engines: { node: '>=0.10.0' }

  /shebang-regex/3.0.0:
    resolution:
      {
        integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==
      }
    engines: { node: '>=8' }

  /shelljs/0.8.5:
    resolution:
      {
        integrity: sha512-TiwcRcrkhHvbrZbnRcFYMLl30Dfov3HKqzp5tO5b4pt6G/SezKcYhmDg15zXVBswHmctSAQKznqNW2LO5tTDow==
      }
    engines: { node: '>=4' }
    hasBin: true
    dependencies:
      glob: 7.0.6
      interpret: 1.4.0
      rechoir: 0.6.2
    dev: true

  /side-channel/1.0.4:
    resolution:
      {
        integrity: sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==
      }
    dependencies:
      call-bind: 1.0.2
      get-intrinsic: 1.1.2
      object-inspect: 1.12.2

  /signal-exit/3.0.7:
    resolution:
      {
        integrity: sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==
      }

  /simple-update-notifier/1.0.7:
    resolution:
      {
        integrity: sha512-BBKgR84BJQJm6WjWFMHgLVuo61FBDSj1z/xSFUIozqO6wO7ii0JxCqlIud7Enr/+LhlbNI0whErq96P2qHNWew==
      }
    engines: { node: '>=8.10.0' }
    dependencies:
      semver: 7.0.0
    dev: true

  /sirv/1.0.19:
    resolution:
      {
        integrity: sha512-JuLThK3TnZG1TAKDwNIqNq6QA2afLOCcm+iE8D1Kj3GA40pSPsxQjjJl0J8X3tsR7T+CP1GavpzLwYkgVLWrZQ==
      }
    engines: { node: '>= 10' }
    dependencies:
      '@polka/url': 1.0.0-next.21
      mrmime: 1.0.1
      totalist: 1.1.0

  /sisteransi/1.0.5:
    resolution:
      {
        integrity: sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==
      }
    dev: true

  /slash/2.0.0:
    resolution:
      {
        integrity: sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==
      }
    engines: { node: '>=6' }
    dev: true

  /slash/3.0.0:
    resolution:
      {
        integrity: sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==
      }
    engines: { node: '>=8' }

  /slice-ansi/4.0.0:
    resolution:
      {
        integrity: sha512-qMCMfhY040cVHT43K9BFygqYbUPFZKHOg7K73mtTWJRb8pyP3fzf4Ixd5SzdEJQ6MRUg/WBnOLxghZtKKurENQ==
      }
    engines: { node: '>=10' }
    dependencies:
      ansi-styles: 4.3.0
      astral-regex: 2.0.0
      is-fullwidth-code-point: 3.0.0
    dev: true

  /smart-buffer/4.2.0:
    resolution:
      {
        integrity: sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==
      }
    engines: { node: '>= 6.0.0', npm: '>= 3.0.0' }
    dev: true

  /snapdragon-node/2.1.1:
    resolution:
      {
        integrity: sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      define-property: 1.0.0
      isobject: 3.0.1
      snapdragon-util: 3.0.1

  /snapdragon-util/3.0.1:
    resolution:
      {
        integrity: sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      kind-of: 3.2.2

  /snapdragon/0.8.2:
    resolution:
      {
        integrity: sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      base: 0.11.2
      debug: 2.6.9
      define-property: 0.2.5
      extend-shallow: 2.0.1
      map-cache: 0.2.2
      source-map: 0.5.7
      source-map-resolve: 0.5.3
      use: 3.1.1

  /sockjs/0.3.24:
    resolution:
      {
        integrity: sha512-GJgLTZ7vYb/JtPSSZ10hsOYIvEYsjbNU+zPdIHcUaWVNUEPivzxku31865sSSud0Da0W4lEeOPlmw93zLQchuQ==
      }
    dependencies:
      faye-websocket: 0.11.4
      uuid: 8.3.2
      websocket-driver: 0.7.4

  /socks-proxy-agent/5.0.1:
    resolution:
      {
        integrity: sha512-vZdmnjb9a2Tz6WEQVIurybSwElwPxMZaIc7PzqbJTrezcKNznv6giT7J7tZDZ1BojVaa1jvO/UiUdhDVB0ACoQ==
      }
    engines: { node: '>= 6' }
    dependencies:
      agent-base: 6.0.2
      debug: 4.3.4
      socks: 2.6.2
    transitivePeerDependencies:
      - supports-color
    dev: true

  /socks/2.6.2:
    resolution:
      {
        integrity: sha512-zDZhHhZRY9PxRruRMR7kMhnf3I8hDs4S3f9RecfnGxvcBHQcKcIH/oUcEWffsfl1XxdYlA7nnlGbbTvPz9D8gA==
      }
    engines: { node: '>= 10.13.0', npm: '>= 3.0.0' }
    dependencies:
      ip: 1.1.8
      smart-buffer: 4.2.0
    dev: true

  /sonic-boom/1.4.1:
    resolution:
      {
        integrity: sha512-LRHh/A8tpW7ru89lrlkU4AszXt1dbwSjVWguGrmlxE7tawVmDBlI1PILMkXAxJTwqhgsEeTHzj36D5CmHgQmNg==
      }
    dependencies:
      atomic-sleep: 1.0.0
      flatstr: 1.0.12
    dev: false

  /sort-keys/4.2.0:
    resolution:
      {
        integrity: sha512-aUYIEU/UviqPgc8mHR6IW1EGxkAXpeRETYcrzg8cLAvUPZcpAlleSXHV2mY7G12GphSH6Gzv+4MMVSSkbdteHg==
      }
    engines: { node: '>=8' }
    dependencies:
      is-plain-obj: 2.1.0
    dev: false

  /source-list-map/2.0.1:
    resolution:
      {
        integrity: sha512-qnQ7gVMxGNxsiL4lEuJwe/To8UnK7fAnmbGEEH8RpLouuKbeEm0lhbQVFIrNSuB+G7tVrAlVsZgETT5nljf+Iw==
      }

  /source-map-js/1.0.2:
    resolution:
      {
        integrity: sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==
      }
    engines: { node: '>=0.10.0' }

  /source-map-loader/1.1.3_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-6YHeF+XzDOrT/ycFJNI53cgEsp/tHTMl37hi7uVyqFAlTXW109JazaQCkbc+jjoL2637qkH1amLi+JzrIpt5lA==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      abab: 2.0.6
      iconv-lite: 0.6.3
      loader-utils: 2.0.2
      schema-utils: 3.1.1
      source-map: 0.6.1
      webpack: 4.44.2
      whatwg-mimetype: 2.3.0
    dev: true

  /source-map-loader/3.0.1_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-Vp1UsfyPvgujKQzi4pyDiTOnE3E4H+yHvkVRN3c/9PJmQS4CQJExvcDvaX/D+RV+xQben9HJ56jMJS3CgUeWyA==
      }
    engines: { node: '>= 12.13.0' }
    peerDependencies:
      webpack: ^5.0.0
    dependencies:
      abab: 2.0.6
      iconv-lite: 0.6.3
      source-map-js: 1.0.2
      webpack: 5.68.0

  /source-map-resolve/0.5.3:
    resolution:
      {
        integrity: sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==
      }
    deprecated: See https://github.com/lydell/source-map-resolve#deprecated
    dependencies:
      atob: 2.1.2
      decode-uri-component: 0.2.0
      resolve-url: 0.2.1
      source-map-url: 0.4.1
      urix: 0.1.0

  /source-map-support/0.5.19:
    resolution:
      {
        integrity: sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==
      }
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1
    dev: true

  /source-map-support/0.5.21:
    resolution:
      {
        integrity: sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==
      }
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1

  /source-map-url/0.4.1:
    resolution:
      {
        integrity: sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw==
      }
    deprecated: See https://github.com/lydell/source-map-url#deprecated

  /source-map/0.4.4:
    resolution:
      {
        integrity: sha512-Y8nIfcb1s/7DcobUz1yOO1GSp7gyL+D9zLHDehT7iRESqGSxjJ448Sg7rvfgsRJCnKLdSl11uGf0s9X80cH0/A==
      }
    engines: { node: '>=0.8.0' }
    dependencies:
      amdefine: 1.0.1
    dev: false

  /source-map/0.5.7:
    resolution:
      {
        integrity: sha512-LbrmJOMUSdEVxIKvdcJzQC+nQhe8FUZQTXQy6+I75skNgn3OoQ0DZA8YnFa7gp8tqtL3KPf1kmo0R5DoApeSGQ==
      }
    engines: { node: '>=0.10.0' }

  /source-map/0.6.1:
    resolution:
      {
        integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==
      }
    engines: { node: '>=0.10.0' }

  /source-map/0.7.4:
    resolution:
      {
        integrity: sha512-l3BikUxvPOcn5E74dZiq5BGsTb5yEwhaTSzccU6t4sDOH8NWJCstKO5QT2CvtFoK6F0saL7p9xHAqHOlCPJygA==
      }
    engines: { node: '>= 8' }

  /space-separated-tokens/1.1.5:
    resolution:
      {
        integrity: sha512-q/JSVd1Lptzhf5bkYm4ob4iWPjx0KiRe3sRFBNrVqbJkFaBm5vbbowy1mymoPNLRa52+oadOhJ+K49wsSeSjTA==
      }
    dev: true

  /spdx-correct/3.1.1:
    resolution:
      {
        integrity: sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==
      }
    dependencies:
      spdx-expression-parse: 3.0.1
      spdx-license-ids: 3.0.11

  /spdx-exceptions/2.3.0:
    resolution:
      {
        integrity: sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==
      }

  /spdx-expression-parse/3.0.1:
    resolution:
      {
        integrity: sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==
      }
    dependencies:
      spdx-exceptions: 2.3.0
      spdx-license-ids: 3.0.11

  /spdx-license-ids/3.0.11:
    resolution:
      {
        integrity: sha512-Ctl2BrFiM0X3MANYgj3CkygxhRmr9mi6xhejbdO960nF6EDJApTYpn0BQnDKlnNBULKiCN1n3w9EBkHK8ZWg+g==
      }

  /spdy-transport/3.0.0:
    resolution:
      {
        integrity: sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==
      }
    dependencies:
      debug: 4.3.4
      detect-node: 2.1.0
      hpack.js: 2.1.6
      obuf: 1.1.2
      readable-stream: 3.6.0
      wbuf: 1.7.3
    transitivePeerDependencies:
      - supports-color

  /spdy/4.0.2:
    resolution:
      {
        integrity: sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==
      }
    engines: { node: '>=6.0.0' }
    dependencies:
      debug: 4.3.4
      handle-thing: 2.0.1
      http-deceiver: 1.2.7
      select-hose: 2.0.0
      spdy-transport: 3.0.0
    transitivePeerDependencies:
      - supports-color

  /split-string/3.1.0:
    resolution:
      {
        integrity: sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      extend-shallow: 3.0.2

  /split2/3.2.2:
    resolution:
      {
        integrity: sha512-9NThjpgZnifTkJpzTZ7Eue85S49QwpNhZTq6GRJwObb6jnLFNGB7Qm73V5HewTROPyxD0C29xqmaI68bQtV+hg==
      }
    dependencies:
      readable-stream: 3.6.0
    dev: true

  /sprintf-js/1.0.3:
    resolution:
      {
        integrity: sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==
      }

  /sshpk/1.17.0:
    resolution:
      {
        integrity: sha512-/9HIEs1ZXGhSPE8X6Ccm7Nam1z8KcoCqPdI7ecm1N33EzAetWahvQWVqLZtaZQ+IDKX4IyA2o0gBzqIMkAagHQ==
      }
    engines: { node: '>=0.10.0' }
    hasBin: true
    dependencies:
      asn1: 0.2.6
      assert-plus: 1.0.0
      bcrypt-pbkdf: 1.0.2
      dashdash: 1.14.1
      ecc-jsbn: 0.1.2
      getpass: 0.1.7
      jsbn: 0.1.1
      safer-buffer: 2.1.2
      tweetnacl: 0.14.5
    dev: false

  /ssri/6.0.2:
    resolution:
      {
        integrity: sha512-cepbSq/neFK7xB6A50KHN0xHDotYzq58wWCa5LeWqnPrHG8GzfEjO/4O8kpmcGW+oaxkvhEJCWgbgNk4/ZV93Q==
      }
    dependencies:
      figgy-pudding: 3.5.2

  /ssri/8.0.1:
    resolution:
      {
        integrity: sha512-97qShzy1AiyxvPNIkLWoGua7xoQzzPjQ0HAH4B0rWKo7SZ6USuPcrUiAFrws0UH8RrbWmgq3LMTObhPIHbbBeQ==
      }
    engines: { node: '>= 8' }
    dependencies:
      minipass: 3.1.6

  /stable/0.1.8:
    resolution:
      {
        integrity: sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w==
      }

  /stack-utils/2.0.5:
    resolution:
      {
        integrity: sha512-xrQcmYhOsn/1kX+Vraq+7j4oE2j/6BFscZ0etmYg81xuM8Gq0022Pxb8+IqgOFUIaxHs0KaSb7T1+OegiNrNFA==
      }
    engines: { node: '>=10' }
    dependencies:
      escape-string-regexp: 2.0.0

  /stackframe/1.3.4:
    resolution:
      {
        integrity: sha512-oeVtt7eWQS+Na6F//S4kJ2K2VbRlS9D43mAlMyVpVWovy9o+jfgH8O9agzANzaiLjclA0oYzUXEM4PurhSUChw==
      }
    dev: true

  /state-toggle/1.0.3:
    resolution:
      {
        integrity: sha512-d/5Z4/2iiCnHw6Xzghyhb+GcmF89bxwgXG60wjIiZaxnymbyOmI8Hk4VqHXiVVp6u2ysaskFfXg3ekCj4WNftQ==
      }
    dev: true

  /static-extend/0.1.2:
    resolution:
      {
        integrity: sha512-72E9+uLc27Mt718pMHt9VMNiAL4LMsmDbBva8mxWUCkT07fSzEGMYUCk0XWY6lp0j6RBAG4cJ3mWuZv2OE3s0g==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      define-property: 0.2.5
      object-copy: 0.1.0

  /statuses/1.5.0:
    resolution:
      {
        integrity: sha512-OpZ3zP+jT1PI7I8nemJX4AKmAX070ZkYPVWV/AaKTJl+tXCTGyVdC1a4SL8RUQYEwk/f34ZX8UTykN68FwrqAA==
      }
    engines: { node: '>= 0.6' }

  /statuses/2.0.1:
    resolution:
      {
        integrity: sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==
      }
    engines: { node: '>= 0.8' }

  /stdout-stream/1.4.1:
    resolution:
      {
        integrity: sha512-j4emi03KXqJWcIeF8eIXkjMFN1Cmb8gUlDYGeBALLPo5qdyTfA9bOtl8m33lRoC+vFMkP3gl0WsDr6+gzxbbTA==
      }
    dependencies:
      readable-stream: 2.3.7
    dev: false

  /stoppable/1.1.0:
    resolution:
      {
        integrity: sha512-KXDYZ9dszj6bzvnEMRYvxgeTHU74QBFL54XKtP3nyMuJ81CFYtABZ3bAzL2EdFUaEwJOBOgENyFj3R7oTzDyyw==
      }
    engines: { node: '>=4', npm: '>=6' }
    dev: false

  /store2/2.13.2:
    resolution:
      {
        integrity: sha512-CMtO2Uneg3SAz/d6fZ/6qbqqQHi2ynq6/KzMD/26gTkiEShCcpqFfTHgOxsE0egAq6SX3FmN4CeSqn8BzXQkJg==
      }
    dev: true

  /stream-browserify/2.0.2:
    resolution:
      {
        integrity: sha512-nX6hmklHs/gr2FuxYDltq8fJA1GDlxKQCz8O/IM4atRqBH8OORmBNgfvW5gG10GT/qQ9u0CzIvr2X5Pkt6ntqg==
      }
    dependencies:
      inherits: 2.0.4
      readable-stream: 2.3.7

  /stream-each/1.2.3:
    resolution:
      {
        integrity: sha512-vlMC2f8I2u/bZGqkdfLQW/13Zihpej/7PmSiMQsbYddxuTsJp8vRe2x2FvVExZg7FaOds43ROAuFJwPR4MTZLw==
      }
    dependencies:
      end-of-stream: 1.4.4
      stream-shift: 1.0.1

  /stream-http/2.8.3:
    resolution:
      {
        integrity: sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==
      }
    dependencies:
      builtin-status-codes: 3.0.0
      inherits: 2.0.4
      readable-stream: 2.3.7
      to-arraybuffer: 1.0.1
      xtend: 4.0.2

  /stream-shift/1.0.1:
    resolution:
      {
        integrity: sha512-AiisoFqQ0vbGcZgQPY1cdP2I76glaVA/RauYR4G4thNFgkTqr90yXTo4LYX60Jl+sIlPNHHdGSwo01AvbKUSVQ==
      }

  /streamroller/3.1.1:
    resolution:
      {
        integrity: sha512-iPhtd9unZ6zKdWgMeYGfSBuqCngyJy1B/GPi/lTpwGpa3bajuX30GjUVd0/Tn/Xhg0mr4DOSENozz9Y06qyonQ==
      }
    engines: { node: '>=8.0' }
    dependencies:
      date-format: 4.0.11
      debug: 4.3.4
      fs-extra: 10.1.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /strict-uri-encode/2.0.0:
    resolution:
      {
        integrity: sha512-QwiXZgpRcKkhTj2Scnn++4PKtWsH0kpzZ62L2R6c/LUVYv7hVnZqcg2+sMuT6R7Jusu1vviK/MFsu6kNJfWlEQ==
      }
    engines: { node: '>=4' }
    dev: false

  /string-argv/0.3.1:
    resolution:
      {
        integrity: sha512-a1uQGz7IyVy9YwhqjZIZu1c8JO8dNIe20xBmSS6qu9kv++k3JGzCVmprbNN5Kn+BgzD5E7YYwg1CcjuJMRNsvg==
      }
    engines: { node: '>=0.6.19' }

  /string-hash/1.1.3:
    resolution:
      {
        integrity: sha512-kJUvRUFK49aub+a7T1nNE66EJbZBMnBgoC1UbCZ5n6bsZKBRga4KgBRTMn/pFkeCZSYtNeSyMxPDM0AXWELk2A==
      }
    dev: false

  /string-length/4.0.2:
    resolution:
      {
        integrity: sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==
      }
    engines: { node: '>=10' }
    dependencies:
      char-regex: 1.0.2
      strip-ansi: 6.0.1

  /string-similarity/4.0.4:
    resolution:
      {
        integrity: sha512-/q/8Q4Bl4ZKAPjj8WerIBJWALKkaPRfrvhfF8k/B23i4nzrlRj2/go1m90In7nG/3XDSbOo0+pu6RvCTM9RGMQ==
      }
    dev: false

  /string-width/1.0.2:
    resolution:
      {
        integrity: sha512-0XsVpQLnVCXHJfyEs8tC0zpTVIr5PKKsQtkT29IwupnPTjtPmQ3xT/4yCREF9hYkV/3M3kzcUTSAZT6a6h81tw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      code-point-at: 1.1.0
      is-fullwidth-code-point: 1.0.0
      strip-ansi: 3.0.1

  /string-width/3.1.0:
    resolution:
      {
        integrity: sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==
      }
    engines: { node: '>=6' }
    dependencies:
      emoji-regex: 7.0.3
      is-fullwidth-code-point: 2.0.0
      strip-ansi: 5.2.0
    dev: false

  /string-width/4.2.3:
    resolution:
      {
        integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==
      }
    engines: { node: '>=8' }
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  /string.prototype.matchall/4.0.7:
    resolution:
      {
        integrity: sha512-f48okCX7JiwVi1NXCVWcFnZgADDC/n2vePlQ/KUCNqCikLLilQvwjMO8+BHVKvgzH0JB0J9LEPgxOGT02RoETg==
      }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
      get-intrinsic: 1.1.2
      has-symbols: 1.0.3
      internal-slot: 1.0.3
      regexp.prototype.flags: 1.4.3
      side-channel: 1.0.4

  /string.prototype.padend/3.1.3:
    resolution:
      {
        integrity: sha512-jNIIeokznm8SD/TZISQsZKYu7RJyheFNt84DUPrh482GC8RVp2MKqm2O5oBRdGxbDQoXrhhWtPIWQOiy20svUg==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
    dev: true

  /string.prototype.padstart/3.1.3:
    resolution:
      {
        integrity: sha512-NZydyOMtYxpTjGqp0VN5PYUF/tsU15yDMZnUdj16qRUIUiMJkHHSDElYyQFrMu+/WloTpA7MQSiADhBicDfaoA==
      }
    engines: { node: '>= 0.4' }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1
    dev: true

  /string.prototype.trimend/1.0.5:
    resolution:
      {
        integrity: sha512-I7RGvmjV4pJ7O3kdf+LXFpVfdNOxtCW/2C8f6jNiW4+PQchwxkCDzlk1/7p+Wl4bqFIZeF47qAHXLuHHWKAxog==
      }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1

  /string.prototype.trimstart/1.0.5:
    resolution:
      {
        integrity: sha512-THx16TJCGlsN0o6dl2o6ncWUsdgnLRSA23rRE5pyGBw/mLr3Ej/R2LaqCtgP8VNMGZsvMWnf9ooZPyY2bHvUFg==
      }
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.4
      es-abstract: 1.20.1

  /string_decoder/0.10.31:
    resolution:
      {
        integrity: sha512-ev2QzSzWPYmy9GuqfIVildA4OdcGLeFZQrq5ys6RtiuF+RQQiZWr8TZNyAcuVXyQRYfEO+MsoB/1BuQVhOJuoQ==
      }
    dev: true

  /string_decoder/1.1.1:
    resolution:
      {
        integrity: sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==
      }
    dependencies:
      safe-buffer: 5.1.2

  /string_decoder/1.3.0:
    resolution:
      {
        integrity: sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==
      }
    dependencies:
      safe-buffer: 5.2.1

  /strip-ansi/3.0.1:
    resolution:
      {
        integrity: sha512-VhumSSbBqDTP8p2ZLKj40UjBCV4+v8bUSEpUb4KjRgWk9pbqGF4REFj6KEagidb2f/M6AzC0EmFyDNGaw9OCzg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      ansi-regex: 2.1.1

  /strip-ansi/5.2.0:
    resolution:
      {
        integrity: sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==
      }
    engines: { node: '>=6' }
    dependencies:
      ansi-regex: 4.1.1
    dev: false

  /strip-ansi/6.0.1:
    resolution:
      {
        integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==
      }
    engines: { node: '>=8' }
    dependencies:
      ansi-regex: 5.0.1

  /strip-bom/3.0.0:
    resolution:
      {
        integrity: sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==
      }
    engines: { node: '>=4' }
    dev: true

  /strip-bom/4.0.0:
    resolution:
      {
        integrity: sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==
      }
    engines: { node: '>=8' }

  /strip-eof/1.0.0:
    resolution:
      {
        integrity: sha512-7FCwGGmx8mD5xQd3RPUvnSpUXHM3BWuzjtpD4TXsfcZ9EL4azvVVUscFYwD9nx8Kh+uCBC00XBtAykoMHwTh8Q==
      }
    engines: { node: '>=0.10.0' }
    dev: true

  /strip-final-newline/2.0.0:
    resolution:
      {
        integrity: sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==
      }
    engines: { node: '>=6' }

  /strip-indent/3.0.0:
    resolution:
      {
        integrity: sha512-laJTa3Jb+VQpaC6DseHhF7dXVqHTfJPCRDaEbid/drOhgitgYku/letMUqOXFoWV0zIIUbjpdH2t+tYj4bQMRQ==
      }
    engines: { node: '>=8' }
    dependencies:
      min-indent: 1.0.1

  /strip-json-comments/2.0.1:
    resolution:
      {
        integrity: sha512-4gB8na07fecVVkOI6Rs4e7T6NOTki5EmL7TUduTs6bu3EdnSycntVJ4re8kgZA+wx9IueI2Y11bfbgwtzuE0KQ==
      }
    engines: { node: '>=0.10.0' }
    dev: true

  /strip-json-comments/3.1.1:
    resolution:
      {
        integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==
      }
    engines: { node: '>=8' }

  /style-loader/1.3.0_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-V7TCORko8rs9rIqkSrlMfkqA63DfoGBBJmK1kKGCcSi+BWb4cqz0SRsnp4l6rU5iwOEd0/2ePv68SV22VXon4Q==
      }
    engines: { node: '>= 8.9.0' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      loader-utils: 2.0.2
      schema-utils: 2.7.1
      webpack: 4.44.2
    dev: true

  /style-loader/2.0.0_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-Z0gYUJmzZ6ZdRUqpg1r8GsaFKypE+3xAzuFeMuoHgjc9KZv3wMyCRjQIWEbhoFSq7+7yoHXySDJyyWQaPajeiQ==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      loader-utils: 2.0.2
      schema-utils: 3.1.1
      webpack: 4.44.2
    dev: true

  /style-loader/3.3.1_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-GPcQ+LDJbrcxHORTRes6Jy2sfvK2kS6hpSfI/fXhPt+spVzxF6LJ1dHLN9zIGmVaaP044YKaIatFaufENRiDoQ==
      }
    engines: { node: '>= 12.13.0' }
    peerDependencies:
      webpack: ^5.0.0
    dependencies:
      webpack: 5.68.0

  /style-to-object/0.3.0:
    resolution:
      {
        integrity: sha512-CzFnRRXhzWIdItT3OmF8SQfWyahHhjq3HwcMNCNLn+N7klOOqPjMeG/4JSu77D7ypZdGvSzvkrbyeTMizz2VrA==
      }
    dependencies:
      inline-style-parser: 0.1.1
    dev: true

  /stylehacks/5.1.0_postcss@8.4.14:
    resolution:
      {
        integrity: sha512-SzLmvHQTrIWfSgljkQCw2++C9+Ne91d/6Sp92I8c5uHTcy/PgeHamwITIbBW9wnFTY/3ZfSXR9HIL6Ikqmcu6Q==
      }
    engines: { node: ^10 || ^12 || >=14.0 }
    peerDependencies:
      postcss: ^8.2.15
    dependencies:
      browserslist: 4.20.4
      postcss: 8.4.14
      postcss-selector-parser: 6.0.10
    dev: false

  /sudo/1.0.3:
    resolution:
      {
        integrity: sha512-3xMsaPg+8Xm+4LQm0b2V+G3lz3YxtDBzlqiU8CXw2AOIIDSvC1kBxIxBjnoCTq8dTTXAy23m58g6mdClUocpmQ==
      }
    engines: { node: '>=0.8' }
    dependencies:
      inpath: 1.0.2
      pidof: 1.0.2
      read: 1.0.7
    dev: false

  /supports-color/2.0.0:
    resolution:
      {
        integrity: sha512-KKNVtd6pCYgPIKU4cp2733HWYCpplQhddZLBUryaAHou723x+FRzQ5Df824Fj+IyyuiQTRoub4SnIFfIcrp70g==
      }
    engines: { node: '>=0.8.0' }
    dev: false

  /supports-color/3.2.3:
    resolution:
      {
        integrity: sha512-Jds2VIYDrlp5ui7t8abHN2bjAu4LV/q4N2KivFPpGH0lrka0BMq/33AmECUXlKPcHigkNaqfXRENFju+rlcy+A==
      }
    engines: { node: '>=0.8.0' }
    dependencies:
      has-flag: 1.0.0
    dev: false

  /supports-color/5.5.0:
    resolution:
      {
        integrity: sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==
      }
    engines: { node: '>=4' }
    dependencies:
      has-flag: 3.0.0

  /supports-color/6.1.0:
    resolution:
      {
        integrity: sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==
      }
    engines: { node: '>=6' }
    dependencies:
      has-flag: 3.0.0
    dev: false

  /supports-color/7.2.0:
    resolution:
      {
        integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==
      }
    engines: { node: '>=8' }
    dependencies:
      has-flag: 4.0.0

  /supports-color/8.1.1:
    resolution:
      {
        integrity: sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==
      }
    engines: { node: '>=10' }
    dependencies:
      has-flag: 4.0.0

  /supports-hyperlinks/2.2.0:
    resolution:
      {
        integrity: sha512-6sXEzV5+I5j8Bmq9/vUphGRM/RJNT9SCURJLjwfOg51heRtguGWDzcaBlgAzKhQa0EVNpPEKzQuBwZ8S8WaCeQ==
      }
    engines: { node: '>=8' }
    dependencies:
      has-flag: 4.0.0
      supports-color: 7.2.0

  /supports-preserve-symlinks-flag/1.0.0:
    resolution:
      {
        integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==
      }
    engines: { node: '>= 0.4' }

  /svgo/2.8.0:
    resolution:
      {
        integrity: sha512-+N/Q9kV1+F+UeWYoSiULYo4xYSDQlTgb+ayMobAXPwMnLvop7oxKMo9OzIrX5x3eS4L4f2UHhc9axXwY8DpChg==
      }
    engines: { node: '>=10.13.0' }
    hasBin: true
    dependencies:
      '@trysound/sax': 0.2.0
      commander: 7.2.0
      css-select: 4.3.0
      css-tree: 1.1.3
      csso: 4.2.0
      picocolors: 1.0.0
      stable: 0.1.8
    dev: false

  /symbol-tree/3.2.4:
    resolution:
      {
        integrity: sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==
      }

  /symbol.prototype.description/1.0.5:
    resolution:
      {
        integrity: sha512-x738iXRYsrAt9WBhRCVG5BtIC3B7CUkFwbHW2zOvGtwM33s7JjrCDyq8V0zgMYVb5ymsL8+qkzzpANH63CPQaQ==
      }
    engines: { node: '>= 0.11.15' }
    dependencies:
      call-bind: 1.0.2
      get-symbol-description: 1.0.0
      has-symbols: 1.0.3
      object.getownpropertydescriptors: 2.1.4
    dev: true

  /synchronous-promise/2.0.15:
    resolution:
      {
        integrity: sha512-k8uzYIkIVwmT+TcglpdN50pS2y1BDcUnBPK9iJeGu0Pl1lOI8pD6wtzgw91Pjpe+RxtTncw32tLxs/R0yNL2Mg==
      }
    dev: true

  /table/6.8.0:
    resolution:
      {
        integrity: sha512-s/fitrbVeEyHKFa7mFdkuQMWlH1Wgw/yEXMt5xACT4ZpzWFluehAxRtUUQKPuWhaLAWhFcVx6w3oC8VKaUfPGA==
      }
    engines: { node: '>=10.0.0' }
    dependencies:
      ajv: 8.11.0
      lodash.truncate: 4.4.2
      slice-ansi: 4.0.0
      string-width: 4.2.3
      strip-ansi: 6.0.1
    dev: true

  /tapable/1.1.3:
    resolution:
      {
        integrity: sha512-4WK/bYZmj8xLr+HUCODHGF1ZFzsYffasLUgEiMBY4fgtltdO6B4WJtlSbPaDTLpYTcGVwM2qLnFTICEcNxs3kA==
      }
    engines: { node: '>=6' }

  /tapable/2.2.1:
    resolution:
      {
        integrity: sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==
      }
    engines: { node: '>=6' }

  /tar-stream/2.2.0:
    resolution:
      {
        integrity: sha512-ujeqbceABgwMZxEJnk2HDY2DlnUZ+9oEcb1KzTVfYHio0UE6dG71n60d8D2I4qNvleWrrXpmjpt7vZeF1LnMZQ==
      }
    engines: { node: '>=6' }
    dependencies:
      bl: 4.1.0
      end-of-stream: 1.4.4
      fs-constants: 1.0.0
      inherits: 2.0.4
      readable-stream: 3.6.0
    dev: true

  /tar/6.1.11:
    resolution:
      {
        integrity: sha512-an/KZQzQUkZCkuoAA64hM92X0Urb6VpRhAFllDzz44U2mcD5scmT3zBc4VgVpkugF580+DQn8eAFSyoQt0tznA==
      }
    engines: { node: '>= 10' }
    dependencies:
      chownr: 2.0.0
      fs-minipass: 2.1.0
      minipass: 3.1.6
      minizlib: 2.1.2
      mkdirp: 1.0.4
      yallist: 4.0.0

  /telejson/5.3.3:
    resolution:
      {
        integrity: sha512-PjqkJZpzEggA9TBpVtJi1LVptP7tYtXB6rEubwlHap76AMjzvOdKX41CxyaW7ahhzDU1aftXnMCx5kAPDZTQBA==
      }
    dependencies:
      '@types/is-function': 1.0.1
      global: 4.4.0
      is-function: 1.0.2
      is-regex: 1.1.4
      is-symbol: 1.0.4
      isobject: 4.0.0
      lodash: 4.17.21
      memoizerific: 1.11.3
    dev: true

  /temp/0.8.4:
    resolution:
      {
        integrity: sha512-s0ZZzd0BzYv5tLSptZooSjK8oj6C+c19p7Vqta9+6NPOf7r+fxq0cJe6/oN4LTC79sy5NY8ucOJNgwsKCSbfqg==
      }
    engines: { node: '>=6.0.0' }
    dependencies:
      rimraf: 2.6.3
    dev: true

  /terminal-link/2.1.1:
    resolution:
      {
        integrity: sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ==
      }
    engines: { node: '>=8' }
    dependencies:
      ansi-escapes: 4.3.2
      supports-hyperlinks: 2.2.0

  /terser-webpack-plugin/1.4.5_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-04Rfe496lN8EYruwi6oPQkG0vo8C+HT49X687FZnpPF0qMAIHONI6HEXYPKDOE8e5HjXTyKfqRd/agHtH0kOtw==
      }
    engines: { node: '>= 6.9.0' }
    peerDependencies:
      webpack: ^4.0.0
    dependencies:
      cacache: 12.0.4
      find-cache-dir: 2.1.0
      is-wsl: 1.1.0
      schema-utils: 1.0.0
      serialize-javascript: 4.0.0
      source-map: 0.6.1
      terser: 4.8.0
      webpack: 4.44.2
      webpack-sources: 1.4.3
      worker-farm: 1.7.0

  /terser-webpack-plugin/3.0.8_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-ygwK8TYMRTYtSyLB2Mhnt90guQh989CIq/mL/2apwi6rA15Xys4ydNUiH4ah6EZCfQxSk26ZFQilZ4IQ6IZw6A==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      cacache: 15.3.0
      find-cache-dir: 3.3.2
      jest-worker: 26.6.2
      p-limit: 3.1.0
      schema-utils: 2.7.1
      serialize-javascript: 4.0.0
      source-map: 0.6.1
      terser: 4.8.0
      webpack: 4.44.2
      webpack-sources: 1.4.3
    dev: true

  /terser-webpack-plugin/4.2.3_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-jTgXh40RnvOrLQNgIkwEKnQ8rmHjHK4u+6UBEi+W+FPmvb+uo+chJXntKe7/3lW5mNysgSWD60KyesnhW8D6MQ==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      webpack: ^4.0.0 || ^5.0.0
    dependencies:
      cacache: 15.3.0
      find-cache-dir: 3.3.2
      jest-worker: 26.6.2
      p-limit: 3.1.0
      schema-utils: 3.1.1
      serialize-javascript: 5.0.1
      source-map: 0.6.1
      terser: 5.9.0
      webpack: 4.44.2
      webpack-sources: 1.4.3
    dev: true

  /terser-webpack-plugin/5.3.3_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-Fx60G5HNYknNTNQnzQ1VePRuu89ZVYWfjRAeT5rITuCY/1b08s49e5kSQwHDirKZWuoKOBRFS98EUUoZ9kLEwQ==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      '@swc/core': '*'
      esbuild: '*'
      uglify-js: '*'
      webpack: ^5.1.0
    peerDependenciesMeta:
      '@swc/core':
        optional: true
      esbuild:
        optional: true
      uglify-js:
        optional: true
    dependencies:
      '@jridgewell/trace-mapping': 0.3.13
      jest-worker: 27.5.1
      schema-utils: 3.1.1
      serialize-javascript: 6.0.0
      terser: 5.9.0
      webpack: 5.68.0

  /terser/4.8.0:
    resolution:
      {
        integrity: sha512-EAPipTNeWsb/3wLPeup1tVPaXfIaU68xMnVdPafIL1TV05OhASArYyIfFvnvJCNrR2NIOvDVNNTFRa+Re2MWyw==
      }
    engines: { node: '>=6.0.0' }
    hasBin: true
    dependencies:
      commander: 2.20.3
      source-map: 0.6.1
      source-map-support: 0.5.21

  /terser/5.14.1:
    resolution:
      {
        integrity: sha512-+ahUAE+iheqBTDxXhTisdA8hgvbEG1hHOQ9xmNjeUJSoi6DU/gMrKNcfZjHkyY6Alnuyc+ikYJaxxfHkT3+WuQ==
      }
    engines: { node: '>=10' }
    hasBin: true
    dependencies:
      '@jridgewell/source-map': 0.3.2
      acorn: 8.7.1
      commander: 2.20.3
      source-map-support: 0.5.21

  /terser/5.9.0:
    resolution:
      {
        integrity: sha512-h5hxa23sCdpzcye/7b8YqbE5OwKca/ni0RQz1uRX3tGh8haaGHqcuSqbGRybuAKNdntZ0mDgFNXPJ48xQ2RXKQ==
      }
    engines: { node: '>=10' }
    hasBin: true
    dependencies:
      commander: 2.20.3
      source-map: 0.7.4
      source-map-support: 0.5.21

  /test-exclude/6.0.0:
    resolution:
      {
        integrity: sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==
      }
    engines: { node: '>=8' }
    dependencies:
      '@istanbuljs/schema': 0.1.3
      glob: 7.2.3
      minimatch: 3.1.2

  /text-table/0.2.0:
    resolution:
      {
        integrity: sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==
      }

  /thenify-all/1.6.0:
    resolution:
      {
        integrity: sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==
      }
    engines: { node: '>=0.8' }
    dependencies:
      thenify: 3.3.1
    dev: false

  /thenify/3.3.1:
    resolution:
      {
        integrity: sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==
      }
    dependencies:
      any-promise: 1.3.0
    dev: false

  /throat/6.0.1:
    resolution:
      {
        integrity: sha512-8hmiGIJMDlwjg7dlJ4yKGLK8EsYqKgPWbG3b4wjJddKNwc7N7Dpn08Df4szr/sZdMVeOstrdYSsqzX6BYbcB+w==
      }

  /throttle-debounce/3.0.1:
    resolution:
      {
        integrity: sha512-dTEWWNu6JmeVXY0ZYoPuH5cRIwc0MeGbJwah9KUNYSJwommQpCzTySTpEe8Gs1J23aeWEuAobe4Ag7EHVt/LOg==
      }
    engines: { node: '>=10' }
    dev: true

  /through/2.3.8:
    resolution:
      {
        integrity: sha512-w89qg7PI8wAdvX60bMDP+bFoD5Dvhm9oLheFp5O4a2QF0cSBGsBX4qZmadPMvVqlLJBBci+WqGGOAPvcDeNSVg==
      }
    dev: false

  /through2/2.0.5:
    resolution:
      {
        integrity: sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==
      }
    dependencies:
      readable-stream: 2.3.7
      xtend: 4.0.2

  /through2/4.0.2:
    resolution:
      {
        integrity: sha512-iOqSav00cVxEEICeD7TjLB1sueEL+81Wpzp2bY17uZjZN0pWZPuo4suZ/61VujxmqSGFfgOcNuTZ85QJwNZQpw==
      }
    dependencies:
      readable-stream: 3.6.0
    dev: true

  /thunky/1.1.0:
    resolution:
      {
        integrity: sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA==
      }

  /timers-browserify/2.0.12:
    resolution:
      {
        integrity: sha512-9phl76Cqm6FhSX9Xe1ZUAMLtm1BLkKj2Qd5ApyWkXzsMRaA7dgr81kf4wJmQf/hAvg8EEyJxDo3du/0KlhPiKQ==
      }
    engines: { node: '>=0.6.0' }
    dependencies:
      setimmediate: 1.0.5

  /timers-ext/0.1.7:
    resolution:
      {
        integrity: sha512-b85NUNzTSdodShTIbky6ZF02e8STtVVfD+fu4aXXShEELpozH+bCpJLYMPZbsABN2wDH7fJpqIoXxJpzbf0NqQ==
      }
    dependencies:
      es5-ext: 0.10.61
      next-tick: 1.1.0
    dev: true

  /tiny-lru/7.0.6:
    resolution:
      {
        integrity: sha512-zNYO0Kvgn5rXzWpL0y3RS09sMK67eGaQj9805jlK9G6pSadfriTczzLHFXa/xcW4mIRfmlB9HyQ/+SgL0V1uow==
      }
    engines: { node: '>=6' }
    dev: false

  /tmp/0.0.33:
    resolution:
      {
        integrity: sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==
      }
    engines: { node: '>=0.6.0' }
    dependencies:
      os-tmpdir: 1.0.2
    dev: false

  /tmpl/1.0.5:
    resolution:
      {
        integrity: sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw==
      }

  /to-arraybuffer/1.0.1:
    resolution:
      {
        integrity: sha512-okFlQcoGTi4LQBG/PgSYblw9VOyptsz2KJZqc6qtgGdes8VktzUQkj4BI2blit072iS8VODNcMA+tvnS9dnuMA==
      }

  /to-fast-properties/2.0.0:
    resolution:
      {
        integrity: sha512-/OaKK0xYrs3DmxRYqL/yDc+FxFUVYhDlXMhRmv3z915w2HF1tnN1omB354j8VUGO/hbRzyD6Y3sA7v7GS/ceog==
      }
    engines: { node: '>=4' }

  /to-object-path/0.3.0:
    resolution:
      {
        integrity: sha512-9mWHdnGRuh3onocaHzukyvCZhzvr6tiflAy/JRFXcJX0TjgfWA9pk9t8CMbzmBE4Jfw58pXbkngtBtqYxzNEyg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      kind-of: 3.2.2

  /to-readable-stream/1.0.0:
    resolution:
      {
        integrity: sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q==
      }
    engines: { node: '>=6' }
    dev: true

  /to-regex-range/2.1.1:
    resolution:
      {
        integrity: sha512-ZZWNfCjUokXXDGXFpZehJIkZqq91BcULFq/Pi7M5i4JnxXdhMKAK682z8bCW3o8Hj1wuuzoKcW3DfVzaP6VuNg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      is-number: 3.0.0
      repeat-string: 1.6.1

  /to-regex-range/5.0.1:
    resolution:
      {
        integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==
      }
    engines: { node: '>=8.0' }
    dependencies:
      is-number: 7.0.0

  /to-regex/3.0.2:
    resolution:
      {
        integrity: sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      define-property: 2.0.2
      extend-shallow: 3.0.2
      regex-not: 1.0.2
      safe-regex: 1.1.0

  /toggle-selection/1.0.6:
    resolution:
      {
        integrity: sha512-BiZS+C1OS8g/q2RRbJmy59xpyghNBqrr6k5L/uKBGRsTfxmu3ffiRnd8mlGPUVayg8pvfi5urfnu8TU7DVOkLQ==
      }
    dev: true

  /toidentifier/1.0.1:
    resolution:
      {
        integrity: sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==
      }
    engines: { node: '>=0.6' }

  /totalist/1.1.0:
    resolution:
      {
        integrity: sha512-gduQwd1rOdDMGxFG1gEvhV88Oirdo2p+KjoYFU7k2g+i7n6AFFbDQ5kMPUsW0pNbfQsB/cwXvT1i4Bue0s9g5g==
      }
    engines: { node: '>=6' }

  /touch/3.1.0:
    resolution:
      {
        integrity: sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==
      }
    hasBin: true
    dependencies:
      nopt: 1.0.10
    dev: true

  /tough-cookie/2.5.0:
    resolution:
      {
        integrity: sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==
      }
    engines: { node: '>=0.8' }
    dependencies:
      psl: 1.8.0
      punycode: 2.1.1
    dev: false

  /tough-cookie/4.0.0:
    resolution:
      {
        integrity: sha512-tHdtEpQCMrc1YLrMaqXXcj6AxhYi/xgit6mZu1+EDWUn+qhUf8wMQoFIy9NXuq23zAwtcB0t/MjACGR18pcRbg==
      }
    engines: { node: '>=6' }
    dependencies:
      psl: 1.8.0
      punycode: 2.1.1
      universalify: 0.1.2

  /tr46/0.0.3:
    resolution:
      {
        integrity: sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==
      }

  /tr46/2.1.0:
    resolution:
      {
        integrity: sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw==
      }
    engines: { node: '>=8' }
    dependencies:
      punycode: 2.1.1

  /tree-kill/1.2.2:
    resolution:
      {
        integrity: sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==
      }
    hasBin: true
    dev: true

  /trim-newlines/3.0.1:
    resolution:
      {
        integrity: sha512-c1PTsA3tYrIsLGkJkzHF+w9F2EyxfXGo4UyJc4pFL++FMjnq0HJS69T3M7d//gKrFKwy429bouPescbjecU+Zw==
      }
    engines: { node: '>=8' }
    dev: false

  /trim-trailing-lines/1.1.4:
    resolution:
      {
        integrity: sha512-rjUWSqnfTNrjbB9NQWfPMH/xRK1deHeGsHoVfpxJ++XeYXE0d6B1En37AHfw3jtfTU7dzMzZL2jjpe8Qb5gLIQ==
      }
    dev: true

  /trim/0.0.1:
    resolution: { integrity: sha1-WFhUf2spB1fulczMZm+1AITEYN0= }
    dev: true

  /trough/1.0.5:
    resolution:
      {
        integrity: sha512-rvuRbTarPXmMb79SmzEp8aqXNKcK+y0XaB298IXueQ8I2PsrATcPBCSPyK/dDNa2iWOhKlfNnOjdAOTBU/nkFA==
      }
    dev: true

  /true-case-path/1.0.3:
    resolution:
      {
        integrity: sha512-m6s2OdQe5wgpFMC+pAJ+q9djG82O2jcHPOI6RNg1yy9rCYR+WD6Nbpl32fDpfC56nirdRy+opFa/Vk7HYhqaew==
      }
    dependencies:
      glob: 7.2.3
    dev: false

  /true-case-path/2.2.1:
    resolution:
      {
        integrity: sha512-0z3j8R7MCjy10kc/g+qg7Ln3alJTodw9aDuVWZa3uiWqfuBMKeAeP2ocWcxoyM3D73yz3Jt/Pu4qPr4wHSdB/Q==
      }

  /ts-dedent/2.2.0:
    resolution:
      {
        integrity: sha512-q5W7tVM71e2xjHZTlgfTDoPF/SmqKG5hddq9SzR49CH2hayqRKJtQ4mtRlSxKaJlR/+9rEM+mnBHf7I2/BQcpQ==
      }
    engines: { node: '>=6.10' }
    dev: true

  /ts-loader/6.0.0_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-lszy+D41R0Te2+loZxADWS+E1+Z55A+i3dFfFie1AZHL++65JRKVDBPQgeWgRrlv5tbxdU3zOtXp8b7AFR6KEg==
      }
    engines: { node: '>=8.6' }
    peerDependencies:
      typescript: '*'
    dependencies:
      chalk: 2.4.2
      enhanced-resolve: 4.5.0
      loader-utils: 1.1.0
      micromatch: 4.0.5
      semver: 6.3.0
      typescript: 4.8.4
    dev: false

  /ts-node-dev/2.0.0_fdywls4oqk5utzi4err7lt7tke:
    resolution:
      {
        integrity: sha512-ywMrhCfH6M75yftYvrvNarLEY+SUXtUvU8/0Z6llrHQVBx12GiFk5sStF8UdfE/yfzk9IAq7O5EEbTQsxlBI8w==
      }
    engines: { node: '>=0.8.0' }
    hasBin: true
    peerDependencies:
      node-notifier: '*'
      typescript: '*'
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      chokidar: 3.5.3
      dynamic-dedupe: 0.3.0
      minimist: 1.2.6
      mkdirp: 1.0.4
      resolve: 1.17.0
      rimraf: 2.7.1
      source-map-support: 0.5.21
      tree-kill: 1.2.2
      ts-node: 10.9.1_fdywls4oqk5utzi4err7lt7tke
      tsconfig: 7.0.0
      typescript: 4.8.4
    transitivePeerDependencies:
      - '@swc/core'
      - '@swc/wasm'
      - '@types/node'
    dev: true

  /ts-node/10.9.1_fdywls4oqk5utzi4err7lt7tke:
    resolution:
      {
        integrity: sha512-NtVysVPkxxrwFGUUxGYhfux8k78pQB3JqYBXlLRZgdGUqTO5wU/UyHop5p70iEbGhB7q5KmiZiU0Y3KlJrScEw==
      }
    hasBin: true
    peerDependencies:
      '@swc/core': '>=1.2.50'
      '@swc/wasm': '>=1.2.50'
      '@types/node': '*'
      typescript: '>=2.7'
    peerDependenciesMeta:
      '@swc/core':
        optional: true
      '@swc/wasm':
        optional: true
    dependencies:
      '@cspotcode/source-map-support': 0.8.1
      '@tsconfig/node10': 1.0.9
      '@tsconfig/node12': 1.0.11
      '@tsconfig/node14': 1.0.3
      '@tsconfig/node16': 1.0.3
      '@types/node': 12.20.24
      acorn: 8.7.1
      acorn-walk: 8.2.0
      arg: 4.1.3
      create-require: 1.1.1
      diff: 4.0.2
      make-error: 1.3.6
      typescript: 4.8.4
      v8-compile-cache-lib: 3.0.1
      yn: 3.1.1

  /ts-pnp/1.2.0_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-csd+vJOb/gkzvcCHgTGSChYpy5f1/XKNsmvBGO4JXS+z1v2HobugDz4s1IeFXM3wZB44uczs+eazB5Q/ccdhQw==
      }
    engines: { node: '>=6' }
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      typescript: 4.8.4
    dev: true

  /tsconfig/7.0.0:
    resolution:
      {
        integrity: sha512-vZXmzPrL+EmC4T/4rVlT2jNVMWCi/O4DIiSj3UHg1OE5kCKbk4mfrXc6dZksLgRM/TZlKnousKH9bbTazUWRRw==
      }
    dependencies:
      '@types/strip-bom': 3.0.0
      '@types/strip-json-comments': 0.0.30
      strip-bom: 3.0.0
      strip-json-comments: 2.0.1
    dev: true

  /tslib/1.14.1:
    resolution:
      {
        integrity: sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==
      }

  /tslib/2.3.1:
    resolution:
      {
        integrity: sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw==
      }

  /tslib/2.4.0:
    resolution:
      {
        integrity: sha512-d6xOpEDfsi2CZVlPQzGeux8XMwLT9hssAsaPYExaQMuYskwb+x1x7J371tWlbBdWHroy99KnVB6qIkUbs5X3UQ==
      }
    dev: true

  /tslint-microsoft-contrib/6.2.0_is64cncltak2c2767drphpzcku:
    resolution:
      {
        integrity: sha512-6tfi/2tHqV/3CL77pULBcK+foty11Rr0idRDxKnteTaKm6gWF9qmaCNU17HVssOuwlYNyOmd9Jsmjd+1t3a3qw==
      }
    peerDependencies:
      tslint: ^5.1.0
      typescript: '*'
    dependencies:
      tslint: 5.20.1_typescript@4.8.4
      tsutils: 2.28.0_typescript@4.8.4
      typescript: 4.8.4
    dev: true

  /tslint/5.20.1_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-EcMxhzCFt8k+/UP5r8waCf/lzmeSyVlqxqMEDQE7rWYiQky8KpIBz1JAoYXfROHrPZ1XXd43q8yQnULOLiBRQg==
      }
    engines: { node: '>=4.8.0' }
    hasBin: true
    peerDependencies:
      typescript: '>=2.3.0-dev || >=2.4.0-dev || >=2.5.0-dev || >=2.6.0-dev || >=2.7.0-dev || >=2.8.0-dev || >=2.9.0-dev || >=3.0.0-dev || >= 3.1.0-dev || >= 3.2.0-dev'
    dependencies:
      '@babel/code-frame': 7.16.7
      builtin-modules: 1.1.1
      chalk: 2.4.2
      commander: 2.20.3
      diff: 4.0.2
      glob: 7.2.3
      js-yaml: 3.13.1
      minimatch: 3.1.2
      mkdirp: 0.5.6
      resolve: 1.17.0
      semver: 5.7.1
      tslib: 1.14.1
      tsutils: 2.29.0_typescript@4.8.4
      typescript: 4.8.4
    dev: true

  /tsutils/2.28.0_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-bh5nAtW0tuhvOJnx1GLRn5ScraRLICGyJV5wJhtRWOLsxW70Kk5tZtpK3O/hW6LDnqKS9mlUMPZj9fEMJ0gxqA==
      }
    peerDependencies:
      typescript: '>=2.1.0 || >=2.1.0-dev || >=2.2.0-dev || >=2.3.0-dev || >=2.4.0-dev || >=2.5.0-dev || >=2.6.0-dev || >=2.7.0-dev || >=2.8.0-dev || >=2.9.0-dev || >= 3.0.0-dev || >= 3.1.0-dev'
    dependencies:
      tslib: 1.14.1
      typescript: 4.8.4
    dev: true

  /tsutils/2.29.0_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-g5JVHCIJwzfISaXpXE1qvNalca5Jwob6FjI4AoPlqMusJ6ftFE7IkkFoMhVLRgK+4Kx3gkzb8UZK5t5yTTvEmA==
      }
    peerDependencies:
      typescript: '>=2.1.0 || >=2.1.0-dev || >=2.2.0-dev || >=2.3.0-dev || >=2.4.0-dev || >=2.5.0-dev || >=2.6.0-dev || >=2.7.0-dev || >=2.8.0-dev || >=2.9.0-dev || >= 3.0.0-dev || >= 3.1.0-dev'
    dependencies:
      tslib: 1.14.1
      typescript: 4.8.4
    dev: true

  /tsutils/3.21.0_typescript@4.8.4:
    resolution:
      {
        integrity: sha512-mHKK3iUXL+3UF6xL5k0PEhKRUBKPBCv/+RkEOpjRWxxx27KKRBmmA60A9pgOUvMi8GKhRMPEmjBRPzs2W7O1OA==
      }
    engines: { node: '>= 6' }
    peerDependencies:
      typescript: '>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta'
    dependencies:
      tslib: 1.14.1
      typescript: 4.8.4

  /tty-browserify/0.0.0:
    resolution: { integrity: sha1-oVe6QC2iTpv5V/mqadUk7tQpAaY= }

  /tunnel-agent/0.6.0:
    resolution:
      {
        integrity: sha512-McnNiV1l8RYeY8tBgEpuodCC1mLUdbSN+CYBL7kJsJNInOP8UjDDEwdk6Mw60vdLLrr5NHKZhMAOSrR2NZuQ+w==
      }
    dependencies:
      safe-buffer: 5.2.1
    dev: false

  /tunnel/0.0.6:
    resolution:
      {
        integrity: sha512-1h/Lnq9yajKY2PEbBadPXj3VxsDDu844OnaAo52UVmIzIvwwtBPIuNvkjuzBlTWpfJyUbG3ez0KSBibQkj4ojg==
      }
    engines: { node: '>=0.6.11 <=0.7.0 || >=0.7.3' }
    dev: false

  /tweetnacl/0.14.5:
    resolution:
      {
        integrity: sha512-KXXFFdAbFXY4geFIwoyNK+f5Z1b7swfXABfL7HXCmoIWMKU3dmS26672A4EeQtDzLKy7SXmfBu51JolvEKwtGA==
      }
    dev: false

  /type-check/0.3.2:
    resolution:
      {
        integrity: sha512-ZCmOJdvOWDBYJlzAoFkC+Q0+bUyEOS1ltgp1MGU03fqHG+dbi9tBFU2Rd9QKiDZFAYrhPh2JUf7rZRIuHRKtOg==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      prelude-ls: 1.1.2

  /type-check/0.4.0:
    resolution:
      {
        integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==
      }
    engines: { node: '>= 0.8.0' }
    dependencies:
      prelude-ls: 1.2.1

  /type-detect/4.0.8:
    resolution:
      {
        integrity: sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==
      }
    engines: { node: '>=4' }

  /type-fest/0.18.1:
    resolution:
      {
        integrity: sha512-OIAYXk8+ISY+qTOwkHtKqzAuxchoMiD9Udx+FSGQDuiRR+PJKJHc2NJAXlbhkGwTt/4/nKZxELY1w3ReWOL8mw==
      }
    engines: { node: '>=10' }
    dev: false

  /type-fest/0.20.2:
    resolution:
      {
        integrity: sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==
      }
    engines: { node: '>=10' }

  /type-fest/0.21.3:
    resolution:
      {
        integrity: sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==
      }
    engines: { node: '>=10' }

  /type-fest/0.6.0:
    resolution:
      {
        integrity: sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==
      }
    engines: { node: '>=8' }

  /type-fest/0.8.1:
    resolution:
      {
        integrity: sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==
      }
    engines: { node: '>=8' }

  /type-is/1.6.18:
    resolution:
      {
        integrity: sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==
      }
    engines: { node: '>= 0.6' }
    dependencies:
      media-typer: 0.3.0
      mime-types: 2.1.35

  /type/1.2.0:
    resolution:
      {
        integrity: sha512-+5nt5AAniqsCnu2cEQQdpzCAh33kVx8n0VoFidKpB1dVVLAN/F+bgVOqOJqOnEnrhp222clB5p3vUlD+1QAnfg==
      }
    dev: true

  /type/2.6.0:
    resolution:
      {
        integrity: sha512-eiDBDOmkih5pMbo9OqsqPRGMljLodLcwd5XD5JbtNB0o89xZAwynY9EdCDsJU7LtcVCClu9DvM7/0Ep1hYX3EQ==
      }
    dev: true

  /typedarray-to-buffer/3.1.5:
    resolution:
      {
        integrity: sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==
      }
    dependencies:
      is-typedarray: 1.0.0

  /typedarray/0.0.6:
    resolution:
      {
        integrity: sha512-/aCDEGatGvZ2BIk+HmLf4ifCJFwvKFNb9/JeZPMulfgFracn9QFcAf5GO8B/mweUjSoblS5In0cWhqpfs/5PQA==
      }

  /typescript/2.9.2:
    resolution:
      {
        integrity: sha512-Gr4p6nFNaoufRIY4NMdpQRNmgxVIGMs4Fcu/ujdYk3nAZqk7supzBE9idmvfZIlH/Cuj//dvi+019qEue9lV0w==
      }
    engines: { node: '>=4.2.0' }
    hasBin: true
    dev: true

  /typescript/4.8.4:
    resolution:
      {
        integrity: sha512-QCh+85mCy+h0IGff8r5XWzOVSbBO+KfeYrMQh7NJ58QujwcE22u+NUSmUxqF+un70P9GXKxa2HCNiTTMJknyjQ==
      }
    engines: { node: '>=4.2.0' }
    hasBin: true

  /uglify-js/3.16.0:
    resolution:
      {
        integrity: sha512-FEikl6bR30n0T3amyBh3LoiBdqHRy/f4H80+My34HOesOKyHfOsxAPAxOoqC0JUnC1amnO0IwkYC3sko51caSw==
      }
    engines: { node: '>=0.8.0' }
    hasBin: true
    requiresBuild: true
    dev: true
    optional: true

  /unbox-primitive/1.0.2:
    resolution:
      {
        integrity: sha512-61pPlCD9h51VoreyJ0BReideM3MDKMKnh6+V9L08331ipq6Q8OFXZYiqP6n/tbHx4s5I9uRhcye6BrbkizkBDw==
      }
    dependencies:
      call-bind: 1.0.2
      has-bigints: 1.0.2
      has-symbols: 1.0.3
      which-boxed-primitive: 1.0.2

  /undefsafe/2.0.5:
    resolution:
      {
        integrity: sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==
      }
    dev: true

  /unfetch/4.2.0:
    resolution:
      {
        integrity: sha512-F9p7yYCn6cIW9El1zi0HI6vqpeIvBsr3dSuRO6Xuppb1u5rXpCPmMvLSyECLhybr9isec8Ohl0hPekMVrEinDA==
      }
    dev: true

  /unherit/1.1.3:
    resolution:
      {
        integrity: sha512-Ft16BJcnapDKp0+J/rqFC3Rrk6Y/Ng4nzsC028k2jdDII/rdZ7Wd3pPT/6+vIIxRagwRc9K0IUX0Ra4fKvw+WQ==
      }
    dependencies:
      inherits: 2.0.4
      xtend: 4.0.2
    dev: true

  /unicode-canonical-property-names-ecmascript/2.0.0:
    resolution:
      {
        integrity: sha512-yY5PpDlfVIU5+y/BSCxAJRBIS1Zc2dDG3Ujq+sR0U+JjUevW2JhocOF+soROYDSaAezOzOKuyyixhD6mBknSmQ==
      }
    engines: { node: '>=4' }
    dev: true

  /unicode-match-property-ecmascript/2.0.0:
    resolution:
      {
        integrity: sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==
      }
    engines: { node: '>=4' }
    dependencies:
      unicode-canonical-property-names-ecmascript: 2.0.0
      unicode-property-aliases-ecmascript: 2.0.0
    dev: true

  /unicode-match-property-value-ecmascript/2.0.0:
    resolution:
      {
        integrity: sha512-7Yhkc0Ye+t4PNYzOGKedDhXbYIBe1XEQYQxOPyhcXNMJ0WCABqqj6ckydd6pWRZTHV4GuCPKdBAUiMc60tsKVw==
      }
    engines: { node: '>=4' }
    dev: true

  /unicode-property-aliases-ecmascript/2.0.0:
    resolution:
      {
        integrity: sha512-5Zfuy9q/DFr4tfO7ZPeVXb1aPoeQSdeFMLpYuFebehDAhbuevLs5yxSZmIFN1tP5F9Wl4IpJrYojg85/zgyZHQ==
      }
    engines: { node: '>=4' }
    dev: true

  /unified/9.2.0:
    resolution:
      {
        integrity: sha512-vx2Z0vY+a3YoTj8+pttM3tiJHCwY5UFbYdiWrwBEbHmK8pvsPj2rtAX2BFfgXen8T39CJWblWRDT4L5WGXtDdg==
      }
    dependencies:
      bail: 1.0.5
      extend: 3.0.2
      is-buffer: 2.0.5
      is-plain-obj: 2.1.0
      trough: 1.0.5
      vfile: 4.2.1
    dev: true

  /union-value/1.0.1:
    resolution:
      {
        integrity: sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      arr-union: 3.1.0
      get-value: 2.0.6
      is-extendable: 0.1.1
      set-value: 2.0.1

  /unique-filename/1.1.1:
    resolution:
      {
        integrity: sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==
      }
    dependencies:
      unique-slug: 2.0.2

  /unique-slug/2.0.2:
    resolution:
      {
        integrity: sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==
      }
    dependencies:
      imurmurhash: 0.1.4

  /unique-string/2.0.0:
    resolution:
      {
        integrity: sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==
      }
    engines: { node: '>=8' }
    dependencies:
      crypto-random-string: 2.0.0
    dev: true

  /unist-builder/2.0.3:
    resolution:
      {
        integrity: sha512-f98yt5pnlMWlzP539tPc4grGMsFaQQlP/vM396b00jngsiINumNmsY8rkXjfoi1c6QaM8nQ3vaGDuoKWbe/1Uw==
      }
    dev: true

  /unist-util-generated/1.1.6:
    resolution:
      {
        integrity: sha512-cln2Mm1/CZzN5ttGK7vkoGw+RZ8VcUH6BtGbq98DDtRGquAAOXig1mrBQYelOwMXYS8rK+vZDyyojSjp7JX+Lg==
      }
    dev: true

  /unist-util-is/4.1.0:
    resolution:
      {
        integrity: sha512-ZOQSsnce92GrxSqlnEEseX0gi7GH9zTJZ0p9dtu87WRb/37mMPO2Ilx1s/t9vBHrFhbgweUwb+t7cIn5dxPhZg==
      }
    dev: true

  /unist-util-position/3.1.0:
    resolution:
      {
        integrity: sha512-w+PkwCbYSFw8vpgWD0v7zRCl1FpY3fjDSQ3/N/wNd9Ffa4gPi8+4keqt99N3XW6F99t/mUzp2xAhNmfKWp95QA==
      }
    dev: true

  /unist-util-remove-position/2.0.1:
    resolution:
      {
        integrity: sha512-fDZsLYIe2uT+oGFnuZmy73K6ZxOPG/Qcm+w7jbEjaFcJgbQ6cqjs/eSPzXhsmGpAsWPkqZM9pYjww5QTn3LHMA==
      }
    dependencies:
      unist-util-visit: 2.0.3
    dev: true

  /unist-util-remove/2.1.0:
    resolution:
      {
        integrity: sha512-J8NYPyBm4baYLdCbjmf1bhPu45Cr1MWTm77qd9istEkzWpnN6O9tMsEbB2JhNnBCqGENRqEWomQ+He6au0B27Q==
      }
    dependencies:
      unist-util-is: 4.1.0
    dev: true

  /unist-util-stringify-position/2.0.3:
    resolution:
      {
        integrity: sha512-3faScn5I+hy9VleOq/qNbAd6pAx7iH5jYBMS9I1HgQVijz/4mv5Bvw5iw1sC/90CODiKo81G/ps8AJrISn687g==
      }
    dependencies:
      '@types/unist': 2.0.6
    dev: true

  /unist-util-visit-parents/3.1.1:
    resolution:
      {
        integrity: sha512-1KROIZWo6bcMrZEwiH2UrXDyalAa0uqzWCxCJj6lPOvTve2WkfgCytoDTPaMnodXh1WrXOq0haVYHj99ynJlsg==
      }
    dependencies:
      '@types/unist': 2.0.6
      unist-util-is: 4.1.0
    dev: true

  /unist-util-visit/2.0.3:
    resolution:
      {
        integrity: sha512-iJ4/RczbJMkD0712mGktuGpm/U4By4FfDonL7N/9tATGIF4imikjOuagyMY53tnZq3NP6BcmlrHhEKAfGWjh7Q==
      }
    dependencies:
      '@types/unist': 2.0.6
      unist-util-is: 4.1.0
      unist-util-visit-parents: 3.1.1
    dev: true

  /universalify/0.1.2:
    resolution:
      {
        integrity: sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==
      }
    engines: { node: '>= 4.0.0' }

  /universalify/2.0.0:
    resolution:
      {
        integrity: sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ==
      }
    engines: { node: '>= 10.0.0' }
    dev: true

  /unixify/1.0.0:
    resolution: { integrity: sha1-OmQcjC/7zk2mg6XHDwOkYpQMIJA= }
    engines: { node: '>=0.10.0' }
    dependencies:
      normalize-path: 2.1.1
    dev: true

  /unpipe/1.0.0:
    resolution:
      {
        integrity: sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==
      }
    engines: { node: '>= 0.8' }

  /unset-value/1.0.0:
    resolution:
      {
        integrity: sha512-PcA2tsuGSF9cnySLHTLSh2qrQiJ70mn+r+Glzxv2TWZblxsxCC52BDlZoPCsz7STd9pN7EZetkWZBAvk4cgZdQ==
      }
    engines: { node: '>=0.10.0' }
    dependencies:
      has-value: 0.3.1
      isobject: 3.0.1

  /upath/1.2.0:
    resolution:
      {
        integrity: sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==
      }
    engines: { node: '>=4' }
    optional: true

  /update-notifier/5.1.0:
    resolution:
      {
        integrity: sha512-ItnICHbeMh9GqUy31hFPrD1kcuZ3rpxDZbf4KUDavXwS0bW5m7SLbDQpGX3UYr072cbrF5hFUs3r5tUsPwjfHw==
      }
    engines: { node: '>=10' }
    dependencies:
      boxen: 5.1.2
      chalk: 4.1.2
      configstore: 5.0.1
      has-yarn: 2.1.0
      import-lazy: 2.1.0
      is-ci: 2.0.0
      is-installed-globally: 0.4.0
      is-npm: 5.0.0
      is-yarn-global: 0.3.0
      latest-version: 5.1.0
      pupa: 2.1.1
      semver: 7.3.7
      semver-diff: 3.1.1
      xdg-basedir: 4.0.0
    dev: true

  /uri-js/4.4.1:
    resolution:
      {
        integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==
      }
    dependencies:
      punycode: 2.1.1

  /urix/0.1.0:
    resolution:
      {
        integrity: sha512-Am1ousAhSLBeB9cG/7k7r2R0zj50uDRlZHPGbazid5s9rlF1F/QKYObEKSIunSjIOkJZqwRRLpvewjEkM7pSqg==
      }
    deprecated: Please see https://github.com/lydell/urix#deprecated

  /url-loader/4.1.1_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-3BTV812+AVHHOJQO8O5MkWgZ5aosP7GnROJwvzLS9hWDj00lZ6Z0wNak423Lp9PBZN05N+Jk/N5Si8jRAlGyWA==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      file-loader: '*'
      webpack: ^4.0.0 || ^5.0.0
    peerDependenciesMeta:
      file-loader:
        optional: true
    dependencies:
      loader-utils: 2.0.2
      mime-types: 2.1.35
      schema-utils: 3.1.1
      webpack: 5.68.0
    dev: false

  /url-loader/4.1.1_zmzwotvrfu62vdeozbyveyswza:
    resolution:
      {
        integrity: sha512-3BTV812+AVHHOJQO8O5MkWgZ5aosP7GnROJwvzLS9hWDj00lZ6Z0wNak423Lp9PBZN05N+Jk/N5Si8jRAlGyWA==
      }
    engines: { node: '>= 10.13.0' }
    peerDependencies:
      file-loader: '*'
      webpack: ^4.0.0 || ^5.0.0
    peerDependenciesMeta:
      file-loader:
        optional: true
    dependencies:
      file-loader: 6.2.0_webpack@4.44.2
      loader-utils: 2.0.2
      mime-types: 2.1.35
      schema-utils: 3.1.1
      webpack: 4.44.2
    dev: true

  /url-parse-lax/3.0.0:
    resolution:
      {
        integrity: sha512-NjFKA0DidqPa5ciFcSrXnAltTtzz84ogy+NebPvfEgAck0+TNg4UJ4IN+fB7zRZfbgUf0syOo9MDxFkDSMuFaQ==
      }
    engines: { node: '>=4' }
    dependencies:
      prepend-http: 2.0.0
    dev: true

  /url/0.10.3:
    resolution:
      {
        integrity: sha512-hzSUW2q06EqL1gKM/a+obYHLIO6ct2hwPuviqTTOcfFVc61UbfJ2Q32+uGL/HCPxKqrdGB5QUwIe7UqlDgwsOQ==
      }
    dependencies:
      punycode: 1.3.2
      querystring: 0.2.0
    dev: true

  /url/0.11.0:
    resolution:
      {
        integrity: sha512-kbailJa29QrtXnxgq+DdCEGlbTeYM2eJUxsz6vjZavrCYPMIFHMKQmSKYAIuUK2i7hgPm28a8piX5NTUtM/LKQ==
      }
    dependencies:
      punycode: 1.3.2
      querystring: 0.2.0

  /use-composed-ref/1.3.0_react@16.13.1:
    resolution:
      {
        integrity: sha512-GLMG0Jc/jiKov/3Ulid1wbv3r54K9HlMW29IWcDFPEqFkSO2nS0MuefWgMJpeHQ9YJeXDL3ZUF+P3jdXlZX/cQ==
      }
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    dependencies:
      react: 16.13.1
    dev: true

  /use-isomorphic-layout-effect/1.1.2_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-49L8yCO3iGT/ZF9QttjwLF/ZD9Iwto5LnH5LmEdk/6cFmXddqi2ulF0edxTwjj+7mqvpVVGQWvbXZdn32wRSHA==
      }
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true
    dependencies:
      '@types/react': 16.14.23
      react: 16.13.1
    dev: true

  /use-latest/1.2.1_qjwx5m6wssz3lnb35xwkc3pz6q:
    resolution:
      {
        integrity: sha512-xA+AVm/Wlg3e2P/JiItTziwS7FK92LWrDB0p+hgXloIMuVCeJJ8v6f0eeHyPZaJrM+usM1FkFfbNCrJGs8A/zw==
      }
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true
    dependencies:
      '@types/react': 16.14.23
      react: 16.13.1
      use-isomorphic-layout-effect: 1.1.2_qjwx5m6wssz3lnb35xwkc3pz6q
    dev: true

  /use/3.1.1:
    resolution:
      {
        integrity: sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==
      }
    engines: { node: '>=0.10.0' }

  /util-deprecate/1.0.2:
    resolution:
      {
        integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==
      }

  /util.promisify/1.0.0:
    resolution:
      {
        integrity: sha512-i+6qA2MPhvoKLuxnJNpXAGhg7HphQOSUq2LKMZD0m15EiskXUkMvKdF4Uui0WYeCUGea+o2cw/ZuwehtfsrNkA==
      }
    dependencies:
      define-properties: 1.1.4
      object.getownpropertydescriptors: 2.1.4

  /util/0.10.3:
    resolution:
      {
        integrity: sha512-5KiHfsmkqacuKjkRkdV7SsfDJ2EGiPsK92s2MhNSY0craxjTdKTtqKsJaCWp4LW33ZZ0OPUv1WO/TFvNQRiQxQ==
      }
    dependencies:
      inherits: 2.0.1

  /util/0.11.1:
    resolution:
      {
        integrity: sha512-HShAsny+zS2TZfaXxD9tYj4HQGlBezXZMZuM/S5PKLLoZkShZiGk9o5CzukI1LVHZvjdvZ2Sj1aW/Ndn2NB/HQ==
      }
    dependencies:
      inherits: 2.0.3

  /utila/0.4.0:
    resolution:
      {
        integrity: sha512-Z0DbgELS9/L/75wZbro8xAnT50pBVFQZ+hUEueGDU5FN51YSCYM+jdxsfCiHjwNP/4LCDD0i/graKpeBnOXKRA==
      }

  /utils-merge/1.0.1:
    resolution:
      {
        integrity: sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==
      }
    engines: { node: '>= 0.4.0' }

  /uuid-browser/3.1.0:
    resolution:
      {
        integrity: sha512-dsNgbLaTrd6l3MMxTtouOCFw4CBFc/3a+GgYA2YyrJvyQ1u6q4pcu3ktLoUZ/VN/Aw9WsauazbgsgdfVWgAKQg==
      }
    dev: true

  /uuid/3.4.0:
    resolution:
      {
        integrity: sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==
      }
    deprecated: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
    hasBin: true

  /uuid/8.0.0:
    resolution:
      {
        integrity: sha512-jOXGuXZAWdsTH7eZLtyXMqUb9EcWMGZNbL9YcGBJl4MH4nrxHmZJhEHvyLFrkxo+28uLb/NYRcStH48fnD0Vzw==
      }
    hasBin: true
    dev: true

  /uuid/8.3.2:
    resolution:
      {
        integrity: sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==
      }
    hasBin: true

  /v8-compile-cache-lib/3.0.1:
    resolution:
      {
        integrity: sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==
      }

  /v8-compile-cache/2.3.0:
    resolution:
      {
        integrity: sha512-l8lCEmLcLYZh4nbunNZvQCJc5pv7+RCwa8q/LdUx8u7lsWvPDKmpodJAJNwkAhJC//dFY48KuIEmjtd4RViDrA==
      }

  /v8-to-istanbul/8.1.1:
    resolution:
      {
        integrity: sha512-FGtKtv3xIpR6BYhvgH8MI/y78oT7d8Au3ww4QIxymrCtZEh5b8gCw2siywE+puhEmuWKDtmfrvF5UlB298ut3w==
      }
    engines: { node: '>=10.12.0' }
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4
      convert-source-map: 1.8.0
      source-map: 0.7.4

  /v8-to-istanbul/9.0.0:
    resolution:
      {
        integrity: sha512-HcvgY/xaRm7isYmyx+lFKA4uQmfUbN0J4M0nNItvzTvH/iQ9kW5j/t4YSR+Ge323/lrgDAWJoF46tzGQHwBHFw==
      }
    engines: { node: '>=10.12.0' }
    dependencies:
      '@jridgewell/trace-mapping': 0.3.13
      '@types/istanbul-lib-coverage': 2.0.4
      convert-source-map: 1.8.0
    dev: true

  /validate-npm-package-license/3.0.4:
    resolution:
      {
        integrity: sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==
      }
    dependencies:
      spdx-correct: 3.1.1
      spdx-expression-parse: 3.0.1

  /validate-npm-package-name/3.0.0:
    resolution:
      {
        integrity: sha512-M6w37eVCMMouJ9V/sdPGnC5H4uDr73/+xdq0FBLO3TFFX1+7wiUY6Es328NN+y43tmY+doUdN9g9J21vqB7iLw==
      }
    dependencies:
      builtins: 1.0.3
    dev: false

  /validator/13.7.0:
    resolution:
      {
        integrity: sha512-nYXQLCBkpJ8X6ltALua9dRrZDHVYxjJ1wgskNt1lH9fzGjs3tgojGSCBjmEPwkWS1y29+DrizMTW19Pr9uB2nw==
      }
    engines: { node: '>= 0.10' }

  /value-or-promise/1.0.11:
    resolution:
      {
        integrity: sha512-41BrgH+dIbCFXClcSapVs5M6GkENd3gQOJpEfPDNa71LsUGMXDL0jMWpI/Rh7WhX+Aalfz2TTS3Zt5pUsbnhLg==
      }
    engines: { node: '>=12' }
    dev: true

  /vary/1.1.2:
    resolution:
      {
        integrity: sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==
      }
    engines: { node: '>= 0.8' }

  /verror/1.10.0:
    resolution: { integrity: sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA= }
    engines: { '0': node >=0.6.0 }
    dependencies:
      assert-plus: 1.0.0
      core-util-is: 1.0.2
      extsprintf: 1.3.0
    dev: false

  /vfile-location/3.2.0:
    resolution:
      {
        integrity: sha512-aLEIZKv/oxuCDZ8lkJGhuhztf/BW4M+iHdCwglA/eWc+vtuRFJj8EtgceYFX4LRjOhCAAiNHsKGssC6onJ+jbA==
      }
    dev: true

  /vfile-message/2.0.4:
    resolution:
      {
        integrity: sha512-DjssxRGkMvifUOJre00juHoP9DPWuzjxKuMDrhNbk2TdaYYBNMStsNhEOt3idrtI12VQYM/1+iM0KOzXi4pxwQ==
      }
    dependencies:
      '@types/unist': 2.0.6
      unist-util-stringify-position: 2.0.3
    dev: true

  /vfile/4.2.1:
    resolution:
      {
        integrity: sha512-O6AE4OskCG5S1emQ/4gl8zK586RqA3srz3nfK/Viy0UPToBc5Trp9BVFb1u0CjsKrAWwnpr4ifM/KBXPWwJbCA==
      }
    dependencies:
      '@types/unist': 2.0.6
      is-buffer: 2.0.5
      unist-util-stringify-position: 2.0.3
      vfile-message: 2.0.4
    dev: true

  /vm-browserify/1.1.2:
    resolution:
      {
        integrity: sha512-2ham8XPWTONajOR0ohOKOHXkm3+gaBmGut3SRuu75xLd/RRaY6vqgh8NBYYk7+RW3u5AtzPQZG8F10LHkl0lAQ==
      }

  /vm2/3.9.9:
    resolution:
      {
        integrity: sha512-xwTm7NLh/uOjARRBs8/95H0e8fT3Ukw5D/JJWhxMbhKzNh1Nu981jQKvkep9iKYNxzlVrdzD0mlBGkDKZWprlw==
      }
    engines: { node: '>=6.0' }
    hasBin: true
    dependencies:
      acorn: 8.7.1
      acorn-walk: 8.2.0
    dev: true

  /w3c-hr-time/1.0.2:
    resolution:
      {
        integrity: sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==
      }
    dependencies:
      browser-process-hrtime: 1.0.0

  /w3c-xmlserializer/2.0.0:
    resolution:
      {
        integrity: sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA==
      }
    engines: { node: '>=10' }
    dependencies:
      xml-name-validator: 3.0.0

  /walker/1.0.8:
    resolution:
      {
        integrity: sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ==
      }
    dependencies:
      makeerror: 1.0.12

  /warning/4.0.3:
    resolution:
      {
        integrity: sha512-rpJyN222KWIvHJ/F53XSZv0Zl/accqHR8et1kpaMTD/fLCRxtV8iX8czMzY7sVZupTI3zcUTg8eycS2kNF9l6w==
      }
    dependencies:
      loose-envify: 1.4.0
    dev: true

  /watchpack-chokidar2/2.0.1:
    resolution:
      {
        integrity: sha512-nCFfBIPKr5Sh61s4LPpy1Wtfi0HE8isJ3d2Yb5/Ppw2P2B/3eVSEBjKfN0fmHJSK14+31KwMKmcrzs2GM4P0Ww==
      }
    requiresBuild: true
    dependencies:
      chokidar: 2.1.8
    optional: true

  /watchpack/1.7.5:
    resolution:
      {
        integrity: sha512-9P3MWk6SrKjHsGkLT2KHXdQ/9SNkyoJbabxnKOoJepsvJjJG8uYTR3yTPxPQvNDI3w4Nz1xnE0TLHK4RIVe/MQ==
      }
    dependencies:
      graceful-fs: 4.2.10
      neo-async: 2.6.2
    optionalDependencies:
      chokidar: 3.5.3
      watchpack-chokidar2: 2.0.1

  /watchpack/2.4.0:
    resolution:
      {
        integrity: sha512-Lcvm7MGST/4fup+ifyKi2hjyIAwcdI4HRgtvTpIUxBRhB+RFtUh8XtDOxUfctVCnhVi+QQj49i91OyvzkJl6cg==
      }
    engines: { node: '>=10.13.0' }
    dependencies:
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.10

  /wbuf/1.7.3:
    resolution:
      {
        integrity: sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==
      }
    dependencies:
      minimalistic-assert: 1.0.1

  /web-namespaces/1.1.4:
    resolution:
      {
        integrity: sha512-wYxSGajtmoP4WxfejAPIr4l0fVh+jeMXZb08wNc0tMg6xsfZXj3cECqIK0G7ZAqUq0PP8WlMDtaOGVBTAWztNw==
      }
    dev: true

  /webidl-conversions/3.0.1:
    resolution:
      {
        integrity: sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==
      }

  /webidl-conversions/5.0.0:
    resolution:
      {
        integrity: sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA==
      }
    engines: { node: '>=8' }

  /webidl-conversions/6.1.0:
    resolution:
      {
        integrity: sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w==
      }
    engines: { node: '>=10.4' }

  /webpack-bundle-analyzer/4.5.0:
    resolution:
      {
        integrity: sha512-GUMZlM3SKwS8Z+CKeIFx7CVoHn3dXFcUAjT/dcZQQmfSZGvitPfMob2ipjai7ovFFqPvTqkEZ/leL4O0YOdAYQ==
      }
    engines: { node: '>= 10.13.0' }
    hasBin: true
    dependencies:
      acorn: 8.7.1
      acorn-walk: 8.2.0
      chalk: 4.1.2
      commander: 7.2.0
      gzip-size: 6.0.0
      lodash: 4.17.21
      opener: 1.5.2
      sirv: 1.0.19
      ws: 7.5.8
    transitivePeerDependencies:
      - bufferutil
      - utf-8-validate

  /webpack-cli/3.3.12_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-NVWBaz9k839ZH/sinurM+HcDvJOTXwSjYp1ku+5XKeOC03z8v5QitnK/x+lAxGXFyhdayoIf/GOpv85z3/xPag==
      }
    engines: { node: '>=6.11.5' }
    hasBin: true
    peerDependencies:
      webpack: 4.x.x
    dependencies:
      chalk: 2.4.2
      cross-spawn: 6.0.5
      enhanced-resolve: 4.5.0
      findup-sync: 3.0.0
      global-modules: 2.0.0
      import-local: 2.0.0
      interpret: 1.4.0
      loader-utils: 1.4.0
      supports-color: 6.1.0
      v8-compile-cache: 2.3.0
      webpack: 4.44.2_webpack-cli@3.3.12
      yargs: 13.3.2
    dev: false

  /webpack-dev-middleware/3.7.3_2jhnw6fokymnjfoumvhvkjoyjq:
    resolution:
      {
        integrity: sha512-djelc/zGiz9nZj/U7PTBi2ViorGJXEWo/3ltkPbDyxCXhhEXkW0ce99falaok4TPj+AsxLiXJR0EBOb0zh9fKQ==
      }
    engines: { node: '>= 6' }
    peerDependencies:
      '@types/webpack': ^4
      webpack: ^4.0.0 || ^5.0.0
    peerDependenciesMeta:
      '@types/webpack':
        optional: true
    dependencies:
      '@types/webpack': 4.41.32
      memory-fs: 0.4.1
      mime: 2.6.0
      mkdirp: 0.5.6
      range-parser: 1.2.1
      webpack: 4.44.2
      webpack-log: 2.0.0
    dev: true

  /webpack-dev-middleware/5.3.3_2jhnw6fokymnjfoumvhvkjoyjq:
    resolution:
      {
        integrity: sha512-hj5CYrY0bZLB+eTO+x/j67Pkrquiy7kWepMHmUMoPsmcUaeEnQJqFzHJOyxgWlq746/wUuA64p9ta34Kyb01pA==
      }
    engines: { node: '>= 12.13.0' }
    peerDependencies:
      '@types/webpack': ^4
      webpack: ^4.0.0 || ^5.0.0
    peerDependenciesMeta:
      '@types/webpack':
        optional: true
    dependencies:
      '@types/webpack': 4.41.32
      colorette: 2.0.19
      memfs: 3.4.3
      mime-types: 2.1.35
      range-parser: 1.2.1
      schema-utils: 4.0.0
      webpack: 4.44.2
    dev: false

  /webpack-dev-middleware/5.3.3_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-hj5CYrY0bZLB+eTO+x/j67Pkrquiy7kWepMHmUMoPsmcUaeEnQJqFzHJOyxgWlq746/wUuA64p9ta34Kyb01pA==
      }
    engines: { node: '>= 12.13.0' }
    peerDependencies:
      '@types/webpack': ^4
      webpack: ^4.0.0 || ^5.0.0
    peerDependenciesMeta:
      '@types/webpack':
        optional: true
    dependencies:
      colorette: 2.0.19
      memfs: 3.4.3
      mime-types: 2.1.35
      range-parser: 1.2.1
      schema-utils: 4.0.0
      webpack: 4.44.2_webpack-cli@3.3.12
    dev: false

  /webpack-dev-middleware/5.3.3_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-hj5CYrY0bZLB+eTO+x/j67Pkrquiy7kWepMHmUMoPsmcUaeEnQJqFzHJOyxgWlq746/wUuA64p9ta34Kyb01pA==
      }
    engines: { node: '>= 12.13.0' }
    peerDependencies:
      '@types/webpack': ^4
      webpack: ^4.0.0 || ^5.0.0
    peerDependenciesMeta:
      '@types/webpack':
        optional: true
    dependencies:
      colorette: 2.0.19
      memfs: 3.4.3
      mime-types: 2.1.35
      range-parser: 1.2.1
      schema-utils: 4.0.0
      webpack: 5.68.0

  /webpack-dev-server/4.9.3_2jhnw6fokymnjfoumvhvkjoyjq:
    resolution:
      {
        integrity: sha512-3qp/eoboZG5/6QgiZ3llN8TUzkSpYg1Ko9khWX1h40MIEUNS2mDoIa8aXsPfskER+GbTvs/IJZ1QTBBhhuetSw==
      }
    engines: { node: '>= 12.13.0' }
    hasBin: true
    peerDependencies:
      '@types/webpack': ^4
      webpack: ^4.37.0 || ^5.0.0
      webpack-cli: '*'
    peerDependenciesMeta:
      '@types/webpack':
        optional: true
      webpack-cli:
        optional: true
    dependencies:
      '@types/bonjour': 3.5.10
      '@types/connect-history-api-fallback': 1.3.5
      '@types/express': 4.17.13
      '@types/express-serve-static-core': 4.17.29
      '@types/serve-index': 1.9.1
      '@types/serve-static': 1.13.10
      '@types/sockjs': 0.3.33
      '@types/webpack': 4.41.32
      '@types/ws': 8.5.3
      ansi-html-community: 0.0.8
      anymatch: 3.1.2
      bonjour-service: 1.0.13
      chokidar: 3.5.3
      colorette: 2.0.19
      compression: 1.7.4
      connect-history-api-fallback: 2.0.0
      default-gateway: 6.0.3
      express: 4.18.1
      graceful-fs: 4.2.10
      html-entities: 2.3.3
      http-proxy-middleware: 2.0.6
      ipaddr.js: 2.0.1
      open: 8.4.0
      p-retry: 4.6.2
      rimraf: 3.0.2
      schema-utils: 4.0.0
      selfsigned: 2.0.1
      serve-index: 1.9.1
      sockjs: 0.3.24
      spdy: 4.0.2
      webpack: 4.44.2
      webpack-dev-middleware: 5.3.3_2jhnw6fokymnjfoumvhvkjoyjq
      ws: 8.8.0
    transitivePeerDependencies:
      - bufferutil
      - debug
      - supports-color
      - utf-8-validate
    dev: false

  /webpack-dev-server/4.9.3_spfcq5ngldu5cvjikbre424ry4:
    resolution:
      {
        integrity: sha512-3qp/eoboZG5/6QgiZ3llN8TUzkSpYg1Ko9khWX1h40MIEUNS2mDoIa8aXsPfskER+GbTvs/IJZ1QTBBhhuetSw==
      }
    engines: { node: '>= 12.13.0' }
    hasBin: true
    peerDependencies:
      '@types/webpack': ^4
      webpack: ^4.37.0 || ^5.0.0
      webpack-cli: '*'
    peerDependenciesMeta:
      '@types/webpack':
        optional: true
      webpack-cli:
        optional: true
    dependencies:
      '@types/bonjour': 3.5.10
      '@types/connect-history-api-fallback': 1.3.5
      '@types/express': 4.17.13
      '@types/express-serve-static-core': 4.17.29
      '@types/serve-index': 1.9.1
      '@types/serve-static': 1.13.10
      '@types/sockjs': 0.3.33
      '@types/ws': 8.5.3
      ansi-html-community: 0.0.8
      anymatch: 3.1.2
      bonjour-service: 1.0.13
      chokidar: 3.5.3
      colorette: 2.0.19
      compression: 1.7.4
      connect-history-api-fallback: 2.0.0
      default-gateway: 6.0.3
      express: 4.18.1
      graceful-fs: 4.2.10
      html-entities: 2.3.3
      http-proxy-middleware: 2.0.6
      ipaddr.js: 2.0.1
      open: 8.4.0
      p-retry: 4.6.2
      rimraf: 3.0.2
      schema-utils: 4.0.0
      selfsigned: 2.0.1
      serve-index: 1.9.1
      sockjs: 0.3.24
      spdy: 4.0.2
      webpack: 4.44.2_webpack-cli@3.3.12
      webpack-cli: 3.3.12_webpack@4.44.2
      webpack-dev-middleware: 5.3.3_webpack@4.44.2
      ws: 8.8.0
    transitivePeerDependencies:
      - bufferutil
      - debug
      - supports-color
      - utf-8-validate
    dev: false

  /webpack-dev-server/4.9.3_webpack@5.68.0:
    resolution:
      {
        integrity: sha512-3qp/eoboZG5/6QgiZ3llN8TUzkSpYg1Ko9khWX1h40MIEUNS2mDoIa8aXsPfskER+GbTvs/IJZ1QTBBhhuetSw==
      }
    engines: { node: '>= 12.13.0' }
    hasBin: true
    peerDependencies:
      '@types/webpack': ^4
      webpack: ^4.37.0 || ^5.0.0
      webpack-cli: '*'
    peerDependenciesMeta:
      '@types/webpack':
        optional: true
      webpack-cli:
        optional: true
    dependencies:
      '@types/bonjour': 3.5.10
      '@types/connect-history-api-fallback': 1.3.5
      '@types/express': 4.17.13
      '@types/express-serve-static-core': 4.17.29
      '@types/serve-index': 1.9.1
      '@types/serve-static': 1.13.10
      '@types/sockjs': 0.3.33
      '@types/ws': 8.5.3
      ansi-html-community: 0.0.8
      anymatch: 3.1.2
      bonjour-service: 1.0.13
      chokidar: 3.5.3
      colorette: 2.0.19
      compression: 1.7.4
      connect-history-api-fallback: 2.0.0
      default-gateway: 6.0.3
      express: 4.18.1
      graceful-fs: 4.2.10
      html-entities: 2.3.3
      http-proxy-middleware: 2.0.6
      ipaddr.js: 2.0.1
      open: 8.4.0
      p-retry: 4.6.2
      rimraf: 3.0.2
      schema-utils: 4.0.0
      selfsigned: 2.0.1
      serve-index: 1.9.1
      sockjs: 0.3.24
      spdy: 4.0.2
      webpack: 5.68.0
      webpack-dev-middleware: 5.3.3_webpack@5.68.0
      ws: 8.8.0
    transitivePeerDependencies:
      - bufferutil
      - debug
      - supports-color
      - utf-8-validate

  /webpack-filter-warnings-plugin/1.2.1_webpack@4.44.2:
    resolution:
      {
        integrity: sha512-Ez6ytc9IseDMLPo0qCuNNYzgtUl8NovOqjIq4uAU8LTD4uoa1w1KpZyyzFtLTEMZpkkOkLfL9eN+KGYdk1Qtwg==
      }
    engines: { node: '>= 4.3 < 5.0.0 || >= 5.10' }
    peerDependencies:
      webpack: ^2.0.0 || ^3.0.0 || ^4.0.0
    dependencies:
      webpack: 4.44.2
    dev: true

  /webpack-hot-middleware/2.25.1:
    resolution:
      {
        integrity: sha512-Koh0KyU/RPYwel/khxbsDz9ibDivmUbrRuKSSQvW42KSDdO4w23WI3SkHpSUKHE76LrFnnM/L7JCrpBwu8AXYw==
      }
    dependencies:
      ansi-html-community: 0.0.8
      html-entities: 2.3.3
      querystring: 0.2.1
      strip-ansi: 6.0.1
    dev: true

  /webpack-log/2.0.0:
    resolution:
      {
        integrity: sha512-cX8G2vR/85UYG59FgkoMamwHUIkSSlV3bBMRsbxVXVUk2j6NleCKjQ/WE9eYg9WY4w25O9w8wKP4rzNZFmUcUg==
      }
    engines: { node: '>= 6' }
    dependencies:
      ansi-colors: 3.2.4
      uuid: 3.4.0
    dev: true

  /webpack-merge/5.8.0:
    resolution:
      {
        integrity: sha512-/SaI7xY0831XwP6kzuwhKWVKDP9t1QY1h65lAFLbZqMPIuYcD9QAW4u9STIbU9kaJbPBB/geU/gLr1wDjOhQ+Q==
      }
    engines: { node: '>=10.0.0' }
    dependencies:
      clone-deep: 4.0.1
      wildcard: 2.0.0
    dev: false

  /webpack-sources/1.4.3:
    resolution:
      {
        integrity: sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==
      }
    dependencies:
      source-list-map: 2.0.1
      source-map: 0.6.1

  /webpack-sources/3.2.3:
    resolution:
      {
        integrity: sha512-/DyMEOrDgLKKIG0fmvtz+4dUX/3Ghozwgm6iPp8KRhvn+eQf9+Q7GWxVNMk3+uCPWfdXYC4ExGBckIXdFEfH1w==
      }
    engines: { node: '>=10.13.0' }

  /webpack-virtual-modules/0.2.2:
    resolution:
      {
        integrity: sha512-kDUmfm3BZrei0y+1NTHJInejzxfhtU8eDj2M7OKb2IWrPFAeO1SOH2KuQ68MSZu9IGEHcxbkKKR1v18FrUSOmA==
      }
    dependencies:
      debug: 3.2.7
    dev: true

  /webpack/4.44.2:
    resolution:
      {
        integrity: sha512-6KJVGlCxYdISyurpQ0IPTklv+DULv05rs2hseIXer6D7KrUicRDLFb4IUM1S6LUAKypPM/nSiVSuv8jHu1m3/Q==
      }
    engines: { node: '>=6.11.5' }
    hasBin: true
    peerDependencies:
      webpack-cli: '*'
      webpack-command: '*'
    peerDependenciesMeta:
      webpack-cli:
        optional: true
      webpack-command:
        optional: true
    dependencies:
      '@webassemblyjs/ast': 1.9.0
      '@webassemblyjs/helper-module-context': 1.9.0
      '@webassemblyjs/wasm-edit': 1.9.0
      '@webassemblyjs/wasm-parser': 1.9.0
      acorn: 6.4.2
      ajv: 6.12.6
      ajv-keywords: 3.5.2_ajv@6.12.6
      chrome-trace-event: 1.0.3
      enhanced-resolve: 4.5.0
      eslint-scope: 4.0.3
      json-parse-better-errors: 1.0.2
      loader-runner: 2.4.0
      loader-utils: 1.4.0
      memory-fs: 0.4.1
      micromatch: 3.1.10
      mkdirp: 0.5.6
      neo-async: 2.6.2
      node-libs-browser: 2.2.1
      schema-utils: 1.0.0
      tapable: 1.1.3
      terser-webpack-plugin: 1.4.5_webpack@4.44.2
      watchpack: 1.7.5
      webpack-sources: 1.4.3

  /webpack/4.44.2_webpack-cli@3.3.12:
    resolution:
      {
        integrity: sha512-6KJVGlCxYdISyurpQ0IPTklv+DULv05rs2hseIXer6D7KrUicRDLFb4IUM1S6LUAKypPM/nSiVSuv8jHu1m3/Q==
      }
    engines: { node: '>=6.11.5' }
    hasBin: true
    peerDependencies:
      webpack-cli: '*'
      webpack-command: '*'
    peerDependenciesMeta:
      webpack-cli:
        optional: true
      webpack-command:
        optional: true
    dependencies:
      '@webassemblyjs/ast': 1.9.0
      '@webassemblyjs/helper-module-context': 1.9.0
      '@webassemblyjs/wasm-edit': 1.9.0
      '@webassemblyjs/wasm-parser': 1.9.0
      acorn: 6.4.2
      ajv: 6.12.6
      ajv-keywords: 3.5.2_ajv@6.12.6
      chrome-trace-event: 1.0.3
      enhanced-resolve: 4.5.0
      eslint-scope: 4.0.3
      json-parse-better-errors: 1.0.2
      loader-runner: 2.4.0
      loader-utils: 1.4.0
      memory-fs: 0.4.1
      micromatch: 3.1.10
      mkdirp: 0.5.6
      neo-async: 2.6.2
      node-libs-browser: 2.2.1
      schema-utils: 1.0.0
      tapable: 1.1.3
      terser-webpack-plugin: 1.4.5_webpack@4.44.2
      watchpack: 1.7.5
      webpack-cli: 3.3.12_webpack@4.44.2
      webpack-sources: 1.4.3
    dev: false

  /webpack/5.68.0:
    resolution:
      {
        integrity: sha512-zUcqaUO0772UuuW2bzaES2Zjlm/y3kRBQDVFVCge+s2Y8mwuUTdperGaAv65/NtRL/1zanpSJOq/MD8u61vo6g==
      }
    engines: { node: '>=10.13.0' }
    hasBin: true
    peerDependencies:
      webpack-cli: '*'
    peerDependenciesMeta:
      webpack-cli:
        optional: true
    dependencies:
      '@types/eslint-scope': 3.7.3
      '@types/estree': 0.0.50
      '@webassemblyjs/ast': 1.11.1
      '@webassemblyjs/wasm-edit': 1.11.1
      '@webassemblyjs/wasm-parser': 1.11.1
      acorn: 8.7.1
      acorn-import-assertions: 1.8.0_acorn@8.7.1
      browserslist: 4.20.4
      chrome-trace-event: 1.0.3
      enhanced-resolve: 5.9.3
      es-module-lexer: 0.9.3
      eslint-scope: 5.1.1
      events: 3.3.0
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.10
      json-parse-better-errors: 1.0.2
      loader-runner: 4.3.0
      mime-types: 2.1.35
      neo-async: 2.6.2
      schema-utils: 3.1.1
      tapable: 2.2.1
      terser-webpack-plugin: 5.3.3_webpack@5.68.0
      watchpack: 2.4.0
      webpack-sources: 3.2.3
    transitivePeerDependencies:
      - '@swc/core'
      - esbuild
      - uglify-js

  /websocket-driver/0.7.4:
    resolution:
      {
        integrity: sha512-b17KeDIQVjvb0ssuSDF2cYXSg2iztliJ4B9WdsuB6J952qCPKmnVq4DyW5motImXHDC1cBT/1UezrJVsKw5zjg==
      }
    engines: { node: '>=0.8.0' }
    dependencies:
      http-parser-js: 0.5.6
      safe-buffer: 5.2.1
      websocket-extensions: 0.1.4

  /websocket-extensions/0.1.4:
    resolution:
      {
        integrity: sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg==
      }
    engines: { node: '>=0.8.0' }

  /whatwg-encoding/1.0.5:
    resolution:
      {
        integrity: sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==
      }
    dependencies:
      iconv-lite: 0.4.24

  /whatwg-mimetype/2.3.0:
    resolution:
      {
        integrity: sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==
      }

  /whatwg-url/5.0.0:
    resolution:
      {
        integrity: sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==
      }
    dependencies:
      tr46: 0.0.3
      webidl-conversions: 3.0.1

  /whatwg-url/8.7.0:
    resolution:
      {
        integrity: sha512-gAojqb/m9Q8a5IV96E3fHJM70AzCkgt4uXYX2O7EmuyOnLrViCQlsEBmF9UQIu3/aeAIp2U17rtbpZWNntQqdg==
      }
    engines: { node: '>=10' }
    dependencies:
      lodash: 4.17.21
      tr46: 2.1.0
      webidl-conversions: 6.1.0

  /which-boxed-primitive/1.0.2:
    resolution:
      {
        integrity: sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==
      }
    dependencies:
      is-bigint: 1.0.4
      is-boolean-object: 1.1.2
      is-number-object: 1.0.7
      is-string: 1.0.7
      is-symbol: 1.0.4

  /which-module/2.0.0:
    resolution:
      {
        integrity: sha512-B+enWhmw6cjfVC7kS8Pj9pCrKSc5txArRyaYGe088shv/FGWH+0Rjx/xPgtsWfsUtS27FkP697E4DDhgrgoc0Q==
      }

  /which/1.3.1:
    resolution:
      {
        integrity: sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==
      }
    hasBin: true
    dependencies:
      isexe: 2.0.0

  /which/2.0.2:
    resolution:
      {
        integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==
      }
    engines: { node: '>= 8' }
    hasBin: true
    dependencies:
      isexe: 2.0.0

  /wide-align/1.1.5:
    resolution:
      {
        integrity: sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==
      }
    dependencies:
      string-width: 1.0.2

  /widest-line/3.1.0:
    resolution:
      {
        integrity: sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==
      }
    engines: { node: '>=8' }
    dependencies:
      string-width: 4.2.3
    dev: true

  /wildcard/2.0.0:
    resolution:
      {
        integrity: sha512-JcKqAHLPxcdb9KM49dufGXn2x3ssnfjbcaQdLlfZsL9rH9wgDQjUtDxbo8NE0F6SFvydeu1VhZe7hZuHsB2/pw==
      }
    dev: false

  /word-wrap/1.2.3:
    resolution:
      {
        integrity: sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==
      }
    engines: { node: '>=0.10.0' }

  /wordwrap/1.0.0:
    resolution:
      {
        integrity: sha512-gvVzJFlPycKc5dZN4yPkP8w7Dc37BtP1yczEneOb4uq34pXZcvrtRTmWV8W+Ume+XCxKgbjM+nevkyFPMybd4Q==
      }

  /worker-farm/1.7.0:
    resolution:
      {
        integrity: sha512-rvw3QTZc8lAxyVrqcSGVm5yP/IJ2UcB3U0graE3LCFoZ0Yn2x4EoVSqJKdB/T5M+FLcRPjz4TDacRf3OCfNUzw==
      }
    dependencies:
      errno: 0.1.8

  /worker-rpc/0.1.1:
    resolution:
      {
        integrity: sha512-P1WjMrUB3qgJNI9jfmpZ/htmBEjFh//6l/5y8SD9hg1Ef5zTTVVoRjTrTEzPrNBQvmhMxkoTsjOXN10GWU7aCg==
      }
    dependencies:
      microevent.ts: 0.1.1
    dev: true

  /wrap-ansi/5.1.0:
    resolution:
      {
        integrity: sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==
      }
    engines: { node: '>=6' }
    dependencies:
      ansi-styles: 3.2.1
      string-width: 3.1.0
      strip-ansi: 5.2.0
    dev: false

  /wrap-ansi/6.2.0:
    resolution:
      {
        integrity: sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==
      }
    engines: { node: '>=8' }
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1
    dev: true

  /wrap-ansi/7.0.0:
    resolution:
      {
        integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==
      }
    engines: { node: '>=10' }
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1
    dev: true

  /wrappy/1.0.2:
    resolution:
      {
        integrity: sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==
      }

  /write-file-atomic/2.4.3:
    resolution:
      {
        integrity: sha512-GaETH5wwsX+GcnzhPgKcKjJ6M2Cq3/iZp1WyY/X1CSqrW+jVNM9Y7D8EC2sM4ZG/V8wZlSniJnCKWPmBYAucRQ==
      }
    dependencies:
      graceful-fs: 4.2.10
      imurmurhash: 0.1.4
      signal-exit: 3.0.7
    dev: true

  /write-file-atomic/3.0.3:
    resolution:
      {
        integrity: sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==
      }
    dependencies:
      imurmurhash: 0.1.4
      is-typedarray: 1.0.0
      signal-exit: 3.0.7
      typedarray-to-buffer: 3.1.5

  /write-yaml-file/4.2.0:
    resolution:
      {
        integrity: sha512-LwyucHy0uhWqbrOkh9cBluZBeNVxzHjDaE9mwepZG3n3ZlbM4v3ndrFw51zW/NXYFFqP+QWZ72ihtLWTh05e4Q==
      }
    engines: { node: '>=10.13' }
    dependencies:
      js-yaml: 4.1.0
      write-file-atomic: 3.0.3
    dev: false

  /ws/6.2.2:
    resolution:
      {
        integrity: sha512-zmhltoSR8u1cnDsD43TX59mzoMZsLKqUweyYBAIvTngR3shc0W6aOZylZmq/7hqyVxPdi+5Ud2QInblgyE72fw==
      }
    dependencies:
      async-limiter: 1.0.1
    dev: true

  /ws/7.5.8:
    resolution:
      {
        integrity: sha512-ri1Id1WinAX5Jqn9HejiGb8crfRio0Qgu8+MtL36rlTA6RLsMdWt1Az/19A2Qij6uSHUMphEFaTKa4WG+UNHNw==
      }
    engines: { node: '>=8.3.0' }
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: ^5.0.2
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true

  /ws/8.8.0:
    resolution:
      {
        integrity: sha512-JDAgSYQ1ksuwqfChJusw1LSJ8BizJ2e/vVu5Lxjq3YvNJNlROv1ui4i+c/kUUrPheBvQl4c5UbERhTwKa6QBJQ==
      }
    engines: { node: '>=10.0.0' }
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: ^5.0.2
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true

  /xdg-basedir/4.0.0:
    resolution:
      {
        integrity: sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q==
      }
    engines: { node: '>=8' }
    dev: true

  /xml-name-validator/3.0.0:
    resolution:
      {
        integrity: sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==
      }

  /xml2js/0.4.19:
    resolution:
      {
        integrity: sha512-esZnJZJOiJR9wWKMyuvSE1y6Dq5LCuJanqhxslH2bxM6duahNZ+HMpCLhBQGZkbX6xRf8x1Y2eJlgt2q3qo49Q==
      }
    dependencies:
      sax: 1.2.1
      xmlbuilder: 9.0.7
    dev: true

  /xml2js/0.4.23:
    resolution:
      {
        integrity: sha512-ySPiMjM0+pLDftHgXY4By0uswI3SPKLDw/i3UXbnO8M/p28zqexCUoPmQFrYD+/1BzhGJSs2i1ERWKJAtiLrug==
      }
    engines: { node: '>=4.0.0' }
    dependencies:
      sax: 1.2.4
      xmlbuilder: 11.0.1
    dev: false

  /xmlbuilder/11.0.1:
    resolution:
      {
        integrity: sha512-fDlsI/kFEx7gLvbecc0/ohLG50fugQp8ryHzMTuW9vSa1GJ0XYWKnhsUx7oie3G98+r56aTQIUB4kht42R3JvA==
      }
    engines: { node: '>=4.0' }
    dev: false

  /xmlbuilder/9.0.7:
    resolution:
      {
        integrity: sha512-7YXTQc3P2l9+0rjaUbLwMKRhtmwg1M1eDf6nag7urC7pIPYLD9W/jmzQ4ptRSUbodw5S0jfoGTflLemQibSpeQ==
      }
    engines: { node: '>=4.0' }
    dev: true

  /xmlchars/2.2.0:
    resolution:
      {
        integrity: sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==
      }

  /xmldoc/1.1.2:
    resolution:
      {
        integrity: sha512-ruPC/fyPNck2BD1dpz0AZZyrEwMOrWTO5lDdIXS91rs3wtm4j+T8Rp2o+zoOYkkAxJTZRPOSnOGei1egoRmKMQ==
      }
    dependencies:
      sax: 1.2.4
    dev: false

  /xregexp/2.0.0:
    resolution: { integrity: sha1-UqY+VsoLhKfzpfPWGHLxJq16WUM= }
    dev: true

  /xstate/4.26.1:
    resolution:
      {
        integrity: sha512-JLofAEnN26l/1vbODgsDa+Phqa61PwDlxWu8+2pK+YbXf+y9pQSDLRvcYH2H1kkeUBA5fGp+xFL/zfE8jNMw4g==
      }
    dev: true

  /xtend/4.0.2:
    resolution:
      {
        integrity: sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==
      }
    engines: { node: '>=0.4' }

  /y18n/4.0.3:
    resolution:
      {
        integrity: sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ==
      }

  /y18n/5.0.8:
    resolution:
      {
        integrity: sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==
      }
    engines: { node: '>=10' }
    dev: true

  /yallist/3.1.1:
    resolution:
      {
        integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==
      }

  /yallist/4.0.0:
    resolution:
      {
        integrity: sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==
      }

  /yaml/1.10.2:
    resolution:
      {
        integrity: sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==
      }
    engines: { node: '>= 6' }

  /yargs-parser/13.1.2:
    resolution:
      {
        integrity: sha512-3lbsNRf/j+A4QuSZfDRA7HRSfWrzO0YjqTJd5kjAq37Zep1CEgaYmrH9Q3GwPiB9cHyd1Y1UwggGhJGoxipbzg==
      }
    dependencies:
      camelcase: 5.3.1
      decamelize: 1.2.0
    dev: false

  /yargs-parser/18.1.3:
    resolution:
      {
        integrity: sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==
      }
    engines: { node: '>=6' }
    dependencies:
      camelcase: 5.3.1
      decamelize: 1.2.0
    dev: true

  /yargs-parser/20.2.9:
    resolution:
      {
        integrity: sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==
      }
    engines: { node: '>=10' }

  /yargs/13.3.2:
    resolution:
      {
        integrity: sha512-AX3Zw5iPruN5ie6xGRIDgqkT+ZhnRlZMLMHAs8tg7nRruy2Nb+i5o9bwghAogtM08q1dpr2LVoS8KSTMYpWXUw==
      }
    dependencies:
      cliui: 5.0.0
      find-up: 3.0.0
      get-caller-file: 2.0.5
      require-directory: 2.1.1
      require-main-filename: 2.0.0
      set-blocking: 2.0.0
      string-width: 3.1.0
      which-module: 2.0.0
      y18n: 4.0.3
      yargs-parser: 13.1.2
    dev: false

  /yargs/15.4.1:
    resolution:
      {
        integrity: sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==
      }
    engines: { node: '>=8' }
    dependencies:
      cliui: 6.0.0
      decamelize: 1.2.0
      find-up: 4.1.0
      get-caller-file: 2.0.5
      require-directory: 2.1.1
      require-main-filename: 2.0.0
      set-blocking: 2.0.0
      string-width: 4.2.3
      which-module: 2.0.0
      y18n: 4.0.3
      yargs-parser: 18.1.3
    dev: true

  /yargs/16.2.0:
    resolution:
      {
        integrity: sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==
      }
    engines: { node: '>=10' }
    dependencies:
      cliui: 7.0.4
      escalade: 3.1.1
      get-caller-file: 2.0.5
      require-directory: 2.1.1
      string-width: 4.2.3
      y18n: 5.0.8
      yargs-parser: 20.2.9
    dev: true

  /yauzl/2.10.0:
    resolution:
      {
        integrity: sha512-p4a9I6X6nu6IhoGmBqAcbJy1mlC4j27vEPZX9F4L4/vZT3Lyq1VkFHw/V/PUcB9Buo+DG3iHkT0x3Qya58zc3g==
      }
    dependencies:
      buffer-crc32: 0.2.13
      fd-slicer: 1.1.0
    dev: true

  /yn/3.1.1:
    resolution:
      {
        integrity: sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==
      }
    engines: { node: '>=6' }

  /yocto-queue/0.1.0:
    resolution:
      {
        integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==
      }
    engines: { node: '>=10' }
    dev: true

  /z-schema/5.0.3:
    resolution:
      {
        integrity: sha512-sGvEcBOTNum68x9jCpCVGPFJ6mWnkD0YxOcddDlJHRx3tKdB2q8pCHExMVZo/AV/6geuVJXG7hljDaWG8+5GDw==
      }
    engines: { node: '>=8.0.0' }
    hasBin: true
    dependencies:
      lodash.get: 4.4.2
      lodash.isequal: 4.5.0
      validator: 13.7.0
    optionalDependencies:
      commander: 2.20.3

  /zip-local/0.3.5:
    resolution:
      {
        integrity: sha512-GRV3D5TJY+/PqyeRm5CYBs7xVrKTKzljBoEXvocZu0HJ7tPEcgpSOYa2zFIsCZWgKWMuc4U3yMFgFkERGFIB9w==
      }
    dependencies:
      async: 1.5.2
      graceful-fs: 4.2.10
      jszip: 2.6.1
      q: 1.5.1
    dev: true

  /zip-stream/4.1.0:
    resolution:
      {
        integrity: sha512-zshzwQW7gG7hjpBlgeQP9RuyPGNxvJdzR8SUM3QhxCnLjWN2E7j3dOvpeDcQoETfHx0urRS7EtmVToql7YpU4A==
      }
    engines: { node: '>= 10' }
    dependencies:
      archiver-utils: 2.1.0
      compress-commons: 4.1.1
      readable-stream: 3.6.0
    dev: true

  /zod/3.17.3:
    resolution:
      {
        integrity: sha512-4oKP5zvG6GGbMlqBkI5FESOAweldEhSOZ6LI6cG+JzUT7ofj1ZOC0PJudpQOpT1iqOFpYYtX5Pw0+o403y4bcg==
      }
    dev: true

  /zwitch/1.0.5:
    resolution:
      {
        integrity: sha512-V50KMwwzqJV0NpZIZFwfOD5/lyny3WlSzRiXgA0G7VUnRlqttta1L6UQIHzd6EuBY/cHGfwTIck7w1yH6Q5zUw==
      }
    dev: true
`;
