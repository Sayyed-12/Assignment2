function thirt(n) {
  const pattern = [1, 10, 9, 12, 3, 4];

  let prev = -1;
  let current = n;

  while (current !== prev) {
    prev = current;
    const digits = String(current).split('').reverse().map(Number);

    current = digits.reduce((sum, digit, index) => {
      return sum + digit * pattern[index % pattern.length];
    }, 0);
  }

  return current;
}
module.exports=thirt