/// <reference types="cypress" />

describe('Verifiy users can product buy - 1941720040 / Naufal Yukafi Ridlo', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.contains('Accepted usernames are')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/inventory.html') 
    })
    
    it('See product card list', () => {
        cy.get('.inventory_list')
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

    it('Can add to cart one products', () => {
        cy.get('.inventory_list')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.btn').first().click()
        cy.wait(1000)
        cy.contains('Remove').should('be.visible')
    })

    it('Can buy products added to shoping cart', () => {
        cy.get('.inventory_list')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.btn').first().click()
        cy.wait(1000)
        cy.contains('Remove').should('be.visible')
        cy.get('.shopping_cart_badge')
        cy.contains('1').should('be.visible')
    })

    describe('Checkout product', () => {
        
        beforeEach(() => {
            cy.get('.inventory_list')
            cy.contains('Sauce Labs Backpack').should('be.visible')
            cy.get('.btn').first().click()
            cy.wait(1000)
            cy.contains('Remove').should('be.visible')
            cy.get('.shopping_cart_badge').click()
            cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/cart.html')
            cy.contains('Your Cart').should('be.visible')
            cy.contains('Sauce Labs Backpack').should('be.visible')
            cy.get('#checkout').click()
            cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
        })

        it("can't checkout the product when the zip code input is not filled in", () => {
            cy.contains('Checkout: Your Information').should('be.visible')
            cy.get('input[name="firstName"]').type('Naufal').should('have.value', 'Naufal')
            cy.get('input[name="lastName"]').type('Yukafi').should('have.value', 'Yukafi')
            cy.get('input[name="continue"]').click()
            cy.contains('Error: Postal Code is required').should('be.visible')
        })

        it('Can checkout products when all input is filled', () => {
            cy.contains('Checkout: Your Information').should('be.visible')
            cy.get('input[name="firstName"]').type('Naufal').should('have.value', 'Naufal')
            cy.get('input[name="lastName"]').type('Yukafi').should('have.value', 'Yukafi')
            cy.get('input[name="postalCode"]').type('67321').should('have.value', '67321')
            cy.get('input[name="continue"]').click()
            cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
            cy.contains('Total: $32.39').should('be.visible')
            cy.get('[class="btn btn_action btn_medium cart_button"]').click()
            cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
            cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')
        })
    })
})
