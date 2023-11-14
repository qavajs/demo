const { $, $$ } = require('@qavajs/po-testcafe');

class WikipediaArticle {
    selector = '#content';

    Title = $('#firstHeading');
    References = $$('.references li')
}

module.exports = WikipediaArticle;
