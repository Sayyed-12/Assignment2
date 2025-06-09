const createRNG = require('./Q9');  

describe('createRNG function', () => {
  test('generates numbers within range [0, n-1]', () => {
    const n = 5;
    const random = createRNG(n);
    for (let i = 0; i < 100; i++) {
      const val = random();
      expect(val).toBeGreaterThanOrEqual(0);
      expect(val).toBeLessThan(n);
    }
  });

  test('each cycle outputs all numbers exactly once', () => {
    const n = 10;
    const random = createRNG(n);

    const cycle = [];
    for (let i = 0; i < n; i++) {
      cycle.push(random());
    }

    const sorted = [...cycle].sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
      expect(sorted[i]).toBe(i);
    }
  });

  test('two consecutive cycles are different (very likely)', () => {
    const n = 10;
    const random = createRNG(n);

    const cycle1 = [];
    for (let i = 0; i < n; i++) {
      cycle1.push(random());
    }

    const cycle2 = [];
    for (let i = 0; i < n; i++) {
      cycle2.push(random());
    }

    const identical = cycle1.every((v, i) => v === cycle2[i]);
    expect(identical).toBe(false);
  });
});
