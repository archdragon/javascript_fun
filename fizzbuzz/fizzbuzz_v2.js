function isFizz(number) {
  return (number % 3 == 0);
}

function isBuzz(number) {
  return (number % 5 == 0);
}

for(number=1; number < 100; number++) {
  var text = '';
  if(isFizz(number)) { text += 'Fizz'; }
  if(isBuzz(number)) { text += 'Buzz'; }
  if(text == '')     { text = number; }
  print(text);
}
