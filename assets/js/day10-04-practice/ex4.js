let n = 5;
for (let i = 1; i <= n; i++) {
  let a = '';
  for (let j = 1; j <= i; j++) {
    a = a + ' ';
  }
  for (let k = 1; k <= n + 1 - i; k++) {
    a = a + '*';
  }
  console.log(a);
}
// output:
// *****
//  ****
//   ***
//    **
//     *
