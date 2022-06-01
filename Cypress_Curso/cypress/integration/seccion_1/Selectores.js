/// <reference types="Cypress" />
// Para que funcionen los comandos

require('cypress-xpath')
describe("Tipos de Selectores  ", () =>{


    it("Selector por id  ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type("Carlos")
        cy.get("#userEmail").should("be.visible").type("carlos88mecatronica@hotmail.com")
        
    })

    it("Selector por Atributo  ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("[placeholder='Full Name']").should("be.visible").type("Carlos Escutia")
        
    })

    
    it.only("Selector por Xpath  ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Carlos Escutia")
        cy.wait(1000)
        cy.xpath("//*[@id='userEmail']").should("be.visible").type("carlos88mecatronica@hotmail.com")
        cy.wait(1000)
        cy.xpath("//*[@id='currentAddress']").should("be.visible").type("Valle de Aragon 3ra Secc")

    })

    it("Selector por contains  ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()

    
    })

    it("Selector por copy_selector  ", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get("#userNumber").should("be.visible").type("5540205604")

    })


   

})//Cierre de describe