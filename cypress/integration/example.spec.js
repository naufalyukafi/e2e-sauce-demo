/// <reference types="cypress" />

describe('example scenario', () => {
    it('example scenario', () => {
        // visitnya langsung pake "/" karena sudah di setting pada config cypress
        cy.visit('/')
        cy.contains('Accepted usernames are')
    })
})