/// reference types= "Cypress" />

it("Login - Incorrect email", function(){
    cy.visit('http://automationpractice.com/index.php');
    cy.get('.login').click();
    cy.get('#email').type('testmu002@mailinator.com');
    cy.get('#passwd').type('Muh41m1n');
    cy.get('#SubmitLogin > span').click();
    cy.wait(1000);
})

it("Login - Incorrect password and correct email", function(){
    cy.get('#email').clear().type('testmu001@mailinator.com');
    cy.get('#passwd').clear().type('Muh41m1n1');
    cy.get('#SubmitLogin > span').click();
})

it("Login - Correct email & password", function(){
    cy.get('#email').clear().type('testmu001@mailinator.com');
    cy.get('#passwd').clear().type('Muh41m1n');
    cy.get('#SubmitLogin > span').click();
    cy.get('.logout').click();
})


