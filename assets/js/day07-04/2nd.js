//@description {star pattern printing}
//step1: Take two loop for row and column
//step2: Iterate that loops upto less than 5
//step3: Use if condition (j<4-i) for spacing
//step3: Take a variable for concat star
//step4: print the pattern.

for (let i = 0; i < 5; i++) {
  let a = '';
  for (let j = 0; j < 5; j++) {
    if (j < 4 - i) {
      a = a + ' ';
    } else {
      a = a + '*';
    }
  }
  console.log(a);
}

//output:
//        *
//       **
//      ***
//     ****
//    *****
