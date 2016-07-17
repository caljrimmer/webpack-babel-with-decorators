const first = new Promise((res, rej) => res());
const second = new Promise((res, rej) => res());

const sweet = (a, b, callback) =>
	a
		.then(b)
		.then(callback);

sweet(first, second, function () {
	console.log('callback!');
});
