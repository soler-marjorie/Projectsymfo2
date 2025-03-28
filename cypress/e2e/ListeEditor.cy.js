describe('Afficher la liste des éditeurs', () => {
  it('vide (pas d\'éditeur)', () => {
    cy.visit('https://127.0.0.1:8000/editor')
  })

  it('Plusieurs éditeurs dans la liste', () => {
    cy.visit('https://127.0.0.1:8000/editor')
  })
})