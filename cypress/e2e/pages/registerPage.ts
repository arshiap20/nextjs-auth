
class RegisterPage {
  USERNAME_INPUT = "input[name=username]";
  PASSWORD_INPUT = "input[name=password]";
  CONFIRM_INPUT = "input[name=confirm]";
  PHONENUMBER_INPUT = "input[name=phoneNumber]";
  REGISTER_BUTTON = "register-btn";

  openRegisterPage() {
    return cy.visit("/register");
  }

  enterUserName(value: string) {
    return cy.get(this.USERNAME_INPUT).type(value);
  }

  enterPassword(value: string) {
    return cy.get(this.PASSWORD_INPUT).type(value);
  }

  enterPhoneNumber(value: string) {
    return cy.get(this.PHONENUMBER_INPUT).type(value);
  }

  enterConfirm(value: string) {
    return cy.get(this.CONFIRM_INPUT).type(value);
  }

  clickOnRegisterButton() {
    return cy.getByDataTest(this.REGISTER_BUTTON).click();
  }

  checkErrorMessageHaveText(inputName: string, value: string) {
    return cy
      .getByDataTest(`error-message-${inputName}`)
      .should("have.text", value);
  }

  checkErrorMessageIsNotExits(inputName: string) {
    return cy.getByDataTest(`error-message-${inputName}`).should("not.exist");
  }
  checkRegisterButtonIsLoading() {
    return cy
      .getByDataTest(this.REGISTER_BUTTON)
      .should("be.disabled")
      .and("have.attr", "data-loading", "true");
  }

}

const registerPage = new RegisterPage();

export default registerPage;
