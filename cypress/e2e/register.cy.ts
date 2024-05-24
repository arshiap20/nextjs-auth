import registerPage from "./pages/registerPage";

describe("Register Test in UI", () => {
  beforeEach(() => {
    registerPage.openRegisterPage();
  });
  it("Empty fields", () => {
    registerPage.clickOnRegisterButton();

    registerPage.checkErrorMessageHaveText("username", "username is required");
    registerPage.checkErrorMessageHaveText(
      "phoneNumber",
      "phoneNumber is required"
    );
    registerPage.checkErrorMessageHaveText(
      "password",
      "Password must be at least 8 characters long"
    );
    registerPage.checkErrorMessageHaveText(
      "confirm",
      "confirm-password is required"
    );
  });

  it("should match password and confirm password", () => {
    registerPage.enterPassword("000000000000");
    registerPage.enterConfirm("0000000000000");
    registerPage.clickOnRegisterButton();

    registerPage.checkErrorMessageHaveText("confirm", "Passwords don't match");

    registerPage.enterPassword("0");
    registerPage.clickOnRegisterButton();

    registerPage.checkErrorMessageIsNotExits("confirm");
  });

  it("checks if username and phonenumber are already in use", () => {
    cy.fixture("admin-user.json").then(({ username }) => {
      registerPage.enterUserName(username);
      registerPage.enterPhoneNumber("09191102042");
      registerPage.enterPassword("000000000000");
      registerPage.enterConfirm("000000000000");
      registerPage.clickOnRegisterButton();
      registerPage.checkRegisterButtonIsLoading();

      cy.wait(3000)
      
      cy.contains("username or phoneNumber is already exist");
    });
  });
});
