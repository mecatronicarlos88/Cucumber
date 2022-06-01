/// <reference types="Cypress" />

// Para que funcionen los comandos

require('cypress-plugin-tab')

describe(" Primer Reto ", () =>{


    it("  ", () =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        //Agregando campo

        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1000)
        cy.get("#firstName").should("be.visible").type("Carlos").tab().
        type("Escutia").tab().
        type("carlos88mecatronica@hotmail.com").tab().
        type("33").tab().
        type("35000").tab().
        type("Sistemas")
        cy.get("#submit").should("be.visible").click()

        cy.get("#searchBox").should("be.visible").type("Carlos")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        //Editar un campo

        cy.get("#edit-record-2").should("be.visible").click()
        cy.wait(1000)
        cy.get("#age").should("be.visible").clear().type("50")
        cy.wait(1500)
        cy.get("#salary").should("be.visible").clear().type("50000")
        cy.get("#submit").should("be.visible").click()

        //Borrando el campo
        cy.wait(2000)
        cy.get("#delete-record-2").should("be.visible").click()

        

        
    })



})//Cierre de describe