

const howmuch = require('./Q15');  

test('Example test case', () => {
  const result = howmuch(1, 100);
  expect(result).toEqual([
    ["M: 37", "B: 5", "C: 4"],
    ["M: 100", "B: 14", "C: 11"]
  ]);
});
