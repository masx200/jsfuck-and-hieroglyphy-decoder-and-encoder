module.exports = function (api) {
    return {
        // presets: [
        //     api.env("production") && [
        //         "@babel/preset-env",
        //         { useBuiltIns: "usage", corejs: 3 },
        //     ],
        // ].filter(Boolean),
        plugins: [api.env("production") && "babel-plugin-clean-code"].filter(
            Boolean
        ),
    };
};
