import { locator } from '@qavajs/steps-wdio/po';

export class WikipediaArticle {
    Title = locator('#firstHeading');
    References = locator('.references li')
}
