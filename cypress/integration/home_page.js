///<reference types = "cypress" />

describe('open google home page', () => {
    it('google home page', () => {
      cy.visit('https://www.google.com')
            
           cy.get('#L2AGLb > .jyfHyd').first().click()
            cy.get('.gLFyf').type('end to end testing{enter}')
   
    })
  })