const { movingShift, demovingShift } = require('./Q10');

describe('movingShift and demovingShift', () => {
  const input = "I should have known that you would have a perfect answer for me!!!";
  const initialShift = 1;

  test('movingShift returns array of 5 parts', () => {
    const parts = movingShift(input, initialShift);
    expect(Array.isArray(parts)).toBe(true);
    expect(parts.length).toBe(5);
    expect(parts.join('').length).toBe(input.length);
  });

  test('movingShift followed by demovingShift returns original string', () => {
    const encoded = movingShift(input, initialShift);
    const decoded = demovingShift(encoded, initialShift);
    expect(decoded).toEqual(input);

  });

  test('known example matches expected parts', () => {
    const expected = [
  "J vltasl rlhr ",
  "zdfog odxr yp",
  "w atasl rlhr ",
  "p gwkzzyq znt",
  "yhv lvz wp!!!"
];

    const encoded = movingShift(input, initialShift);
    expect(encoded).toEqual(expected);
  });

  test('non-alphabetic chars stay unchanged', () => {
    const text = "Hello, World! 123";
    const shifted = movingShift(text, 3).join('');
    expect(shifted).toMatch(/[0-9 ,!]/);
    const decoded = demovingShift(movingShift(text, 3), 3);
    expect(decoded).toEqual(text);
  });
});
