/**Array Spread**/

const parts = ['shoulders', 'knees'];

/*push*/
const lyricsFirst = [...parts, 'toes'];

/*unshift*/
const lyricsLast = ['toes', ...parts];

/*splice*/
const lyricsMiddle = ['head', ...parts, 'and', 'toes'];

/*concat*/
const bones = ['spine', 'skull']
const grissle = [...bones, ...parts];


/** Function Param Spread **/

export function sentence(...words) {
    return words.join(' ');
}

export function sum(...nums) {
    return nums.reduce((prev, curr) => prev + curr);
}

/** Object Spread **/

const cars = {
    ford: 'american',
    audi: 'german',
    saab: 'swedish'
};

const trucks = {
    leyland : 'British'
};

/* Object.assign */
const vehicles = { ...cars, trucks};
const newVehicles = { ...vehicles, ford: 'japanese'};

/*****
* DEMO
******
******

    import {sum, sentence} from './spread';

    console.log(sentence('this', 'is', 'okay'));
    console.log(sum(1,2,3))

    console.log(vehicles);
    console.log(newVehicles);

*/
