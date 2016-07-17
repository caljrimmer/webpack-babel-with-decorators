const cars = [
    { color:'red', engineSize: 1.0},
    { color:'red', engineSize: 1.6},
    { color:'blue', engineSize: 2.0},
    { color:'green', engineSize: 3.0}
];

/* Array.find */

const find = cars.find(x => {
    return x.color === 'red';
});

/* Array.map */

const map = cars.map(x => {
    x.make = 'ford';
    return x;
});

/* Array.filter */

cars.filter(c => c.color === 'red');

/* Array.findIndex */

export function findCarIndexByColor(color) {
  cars.findIndex(c => c.color === color);
}

export function findCarIndex (needle) {
    const key = Object.keys(needle)[0];
    const value = needle[key];
    return cars.findIndex(x => x[key] === value);
}

/* Array.reject */

function removeCar (needle) {
    const index = findCarIndex(needle);
    return [
        ...cars.slice(0,index),
        ...cars.slice(index + 1),
    ];
};

/* push() */
function addCarLast (newCar) {
    return [...cars, newCar];
};

/* unshift() */
function addCarFirst (newCar) {
    return [newCar, ...cars];
};

/**
* Replace car in collection
*/

function replaceCar (needle, newCar) {
    const index = findCarIndex(needle);
    return [
        ...cars.slice(0,index),
        newCar,
        ...cars.slice(index + 1)
    ];
};

/*****
* DEMO
******
******


    console.log(find)
    console.log(map)

    findCarIndex({color:red});
    console.log(cars);

    removeCar({color:blue});
    console.log(cars);

    addCarFirst({
        color:'orange'
        size: 1.3
    });
    console.log(cars);

    addCarLast({
        color:'blue'
        size: 4.3
    });
    console.log(cars);

    replaceCar({color:green},{
        color: 'purple',
        size: 3.4
    });
    console.log(cars);

*/
