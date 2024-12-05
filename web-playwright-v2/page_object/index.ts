import { locator } from '@qavajs/steps-playwright/po';
import { Wikipedia } from './Wikipedia';
import { WikipediaArticle } from './WikipediaArticle';

export class App {
    Wikipedia = locator('.search-container').as(Wikipedia);
    WikipediaArticle = locator('#content').as(WikipediaArticle);

    Todos = locator('.todo-list li');
    TodoInput = locator('.new-todo');
    TodoByIndex = locator.template(i => `.todo-list li:nth-child(${i})`).as(TodoItem);
    TodoByText = locator.template(text => `.todo-list li:has-text("${text}")`).as(TodoItem);
    ClearCompleted = locator('.clear-completed');
    TodoCounter = locator('.todo-count');
    ActiveFilter = locator('a[href*=active]');
    CompletedFilter = locator('a[href*=completed]');
}

class TodoItem {
    Complete = locator('input.toggle');
    Label = locator('label');
    Remove = locator('.destroy');
}
