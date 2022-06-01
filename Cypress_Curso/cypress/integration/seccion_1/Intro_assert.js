/// <reference types="Cypress" />
// Para que funcionen los comandos


describe(" Introduccion a los Asserts ", () =>{


    it("Demo de los Assets ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        
        cy.get("#firstName").should("be.visible").type("Carlos")
        cy.wait(1000)
        cy.get("#lastName").should("be.visible").type("Escutia")
        cy.wait(1000)
        cy.get("#userEmail").should("be.visible").should("be.enabled").type("carlos88mecatronica@hotmail.com")



    })



})//Cierre de describe