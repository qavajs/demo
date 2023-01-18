import { $, $$ } from '@qavajs/po';
import Wikipedia from './Wikipedia.js';
import WikipediaArticle from './WikipediaArticle.js';

export default class App {
    Wikipedia = $(new Wikipedia());
    WikipediaArticle = $(new WikipediaArticle());
}
