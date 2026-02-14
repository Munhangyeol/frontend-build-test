import vue from "rollup-plugin-vue";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    { file: "dist/index.esm.js", format: "es", sourcemap: true },
    { file: "dist/index.umd.js", format: "umd", name: "DummyQuasarLib", sourcemap: true }
  ],
  // ✅ 테스트용으로 "vue 포함" 상태를 일부러 만들고 싶으면 external을 비워둠
  // ✅ 나중에 개선(충돌 방지)하려면 ['vue']를 external로 빼면 됨
  // external: ["vue"],
  plugins: [
    resolve({ browser: true, preferBuiltins: false }),
    commonjs(),
    vue({ css: false, compileTemplate: true }),
    postcss({ extract: "dist/style.css" }),
    terser()
  ]
};
