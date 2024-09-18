import { unboundedKnapsack } from "./answer";

describe('Question 7', () => {
test('should return max value and items for simple case', () => {
    const items = [
    { weight: 1, value: 1 },
    { weight: 2, value: 2 },
    ];
    const totalCapacity = 3;

    const [val, sac] = unboundedKnapsack(items, totalCapacity);
    
    // We expect a maximum value of 3 and that it chooses two items of weight 1 and value 1.
    expect(val).toEqual(3);
});

test('should return correct value when only one item can be used', () => {
  const items = [
    { weight: 6, value: 10 },
    { weight: 2, value: 5 },
  ];
  const totalCapacity = 5;

  const result = unboundedKnapsack(items, totalCapacity);
    
  // We expect a maximum value of 15 (using two items of weight 2 and value 5)
  expect(result).toEqual([10, [
    { weight: 2, value: 5 },
    { weight: 2, value: 5 },
  ]]);
});

test('should handle empty item list', () => {
  const items = [];
  const totalCapacity = 10;

  const result = unboundedKnapsack(items, totalCapacity);
    
  // Since there are no items, the max value is 0 and the item list is empty.
  expect(result).toEqual([0, []]);
});

test('should handle capacity of 0', () => {
  const items = [
    { weight: 1, value: 10 },
  ];
  const totalCapacity = 0;

  const result = unboundedKnapsack(items, totalCapacity);
    
  // With 0 capacity, the max value is 0 and no items can be added.
  expect(result).toEqual([0, []]);
});

test('should handle one item with weight greater than capacity', () => {
  const items = [
    { weight: 5, value: 50 },
  ];
  const totalCapacity = 3;

  const result = unboundedKnapsack(items, totalCapacity);
    
  // The item is too heavy to be added, so the result should be 0 and no items.
  expect(result).toEqual([0, []]);
});

test('should handle multiple items with different weights and values', () => {
  const items = [
    { weight: 3, value: 40 },
    { weight: 2, value: 50 },
    { weight: 1, value: 10 },
  ];
  const totalCapacity = 6;

  const result = unboundedKnapsack(items, totalCapacity);
    
  // Expected value is 150 (3 items of weight 2 and value 50)
  expect(result).toEqual([150, [
    { weight: 2, value: 50 },
    { weight: 2, value: 50 },
    { weight: 2, value: 50 }
  ]]);
});
});
