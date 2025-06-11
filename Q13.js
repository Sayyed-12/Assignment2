function decodeMorse(morseCode) {
  return morseCode
    .trim() // Remove extra spaces from start and end
    .split('   ') // Split into words
    .map(word =>
      word
        .split(' ') // Split word into characters
        .map(char => MORSE_CODE[char]) // Decode each character
        .join('') // Join characters into a word
    )
    .join(' '); // Join words into a sentence
}
module.exports = decodeMorse;
