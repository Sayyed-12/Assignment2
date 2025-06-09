/*
Task:
Create a function that receives two integers, `a` and `b`, which define an inclusive range [a, b].  
The function should return a sorted list of all numbers within this range that satisfy a specific property (described elsewhere).

Examples:
- For the input (1, 10), the output should be:  
  [1, 2, 3, 4, 5, 6, 7, 8, 9]

- For the input (1, 100), the output should be:  
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

- If no numbers in the range satisfy the property, the function should return an empty list.  
  For example, input (90, 100) returns: []

Note: The property that numbers must satisfy is defined in the problem description.
*/

  


function sumDigPow(a, b) {
  let result = [];

  for (let i = a; i <= b; i++) {
    let sum = i
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, digit, idx) => acc + Math.pow(digit, idx + 1), 0);

    if (sum === i) {
      result.push(i);
    }
  }

  return result;
}
module.exports = sumDigPow;
