const decodeMorse = require('./Q13');

// Simulated MORSE_CODE object (normally preloaded in kata platform)
const MORSE_CODE = {
  '.-':     'A',
  '-...':   'B',
  '-.-.':   'C',
  '-..':    'D',
  '.':      'E',
  '..-.':   'F',
  '--.':    'G',
  '....':   'H',
  '..':     'I',
  '.---':   'J',
  '-.-':    'K',
  '.-..':   'L',
  '--':     'M',
  '-.':     'N',
  '---':    'O',
  '.--.':   'P',
  '--.-':   'Q',
  '.-.':    'R',
  '...':    'S',
  '-':      'T',
  '..-':    'U',
  '...-':   'V',
  '.--':    'W',
  '-..-':   'X',
  '-.--':   'Y',
  '--..':   'Z',
  '-----':  '0',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '...---...': 'SOS',
  '-.-.--': '!',
  '.-.-.-': '.'
};

// Mock the global MORSE_CODE object
global.MORSE_CODE = MORSE_CODE;

describe('decodeMorse', () => {
  test('decodes a simple word', () => {
    expect(decodeMorse('.... . .-.. .-.. ---')).toBe('HELLO');
  });

  test('decodes a sentence with spaces between words', () => {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE');
  });

  test('trims extra spaces at start and end', () => {
    expect(decodeMorse('   .... . -.--   .--- ..- -.. .   ')).toBe('HEY JUDE');
  });

  test('decodes SOS', () => {
    expect(decodeMorse('...---...')).toBe('SOS');
  });

  test('decodes numbers', () => {
    expect(decodeMorse('.---- ..--- ...--')).toBe('123');
  });
});
