describe('Resources Page', () => {
  beforeEach(() => {
    cy.fixture('questions-data').then((json) => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/questions', {
        statusCode: 201,
        body: json})
    })
    cy.visit('/resources')
  })

  it('Should have a title', () => {
    cy.get('h2').contains('Resources')
  })

  it('Should show a video', () => {
    cy.get('iframe').should('have.attr', 'src', 'https://www.youtube.com/embed/Xo3Cnfhf9Q8')
  })

  it('Should have a link to search for health clinics', () => {
    cy.get('a').eq(3)
      .should('have.attr', 'href', 'https://www.bedsider.org/where_to_get_it')
      .contains('Find a Health Center Here!')
  })

  it('Should have a link to learn more about birth control', () => {
    cy.get('a').eq(4)
      .should('have.attr', 'href', 'https://www.bedsider.org/birth-control')
      .contains('Learn More About Birth Control!')
  })

  it('Should have a link to learn more about STIs', () => {
    cy.get('a').eq(5)
      .should('have.attr', 'href', 'https://www.teensource.org/std')
      .contains('Learn More About STIs!')
  })

  it('Should have a link to learn more about sexual orientation and gender', () => {
    cy.get('a').eq(6)
      .should('have.attr', 'href', 'https://www.teensource.org/lgbtq')
      .contains('Sexual Orientation & Gender!')
  })

  it('Should have a link to go back to home', () => {
    cy.get('.home-link').click()
      .url().should('include', '/home')
  })
})
