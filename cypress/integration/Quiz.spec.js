describe('Quiz', () => {
  beforeEach(() => {
    cy.fixture('questions-data').then((json) => {
      cy.intercept('GET', 'https://sexual-health-api.herokuapp.com/api/v1/questions', {
        statusCode: 201,
        body: json})
    })
    cy.visit('/quiz')
  })

  it('Should have a title', () => {
    cy.get('h2').contains('Myth Busting Quiz')
  })

  it('Should display the first question', () => {
    cy.get('.question').contains('You can\'t tell when someone is gay.')
  })

  it('Should be able to click the true button, get the result and answer', () => {
    cy.get('.true-label').click()
      .get('.result').contains('✅ Awesome job!')
      .get('.fact-container > p').eq(1)
      .contains('You cannot tell if someone is gay, remember, ones gender expression is not representative of their identiy, sexual oreintation, or more.')
  })

  it('Should let the user know what percentage of they have completed', () => {
    cy.get('.true-label').click()
      .get('form > p').contains('You have completed 50% of the quiz!')
  })

  it('Should be able to click the false button, get the result and answer', () => {
    cy.get('.false-label').click()
      .get('.result').contains('❌ Let’s look at that one again!')
      .get('.fact-container > p').eq(1)
      .contains('You cannot tell if someone is gay, remember, ones gender expression is not representative of their identiy, sexual oreintation, or more.')
  })

  it('Should not be able to navigate to another question until they have answered', () => {
    cy.get('#next-button')
      .should('have.attr', 'disabled')
      .get('.true-label').click()
      .get('#next-button')
      .should('not.have.attr', 'disabled')
      .get('#next-button').click()
  })

  it('Should show the next question once the next arrow button is clicked', () => {
    cy.get('.true-label').click()
      .get('#next-button').click()
      .get('.question').contains('You can tell that someone has an STI by looking at them.')
  })

  it('Should show the previoius question once the previous arrow button is clicked', () => {
    cy.get('.true-label').click()
      .get('#next-button').click()
      .get('.false-label').click()
      .get('#previous-button').click()
      .get('.question').contains('You can\'t tell when someone is gay.')
  })

  it('Should show results page once the user completes the test', () => {
    cy.get('.true-label').click()
      .get('#next-button').click()
      .get('.false-label').click()
      .get('#next-button').click()
      .get('.complete-quiz-message').contains('Excellent! You crushed it.')
      .get('.score').contains('You got 100% of the questions right!')
  })

  it('Should have a button to retake the quiz', () => {
    cy.get('.true-label').click()
      .get('#next-button').click()
      .get('.false-label').click()
      .get('#next-button').click()
      .get('.retake-button').click()
      .get('.question').contains('You can\'t tell when someone is gay.')
  })

  it('Should have a button to return to Home', () => {
    cy.get('.true-label').click()
      .get('#next-button').click()
      .get('.false-label').click()
      .get('#next-button').click()
      .get('.home-link').click()
      .url().should('include', '/home')
  })
})
