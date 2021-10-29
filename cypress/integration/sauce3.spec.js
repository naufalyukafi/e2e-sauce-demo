/// <reference types="cypress" />

describe('verifiy user before sort this item - 1941720182 / Ivanka Mauludi Juniar', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.contains('Accepted usernames are')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/inventory.html') 
    })
    it('click the sort a-z', () => {
        cy.get('[data-test=product_sort_container]')
        .select('az')
        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6)
          });
          cy.get('[class="inventory_item_name"]').eq(0).should("have.text","Sauce Labs Backpack");
          cy.get('[class="inventory_item_name"]').eq(1).should("have.text","Sauce Labs Bike Light");
          cy.get('[class="inventory_item_name"]').eq(2).should("have.text","Sauce Labs Bolt T-Shirt");
          cy.get('[class="inventory_item_name"]').eq(3).should("have.text","Sauce Labs Fleece Jacket");
          cy.get('[class="inventory_item_name"]').eq(4).should("have.text","Sauce Labs Onesie");
          cy.get('[class="inventory_item_name"]').eq(5).should("have.text","Test.allTheThings() T-Shirt (Red)");
    })

    it('click the sort z-a', () => {
        cy.get('[ class="product_sort_container"]')
        .select('za')
        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_name"]').eq(0).should("have.text", "Test.allTheThings() T-Shirt (Red)");
        cy.get('[class="inventory_item_name"]').eq(1).should("have.text", "Sauce Labs Onesie");
        cy.get('[class="inventory_item_name"]').eq(2).should("have.text", "Sauce Labs Fleece Jacket");
        cy.get('[class="inventory_item_name"]').eq(3).should("have.text", "Sauce Labs Bolt T-Shirt");
        cy.get('[class="inventory_item_name"]').eq(4).should("have.text", "Sauce Labs Bike Light");
        cy.get('[class="inventory_item_name"]').eq(5).should("have.text", "Sauce Labs Backpack");
    })

    it('click the sort price low to high', () =>{
        cy.get('[ class="product_sort_container"]')
        .select('lohi')
        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_name"]').eq(0).should("have.text", "Sauce Labs Onesie");
        cy.get('[class="inventory_item_name"]').eq(1).should("have.text", "Sauce Labs Bike Light");
        cy.get('[class="inventory_item_name"]').eq(2).should("have.text", "Sauce Labs Bolt T-Shirt");
        cy.get('[class="inventory_item_name"]').eq(3).should("have.text", "Test.allTheThings() T-Shirt (Red)");
        cy.get('[class="inventory_item_name"]').eq(4).should("have.text", "Sauce Labs Backpack");
        cy.get('[class="inventory_item_name"]').eq(5).should("have.text", "Sauce Labs Fleece Jacket");

    })
    it('click the sort price high to low', () =>{
        cy.get('[ class="product_sort_container"]')
        .select('hilo')
        cy.get('[class="inventory_item_name"]').should(($item1) => {
            expect($item1).to.have.length(6)
        });
        cy.get('[class="inventory_item_name"]').eq(0).should("have.text", "Sauce Labs Fleece Jacket");
        cy.get('[class="inventory_item_name"]').eq(1).should("have.text", "Sauce Labs Backpack");
        cy.get('[class="inventory_item_name"]').eq(2).should("have.text", "Sauce Labs Bolt T-Shirt");
        cy.get('[class="inventory_item_name"]').eq(3).should("have.text", "Test.allTheThings() T-Shirt (Red)");
        cy.get('[class="inventory_item_name"]').eq(4).should("have.text", "Sauce Labs Bike Light");
        cy.get('[class="inventory_item_name"]').eq(5).should("have.text", "Sauce Labs Onesie");

    })
})
