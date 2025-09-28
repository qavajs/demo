import { locator } from  '@qavajs/playwright-wdio';

const XCUITestPredicate = (selector: string) => `-ios predicate string:${selector}`;
const XCUITestClassChain = (selector: string) => `-ios class chain:${selector}`

export default class App {
    NavMenu = locator(XCUITestClassChain('**/XCUIElementTypeOther[`label == "Home Webview Login Forms Swipe Drag"`][2]')).as(NavMenu);
    LoginForm = locator(XCUITestPredicate('name == "Login-screen"')).as(LoginForm);
    NotificationPopup = locator(XCUITestPredicate('label == "Success" AND name == "Success" AND type == "XCUIElementTypeAlert"')).as(NotificationPopup);
    Form = locator('~wdiodemoapp').as(Form);
}

class NavMenu {
    LoginButton = locator(XCUITestPredicate('label == "Login"'));
    Button = locator.template(text => XCUITestPredicate(`type == "XCUIElementTypeButton" AND name == "${text}"`));
}

class LoginForm {
    Username = locator(XCUITestPredicate('name == "input-email"'));
    Password = locator(XCUITestPredicate('name == "input-password"'));
    LoginButton = locator(XCUITestPredicate('label == "LOGIN" AND name == "LOGIN" AND value == "LOGIN"'));
}

class NotificationPopup {
    Message = locator(XCUITestPredicate('label == "You are logged in!"'));
}

class Form {
    InputField =locator(XCUITestPredicate('name == "text-input"'));
    YouHaveTyped = locator(XCUITestPredicate('name == "input-text-result"'));
    Switch = locator(XCUITestPredicate('name == "switch"'));
    SwitchOff = locator(XCUITestPredicate('label == "Click to turn the switch ON"'));
    SwitchOn = locator(XCUITestPredicate('label == "Click to turn the switch OFF"'));
    Dropdown = locator(XCUITestPredicate('name == "text_input"'));
    Wheel = locator(XCUITestClassChain('**/XCUIElementTypePicker[`name == "Dropdown picker"`]/**/XCUIElementTypePickerWheel'));
    WheelDone = locator('~done_button');
    Button = locator(XCUITestPredicate('label == "Active" AND name == "Active" AND type == "XCUIElementTypeOther"'));
}
