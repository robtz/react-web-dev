// Terminal command:
// babel src/playground/es6-arrow-function-2.js --out-file=public/scripts/app.js --presets=env,react --watch 

// ==> Arguments object are not available with ES6 Arrow Functions.
// The arguments object works fine here!
const add = function (a, b) {
    console.log(arguments);
    return a + b; 
};
console.log(add(55, 1));

// The arguments object doesn't works fine here!
const addArrow = (a, b) => {
    //console.log(arguments);
    return a + b;
};
console.log(addArrow(60, 1));

// ==> 'This' keyword doesn't bound wit it's own object using ES6 Arrow Functions.

//  With 'this', it's not going to look beyond its own execution context for another 'this' if its one happens to be undefined. 
//  However, if a function doesn't find a variable within its execution context, then it looks outside to see if the variable is declared there, which it is in the case of 'that = this'. 
const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function () {
        const that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();

//Arrow functions resolve 'this' like variables resolve their values. 
//If it doesn't exist in the current scope, then it looks up the scope chain until it finds one.
const userArrow = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
userArrow.printPlacesLived();

//Method Definition Syntax
//This is a kind of mix of the two above methods because the function word dissapear and the 'this' can be used with the arrow function. 
const userMethod = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        const that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
userMethod.printPlacesLived();

//Map function instead of forEach.
const userMap = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(userMap.printPlacesLived());

const multiplier = {
    numbers: [1, 2 , 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());