/**
* Class Decorator
*/

function addCost(sum) {
    return function decorator(classDecorator) {
        classDecorator.prototype.cost = sum;
        classDecorator.prototype.ring = () => {
            alert('beep-beep-beep');
        };
    }
}

@addCost(50)
export class PhoneBox {
    constructor() {
        this.model = "Big Red";
        this.size = 100;
    }
}

/**
* Method Decorator
*/

function isProtected(target, name, methodDecorator) {
    methodDecorator.writable = false;
    return methodDecorator;
}

function isDepreciated(target, name, methodDecorator) {
    console.warn(`${name} is deprecated`);
    return methodDecorator;
}

@addCost(10)
export class CellPhone {

    constructor() {
        this.model = "iPhone";
        this.size = 1;
    }

    @isProtected
    _internal() {
        const pin = 1234
        return pin;
    }

    @isDepreciated
    oldMethod() {
        return 'steam power';
    }
}

/*****
* DEMO
******
******

    import { PhoneBox, CellPhone } from './decorators';

    window.phoneBox = new decorators.PhoneBox();
    console.log(phoneBox.cost)
    console.log(phoneBox.ring())

    window.cellPhone = new decorators.CellPhone();
    console.log(phoneBox.cost)
    console.log(phoneBox._internal)
    phoneBox._internal = () => 'changed';
    console.log(phoneBox._internal)
    
*/