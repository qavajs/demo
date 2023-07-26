const { $, $$, Component } = require('@qavajs/po');

class Wikipedia extends Component {
    SearchInput = $('#searchInput');
    SearchButton = $('button[type=submit]');
}

module.exports = Wikipedia;
