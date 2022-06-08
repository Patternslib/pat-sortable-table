const path = require("path");
const defaults = require("@patternslib/patternslib/jest.config.js");

defaults.setupFilesAfterEnv.push(path.resolve(__dirname, "./src/setupTests.js"));

module.exports = defaults;
