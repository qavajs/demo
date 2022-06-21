const { $, $$ } = require('@qavajs/po');

class WikipediaArticle {
    selector = '#content';

    Title = $('#firstHeading');
}

module.exports = WikipediaArticle;
