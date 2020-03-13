import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  preserveModules: true,
  input: require.resolve("crocks"),
  output: {
    dir: ".",
    format: "esm",
    sourcemap: true
  },
  plugins: [resolve(), commonjs(), terser()]
};
