const myArrowFunction = (x, y) => {}

const singleParamArrowFunction = x => {}

(() => {
  console.log('self invoked');
})();

const argumentScope = (...args) => {
  console.log(args);
}

argumentScope(); // global args












// this binding
function MyCounter () {
    this.number = 0;
}

MyCounter.prototype.count = function () {
    var self = this;
    setInterval(function () {
        self.number++;
    }, 1000);
}

var count = new MyCounter();
count.count();
















const first = new Promise((res, rej) => res());
const second = new Promise((res, rej) => res());

const sweet = (a, b, callback) =>
	a
		.then(b)
		.then(callback);

sweet(first, second, function () {
	console.log('callback!');
});
