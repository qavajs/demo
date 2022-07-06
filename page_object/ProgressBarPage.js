const { $, $$ } = require('@qavajs/po');

class ProgressBarPage {
    selector = 'body';

    Start = $('#startButton');
    Bar = $('#progressBar');
}

module.exports = ProgressBarPage;
