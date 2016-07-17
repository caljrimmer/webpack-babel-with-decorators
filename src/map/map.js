/**Switch**/
export function getSwitchDrink(type) {
    let drink;
    switch(type) {
        case 'coke':
            drink = 'Coke';
            break;
        case 'pepsi':
            drink = 'Pepsi';
            break;
        default:
            drink = 'Unknown drink!';
    }
    return drink;
}
console.log(getSwitchDrink('coke')); // 'Coke'

/**if statements**/
export function getIfDrink(type) {
    let drink;
    if (type === 'coke') {
        drink = 'Coke';
    } else if (type === 'pepsi') {
        drink = 'Pepsi';
    } else {
        drink = 'Unknown drink!';
    }
    return drink;
}
console.log(getIfDrink('coke')); // 'Coke'

/**Object**/
export function getObjectDrink(type) {
    const drinks = {
        'coke': 'Coke',
        'pepsi': 'Pepsi',
        'default': 'Unknown drink!'
    };
    return drinks[type] || drinks['default'];
}
console.log(getDrink('coke')); // 'Coke'

/**Map**/
export function getMapDrink(type) {
    const drinks = new Map();
    drinks.set('coke','Coke');
    drinks.set('pepsi','Pepsi');
    drinks.set('default','Unknown drink!');
    return drinks.get(type) || drinks.get('default');
}
console.log(getMapDrink('coke'));

/*****
* DEMO
******
******

    console.log(drinks); //Map logged in Console
    console.log(drinks.size);
    console.log(drinks.keys());
    console.log(drinks.values());
    console.log(drinks.has('orange'));

    drinks.forEach((k,v) => {
        console.log(k,v)
    });

    const drinksKeys = drinks.keys();
    for(let k of drinksKeys) {
        console.log(k);
    }

    const drinksKeyArray = [...drinksKeys];
    console.log(drinksKeyArray)

    drinks.clear();
    console.log(drinks.size) //0

*/