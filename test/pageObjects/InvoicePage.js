const BasePage = require('./BasePage');
class InvoicePage extends BasePage {
    navigate(id) {
        browser.url('/invoices/' + id);
    }
}

module.exports = InvoicePage;