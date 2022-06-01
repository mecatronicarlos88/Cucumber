/// <reference types="Cypress" />
// Para que funcionen los comandos

require('cypress-plugin-tab')

describe("Ejemplo function Tab  ", () =>{


    it("Type con Tab ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#firstName").type('Carlos').tab().
        type('Escutia').tab().
        type("carlos88mecatronica@hotmail.com").tab()
    })



})//Cierre de describe