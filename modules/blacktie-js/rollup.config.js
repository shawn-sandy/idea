import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
export default {
  input: "./src/main.js",
  output: [
    {
      file: "./build/bundle.min.js",
      format: "cjs",
      name: "bundle"
    },
    {
      file: "./build/bundle.umd.min.js",
      format: "umd",
      name: "bundle"
    },
    {
      file: "./build/bundle.iife.min.js",
      format: "iife",
      name: "bundle"
    }
  ],
  plugins: [
    babel({
      exclude: "node_modules/***"
    }),
    resolve(),
    commonjs()
  ]
};
