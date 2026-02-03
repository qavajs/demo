import { Fixture } from '@qavajs/core';
import { QavajsPlaywrightWorld } from '@qavajs/steps-playwright';

Fixture({ name: 'auth', tags: '@auth' }, async function (this: QavajsPlaywrightWorld) {
    await this.executeStep(`I open '$app' url`);
    await this.executeStep(`I type 'standard_user' to 'Username Input'`);
    await this.executeStep(`I type 'secret_sauce' to 'Password Input'`);
    await this.executeStep(`I click 'Login Button'`);
    await this.executeStep(`I expect text of 'App Logo' to equal 'Swag Labs'`);
});