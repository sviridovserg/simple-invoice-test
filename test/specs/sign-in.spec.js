const AnonNavigation = require('../pageObjects/AnonNavigation');

describe('sign in page', ()=> {

    afterEach(() => {
        browser.deleteCookie();
    });

    it('should navigate to sign in page', () => {
        AnonNavigation.navigateToSignIn().getHeaderText().should.be.equal('Sign in');
    });

    it('should redirect to sign in page from invoices if not logged in', () => {
        AnonNavigation.navigateToInvoices().getHeaderText().should.be.equal('Sign in');
    });

    it('should redirect to sign in page from clients if not logged in', () => {
        AnonNavigation.navigateToClients().getHeaderText().should.be.equal('Sign in');
    });

    it('should redirect to sign in page from invoice page if not logged in', () => {
        AnonNavigation.navigateToInvoice(7).getHeaderText().should.be.equal('Sign in');
    });

    it('should redirect to invoices  after sign in', () => {
        AnonNavigation
            .navigateToSignIn()
            .sginIn('IrinaAbdriaevaMailForTests@gmail.com', 'JNaO8NBlyOZrepf14tgG')
            .getHeaderText().should.be.equal('Invoices');
    });
});
