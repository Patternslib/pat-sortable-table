const path = require("path");
const defaults = require("@patternslib/dev/jest.config.js");

defaults.setupFilesAfterEnv.push(path.resolve(__dirname, "./src/setup-tests.js"));

module.exports = defaults;
