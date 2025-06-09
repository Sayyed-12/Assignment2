 

const sum  = require('./Q6');

test('returns eureka numbers from 1 to 10', () => {
  expect(sum (1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('returns eureka numbers from 1 to 100', () => {
  expect(sum (1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
});

test('returns empty array when no eureka numbers found', () => {
  expect(sum (90, 100)).toEqual([]);
});

test('returns correct eureka numbers from 100 to 150', () => {
  expect(sum (100, 150)).toEqual([135]);
});
