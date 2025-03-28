describe('Test Edit category', () => {
  it('Le nom de catégorie à changé', () => {
    cy.visit('https://127.0.0.1:8000/category')
    cy.get('[href="/category/1/edit"]').click();
    cy.get('#category_label').clear();
    cy.get('#category_label').type('Livre');
    cy.get('[name="category"] > .btn').click();

    // Vérifier que la page de catégorie affiche le nouveau nom
    cy.visit('https://127.0.0.1:8000/category');
    cy.get('.table > tbody').should('contain', 'Livre');
  })


  it('Modification category valide', ()=>{
    //Arrange
    cy.visit('https://127.0.0.1:8000/category')
    const category = "Nouveau"
    const id = 1;
    //Act
    cy.get('[href="/category/'+ id +'/edit"]').click()
    cy.wait(1000)
    cy.get('#category_label').clear().type(category)
    cy.get('[name="category"] > .btn').click()
    //Assert
    cy.wait(500)
    cy.contains("table tr", category).should("exist")
})

it('Modification category non identique', ()=>{
    //Arrange
    cy.visit('https://127.0.0.1:8000/category')
    const category = "Nouveau"
    const id = 2;
    //Act
    cy.get('[href="/category/'+ id +'/edit"]').click()
    cy.wait(1000)
    cy.get('#category_label').clear().type(category)
    cy.get('[name="category"] > .btn').click()
    //Assert
    cy.wait(500)
    cy.contains("table tr", category).should("exist")
})

it('Modification category Doublon', ()=>{
    //Arrange
    cy.visit('https://127.0.0.1:8000/category')
    const category = "SF"
    const categoryDoublon = "Nouveau"
    const id = 2;
    //Act
    cy.get('[href="/category/'+ id +'/edit"]').click()
    cy.wait(1000)
    cy.get('#category_label').clear().type(categoryDoublon)
    cy.get('[name="category"] > .btn').click()
    //Assert
    cy.wait(500)
    cy.get('.container > .break-long-words').contains("An exception")
})
})