import { GenericResponse } from '..';

export type RetryStrategy<T> = (response: GenericResponse<T>) => boolean;
type ResolveFn<T> = (value?: GenericResponse<T> | PromiseLike<T>) => void;
type RejectFn = (reason?: any) => void;

export const tryAtMost = (
  fn: () => Promise<GenericResponse<any>>,
  retryStrategy: RetryStrategy<any>,
  maxRetries: number,
  waitTime: number,
): Promise<GenericResponse<any>> => {
  const makeRequest = (resolve: ResolveFn<any>, reject: RejectFn, attemptsLeft: number) => {
    console.log('attemptsLeft: ', attemptsLeft);
    const requestPromise = fn();

    requestPromise
      .then((response: GenericResponse<any>) => {
        if (retryStrategy(response)) {
          resolve(response);
        } else if (attemptsLeft > 0) {
          setTimeout(() => makeRequest(resolve, reject, attemptsLeft - 1), waitTime);
        } else {
          reject(new Error('Could not complete request within maximum attempts!'));
        }
      })
      .catch(() => {
        // reject((new Error("Error occurred while retrieving ")));
        if (attemptsLeft > 0) {
          setTimeout(() => makeRequest(resolve, reject, attemptsLeft - 1), waitTime);
        } else {
          reject(new Error('Could not complete request within maximum attempts!!'));
        }
      });
  };

  return new Promise((resolve, reject) => {
    makeRequest(resolve, reject, maxRetries);
  });
};
