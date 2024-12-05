import { locator } from '@qavajs/steps-playwright/po';

export class WikipediaArticle {
    Title = locator('#firstHeading');
    References = locator('.references li');
}
