const { $, $$ } = require('@qavajs/po-playwright');

class WikipediaArticle {
    selector = '#content';

    Title = $('#firstHeading');
    References = $$('.references li')
}

module.exports = WikipediaArticle;
