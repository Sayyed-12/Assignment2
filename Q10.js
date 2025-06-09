function mod(n, m) {
  return ((n % m) + m) % m;
}

function movingShift(s, shift) {
  function shiftChar(c, shiftVal) {
    const isUpper = c >= 'A' && c <= 'Z';
    const isLower = c >= 'a' && c <= 'z';
    if (!isUpper && !isLower) return c;

    const base = isUpper ? 65 : 97;
    return String.fromCharCode(mod(c.charCodeAt(0) - base + shiftVal, 26) + base);
  }

  let result = '';
  for (let i = 0; i < s.length; i++) {
    result += shiftChar(s[i], shift + i);
  }

  const len = result.length;
  const baseLen = Math.floor(len / 5);
  const remainder = len % 5;

  const parts = [];
  let start = 0;
  for (let i = 0; i < 5; i++) {
    const partLen = baseLen + (i < remainder ? 1 : 0);
    parts.push(result.slice(start, start + partLen));
    start += partLen;
  }

  return parts;
}

function demovingShift(arr, shift) {
  const s = arr.join('');

  function unshiftChar(c, shiftVal) {
    const isUpper = c >= 'A' && c <= 'Z';
    const isLower = c >= 'a' && c <= 'z';
    if (!isUpper && !isLower) return c;

    const base = isUpper ? 65 : 97;
    return String.fromCharCode(mod(c.charCodeAt(0) - base - shiftVal, 26) + base);
  }

  let result = '';
  for (let i = 0; i < s.length; i++) {
    result += unshiftChar(s[i], shift + i);
  }

  return result;
}

module.exports = { movingShift, demovingShift };
