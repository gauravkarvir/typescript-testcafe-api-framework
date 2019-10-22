import { ClientFunction, Selector, t } from 'testcafe';

const conf = require('../../../config/index');

export default class BasePage {
  public getPageUrl() {
    return ClientFunction(() => window.location.href);
  }

  public getPageTitle() {
    return ClientFunction(() => document.title);
  }

  public async openPage(pageName: string) {
    const name = pageName.toLowerCase();
    await t.navigateTo(`${conf.site_url}${name}`);
  }
  public async maximiseWindow() {
    return await t.maximizeWindow();
  }

  public async clearInput(selector: Selector) {
    await t.click(selector).pressKey('ctrl+a delete tab');
  }

  public async clearAndTypeText(selector: Selector, text: string) {
    await this.clearInput(selector);
    if (text !== '') {
      await t.typeText(selector, text);
    }
  }

  public async clickMultipleOptionsByText(selector: Selector, selectOption: string[]) {
    if (selectOption !== []) {
      for (const eachOption of selectOption) {
        if ((await selector.withText(eachOption).checked) === false) {
          await t.click(selector.withText(eachOption));
        }
      }
    }
  }

  public async selectDropdown(selector: Selector, optionValueToSelect: string) {
    const selectorOption = selector.find('option');
    await t
      .click(selector)

      .click(selectorOption.withText(optionValueToSelect));
    return selector.value;
  }

  public async selectRadio(selector: Selector, optionValueToSelect: string) {
    await t.click(selector.withText(optionValueToSelect));
    return selector.value;
  }

  public async setSpeed(speedNumber: number) {
    await t.setTestSpeed(speedNumber);
  }

  public async getListItems(selectorString: string) {
    const clientFn = ClientFunction((selector: string) => {
      const items = document.querySelectorAll(selector);
      const itemsValues: Array<string | null> = [];
      for (const item of items) {
        itemsValues.push(item.textContent);
      }

      return itemsValues;
    });

    return await clientFn(selectorString);
  }

  public async getListElements(selectorString: string) {
    const clientFn = ClientFunction((selector: string) => {
      return document.querySelectorAll(selector);
    });

    return await clientFn(selectorString);
  }

  public cleanString(inputText: string): string {
    return inputText.replace(/\n/gm, '\r\n');
  }
}
