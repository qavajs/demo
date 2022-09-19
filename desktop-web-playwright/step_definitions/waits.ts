import { When } from '@cucumber/cucumber';
import { getValue, getElement, getConditionWait, getValueWait, getLocator } from './transformers';

/**
 * Wait for element condition
 * @param {string} alias - element to wait condition
 * @param {string} wait - wait condition
 * @example I wait until 'Header' to be visible
 * @example I wait until 'Loading' not to be present
 * @example I wait until 'Search Bar > Submit Button' to be clickable
 */
When('I wait until {string} {playwrightConditionWait}', async function (alias: string, waitType: string) {
    const wait = getConditionWait(waitType);
    const element = await getElement(alias);
    await wait(element, config.browser.timeout.page);
});

/**
 * Wait for element text condition
 * @param {string} alias - element to wait condition
 * @param {string} wait - wait condition
 * @param {string} value - expected value to wait
 * @example I wait until text of 'Header' to be equal 'Javascript'
 * @example I wait until text of 'Header' not to be equal 'Python'
 */
When(
    'I wait until text of {string} {playwrightValueWait} {string}',
    async function (alias: string, waitType: string, value: string) {
        const wait = getValueWait(waitType);
        const element = await getElement(alias);
        const expectedValue = await getValue(value);
        const getValueFn = async () => element.innerText();
        await wait(getValueFn, expectedValue, config.browser.timeout.page);
    }
);
