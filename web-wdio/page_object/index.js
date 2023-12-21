const { $, $$, Component } = require('@qavajs/po');
const Wikipedia = require('./Wikipedia');
const WikipediaArticle = require('./WikipediaArticle');

module.exports = class App {
    Wikipedia = $(new Wikipedia('.search-container'));
    WikipediaArticle = $(new WikipediaArticle('#content'));

    TodoInput = $('.new-todo');
    Todos = $$(new TodoItem('.todo-list li'));
}

class TodoItem extends Component {
    Complete = $('input.toggle');
    Label = $('label');
    Remove = $('.destroy');
}
