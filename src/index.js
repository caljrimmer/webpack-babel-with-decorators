import * as arrayES6 from './arrays';
import { PhoneBox, CellPhone } from './decorators';
import { Model, View, ExpireView } from './classes';

const cars = {
    ford: 'american',
    audi: 'german',
    saab: 'swedish'
};

const trucks = {
    leyland : 'British'
};

const vehicles = { ...cars, trucks};
console.log(vehicles);

const newVehicles = { ...vehicles, ford: 'japanese'};
console.log(newVehicles);

//Object.assign({}, cars, trucks);