function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;

  const lines = Array.from({ length: n }, (_, i) => {   ///Example: Array.from({ length: 5 }) creates: [undefined, undefined, undefined, undefined, undefined]
    const stars = n - Math.abs(n - 2 * i - 1);
    const spaces = (n - stars) / 2;
    return ' '.repeat(spaces) + '*'.repeat(stars);
  });

  return lines.join('\n') + '\n';
}

module.exports = diamond;

 