import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import noderesolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-ts";
export default defineConfig({
    plugins: [
        noderesolve(),
        commonjs(),
        ts({}),
        terser({
            compress: { drop_console: true, drop_debugger: true },
            output: { beautify: true, comments: false },
        }),
    ],
    input: "src/index.ts",
    output: { format: "esm", file: "dist/index.js" },
});
