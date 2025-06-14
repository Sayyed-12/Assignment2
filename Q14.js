function strongerPassphrase(text, shift) {
  const isLetter = (char) => /[A-Z]/.test(char);
  const isDigit = (char) => /[0-9]/.test(char);

  let result = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (isLetter(char)) {
      const base = 'A'.charCodeAt(0);
      const shiftedCode = ((char.charCodeAt(0) - base + shift) % 26) + base;
      let newChar = String.fromCharCode(shiftedCode);
      newChar = i % 2 === 0 ? newChar.toLowerCase() : newChar.toUpperCase();
      result += newChar;
    } else if (isDigit(char)) {
      result += (9 - parseInt(char)).toString();
    } else {
      result += char;
    }
  }

  return result.split('').reverse().join('');
}


module.exports = strongerPassphrase;
