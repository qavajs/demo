import { locator } from  '@qavajs/playwright-wdio';

const XCUITestPredicate = (selector: string) => `-ios predicate string:${selector}`;

export default class App {
    NavMenu = locator(XCUITestPredicate('type == "XCUIElementTypeWindow"')).as(NavMenu);
    LoginForm = locator('~Login-screen').as(LoginForm);
    NotificationPopup = locator(XCUITestPredicate('type == "XCUIElementTypeAlert"')).as(NotificationPopup);
    Form = locator(XCUITestPredicate('type == "XCUIElementTypeWindow"')).as(Form);
}

class NavMenu {
    LoginButton = locator('~Login');
    Button = locator.template(text => `~${text}`);
}

class LoginForm {
    Username = locator('~input-email');
    Password = locator('~input-password');
    LoginButton = locator(XCUITestPredicate('label == "LOGIN" AND name == "LOGIN"'));
}

class NotificationPopup {
    Message = locator(XCUITestPredicate('label == "You are logged in!"'));
}

class Form {
    InputField = locator('~text-input');
    YouHaveTyped = locator('~input-text-result');
    Switch = locator('~switch');
    SwitchOff = locator(XCUITestPredicate('label == "Click to turn the switch ON"'));
    SwitchOn = locator(XCUITestPredicate('label == "Click to turn the switch OFF"'));
    Dropdown = locator('~dropdown-chevron');
    Wheel = locator(XCUITestPredicate('type == "XCUIElementTypePickerWheel"'));
    WheelDone = locator('~done_button');
    Button = locator('~button-Active');
}
