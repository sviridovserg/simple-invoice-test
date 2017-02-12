const SignInPage = require('./SignInPage');

class AnonNavigation {
    static navigateToSignIn() {
        browser.url('/users/sign_in');
        return new SignInPage();
    }
    static navigateToInvoices() {
        browser.url('/invoices');
        return new SignInPage();
    }
    static navigateToClients() {
        browser.url('/clients');
        return new SignInPage();
    }
    static navigateToInvoice(id) {
        browser.url('/invoices/' + id);
        return new SignInPage();
    }
}

module.exports = AnonNavigation;