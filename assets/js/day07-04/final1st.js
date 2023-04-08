function add() {
  for (let i = 0; i < 5; i++) {
    let a = '';
    for (let j = 0; j < 5; j++) {
      if (j < 4 - i) {
        a = a + ' ';
      } else {
        a = a + '*';
      }
    }
    // console.log(a);
  }

  for (let p = 0; p < 5; p++) {
    let b = '';
    for (let q = 0; q <= p; q++) {
      b = b + '*';
    }
    // console.log(a);
  }
  result = a + b;
  return result;
}
add();
