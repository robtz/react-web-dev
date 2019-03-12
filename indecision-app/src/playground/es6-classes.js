// Terminal command:
// babel src/playground/es6-classes.js --out-file=public/scripts/app.js --presets=env,react --watch 

// The classes make the code reusable.

// Convention #1: The name of the class has to start with an uppercase. (Car, People, etc...)

class Person {

    // Default method: This method will be executed when an instance of Person was created.
    // In the attributes, we can find default attributes that are used if they are not specified. 
    //  attributeName = defaultAttributeValue
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    // Methods
    // Here we are using templates for the string. Initially, the string has to be inside ` ` characters.
    // In order to use the attributes of the class, we have to write like this: ${this.attributeName}
    getGreeting() {
        return `Hi. I'm ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

// 'Extends' word is used to inherit the properties of another class. 
// In this case, a student is a person, so the student inherit all the behaviour of a person.
class Student extends Person {

    constructor(name, age, major) {
        // The 'super' word allows to use the constructor of the parent. 
        // In this case, we are passing the name and age parameters to the person constructor. 
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        // If the major is undefined, the !! will show false. Otherwise, is true.
        return !!this.major;
    }

    getDescription() {
        // This allows to call the getDescription method of the parent and receive the original message. 
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

//Challenge Task
class Traveler extends Person {

    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        greeting += this.homeLocation ? ` I'm visiting from ${this.homeLocation}.` : '';
        return greeting;
    }
}

//Student Test.
const other = new Student();
console.log(other.getDescription());

const me = new Student('José Pliego', 26, 'Computer Science');
console.log(me.getDescription());

//Traveler Test.
const travelerOne = new Traveler(undefined, undefined, 'Nowhere');
console.log(travelerOne.getGreeting());

const travelerTwo = new Traveler('Susana', 35, 'México');
console.log(travelerTwo.getGreeting());
