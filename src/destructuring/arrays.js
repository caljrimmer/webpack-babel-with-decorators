var weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// var monday = weekDays[0];
// var tuesday = weekDays[1];
// var wednesday = weekDays[2];
// var thursday = weekDays[3];
// var friday = weekDays[4];

var [monday, tuesday, wednesday, thursday, friday] = weekDays;
console.log(monday);





var [a, , b] = [1, 2, 3];
console.log(a, b); // 1, 3

var foo = () => {
  return [1, 2, 3];
};

var [a, b] = foo();
console.log(a, b); // 1 2





var a = 1, b = 2;
[b, a] = [a, b];
console.log(a, b); // 2, 1




var [a=1, b=2, c=3] = [5, 10];
console.log(a, b, c); // 5, 10, 3
