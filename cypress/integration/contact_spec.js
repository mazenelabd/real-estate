describe('contact', () => {
  before(() => {
    cy.visit('/')
    cy.findByRole('button', { name: /contact us/i }).click()
  })
  it('user is able to write a message and get a response as an alert', async () => {
    cy.findByRole('textbox', { name: /first name/i }).type('Mazen')
    cy.findByRole('textbox', { name: /last name/i }).type('elabd')
    cy.findByRole('textbox', { name: /email address/i }).type(
      'mazen@example.com'
    )
    cy.findByRole('textbox', { name: /phone number/i }).type('01069624209')
    cy.findByRole('textbox', { name: /description/i }).type(
      'testing lugar website'
    )
    cy.get('.MuiBox-root > .ButtonUnstyled-root').click()
    cy.get('.Toastify__toast-body > :nth-child(1)').should('be.visible')
    await cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible')
  })
})
