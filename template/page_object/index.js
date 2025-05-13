const { locator } = require('@qavajs/steps-wdio/po');
const Wikipedia = require('./Wikipedia');
const WikipediaArticle = require('./WikipediaArticle');

module.exports = class App {
    Wikipedia = locator('.search-container').as(Wikipedia)
    WikipediaArticle = locator('#content').as(WikipediaArticle);
}
