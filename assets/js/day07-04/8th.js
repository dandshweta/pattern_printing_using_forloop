for (let i = 1; i <= 5; i++) {
  let a = '';
  for (let space = 1; space <= i - 1; space++) {
    a = a + ' ';
  }
  for (let j = 1; j <= 9; j++) {
    if (i + j <= 10 && j - i >= 0) {
      a = a + '*';
    }
  }

  console.log(a);
}

// output:
// *********
//  *******
//   *****
//    ***
//     *
