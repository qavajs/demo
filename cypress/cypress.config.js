import { defineConfig } from 'cypress';
import cucumber from '@qavajs/cypress-runner-adapter/adapter';

module.exports = defineConfig({
  e2e: {
    specPattern: 'features/**/*.feature', //path to features
    supportFile: 'support.ts', //path to main support file
    video: true,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber);
      return config;
    }
  },
});
