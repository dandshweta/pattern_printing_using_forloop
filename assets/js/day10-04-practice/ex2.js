let n = 5;

for (let i = 1; i <= n; i++) {
  let a = '';
  for (let j = 1; j <= n + 1 - i; j++) {
    a = a + '*';
  }

  console.log(a);
}
// output:
// *****
// ****
// ***
// **
// *
