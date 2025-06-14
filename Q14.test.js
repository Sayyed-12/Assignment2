const strongerPassphrase = require('./Q14');

test('Example test case', () => {
  const input = "BORN IN 2015!";
  const shift = 1;
  const expected = "!4897 oJ OsPc";  
  expect(strongerPassphrase(input, shift)).toBe(expected);
});

test('Test with no digits', () => {
  const input = "HELLO WORLD";
  const shift = 3;
  const expected = "gOuRz rOoHk";   
  expect(strongerPassphrase(input, shift)).toBe(expected);
});


test('Test with special characters only', () => {
  const input = "!@#$%^&*()";
  const shift = 5;
  const expected = ")(*&^%$#@!";
  expect(strongerPassphrase(input, shift)).toBe(expected);
});
