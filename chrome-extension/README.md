# chrome-extension demo

Demonstrates how to test a **Chrome extension popup** with [qavajs](https://qavajs.github.io/) and Playwright.

The demo ships a minimal Manifest V3 counter extension (`extension/`) and a BDD test suite that opens the popup, interacts with its buttons, and asserts state.

## Key concepts

| Topic | Where |
|---|---|
| Loading the extension into Chromium | `step_definitions/setup.ts` — `launchPersistentContext` with `--load-extension` |
| Resolving the dynamic extension ID | `step_definitions/index.ts` — `Before` hook reads the background service worker URL |
| Navigating to the popup | feature file uses `$extensionPopupUrl` set by the hook |
| Page object for popup elements | `page_object/index.ts` |

## Why `launchPersistentContext`?

Chrome extension service workers register in the browser's **default** context. Playwright Test normally creates isolated per-test contexts that never receive those events, so `context.serviceWorkers()` would always be empty. Overriding the `context` fixture with `chromium.launchPersistentContext` runs the test inside that same default context, making the service worker — and therefore the extension ID — accessible.

## Running

```bash
npm install
npx playwright install chromium
npm test
```

## Project structure

```
chrome-extension/
├── extension/              # The demo MV3 Chrome extension
│   ├── manifest.json
│   ├── background.js       # Service worker (required for MV3)
│   ├── popup.html
│   └── popup.js
├── features/
│   └── popup.feature       # BDD scenarios
├── step_definitions/
│   ├── setup.ts            # Custom world with persistent context fixture
│   └── index.ts            # Before hook — resolves extension ID into memory
├── page_object/
│   └── index.ts
├── memory/
│   └── index.ts
├── cucumber.config.ts
└── playwright.config.ts
```
