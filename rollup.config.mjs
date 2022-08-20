import { defineConfig } from "rollup";
// import { resolve, dirname } from "path";
// import { fileURLToPath } from "url";
// var __dirname = dirname(fileURLToPath(import.meta.url));
import commonjs from "@rollup/plugin-commonjs";
import noderesolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-ts";
import { babel } from "@rollup/plugin-babel";
export default defineConfig({
    plugins: [
        noderesolve(),
        commonjs(),
        ts({ transpiler: "typescript" }),
        babel({
            babelHelpers: "bundled",
            // configFile: resolve(__dirname, "babel.config.js"),
        }),
        terser({
            compress: { drop_console: true, drop_debugger: true },
            output: { beautify: true, comments: false },
        }),
    ],
    input: "./src/index.ts",
    output: [
        { format: "esm", file: "dist/index.js" },
        { format: "cjs", file: "dist/index.cjs" },
    ],
});
