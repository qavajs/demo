export const valueValidations = {
    EQUAL: 'equal',
    CONTAIN: 'contain',
    ABOVE: 'above',
    BELOW: 'below'
}

const notClause = '(not )?';
const toBeClause = 'to (?:be )?';
const validationClause = `(${Object.values(valueValidations).join('|')})`;

export const valueWaitExtractRegexp = new RegExp(`^${notClause}${toBeClause}${validationClause}$`);
export const valueWaitRegexp = new RegExp(`(${notClause}${toBeClause}${validationClause})`);

const waits = {
    [valueValidations.EQUAL]: async (valueFn: Function, expected: any) => (await valueFn()) == expected,
    [valueValidations.CONTAIN]: async (valueFn: Function, expected: any) => (await valueFn()).includes(expected),
    [valueValidations.ABOVE]: async (valueFn: Function, expected: any) => (await valueFn()) > expected,
    [valueValidations.BELOW]: async (valueFn: Function, expected: any) => (await valueFn()) < expected
}

/**
 * Wait for condition
 * @param {any} valueFn - function to return value
 * @param {any} expected - expected value
 * @param {string} validationType - validation to perform
 * @param {number} [timeout] - timeout to wait
 * @param {boolean} [reverse] - negate flag
 * @return {Promise<void>}
 */
export async function valueWait(
    valueFn: Function,
    expected: any,
    validationType: string,
    timeout: number = 10000,
    reverse: boolean
) {
    const timeoutMsg: string = `Value is${reverse ? '' : ' not'} ${validationType} ${expected}`;
    const options = { timeout, timeoutMsg };
    const waitFn = waits[validationType];
    await waitUntil(async () => reverse !== await waitFn(valueFn, expected), options);
}

const TICK = 200;
function waitUntil(fn: Function, options: { timeout: number, timeoutMsg?: string }) {
    options.timeout = options.timeout ?? 5000;
    return new Promise((resolve, reject) => {
        let time: number = 0;
        const interval = setInterval(async () => {
            if (time > options.timeout) reject(new Error('timeout error'))
            if (await fn()) {
                clearInterval(interval);
                resolve(true);
            }
            time += TICK;
        }, TICK)
    })
}
