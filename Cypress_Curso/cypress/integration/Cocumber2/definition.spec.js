Given('Abrir el navegador principal',()=>{
    cy.visit("https://demoqa.com/text-box")
})

When('Cargando el nombre',()=>{
    cy.get("#userName").should('be.visible').type('Carlos')
    cy.wait(500)
})

When('Cargando el email',()=>{
    cy.get("#userEmail").should('be.visible').type('carlos88mecatronica@hotmail.com')
    cy.wait(500)
})

And('Cargando la Dirección',()=>{
    cy.get("#currentAddress").should('be.visible').type('Dirección uno')
    cy.wait(500)
})

Then('Validar el nombre de la Página',()=>{
    cy.title().should('eq','ToolsQA')
    cy.wait(1000)
})