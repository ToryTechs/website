describe('Accessibility checks for Home page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.injectAxe();
        cy.wait(500);
    });

    it('Has no detectable a11y violations on load for desktop screens', () => {
        cy.viewport(1400, 900);
        cy.checkA11y();
    });

    it('Has no detectable a11y violations on load for mobile screens', () => {
        cy.viewport(320, 568);
        cy.checkA11y();
    });
});
