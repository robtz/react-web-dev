// Into this course, we are going to use new syntax class properties to handle state values and event handlers.
// The regular functions are going to be used in the built react methods and life cycle methods.

// Old Syntax Classes
// It's necessary create a constructor function and setting this.whatever equal to some value.
class OldSyntax {
    constructor() {
        this.name = "Mike";
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return `Hi! My name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax);
console.log(getGreeting());

// New Syntax
// Here it isn't necessary to declare a constructor and declare the properties inside it.
// The properties can be declared directly as a key value pair and they don't need the word let or const to be defined.
// Arrow functions doesn't bind with their own scope.
class NewSyntax {
    name = "Jen";
    getGreeting = () => {
        return `Hi! My name is ${this.name}`;
    }
} 
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax);
console.log(newGetGreeting());

