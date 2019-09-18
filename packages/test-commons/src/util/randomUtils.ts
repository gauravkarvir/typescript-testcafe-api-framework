import { sample } from 'lodash';
import { ulid } from 'ulid';

export const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomAge = () => getRandomInt(18, 68);

export const getRandomUserName = (startingWith: string): string => {
  return startingWith + ulid();
};

export const getRandomChars = (length, startingWith?: string): string => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return startingWith ? startingWith + text : text;
};

export const getRandomAlphaNumericString = (length): string => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const getRandomString = (startingWith?: string): string =>
  startingWith +
  Math.random()
    .toString(36)
    .substr(2, 5);

export const getRandomCodeFromSample = (): string | any => sample(['AAA', 'BBB']);
