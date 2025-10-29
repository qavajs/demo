import { Given, IQavajsWorld } from '@qavajs/core';

Given('dependent on {string} from {string}', async function (this: IQavajsWorld, title: string, file: string) {
    await this.executeTest(file, title);
});