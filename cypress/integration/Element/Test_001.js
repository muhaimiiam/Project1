/// <reference types="Cypress" />

describe('UI Element test', function(){
    // it('Verify Text Box', function(){

    //     cy.visit('https://demoqa.com/elements');
    //     cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    //     cy.get('#userName').type('Test');
    //     cy.get('#userEmail').type('Test@gmail.com');
    //     cy.get('#currentAddress').type('Test');
    //     cy.get('#permanentAddress').type('Test');
    //     cy.get('#submit').click();
    // })

    // //CheckBox

    // it('Verify Checkbox', function(){
    //     cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
    //     cy.get('.rct-collapse > .rct-icon').click();
    //     cy.wait(2000);
    //     // cy.get('#tree-node-downloads').check({force: true}).should('be.checked')
    //     cy.get('#tree-node-desktop').check({force: true}).should('be.checked');
    //     cy.get('#tree-node-documents').check({force: true}).should('be.checked');
    //     cy.get('#tree-node-downloads').check({force: true}).should('be.checked');

    //     cy.get('#tree-node-home').uncheck({force: true}).should('not.be.checked');
        
    // })

    // //RadioButton
    // it('Verify Radio Button', function(){
    //     cy.wait(2000);
    //     cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click();
    //     cy.get('#impressiveRadio').check({force: true}).should('be.checked');

    // })

    // it('Verify Web Table', function(){
    //     cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
    //     cy.get('#addNewRecordButton').click();
    //     cy.wait(2000);

    //     //input data
    //     cy.get('#firstName').type('004');
    //     cy.get('#lastName').type('Test');
    //     cy.get('#userEmail').type('Test04@gmail.com');
    //     cy.get('#age').type('11');
    //     cy.get('#salary').type('11000');
    //     cy.get('#department').type('Department 001')
    //     cy.get('#submit').click();

    //     //search data
    //     cy.wait(2000);
    //     cy.get('#searchBox').type('Alden{enter}');

    //     //edit data
    //     cy.get('#edit-record-2 > svg').click();
    //     cy.wait(2000);
    //     cy.get('#firstName').clear().type('Adam');
    //     cy.get('#lastName').clear().type('Idris');
    //     cy.get('#userEmail').clear().type('Test@gmail.com');
    //     cy.get('#age').clear().type('32');
    //     cy.get('#salary').clear().type('12000');
    //     cy.get('#department').clear().type('Department 002')
    //     cy.get('#submit').click();

    //     //search data
    //     cy.wait(2000);
    //     cy.get('#searchBox').clear().type('Adam{enter}');

    // })

    it('Verify Buttons', function(){
        // cy.wait(2000);
        cy.visit('https://demoqa.com/elements');
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click();
        
        // Double click
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('be.visible').should('have.text','You have done a double click');

        // Right click
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('be.visible').should('have.text','You have done a right click');
    })

})