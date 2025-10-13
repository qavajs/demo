import { locator } from  '@qavajs/steps-wdio/po';

const UiAutomator2 = (selector: string) => `android=new UiSelector().${selector}`;

export class App {
    NavMenu = locator(UiAutomator2('className("android.view.ViewGroup").index(2)')).as(NavMenu);
    LoginForm = locator(UiAutomator2('className("android.widget.ScrollView").description("Login-screen")')).as(LoginForm);
    NotificationPopup = locator(UiAutomator2('className("android.widget.FrameLayout").resourceId("android:id/content")')).as(NotificationPopup);
    Form = locator.as(Form);
}

class NavMenu {
    LoginButton = locator(UiAutomator2('className("android.widget.Button").description("Login")'));
    Button = locator.template(text => UiAutomator2(`className("android.widget.TextView").text("${text}")`));
}

class LoginForm {
    Username = locator(UiAutomator2('className("android.widget.EditText").description("input-email")'));
    Password = locator(UiAutomator2('className("android.widget.EditText").description("input-password")'));
    LoginButton = locator(UiAutomator2('className("android.view.ViewGroup").description("button-LOGIN")'));
}

class NotificationPopup {
    Message = locator(UiAutomator2('className("android.widget.TextView").resourceId("android:id/message")'));
}

class Form {
    InputField = locator('//android.widget.EditText[@content-desc="text-input"]');
    YouHaveTyped = locator('//android.widget.TextView[@content-desc="input-text-result"]');
    Switch = locator('//android.widget.Switch[@content-desc="switch"]');
    SwitchOff = locator('//android.widget.Switch[@content-desc="Click to turn the switch ON"]');
    SwitchOn = locator('//android.widget.Switch[@content-desc="Click to turn the switch OFF"]');
    Dropdown = locator('//android.view.ViewGroup[@content-desc="Dropdown"]');
    DropdownOption = locator.template(text => `//android.widget.CheckedTextView[@text="${text}"]`);
    Button = locator('//android.widget.TextView[@text="Active"]');
}