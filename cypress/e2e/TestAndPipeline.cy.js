describe('Exercice Test and pipeline', () => {
  it('Test 1 : OK', () => {
    cy.visit('https://127.0.0.1:8000/editor')
    cy.get('[href="/editor/new"]').click()

    cy.get('#editor_name').type('Kana');
    cy.get('.btn').click().wait(1000);
    // Verification de redirection
    cy.get('h1').contains('Editor index');
    // Verification de l'ajout  
    cy.get('.table > tbody').should('contain', 'Kana');
  })

  it('Test 2 : L\'éditeur existe déja (pseudo)', () => {
    cy.visit('https://127.0.0.1:8000/editor')
    const editor = "Kana"
    //Act
    cy.get('[href="/editor/new"]').click()
    cy.get('#editor_name').clear().type(editor)
    cy.get('[name="editor"] > .btn').click().wait(1000)
    //Assert
    // Vérification du message d'erreur
    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'L’éditeur existe déjà.');
  })

  it('Test 3 : Les champs sont vide', () => {
    cy.visit('https://127.0.0.1:8000/editor/new')
    cy.get('#editor_name').clear()
    cy.get('.btn').click().wait(1000);

    cy.get('.error-message')
      .should('be.visible')
      .and('contain', 'Le champ est obligatoire.');
  })
})