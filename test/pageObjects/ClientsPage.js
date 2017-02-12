const BasePage = require('./BasePage');
class ClientsPage extends BasePage {
    navigate() {
        browser.url('/clients');
    }
}

module.exports = ClientsPage;