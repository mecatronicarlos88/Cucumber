/// <reference types="Cypress" />
// Para que funcionen los comandos


describe("Opciones de Click  ", () =>{


    it("Click sencillo  ", () =>{
        cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get("btnLogin").should("be.visible").click()
        cy.get("")
        
    })



})//Cierre de describe