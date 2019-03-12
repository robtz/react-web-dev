// Terminal command:
// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch 

// ===> VAR can be reasigned and redifined. 
// ==> Reasigned: Change the value of the variable.
// ==> Redifined: Define the var and assign a value to it.
var nameVar = 'Andrew';
// => Reasign
nameVar = 'Julie';
// => Redifine
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// ===> LET can be reasigned but can't be redifined.
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// ===> CONST can't be reasigned and can't be redifined.
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// ===> VAR, LET and CONST are function level scope.
function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

// ==> LET and CONST are also block level scope which means that they can't be used outside of the block. 
/*const fullName = 'Jen Mead';
if(fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}
//Undefined because the firstName was declared inside the if block level. 
console.log(firstName);*/

// ==> SOLUTION: Define the firstName variable outside of the if block and reasign the value inside the if block.
const fullName = 'Jen Mead';
let firstName = '';
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
//Undefined because the firstName was declared inside the if block level. 
console.log(firstName);