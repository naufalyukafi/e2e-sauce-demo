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

    it('see product with filter Z to A', () => {
        cy.get('select').select('za');
        cy.get('.active_option').should('have.text','Name (Z to A)')  
        cy.get('.inventory_item_name').eq(0).should("have.text","Test.allTheThings() T-Shirt (Red)");
        cy.get('.inventory_item_name').eq(1).should("have.text","Sauce Labs Onesie");
        cy.get('.inventory_item_name').eq(2).should("have.text","Sauce Labs Fleece Jacket");
        cy.get('.inventory_item_name').eq(3).should("have.text","Sauce Labs Bolt T-Shirt");
        cy.get('.inventory_item_name').eq(4).should("have.text","Sauce Labs Bike Light");
        cy.get('.inventory_item_name').eq(5).should("have.text","Sauce Labs Backpack");
    })

    it('see product with filter low to high', () => {
        cy.get('select').select('lohi');
        cy.get('.inventory_item_price').eq(0).should("have.text","$7.99");
        cy.get('.inventory_item_price').eq(1).should("have.text","$9.99");
        cy.get('.inventory_item_price').eq(2).should("have.text","$15.99");
        cy.get('.inventory_item_price').eq(3).should("have.text","$15.99");
        cy.get('.inventory_item_price').eq(4).should("have.text","$29.99");
        cy.get('.inventory_item_price').eq(5).should("have.text","$49.99");
    })

    it('see product with filter high to low', () => {
        cy.get('select').select('hilo');
        cy.get('.inventory_item_price').eq(0).should("have.text","$49.99");
        cy.get('.inventory_item_price').eq(1).should("have.text","$29.99");
        cy.get('.inventory_item_price').eq(2).should("have.text","$15.99");
        cy.get('.inventory_item_price').eq(3).should("have.text","$15.99");
        cy.get('.inventory_item_price').eq(4).should("have.text","$9.99");
        cy.get('.inventory_item_price').eq(5).should("have.text","$7.99");
    })

    it('see product description from title products', () => {
        cy.get('#item_4_title_link').click();
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    })

    it('see product from cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.title').should('have.text','Your Cart')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('#item_4_title_link').click();
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    })
    
})
