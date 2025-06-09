function createRNG(n) {
  let numbers = Array.from({ length: n }, (_, i) => i);
  let index = 0;

  function shuffle() {
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    index = 0;
  }

  shuffle();

  return function random() {
    if (index === n) shuffle();
    return numbers[index++];
  }
}

module.exports = createRNG;
