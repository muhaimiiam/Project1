/// <reference types="Cypress" />

it('Checkout test', function(){

    cy.visit('http://automationpractice.com/index.php');
    cy.get('.login').click();
    cy.get('#email').type('testmu001@mailinator.com');
    cy.get('#passwd').type('Muh41m1n');
    cy.wait(1000)
    cy.get('#SubmitLogin > span').click();
    cy.get('#search_query_top').type('blouses{enter}');
    cy.get('.ajax_add_to_cart_button > span').click();
    cy.get('.button-container > .button-medium > span').click();
    cy.get('.cart_navigation > .button > span').click();
    cy.wait(1000)
    cy.get('.cart_navigation > .button > span').click();
    cy.get('#cgv').check();
    cy.get('.cart_navigation > .button > span').click();
    cy.get('.bankwire').click();
    cy.get('#cart_navigation > .button > span').click();
    cy.wait(1000)
    cy.get('.logout').click();

})