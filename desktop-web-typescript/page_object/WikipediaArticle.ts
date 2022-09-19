import { $, $$ } from '@qavajs/po';

export default class WikipediaArticle {
    selector = '#content';

    Title = $('#firstHeading');
    References = $$('.references li')
}
