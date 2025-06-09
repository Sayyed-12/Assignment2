

const removNb = require('./Q8');

test('returns correct pairs for n = 26', () => {
  expect(removNb(26)).toEqual([[15, 21], [21, 15]]);
});

test('returns correct pairs for n = 10', () => {
  expect(removNb(10)).toEqual([[6, 7], [7, 6]]);
});


test('returns correct result for small input', () => {
  expect(removNb(1)).toEqual([]);
});

test('returns correct result for n = 100', () => {
  expect(removNb(100)).toEqual([]);
});
