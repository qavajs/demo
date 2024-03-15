import { $, $$, Component } from '@qavajs/po-playwright';

export default class App {
    TodoInput = $('#container-TsTodos---app--addTodoItemInput-inner');
    Todos = $$(new TodoItem('#container-TsTodos---app--todoList-listUl li'));
    ClearCompleted = $('button:has-text("Clear completed")');
    ActiveFilter = $('.sapMSegmentedButtonNoAutoWidth li:has-text("Active")');
    CompletedFilter = $('.sapMSegmentedButtonNoAutoWidth li:has-text("Completed")');  
}

class TodoItem extends Component {
    Label = $('[id*=text3]');
    Complete = $('.sapMCbMark');
}