import loginPage from "./pages/loginPage";

describe("Login Test in UI", () => {
  beforeEach(() => {
    loginPage.openLoginPage();
  });

  it("Empty fields", () => {
    loginPage.clickOnLoginButton();

    cy.get("input").eq(0).should("be.focused");

    loginPage.checkErrorMessageHaveText("username", "username is required");

    loginPage.checkErrorMessageHaveText(
      "password",
      "Password must be at least 8 characters long"
    );

    loginPage.enterUserName("A");
    loginPage.checkErrorMessageIsNotExits("username");

    loginPage.enterPassword("12345678");
    loginPage.checkErrorMessageIsNotExits("password");
  });

  it("Enter wrong information", () => {
    loginPage.enterUserName("0000000");
    loginPage.enterPassword("00000000000");
    loginPage.clickOnLoginButton();
    loginPage.checkLoginButtonIsLoading();
    cy.wait(3000);
    cy.contains("There is no such user");
  });

  it("Password must be at least 8 characters long", () => {
    loginPage.enterUserName("0000000");
    loginPage.enterPassword("0000000");
    loginPage.clickOnLoginButton();
    loginPage.checkErrorMessageHaveText(
      "password",
      "Password must be at least 8 characters long"
    );
  });

  it("Successful login", () => {
    cy.fixture("admin-user.json").then(({ username, password }) => {
      loginPage.loginByUI(username,password)
    });
  });

  it("Redirect to login page after sign out", () => {
    cy.fixture("admin-user.json").then(({ username, password }) => {
      loginPage.loginByUI(username,password)
    });
    cy.wait(3000);
    cy.contains("Sign Out").click();

    cy.url().should("include", "/login");

  });
});
