describe('Cypress APIs', () => {
  it('should verify baseUrl is set correctly', () => {
    const myConfig = Cypress.config();
    expect(myConfig).to.have.property('baseUrl', 'http://localhost:3000');
  });

  it('should load the login page with all elements', () => {
    cy.visit('http://localhost:3000'); 

    cy.get('.login-container').should('be.visible');
    cy.get('.title').should('contain', 'Welcome to Aladia');
    cy.get('.email-input').should('be.visible');
    cy.get('.enter-button').should('be.visible');
    cy.get('.social-button.google').should('be.visible');
    cy.get('.social-button.facebook').should('be.visible');
    cy.get('.social-button.apple').should('be.visible');
    cy.get('.terms').should('contain', 'Terms & Conditions');
  });

  it('should navigate to /welcome on existing email', () => {
    cy.visit('http://localhost:3000/signup'); 
    cy.get('input[placeholder="Name"]').type('John');
    cy.get('input[placeholder="Surname"]').type('Doe');
    cy.get('input[placeholder="Email Address"]').type('existing@example.com');
    cy.get('input[placeholder="Password"]').type('password123');
    cy.get('input[placeholder="Confirm Password"]').type('password123');
    cy.get('.term input[type="checkbox"]').check();
    cy.get('.btn').click(); 
    cy.visit('http://localhost:3000'); 
    cy.get('.email-input').type('existing@example.com');
    cy.get('.enter-button').click();

    cy.url().should('include', '/welcome');
  });

  it('should navigate to /signup on new email', () => {
    cy.visit('http://localhost:3000'); 

    cy.get('.email-input').type('newuser@example.com');
    cy.get('.enter-button').click();

    cy.url().should('include', '/signup');
  });

  it('should successfully register a new user', () => {
    cy.visit('http://localhost:3000/signup'); 

    cy.get('input[placeholder="Name"]').type('Jane');
    cy.get('input[placeholder="Surname"]').type('Doe');
    cy.get('input[placeholder="Email Address"]').type('jane.doe@example.com');
    cy.get('input[placeholder="Password"]').type('password123');
    cy.get('input[placeholder="Confirm Password"]').type('password123');
    
    cy.get('.term input[type="checkbox"]').check();

    cy.get('.btn').click();

    cy.url().should('include', '/welcome');
    cy.contains('You have successfully registered!').should('be.visible');
  });
});