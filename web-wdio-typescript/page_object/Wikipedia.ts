import { $, $$ } from '@qavajs/po';

export default class Wikipedia {
    selector = '.search-container';

    SearchInput = $('#searchInput');
    SearchButton = $('button[type=submit]');
}
