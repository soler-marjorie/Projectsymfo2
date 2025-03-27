describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://127.0.0.1:8000/category/new')
    cy.get('#category_label').type('Roman');
    cy.get('.btn').click();

  })
})