---
name: run-test
description: Run Playwright/Cucumber tests for the SauceLabs demo app. Use when the user asks to "run tests", "run a test", "execute tests", "run a scenario", or wants to trigger the test suite.
argument-hint: scenario name or grep pattern
allowed-tools: [Bash]
---

# Run Test

Run Playwright/Cucumber e2e tests for the SauceLabs demo app.

## User's request

$ARGUMENTS

## Instructions

Determine what to run based on the arguments:

### No arguments — run all tests
```bash
npm run test
```

### Specific scenario or keyword — grep by name
```bash
npx playwright test --project=base --grep "<pattern>"
```
where `<pattern>` is the scenario name or keyword provided by the user.

### Debug / interactive UI mode
If the user says "debug", "UI mode", or "interactive":
```bash
npm run debug
```

## After running

Report the results concisely:
- How many scenarios passed / failed / skipped
- For any failures: scenario name and the first meaningful error line
- Mention that the HTML report was written to `report/` and traces to `test-results/`

For each **failed** scenario, also print a bug report block in this exact format (ready to paste):

```
**Scenario:** <scenario name>

**Steps:**
<numbered list of all Gherkin steps in the scenario, exactly as written>

**Expected result:**
<what the last step or assertion was expecting — derive from the failing step text>

**Actual result:**
<the actual error or failure message from the test output>
```

Derive the steps list from the feature file source (read `features/*.feature`) so the wording matches the spec, not the log output.
