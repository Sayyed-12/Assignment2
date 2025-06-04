 
function titleCase(title, minorWords) {
  if (!title) return '';

  // Convert minorWords string to lowercase array for easy checking
  const minorWordsArr = minorWords ? minorWords.toLowerCase().split(' ') : [];

  // Split the title into words
  const words = title.toLowerCase().split(' ');

  // Capitalize function: first letter uppercase, rest lowercase
  const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

  return words
    .map((word, index) => {
      // Always capitalize first word
      if (index === 0) {
        return capitalize(word);
      }
      // If word is in minorWords list, keep lowercase, else capitalize
      return minorWordsArr.includes(word) ? word : capitalize(word);
    })
    .join(' ');
}
console.log(titleCase('a clash of KINGS', 'a an the of')); 
// Output: "A Clash of Kings"

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); 
// Output: "The Wind in the Willows"

console.log(titleCase('the quick brown fox')); 
// Output: "The Quick Brown Fox"


module.exports=titleCase
