/// <reference types="cypress" />

describe('Description Product  - 1941720165 / Mochammad Dimasqi Aliffudin Faiz', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
    })
    
    it('See Product from the Picture ', () => {
        cy.get('#item_4_img_link').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

    it('back to the main menu', () => {
        cy.get('#item_4_img_link').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('#back-to-products').click();    
        cy.get('.title').should('have.text','Products')
    })

    
})
