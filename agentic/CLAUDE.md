# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run test       # Run all Playwright/Cucumber tests
npm run debug      # Run tests in Playwright UI mode (interactive debugging)
```

To run a specific feature or scenario, pass Playwright args directly:
```bash
npx playwright test --project=base
```

## Architecture

This is a **Cucumber BDD e2e test suite** for the SauceLabs demo e-commerce app (`https://www.saucedemo.com/`), built on `@qavajs/playwright`.

**Data flow:**
1. Gherkin scenarios in `features/*.feature` describe test steps in plain English
2. `@qavajs/playwright` resolves those steps to Playwright actions — no custom step definitions needed for standard interactions
3. `page_object/index.ts` exports an `App` class with all locators; template locators like `` Product(text) `` generate dynamic selectors
4. `memory/index.ts` exports a `Memory` class (extends `@qavajs/playwright` memory) holding test constants (app URL, credentials, etc.)
5. `cucumber.config.ts` wires the framework together: registers the `Memory` instance and `App` page object, and sets the features glob
6. `playwright.config.ts` invokes `cucumber.config.ts` as the `testMatch` entries, configures projects, reporters, and trace

**Playwright projects:**
- `base` — standard feature tests via `cucumber.config.ts`

**Reporting:** HTML report + JUnit XML written to `report/`. Tracing is always on (`trace: 'on'`), so trace zips land alongside test results.

**TypeScript:** strict mode, `module: node16`. The `lib/` directory is the compiler output dir but the tests run directly from source via `ts-node`/Playwright's transformer.