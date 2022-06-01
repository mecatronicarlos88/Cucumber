/// <reference types="Cypress" />
// Para que funcionen los comandos


describe("Seccion 1 Validando el título", () =>{


    it("Test Validar el título de la página", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        
        cy.log("Ok la función title funciona bien")
    })



})//Cierre de describe