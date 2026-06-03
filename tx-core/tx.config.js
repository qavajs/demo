module.exports = {
  testFiles: ['./specs/**/*.spec.ts'],
  browser: 'chrome',
  headless: false,
  viewport: { width: 1600, height: 900 },
  actionTimeout: 10000,
  expectTimeout: 8000,
  testTimeout: 30000,
  profiles: {
    ci: {
      headless: true,
      retries: 1,
      testMode: true,
    },
    debug: {
      headless: false,
      actionTimeout: 30000,
      testTimeout: 120000,
    },
  },
};
