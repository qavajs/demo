const { $, $$ } = require('@qavajs/po-playwright');

class Wikipedia {
    selector = '.search-container';

    SearchInput = $('#searchInput');
    SearchButton = $('button[type=submit]');
}

module.exports = Wikipedia;
