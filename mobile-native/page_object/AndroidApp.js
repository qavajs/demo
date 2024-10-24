const { $, $$, Component, Selector } = require('@qavajs/po');

const UiAutomator2 = (selector) => `android=new UiSelector().${selector}`;

module.exports = class MobileApp{
    NavMenu = $(new NavMenu(UiAutomator2('className("android.view.ViewGroup").index(2)')));
    LoginForm = $(new LoginForm(UiAutomator2('className("android.widget.ScrollView").description("Login-screen")')));
    NotificationPopup = $(new NotificationPopup(UiAutomator2('className("android.widget.FrameLayout").resourceId("android:id/content")')));
}

class NavMenu extends Component {
    LoginButton = $(UiAutomator2('className("android.widget.Button").description("Login")'));
    Button = $(Selector(text => UiAutomator2(`className("android.widget.TextView").text("${text}")`)));
}

class LoginForm extends Component {
    Username =$(UiAutomator2('className("android.widget.EditText").description("input-email")'));
    Password = $(UiAutomator2('className("android.widget.EditText").description("input-password")'));
    LoginButton = $(UiAutomator2('className("android.view.ViewGroup").description("button-LOGIN")'));
}

class NotificationPopup extends Component {
    Message = $(UiAutomator2('className("android.widget.TextView").resourceId("android:id/message")'));
}
