// @description{print number pattern}
// Step1-Take empty variable let a="" to store number.
// step2-iterate 2 loop upto less than 5.
// step2.1-in second loop initialization is j=i.
// step3-print number Pattern.
function print() {
  for (let i = 1; i <= 5; i++) {
    let a = '';
    for (let j = i; j <= 5; j++) {
      a = a + j;
    }
    console.log(a);
  }
}
print();

// output:
// 12345;
// 2345;
// 345;
// 45;
// 5;
