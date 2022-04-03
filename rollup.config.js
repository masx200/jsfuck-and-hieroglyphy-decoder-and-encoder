import { defineConfig } from "rollup";
import { resolve } from "path";
import commonjs from "@rollup/plugin-commonjs";
import noderesolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-ts";
import babel from "@rollup/plugin-babel";
export default defineConfig({
    plugins: [
        noderesolve(),
        commonjs(),
        ts({ transpiler: "typescript" }),
        babel({
            babelHelpers: "bundled",
            configFile: resolve(__dirname, "babel.config.js"),
        }),
        terser({
            compress: { drop_console: true, drop_debugger: true },
            output: { beautify: true, comments: false },
        }),
    ],
    input: "src/index.ts",
    output: [
        { format: "esm", file: "dist/index.js" },
        { format: "esm", file: "dist/index.cjs" },
    ],
});
