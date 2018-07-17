const N = +readline(); // Number of elements which make up the association table.
const Q = +readline(); // Number Q of file names to be analyzed.

const getType = obj => {
  const x = readline().split ` `;
  obj[x[0].toLowerCase()] = x[1];
  return obj;
};

const ext = [...Array(N)].reduce(getType, {});

print([...Array(Q)]
  .map(_ => {
    const extArr = readline().toLowerCase().split `.`;
    const n = (extArr.length > 1) ? (extArr.length - 1) : 1;
    return (ext[extArr[n]] || 'UNKNOWN');
  })
  .join('\n')
);