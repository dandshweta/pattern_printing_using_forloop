let n = 5;
for (let i = 1; i <= n; i++) {
  let a = '';
  for (let space = 1; space <= n + 1 - i; space++) {
    a = a + ' ';
  }
  for (let j = 1; j <= i; j++) {
    a = a + '*';
  }
  console.log(a);
}

// output:
//      *
//     **
//    ***
//   ****
//  *****
