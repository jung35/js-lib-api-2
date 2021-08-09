import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import cleaner from "rollup-plugin-cleaner";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

const config = {
  input: "src/index.ts",
  external: [],
  output: { dir: "dist", format: "cjs", exports: "named" },
  plugins: [
    cleaner({ targets: ["./dist/"] }),
    copy({ targets: [{ src: ["package.json", "README.md"], dest: "dist/" }] }),
    typescript(),
    nodeResolve(),
    commonjs({ include: [/node_modules/] }),
    babel({ babelHelpers: "runtime", exclude: /node_modules/ }),
  ],
};

export default config;
