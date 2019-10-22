import { Selector, t } from 'testcafe';
import BasePage from './BasePage';

export default class LoginPage extends BasePage {
  public loginIdInput: Selector;
  public passwordInput: Selector;
  public signInButton: Selector;
  public loginErrorMessage: Selector;

  constructor() {
    super();

    this.loginIdInput = Selector('[name=logonId]');
    this.passwordInput = Selector('[name=logonPassword]');
    this.signInButton = Selector('#pageLoginForm input.btnAction[name=signIn]');
    this.loginErrorMessage = Selector('.errorMsg');
  }

  public async enterLoginDetailsForCustomer(loginName: string, password: string) {
    await this.clearAndTypeText(this.loginIdInput, loginName);
    await this.clearAndTypeText(this.passwordInput, password);
    await t.click(this.signInButton);
  }
}
