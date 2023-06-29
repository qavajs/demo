import { $, $$ } from '@qavajs/po-cypress';

export default class WikipediaArticle {
    selector = '#content';

    Title = $('#firstHeading');
    References = $$('.references li')
}
