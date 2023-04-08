// @Description{ Number pattern}
// Step1-Take empty variable let a="" to store number.
// step2-iterate 2 loop upto less than 5
// step2.1-in second loop condition is j<=6-1.
// step3-print number Pattern.

// function print() {
//   for (let i = 1; i <= 5; i++) {
//     let a = '';
//     for (let j = 1; j <= 6 - i; j++) {
//       a = a + i;
//     }
//     console.log(a);
//   }
// }
// print();

function print() {
  for (let i = 1; i <= 5; i++) {
    let a = '';
    for (let j = i; j <= 5; j++) {
      a = a + i;
    }
    console.log(a);
  }
}
print();

// output:

// 11111
// 2222
// 333
// 44
// 5
