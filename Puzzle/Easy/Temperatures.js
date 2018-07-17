const N = +readline();
const tC = readline().split ` `.map(x => +x);

let min = Infinity;

for (let i in tC) {
  (Math.abs(tC[i]) < Math.abs(min) || tC[i] === -min && tC[i] > 0) && (min = tC[i]);
}

print(min || 0);