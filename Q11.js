function foldArray(array, runs) {
  let result = array.slice(); // clone the array to avoid modifying the input

  for (let i = 0; i < runs; i++) {
    const folded = [];
    const len = result.length;

    const mid = Math.floor(len / 2);
    for (let j = 0; j < mid; j++) {
      folded.push(result[j] + result[len - 1 - j]);
    }

    if (len % 2 !== 0) {
      folded.push(result[mid]); // keep the middle element if odd
    }

    result = folded;
  }

  return result;
}
module.exports=foldArray