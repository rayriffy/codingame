while (true) {
  const enemy1 = readline(); // name of enemy 1
  const dist1 = +readline(); // distance to enemy 1
  const enemy2 = readline(); // name of enemy 2
  const dist2 = +readline(); // distance to enemy 2

  print(dist1 < dist2 ? enemy1 : enemy2);
}