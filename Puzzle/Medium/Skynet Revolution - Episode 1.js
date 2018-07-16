let [N, L, E] = readline().split ` `.map(Number);
const nodes = new Array(N).fill().map(_ => []);

while (L--) {
  const [N1, N2] = readline().split ` `.map(Number);
  // N1 and N2 defines a link between these nodes
  // create a Graph
  nodes[N1][N2] = N2;
  nodes[N2][N1] = N1;
}

// the index of a gate node
const EI = new Array(E).fill().map(_ => +readline());

// game loop
while (1) {
  const SI = +readline();
  // SI is the index of the node on which the Skynet agent is positioned this turn
  for (let i = 0; i < E; i++) {
    const node = nodes[SI];
    const gate = EI[i];

    if (node[gate]) {
      print(`${SI} ${gate}`);
      delete node[gate];
      break;
    } else if (E - 1 === i) {
      print(`${SI} ${node[Object.keys(node)[0]]}`);
      delete node[Object.keys(node)[0]];
    }
  }
}