describe('Home View', () => {
  beforeEach(() => {
    cy.visit('/')
      .intercept('http://localhost:3000/api/v1/questions', {fixtures: 'questions-data.json'})
  })

  it('Should display the title of the page', () => {
    cy.get('h1').contains('Sex Education')
  })

  it('Should have a button to access the navigation bar', () => {
    cy.get('#menu-button').click()
      .should('have.attr', 'aria-expanded', 'true')
      .click()
      .should('have.attr', 'aria-expanded', 'false')
  })

  it('Should have a section with a call to action to take the quiz', () => {
    cy.get('.call-to-action-question').contains('Does wearing two condoms offer double protection?')
      .get('.quiz-link').contains('Take the Myth Busting Quiz')
      .click()
      .url().includes('/quiz')
  })

  it('Should have a section where the user can read all facts', () => {
    cy.get('.fact-container')
      .contains('Did you know? 🤔')
      .get('.fact')
      .contains('"A lot of people pass on STIs to others without even knowing. STIs can be spread with symptoms or without. The WHO explains that “[t]he majority of STIs have no symptoms or only mild symptoms that may not be recognized as an STI.” It is important to be tested regularly and to use a condom to prevent STIs as much as possible."')
      .get('.arrow-button').eq(1)
      .click()
      .get('.fact')
      .contains('"Emergency contraception will not impact an existing pregnancy and has no impact if fertilization has already occurred; it merely prevents pregnancy from occurring. Medication abortion terminates an already established pregnancy."')
  })

  it('Should have a footer with the page disclaimer', () => {
    cy.get('footer > p')
      .contains('Please note: This app’s content is provided for general informational purposes only, and under no circumstances should be considered a substitute for professional medical advice, diagnosis or treatment from a qualified physician or healthcare provider.')
  })
})
