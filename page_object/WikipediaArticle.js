const { $, $$ } = require('@yaatp/po');

class WikipediaArticle {
    selector = '#content';

    Title = $('#firstHeading');
}

module.exports = WikipediaArticle;
