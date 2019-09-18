export type GenericRetryStrategy<T> = (response: any) => boolean;
type ResolveFn<T> = (value?: any | PromiseLike<T>) => void;
type RejectFn = (reason?: any) => void;

export const retryRequest = (
  fn: () => Promise<any>,
  retryStrategy: GenericRetryStrategy<any>,
  maxRetries: number,
  waitTime: number,
): Promise<any> => {
  const makeRequest = (resolve: ResolveFn<any>, reject: RejectFn, attemptsLeft: number) => {
    console.log('attemptsLeft: ', attemptsLeft);
    const requestPromise = fn();

    requestPromise
      .then((response: any) => {
        if (retryStrategy(response)) {
          resolve(response);
        } else if (attemptsLeft > 0) {
          setTimeout(() => makeRequest(resolve, reject, attemptsLeft - 1), waitTime);
        } else {
          reject(new Error('Could not perform request within maximum attempts!'));
        }
      })
      .catch(() => {
        if (attemptsLeft > 0) {
          setTimeout(() => makeRequest(resolve, reject, attemptsLeft - 1), waitTime);
        } else {
          reject(new Error('Exception occurred while performing request'));
        }
      });
  };

  return new Promise((resolve, reject) => {
    makeRequest(resolve, reject, maxRetries);
  });
};
