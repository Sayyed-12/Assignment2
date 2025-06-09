function removNb(n) {
  const total = (n * (n + 1)) / 2;

  return Array.from({ length: n }, (_, i) => i + 1)
    .map(a => {
      const b = (total - a) / (a + 1);
      return b % 1 === 0 && b >= 1 && b <= n ? [a, b] : null;
    })
    .filter(pair => pair !== null);
}

module.exports=removNb