const { locator } = require('@qavajs/steps-wdio/po');
const Wikipedia = require('./Wikipedia');
const WikipediaArticle = require('./WikipediaArticle');

module.exports = class App {
    Wikipedia = locator.as(Wikipedia);
    WikipediaArticle = locator.as(WikipediaArticle);
}
