describe('Testes E2E', () => {
  beforeEach( function (){
    cy.visit('./index.html')

  })
  it('Verifica campos digitáveis', () => {
    cy.get('#nome').should('have.not.value').type('Nicholas Martins Monteiro')
    .should('have.value', 'Nicholas Martins Monteiro')

    cy.get('#email').should('have.not.value').type('testeuser@gmail.com')
    .should('have.value', 'testeuser@gmail.com')

    cy.get('#proposta').should('have.not.value').type('Isto é um teste')
    .should('have.value', 'Isto é um teste')
  })

  it('Verifica se formulário é enviado com os campos "nome" e "proposta" não preenchidos', ()=>{
    cy.get('#nome').should('have.not.value').should('have.attr', 'required')
    
    cy.get('#email').should('have.not.value').type('testeuser@gmail.com')
    .should('have.value', 'testeuser@gmail.com')

    cy.get('#proposta').should('have.not.value')

    cy.get('.botao').click()
  })

  it('Verifica que todos os campos de digitação tem o atributo "required"', () =>{
    cy.get('#nome').should('have.attr', 'required')

    cy.get('#email').should('have.attr', 'required')

    cy.get('#proposta').should('have.attr', 'required')
  })

  it('preenche corretamente os campos do formulário e envia ele com sucesso', ()=>{
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.botao').click()
    cy.get('#popup').should('be.visible')
  })
  
  it.only('Mostra POPUP de Email Enviado com sucesso', ()=>{
    cy.get('#popup').should('not.be.visible').invoke('show').should('be.visible')
  })

  it('verifica os botões de encaminhamento para Whatsapp e Instagram', ()=>{
    
    cy.get('.contatobtn1 a').should('have.attr', 'target', '_blank')
    cy.get('.contatobtn a').should('have.attr', 'target', '_blank')

  })

  it('acessa os links de encaminhamento dos botões de Instagram e Whatsapp', ()=>{
    cy.get('.contatobtn1 a').invoke('removeAttr', 'target').click()

    cy.visit('./index.html')

    cy.get('.contatobtn a').invoke('removeAttr', 'target').click()
  })
})



