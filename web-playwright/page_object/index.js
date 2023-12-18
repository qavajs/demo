const { $, $$, Component } = require('@qavajs/po-playwright');
const Wikipedia = require('./Wikipedia');
const WikipediaArticle = require('./WikipediaArticle');

module.exports = class App {
    Wikipedia = $(new Wikipedia());
    WikipediaArticle = $(new WikipediaArticle());

    TodoInput = $('.new-todo');
    Todos = $$(new TodoItem('.todo-list li'));
    ClearCompleted = $('.clear-completed');
    TodoCounter = $('.todo-count');
    ActiveFilter = $('a[href*=active]');
    CompletedFilter = $('a[href*=completed]');
}

class TodoItem extends Component {
    Complete = $('input.toggle');
    Label = $('label');
    Remove = $('.destroy');
}
