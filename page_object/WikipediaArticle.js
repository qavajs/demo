const { $, $$ } = require('@qavajs/po');

class WikipediaArticle {
    selector = '#content';

    Title = $('#firstHeading');
    References = $$('.references li')
}

module.exports = WikipediaArticle;
