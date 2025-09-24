const { locator } = require('@qavajs/steps-wdio/po');

class Wikipedia {
    selector = '.search-container';

    SearchInput = locator('#searchInput');
    SearchButton = locator('button[type=submit]');
}

module.exports = Wikipedia;
