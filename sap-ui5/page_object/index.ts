import { locator } from '@qavajs/steps-playwright/po';

export default class App {
    TodoInput = locator('#container-TsTodos---app--addTodoItemInput-inner');
    Todos = locator(`#container-TsTodos---app--todoList-listUl li`);
    TodoByText = locator.template(text => `#container-TsTodos---app--todoList-listUl li:has-text('${text}')`).as(TodoItem);
    TodoByIndex = locator.template(i => `#container-TsTodos---app--todoList-listUl li:nth-child(${i})`).as(TodoItem);
    ClearCompleted = locator('button:has-text("Clear completed")');
    ActiveFilter = locator('.sapMSegmentedButtonNoAutoWidth li:has-text("Active")');
    CompletedFilter = locator('.sapMSegmentedButtonNoAutoWidth li:has-text("Completed")');
}

class TodoItem {
    Label = locator('[id*=text3]');
    Complete = locator('.sapMCbMark');
}