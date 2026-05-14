import { Before } from '@cucumber/cucumber';
import type { Page } from '@playwright/test';

interface World {
  page: Page;
  memory: { setValue(key: string, value: unknown): void };
}

// Resolves the loaded extension's ID from its background service worker
// and stores the popup URL in memory for use in feature files as $extensionPopupUrl.
Before(async function (this: World) {
  const context = this.page.context();
  let serviceWorker = context.serviceWorkers()[0];
  if (!serviceWorker) {
    serviceWorker = await context.waitForEvent('serviceworker', { timeout: 10_000 });
  }
  const extensionId = serviceWorker.url().split('/')[2];
  this.memory.setValue('extensionPopupUrl', `chrome-extension://${extensionId}/popup.html`);
});
