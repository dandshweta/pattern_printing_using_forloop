//@description{print star pattern}
// Step1-Take empty variable let a="" to store number.
// step2-iterate 2 loop upto less than 6.
// step2.1-in second loop if condition is (i === j || j === 0 || i === row - 1) else blank.
// step3-print star Pattern.

function pattern(row, col) {
  let result = '';
  for (let i = 0; i < row; i++) {
    let a = '';
    for (let j = 0; j < col; j++) {
      if (i === j || j === 0 || i === row - 1) {
        a = a + '*';
      } else {
        a = a + ' ';
      }
    }
    result = result + a + '\n';
  }
  return result;
}
console.log(pattern(6, 6));
// output:
// *
// **
// * *
// *  *
// *   *
// ******
