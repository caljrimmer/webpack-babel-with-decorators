/**Set**/

const drinks = new Set();
drinks.add('coke');
drinks.add('pepsi');

/*****
* DEMO
******
******

    console.log(drinks.size);
    console.log(drinks.has('coke'));

    for(let k of drinks) {
        console.log(k);
    }

    console.log([...drinks])

    drinks.clear();
    console.log(drinks.size) //0

*/