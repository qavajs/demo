const { $, $$, Component } = require('@qavajs/po');

const XCUITestPredicate = (selector) => `-ios predicate string:${selector}`;
const XCUITestClassChain = (selector) => `-ios class chain:${selector}`

module.exports = class IOSApp {
    NavMenu = $(new NavMenu(XCUITestClassChain('**/XCUIElementTypeOther[`label == "Home Webview Login Forms Swipe Drag"`][2]')));
    LoginForm = $(new LoginForm(XCUITestPredicate('name == "Login-screen"')));
    NotificationPopup = $(new NotificationPopup(XCUITestPredicate('label == "Success" AND name == "Success" AND type == "XCUIElementTypeAlert"')));
    Form = $(new Form('~wdioDemoApp'));
}

class NavMenu extends Component {
    LoginButton = $(XCUITestPredicate('label == "Login"'));
    Buttons = $$(XCUITestPredicate('type == "XCUIElementTypeButton"'));
}

class LoginForm extends Component {
    Username =$(XCUITestPredicate('name == "input-email"'));
    Password = $(XCUITestPredicate('name == "input-password"'));
    LoginButton = $(XCUITestPredicate('label == "LOGIN" AND name == "LOGIN" AND value == "LOGIN"'));
}

class NotificationPopup extends Component {
    Message = $(XCUITestPredicate('label == "You are logged in!"'));
}

class Form extends Component {
    InputField =$(XCUITestPredicate('name == "text-input"'));
    YouHaveTyped = $(XCUITestPredicate('name == "input-text-result"'));
    Switch = $(XCUITestPredicate('name == "switch"'));
    SwitchOff = $(XCUITestPredicate('label == "Click to turn the switch ON"'));
    SwitchOn = $(XCUITestPredicate('label == "Click to turn the switch OFF"'));
    Dropdown = $(XCUITestPredicate('name == "text_input"'));
    Wheel = $(XCUITestClassChain('**/XCUIElementTypePicker[`name == "Dropdown picker"`]/**/XCUIElementTypePickerWheel'));
    WheelDone = $('~done_button');
    Button = $(XCUITestPredicate('label == "Active" AND name == "Active" AND type == "XCUIElementTypeOther"'));
}
