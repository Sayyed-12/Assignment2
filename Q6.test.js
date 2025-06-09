 

const sumDigPow = require('./Q6');

test('returns eureka numbers from 1 to 10', () => {
  expect(sumDigPow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('returns eureka numbers from 1 to 100', () => {
  expect(sumDigPow(1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
});

test('returns empty array when no eureka numbers found', () => {
  expect(sumDigPow(90, 100)).toEqual([]);
});

test('returns correct eureka numbers from 100 to 150', () => {
  expect(sumDigPow(100, 150)).toEqual([135]);
});
