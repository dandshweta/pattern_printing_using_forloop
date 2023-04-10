//@description{print star pattern}
// Step1-Take empty variable let a="" to store number.
// step2-iterate 1 loop and its nested loops.
// step2.1-in first loop space <= 6 - 1.
// step2.2-in second loop j <= 2 * i - 1 .
// step3-iterate 2 loop and its nested loops.
// step3.1-in third loop space <= i - 1.
// step3.2-in fourth loop if (i + j <= 10 && j - i >= 0).

// step3-print star Pattern.

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
