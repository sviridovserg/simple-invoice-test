class BasePage {
    getHeaderText() {
        return browser.element('.container h2').getText();
    }
}

module.exports = BasePage;