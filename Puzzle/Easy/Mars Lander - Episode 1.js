const N = +readline(); // the number of points used to draw the surface of Mars.

for (let i = 0; i < N; i++) {
  readline();
}

while (true) {
  print(readline().split(' ')[3] < -39 ? '0 4' : '0 0');
}