module.exports = function (api) {
    return {
        presets: ["@babel/preset-env"],
        plugins: [api.env("production") && "babel-plugin-clean-code"].filter(
            Boolean
        ),
    };
};
