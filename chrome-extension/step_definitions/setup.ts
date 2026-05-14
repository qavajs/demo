import { QavajsPlaywrightWorld, setWorldConstructor } from '@qavajs/playwright';
import { test as baseTest, chromium, type BrowserContext, type Page, type APIRequestContext } from '@playwright/test';
import path from 'path';

const pathToExtension = path.join(__dirname, '..', 'extension');

// Override the context fixture to use a persistent browser context so the
// extension's background service worker is accessible via context.serviceWorkers().
// Regular (non-persistent) Playwright contexts don't receive service worker events
// from extensions because extension workers register in the default browser context.
const test = baseTest.extend<{ context: BrowserContext }>({
  context: async ({}, use) => {
    const context = await chromium.launchPersistentContext('', {
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    await use(context);
    await context.close();
  },
});

class ChromeExtensionWorld extends QavajsPlaywrightWorld {
  test = test;

  // Override init to exclude 'browser' from the destructured fixtures.
  // Playwright discovers required fixtures by parsing toString() of this function,
  // so removing 'browser' here prevents a second browser from being launched.
  init = ({ context, page, request }: { context: BrowserContext; page: Page; request: APIRequestContext }) => {
    this.context = context;
    this.page = page;
    this.request = request;
  };
}

setWorldConstructor(ChromeExtensionWorld);
