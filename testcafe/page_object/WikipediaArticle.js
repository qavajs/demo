const { $, $$, Component } = require('@qavajs/po-testcafe');

class WikipediaArticle extends Component {
    Title = $('#firstHeading');
    References = $$('.references li')
}

module.exports = WikipediaArticle;
