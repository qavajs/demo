const { When } = require('@cucumber/cucumber');

When('I search for {string} in wikipedia', async function(term) {
    await this.executeStep(`I open 'https://www.wikipedia.org/' url`);
    await this.executeStep(`I type '${term}' to 'Wikipedia > Search Input'`);
    await this.executeStep(`I click 'Wikipedia > Search Button'`);
});

When('Verify {string} title equals {string}', async function(alias, expected) {
    await this.executeStep(`I expect text of '${alias} > Title' equals '${expected}'`);
});
