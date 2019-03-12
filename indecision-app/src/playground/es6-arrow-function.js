// Terminal command:
// babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch 

//ES5 Functions
// The functions can be named.
function square(x) {
    return x * x;
};
console.log(square(3));

//ES6 Functions
//Regular Arrow Function
// The functions always are anonymous and have to be assigned to a variable.
const squareArrow = (x) => {
    return x * x;
}
console.log(squareArrow(9));

//Arrow Function Expression Syntax (Shorthand Syntax)
// The expression is implicitly returned.
const squareArrowS = (x) => x * x;
console.log(squareArrowS(12));

//COURSE CHALLENGE TASK #4

//Regular Arrow Function
const getFirstName = (fullName) => {
    const firstName = fullName.split(' ')[0];
    return firstName;
}
console.log(getFirstName('Mike Smith'));

//Shorthand Arrow Function 
const getFirstNameS = (fullName) => fullName.split(' ')[0];
console.log(getFirstNameS('Mike Smith'));