/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () =>{
    it.only("Should be able to submit a sucessessful submission via conatc us from", () => {
        
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property', 'charset').and('eq','UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        //cy.get('#contact-us > .thumbnail').click({force: true})
        cy.get('[name="first_name"]').type("Innocent")
        cy.get('[name="last_name"]').type("Rathogwa")
        cy.get('[name="email"]').type("innrat004@gmail.com")
        cy.get('textarea.feedback-input').type("I can I enroll into your course")
        cy.get('[type="submit"]').click();
    });
    
    it("Should npt be able to submit a sucess successful submission via conatact us as all fields are required", () =>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Uvhona")
        cy.get('[name="last_name"]').type("Rathogwa")
        //cy.get('[name="email"]').type("uvhrat004@gmail.com")
        cy.get('textarea.feedback-input').type("I can I enroll into your course")
        cy.get('[type="submit"]').click();
});

})