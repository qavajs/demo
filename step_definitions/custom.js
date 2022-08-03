const { After, Before, When, setDefaultTimeout } = require('@cucumber/cucumber');
// const defaultTimeouts= require('./defaultTimeouts');
const { remote }= require('webdriverio');
const { po }= require('@qavajs/po');
const memory = require('@qavajs/memory');

// When('I open \'$wikipediaUrl\' url', () => {});

When('pending', function () {
    return 'pending'
});

When('data table:', function (dataTable) {
    console.log(dataTable.raw())
});

When('multiline:', function (multiline) {

})

setDefaultTimeout(20000);
