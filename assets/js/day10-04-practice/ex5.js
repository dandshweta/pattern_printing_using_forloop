let n = 5;
for (let i = 1; i <= n; i++) {
  let a = '';
  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === 5 || j === 1 || j === 5) {
      a = a + '*';
    } else {
      a = a + ' ';
    }
  }
  console.log(a);
}
