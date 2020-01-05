module.exports = {
  outputDir: "dist/",
  runtimeCompiler: true,

  css: {
    sourceMap: false,
    extract: true
  },
  filenameHashing: false,
  pages: {
    index: {
      // entry for the page
      entry: "src/index.js",
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
    },
    "axios-service": {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/main.html",
      // output as dist/index.html
      filename: "axios.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Index Page",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "axios-service"]
    }
  },
  chainWebpack: config => {
    // GraphQL Loader
    config.optimization.delete("splitChunks");
  }
};
