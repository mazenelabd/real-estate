describe('about', () => {
  before(() => {
    cy.visit('/')
    cy.findByRole('button', { name: /about/i }).click()
  })
  it('have company about paragraph', () => {
    cy.findByText(/Award winning real estate company in Dubai/i).should(
      'be.visible'
    )
  })
})
