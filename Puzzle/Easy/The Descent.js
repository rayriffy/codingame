while (true) {
  let cache = [];
  for (var i = 0; i < 8; i++) {
    var mountainH = parseInt(readline()); // represents the height of one mountain.
    cache.push(mountainH);
  }

  // Write an action using print()
  // To debug: printErr('Debug messages...');

  print(cache.indexOf(Math.max.apply(null, cache))); // The index of the mountain to fire on.
}