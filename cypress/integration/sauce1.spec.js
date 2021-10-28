/// <reference types="cypress" />
// visitnya langsung pake "/" karena sudah disetting pada config cypress

describe('Login Scenario - 1941720005 / M. Shiva Matahari Yusda', () => {

    describe('Login Page - Possible Login Failed', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        it('Valid Username & Invalid Password', () => { 
            // Enter Valid Username 
            cy.get('[data-test=username]').type('standard_user')
            // Enter Wrong Password 
            cy.get('[data-test=password]').type('standard_user')
            // Click Login Button 
            cy.get('[data-test=login-button]').click()
            // Error Message
            cy.get('.error-message-container').should('be.visible')
    
        })
    
        
        it('Invalid Username & Valid Password', () => {
            // Enter Wrong Username
            cy.get('[data-test=username]').type('sauce_user')
            // Enter Valid Password
            cy.get('[data-test=password]').type('secret_sauce')
            // Click Login Button 
            cy.get('[data-test=login-button]').click()
            // Error Message
            cy.get('.error-message-container').should('be.visible')
    
        })
    
        it('Invalid Username & Invalid Password', () => {
            // Enter Wrong Username 
            cy.get('[data-test=username]').type('sauce_user')
            // Enter Wrong Password 
            cy.get('[data-test=password]').type('sauce_sauce')
            // Click Login Button 
            cy.get('[data-test=login-button]').click()
            // Error Message
            cy.get('.error-message-container').should('be.visible')
    
        })
    
        it('Blank Username & Blank Password', () => {    
            // Click Login Button 
            cy.get('[data-test=login-button]').click()
            // Error Message
            cy.get('.error-message-container').should('be.visible')
    
        })
    
    })

    describe('Login Page - Standard User', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        it('Check for Standard User - Valid', () => {
            
            // Enter Username
            cy.get('[data-test=username]').type('standard_user')
            // Enter Password
            cy.get('[data-test=password]').type('secret_sauce')
            // Click Login Button
            cy.get('[data-test=login-button]').click()
            // After Login Contains Product That Shoud Visible
            cy.contains('Product').should('be.visible')
            // Click Menu Button
            cy.get('#react-burger-menu-btn').click()
            // Wait for 2000 Milisecond
            cy.wait(2000)
            // Click Logout Button
            cy.get('#logout_sidebar_link').click()
            
        })
      
    })

    
    describe('Login Page - Locked Out User', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        it('Check for Locked Out User - Valid', () => {
            // Enter Username
            cy.get('[data-test=username]').type('locked_out_user')
            // Enter Password
            cy.get('[data-test=password]').type('secret_sauce')
            // Click Login Button
            cy.get('[data-test=login-button]').click()   
            // Error Message
            cy.get('.error-message-container').should('be.visible')        
        })
      
    })

    describe('Login Page - Problem User', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        it('Check for Problem User - Valid', () => {
            // Enter Username
            cy.get('[data-test=username]').type('problem_user')
            // Enter Password
            cy.get('[data-test=password]').type('secret_sauce')
            // Click Login Button
            cy.get('[data-test=login-button]').click()
            // After Login Contains Product That Shoud Visible
            cy.contains('Product').should('be.visible')
            // Click Menu Button
            cy.get('#react-burger-menu-btn').click()
            // Wait for 2000 Milisecond
            cy.wait(2000)
            // Click Logout Button
            cy.get('#logout_sidebar_link').click()
            
        })
      
    })

    describe('Login Page - Performance Glitch User', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        it('Check for Performance Glitch User - Valid', () => {
            // Enter Username
            cy.get('[data-test=username]').type('performance_glitch_user')
            // Enter Password
            cy.get('[data-test=password]').type('secret_sauce')
            // Click Login Button
            cy.get('[data-test=login-button]').click()
            // After Login Contains Product That Shoud Visible
            cy.contains('Product').should('be.visible')
            // Click Menu Button
            cy.get('#react-burger-menu-btn').click()
            // Wait for 2000 Milisecond
            cy.wait(2000)
            // Click Logout Button
            cy.get('#logout_sidebar_link').click()
            
        })
      
    })
    
})