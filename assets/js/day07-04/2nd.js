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
