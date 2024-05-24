class LoginPage {
  USERNAME_INPUT = "input[name=username]";
  PASSWORD_INPUT = "input[name=password]";
  LOGIN_BUTTON = "login-btn";

  openLoginPage() {
    return cy.visit("/login");
  }

  enterUserName(value: string) {
    return cy.get(this.USERNAME_INPUT).type(value);
  }

  enterPassword(value: string) {
    return cy.get(this.PASSWORD_INPUT).type(value);
  }

  clickOnLoginButton() {
    return cy.getByDataTest(this.LOGIN_BUTTON).click();
  }

  checkErrorMessageHaveText(inputName: string, value: string) {
    return cy
      .getByDataTest(`error-message-${inputName}`)
      .should("have.text", value);
  }

  checkErrorMessageIsNotExits(inputName: string) {
    return cy.getByDataTest(`error-message-${inputName}`).should("not.exist");
  }

  checkLoginButtonIsLoading() {
    return cy
      .getByDataTest(this.LOGIN_BUTTON)
      .should("be.disabled")
      .and("have.attr", "data-loading", "true");
  }

  loginByUI(username: string, password: string) {
    this.enterUserName(username);
    this.enterPassword(password);
    this.clickOnLoginButton();
    this.checkLoginButtonIsLoading();
    cy.wait(3000);
    cy.url().should("include", "/panel");
    cy.contains(`username: ${username}`);

    return;
  }
}

const loginPage = new LoginPage();

export default loginPage;
