import type { Reporter, TestCase, TestResult, TestStep } from '@playwright/test/reporter';

const STATUS_ICON: Record<string, string> = {
    passed: '✓',
    failed: '✗',
    skipped: '-',
    timedOut: '⏱',
};

const STATUS_COLOR: Record<string, string> = {
    passed: '\x1b[32m',
    failed: '\x1b[31m',
    skipped: '\x1b[33m',
    timedOut: '\x1b[31m',
};

const RESET = '\x1b[0m';
const DIM = '\x1b[2m';
const BOLD = '\x1b[1m';

function stepStatus(step: TestStep): 'passed' | 'failed' | 'skipped' {
    if (step.error) return 'failed';
    return 'passed';
}

function formatDuration(ms: number): string {
    return ms >= 1000 ? `${(ms / 1000).toFixed(2)}s` : `${ms}ms`;
}

function printStep(step: TestStep, indent: number): void {
    const status = stepStatus(step);
    const icon = STATUS_ICON[status] ?? '?';
    const color = STATUS_COLOR[status] ?? '';
    const prefix = '  '.repeat(indent);
    const duration = DIM + `(${formatDuration(step.duration)})` + RESET;
    console.log(`${prefix}${color}${icon}${RESET} ${step.title} ${duration}`);

    if (step.error?.message) {
        const errLines = step.error.message.split('\n').slice(0, 3);
        for (const line of errLines) {
            console.log(`${prefix}  ${'\x1b[31m'}${line}${RESET}`);
        }
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

class ConsoleStepsReporter implements Reporter {
    onTestEnd(test: TestCase, result: TestResult): void {
        const scenarioStatus = result.status;
        const scenarioColor = STATUS_COLOR[scenarioStatus] ?? '';
        const scenarioIcon = STATUS_ICON[scenarioStatus] ?? '?';

        console.log('');
        console.log(
            `${scenarioColor}${BOLD}${scenarioIcon} ${test.title}${RESET} ` +
            `${DIM}(${formatDuration(result.duration)})${RESET}`
        );

        const scenarioSteps = collectScenarioSteps(result.steps);
        for (const step of scenarioSteps) {
            printStep(step, 1);
        }
    }
}

export default ConsoleStepsReporter;
