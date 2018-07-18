// width - the number of cells on the X axis
// height - the number of cells on the Y axis
const [width, height] = [+readline(), +readline()];

// store all rows
// width characters, each either 0 or .
const matrix = [...Array(height)].map(readline);

for (let y1 = 0; y1 < height; y1++) {
  for (let x1 = 0; x1 < width; x1++) {
    if ('.' === matrix[y1].charAt(x1)) {
      continue; // stop iterating if this cell is empty
    }

    let [x2, y2, x3, y3] = ['-1', '-1', '-1', '-1'];

    const nextX = +(matrix[y1].slice(x1 + 1).indexOf('0') + 1); // get the very right Cell X2
    x2 = (nextX && x1 + 1 < width) ? nextX + x1 : '-1';

    for (let j = y1 + 1; j < height; j++) {
      if ('0' === matrix[j].charAt(x1)) { // get the very next below Cell Y3
        y3 = j; // store current position and
        break; // stop irerating if found
      }
    }

    y2 = ('-1' !== x2) ? y1 : '-1'; // add to the result Right Cell X2 Y2
    x3 = ('-1' !== y3) ? x1 : '-1'; // add to the result Below Cell X3 Y3
    // Three coordinates: a node, its right neighbor, its bottom neighbor
    print(`${x1} ${y1} ${x2} ${y2} ${x3} ${y3}`); // print cells
  }
}