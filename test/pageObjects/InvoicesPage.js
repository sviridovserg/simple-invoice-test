const BasePage = require('./BasePage');
class InvoicesPage extends BasePage {
    navigate() {
        browser.url('/invoices');
    }
}

module.exports = InvoicesPage;