import { defineConfig } from "vite";
import { babel } from "@rollup/plugin-babel";
import { resolve } from "path";
const root = resolve(__dirname, "src");
import { createHtmlPlugin } from "vite-plugin-html";
export default defineConfig({
    esbuild: { drop: ["console", "debugger"] },
    root,
    plugins: [
        babel({
            exclude: [/node_modules/],
            babelHelpers: "bundled",
            configFile: resolve(__dirname, "babel.config.js"),
            extensions: [".ts", ".js"],
        }),
        // createHtmlPlugin({
        //     minify: {
        //         removeAttributeQuotes: false,
        //         collapseWhitespace: true,
        //     },
        // }),
    ].flat(),
    build: {
        minify: "terser",
        terserOptions: {
            compress: { drop_console: true, drop_debugger: true },
        },
        target: "es2015",
        rollupOptions: {
            plugins: [
                createHtmlPlugin({
                    minify: {
                        removeAttributeQuotes: false,
                        collapseWhitespace: true,
                    },
                }),
            ].flat(),

            input: [
                resolve(root, "index.html"),
                resolve(root, "hieroglyphy-encoder.html"),
                resolve(root, "jsfuck-encoder.html"),
                // resolve(root, "JSfuck-Decoder--and-hieroglyphy--decoder.html"),
            ],
        },
    },
});
