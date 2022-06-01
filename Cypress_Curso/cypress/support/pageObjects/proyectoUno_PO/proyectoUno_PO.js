class ProyectoUno_PO{


    
    
    visitHome(){
        let tiempo=1000
        before(()=>{
            cy.visit('https://demoqa.com/text-box'),
            cy.title().should('eq','ToolsQA')
            cy.wait(tiempo)
        })
    }

    SeccionUno(nombre,email,t){
        let tiempo=t
        cy.xpath("//*[@id='userName']").clear().should('be.visible').type(nombre)
        cy.wait(tiempo)
        cy.xpath("//*[@id='userEmail']").clear().should('be.visible').type(email)
        cy.wait(tiempo)
    
    }

    SeccionDos(direccion,direccion_trabajo,t){
        let tiempo=t
        cy.xpath("//*[@id='currentAddress']").clear().should('be.visible').type(direccion)
        cy.wait(tiempo)
        cy.xpath("//*[@id='permanentAddress']").clear().should('be.visible').type(direccion_trabajo)
        cy.wait(tiempo)
    
    }
    
}//Final

export default ProyectoUno_PO;