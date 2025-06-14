function howmuch(m, n) {
  const results = [];
  
  const start = Math.min(m, n);
  const end = Math.max(m, n);

  for (let f = start; f <= end; f++) {
    if (f % 9 === 1 && f % 7 === 2) {
      const c = (f - 1) / 9;
      const b = (f - 2) / 7;
      results.push([`M: ${f}`, `B: ${b}`, `C: ${c}`]);
    }
  }

  return results;
}

module.exports=howmuch



