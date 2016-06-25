export const cars = [
    { color:'red', engineSize: 1.0},
    { color:'blue', engineSize: 2.0},
    { color:'green', engineSize: 3.0}
];

/* _.find */

export const find = cars.find(x => {
    return x.color === 'red';
});

/* _.map */

export const map = cars.map(x => {
    x.make = 'ford';
    return x;
});

/* _.findIndex */

export function findCarIndex (needle) {
    const key = Object.keys(needle)[0];
    const value = needle[key];
    return cars.findIndex(x => x[key] === value);
}

/* _.reject */

export function removeCar (needle) {
    const index = findCarIndex(needle);
    return [
        ...cars.slice(0,index),
        ...cars.slice(index + 1),
    ];
};

/* push() */
export function addCarLast (newCar) {
    return [...cars, newCar];
};

/* unshift() */
export function addCarFirst (newCar) {
    return [newCar, ...cars];
};

/**
* Replace car in collection
*/

export function replaceCar (needle, newCar) {
    const index = findCarIndex(needle);
    return [
        ...cars.slice(0,index),
        newCar,
        ...cars.slice(index + 1)
    ];
};