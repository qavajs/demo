---
name: fix-test
description: Diagnose and fix a failing Playwright/Cucumber test scenario. Use when the user asks to "fix a test", "fix a failing test", "repair a scenario", or a test is broken and needs investigation.
argument-hint: scenario name or grep pattern
allowed-tools: [Bash, Read, Edit, Glob, Grep]
---

# Fix Test

Diagnose and fix a failing Cucumber BDD scenario in the SauceLabs demo app test suite.

## User's request

$ARGUMENTS

## Instructions

### 1. Identify the failing scenario

If the user provided a scenario name or grep pattern, run it to reproduce the failure:
```bash
npx playwright test --project=agent --grep "<pattern>"
```

If no arguments were given, stop and ask to provide the scenario name, grep pattern, or the failure output (copy-paste from the terminal) to identify which test is failing.

Capture the failure output: scenario name, failing step, and error message.

### 2. Read relevant files

- Read `features/qavajs.feature` — find the failing scenario and its Gherkin steps.
- Read `page_object/index.ts` — verify that every element referenced in the scenario exists and uses the correct selector.
- Read `memory/index.ts` — verify that every memory constant (e.g. `$app`, credentials) is correctly defined.

### 3. Diagnose the root cause

Common failure patterns and how to fix them:

| Symptom | Likely cause | Fix |
|---|---|---|
| `Element not found` / timeout | Wrong locator or element name typo | Correct the locator in `page_object/index.ts` or the step text in the feature |
| `Expected … to equal …` assertion failure | Wrong expected value or wrong element targeted | Update the expected value or element reference |
| `Cannot read property of undefined` | Missing memory constant or page object property | Add the missing entry to `memory/index.ts` or `page_object/index.ts` |
| Step not recognised / `Undefined` step | Step text doesn't match any built-in `@qavajs/playwright` phrase | Rewrite the step using a valid built-in phrase |
| Navigation / URL mismatch | `$app` used incorrectly or wrong path | Check `memory/index.ts` for the base URL value |

### 4. Apply the fix

- Edit only the file(s) that contain the root cause.
- Do NOT add new page object locators unless required by the fix.
- Do NOT change passing scenarios.
- Keep the Gherkin style consistent with the rest of the feature file.

### 5. Verify the fix

Re-run the previously failing scenario:
```bash
npx playwright test --project=agent --grep "<scenario name>"
```

### 6. Report

Summarise concisely:
- What was broken (root cause in one sentence)
- What you changed and in which file(s)
- Pass/fail result after the fix
