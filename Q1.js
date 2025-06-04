function reverseAndCombineWords(input) {
  if (input.trim() === "") {
    throw new Error("Empty String not allowed");
  }

  let words = input.trim().split(/\s+/);

  while (words.length > 1) {
    // Reverse each word
    words = words.map(word => [...word].reverse().join(''));

    // Combine pairs
    words = words.reduce((acc, word, i, arr) => {
      if (i % 2 === 0) {
        const next = arr[i + 1] !== undefined ? arr[i + 1] : '';
        acc.push(word + next);
      }
      return acc;
    }, []);
  }

  return words[0];
}

console.log(reverseAndCombineWords("abc def")); 
// Output: "cbafed"

console.log(reverseAndCombineWords("abc def ghi 123")); 
// Output: "defabc123ghi"

console.log(reverseAndCombineWords("abc def gh34 434ff 55_eri 123 343")); 
// Output: "43hgff434cbafed343ire_55321"

module.exports = reverseAndCombineWords;
