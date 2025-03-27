describe('Test NOTOK', () => {
  it('Ne permet pas d\'ajouter une catégorie sans nom', () => {
    cy.visit('https://127.0.0.1:8000/category/new')
    cy.get('#category_label').clear();
    cy.get('.btn').click().wait(1000);
    
    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'Le champ est obligatoire.');
  })
})