const { $, $$ } = require('@qavajs/po');
const Wikipedia = require('./Wikipedia');
const WikipediaArticle = require('./WikipediaArticle');

module.exports = class App {
    Wikipedia = $(new Wikipedia());
    WikipediaArticle = $(new WikipediaArticle());
}
