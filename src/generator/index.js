/**Simple Iterator*/
function *count() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

const newcount = count();
console.log(newcount.next());
console.log(newcount.next());
console.log(newcount.next());
console.log(newcount.next());

for (var v of count()) {
    console.log( v );
}

console.log([...count()])

/**Infinite Iterator**/
function *stateful(x) {
    while(true) {
        x = x * 2;
        yield x;
    }
}

const state = stateful(1);
state.next(); // {value: 2, done: false}
state.next(); // {value: 4, done: false}
state.next(); // {value: 8, done: false}

/**Async Iterator**/
function firstName() {
    setTimeout(function(){
        gen.next('Don')
    }, 1000);
}

function lastName() {
    setTimeout(function(){
        gen.next('Cheadle')
    }, 1000);
}

function *sayHello() {
    var a = yield firstName();
    var b = yield lastName();
    console.log(a, b);
}

var gen = sayHello();
gen.next();

/**Promise Iterator**/
function getNumber() {
    const get = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(Math.random()), 500);
    }).then((data) => {
        theNumber.next(data);
    });
}

function *showNumber() {
    const num1 = yield getNumber();
    const num2 = yield getNumber();
    const num3 = yield getNumber();
    console.log(`sum equals ${num1 + num2 + num3}`);
}

const theNumber = showNumber();
theNumber.next();

