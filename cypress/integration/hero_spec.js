describe('hero', () => {
  before(() => {
    cy.visit('/')
  })
  it('have company slogan', () => {
    cy.findByText(/a home is built with love and dreams/i).should('exist')
  })
})
