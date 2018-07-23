const coodinates = [...Array(+readline())].map(() => readline().split ` `.map(Number));
const xs = coodinates.map(c => c[0]);
const ys = coodinates.map(c => c[1]).sort((a, b) => a - b);

print(
  Math.max(...xs) - Math.min(...xs) + ys.reduce(
    (l, c) => l + Math.abs(c - ys[ys.length / 2 | 0]), 0
  )
);