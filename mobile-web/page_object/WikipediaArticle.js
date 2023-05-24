const { $, $$, Component } = require('@qavajs/po');

class WikipediaArticle extends Component {
    Title = $('#firstHeading');
    References = $$('.references li')
}

module.exports = WikipediaArticle;
