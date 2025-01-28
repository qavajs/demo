import { locator } from '@qavajs/steps-playwright/po';
import { Wikipedia } from './Wikipedia';
import { WikipediaArticle } from './WikipediaArticle';

export class App {
    Wikipedia = locator('.search-container').as(Wikipedia);
    WikipediaArticle = locator('#content').as(WikipediaArticle);
}