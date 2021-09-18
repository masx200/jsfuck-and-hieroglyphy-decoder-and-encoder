import { defineConfig } from "vite";
import babel from "@rollup/plugin-babel";
import { resolve } from "path";
const root = resolve(__dirname, "src");
import { minifyHtml } from "vite-plugin-html";
export default defineConfig({
    root,
    plugins: [
        minifyHtml({ removeAttributeQuotes: false }),
        babel({
            babelHelpers: "bundled",
            configFile: resolve(__dirname, "babel.config.js"),
        }),
    ],
    build: {
        terserOptions: {
            compress: { drop_console: true, drop_debugger: true },
        },
        target: "es2015",
        rollupOptions: {
            input: [
                resolve(root, "index.html"),
                resolve(root, "hieroglyphy-encoder.html"),
                resolve(
                    root,
                    "JSFuck---Write-any-JavaScript-with-6-Characters_-[]()!+.html"
                ),
                // resolve(root, "JSfuck-Decoder--and-hieroglyphy--decoder.html"),
            ],
        },
    },
});
