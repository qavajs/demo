const { $, $$ } = require('@qavajs/po');

const UiAutomator2 = (selector) => `android=new UiSelector().${selector}`;

module.exports = class MobileApp {
    NavMenu = $(new NavMenu());

    LoginForm = $(new LoginForm());
    NotificationPopup = $(new NotificationPopup());
}

class NavMenu {
    selector = UiAutomator2('className("android.view.ViewGroup").index(2)');

    LoginButton = $(UiAutomator2('className("android.widget.Button").description("Login")'));
    Buttons = $$(UiAutomator2('className("android.widget.Button")'));
}

class LoginForm {
    selector = UiAutomator2('className("android.widget.ScrollView").description("Login-screen")');

    Username =$(UiAutomator2('className("android.widget.EditText").description("input-email")'));
    Password = $(UiAutomator2('className("android.widget.EditText").description("input-password")'));
    LoginButton = $(UiAutomator2('className("android.view.ViewGroup").description("button-LOGIN")'));
}

class NotificationPopup {
    selector = UiAutomator2('className("android.widget.FrameLayout").resourceId("android:id/content")');

    Message = $(UiAutomator2('className("android.widget.TextView").resourceId("android:id/message")'));
}