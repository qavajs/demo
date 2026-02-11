import { locator } from '@qavajs/playwright';

export default class App {
    Order = locator.template(id => `[role="listitem"]:has-text("${id}")`);
    Orders = locator(`[role="listitem"]`);
    OrderDetails = locator('#container-orderbrowser---app--layout-midColumn').as(OrderDetails);
    SearchInput = locator('[aria-label="Search"]');
    SearchButton = locator('#container-orderbrowser---master--searchField-search');
}

class OrderDetails {
    Title = locator('#__title1-inner');
    ProcessorInformation = locator('#container-orderbrowser---detail--iconTabFilterProcessor-tab');
    EmployeeName = locator('[id*=SimpleFormProcessorInfo][id*=label]:has-text("Name") + [id*=SimpleFormProcessorInfo][id*=text]');
}