const { locator } = require('@qavajs/steps-wdio/po');

class WikipediaArticle {
    Title = locator('#firstHeading');
    References = locator('.references li')
}

module.exports = WikipediaArticle;
