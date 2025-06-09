 

const uniqueInOrder = require('./Q7');

test('removes consecutive duplicates in string', () => {
  expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
});

test('handles mixed case string', () => {
  expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
});

test('handles array of numbers', () => {
  expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
});

test('handles empty input', () => {
  expect(uniqueInOrder([])).toEqual([]);
  expect(uniqueInOrder('')).toEqual([]);
});

test('handles single character or element', () => {
  expect(uniqueInOrder('A')).toEqual(['A']);
  expect(uniqueInOrder([1])).toEqual([1]);
});
