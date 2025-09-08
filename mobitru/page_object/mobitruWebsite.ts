import { locator } from '@qavajs/steps-wdio/po';

export default class App {
    SearchInput = locator('#wp-block-search__input-1');
    SearchButton = locator('[aria-label="Search"]');
    SearchResult = locator.template(text => `//article[contains(., '${text}')]`).as(SearchResult);
    ArticleHeading = locator('h2.wp-block-heading');
}

class SearchResult {
    ReadMore = locator('.read-more a');
}
