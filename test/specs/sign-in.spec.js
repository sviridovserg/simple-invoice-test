const BasicNavigation = require('../pageObjects/BasicNavigation');

describe('sign in page', ()=> {

    it('should navigate to sign in page', () => {
        BasicNavigation.navigateToSignIn().getHeaderText().should.be.equal('Sign in');
    });

    it('should redirect to sign in page from invoices if not logged in', () => {
        BasicNavigation.navigateToInvoices().getHeaderText().should.be.equal('Sign in');
    });

    it('should redirect to sign in page from clients if not logged in', () => {
        BasicNavigation.navigateToClients().getHeaderText().should.be.equal('Sign in');
    });

    it('should redirect to sign in page from invoice page if not logged in', () => {
        BasicNavigation.navigateToInvoice(7).getHeaderText().should.be.equal('Sign in');
    });

});
