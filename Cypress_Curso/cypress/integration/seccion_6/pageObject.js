import ProyectoUno_PO from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO'
/// <reference types="Cypress" />
// Para que funcionen los comandos

//import 'cypress-file-upload';
//requiere('@4tw/ypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Page objects Models', () =>{

    const master=new ProyectoUno_PO()

    master.visitHome()

    Cypress.on('uncaught:exception',(err, runnable) => {
        return false
    })


    it('Test Seccion Uno', () =>{
        master.SeccionUno("Carlos","carlos88mecatronica@hotmail.com",200)

    })

    it('Test Seccion Dos', () =>{
        master.SeccionDos("Valle de Toluca 3ra seccion","Cerro de las Torres GNP",200)

    })

    it('Test Seccion Tres', () =>{
        master.SeccionUno("Carlos","carlos88mecatronica@hotmail.com",200)
        master.SeccionDos("Valle de Toluca 3ra seccion","Cerro de las Torres GNP",200)

    })

    });

