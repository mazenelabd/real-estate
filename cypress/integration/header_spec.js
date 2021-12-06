describe('header', () => {
  before(() => {
    cy.visit('/')
  })
  it('have toolbar', () => {
    cy.get('.MuiToolbar-root').should('exist')
  })
})
