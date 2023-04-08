// @description{ square star pattern}
// Step1-iterate two loops upto less than 5
// Step1-Take empty variable let a="" to store star.
// step3-print star Pattern.
function print() {
  for (let i = 0; i < 5; i++) {
    let a = '';
    for (let j = 0; j < 5; j++) {
      a = a + '*';
    }
    console.log(a);
  }
}
print();

// output:
// *****
// *****
// *****
// *****
// *****
