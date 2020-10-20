/// <reference types="cypress" />

describe('Open Site', () => {
    it('test', () => {
        //   cy.visit()
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Besta Alfidi')
        cy.get('[type="text"][placeholder="Email"]')
            .type('alfidibesta@gmail.com')
        cy.contains('Remember me').first().click()
        // cy.contains('Inline form').get('[class="custom-checkbox"]').should('be.checked')
    });

    it('using the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('alfidibesta@gmail.com')
        cy.get('#inputPassword2').type('tespassword')
        cy.contains('Option 1').click()
        // cy.contains('Option 2').click()

    });
    
    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('alfidibesta@gmail.com')
        cy.get('#exampleInputPassword1').type('tespassword')
        cy.contains('Check me out').click()
    });

    it('Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('besta')
        cy.get('[placeholder="Subject"]').type('alfidi')
        cy.get('[placeholder="Message"]').type('Benar Benar Benar')
    });

    it('Block Form', () => {
        cy.get('#inputFirstName').type('besta')
        cy.get('#inputLastName').type('alfidi')
        cy.get('#inputEmail').type('alfidibesta@gmail.com')
        cy.contains('Website').type('hndr91.github.io/demo-ui/')
    });

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('alfidibesta@gmail.com')
        cy.get('#inputPassword3').type('tespassword')
        cy.get('.custom-checkbox').last().click()
    });
})