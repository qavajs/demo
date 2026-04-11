---
name: create-test
description: Create a new Cucumber BDD scenario in features/qavajs.feature for the SauceLabs demo app. Use when the user asks to "create a test", "add a scenario", "write a test case", or describes a new flow to test.
argument-hint: <test case description>
allowed-tools: [Read, Edit, Glob, Grep, Bash]
---

# Create Test

Create a new Cucumber BDD scenario for the SauceLabs demo app.

## User's request

$ARGUMENTS

## Instructions

1. Read `features/qavajs.feature` to understand existing scenarios and style.
2. Read `page_object/index.ts` to know available locators and template locators.
3. Read `memory/index.ts` to know available memory constants (e.g. `$app`).
4. Draft the new scenario:
   - Use the existing Gherkin style: `Given/When/And/Then` with `@qavajs/playwright` built-in step phrases.
   - Reference page object elements by their **PascalCase property names** (space-separated, e.g. `Username Input`, `Cart Badge`).
   - For template locators use the syntax `Element Name (param)`, e.g. `Product (Sauce Labs Backpack)`.
   - For child locators use ` > `, e.g. `Product (Sauce Labs Backpack) > Add To Cart`.
   - Use `$app` for the base URL from memory.
   - Common step patterns:
     - `I open '$app' url`
     - `I type 'value' to 'Element Name'`
     - `I click 'Element Name'`
     - `I expect text of 'Element Name' to equal 'value'`
     - `I expect 'Element Name' to be visible`
     - `I expect 'Element Name' not to be visible`
     - `I expect number of elements in 'Collection Name' collection to equal 'N'`
5. Add a plain-English comment block above the scenario describing the test case (preconditions, steps, expected results) — matching the style of existing comment blocks.
6. Append the new scenario to corresponding feature file.
7. Run the new scenario to verify it passes:
   ```bash
   npx playwright test --project=agent --grep "<exact scenario name>"
   ```
   - If it passes: report the result to the user.
   - If it fails: read the error output, fix the scenario (or page object if a locator is wrong), and re-run until it passes.

## Constraints

- Do NOT add new page object locators unless the user explicitly asks.
- Do NOT create new feature files — add to the existing one.
- Keep scenarios self-contained (each scenario sets up its own state from login).
