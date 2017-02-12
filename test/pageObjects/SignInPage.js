const BasePage = require('./BasePage');
class SignInPage extends BasePage {
    navigate() {
        browser.url('/users/sign_in');
    }
}

module.exports = SignInPage;