import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { t } from 'testcafe';

const conf = require(process.cwd() + '/config');
const cms = require(process.cwd() + '/cms');
const loginPage = new LoginPage();
const homePage = new HomePage();

fixture(`Login: Validation Scenarios `)
  .page(`${conf.site_url}`)

  // Before And After Scenario
  .beforeEach(async tc => {
    await tc.eval(() => localStorage.clear());
    await homePage.maximiseWindow();
  });

test(`Login: User unable to login with invalid username and password`, async tc => {
  // Navigate to Login Page
  await tc.click(homePage.headerSignInLink);
  // Enter login Details
  await loginPage.enterLoginDetailsForCustomer('invalid', 'invalid');
  await tc.click(loginPage.signInButton);
  await tc.expect(loginPage.loginErrorMessage.innerText).contains(cms.login.ERROR_LOGIN);
});
test(`Login: Validation Message for blank Login Id`, async tc => {
  // Navigate to Login Page
  await tc.click(homePage.headerSignInLink);
  // Enter login Details
  await loginPage.enterLoginDetailsForCustomer('', '');
  await tc.click(loginPage.signInButton);
  await tc.expect(loginPage.loginErrorMessage.innerText).contains(cms.login.ERROR_LOGINID);
});
