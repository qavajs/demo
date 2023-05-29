const { $, $$, Component } = require('@qavajs/po-testcafe');

class Wikipedia extends Component {
    SearchInput = $('#searchInput');
    SearchButton = $('button[type=submit]');
}

module.exports = Wikipedia;
