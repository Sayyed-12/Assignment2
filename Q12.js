 
function som(x, y) {
  return x + y;
}

function mini(x, y) {
  return Math.min(x, y);
}

function maxi(x, y) {
  return Math.max(x, y);
}

function gcdi(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
}

function lcmu(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  return (x * y) / gcdi(x, y);
}

function oper_array(fct, arr, init) {
  const result = [];
  let val = init;
  for (let i = 0; i < arr.length; i++) {
    val = fct(val, arr[i]);
    result.push(val);
  }
  return result;
}

module.exports = {
  som,
  mini,
  maxi,
  gcdi,
  lcmu,
  oper_array  
};
