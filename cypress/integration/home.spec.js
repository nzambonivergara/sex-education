describe('Home View', () => {
  beforeEach(() => {
    cy.fixture('questions-data').then((json) => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/questions', {
        statusCode: 201,
        body: json})
    })
    cy.visit('/')
  })

  it('Should display the title of the page', () => {
    cy.get('h1').contains('Sex Education')
  })

  it('Should have a button to access the navigation bar', () => {
    cy.get('#menu-button').click()
      .should('have.attr', 'aria-expanded', 'true')
      .get('.nav-links-container').should('be.visible')
      .get('#menu-button').click()
      .should('have.attr', 'aria-expanded', 'false')
      .get('.nav-links-container').should('not.be.visible')
  })

  it('Should have a section with a call to action to take the quiz', () => {
    cy.get('.call-to-action-question').contains('Does wearing two condoms offer double protection?')
      .get('.quiz-link').contains('Take the Myth Busting Quiz')
      .click()
      .url().should('include', '/quiz')
  })

  it('Should have a section where the user can read all facts', () => {
    cy.get('.fact-container')
      .contains('Did you know? 🤔')
      .get('.fact')
      .contains('"You cannot tell if someone is gay, remember, ones gender expression is not representative of their identiy, sexual oreintation, or more."')
      .get('.arrow-button').eq(1)
      .click()
      .get('.fact')
      .contains('"There is no way to know by looking at someone (even if it\'s up close and personal!) whether they have an STI or not. The only way to know for sure if a person has an STI is for that person to get tested."')
  })

  it('Should have a footer with the page disclaimer', () => {
    cy.get('footer > p')
      .contains('Please note: This app’s content is provided for general informational purposes only, and under no circumstances should be considered a substitute for professional medical advice, diagnosis or treatment from a qualified physician or healthcare provider.')
  })
})
