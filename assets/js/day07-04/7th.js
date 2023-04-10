//@description{print star pattern}
// Step1-Take empty variable let a="" to store number.
// step2-iterate 2 loop upto less than 6.
// step2.1-in second loop space < 6 - i.
// step2.2-in third loop j <= 2 * i - 1.
// step3-print star Pattern.

// let a = '';
for (let i = 1; i < 6; i++) {
  let a = '';
  for (let space = 1; space < 6 - i; space++) {
    a = a + ' ';
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    a = a + '*';
  }
  // a += '\n';
  console.log(a);
}

// output:
//     *
//    ***
//   *****
//  *******
// *********

// for (let i = 0; i <= 8; i = i + 2) {
//   let a = '';

//   for (let j = 0; j <= 8; j++) {
//     if (i + j >= 8) {
//       a = a + '*';
//     } else {
//       a = a + ' ';
//     }
//   }
//   console.log(a);
// }

// let a = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     a = a + '*';
//   }
//   a = a + '\n';
// }
// console.log(a);

// for (let i = 0; i < 10; i++) {
//   let a = '';

//   for (let j = 0; j <= i; j++) {
//     if (i % 2 == 0) {
//       if (i + j >= 4 && (i + j) % 2 == 0 && j - i >= 0 && j - (i % 2) != 0) {
//         a = a + '*';
//       } else {
//         a = a + ' ';
//       }
//     }
//   }
//   console.log(a);
// }
