import { printItemsWithExponentialDelay } from './answer';

jest.useFakeTimers();

describe('Question 2', () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('should resolve', async () => {
    const items = ['a', 'b', 'c', 'd'];

    const promise = printItemsWithExponentialDelay(items);

    jest.advanceTimersByTime(20000)

    // Wait for the function to complete
    await expect(promise).resolves.toBeUndefined();
  });

  it('should print items with increasing delay in powers of 2', async () => {
    const items = ['a', 'b', 'c', 'd'];
    const delayTimes = [1000, 2000, 4000, 8000]; // Delay in ms for each item
    
    const promise = printItemsWithExponentialDelay(items);

    for (let i = 0; i < items.length; i++) {
      expect(console.log).not.toHaveBeenCalledWith(items[i]); // Ensure it's not called prematurely

      jest.advanceTimersByTime(delayTimes[i]);

      await Promise.resolve(); // To flush any pending promises

      expect(console.log).toHaveBeenCalledWith(items[i]); // Ensure it's called after the correct delay
    }

    // Wait for the function to complete
    await promise;
  });
});
