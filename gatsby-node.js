const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const enableBundleAnalyzer = false;

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions
}) => {
  if (stage === 'build-javascript' && enableBundleAnalyzer) {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin()
      ]
    });
  }
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        // Firebase module needs browser globals
        rules: [
          {
            test: /firebase/, 
            use: loaders.null(),
          }
        ]
      }
    });
  }
};

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     const App = path.resolve(`src/components/CubikApp.js`);
//     resolve(
//       createPage({
//         path: '/app',
//         component: App,
//         context: {},
//       })
//     )
//   })
// }