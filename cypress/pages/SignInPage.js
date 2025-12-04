class SignInPage {
  // Step 0: Close modal if it appears
  closeInitialModal() {
    cy.get("body").then(($body) => {
      const modal = $body.find('button[aria-label="Close"]');
      if (modal.length && modal.is(":visible")) {
        cy.wrap(modal).click({ force: true });
      }
    });
  }

  // Step 1 & 2: Navigate to Student Login
  navigateToStudentLogin() {
    // Step 0: Close modal if it appears (wait up to 15s)
    cy.get("body").then(($body) => {
      if ($body.find('button[aria-label="Close"]').length) {
        cy.get('button[aria-label="Close"]', { timeout: 15000 }).then(
          ($btn) => {
            if ($btn.is(":visible")) {
              cy.wrap($btn).click({ force: true });
            }
          }
        );
      }
    });

    // Step 1: Click Login menu (#fade-button)
    cy.get("#fade-button", { timeout: 10000 })
      .should("exist")
      .click({ force: true });

    // Step 2: Wait for menu to appear and click "Login as a Student"
    cy.get("ul[role='menu']", { timeout: 10000 }).within(() => {
      cy.contains("Login as a Student").then(($li) => {
        // force click because it might still be covered by a fading overlay
        cy.wrap($li).click({ force: true });
      });
    });
  }

  // Step 3: Login using email + password
  loginWithValidEmail(email, password) {
    cy.url({ timeout: 20000 }).should("include", "/applynow");

    cy.get('input[name="email"]', { timeout: 20000 })
      .should("be.visible")
      .clear()
      .type(email);

    cy.get('button[type="submit"]').should("not.be.disabled").click();

    cy.get('input[name="password"]', { timeout: 20000 })
      .should("be.visible")
      .type(password);

    cy.get('button[type="submit"]').click();

    // ✅ Final success assertion (must match dashboard / redirect)
    cy.url({ timeout: 20000 }).should("not.include", "/applynow");
  }

  loginWithInvalidEmail(email) {
    // Ensure URL is correct
    cy.url({ timeout: 15000 }).should("include", "/applynow");

    // Clear & type invalid email
    cy.get('input[name="email"]')
      .scrollIntoView()
      .clear({ force: true })
      .type(email, { force: true });

    // Click submit button
    cy.get('button[type="submit"]').click({ force: true });

    // Optional: Check for error message
    cy.contains(/Failed to get student|not registered|error/i, {
      timeout: 10000,
    }).should("be.visible");
  }
}

export default SignInPage;
