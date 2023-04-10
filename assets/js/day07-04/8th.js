//@description{print star pattern}
// Step1-Take empty variable let a="" to store number.
// step2-iterate 3 loop upto less than 6.
// step2.1-in second loop space <= i - 1.
// step2.2-in third loop if (i + j <= 10 && j - i >= 0).
// step3-print star Pattern.

// let a = '';

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
