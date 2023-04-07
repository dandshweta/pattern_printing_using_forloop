// @description {print # pattern}
// Step1-Take empty variable let a="" to store star.
// step2-iterate the loop upto less than 5
// step2.1-in second loop condition is j<5-i.
// step3-print star Pattern.

function print() {
  for (let i = 0; i <= 5; i++) {
    let a = '';
    for (let j = 0; j < 5 - i; j++) {
      a = a + '#';
    }
    console.log(a);
  }
}
print();

// function print() {
//   for (let i = 5; i >= 1; i--) {
//     let a = '';
//     for (let j = 1; j <= i; j++) {
//       a += '#';
//     }
//     console.log(a);
//   }
// }
// print();

//output:

//#####
//####
//###
//##
//#
