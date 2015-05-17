// FizzBuzz function
function isFizz(number) {
  return (number % 3 == 0);
}

function isBuzz(number) {
  return (number % 5 == 0);
}

function fizzBuzzText(number) {
  var text = '';
  if(isFizz(number)) { text += 'Fizz'; }
  if(isBuzz(number)) { text += 'Buzz'; }
  if(text == '')     { text = number; }
  return text;
}

// Run FizzBuzz
for(number=1; number < 100; number++) {
  print(fizzBuzzText(number));
}

// Testing
function assert(expected, result) {
  if(expected !== result) {
    throw Error('Assert failed! Expected: ' + expected + ' Got: ' + result);
  } else {
    return true;
  }
}

assert('FizzBuzz', fizzBuzzText(15));
assert('FizzBuzz', fizzBuzzText(30));
assert('Fizz',     fizzBuzzText(3));
assert('Fizz',     fizzBuzzText(9));
assert('Buzz',     fizzBuzzText(5));
assert('Buzz',     fizzBuzzText(50));
