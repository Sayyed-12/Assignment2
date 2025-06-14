const escape = require('./Q17');

test('Basic escape test', () => {
  const carpark = [
    [1, 0, 0, 0, 2],
    [0, 0, 0, 0, 0]
  ];
  const expected = ['L4', 'D1', 'R4'];
  expect(escape(carpark)).toEqual(expected);
});
