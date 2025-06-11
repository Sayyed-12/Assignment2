const { som, mini, maxi, gcdi, lcmu, oper_array } = require('./Q12');

describe('Utility Functions', () => {
  test('som adds two numbers', () => {
    expect(som(3, 5)).toBe(8);
  });

  test('mini returns the smaller number', () => {
    expect(mini(3, 5)).toBe(3);
  });

  test('maxi returns the larger number', () => {
    expect(maxi(3, 5)).toBe(5);
  });

  test('gcdi returns the greatest common divisor', () => {
    expect(gcdi(18, 69)).toBe(3);
    expect(gcdi(-90, -78)).toBe(6);
  });

  test('lcmu returns the least common multiple', () => {
    expect(lcmu(4, 5)).toBe(20);
    expect(lcmu(18, 69)).toBe(414);
  });
});

describe('oper_array', () => {
  const a = [18, 69, -90, -78, 65, 40];

  test('oper_array with gcdi', () => {
    expect(oper_array(gcdi, a, a[0])).toEqual([18, 3, 3, 3, 1, 1]);
  });

  test('oper_array with lcmu', () => {
    expect(oper_array(lcmu, a, a[0])).toEqual([18, 414, 2070, 26910, 26910, 107640]);
  });

  test('oper_array with som', () => {
    expect(oper_array(som, a, 0)).toEqual([18, 87, -3, -81, -16, 24]);
  });

  test('oper_array with mini', () => {
    expect(oper_array(mini, a, a[0])).toEqual([18, 18, -90, -90, -90, -90]);
  });

  test('oper_array with maxi', () => {
    expect(oper_array(maxi, a, a[0])).toEqual([18, 69, 69, 69, 69, 69]);
  });
});
