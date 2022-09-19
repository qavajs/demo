import { Locator } from 'playwright';

export const conditionValidations = {
    PRESENT: 'present',
    CLICKABLE: 'clickable',
    VISIBLE: 'visible',
    INVISIBLE: 'invisible',
    ENABLED: 'enabled',
    DISABLED: 'disabled'
}

const notClause = '(not )?';
const toBeClause = 'to (?:be )?';
const validationClause = `(${Object.values(conditionValidations).join('|')})`;

export const conditionWaitExtractRegexp = new RegExp(`^${notClause}${toBeClause}${validationClause}$`);
export const conditionWaitRegexp = new RegExp(`(${notClause}${toBeClause}${validationClause})`);

const present = (reverse: boolean) => reverse ? 'detached' : 'attached';
const visible = (reverse: boolean) => reverse ? 'hidden' : 'visible';

const waits = {
    [conditionValidations.PRESENT]: (
        element: Locator,
        reverse: boolean,
        timeout: number,
        timeoutMsg: string
    ) => element.waitFor({state: present(reverse), timeout}),
    // [conditionValidations.CLICKABLE]: (
    //     element: Locator,
    //     reverse: boolean,
    //     timeout: number,
    //     timeoutMsg: string
    // ) => element.waitForClickable({reverse, timeout, timeoutMsg}),
    [conditionValidations.VISIBLE]: (
        element: Locator,
        reverse: boolean,
        timeout: number,
        timeoutMsg: string
    ) => element.waitFor({state: visible(reverse), timeout}),
    // [conditionValidations.ENABLED]: (
    //     element: Locator,
    //     reverse: boolean,
    //     timeout: number,
    //     timeoutMsg: string
    // ) => element.waitForEnabled({reverse, timeout, timeoutMsg}),
    // [conditionValidations.DISABLED]: (
    //     element: Locator,
    //     reverse: boolean,
    //     timeout: number,
    //     timeoutMsg: string
    // ) => element.waitForEnabled({reverse: !reverse, timeout, timeoutMsg})
}
/**
 * Wait for condition
 * @param {WebdriverIOAsync.Element} element - protractor element
 * @param {string} validationType - validation to perform
 * @param {number} [timeout] - timeout to wait
 * @param {boolean} [reverse] - negate flag
 * @return {Promise<void>}
 */
export async function conditionWait(
    element: Locator,
    validationType: string,
    timeout: number = 10000,
    reverse: boolean = false
) {
    const timeoutMsg: string = `Element is${reverse ? '' : ' not'} ${validationType}`;
    const waitFn = waits[validationType];
    await waitFn(element, reverse, timeout, timeoutMsg);
}
