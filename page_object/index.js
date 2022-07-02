const { $, $$ } = require('@qavajs/po');
const Wikipedia = require('./Wikipedia');
const WikipediaArticle = require('./WikipediaArticle');
const ProgressBarPage = require('./ProgressBarPage');

module.exports = class App {
    Wikipedia = $(new Wikipedia());
    WikipediaArticle = $(new WikipediaArticle());
    ProgressBarPage = $(new ProgressBarPage());
}
