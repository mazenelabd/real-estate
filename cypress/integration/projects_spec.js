describe('projects', () => {
  before(() => {
    cy.visit('/')
    cy.findByRole('button', { name: /our projects/i }).click()
  })
  it('user is able to navigate through the tabs', () => {
    cy.get('.MuiTabs-root > :nth-child(1)').should('not.be.visible')
    cy.get('.MuiTabs-root > :nth-child(4)').click()
    cy.get('.MuiTabs-root > :nth-child(1)').should('be.visible')
  })
})
