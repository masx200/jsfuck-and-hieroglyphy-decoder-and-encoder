import { defineConfig } from "vite";
import { babel } from "@rollup/plugin-babel";
import { resolve } from "path";
const root = resolve(__dirname, "src");
import { createHtmlPlugin } from "vite-plugin-html";
import { VitePWA } from "vite-plugin-pwa";
import { Plugin } from "rollup";
export default defineConfig({
    esbuild: { drop: ["console", "debugger"] },
    root,
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
            workbox: { globPatterns: ["*/*"] },
        }),
        babel({
            exclude: [/node_modules/],
            babelHelpers: "bundled",
            // configFile: resolve(__dirname, "babel.config.cjs"),
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
            format: { comments: false },
            compress: { drop_console: true, drop_debugger: true },
        },
        target: "es2015",
        rollupOptions: {
            plugins: [
                createHtmlPlugin({
                    minify: {
                        removeComments: true,
                        removeAttributeQuotes: false,
                        collapseWhitespace: true,
                    },
                }),
            ].flat() as Plugin[],

            input: [
                resolve(root, "index.html"),
                resolve(root, "hieroglyphy-encoder.html"),
                resolve(root, "jsfuck-encoder.html"),
                // resolve(root, "JSfuck-Decoder--and-hieroglyphy--decoder.html"),
            ],
        },
    },
});
