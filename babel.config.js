module.exports = function (api) {
    return {
        presets: [],
        plugins: [api.env("production") && "babel-plugin-clean-code"].filter(
            Boolean
        ),
    };
};
