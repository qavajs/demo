const { After, Before, When, setDefaultTimeout } = require('@cucumber/cucumber');
// const defaultTimeouts= require('./defaultTimeouts');
const { remote }= require('webdriverio');
const { po }= require('@qavajs/po');
const memory = require('@qavajs/memory');

setDefaultTimeout(60000);
