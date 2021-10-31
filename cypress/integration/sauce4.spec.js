/// <reference types="cypress" />

describe('Menu Items  - 1941720194 / Muhammad Mukhtar', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.contains('Accepted usernames are')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/inventory.html') 
    })

    it('click menu button', () => {
        cy.get('[id=react-burger-menu-btn]').click()
        cy.get('[id=inventory_sidebar_link]').should("have.text","All Items")
        cy.get('[id=about_sidebar_link]').should("have.text","About")
        cy.get('[id=logout_sidebar_link]').should("have.text","Logout")
        cy.get('[id=reset_sidebar_link]').should("have.text","Reset App State")

    })

    it('click submenu all item button', () => {
        cy.get('[id=react-burger-menu-btn]').click()
        cy.get('[id=inventory_sidebar_link]').click()
        cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/inventory.html')

    })

    it('click submenu logout button', () => {
        cy.get('[id=react-burger-menu-btn]').click()
        cy.get('[id=logout_sidebar_link]').click()
        cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/')

    })

    it('click submenu reset button', () => {
        cy.get('[id=react-burger-menu-btn]').click()
        cy.get('[id=reset_sidebar_link]').click()
        cy.get('[id=shopping_cart_container]').should("have.text","")
    })

    it('click submenu about button', () => {
        cy.get('[id=react-burger-menu-btn]').click()
        cy.get('[id=about_sidebar_link]').click()
        cy.url().should('eq', 'https://saucelabs.com/')
    })

})
