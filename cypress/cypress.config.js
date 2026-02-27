const { defineConfig } = require('cypress');
const cucumber = require('@qavajs/cypress-runner-adapter/adapter');
const { allureCypress } = require('allure-cypress/reporter');

module.exports = defineConfig({
  e2e: {
    specPattern: 'features/**/*.feature', //path to features
    supportFile: 'support.js', //path to main support file
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber);
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"]
  },
});
