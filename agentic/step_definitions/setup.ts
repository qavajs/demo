import { QavajsPlaywrightWorld, setWorldConstructor } from '@qavajs/playwright';
import { test as baseTest } from '@playwright/test';

type Fixture = {
  agent: void;
};

export const test = baseTest.extend<Fixture>({
  agent: [async ({ context }, use) => {
    await use();
    console.log(`--- page tree ---`);
    for (const page of context.pages()) {
      console.log(`Page: ${page.url()}`);
      console.log(await page.ariaSnapshot());
    }
  }, { auto: true }],
});

class AgentQavajsPlaywrightWorld extends QavajsPlaywrightWorld {
  test = test;
}

setWorldConstructor(AgentQavajsPlaywrightWorld);