/// <reference types="cypress" />

describe('Open Site', () => {
    it('test', () => {
        //   cy.visit()
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Ivan Abdurrafie')
        cy.get('[type="text"][placeholder="Email"]')
            .type('iabdurrafie48@gmail.com')
        cy.contains('Remember me').first().click()
        // cy.contains('Inline form').get('[class="custom-checkbox"]').should('be.checked')
    });

    it('using the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('iabdurrafie48@gmail.com')
        cy.get('#inputPassword2').type('tespassword')
        cy.contains('Option 1').click()
        // cy.contains('Option 2').click()

    });
    
    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('iabdurrafie48@gmail.com')
        cy.get('#exampleInputPassword1').type('tespassword')
        cy.contains('Check me out').click()
    });

    it('Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Raf')
        cy.get('[placeholder="Subject"]').type('Ivan')
        cy.get('[placeholder="Message"]').type('Benar Benar Benar')
    });

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Ivan')
        cy.get('#inputLastName').type('Abdurrafie')
        cy.get('#inputEmail').type('iabdurrafie48@gmail.com')
        cy.contains('Website').type('hndr91.github.io/demo-ui/')
    });

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('iabdurrafie48@gmail.com')
        cy.get('#inputPassword3').type('tespassword')
        cy.get('.custom-checkbox').last().click()
    });
})