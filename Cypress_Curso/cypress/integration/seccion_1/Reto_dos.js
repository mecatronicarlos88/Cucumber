/// <reference types="Cypress" />
// Para que funcionen los comandos

require('cypress-plugin-tab')
require('cypress-xpath')
describe("Segundo Reto  ", () =>{


    it("Probando la aplicación  ", () =>{
        cy.visit("http://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.wait(1000)

        //buscando
        cy.xpath("//input[@id='searchbox']").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()

        //add
        cy.get("#add").should("be.visible").click()
        cy.get("[name='name']").should("be.visible").type("cypress")
        cy.get("#introduced").should("be.visible").type("2022-05-11").tab().type("2025-05-11")

        //combo
        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16").wait(1500)
        cy.get(".primary").should("be.visible").click()
        cy.xpath("//input[@id='searchbox']").type("cypress")
        cy.get("#searchsubmit").should("be.visible").click()


    })



})//Cierre de describe