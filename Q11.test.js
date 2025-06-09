const foldArray = require('./Q11');

describe('foldArray', () => {
  test('folds array [1, 2, 3, 4, 5] once', () => {
    expect(foldArray([1, 2, 3, 4, 5], 1)).toEqual([6, 6, 3]);
  });

  test('folds array [1, 2, 3, 4, 5] twice', () => {
    expect(foldArray([1, 2, 3, 4, 5], 2)).toEqual([9, 6]);
  });

  test('folds array [1, 2, 3, 4, 5] three times', () => {
    expect(foldArray([1, 2, 3, 4, 5], 3)).toEqual([15]);
  });

  test('folds array [1, 2, 3, 4] once', () => {
    expect(foldArray([1, 2, 3, 4], 1)).toEqual([5, 5]);
  });

  test('array with one element stays the same', () => {
    expect(foldArray([10], 5)).toEqual([10]);
  });

  test('original array is not modified', () => {
    const arr = [1, 2, 3];
    foldArray(arr, 1);
    expect(arr).toEqual([1, 2, 3]);
  });
});
