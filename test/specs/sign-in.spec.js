// example of a test group
// note: all tests under the test directory are ran

describe('sign in page', ()=> {

    it('should navigate to sign in page', () => {
        browser.url('/users/sign_in');
        browser.element('.container h2').getText().should.be.equal('Sign in');
    });

    it('should redirect to sign in page from invoices if not logged in', () => {
        browser.url('/invoices');
        browser.element('.container h2').getText().should.be.equal('Sign in');
    });

    it('should redirect to sign in page from clients if not logged in', () => {
        browser.url('/clients');
        browser.element('.container h2').getText().should.be.equal('Sign in');
    });

    it('should redirect to sign in page from invoice page if not logged in', () => {
        browser.url('/invoices/7');
        browser.element('.container h2').getText().should.be.equal('Sign in');
    });

});
