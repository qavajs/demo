import { locator } from '@qavajs/playwright';

class CounterPopup {
  Count = locator('#count');
  Increment = locator('#increment');
  Decrement = locator('#decrement');
  Reset = locator('#reset');
  Status = locator('#status');
}

export default class App {
  Counter = locator('body').as(CounterPopup);
}
