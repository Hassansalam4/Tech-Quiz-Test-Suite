describe('Quiz component test', () => {
  beforeEach(() => {
    cy.visit('/');
    // cy.visit('http://localhost:3000/');
  });


  it('should start quiz when button is clicked', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should("not.be.empty")
  });

  it('should anwer questions and comlete quiz', () => {
    cy.get('button').contains('Start Quiz').click();
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('1').click();

    }
    cy.get('.alert-success').should('be.visible');

  });

  it('should restart quiz', () => {
    cy.get('button').contains('Start Quiz').click();
    for (let i = 0; i < 10; i++) {
      cy.get('button').contains('1').click();
    }
    cy.get('button').contains('Take New Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should("not.be.empty")
  });
})