// Before
function oldWay(a, b) {
  a = a || 1;
  b = b || 10;
  return a * b;
}

oldWay(); // 10
oldWay(12, 0); // 120 (0 is falsy)

// Default values
function foo(a = 1, b = 10) {
  return a * b;
}

foo(); // 10
foo(12, 0); // 0


// Default value expressions
var a = 10;
function fooTwo(a = 1 * 5, b = 10) {
  return a * b;
}

fooTwo() // 50

const config = {
  get: () => {
    return 'http://fromtheconfig';
  }
}

function urlBuilder(host = config.get('host'), port = 27017) {
  return host + ':' + port;
}
urlBuilder(); // http://fromtheconfig:27017
urlBuilder('http://fromhere'); // http://fromhere:27017
urlBuilder(undefined, 80); // http://fromtheconfig:80


function madness(a = (function(){ return 10 }()), b = 5) {
  return a * b;
}

madness(); // 50
