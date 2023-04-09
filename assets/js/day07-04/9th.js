let a = '';
for (let i = 1; i < 6; i++) {
  for (let space = 1; space < 6 - i; space++) {
    a = a + ' ';
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    a = a + '*';
  }
  a = a + '\n';
}

for (let i = 1; i < 6; i++) {
  for (let space = 1; space <= i - 1; space++) {
    a = a + ' ';
  }
  for (let j = 1; j <= 9; j++) {
    if (i + j <= 10 && j - i >= 0) {
      a = a + '*';
    }
  }
  a = a + '\n';
}

console.log(a);

// output:

//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *
