const { When, Then, Template } = require('@qavajs/core');

When('I search for {string} in wikipedia', Template((term) => `
    I open 'https://www.wikipedia.org/' url
    I type '${term}' to 'Wikipedia > Search Input'
    I click 'Wikipedia > Search Button'
`));

When('Verify {string} title equals {string}', Template((alias, expected) => `
    I expect text of '${alias} > Title' equals '${expected}'
`));