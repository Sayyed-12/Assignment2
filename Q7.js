/*
Unique In Order
84,694 of 194,244pinelopi
Details
Solutions
Discourse (563)
Description:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
unique_in_order([1, 2, 2, 3, 3])   == [1, 2, 3]
unique_in_order((1, 2, 2, 3, 3))   == [1, 2, 3]
 */

function uniqueInOrder(sequence) {
  const result = [];

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i - 1]) {
      result.push(sequence[i]);
    }
  }

  return result;
}
module.exports=uniqueInOrder

/*function uniqueInOrder(sequence) {
  const seq = typeof sequence === 'string' ? sequence.split('') : sequence;
  return seq.filter((item, index) => item !== seq[index - 1]);
}
*/