describe('Saved Facts Page', () => {
  beforeEach(() => {
    cy.fixture('questions-data').then((json) => {
      cy.intercept('GET', 'https://sexual-health-api.herokuapp.com/api/v1/questions', {
        statusCode: 201,
        body: json})
    })
    cy.visit('/home')
  })

  it('Should be able to navigate to the Saved Facts url and see the title and a message if no facts have been saved', () => {
    cy.get('a[href="/saved"]').click()
      .get('h2').contains('Saved Facts')
      .get('h3').contains('You haven\'t saved any facts yet :(')
  })

  it('Should be able to  save facts and display them in the /saved endpoint', () => {
    cy.get('.fact').contains('You cannot tell if someone is gay, remember, ones gender expression is not representative of their identiy, sexual oreintation, or more.')
      .get('#save-fact-button').click()
      .get('a[href="/saved"]').click()
      .get('ol > li').eq(0).contains('You cannot tell if someone is gay, remember, ones gender expression is not representative of their identiy, sexual oreintation, or more.')
  })

})
