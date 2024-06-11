import { $, $$ } from '@qavajs/po-cypress';

export default class Wikipedia {
    selector = '.search-container';

    SearchInput = $('#searchInput');
    SearchButton = $('button[type=submit]');
}
