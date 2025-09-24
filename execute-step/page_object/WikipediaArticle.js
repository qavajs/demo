const { locator } = require('@qavajs/steps-wdio/po');

class WikipediaArticle {
    selector = '#content';

    Title = locator('#firstHeading');
    References = locator('.references li')
}

module.exports = WikipediaArticle;
