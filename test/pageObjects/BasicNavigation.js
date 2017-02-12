const SignInPage = require('./SignInPage');
const InvoicesPage = require('./InvoicesPage');
const ClientsPage = require('./ClientsPage');
const InvoicePage = require('./InvoicePage');

class BasicNavigation {
    static navigateToSignIn() {
        let signInPage = new SignInPage();
        signInPage.navigate();
        return signInPage;
    }
    static navigateToInvoices() {
        let invoicesPage = new InvoicesPage();
        invoicesPage.navigate();
        return invoicesPage;
    }
    static navigateToClients() {
        let page = new ClientsPage();
        page.navigate();
        return page;
    }
    static navigateToInvoice(id) {
        let page = new InvoicePage();
        page.navigate(id);
        return page;
    }
}

module.exports = BasicNavigation;