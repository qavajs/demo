# qavajs demo repository

Demo repository showcasing [QavaJS](https://qavajs.github.io/) framework capabilities across different platforms, tools, and testing scenarios. Each subdirectory is a self-contained runnable example.

## Running any demo

```bash
cd <demo-folder>
npm install
npm test
```

Some demos have additional profiles (headless, cloud, etc.) — see the folder's README or `package.json` scripts for details.

## Web

| Demo | Tool | Description |
|---|---|---|
| [web-playwright](web-playwright) | Playwright | BDD web testing with Playwright — TodoMVC, Wikipedia, Sauce Demo |
| [web-playwright-esm](web-playwright-esm) | Playwright | Same as above using ESM modules |
| [web-wdio](web-wdio) | WebdriverIO | BDD web testing with WebdriverIO (CommonJS) |
| [web-wdio-esm](web-wdio-esm) | WebdriverIO | BDD web testing with WebdriverIO (ESM) |
| [web-wdio-typescript](web-wdio-typescript) | WebdriverIO | BDD web testing with WebdriverIO (TypeScript) |

## Mobile

| Demo | Tool | Description |
|---|---|---|
| [mobile-native](mobile-native) | WebdriverIO + Appium | Native mobile app testing |
| [mobile-web](mobile-web) | WebdriverIO | Mobile web testing |
| [mobitru](mobitru) | WebdriverIO | Cloud mobile testing via Mobitru |

## Desktop

| Demo | Tool | Description |
|---|---|---|
| [electron-playwright](electron-playwright) | Playwright | Electron desktop app testing |

## API

| Demo | Tool | Description |
|---|---|---|
| [web-api](web-api) | — | REST API testing |

## Accessibility

| Demo | Tool | Description |
|---|---|---|
| [accessibility-axe](accessibility-axe) | axe | Accessibility testing with axe-core |
| [accessibility-ea](accessibility-ea) | WebdriverIO | Accessibility testing with EA steps |

## Cloud

| Demo | Tool | Description |
|---|---|---|
| [web-wdio-browser-stack](web-wdio-browser-stack) | WebdriverIO | Cross-browser testing via BrowserStack |
| [playwright-runner](playwright-runner) | Playwright | Playwright test runner integration |
| [playwright-wdio-runner](playwright-wdio-runner) | Playwright + WebdriverIO | Playwright with WdIO runner and Appium |

## Advanced / Framework features

| Demo | Tool | Description |
|---|---|---|
| [fixture](fixture) | Playwright | Fixtures and data persistence patterns |
| [memory](memory) | WebdriverIO | Memory and shared state management |
| [execute-step](execute-step) | WebdriverIO | Dynamic step execution |
| [execute-test](execute-test) | Playwright | Test execution control and profiles |
| [template](template) | Playwright | Validation and environment configuration |
| [sap-ui5](sap-ui5) | Playwright | SAP UI5 application testing |

## License

MIT
