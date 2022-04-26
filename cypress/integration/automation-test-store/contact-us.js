/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () =>{
    it("Should be able to submit a sucessessful submission via conatc us from", () => {
        
        cy.visit("https://www.automationteststore.com")
        //cy.get('#contact-us > .thumbnail').click({force: true})
        cy.get('[name="first_name"]').type("Innocent")
        cy.get('[name="last_name"]').type("Rathogwa")
        cy.get('[name="email"]').type("innrat004@gmail.com")
        cy.get('textarea.feedback-input').type("I can I enroll into your course")
        cy.get('[type="submit"]').click();
    });

})