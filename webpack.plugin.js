const path = require("path");
const DemoPlugin = require("./plugins/demo-plugin.js");

const PATHS = {
  lib: path.join(__dirname, "app", "shake.js"),
  build: path.join(__dirname, "build")
};

module.exports = {
  mode: "development",
  entry: {
    lib: PATHS.lib
  },
  output: {
    path: PATHS.build,
    filename: "[name].js"
  },
  plugins: [new DemoPlugin({ name: "demo" })]
};
