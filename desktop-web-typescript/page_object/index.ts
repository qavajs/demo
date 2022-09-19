import { $, $$ } from '@qavajs/po';
import Wikipedia from './Wikipedia';
import WikipediaArticle from './WikipediaArticle';

export default class App {
    Wikipedia = $(new Wikipedia());
    WikipediaArticle = $(new WikipediaArticle());
}
