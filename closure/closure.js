var outer = function(x) {
  return function(y) {
    return x + y;
  }
}

var inner = outer(1);

print(inner(2));
