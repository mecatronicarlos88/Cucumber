/// <reference types="Cypress" />
// Para que funcionen los comandos


describe("Ejemplo de page Up", () => {

    it("Type pageUp", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1500)

        cy.get('#userName').type('{pageup}')
        cy.wait(1500)

        cy.get('#userName').type('{pagedown}')
        cy.wait(1500)
    })

})

describe("Ejemplo de page Down", () => {

    it("Type pageDown", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')
        cy.wait(1500)

        cy.get('#userName').type('{pagedown}')
        cy.wait(1500)
    })

})//Cierre de describe