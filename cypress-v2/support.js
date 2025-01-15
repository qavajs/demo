import defineQavajs from '@qavajs/cypress/defineQavajs';
import '@qavajs/cypress';
import './step_definitions/custom';

import PageObject from './page_object'; // path to qavajs page objects
import Memory from './memory'; // path to qavajs memory

defineQavajs({
    pageObject: new PageObject(),
    memory: new Memory()
});
