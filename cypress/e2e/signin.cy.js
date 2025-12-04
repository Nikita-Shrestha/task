import SignInPage from "../pages/SignInPage";
const signIn = new SignInPage();

describe("WiseAdmit Student Sign-In Automation (Email only)", function () {
  beforeEach(function () {
    cy.fixture("user").then(function (data) {
      this.data = data;
    });

    cy.visit("https://www.wiseadmit.io/");
    signIn.navigateToStudentLogin();
  });

  it("✅ Positive: Login with valid email credentials", function () {
    signIn.loginWithValidEmail(
      this.data.validUser.email,
      this.data.validUser.password
    );
  });

  it("❌ Negative: Login with invalid email", function () {
    signIn.loginWithInvalidEmail(this.data.invalidUser.email);
  });

  it("❌ Negative: Login button should be disabled for blank email", () => {
    cy.url({ timeout: 20000 }).should("include", "/applynow");

    cy.get('input[name="email"]', { timeout: 20000 })
      .should("be.visible")
      .clear();

    cy.get('button[type="submit"]').should("be.disabled");

    cy.get('input[name="password"]').should("not.exist");
  });
});
