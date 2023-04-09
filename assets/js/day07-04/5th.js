function pattern(row, col) {
  let result = '';
  for (let i = 0; i < row; i++) {
    let a = '';
    for (let j = 0; j < col; j++) {
      if (i === 0 || i === row - 1 || j === 0 || j === col - 1) {
        a = a + '*';
      } else {
        a = a + ' ';
      }
    }
    result = result + a + '\n';
  }
  return result;
}
console.log(pattern(5, 5));
// output:
// *****
// *   *
// *   *
// *   *
// *****
