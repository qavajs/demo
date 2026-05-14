import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: 1,
  reporter: [
    ['html', { open: 'never', outputFolder: 'report' }],
    ['junit', { outputFile: 'report/report.xml' }],
  ],
  use: {
    trace: 'on',
  },
  projects: [
    {
      name: 'chrome-extension',
      testMatch: 'cucumber.config.ts',
    },
  ],
});
