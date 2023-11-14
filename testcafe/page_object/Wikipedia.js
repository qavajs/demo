const { $, $$ } = require('@qavajs/po-testcafe');

class Wikipedia {
    selector = '.search-container';

    SearchInput = $('#searchInput');
    SearchButton = $('button[type=submit]');
}

module.exports = Wikipedia;
