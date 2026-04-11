import type { Reporter, TestCase, TestResult, TestStep } from '@playwright/test/reporter';

function stepStatus(step: TestStep): 'passed' | 'failed' | 'skipped' {
	if (step.error) return 'failed';
	return 'passed';
}

function formatDuration(ms: number): string {
	return ms >= 1000 ? `${(ms / 1000).toFixed(2)}s` : `${ms}ms`;
}

function printStep(step: TestStep, indent: number): void {
	const status = stepStatus(step);
	const prefix = '  '.repeat(indent);
	console.log(`${prefix}[${status}] ${step.title} (${formatDuration(step.duration)})`);

	if (step.error?.message) {
		console.log(`${prefix}  ${step.error.message}`);
	}
}

/**
 * Collect only the Cucumber/Gherkin-level steps from the result.
 * These are direct test.step children that represent hooks and pickle steps.
 * Playwright-internal fixture and hook wrappers (category !== 'test.step') are excluded.
 */
function collectScenarioSteps(steps: TestStep[]): TestStep[] {
	return steps.filter(s => s.category === 'test.step');
}

function printConsoleLogs(result: TestResult): void {
	const logs: string[] = result.stdout
		.map(entry => entry.toString('utf8'))
		.filter(text => text);

	if (logs.length > 0) {
		console.log('  --- console output ---');
		console.log(logs.join(''));
	}
}

class ConsoleStepsReporter implements Reporter {
	onTestEnd(test: TestCase, result: TestResult): void {
		console.log('');
		console.log(`[${result.status}] ${test.title} (${formatDuration(result.duration)})`);

		const scenarioSteps = collectScenarioSteps(result.steps);
		for (const step of scenarioSteps) {
			printStep(step, 1);
		}

		printConsoleLogs(result);
	}
}

export default ConsoleStepsReporter;
