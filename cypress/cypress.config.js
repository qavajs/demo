const { defineConfig } = require('cypress');
const cucumber = require('@qavajs/cypress-runner-adapter/adapter');
module.exports = defineConfig({
  e2e: {
    specPattern: 'features/**/*.feature', //path to features
    supportFile: 'support.js', //path to main support file
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber)
    },
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"]
  },
});
