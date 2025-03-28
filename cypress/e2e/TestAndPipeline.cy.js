describe('Exercice Test and pipeline', () => {
  it('Test 1 : OK', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test 2 : L\'éditeur existe déja (pseudo)', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test 3 : Les champs sont vide', () => {
    cy.visit('https://example.cypress.io')
  })
})