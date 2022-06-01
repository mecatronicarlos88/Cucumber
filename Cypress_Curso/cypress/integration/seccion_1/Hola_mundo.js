describe("Bienvenido al curso de Cypress seccion1 ", () =>{


    it("Mi primer Test -> Hola mundo", () =>{
        cy.log("Hola mundo")
        cy.wait(4000)
    })

    it("Segundo tesr -> campo name", () =>{
        cy.visit("https://demoqa.com/text-box")

        cy.get("#userName").type("Jose Carlos")
        cy.wait(4000)

    })


})//Cierre de describe