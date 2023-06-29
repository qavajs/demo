import { Before, Then } from '@badeball/cypress-cucumber-preprocessor';
import memory from '@qavajs/memory';
import Memory from '../memory';
import PO from '../page_object';
import { po } from '@qavajs/po-cypress';
Before(function () {
    po.init(cy, {} as any);
    po.register(new PO());
    memory.register(new Memory());
});
