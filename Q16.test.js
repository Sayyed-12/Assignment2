const thirt = require('./Q16');  

test('Example tests', () => {
  expect(thirt(1234567)).toBe(87);
  expect(thirt(321)).toBe(48);
  expect(thirt(8529)).toBe(79);
});
