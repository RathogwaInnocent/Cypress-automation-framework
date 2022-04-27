/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () =>{
    it("Should be able to submit a sucessessful submission via conatc us from", () => {
        
        cy.visit("https://www.automationteststore.com")
        cy.xpath("//a[contains(@href, 'contact')]").click();
        //cy.get("a[href$='contact']").click;
        cy.get('#ContactUsFrm_first_name').type("Innocent")
        cy.get('#ContactUsFrm_email').type("innrat004@Rathogwa.com")
        cy.get('#ContactUsFrm_email').should('have.attr','name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    });

})