let [R, L] = [String(readline()), +readline()];

for (let i = 1; i < L; i++) {
  R = R
    .match(/(\d+)( \1)*/g)
    .map(n => (n = n.trim().split ` `, `${n.length} ${n[0]}`))
    .join ` `;
}

print(R);