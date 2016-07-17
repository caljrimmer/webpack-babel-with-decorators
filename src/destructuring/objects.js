var { a, b } = { a: 10, b: 20 };
console.log(a, b); // 10, 20




var { a: hello, b } = { a: 10, b: 20 };
console.log(hello); // 10





var { a, b, c=0 } = { a: 10, b: 20 };
console.log(a, b, c); // 10, 20, 0





var request = {
  path: '/endpoint',
  url: '/endpoint?a=b',
  query: 'search=xyz',
  params: {
    search: 'xyz'
  }
};

// before
// var url = request.url;
// var searchQuery = request.params.search;


var { url: url, params: {search: searchQuery} } = request;
console.log(searchQuery); // xyz
console.log(url); // xyz
