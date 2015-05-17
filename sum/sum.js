function sum(a, b) {
  if(b === undefined) {
    return function(c) { return a + c }
  } else {
    return a + b;
  }
}

print('Sum 1,2');
print(sum(1,2));

print('Sum (1)(2)');
print(sum(1)(2));
