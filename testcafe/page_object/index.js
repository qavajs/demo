const { $, $$ } = require('@qavajs/po-testcafe');
const Wikipedia = require('./Wikipedia');
const WikipediaArticle = require('./WikipediaArticle');

module.exports = class App {
    Wikipedia = $(new Wikipedia('.search-container'));
    WikipediaArticle = $(new WikipediaArticle('#content'));
}
