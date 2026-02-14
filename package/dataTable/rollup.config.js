import vue from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    { file: "dist/index.esm.js", format: "es", sourcemap: true },
    { file: "dist/index.umd.js", format: "umd", name: "DummyDataTable", sourcemap: true }
  ],
  plugins: [
    resolve({ browser: true, preferBuiltins: false }),
    commonjs(),
    vue({ css: false, compileTemplate: true }),
    postcss({ extract: "dist/style.css" }),
    terser()
  ]
};
