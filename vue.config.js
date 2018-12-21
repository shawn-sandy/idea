// const Copy = require("copy-webpack-plugin");
// const Favicons = require("favicons-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  outputDir: "dist/assets",
  runtimeCompiler: true,
  // transpileDependencies: ['blacktie-buttons-v2/src/components/*.vue'],
  css: {
    sourceMap: false,
    extract: true
  },

  lintOnSave: process.env.NODE_ENV !== "production",
  configureWebpack: {
    plugins: [
      // new Copy([
      //   {
      //     from: __dirname + "/src/images/",
      //     to: __dirname + "/dist/images"
      //   }
      // ]),
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        // generateStatsFile: true
        generateStatsFile: process.env.NODE_ENV === "production"
      })
      // new Favicons({
      //   logo: "./src/images/blk-logo.png"
      // })
    ]
  },
  pages: {
    index: {
      // entry for the page
      entry: "./src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    // "bootstrap-lite": {
    //   entry: "./src/components/bootstrap-custom/bootstrap.js",
    //   template: "public/_layout.html",
    //   filename: "bootstrap.html",
    //   title: "Bootstrap Custom",
    //   chunks: ["chunk-vendors", "chunk-common", "bootstrap-lite"]
    // }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },
  productionSourceMap: true,
  chainWebpack: config => {
    config.module
      .rule("hbs")
      .test(/\.hbs$/)
      .use("handlebars-loader")
      .loader("handlebars-loader")
      .end();
  }
};
