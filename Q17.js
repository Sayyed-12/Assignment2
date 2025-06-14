function escape(carpark) {
  const result = [];

  // Step 1: Find start position
  let floor = 0, position = 0;
  for (let i = 0; i < carpark.length; i++) {
    const row = carpark[i];
    const col = row.indexOf(2);
    if (col !== -1) {
      floor = i;
      position = col;
      break;
    }
  }

  // Step 2: From current floor to ground floor
  for (let i = floor; i < carpark.length - 1; i++) {
    const stairIndex = carpark[i].indexOf(1);
    const horizontalMove = stairIndex - position;

    if (horizontalMove !== 0) {
      const direction = horizontalMove > 0 ? 'R' : 'L';
      result.push(`${direction}${Math.abs(horizontalMove)}`);
    }

    result.push('D1');
    position = stairIndex; // Now we're at the staircase below
  }

  // Step 3: Move to the exit on last floor (far right)
  const lastRow = carpark[carpark.length - 1];
  const rightMove = lastRow.length - 1 - position;

  if (rightMove !== 0) {
    result.push(`R${rightMove}`);
  }

  return result;
}
module.exports=escape