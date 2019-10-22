import { Selector } from 'testcafe';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  public headerSignInLink: Selector;

  constructor() {
    super();
    this.headerSignInLink = Selector('.iLock');
  }
}
