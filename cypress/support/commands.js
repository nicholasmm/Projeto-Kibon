Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ()=>{
    cy.get('#nome').type('Nicholas')
    cy.get('#email').type('nicholaslegends1234@gmail.com')
    cy.get('#proposta').type('este é um teste') 
})