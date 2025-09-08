import { When } from '@qavajs/core';

When('I hide keyboard', async function() {
    await this.wdio.driver.hideKeyboard('pressKey', 'Return');
});