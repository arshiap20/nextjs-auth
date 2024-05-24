import { DEFAULT_LOGIN_REDIRECT } from "../../src/shared/routes";
import loginPage from "./pages/loginPage";

describe("check protected routes", () => {
  it("The guest user should not have access to the admin panel", () => {
    cy.visit("/panel");
    cy.url().should("include", "/login");

    cy.visit("/admin-panel");
    cy.url().should("include", "/login");
  });

  it("The logged in user should not have access to the login and register page", () => {
    loginPage.openLoginPage();
    cy.fixture("admin-user.json").then(({ username, password }) => {
      loginPage.loginByUI(username, password);
    });

    cy.visit("/login");
    cy.url().should("include", DEFAULT_LOGIN_REDIRECT);

    cy.visit("/register");
    cy.url().should("include", DEFAULT_LOGIN_REDIRECT);
  });

  it("User should not have access to admin panel", () => {
    loginPage.openLoginPage();
    cy.fixture("user.json").then(({ username, password }) => {
      loginPage.loginByUI(username, password);
    });

    cy.contains("Go To Admin Panel").should("not.exist")

    cy.visit("/admin-panel")
    cy.url().should("include", DEFAULT_LOGIN_REDIRECT);
  });

  it
});
