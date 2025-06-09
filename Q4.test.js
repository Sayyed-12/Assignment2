const diamond = require('./Q4');


test('diamond of size 1', () => {
  expect(diamond(1)).toBe("*\n");
});

test('diamond of size 3', () => {
  expect(diamond(3)).toBe(" *\n***\n *\n");
});

test('diamond of size 5', () => {
  expect(diamond(5)).toBe("  *\n ***\n*****\n ***\n  *\n");
});

test('diamond of size 2 (even) returns null', () => {
  expect(diamond(2)).toBeNull();
});

test('diamond of size 0 returns null', () => {
  expect(diamond(0)).toBeNull();
});

test('diamond of negative size returns null', () => {
  expect(diamond(-3)).toBeNull();
});

test('diamond of size 7', () => {
  const expected =
    "   *\n" +
    "  ***\n" +
    " *****\n" +
    "*******\n" +
    " *****\n" +
    "  ***\n" +
    "   *\n";
  expect(diamond(7)).toBe(expected);
});
