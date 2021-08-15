module.exports = function (api) {
    return {
        presets: ["babel-preset-react-app"],
        plugins: [api.env("production") && "babel-plugin-clean-code"].filter(
            Boolean
        ),
    };
};
