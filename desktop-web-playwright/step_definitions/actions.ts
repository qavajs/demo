import { When } from '@cucumber/cucumber';
import memory from '@qavajs/memory';
import {Locator} from "playwright";
import { po } from '@qavajs/po-playwright';
import {getElement, getValue} from './transformers';

When('I open {string} url', async function (url: string) {
    const resolvedUrl = await getValue(url);
    await browser.goto(resolvedUrl);
});

/**
 * Type text to element
 * @param {string} alias - element to type
 * @param {string} value - value to type
 * @example I type 'wikipedia' to 'Google Input'
 */
When('I type {string} to {string}', async function (value: string, alias: string) {
    const element = await getElement(alias) as Locator;
    const typeValue =  await getValue(value);
    await element.type(typeValue);
});

/**
 * Click element
 * @param {string} alias - element to click
 * @example I click 'Google Button'
 */
When('I click {string}', async function (alias: string) {
    const element = await po.getElement(alias) as Locator;
    await element.click();
});
