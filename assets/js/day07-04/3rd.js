for (var i = 1; i <= 5; i++) {
  var row = '';
  for (var j = 1; j <= 5; j++) {
    if (j <= 5 - i) {
      row += ' ';
    } else {
      row += '*';
    }
  }
  console.log(row);
}
