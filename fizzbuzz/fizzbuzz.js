for(number=1; number < 100; number++) {
  var text = '';
  if(number % 3 == 0) {
    text += 'Fizz';
  }
  if(number % 5 == 0) {
    text += 'Buzz';
  }
  if(text == '') {
    text = number;
  }
  print(text);
}
