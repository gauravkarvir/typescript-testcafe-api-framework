import { getRandomChars, getRandomInt, getRandomString, ItemModel } from '..';

export class ItemBuilder {
  private item: ItemModel;

  public withDefaults() {
    return this.withItem();
  }

  public withItemDetails(id?: number, userId?: number, title?: string, body?: string) {
    this.item = {
      id,
      userId,
      title,
      body,
    };
    return this;
  }
  public withItem(itemModel?: ItemModel) {
    if (itemModel) {
      this.item = itemModel;
    } else {
      this.item = {
        id: getRandomInt(1000, 10000000),
        userId: getRandomInt(1000, 100000000),
        title: getRandomChars(3, 'Title'),
        body: getRandomString('Body'),
      };
    }
    return this;
  }

  public build(): ItemModel {
    return this.item;
  }
}
